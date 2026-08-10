import mongoose from "mongoose";

const compatibilityMatchSchema = new mongoose.Schema(
  {
    usuario_1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario", 
      required: true,
    },
    usuario_2: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
    puntaje: {
      type: Number,
      required: true,
      min: 0,
      max: 100, 
    },
    interpretacion: {
      type: String,
      required: true,
    },
    fecha: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true } 
);

export default mongoose.model("CompatibilityMatch", compatibilityMatchSchema);