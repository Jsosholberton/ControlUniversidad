import express from "express";
import { registrar } from "../controllers/EstudianteController.js";


const router = express.Router();

router.post("/registrar", registrar);

export default router;

