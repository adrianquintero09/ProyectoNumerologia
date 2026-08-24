import { Router } from "express";
import {
  crearAuditLog,
  listarAuditLogs,
  obtenerAuditLog,
  eliminarAuditLog,
} from "../controllers/AuditLogControllers.js"; 

const router = Router();


router.post("/", crearAuditLog);

// Listar todos los logs de auditoría
router.get("/", listarAuditLogs);

// Obtener un log de auditoría por su ID
router.get("/:id", obtenerAuditLog);

// Eliminar un log de auditoría por su ID
router.delete("/:id", eliminarAuditLog);

export default router;