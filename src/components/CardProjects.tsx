import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const CardProjects: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo animar una vez
    threshold: 0.2, // Cuando el 20% del card es visible
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="w-full group/project overflow-hidden mt-6 flex-shrink-0 flex md:flex-row flex-col h-full md:h-[100%] px-10 lg:px-16"
    >
      <div className="w-full md:w-6/12 bg-[#081d3d]  md:bg-transparent relative md:flex items-center justify-center">
        <iframe
          className="m-auto z-10 md:w-[400px] md:h-[400px] w-full h-[300px]"
          src="https://www.youtube.com/embed/-Nojl0TZ3P8?si=8IManOh4rm5LAWwF"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="w-full md:w-6/12 px-4 flex flex-col gap-2 relative bg-[#081d3d] py-6 md:pt-10">
        <div className="absolute md:block hidden group-hover/project:w-[2000px] transition-all duration-700 right-[60px] top-0 w-full h-full bg-[#081d3d] -skew-x-12"></div>
        <span className="text-cyan-500 z-10 font-bold md:pr-12 text-2xl md:text-4xl">
          SISTEMA DE FACTURACIÓN DE AGUA POTABLE EN CENTROS POBLADOS RURALES
        </span>
        <span className="text-gray-300 font-light z-10 md:pr-12">
          En la actualidad la gran mayoría de las Juntas Administradoras de
          Servicios de Saneamiento, no cuentan con un sistema informático para
          el cobro de las tarifas del agua. La tecnología a través de la
          Informática ha hecho que nos enfrentemos a nuevos retos para mejorar
          el estilo de vida de las instituciones, empresas y organizaciones que
          deben reconocer a la tecnología como un medio necesario para cumplir
          los objetivos planteados. El Sistema de Facturación de Agua Potable es
          un software informático desarrollado por la Dirección de Saneamiento
          de la DRVCS de Madre de Dios, con el fin de procesar datos y generar
          información referida con los índices del consumo mensual por cada
          usuario de la comunidad.
        </span>
        <span className="text-gray-400 font-light z-10">14 dic 2018</span>
        <div className="text-right z-10 md:pr-12">
          <a
            href="https://www.youtube.com/@direccionregionaldeviviend7051"
            target="__blank"
            className="hover:text-blue-400/70 text-blue-400 float-end w-fit px-2 py-1 rounded-md flex gap-1"
          >
            ver proyectos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CardProjects;
