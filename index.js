import express from "express";
import { cnxMongo } from "./src/config/cnxmongodb.js";
import "dotenv/config";

import auditLogsRoutes from "./src/routes/AuditLogsRoutes.js";
import compatibilityRoutes from "./src/routes/CompabilityRoutes.js";
import numerologyProfilesRoutes from "./src/routes/NumerologyProfilesRoutes.js";
import readingsRoutes from "./src/routes/ReadingsRoutes.js";
import userRoutes from "./src/routes/UserRoutes.js";

const app = express();

app.use(express.json());


app.use("/api/audit-logs", auditLogsRoutes);
app.use("/api/compatibility", compatibilityRoutes);
app.use("/api/numerology-profiles", numerologyProfilesRoutes);
app.use("/api/readings", readingsRoutes);
app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`server http://localhost:${process.env.PORT}`);
    cnxMongo();
});