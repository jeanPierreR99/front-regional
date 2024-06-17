import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import logro from "../assets/logro.png";
import historia from "../assets/historia.png";
import compromiso from "../assets/compromiso.png";

const HistoryLog: React.FC = () => {
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
        <div className="w-full md:w-4/12 md:order-1">
          <img
            src={historia}
            alt="historia"
            className="w-full object-contain h-[200px] img-mision"
          />
        </div>
        <div className="w-full md:w-8/12">
          <h2 className="text-2xl md:text-4xl text-gray-900 mb-1 font-black">
            HISTORIA
          </h2>
          <p className="leading-relaxed text-gray-500">
            Nuestra organización nació con el propósito de atender las
            necesidades críticas de infraestructura y saneamiento en la región
            de Madre de Dios. Desde nuestros inicios, hemos trabajado arduamente
            para superar los desafíos únicos que presenta esta región amazónica,
            caracterizada por su vasta biodiversidad y sus complejas necesidades
            sociales. A lo largo de los años, hemos implementado numerosos
            proyectos que han transformado la vida de miles de personas,
            proporcionando acceso a agua potable, mejorando la infraestructura
            de saneamiento y contribuyendo al desarrollo sostenible de la
            región. Cada paso que damos está guiado por nuestro compromiso con
            la calidad, la seguridad y la sostenibilidad ambiental.
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
        <div className="w-full md:w-4/12">
          <img
            src={compromiso}
            alt="compromiso"
            className="w-full object-contain h-[200px] img-mision"
          />
        </div>
        <div className="w-full md:w-8/12">
          <h2 className="text-2xl md:text-4xl text-gray-900 mb-1 font-black">
            COMPROMISO
          </h2>
          <p className="leading-relaxed text-gray-500">
            Nuestro compromiso se centra en garantizar que cada proyecto que
            llevamos a cabo no solo cumpla con los más altos estándares
            técnicos, sino que también respete y proteja los ecosistemas únicos
            de Madre de Dios. Estamos dedicados a:
          </p>
          <ul className="list-none">
            <li className="mb-2 text-gray-500 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
              <strong className="font-semibold">Calidad y Seguridad:</strong>
              Implementar prácticas de construcción y saneamiento que aseguren
              la durabilidad y la seguridad de nuestras obras.
            </li>
            <li className="mb-2 text-gray-500 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
              <strong className="font-semibold">
                Sostenibilidad Ambiental:
              </strong>
              Adoptar enfoques que minimicen el impacto ambiental, promoviendo
              la conservación de la biodiversidad y los recursos naturales.
            </li>
            <li className="mb-2 text-gray-500 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
              <strong className="font-semibold">
                Innovación y Mejora Continua:
              </strong>
              Buscar constantemente nuevas tecnologías y métodos que optimicen
              nuestros procesos y resultados, alineándonos con las mejores
              prácticas globales.
            </li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        ref={ref3}
        initial={{ opacity: 0, y: 100 }}
        animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="flex md:flex-row flex-col"
      >
        <div className="w-full md:w-4/12 md:order-1">
          <img
            src={logro}
            alt="logro"
            className="w-full object-contain h-[200px] img-mision"
          />
        </div>
        <div className="w-full md:w-8/12">
          <h2 className="text-2xl md:text-4xl text-gray-900 mb-1 font-black">
            LOGROS Y RECONOCIMIENTOS
          </h2>
          <ul className="list-none">
            <li className="mb-2 text-gray-500 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
              Hemos completado más de 50 proyectos de saneamiento en áreas
              urbanas y rurales, proporcionando acceso a agua potable y
              mejorando las condiciones de vida de miles de familias.
            </li>
            <li className="mb-2 text-gray-500 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
              Desarrollamos infraestructuras utilizando materiales y técnicas
              sostenibles, reduciendo el impacto ambiental y promoviendo la
              conservación de los recursos naturales de Madre de Dios.
            </li>
            <li className="mb-2 text-gray-500 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
              Hemos lanzado programas educativos que han capacitado a más de
              10,000 personas en prácticas sostenibles y seguras de construcción
              y saneamiento, fomentando una cultura de cuidado ambiental.
            </li>
            <li className="mb-2 text-gray-500 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
              Trabajamos en colaboración con autoridades locales para
              regularizar la minería informal, minimizando sus impactos
              negativos en el medio ambiente y mejorando la seguridad de los
              trabajadores.
            </li>
            <li className="mb-2 text-gray-500 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
              Recibimos este reconocimiento de la Gobernación Regional de Madre
              de Dios por nuestro compromiso y liderazgo en el desarrollo
              sostenible de la región.
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default HistoryLog;
