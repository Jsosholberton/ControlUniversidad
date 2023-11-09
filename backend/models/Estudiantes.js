import mongoose from "mongoose";

const estudianteSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true,
        trim: true
    },
    apellidos: {
        type: String,
        required: true,
        trim: true
    },
    documento: {
        type: Number,
        required: true,
        trim: true,
        unique: true,
    }
});

const Estudiante = mongoose.model('Estudiante', estudianteSchema);

export default Estudiante;