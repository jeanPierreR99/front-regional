import React from "react";
import ENDPOINTS from "../config";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { handleChangeParamId } from "../functions";
import { useParam, useParamId } from "../context/Context.provider";
interface cardPostProps {
  id: String;
  img: String;
  title: String;
  content: String;
  date_published: String;
}

const CardPost: React.FC<cardPostProps> = ({
  id,
  img,
  title,
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
      className="w-[190px] md:w-[320px] flex flex-col hover:bg-gray-100 gap-2 flex-shrink-0 group/post cursor-pointer"
      onClick={() =>
        handleChangeParamId("post", id.toString(), setParamURL, setParamId)
      }
    >
      <div className="h-[300px] md:h-[350px] w-full overflow-hidden">
        <img
          className="w-full h-full group-hover/post:scale-110 duration-500"
          src={`${ENDPOINTS.DIR_IMG}/${img}`}
          alt="img"
        />
      </div>
      <div className="text-left flex flex-col px-2">
        <a className="line-clamp-2 text-sm text-black font-bold">{title}</a>
        <p className="text-black text-sm font-light line-clamp-3 ">{content}</p>
        <span className="text-gray-500 text-right font-light text-xs line-clamp-2 ">
          {date_published}
        </span>
      </div>
    </motion.div>
  );
};

export default CardPost;
