import ENDPOINTS from "../config";
import { useParam, useParamId } from "../context/Context.provider";
import { DataNotice } from "../routes/RouteDefault";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { handleChangeParamId } from "../functions";

const CardNotice: React.FC<DataNotice> = ({
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
    threshold: 0.1, // Cuando el 20% del card es visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      onClick={() => handleChangeParamId("notice", id, setParamURL, setParamId)}
      className="flex cursor-pointer h-[135px] md:w-full group/notice hover:bg-gray-100 duration-400 flex-shrink-0 overflow-hidden"
    >
      <div className="overflow-hidden relative w-4/12">
        <img
          className="object-fit w-full h-full group-hover/notice:scale-110 duration-500"
          src={`${ENDPOINTS.DIR_IMG}/${files}`}
          alt="Imagen"
        />
      </div>
      <div className="px-4 py-1 w-8/12 relative overflow-hidden">
        <a className="line-clamp-3 text-sm text-blue-500 font-bold">{title}</a>
        <p className="text-black text-sm font-light line-clamp-2 ">{content}</p>
        <span className="text-gray-500 text-right font-light text-xs line-clamp-2 ">{date_published}</span>
      </div>
    </motion.div>
  );
};

export default CardNotice;
