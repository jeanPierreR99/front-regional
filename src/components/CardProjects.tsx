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
      className="px-10 lg:px-40 flex flex-col bg-gray-100 gap-10  py-8 cont-img-proyect relative"
    >
      <div className="absolute w-full h-full top-0 left-0 gradient-p"></div>
      <div className="flex z-10 flex-col justify-center items-center">
        <h5 className="relative text-2xl md:text-5xl merienda font-black w-fit m-auto text-gray-900 before:w-4/12 before:translate-x-[-50%] before:h-[3px] before:absolute before:left-[50%] before:bottom-[-15px] before:bg-[#0306A9]">
          Nuestros Proyectos
        </h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-4 mx-4 z-10">
        <div className="h-[350px] w-full gap-10 text-center flex flex-col text-gray-800 font-bold">
          Gobierno Regional de Madre de Dios gestiona entrega de agua en zonas
          rurales de Inambari y Tambopata
          <iframe
            className="w-full  h-full"
            src="https://www.youtube.com/embed/-Nojl0TZ3P8?si=8IManOh4rm5LAWwF"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="h-[350px] w-full gap-10 text-center flex flex-col text-gray-800 font-bold">
          Gobierno Regional de Madre de Dios gestiona entrega de agua en zonas
          rurales de Inambari y Tambopata
          <iframe
            className="w-full  h-full"
            src="https://www.youtube.com/embed/zvZuTSTDp50?si=dNTCAtDkuO2ACy-_"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="h-[350px] w-full gap-10 text-center flex flex-col text-gray-800 font-bold">
          Gobierno Regional de Madre de Dios gestiona entrega de agua en zonas
          rurales de Inambari y Tambopata
          <iframe
            className="w-full  h-full"
            src="https://www.youtube.com/embed/wWnvjlezl24?si=La9cB0hl2efcWPuN"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div className="flex justify-end mr-5 md:mr-0 mt-2 z-10">
        <a
          href="https://www.youtube.com/watch?v=wWnvjlezl24"
          className="flex gap-1 text-gray-800 font-bold hover:text-gray-800/70 "
        >
          Ver proyectos
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
    </motion.div>
  );
};

export default CardProjects;
