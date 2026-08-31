import { body } from "express-validator";

export const crearCompatibilityMatchValidator = [
  body("usuario_1")
    .notEmpty()
    .withMessage("El usuario_1 es obligatorio")
    .isMongoId()
    .withMessage("El usuario_1 debe ser un ObjectId válido de MongoDB"),

  body("usuario_2")
    .notEmpty()
    .withMessage("El usuario_2 es obligatorio")
    .isMongoId()
    .withMessage("El usuario_2 debe ser un ObjectId válido de MongoDB")
    .custom((valor, { req }) => {
      if (valor === req.body.usuario_1) {
        throw new Error("El usuario_2 no puede ser igual al usuario_1");
      }
      return true;
    }),

  body("puntaje")
    .notEmpty()
    .withMessage("El puntaje es obligatorio")
    .isFloat({ min: 0, max: 100 })
    .withMessage("El puntaje debe ser un número entre 0 y 100"),

  body("interpretacion")
    .trim()
    .notEmpty()
    .withMessage("La interpretación es obligatoria")
    .isString()
    .withMessage("La interpretación debe ser una cadena de texto"),

  body("fecha")
    .optional()
    .isISO8601()
    .withMessage("La fecha debe tener un formato ISO8601 válido"),
];