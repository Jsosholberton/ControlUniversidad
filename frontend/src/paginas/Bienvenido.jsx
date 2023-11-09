import { useEffect } from "react";

const Proyectos = () => {
  // const { proyectos } = useProyectos();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
     <div className=" my-20 mx-auto text-2xl text-white text-bold">
      Has iniciado sesión correctamente ya puedes escanear códigos QR
     </div>
    </>
  );
};

export default Proyectos;
