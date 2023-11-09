import mongoose from "mongoose";

const registroSchema = mongoose.Schema({
    estudiante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Estudiante',
    },
    fecha: {
        type: Date,
    },
});

const Registro = mongoose.model('Registro', registroSchema);

export default Registro;