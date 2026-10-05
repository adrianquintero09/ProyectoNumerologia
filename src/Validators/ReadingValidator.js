import { body, param } from "express-validator";

export const crearReadingValidator = [
  body("usuario")
    .notEmpty().withMessage("El usuario es obligatorio")
    .isMongoId().withMessage("El usuario debe ser un ObjectId de MongoDB válido"),

  body("prompt_enviado")
    .trim()
    .notEmpty().withMessage("El prompt enviado es obligatorio")
    .isString().withMessage("El prompt enviado debe ser una cadena de texto"),

  body("respuesta_generada")
    .trim()
    .notEmpty().withMessage("La respuesta generada es obligatoria")
    .isString().withMessage("La respuesta generada debe ser una cadena de texto"),

  body("tipo_lectura")
    .trim()
    .notEmpty().withMessage("El tipo de lectura es obligatorio")
    .isIn(["diaria", "general", "anual"]).withMessage("El tipo de lectura debe ser 'diaria', 'general' o 'anual'")
];

export const actualizarReadingValidator = [
  body("usuario")
    .optional()
    .isMongoId().withMessage("El usuario debe ser un ObjectId de MongoDB válido"),

  body("prompt_enviado")
    .optional()
    .trim()
    .notEmpty().withMessage("El prompt enviado no puede estar vacío")
    .isString().withMessage("El prompt enviado debe ser una cadena de texto"),

  body("respuesta_generada")
    .optional()
    .trim()
    .notEmpty().withMessage("La respuesta generada no puede estar vacía")
    .isString().withMessage("La respuesta generada debe ser una cadena de texto"),

  body("tipo_lectura")
    .optional()
    .trim()
    .notEmpty().withMessage("El tipo de lectura no puede estar vacío")
    .isIn(["diaria", "general", "anual"]).withMessage("El tipo de lectura debe ser 'diaria', 'general' o 'anual'")
];

export const idValidator = [
  param("id")
    .isMongoId().withMessage("El id proporcionado no es un ObjectId válido de MongoDB")
];