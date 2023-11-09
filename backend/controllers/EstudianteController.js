import Estudiantes from "../models/Estudiantes.js";


const registrar = async (req, res) => {

    const { nombres, apellidos, documento } = req.body;
    const existEstudiante = await Estudiantes.findOne({ documento });

    if (existEstudiante) {
        const error = new Error('El estudiante ya existe');
        return res.status(404).json({ msg: error.message });
    }

    try {
        const estudiante = await Estudiantes.create({ nombres, apellidos, documento });
        res.status(201).json(estudiante);
    }
    catch (err) {
        console.log(err);
    }
}

export {
    registrar
}