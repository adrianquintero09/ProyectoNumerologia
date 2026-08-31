import { Router } from "express";
import {
  crearPerfilNumerologico,
  listarPerfilesNumerologicos,
  obtenerPerfilNumerologico,
  actualizarPerfilNumerologico,
  eliminarPerfilNumerologico,
} from "../controllers/NumerologyProfileControllers.js";


import { ValidarTKN } from "../middlewares/validar-jwt.js";
import { actualizarCompatibilityMatchValidator } from "../middlewares/validar-match.js";
import { validarCampos } from "../middlewares/validar-campos.js";

const router = Router();


router.use(ValidarTKN);

router.post("/", crearPerfilNumerologico);
router.get("/", listarPerfilesNumerologicos);
router.get("/:id", obtenerPerfilNumerologico);


router.put(
  "/:id",
  [
    actualizarCompatibilityMatchValidator,
    validarCampos
  ],
  actualizarPerfilNumerologico
);

router.delete("/:id", eliminarPerfilNumerologico);

export default router;