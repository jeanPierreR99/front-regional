import React from "react";
import ENDPOINTS from "../config";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { handleChangeParam } from "../functions";
import { useParam, useParamId } from "../context/Context.provider";
import image1 from "../assets/img-main/image-1.jpeg";
import image2 from "../assets/img-main/image-2.jpeg";
import image3 from "../assets/img-main/image-3.jpeg";
import image4 from "../assets/img-main/image-4.jpeg";
import image5 from "../assets/img-main/image-5.jpeg";
import image6 from "../assets/img-main/image-6.jpeg";

const filesLocal = [
  {
    url: image1,
    type: "jpeg",
  },
  {
    url: image2,
    type: "jpeg",
  },
  {
    url: image3,
    type: "jpg",
  },
  {
    url: image4,
    type: "jpg",
  },
  {
    url: image5,
    type: "jpg",
  },
  {
    url: image6,
    type: "jpg",
  },
];

const verifyTypeFile: React.FC = (type: any, url: any) => {
  if (type !== "mp4") {
    return (
      <img
        src={`${ENDPOINTS.DIR_IMG}/${url}`}
        alt="Descripción de la imagen 1"
        className="w-full hover:scale-110 duration-500 h-[290px] md:h-[300px] object-fit"
      />
    );
  }

  return (
    <video
      className="w-full h-[290px] md:h-[300px] object-cover"
      controls
      src={`${ENDPOINTS.DIR_IMG}/${url}`}
    />
  );
};

const verifyTypeFileLocal: React.FC = (type: any, url: any) => {
  const { setParamURL } = useParam();
  const { setParamId } = useParamId();
  if (type !== "mp4") {
    return (
      <img
        onClick={() => handleChangeParam("multimedia", setParamURL, setParamId)}
        src={url}
        alt="Descripción de la imagen 1"
        className="w-full cursor-pointer hover:scale-110 duration-500 h-[290px] md:h-[300px] object-fit"
      />
    );
  }

  return (
    <video
      className="w-full h-[290px] md:h-[300px] object-cover"
      controls
      src={url}
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
      {files.length == 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, x: -100 }}
            animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden  col-span-1"
          >
            {verifyTypeFileLocal(filesLocal[0].type, filesLocal[0].url)}
          </motion.div>
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, x: 100 }}
            animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden  col-span-1"
          >
            {verifyTypeFileLocal(filesLocal[1].type, filesLocal[1].url)}
          </motion.div>
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 100 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden  col-span-1"
          >
            {verifyTypeFileLocal(filesLocal[2].type, filesLocal[2].url)}
          </motion.div>
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 100 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden  col-span-1"
          >
            {verifyTypeFileLocal(filesLocal[3].type, filesLocal[3].url)}
          </motion.div>
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 100 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden  col-span-1"
          >
            {verifyTypeFileLocal(filesLocal[4].type, filesLocal[4].url)}
          </motion.div>
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 100 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden  col-span-1"
          >
            {verifyTypeFileLocal(filesLocal[5].type, filesLocal[5].url)}
          </motion.div>
        </div>
      )}
      {files.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {files.map((data: any) => (
            <div className="overflow-hidden  col-span-1">
              {verifyTypeFile(data.type, data.url)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GallerySection;
