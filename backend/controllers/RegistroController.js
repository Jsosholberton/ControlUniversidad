import Registro from "../models/Registro.js";
import Estudiantes from "../models/Estudiantes.js";

const registrarAlmuerzo = async (req, res) => {

    const { id } = req.params;
    const numeroDocumento = parseInt(id);

    const estudiante = await Estudiantes.findOne({ documento:numeroDocumento });

    if (!estudiante) {
        const error = new Error('El estudiante no esta registrado');
        return res.status(404).json({ msg: error.message });
    }

    const fechaHoy = new Date();
    fechaHoy.setHours(0, 0, 0, 0); // Establece la hora a las 00:00:00 para comparar solo la fecha

    const registroExistente = await Registro.findOne({ estudiante: estudiante._id, fecha: fechaHoy });

    if (registroExistente) {
        return res.status(400).json({ msg: 'Hoy ya ha sido registrado.' });
    }

    try {
        const registro = await Registro.create({ estudiante: estudiante._id, fecha: fechaHoy });
        res.status(200).json({msg: 'Registro exitoso', estudiante});
    }
    catch (err) {
        console.log(err);
    }
}

export {
    registrarAlmuerzo
}
