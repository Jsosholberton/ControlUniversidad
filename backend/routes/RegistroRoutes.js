import express from "express";
import { registrarAlmuerzo } from "../controllers/RegistroController.js";
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router.get("/:id", checkAuth, registrarAlmuerzo);

export default router;