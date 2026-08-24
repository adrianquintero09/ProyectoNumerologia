import CompatibilityMatches from "../models/CompatibilityMatches.js";


export const crearCompatibilidad = async (req, res) => {
  try {
    const { usuario_1, usuario_2, puntaje, interpretacion } = req.body;

    const compatibilidad = await CompatibilityMatches.create({
      usuario_1,
      usuario_2,
      puntaje,
      interpretacion,
    });

    res.status(201).json(compatibilidad);
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al registrar la compatibilidad",
      error: error.message,
    });
  }
};


export const actualizarCompatibilidad = async (req, res) => {
  try {
    const { puntaje, interpretacion } = req.body;


    const compatibilidad = await CompatibilityMatches.findByIdAndUpdate(
      req.params.id,
      { puntaje, interpretacion },
      { new: true, runValidators: true }
    );

    if (!compatibilidad) {
      return res.status(404).json({ mensaje: "Compatibilidad no encontrada" });
    }

    res.status(200).json(compatibilidad);
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al actualizar la compatibilidad",
      error: error.message,
    });
  }
};


export const eliminarCompatibilidad = async (req, res) => {
  try {
    const compatibilidad = await CompatibilityMatches.findByIdAndDelete(req.params.id);

    if (!compatibilidad) {
      return res.status(404).json({ mensaje: "Compatibilidad no encontrada" });
    }

    res.status(200).json({ mensaje: "Compatibilidad eliminada correctamente" });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al eliminar la compatibilidad",
      error: error.message,
    });
  }
};


export const listarCompatibilidades = async (req, res) => {
  try {
    const compatibilidades = await CompatibilityMatches.find()
      .populate("usuario_1", "nombre_completo email")
      .populate("usuario_2", "nombre_completo email");

    res.status(200).json(compatibilidades);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al listar compatibilidades",
      error: error.message,
    });
  }
};


export const obtenerCompatibilidad = async (req, res) => {
  try {
    const compatibilidad = await CompatibilityMatches.findById(req.params.id)
      .populate("usuario_1", "nombre_completo email")
      .populate("usuario_2", "nombre_completo email");

    if (!compatibilidad) {
      return res.status(404).json({ mensaje: "Compatibilidad no encontrada" });
    }

    res.status(200).json(compatibilidad);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener la compatibilidad",
      error: error.message,
    });
  }
};