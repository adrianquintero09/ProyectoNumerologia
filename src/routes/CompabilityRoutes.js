import { Router } from "express";
import { 
  crearCompatibilidad, 
  listarCompatibilidades, 
  obtenerCompatibilidad, 
  actualizarCompatibilidad, 
  eliminarCompatibilidad 
} from "../controllers/CompabilityControlers.js";

import { 
  crearCompatibilityMatchValidator, 
  actualizarCompatibilityMatchValidator, 
  idValidator 
} from "../Validators/CompatibilityMatchesValidator.js";

import { validarCampos } from "../middlewares/Validar.js";
import { ValidarTKN } from "../middlewares/Tokens.js";

const router = Router();

router.get("/", listarCompatibilidades);
router.get("/:id", idValidator, validarCampos, obtenerCompatibilidad);

router.post("/", ValidarTKN, crearCompatibilityMatchValidator, validarCampos, crearCompatibilidad);
router.put("/:id", ValidarTKN, idValidator, actualizarCompatibilityMatchValidator, validarCampos, actualizarCompatibilidad);
router.delete("/:id", ValidarTKN, idValidator, validarCampos, eliminarCompatibilidad);

export default router;