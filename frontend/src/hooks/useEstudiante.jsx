import { useContext } from "react"
import EstudianteContext from "../context/EstudianteProvider"

const useEstudiante = () => {
    return useContext(EstudianteContext)
}

export default useEstudiante