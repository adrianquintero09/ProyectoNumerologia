import { Router } from "express";
import {
  crearAuditLog,
  listarAuditLogs,
  obtenerAuditLog,
  eliminarAuditLog,
} from "../controllers/AuditLogControllers.js";


import { validarTKN } from "../Middlewares/Tokens.js";
import { crearAuditLogValidator, idValidator } from "../Validators/AuditlogsValidator.js";

const router = Router();


router.use(validarTKN);


router.post("/", crearAuditLogValidator, crearAuditLog);
router.get("/", listarAuditLogs);
router.get("/:id", idValidator, obtenerAuditLog);
router.delete("/:id", idValidator, eliminarAuditLog);

export default router;