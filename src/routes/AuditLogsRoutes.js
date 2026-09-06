import { Router } from "express";
import { 
  crearAuditLog, 
  listarAuditLogs, 
  obtenerAuditLog, 
  eliminarAuditLog 
} from "../controllers/AuditLogControllers.js";

import {
  crearAuditLogValidator,
  idValidator,
} from "../Validators/AuditlogsValidator.js";

import { validarCampos } from "../middlewares/Validar.js";
import { ValidarTKN } from "../middlewares/Tokens.js";

const router = Router();

router.use(ValidarTKN);

router.get("/", listarAuditLogs);
router.get("/:id", idValidator, validarCampos, obtenerAuditLog);
router.post("/", crearAuditLogValidator, validarCampos, crearAuditLog);
router.delete("/:id", idValidator, validarCampos, eliminarAuditLog);

export default router;