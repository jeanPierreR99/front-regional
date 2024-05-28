import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import mision from "../assets/mision.png";
import vision from "../assets/vision.png";
import objetivos from "../assets/objetivos.png";
const Mision: React.FC = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  return (
    <div className="px-2 pb-16 md:px-4 lg:px-16 flex flex-col gap-16 pixel">
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, x: 100 }}
        animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="flex md:flex-row flex-col"
      >
        <div className="w-full md:w-4/12">
          <img
            src={vision}
            alt="mision"
            className="w-full object-contain h-[200px] img-mision"
          />
        </div>
        <div className="w-full md:w-8/12">
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-1 font-black">
            MISIÓN
          </h2>
          <p className="leading-relaxed text-gray-300 font-light">
            Trabajamos incansablemente para garantizar que cada proyecto de
            construcción y saneamiento en Madre de Dios cumpla con los más altos
            estándares de calidad, seguridad y sostenibilidad ambiental. Nuestra
            misión es mejorar la calidad de vida de la población, promoviendo el
            acceso equitativo a servicios básicos y protegiendo los valiosos
            ecosistemas amazónicos que nos rodean.
          </p>
        </div>
      </motion.div>
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, x: -100 }}
        animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex md:flex-row flex-col"
      >
        <div className="w-full md:w-4/12 md:order-1">
          <img
            src={mision}
            alt="mision"
            className="w-full object-contain h-[200px] img-mision"
          />
        </div>
        <div className="w-full md:w-8/12">
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-1 font-black">
            VISIÓN
          </h2>
          <p className="leading-relaxed text-gray-300 font-light">
            Ser reconocidos como líderes regionales en la promoción de un
            desarrollo sostenible y equitativo, donde la infraestructura de
            construcción y saneamiento se convierta en un motor de progreso,
            preservando al mismo tiempo la riqueza natural de Madre de Dios.
          </p>
        </div>
      </motion.div>
      <motion.div
        ref={ref3}
        initial={{ opacity: 0, y: 100 }}
        animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="flex md:flex-row flex-col"
      >
        <div className="w-full md:w-4/12 ">
          <img
            src={objetivos}
            alt="objetivos"
            className="w-full object-contain h-[200px] img-mision"
          />
        </div>
        <div className="w-full md:w-8/12">
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-1 font-black">
            OBJETIVOS
          </h2>
          <ul className="list-none">
            <li className="mb-2 font-light text-gray-300 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
              Mejorar la infraestructura urbana y rural para garantizar acceso
              equitativo a servicios básicos.
            </li>
            <li className="mb-2 font-light text-gray-300 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
              Promover prácticas sostenibles en construcción y saneamiento para
              conservar el medio ambiente.
            </li>
            <li className="mb-2 font-light text-gray-300 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
              Regularizar la minería informal para minimizar impactos negativos.
            </li>
            <li className="mb-2 font-light text-gray-300 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
              Fortalecer la gestión de riesgos naturales mediante medidas
              preventivas y mitigadoras.
            </li>
            <li className="mb-2 font-light text-gray-300 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
              Educar y sensibilizar a la comunidad sobre el cuidado del medio
              ambiente y prácticas seguras en construcción y saneamiento.
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Mision;
