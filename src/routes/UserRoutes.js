import { Router } from "express";
import {
  crearUsuario,
  listarUsuarios,
  obtenerUsuario,
  actualizarUsuario,
  eliminarUsuario,
} from "../controllers/UserControllers.js";

import {
  crearUsuarioValidator,
  actualizarUsuarioValidator,
  idValidator,
} from "../Validators/UserValidator.js";

import { validarCampos } from "../middlewares/Validar.js";
import { ValidarTKN } from "../middlewares/Tokens.js";

const router = Router();

router.post("/", [crearUsuarioValidator, validarCampos], crearUsuarioValidator);
router.get("/", ValidarTKN, listarUsuarios);
router.get("/:id", [ValidarTKN, idValidator, validarCampos], obtenerUsuario);
router.put("/:id", [ValidarTKN, idValidator, actualizarUsuarioValidator, validarCampos], actualizarUsuarioValidator);
router.delete("/:id", [ValidarTKN, idValidator, validarCampos], eliminarUsuario);

export default router;