import React from "react";
// import preOne from "../assets/image-4.jpeg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import preTwo from "../assets/image-1.jpeg";
import { useParam } from "../context/Context.provider";
const Presentation: React.FC = () => {
const {setParamURL} = useParam()

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const handleChangeParam = (newParam: string) => {
    setParamURL(newParam);
    console.log(newParam);
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.delete("id")
    newSearchParams.set("search", newParam);
    const newUrl = `?${newSearchParams.toString()}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  return (
    <div className="flex cont-img-presentation md:flex-row flex-col gap-14 overflow-hidden relative px-4 py-12 md:px-4 lg:px-16">
      <div className="absolute z-10 w-full h-full top-0 left-0 bg-[#041025]/90 "></div>
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, x: -100 }}
        animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="w-full z-20 md:w-7/12 flex flex-col justify-center gap-4"
      >
        <h5
          style={{ lineHeight: "1.2" }}
          className="text-2xl z-20 md:text-5xl merienda font-black text-gray-100"
        >
          Sobre Nosotros
        </h5>
        <p className="merienda text-md text-gray-300 font-light z-20">
          La Dirección Regional de Vivienda Construcción y Saneamiento en Madre
          de Dios, desempeña un papel crucial en una región caracterizada por su
          biodiversidad única y su desarrollo económico en constante evolución.
          En un entorno donde la minería, el turismo y la conservación ambiental
          convergen, la labor de esta dirección adquiere una relevancia aún
          mayor.
        </p>
        <ul className="merienda list-none">
          <li className="mb-2 font-light text-gray-300 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
            Impulsar la Producción Habitacional, reducir sus costos y facilitar
            su Adquisición.
          </li>
          <li className="mb-2 font-light text-gray-300 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
            Mejorar el entorno Habitacional de la Población de Extrema Pobreza
            radicada en Asentamientos Humanos.
          </li>
          <li className="mb-2 font-light text-gray-300 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
            Propiciar el ordenamiento Territorial de la Población y sus
            Actividades, así como el Desarrollo Integral de las Ciudades al
            interior de la Región.
          </li>
          <li className="mb-2 font-light text-gray-300 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
            Impulsar la Formalización e Industrialización de la actividad
            constructiva Tecnificada y Sostenible.
          </li>
          <li className="mb-2 font-light text-gray-300 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
            Propiciar la reducción sostenida de la Contaminación Ambiental
            Urbana y Rural.
          </li>
          <li className="mb-2 font-light text-gray-300 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
            Promover la Sostenibilidad de los Sistemas, la ampliación de la
            cobertura y el mejoramiento de la calidad de los Servicios de
            Saneamiento.
          </li>
        </ul>
        <span className="merienda text-gray-300 mt-5 font-light text-md relative ml-32  before:absolute  before:top-[50%] before:left-[-125px] before:text-8xl before:text-red-600 before:translate-y-[-50%] before:content-['10'] before:font-bold       after:absolute  after:top-[-40px] after:left-[-15px] after:text-5xl after:text-red-600 after:content-['+'] after:font-bold">
          Años llegando a tu hogar
        </span>
        <button onClick={()=>handleChangeParam("about")} className="flex gap-1 text-red-600 font-bold hover:text-red-500 w-fit mt-10 ">
          Seguir leyendo{" "}
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
        </button>
      </motion.div>
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, x: 100 }}
        animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="w-full z-20  h-[460px] md:w-5/12 relative"
      >
        <img
          className="absolute object-cover  z-20 w-[240px] h-[240px] bottom-0 left-0 border-2 border-[#3183a9]"
          src="https://norteenlinea.com/media/k2/items/cache/80bb739c86fe521ed43709e93dbc77a6_XL.jpg"
          alt=""
        />
        <img
          className="absolute object-cover left-0 top-0 w-full h-[90%] border-2 border-[#3183a9]"
          src={preTwo}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Presentation;
