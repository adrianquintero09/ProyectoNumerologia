import { Router } from "express";
import { 
  crearReading, 
  listarReadings, 
  obtenerReading, 
  actualizarReading, 
  eliminarReading 
} from "../controllers/ReadingControllers.js";
import { 
  crearReadingValidator, 
  actualizarReadingValidator, 
  idValidator 
} from "../validators/ReadingValidator.js";
import { validarCampos } from "../middlewares/Validar.js";
import { ValidarTKN } from "../middlewares/Tokens.js";

const router = Router();

router.get("/", listarReadings);
router.get("/:id", idValidator, validarCampos, obtenerReading);

router.post("/", ValidarTKN, crearReadingValidator, validarCampos, crearReading);
router.put("/:id", ValidarTKN, idValidator, actualizarReadingValidator, validarCampos, actualizarReading);
router.delete("/:id", ValidarTKN, idValidator, validarCampos, eliminarReading);

export default router;