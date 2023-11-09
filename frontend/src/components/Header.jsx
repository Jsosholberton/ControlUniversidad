import useAuth from "../hooks/useAuth";
import useEstudiante from "../hooks/useEstudiante";

const Header = () => {
  const { cerrarSesionAuth } = useAuth();
  const { cerrarSesionEstudiante } = useEstudiante();
  
  const handleCerrarSesion = () => {
    cerrarSesionEstudiante();
    cerrarSesionAuth();
    localStorage.removeItem("token");
    // console.log(err)
  };

  return (
    <header className="px-4 py-5 bg-dark-gray ">
      <div className="md:flex md:justify-between items-center">
        <h2 className="text-green-600 font-black text-4xl capitalize">Control de Almuerzos</h2>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="text-white text-sm bg-black-950 p-3 mx-auto my-5
                        rounded-xl uppercase font-sans font-medium cursor-pointer hover:bg-teal-600 active:bg-cyan-500 transition-colors"
            onClick={handleCerrarSesion}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
