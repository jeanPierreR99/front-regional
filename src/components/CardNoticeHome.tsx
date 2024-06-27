import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import ENDPOINTS from "../config";
import { useParam, useParamId } from "../context/Context.provider";
import { DataNotice } from "../routes/RouteDefault";
import { handleChangeParamId } from "../functions";

const CardNoticeHome: React.FC<DataNotice> = ({
  id,
  title,
  files,
  content,
  date_published,
}) => {
  const { setParamURL } = useParam();
  const { setParamId } = useParamId();

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
      onClick={() => handleChangeParamId("notice", id, setParamURL, setParamId)}
      className="cursor-pointer w-[300px] h-auto md:w-[390px] text-justify group/notice flex-shrink-0 overflow-hidden hover:shadow-xl duration-300 border-cyan-500"
    >
      <div className="overflow-hidden relative">
        <img
          className="w-[300px] md:w-[390px] h-[240px] z-[9999 ]  group-hover/notice:scale-110 scale duration-500 transition-all"
          src={`${ENDPOINTS.DIR_IMG}/${files}`}
          alt="Imagen"
        />
      </div>
      <div className="px-2 py-4 relative overflow-hidden">
        <span className="relative text-sm line-clamp-3 text-black font-bold  z-10 mb-2">
          {title}
        </span>
        <p className="relative z-10 text-black font-light text-sm line-clamp-3">
          {content}
        </p>
        <span className="text-xs text-gray-500 font-light">{date_published}</span>
        <button
          className="flex float-right text-sm gap-1 text-gray-800 font-bold hover:text-gray-800/70 mt-6"
        >
          Leer Noticia{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default CardNoticeHome;
