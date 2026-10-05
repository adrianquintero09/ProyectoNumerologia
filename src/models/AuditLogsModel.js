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
      uppercase: true, 
    },
    status_code: {
      type: Number,
      required: true,
    },
  },
  { 
    timestamps: { createdAt: "timestamp", updatedAt: false }
  }
);

auditLogSchema.index({ usuario: 1, timestamp: -1 });

export default mongoose.model("AuditLog", auditLogSchema);