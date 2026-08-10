import CompatibilityMatches from "../models/CompatibilityMatches.js";

// Crear análisis de compatibilidad
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

// Actualizar análisis de compatibilidad
export const actualizarCompatibilidad = async (req, res) => {
  try {
    const { puntaje, interpretacion } = req.body;

    // Se actualizan únicamente el puntaje e interpretación
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

// Eliminar compatibilidad
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

// Listar todas las compatibilidades
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

// Obtener compatibilidad por ID
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