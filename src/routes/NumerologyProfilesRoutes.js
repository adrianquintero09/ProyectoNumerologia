import { Router } from "express";
import { 
  crearNumerologyProfile, 
  listarNumerologyProfiles, 
  obtenerNumerologyProfile, 
  actualizarNumerologyProfile, 
  eliminarNumerologyProfile 
} from "../controllers/NumerologyProfileControllers.js";
import { 
  crearNumerologyProfileValidator, 
  actualizarNumerologyProfileValidator, 
  idValidator 
} from "../validators/NumerologyValidator.js";
import { validarCampos } from "../middlewares/Validar.js";
import { ValidarTKN } from "../middlewares/Tokens.js";

const router = Router();

router.get("/", listarNumerologyProfiles);
router.get("/:id", idValidator, validarCampos, obtenerNumerologyProfile);

router.post("/", ValidarTKN, crearNumerologyProfileValidator, validarCampos, crearNumerologyProfile);
router.put("/:id", ValidarTKN, idValidator, actualizarNumerologyProfileValidator, validarCampos, actualizarNumerologyProfile);
router.delete("/:id", ValidarTKN, idValidator, validarCampos, eliminarNumerologyProfile);

export default router;