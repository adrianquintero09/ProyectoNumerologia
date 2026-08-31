import { Router } from "express";
import {
  crearUsuario,
  listarUsuarios,
  obtenerUsuario,
  actualizarUsuario,
  eliminarUsuario,
} from "../controllers/UserControllers.js";


import { ValidarTKN } from "../middlewares/validar-jwt.js";
import {
  crearUsuarioValidator,
  actualizarUsuarioValidator
} from "../middlewares/validar-usuario.js";
import { validarCampos } from "../middlewares/validar-campos.js";

const router = Router();


router.post(
  "/",
  [
    crearUsuarioValidator,
    validarCampos
  ],
  crearUsuario
);


router.use(ValidarTKN);


router.get("/", listarUsuarios);
router.get("/:id", obtenerUsuario);


router.put(
  "/:id",
  [
    actualizarUsuarioValidator,
    validarCampos
  ],
  actualizarUsuario
);


router.delete("/:id", eliminarUsuario);

export default router;