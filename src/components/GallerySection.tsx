import React from "react";
import ENDPOINTS from "../config";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { handleChangeParam } from "../functions";
import { useParam, useParamId } from "../context/Context.provider";

const verifyTypeFile: React.FC = (type: any, url: any) => {
  const { setParamURL } = useParam();
  const {setParamId} = useParamId();
  if (type !== "mp4") {
    return (
      <img
        onClick={() => handleChangeParam("multimedia", setParamURL, setParamId)}
        src={`${ENDPOINTS.DIR_IMG}/${url}`}
        alt="Descripción de la imagen 1"
        className="w-full cursor-pointer hover:scale-110 duration-500 h-[290px] md:h-[400px] object-fit"
      />
    );
  }

  return (
    <video
      className="w-full h-[290px] md:h-[400px] object-cover"
      controls
      src={`${ENDPOINTS.DIR_IMG}/${url}`}
    />
  );
};
const GallerySection: React.FC<any> = ({ files }) => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="mx-auto w-full">
      <div className="grid grid-cols-4 gap-1">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: -100 }}
          animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden col-span-2 border border-[#3183a9]"
        >
          {verifyTypeFile(files[1].type, files[1].url)}
        </motion.div>
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: 100 }}
          animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden col-span-2 border  border-[#3183a9]"
        >
          {verifyTypeFile(files[2].type, files[2].url)}
        </motion.div>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 100 }}
          animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden col-span-4 border  border-[#3183a9]"
        >
          {verifyTypeFile(files[3].type, files[3].url)}
        </motion.div>
      </div>
    </div>
  );
};

export default GallerySection;
