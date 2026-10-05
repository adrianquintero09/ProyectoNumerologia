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


router.use(ValidarTKN);

router.get("/", listarCompatibilidades);
router.get("/:id", idValidator, validarCampos, obtenerCompatibilidad);
router.post("/", crearCompatibilityMatchValidator, validarCampos, crearCompatibilidad);
router.put("/:id", idValidator, actualizarCompatibilityMatchValidator, validarCampos, actualizarCompatibilidad);
router.delete("/:id", idValidator, validarCampos, eliminarCompatibilidad);

export default router;