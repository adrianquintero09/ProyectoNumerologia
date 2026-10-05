import { Router } from "express";
import { 
  crearPerfilNumerologico, 
  listarPerfilesNumerologicos, 
  obtenerPerfilNumerologico, 
  actualizarPerfilNumerologico, 
  eliminarPerfilNumerologico 
} from "../controllers/NumerologyProfileControllers.js";

import { 
  crearNumerologyProfileValidator, 
  actualizarNumerologyProfileValidator, 
  idValidator 
} from "../Validators/NumerologyValidator.js";

import { validarCampos } from "../middlewares/Validar.js";
import { ValidarTKN } from "../middlewares/Tokens.js";

const router = Router();

router.use(ValidarTKN);

router.get("/", listarPerfilesNumerologicos);
router.get("/:id", idValidator, validarCampos, obtenerPerfilNumerologico);
router.post("/", crearNumerologyProfileValidator, validarCampos, crearPerfilNumerologico);
router.put("/:id", idValidator, actualizarNumerologyProfileValidator, validarCampos, actualizarPerfilNumerologico);
router.delete("/:id", idValidator, validarCampos, eliminarPerfilNumerologico);

export default router;