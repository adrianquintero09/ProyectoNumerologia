import express from "express";
import { cnxMongo } from "./src/config/cnxmongodb.js";
import "dotenv/config";

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`server http://localhost:${process.env.PORT}`);
    cnxMongo();
});