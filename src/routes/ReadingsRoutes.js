import { Router } from "express";
import {
  crearLectura,
  listarLecturas,
  obtenerLectura,
  actualizarLectura,
  eliminarLectura,
} from "../controllers/ReadingControllers"; 

const router = Router();


router.post("/", crearLectura);


router.get("/", listarLecturas);


router.get("/:id", obtenerLectura);


router.put("/:id", actualizarLectura);


router.delete("/:id", eliminarLectura);

export default router;