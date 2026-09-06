import express from "express";
import { cnxMongo } from "./src/config/cnxmongodb.js";

import UsersRoutes from "./src/routes/UserRoutes.js";
import NumerologyProfilesRoutes from "./src/routes/CompabilityRoutes.js";
import CompatibilityMatchesRoutes from "./src/routes/NumerologyProfilesRoutes.js";
import ReadingsRoutes from "./src/routes/ReadingsRoutes.js";
import AuditLogsRoutes from "./src/routes/AuditLogsRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT ;

app.use(express.json());

app.use("/api/v1/users", UsersRoutes);
app.use("/api/v1/numerology-profiles", NumerologyProfilesRoutes);
app.use("/api/v1/compatibility-matches", CompatibilityMatchesRoutes);
app.use("/api/v1/readings", ReadingsRoutes);
app.use("/api/v1/audit-logs", AuditLogsRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ mensaje: "Error interno del servidor" });
});

cnxMongo().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
});