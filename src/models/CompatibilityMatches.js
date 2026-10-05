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
      trim: true,
    },
  },
  { 
    timestamps: { createdAt: "fecha", updatedAt: true } 
  }
);


compatibilityMatchSchema.index({ usuario_1: 1, usuario_2: 1 }, { unique: true });

export default mongoose.model("CompatibilityMatch", compatibilityMatchSchema);