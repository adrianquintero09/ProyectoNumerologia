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

router.use(ValidarTKN);

router.get("/", listarLecturas);
router.get("/:id", idValidator, validarCampos, obtenerLectura);
router.post("/", crearReadingValidator, validarCampos, crearLectura);
router.put("/:id", idValidator, actualizarReadingValidator, validarCampos, actualizarLectura);
router.delete("/:id", idValidator, validarCampos, eliminarLectura);

export default router;