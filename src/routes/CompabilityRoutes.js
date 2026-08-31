import { Router } from "express";
import {
  crearCompatibilidad,
  listarCompatibilidades,
  obtenerCompatibilidad,
  actualizarCompatibilidad,
  eliminarCompatibilidad,
} from "../controllers/CompabilityControlers.js"; 

const router = Router();

router.post("/", crearCompatibilidad);
router.get("/", listarCompatibilidades);
router.get("/:id", obtenerCompatibilidad);
router.put("/:id", actualizarCompatibilidad);
router.delete("/:id", eliminarCompatibilidad);
export default router;