import ReadingsModel from "../models/ReadingsModel.js";

// Crear lectura
export const crearLectura = async (req, res) => {
  try {
    const { usuario, prompt_enviado, respuesta_generada, tipo_lectura } = req.body;

    const lectura = await ReadingsModel.create({
      usuario,
      prompt_enviado,
      respuesta_generada,
      tipo_lectura,
    });

    res.status(201).json(lectura);
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al crear la lectura",
      error: error.message,
    });
  }
};

// Actualizar lectura
export const actualizarLectura = async (req, res) => {
  try {
    const { prompt_enviado, respuesta_generada, tipo_lectura } = req.body;

    const lectura = await ReadingsModel.findByIdAndUpdate(
      req.params.id,
      { prompt_enviado, respuesta_generada, tipo_lectura },
      { new: true, runValidators: true }
    );

    if (!lectura) {
      return res.status(404).json({ mensaje: "Lectura no encontrada" });
    }

    res.status(200).json(lectura);
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al actualizar la lectura",
      error: error.message,
    });
  }
};

// Eliminar lectura
export const eliminarLectura = async (req, res) => {
  try {
    const lectura = await ReadingsModel.findByIdAndDelete(req.params.id);

    if (!lectura) {
      return res.status(404).json({ mensaje: "Lectura no encontrada" });
    }

    res.status(200).json({ mensaje: "Lectura eliminada correctamente" });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al eliminar la lectura",
      error: error.message,
    });
  }
};

// Listar todas las lecturas
export const listarLecturas = async (req, res) => {
  try {
    const lecturas = await ReadingsModel.find().populate("usuario", "nombre_completo email");
    res.status(200).json(lecturas);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al listar las lecturas",
      error: error.message,
    });
  }
};

// Obtener una lectura por ID
export const obtenerLectura = async (req, res) => {
  try {
    const lectura = await ReadingsModel.findById(req.params.id).populate("usuario", "nombre_completo email");

    if (!lectura) {
      return res.status(404).json({ mensaje: "Lectura no encontrada" });
    }

    res.status(200).json(lectura);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener la lectura",
      error: error.message,
    });
  }
};