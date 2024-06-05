import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import portadaOne from "../assets/image-1.jpeg";
import portadaTwo from "../assets/image-3.jpeg";
const Slider: React.FC = () => {
  const [currSlide, setCurrSlide] = useState<number>(0);

  const { ref, inView } = useInView({
    triggerOnce: true, // Solo animar una vez
    threshold: 0.1, // Cuando el 20% del card es visible
  });

  const slides: string[] = [
    portadaTwo,
    "https://e.rpp-noticias.io/xlarge/2023/01/19/074207_1377242.jpg",
    portadaOne,
    "https://turismoi.pe/uploads/photo/version2/photo_file/41896/optimized_optimized_2011_03.JPG",
  ];

  const maxSlide: number = slides.length;

  const nextSlide = () => {
    setCurrSlide(currSlide === maxSlide - 1 ? 0 : currSlide + 1);
  };

  const prevSlide = () => {
    setCurrSlide(currSlide === 0 ? maxSlide - 1 : currSlide - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Cambié la duración a 5 segundos (5000 milisegundos)
    return () => clearInterval(interval);
  }, [currSlide]);

  return (
    <div className="relative h-[600px] md:h-screen">
      <div className="overflow-hidden  w-full h-full">
        <div
          className="flex w-full h-full transition-transform duration-1000"
          style={{ transform: `translateX(-${currSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]  z-[100] text-white w-9/12 md:w-10/12">
        <motion.h4
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="md:text-5xl anton-regular text-center text-3xl"
        >
          DIRECCIÓN REGIONAL DE VIVIENDA, CONSTRUCCIÓN Y SANEAMIENTO MDD
          {/* DRVCS MDD */}
        </motion.h4>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl text-center"
        >
          {/* Trabajamos para mejorar la calidad de vida a través de proyectos de */}
          {/* {/* vivienda y saneamiento. */}
        </motion.p>
        {/* <TypewriterText></TypewriterText> */}
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 h-full w-full">
          <div className="h-full w-full bg-blue-900 opacity-40 transform origin-bottom-right "></div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>
      <button
        onClick={prevSlide}
        className="absolute w-10 h-10 ml-2 md:ml-10 cursor-pointer font-bold text-white/60 hover:text-white rounded-full bg-white/20 hover:bg-blue-400 duration-200 leading-tight text-center z-[600] top-[50%] translate-y-[-50%] left-0 flex items-center justify-center"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute w-10 h-10 mr-2 md:mr-10 cursor-pointer font-bold text-white/60 hover:text-white rounded-full bg-white/20 hover:bg-blue-400 duration-200 leading-tight text-center z-[600] top-[50%] translate-y-[-50%] right-0 flex items-center justify-center"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div className="z-[600] text-white absolute bottom-10 left-[50%] translate-x-[-50%]">
        <a href="#presentation">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-7 h-7 animate-bounce"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Slider;
