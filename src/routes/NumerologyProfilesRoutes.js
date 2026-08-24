import { Router } from "express";
import {
  crearPerfilNumerologico,
  listarPerfilesNumerologicos,
  obtenerPerfilNumerologico,
  actualizarPerfilNumerologico,
  eliminarPerfilNumerologico,
} from "../controllers/NumerologyProfileControllers"; 

const router = Router();


router.post("/", crearPerfilNumerologico);


router.get("/", listarPerfilesNumerologicos);


router.get("/:id", obtenerPerfilNumerologico);


router.put("/:id", actualizarPerfilNumerologico);


router.delete("/:id", eliminarPerfilNumerologico);

export default router;