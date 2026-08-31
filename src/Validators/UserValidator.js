import { body } from "express-validator";


export const crearUsuarioValidator = [
  body("nombre_completo")
    .trim()
    .notEmpty()
    .withMessage("El nombre completo es obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre debe tener entre 2 y 100 caracteres"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Debe proporcionar un correo electrónico válido")
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres"),

  body("fecha_nacimiento")
    .notEmpty()
    .withMessage("La fecha de nacimiento es obligatoria")
    .isISO8601()
    .withMessage("La fecha de nacimiento debe tener un formato ISO8601 (YYYY-MM-DD)")
    .custom((valor) => {
      if (new Date(valor) > new Date()) {
        throw new Error("La fecha de nacimiento no puede ser una fecha futura");
      }
      return true;
    }),
];


export const actualizarUsuarioValidator = [
  body("nombre_completo")
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre debe tener entre 2 y 100 caracteres"),

  body("email")
    .optional()
    .trim()
    .isEmail()
    .withMessage("Debe proporcionar un correo electrónico válido")
    .normalizeEmail(),

  body("password")
    .optional()
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres"),

  body("fecha_nacimiento")
    .optional()
    .isISO8601()
    .withMessage("La fecha de nacimiento debe tener un formato ISO8601 (YYYY-MM-DD)")
    .custom((valor) => {
      if (valor && new Date(valor) > new Date()) {
        throw new Error("La fecha de nacimiento no puede ser una fecha futura");
      }
      return true;
    }),
];