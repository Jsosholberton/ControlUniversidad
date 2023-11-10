import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import axios from 'axios';
import useAuth from "../hooks/useAuth";

const Login = () => {
  // Definición de estados locales para email, password y alertas
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  // Obtiene la función setAuth del contexto de autenticación
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Verifica si el email o la contraseña están vacíos
    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    try {
      // Envía la solicitud de inicio de sesión al servidor
      const { data } = await axios.post(
        "http://161.35.129.87:4000/api/users/login",
        { email, password }
      );

      // Almacena el token en el almacenamiento local y establece la autenticación
      localStorage.setItem('token', data.token)
      setAuth(data)
      // Redirige al usuario a la página de proyectos
      navigate('/home');
    } catch (error) {
      // Maneja los errores de inicio de sesión
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  // Extrae el mensaje de alerta del estado
  const { msg } = alerta;

  return (
    <div className="page-container">
      <div className="corner-text mt-10 fixed top-0 left-0 p-5">
        <h2 className="text-green-600 font-black text-4xl capitalize">Control de Almuerzos</h2>
      </div>

      {/* Renderiza la alerta si existe */}
      {msg && <Alerta alerta={alerta} />}

      <form
        className="delay-100 mx-auto my-20
        hover:opacity-100
        my-10 bg-white shadow rounded-lg shadow-lg shadow-gray-500 p-10 
        rounded-3xl p-6"
        onSubmit={handleSubmit}
      >
        <div className="m-auto mx-auto pt-10">
          <label
            className="uppercase text-gray-600 italic block text-xl font-bold"
            htmlFor="email"
          >
          </label>
          {/* Campo de entrada de email */}
          <input
            id="email"
            type="email"
            placeholder="Correo"
            className="w-full mt-3 p-3 border italic rounded-xl shadow-lg shadow-gray-400 bg bg-gray-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>
        <div className="m-auto mx-auto pt-10">
          <label
            className="uppercase font-thin italic text-white"
            htmlFor="password"
          >
          </label>
          {/* Campo de entrada de contraseña */}
          <input
            id="PASSWORD"
            type="password"
            placeholder="Contraseña"
            className="w-full mt-3 p-3 border italic rounded-xl shadow-lg shadow-gray-400 bg bg-gray-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* Botón de inicio de sesión */}
        <button
          type="submit"
          className=" 
          transition-shadow opacity-70 hover:opacity-100 rounded-md
          italic w-full py-2 mt-10 mx-auto
          uppercase font-medium rounded-3xl
          bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-200 via-green-400 to-green-500
          shadow-lg shadow-gray-500"
        >
          Iniciar sesión
        </button>
      </form>

      <nav className="lg:flex lg:justify-between">
        {/* Enlace para recuperar contraseña */}
        <Link
          className="mx-auto delay-75 opacity-90 hover:skew-x-3 hover:opacity-100 text-center my-5 text-[#ffffff] shadow-lg p-2 hover:shadow-white shadow-black-950 rounded-full uppercase text-sm"
          to="/olvidepassword" // Reemplaza con la ruta correcta
        >
          Olvidaste tu contraseña?
        </Link>
      </nav>
    </div>
  );
};

export default Login;
