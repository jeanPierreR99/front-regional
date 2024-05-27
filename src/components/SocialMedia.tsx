import React from "react";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import whatsapp from "../assets/whatsapp.png";
import x from "../assets/x.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const SocialMedia: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo animar una vez
    threshold: 0.1, // Cuando el 20% del card es visible
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="fixed hidden left-1 bottom-[10px] md:flex flex-col z-[9999]"
    >
      <a
        href="#"
        className="px-2 py-2 bg-blue-900 text-gray-600 hover:scale-110 hover:bg-blue-400 hover:text-white rounded-full mb-2"
      >
        <img src={facebook} alt="Facebook" className="w-8 h-8" />
      </a>
      <a
        href="#"
        className="px-2 py-2 bg-green-700 text-gray-600 hover:scale-110 hover:bg-green-400 hover:text-white rounded-full mb-2"
      >
        <img src={whatsapp} alt="whatsapp" className="w-8 h-8" />
      </a>
      <a
        href="#"
        className="px-2 py-2 bg-red-800 text-gray-600 hover:scale-110 hover:bg-red-400 hover:text-white rounded-full mb-2"
      >
        <img src={youtube} alt="YouTube" className="w-8 h-8" />
      </a>
      <a
        href="#"
        className="px-2 py-2 bg-black text-gray-600 hover:scale-110 hover:bg-gray-400 hover:text-white rounded-full"
      >
        <img src={x} alt="Close" className="w-8 h-8" />
      </a>
    </motion.div>
  );
};

export default SocialMedia;
