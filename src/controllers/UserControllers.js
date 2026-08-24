import UserModel from "../models/UserModel.js";

export const crearUsuario = async (req, res) => {
  try {
    const { nombre_completo, email, password_hash, fecha_nacimiento } = req.body;
    

    const usuario = await UserModel.create({
      nombre_completo,
      email,
      password_hash,
      fecha_nacimiento,
    });

    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear usuario", error: error.message });
  }
};


export const actualizarUsuario = async (req, res) => {
  try {
    const { nombre_completo, email, fecha_nacimiento } = req.body;
    
    const usuario = await UserModel.findByIdAndUpdate(
      req.params.id,
      { nombre_completo, email, fecha_nacimiento },
      { new: true, runValidators: true }
    );

    if (!usuario) return res.status(404).json({ mensaje: "Usuario no encontrado" });
    
    res.status(200).json(usuario);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al actualizar usuario", error: error.message });
  }
};


export const eliminarUsuario = async (req, res) => {
  try {
    const usuario = await UserModel.findByIdAndDelete(req.params.id);
    
    if (!usuario) return res.status(404).json({ mensaje: "Usuario no encontrado" });
    
    res.status(200).json({ mensaje: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar usuario", error: error.message });
  }
};


export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await UserModel.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al listar usuarios", error: error.message });
  }
};


export const obtenerUsuario = async (req, res) => {
  try {
    const usuario = await UserModel.findById(req.params.id);
    
    if (!usuario) return res.status(404).json({ mensaje: "Usuario no encontrado" });
    
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener usuario", error: error.message });
  }
};