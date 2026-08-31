import { Router } from "express";
import {
  crearAuditLog,
  listarAuditLogs,
  obtenerAuditLog,
  eliminarAuditLog,
} from "../controllers/AuditLogControllers.js"; 

const router = Router();
router.post("/", crearAuditLog);
router.get("/", listarAuditLogs);
router.get("/:id", obtenerAuditLog);
router.delete("/:id", eliminarAuditLog);

export default router;