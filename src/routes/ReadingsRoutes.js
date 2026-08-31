import { Router } from "express";
import {
  crearLectura,
  listarLecturas,
  obtenerLectura,
  actualizarLectura,
  eliminarLectura,
} from "../controllers/ReadingControllers.js";


import { ValidarTKN } from "../middlewares/validar-jwt.js";
import {
  crearReadingValidator,
  actualizarReadingValidator
} from "../middlewares/validar-reading.js";
import { validarCampos } from "../middlewares/validar-campos.js";

const router = Router();


router.use(ValidarTKN);


router.post(
  "/",
  [
    crearReadingValidator,
    validarCampos
  ],
  crearLectura
);


router.get("/", listarLecturas);
router.get("/:id", obtenerLectura);


router.put(
  "/:id",
  [
    actualizarReadingValidator,
    validarCampos
  ],
  actualizarLectura
);


router.delete("/:id", eliminarLectura);

export default router;