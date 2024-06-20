import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { handleChangeParamId } from "../functions";
import { useParam, useParamId, usePost } from "../context/Context.provider";
import ENDPOINTS from "../config";

const Slider: React.FC = () => {
  const [currSlide, setCurrSlide] = useState<number>(0);
  const { paramPost } = usePost();
  const { setParamURL } = useParam();
  const { setParamId } = useParamId();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const maxSlide = paramPost?.length;
  const nextSlide = () => {
    setCurrSlide((prevSlide) =>
      prevSlide === maxSlide - 1 ? 0 : prevSlide + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrSlide(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  const prevSlide = () => {
    setCurrSlide((prevSlide) =>
      prevSlide === 0 ? maxSlide - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    // preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  return (
    <div
      {...swipeHandlers}
      className="relative h-[calc(100vh-180px)] md:h-screen w-full overflow-hidden"
    >
      <div className="absolute top-0 left-0 background-slider w-full h-full"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      <button
        onClick={prevSlide}
        className="absolute w-10 h-10 ml-2 hidden cursor-pointer font-bold text-white/60 hover:text-white rounded-full bg-white/20 hover:bg-cyan-500 duration-200 leading-tight text-center z-[600] top-[50%] translate-y-[-50%] left-0 md:flex items-center justify-center"
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
        className="absolute w-10 h-10 mr-2 hidden cursor-pointer font-bold text-white/60 hover:text-white rounded-full bg-white/20 hover:bg-cyan-500 duration-200 leading-tight text-center z-[600] top-[50%] translate-y-[-50%] right-0 md:flex items-center justify-center"
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
      <div
        className="flex h-full w-full transition-transform duration-700 pb-10"
        style={{ transform: `translateX(-${currSlide * 100}%)` }}
      >
        {paramPost &&
          paramPost.map((data: any, index: any) => (
            <div
              key={index}
              className="relative flex-shrink-0 flex flex-col md:flex-row w-full h-full px-4"
            >
              <div className="w-full md:w-6/12 h-6/12 pt-36 md:pt-0  flex flex-col justify-center text-white md:px-14">
                <h4 className="md:text-5xl merienda text-cyan-400 text-2xl font-black line-clamp-3 md:leading-tight">
                  {data.title}
                </h4>
                <h4 className="md:text-lg mt-4  line-clamp-5">
                  {data.content}
                </h4>
                <div className="flex my-4 justify-end">
                  <button
                    onClick={() =>
                      handleChangeParamId(
                        "post",
                        data.id.toString(),
                        setParamURL,
                        setParamId
                      )
                    }
                    className="flex  p-3 border text-white duration-300 hover:bg-cyan-400 hover:border-cyan-400  gap-1 font-bold hover:text-gray-900 w-fit"
                  >
                    Ver comunicado
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="w-full items-center justify-center flex md:w-6/12 h-full overflow-hidden relative m-auto">
                <img
                  src={`${ENDPOINTS.DIR_IMG}/${data.file.url}`}
                  alt={`Slide ${index + 1}`}
                  className="md:w-[70%] w-[70%] h-full md:h-[80%] shadow-2xl"
                />
              </div>
            </div>
          ))}
      </div>
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2 z-[600]">
        {paramPost &&
          paramPost.map((_: any, index: any) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currSlide ? "bg-cyan-400" : "bg-cyan-100"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
      </div>
    </div>
  );
};

export default Slider;
