import React from "react";
import PATH_DOMAIN from "../config";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const verifyTypeFile: React.FC = (type: any, url: any) => {
  if (type !== "mp4") {
    return (
      <img
        src={`${PATH_DOMAIN}/regional/server/${url}`}
        alt="Descripción de la imagen 1"
        className="w-full h-[300px] md:h-[400px] object-fit"
      />
    );
  }

  return (
    <video
      className="w-full h-[300px] md:h-[400px] object-cover"
      controls
      src={`${PATH_DOMAIN}/regional/server/${url}`}
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
    <div className="mx-auto">
      <div className="grid grid-cols-4 gap-1">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: -100 }}
          animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="relative col-span-2 border-2 border-[#3183a9]"
        >
          {verifyTypeFile(files[0].type, files[0].url)}
        </motion.div>
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: 100 }}
          animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="relative col-span-2 border-2  border-[#3183a9]"
        >
          {verifyTypeFile(files[1].type, files[1].url)}
        </motion.div>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 100 }}
          animate={inView2? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="relative col-span-4 border-2  border-[#3183a9]"
        >
          {verifyTypeFile(files[3].type, files[3].url)}
        </motion.div>
      </div>
    </div>
  );
};

export default GallerySection;
