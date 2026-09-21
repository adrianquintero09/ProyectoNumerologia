import { Router } from "express";
import {
  crearUsuario,
  listarUsuarios,
  obtenerUsuario,
  loginUsuario,
  actualizarUsuario,
  eliminarUsuario,
} from "../controllers/UserControllers.js";

import {
  loginUserValidator,
  crearUsuarioValidator,
  actualizarUsuarioValidator,
  idValidator,
} from "../Validators/UserValidator.js";

import { validarCampos } from "../middlewares/Validar.js";
import { ValidarTKN } from "../Middlewares/Tokens.js";

const router = Router();


router.post("/login", loginUserValidator, validarCampos, loginUsuario);


router.post("/", crearUsuarioValidator, validarCampos, crearUsuario);
router.get("/", ValidarTKN, listarUsuarios);
router.get("/:id", ValidarTKN, idValidator, validarCampos, obtenerUsuario);
router.put("/:id", ValidarTKN, idValidator, actualizarUsuarioValidator, validarCampos, actualizarUsuario);
router.delete("/:id", ValidarTKN, idValidator, validarCampos, eliminarUsuario);

export default router;