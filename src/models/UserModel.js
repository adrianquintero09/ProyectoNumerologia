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
    },
    password_hash: {
      type: String,
      required: true,
    },
    fecha_nacimiento: {
      type: Date,
      required: true,
    },
    fecha_registro: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true } 
);

export default mongoose.model("Usuario", usuarioSchema);