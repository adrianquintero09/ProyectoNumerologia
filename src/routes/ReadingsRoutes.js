import { Router } from "express";
import { 
  crearLectura, 
  listarLecturas, 
  obtenerLectura, 
  actualizarLectura, 
  eliminarLectura 
} from "../controllers/ReadingControllers.js";

import { 
  crearReadingValidator, 
  actualizarReadingValidator, 
  idValidator 
} from "../Validators/ReadingValidator.js";

import { validarCampos } from "../middlewares/Validar.js";
import { ValidarTKN } from "../middlewares/Tokens.js";

const router = Router();

router.get("/", listarLecturas);
router.get("/:id", idValidator, validarCampos, obtenerLectura);

router.post("/", ValidarTKN, crearReadingValidator, validarCampos, crearLectura);
router.put("/:id", ValidarTKN, idValidator, actualizarReadingValidator, validarCampos, actualizarLectura);
router.delete("/:id", ValidarTKN, idValidator, validarCampos, eliminarLectura);

export default router;