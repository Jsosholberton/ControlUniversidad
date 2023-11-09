import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useEstudiante from "../hooks/useEstudiante";

const Estudiante = () => {
  const params = useParams();

  const { obtenerEstudiante, estudiante, cargando } = useEstudiante();

  useEffect(() => {
    obtenerEstudiante(params.id);
  }, []);

  // const { name, deadLine, description, client } =
  const { error, msg } = estudiante;
  const datos = msg ? estudiante.estudiante : {};

  return cargando ? (
      <div className="flex justify-center items-center h-screen mx-auto">
        <div className="animate-spin rounded-full border-t-4 border-black-500 border-solid mx-auto"></div>
      </div>
  ) : error ? (
    <>
      <div className="rounded-xl shadow w-1/2 mx-auto w-auto backdrop-blur-sm bg-white/10">
        <h1 className="font-error text-5xl font-sans p-5">
          <b>Error <br></br> :(</b>
        </h1>
        <p className="text-white text-2xl pt-10 font-sans p-5">{error.msg}</p>
      </div>
    </>
  ) : (
    <div className="rounded-xl shadow w-1/2 mx-auto w-auto backdrop-blur-sm bg-white/10">
      <h1 className="font-light-green text-5xl font-sans p-5">
        <b>{msg}<br></br> :)</b>
      </h1>
      <p className="text-white text-2xl pt-10 font-sans p-5">El estudiante { datos.nombres } puede tomar el almuerzo</p>
    </div>
  );
};

export default Estudiante;
