import AuditLogsModel from "../models/AuditLogsModel.js";


export const crearAuditLog = async (req, res) => {
  try {
    const { usuario, endpoint, metodo, status_code } = req.body;

    const log = await AuditLogsModel.create({
      usuario,
      endpoint,
      metodo,
      status_code,
    });

    res.status(201).json(log);
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al registrar log de auditoría",
      error: error.message,
    });
  }
};


export const listarAuditLogs = async (req, res) => {
  try {
    const logs = await AuditLogsModel.find()
      .populate("usuario", "nombre_completo email")
      .sort({ timestamp: -1 }); 

    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al listar los logs de auditoría",
      error: error.message,
    });
  }
};

export const obtenerAuditLog = async (req, res) => {
  try {
    const log = await AuditLogsModel.findById(req.params.id).populate("usuario", "nombre_completo email");

    if (!log) {
      return res.status(404).json({ mensaje: "Log no encontrado" });
    }

    res.status(200).json(log);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener el log de auditoría",
      error: error.message,
    });
  }
};


export const eliminarAuditLog = async (req, res) => {
  try {
    const log = await AuditLogsModel.findByIdAndDelete(req.params.id);

    if (!log) {
      return res.status(404).json({ mensaje: "Log no encontrado" });
    }

    res.status(200).json({ mensaje: "Log eliminado correctamente" });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al eliminar el log",
      error: error.message,
    });
  }
};