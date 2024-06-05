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
      onClick={() => handleChangeParamId(id, setParamURL, setParamId)}
      className="cursor-pointer w-[300px] h-auto md:w-[390px] text-justify group/notice  border-[#3183a9] flex-shrink-0 overflow-hidden hover:bg-[#3183a9]/20 duration-500"
    >
      <div className="overflow-hidden relative">
        <img
          className="w-[300px] md:w-[390px] h-[240px] z-[9999 ]  group-hover/notice:scale-110 scale duration-500 transition-all"
          src={`${ENDPOINTS.DIR_IMG}/${files}`}
          alt="Imagen"
        />
        <p className="absolute bottom-4 left-0 bg-red-600 p-2 z-20 text-white  text-end text-sm mt-2 ">
          <span>{date_published}</span>
        </p>
      </div>
      <div className="px-2 py-4 relative overflow-hidden">
        <a className="relative line-clamp-3 text-gray-300 font-bold  z-10 text-lg group-hover/notice:text-white mb-2">
          {title}
        </a>
        <p className="relative z-10 text-gray-300 group-hover/notice:text-white font-light text-sm line-clamp-3">
          {content}
        </p>
      </div>
    </motion.div>
  );
};

export default CardNoticeHome;
