import mongoose from "mongoose";

const readingSchema = new mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario", 
      required: true,
    },
    prompt_enviado: {
      type: String,
      required: true,
    },
    respuesta_generada: {
      type: String,
      required: true,
    },
    tipo_lectura: {
      type: String,
      enum: ["diaria", "general", "anual"],
      required: true,
    },
    fecha: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true } 
);

export default mongoose.model("Reading", readingSchema);