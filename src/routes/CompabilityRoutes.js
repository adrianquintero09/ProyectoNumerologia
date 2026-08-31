import { Router } from "express";
import {
  crearCompatibilidad,
  listarCompatibilidades,
  obtenerCompatibilidad,
  actualizarCompatibilidad,
  eliminarCompatibilidad,
} from "../controllers/CompabilityControlers.js";

import { validarTKN } from "../Middlewares/Tokens.js";


import {
  crearCompatibilityMatchValidator,
  actualizarCompatibilityMatchValidator,
} from "../Validators/CompatibilityMatchesValidator.js";
import { idValidator } from "../Validators/AuditlogsValidator.js";

const router = Router();

router.use(validarTKN);

router.post("/", crearCompatibilityMatchValidator, crearCompatibilidad);
router.get("/", listarCompatibilidades);
router.get("/:id", idValidator, obtenerCompatibilidad);
router.put("/:id", idValidator, actualizarCompatibilityMatchValidator, actualizarCompatibilidad);
router.delete("/:id", idValidator, eliminarCompatibilidad);

export default router;