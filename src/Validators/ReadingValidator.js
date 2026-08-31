import { body } from "express-validator";


export const crearReadingValidator = [
  body("usuario")
    .notEmpty()
    .withMessage("El usuario es obligatorio")
    .isMongoId()
    .withMessage("El usuario debe ser un ObjectId válido de MongoDB"),

  body("prompt_enviado")
    .trim()
    .notEmpty()
    .withMessage("El prompt enviado es obligatorio")
    .isString()
    .withMessage("El prompt enviado debe ser una cadena de texto"),

  body("respuesta_generada")
    .trim()
    .notEmpty()
    .withMessage("La respuesta generada es obligatoria")
    .isString()
    .withMessage("La respuesta generada debe ser una cadena de texto"),

  body("tipo_lectura")
    .trim()
    .notEmpty()
    .withMessage("El tipo de lectura es obligatorio")
    .isIn(["diaria", "general", "anual"])
    .withMessage("El tipo de lectura debe ser: diaria, general o anual"),

  body("fecha")
    .optional()
    .isISO8601()
    .withMessage("La fecha debe tener un formato ISO8601 válido"),
];

export const actualizarReadingValidator = [
  body("usuario")
    .optional()
    .isMongoId()
    .withMessage("El usuario debe ser un ObjectId válido de MongoDB"),

  body("prompt_enviado")
    .optional()
    .trim()
    .isString()
    .withMessage("El prompt enviado debe ser una cadena de texto"),

  body("respuesta_generada")
    .optional()
    .trim()
    .isString()
    .withMessage("La respuesta generada debe ser una cadena de texto"),

  body("tipo_lectura")
    .optional()
    .trim()
    .isIn(["diaria", "general", "anual"])
    .withMessage("El tipo de lectura debe ser: diaria, general o anual"),

  body("fecha")
    .optional()
    .isISO8601()
    .withMessage("La fecha debe tener un formato ISO8601 válido"),
];