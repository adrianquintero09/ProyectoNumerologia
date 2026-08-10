import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
export const cnxMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log("MongoDB conectado correctamente");
    } catch (error) {
        console.error("Error al conectar MongoDB:", error);
    }
};