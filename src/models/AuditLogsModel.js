import mongoose from "mongoose";

const auditLogSchema = new mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario", 
    },
    endpoint: {
      type: String,
      required: true,
      trim: true,
    },
    metodo: {
      type: String,
      required: true,
      enum: ["GET", "POST", "PUT", "PATCH", "DELETE"], 
    },
    status_code: {
      type: Number,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true } 
);


auditLogSchema.index({ usuario: 1 });

export default mongoose.model("AuditLog", auditLogSchema);