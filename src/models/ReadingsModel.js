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
      trim: true,
    },
    respuesta_generada: {
      type: String,
      required: true,
      trim: true,
    },
    tipo_lectura: {
      type: String,
      enum: ["diaria", "general", "anual"],
      required: true,
      lowercase: true,
    },
  },
  { 
    timestamps: { createdAt: "fecha", updatedAt: true } 
  }
);

readingSchema.index({ usuario: 1, fecha: -1 });

export default mongoose.model("Reading", readingSchema);