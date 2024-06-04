import ENDPOINTS from "../config";
import { useParam, useParamId } from "../context/Context.provider";
import { DataNotice } from "../routes/RouteDefault";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
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
  const handleChangeParam = (newParam: string) => {
    setParamURL("notice");
    setParamId(newParam);
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.delete("search");
    newSearchParams.delete("id");
    newSearchParams.append("search", "notice");
    newSearchParams.append("id", newParam);
    const newUrl = `?${newSearchParams.toString()}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      onClick={() => handleChangeParam(id)}
      className="flex cursor-pointer h-[180px] md:w-full group/notice hover:bg-[#3183a9]/20 duration-500 flex-shrink-0 overflow-hidden   hover:scale-110"
    >
      <div className="overflow-hidden relative w-4/12">
        <img
          className="object-fit w-full h-full"
          src={`${ENDPOINTS.DIR_IMG}/${files}`}
          alt="Imagen"
        />
      </div>
      <div className="px-4 py-2 w-8/12 relative overflow-hidden">
        <a className="line-clamp-3 text-gray-300 font-bold group-hover/notice:text-white text-lg">
          {title}
        </a>
        <p className="text-gray-300 text-sm line-clamp-3 group-hover/notice:text-white">
          {content}
        </p>
        <p className="text-gray-400 font-light text-sm line-clamp-3 group-hover/notice:text-white">
          {date_published}
        </p>
      </div>
    </motion.div>
  );
};

export default CardNotice;
