import mongoose from "mongoose";

const numerologyProfileSchema = new mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
      unique: true, 
    },
    numero_vida: {
      type: Number,
      required: true,
    },
    numero_expresion: {
      type: Number,
      required: true,
    },
    numero_alma: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } 
);

export default mongoose.model("NumerologyProfile", numerologyProfileSchema);