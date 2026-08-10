import mongoose from "mongoose";

export const CnxMongoDB = async () => {
        await mongoose.connect(process.env.MONGO_DB);
        console.log("Conectado");
    };