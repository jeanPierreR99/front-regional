import React, { useEffect } from "react";
import Slider from "../../components/client/Slider";
import CardNotice from "../../components/client/CardNotice";
import {
  useNotice,
  useParam,
  useParamId,
} from "../../context/Context.provider";
import ENDPOINTS from "../../config";
import VideoPlayer from "../../components/client/VideoPlayer";
import SliderLogo from "../../components/client/SliderLogo";
import InteractiveGallery from "../../components/client/InteractiveGallery";
import { handleChangeParam } from "../../functions";
import { useSearchParams } from "react-router-dom";

const Inicio: React.FC = () => {
  const { paramNotice } = useNotice();
  const { setParamURL } = useParam();
  const { setParamId } = useParamId();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const imagesAndVideos = {
    title: "Transformando Comunidades a través del Saneamiento Responsable",
    url: "https://www.shutterstock.com/image-photo/asian-boy-washing-his-hand-260nw-1962143329.jpg",
    images: [
      {
        url: "./uploads/665f49f528b415.88990908.jpeg",
        type: "jpg",
      },
      {
        url: "./uploads/6674615c057e06.65318327.mp4",
        type: "mp4",
      },
      {
        url: "./uploads/6674615c11d588.39796615.png",
        type: "jpg",
      },
      {
        url: "./uploads/6674615c057e06.65318327.mp4",
        type: "mp4",
      },
    ],
  };

  return (
    <div className="bg-gray-200 py-1">
      <div className="hidden md:block">
        <Slider></Slider>
      </div>
      <div className="md:mx-28 mx-2 pt-8 bg-white p-2 pb-20">
        <div className="pb-10">
          <div className="relative mb-4">
            <span className="w-full h-1 bg-red-600 absolute top-[50%]"></span>
            <span className="bg-red-600 w-fit relative z-[9] text-white py-2 pr-6 flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
              </svg>
              Ultimas Noticias
            </span>
          </div>
          {!paramNotice && <span>Cargando...</span>}
          {paramNotice && (
            <div className="md:grid grid-cols-2 gap-2">
              <div className="mb-10 md:mb-0 flex flex-col gap-2 col-span-1">
                <img
                  className="h-[300px] md:h-[400px] w-full object-fill"
                  src={`${ENDPOINTS.DIR_IMG}/${
                    paramNotice && paramNotice[3].files[0].url
                  }`}
                  alt=""
                />
                <span className="text-3xl text-red-600 font-bold font-serif">
                  {paramNotice && paramNotice[3].title}{" "}
                </span>

                <div className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 text-gray-500"
                  >
                    <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                    <path
                      fill-rule="evenodd"
                      d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-500 font-light text-xs">
                    {paramNotice && paramNotice[3].date_published}
                  </span>
                </div>
                <button className="w-fit flex gap-2 items-center text-gray-500 font-light text-xs hover:text-gray-600">
                  Leer mas{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M17.303 5.197A7.5 7.5 0 0 0 6.697 15.803a.75.75 0 0 1-1.061 1.061A9 9 0 1 1 21 10.5a.75.75 0 0 1-1.5 0c0-1.92-.732-3.839-2.197-5.303Zm-2.121 2.121a4.5 4.5 0 0 0-6.364 6.364.75.75 0 1 1-1.06 1.06A6 6 0 1 1 18 10.5a.75.75 0 0 1-1.5 0c0-1.153-.44-2.303-1.318-3.182Zm-3.634 1.314a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="">
                {paramNotice && (
                  <div className=" flex flex-col gap-2 overflow-x-hidden">
                    {Array.isArray(paramNotice) &&
                      paramNotice
                        .slice(1, 5)
                        .map((data) => (
                          <CardNotice
                            key={data.id}
                            id={data.id}
                            title={data.title}
                            files={data.files[0].url}
                            content={data.content}
                            create_at={data.create_at}
                            date_published={data.date_published}
                          ></CardNotice>
                        ))}
                  </div>
                )}
                <div className="mt-2 text-center">
                  <button
                    onClick={() =>
                      handleChangeParam(
                        "notice",
                        setParamURL,
                        setParamId,
                        setSearchParams
                      )
                    }
                    className="border border-blue-500 px-2 py-1 text-blue-500 text-sm hover:bg-blue-500 hover:text-white duration-200"
                  >
                    Ver mas
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="py-10">
          <div className="relative mb-4">
            <span className="w-full h-1 bg-red-600 absolute top-[50%]"></span>
            <span className="bg-red-600 w-fit relative z-[9] text-white py-2 pr-6 flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                  clip-rule="evenodd"
                />
              </svg>
              Galeria de Imágenes y Videos
            </span>
          </div>
          {!paramNotice && <span>Cargando...</span>}
          {paramNotice && (
            <div className="md:grid grid-cols-2 gap-2">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <InteractiveGallery
                  title={imagesAndVideos.title}
                  url={"./uploads/665f4b64321392.86965178.jpg"}
                  additionalImages={imagesAndVideos.images}
                ></InteractiveGallery>
                <InteractiveGallery
                  title={imagesAndVideos.title}
                  url={"./uploads/665f4b643063f8.61197010.jpg"}
                  additionalImages={imagesAndVideos.images}
                ></InteractiveGallery>
                <InteractiveGallery
                  title={imagesAndVideos.title}
                  url={"./uploads/665f4b642d5715.58596743.jpg"}
                  additionalImages={imagesAndVideos.images}
                ></InteractiveGallery>
                <InteractiveGallery
                  title={imagesAndVideos.title}
                  url={"./uploads/665f49f528b415.88990908.jpeg"}
                  additionalImages={imagesAndVideos.images}
                ></InteractiveGallery>
                <InteractiveGallery
                  title={imagesAndVideos.title}
                  url={"./uploads/665f49f528b415.88990908.jpeg"}
                  additionalImages={imagesAndVideos.images}
                ></InteractiveGallery>
                <InteractiveGallery
                  title={imagesAndVideos.title}
                  url={"./uploads/665f4aa5d04421.22463267.jpg"}
                  additionalImages={imagesAndVideos.images}
                ></InteractiveGallery>
              </div>
              <div className="mt-2 md:mt-0">
                <VideoPlayer></VideoPlayer>
              </div>
            </div>
          )}
        </div>
        <div className="mt-8">
          <div className="relative mb-4">
            <span className="w-full h-1 bg-red-600 absolute top-[50%]"></span>
            <span className="bg-red-600 w-fit relative z-[9] text-white py-2 pr-6 flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                  clip-rule="evenodd"
                />
                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
              </svg>
              Nuestros Aliados
            </span>
          </div>
          <SliderLogo></SliderLogo>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
