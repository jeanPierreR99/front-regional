import React, { useState, useEffect, useRef } from "react";
import { handleChangeParamId } from "../../functions";
import { useParam, useParamId, usePost } from "../../context/Context.provider";
import ENDPOINTS from "../../config";
import { useSearchParams } from "react-router-dom";

const Slider: React.FC = () => {
  const [currSlide, setCurrSlide] = useState<number>(0);
  const { paramPost } = usePost();
  const { setParamURL } = useParam();
  const { setParamId } = useParamId();
  const [searchParams, setSearchParams] = useSearchParams();

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const maxSlide = paramPost?.filter((post: any) => post.status === 1).length;
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
    intervalRef.current = setInterval(nextSlide, 3500);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 3500);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [paramPost]);
  return (
    <div className="relative bg-red-600 h-[350px] mx-28 overflow-hidden">
      {!paramPost && (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h1 className="text-3xl md:text-6xl text-white font-bold">
            DRVCS - MDD
          </h1>
        </div>
      )}
      <div
        className="flex h-full w-full transition-transform duration-700 pb-10 md:pb-0"
        style={{ transform: `translateX(-${currSlide * 100}%)` }}
      >
        {paramPost &&
          paramPost
            .filter((data: any) => data.status === 1)
            .map((data: any, index: any) => (
              <div
                key={index}
                className="flex-shrink-0 overflow-hidden flex flex-col w-full h-full"
              >
                <div className="grid grid-cols-3">
                  <div className="w-full col-span-1 p-8">
                    <h4 className=" font-serif text-white text-xl font-black line-clamp-3 md:leading-tight">
                      {data.title}
                    </h4>
                    <h4 className="text-sm font-light text-justify text-white mt-4 line-clamp-5">
                      {data.content}
                    </h4>
                  </div>
                  <button
                    className="col-span-2"
                    onClick={() => {
                      handleChangeParamId(
                        "post",
                        data.id,
                        setParamURL,
                        setParamId,
                        setSearchParams
                      );
                    }}
                  >
                    <img
                      src={`${ENDPOINTS.DIR_IMG}/${data.file.url}`}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full"
                    />
                  </button>
                </div>
              </div>
            ))}
      </div>
      <div className="absolute bottom-5 left-20 space-x-2 z-[9]">
        {paramPost &&
          paramPost
            .filter((data: any) => data.status === 1)
            .map((_: any, index: any) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currSlide ? "bg-yellow-400" : "bg-yellow-100"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
      </div>
    </div>
  );
};

export default Slider;
