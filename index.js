import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { cnxMongo } from "./src/config/cnxmongodb.js";


import UsersRoutes from "./src/routes/UserRoutes.js";
import NumerologyProfilesRoutes from "./src/routes/NumerologyProfilesRoutes.js";
import CompatibilityMatchesRoutes from "./src/routes/CompabilityRoutes.js";
import ReadingsRoutes from "./src/routes/ReadingsRoutes.js";
import AuditLogsRoutes from "./src/routes/AuditLogsRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json({ limit: "10kb" })); 
app.use(express.urlencoded({ extended: true, limit: "10kb" }));


app.use("/api/v1/users", UsersRoutes);
app.use("/api/v1/numerology-profiles", NumerologyProfilesRoutes);
app.use("/api/v1/compatibility-matches", CompatibilityMatchesRoutes);
app.use("/api/v1/readings", ReadingsRoutes);
app.use("/api/v1/audit-logs", AuditLogsRoutes);


app.use((req, res) => {
  res.status(404).json({
    mensaje: `La ruta o método '${req.method} ${req.originalUrl}' no existe en este servidor.`
  });
});


app.use((err, req, res, next) => {
  console.error(err.stack);

  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({ mensaje: "El formato del JSON enviado es inválido." });
  }

  res.status(500).json({
    mensaje: "Error interno del servidor",
    error: process.env.NODE_ENV === "development" ? err.message : undefined
  });
});

cnxMongo().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
});