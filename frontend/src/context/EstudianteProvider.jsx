import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EstudianteContext = createContext();

const EstudianteProvider = ({ children }) => {
  const [alerta, setAlerta] = useState({});
  const [estudiante, setEstudiante] = useState({});
  const [cargando, setCargando] = useState(false);

  const navigate = useNavigate();

  const mostrarAlerta = (alerta) => {
    setAlerta(alerta);

    setTimeout(() => {
      setAlerta({});
    }, 5000);
  };

  const cerrarSesionEstudiante = () => {
    setEstudiante({});
    setCargando(false);
    setAlerta({});
  };

  const obtenerEstudiante = async (id) => {
    setCargando(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios(
        `http://localhost:4000/api/registro/${id}`,
        config
      );
      setEstudiante(data);
    } catch (error) {
      // console.log(error);
      setEstudiante({error:error.response.data})
    }
    setCargando(false);
  };

  return (
    <EstudianteContext.Provider
      value={{
        cerrarSesionEstudiante,
        mostrarAlerta,
        alerta,
        obtenerEstudiante,
        estudiante,
        cargando,
      }}
    >
      {children}
    </EstudianteContext.Provider>
  );
};
export { EstudianteProvider };

export default EstudianteContext;
