import NumerologyProfilesModel from "../models/NumerologyProfilesModel.js";

// Crear perfil numerológico
export const crearPerfilNumerologico = async (req, res) => {
  try {
    const { usuario, numero_vida, numero_expresion, numero_alma } = req.body;

    const perfil = await NumerologyProfilesModel.create({
      usuario,
      numero_vida,
      numero_expresion,
      numero_alma,
    });

    res.status(201).json(perfil);
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al crear perfil numerológico",
      error: error.message,
    });
  }
};

// Actualizar perfil numerológico
export const actualizarPerfilNumerologico = async (req, res) => {
  try {
    const { numero_vida, numero_expresion, numero_alma } = req.body;

    // "usuario" NO se modifica una vez creado el perfil
    const perfil = await NumerologyProfilesModel.findByIdAndUpdate(
      req.params.id,
      { numero_vida, numero_expresion, numero_alma },
      { new: true, runValidators: true }
    );

    if (!perfil) {
      return res.status(404).json({ mensaje: "Perfil numerológico no encontrado" });
    }

    res.status(200).json(perfil);
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al actualizar perfil numerológico",
      error: error.message,
    });
  }
};

// Eliminar perfil numerológico
export const eliminarPerfilNumerologico = async (req, res) => {
  try {
    const perfil = await NumerologyProfilesModel.findByIdAndDelete(req.params.id);

    if (!perfil) {
      return res.status(404).json({ mensaje: "Perfil numerológico no encontrado" });
    }

    res.status(200).json({ mensaje: "Perfil numerológico eliminado correctamente" });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al eliminar perfil numerológico",
      error: error.message,
    });
  }
};

// Listar todos los perfiles numerológicos
export const listarPerfilesNumerologicos = async (req, res) => {
  try {
    const perfiles = await NumerologyProfilesModel.find().populate("usuario", "nombre_completo email");
    res.status(200).json(perfiles);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al listar perfiles numerológicos",
      error: error.message,
    });
  }
};

// Obtener un perfil numerológico por ID
export const obtenerPerfilNumerologico = async (req, res) => {
  try {
    const perfil = await NumerologyProfilesModel.findById(req.params.id).populate("usuario", "nombre_completo email");

    if (!perfil) {
      return res.status(404).json({ mensaje: "Perfil numerológico no encontrado" });
    }

    res.status(200).json(perfil);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener perfil numerológico",
      error: error.message,
    });
  }
};