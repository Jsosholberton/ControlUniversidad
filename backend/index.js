import express from "express";
import dotenv from "dotenv";
import conectDB from "./config/db.js";
import cors from "cors";

import estudianteRoutes from "./routes/EstudianteRoutes.js";
import registroRoutes from "./routes/RegistroRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

conectDB();

app.use('/api/users', userRoutes);
app.use('/api/estudiantes', estudianteRoutes);
app.use('/api/registro', registroRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on: ${process.env.PORT}`);
});