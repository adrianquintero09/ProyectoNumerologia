import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
  {
    nombre_completo: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Por favor, ingresa un correo electrónico válido"],
    },
    password_hash: {
      type: String,
      required: true,
    },
    fecha_nacimiento: {
      type: Date,
      required: true,
    },
  },
  { 
    timestamps: { createdAt: "fecha_registro", updatedAt: true } 
  }
);

export default mongoose.model("Usuario", usuarioSchema);