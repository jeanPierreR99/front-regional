import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import gobierno from "../assets/img-icon/link-gobierno.png";
import iconNotice from "../assets/img-icon/icon-noticia.png";
import coer from "../assets/img-icon/link-coer.png";
import datas from "../assets/img-icon/link-datas.png";

const Links: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap gap-2 md:gap-10 justify-around md:justify-center items-center text-center"
    >
      <a
        href="https://datass.vivienda.gob.pe/"
        className="w-[170px] bg-blue-700 transition-all duration-300 items-center justify-center h-[150px] flex flex-col gap-2 shadow-lg shadow-blue-600/40 text-white font-bold p-8 rounded-lg hover:scale-125"
      >
        <img src={datas} className="w-[70%] h-[70%]" alt="" />
        <span>DATASS</span>
      </a>
      <a
        href="https://datass.vivienda.gob.pe/"
        className="w-[170px] bg-blue-700 transition-all duration-300 items-center justify-center h-[150px] flex flex-col gap-2 shadow-lg shadow-blue-600/40 text-white font-bold p-8 rounded-lg hover:scale-125"
      >
        <img src={gobierno} className="w-[70%] h-[70%]" alt="" />
        <span>GOGIERNO REGIONAL</span>
      </a>
      <a
        href="https://datass.vivienda.gob.pe/"
        className="w-[170px] bg-blue-700 transition-all duration-300 items-center justify-center h-[150px] flex flex-col gap-2 shadow-lg shadow-blue-600/40 text-white font-bold p-8 rounded-lg hover:scale-125"
      >
        <img src={coer} className="w-[70%] h-[70%]" alt="" />
        <span>COER</span>
      </a>
      <a
        href="https://datass.vivienda.gob.pe/"
        className="w-[170px] bg-blue-700 transition-all duration-300 items-center justify-center h-[150px] flex flex-col gap-2 shadow-lg shadow-blue-600/40 text-white font-bold p-8 rounded-lg hover:scale-125"
      >
        <img src={iconNotice} className="w-[70%] h-[70%]" alt="" />
        <span>Noticias</span>
      </a>
    </motion.div>
  );
};
export default Links;
