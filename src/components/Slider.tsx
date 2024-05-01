import React, { useState, useEffect } from "react";
import TypewriterText from "./TypeWriterText";

const Slider: React.FC = () => {
  const [currSlide, setCurrSlide] = useState<number>(0);
  const slides: string[] = [
    "https://e.rpp-noticias.io/xlarge/2023/01/19/074207_1377242.jpg",
    "https://scontent.faqp2-2.fna.fbcdn.net/v/t31.18172-8/14500368_1745064772424258_3132535929541907353_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gkwh6dEOzUQQ7kNvgGWOOZb&_nc_ht=scontent.faqp2-2.fna&oh=00_AfAG116byb29AzcdtW4Hb-Cjb6AOuoqTz1jJgyf23WiVgA&oe=6651EF1E",
    "https://turismoi.pe/uploads/photo/version2/photo_file/41896/optimized_optimized_2011_03.JPG",
    "https://cdn.www.gob.pe/uploads/document/file/2148734/standard_WhatsApp%20Image%202021-09-01%20at%204.52.01%20PM.jpeg.jpeg",
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
    <div className="relative h-[400px] md:h-screen">
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
        <h4 style={{ lineHeight: "1.4" }} className="md:text-5xl tracking-wide merienda text-center text-2xl font-black">
          DIRECCIÓN REGIONAL DE VIVIENDA, CONSTRUCCIÓN Y SANEAMIENTO
        </h4>
        <TypewriterText></TypewriterText>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 h-full w-full">
          <div className="h-full w-full bg-green-700 opacity-40 transform origin-bottom-right "></div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
      <button
        onClick={prevSlide}
        className="absolute w-10 h-10 ml-2 md:ml-10 cursor-pointer font-bold text-white/60 hover:text-white rounded-full bg-white/20 hover:bg-red-700 leading-tight text-center z-[600] top-[50%] translate-y-[-50%] left-0 flex items-center justify-center"
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
        className="absolute w-10 h-10 mr-2 md:mr-10 cursor-pointer font-bold text-white/60 hover:text-white rounded-full bg-white/20 hover:bg-red-700 leading-tight text-center z-[600] top-[50%] translate-y-[-50%] right-0 flex items-center justify-center"
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
    </div>
  );
};

export default Slider;
