import React from "react";
import Slider from "../../components/Slider";
import CardNotice from "../../components/CardNotice";
import Logo from "../../components/Logo";
import Presentation from "../../components/Presentation";
import Mision from "../../components/Mision";
import { useNotice } from "../../context/Context.provider";
import CardProjects from "../../components/CardProjects";

const Inicio: React.FC = () => {
  const { paramNotice } = useNotice();

  return (
    <div className="bg-gray-50">
      <Slider></Slider>
      <div className="flex flex-col gap-16 mt-16 px-2 md:px-4 lg:px-16">
        <Logo></Logo>
        <Presentation></Presentation>
        <Mision></Mision>
        <div className="relative -mb-14">
          <h6 className="text-2xl text-gray-700 font-light ml-16 mb-4">
            NOTICIAS
          </h6>
          <span className="absolute w-[60px] h-1 bg-red-600 top-3 left-0"></span>
        </div>
        <div className="flex gap-4 py-4 px-2 overflow-x-auto">
          {Array.isArray(paramNotice) &&
            paramNotice.map((data) => (
              <CardNotice
                key={data.id}
                id={data.id}
                titulo={data.titulo}
                imagen={data.imagen}
                descripcion={data.descripcion}
                fecha={data.fecha}
              ></CardNotice>
            ))}
        </div>
        <div className="relative -mb-14">
          <h6 className="text-2xl text-gray-700 font-light ml-16 mb-4">
            PROYECTOS
          </h6>
          <span className="absolute w-[60px] h-1 bg-red-600 top-3 left-0"></span>
        </div>
        <div className="flex gap-4 py-4 px-2 overflow-x-auto">
          <CardProjects></CardProjects>
          <CardProjects></CardProjects>
          <CardProjects></CardProjects>
          <CardProjects></CardProjects>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
