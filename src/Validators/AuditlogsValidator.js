import { body } from "express-validator";

export const crearAuditLogValidator = [
  body("usuario")
    .optional()
    .isMongoId()
    .withMessage("El usuario debe ser un ObjectId válido de MongoDB"),

  body("endpoint")
    .trim()
    .notEmpty()
    .withMessage("El endpoint es obligatorio")
    .isString()
    .withMessage("El endpoint debe ser una cadena de texto"),

  body("metodo")
    .trim()
    .notEmpty()
    .withMessage("El método HTTP es obligatorio")
    .isIn(["GET", "POST", "PUT", "PATCH", "DELETE"])
    .withMessage("El método HTTP no es válido"),

  body("status_code")
    .notEmpty()
    .withMessage("El código de estado (status_code) es obligatorio")
    .isInt({ min: 100, max: 599 })
    .withMessage("El status_code debe ser un entero entre 100 y 599"),

  body("timestamp")
    .optional()
    .isISO8601()
    .withMessage("La fecha debe tener un formato ISO8601 válido"),
];