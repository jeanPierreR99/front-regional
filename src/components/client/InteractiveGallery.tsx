import React, { useState } from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import ENDPOINTS from "../../config";
import carpeta_cerrada from "../../assets/img-icon/carpeta-red.png";
import carpeta_abierta from "../../assets/img-icon/carpeta-red-abierta.png";

interface imgVideo {
  type: string;
  url: string;
}
interface imagesAndVideos {
  title: string;
  url: string;
  additionalImages: Array<imgVideo>;
}

export const SliderImageVideo = ({ additionalImages, auto }: any) => {
  const sliderSettings = {
    dots: true,
    autoplay: auto ? true : false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...sliderSettings} className="h-[500x]">
        {additionalImages.map((item: any, index: any) => (
          <div
            key={index}
            className={`${auto ? "h-[400px]" : "h-[400px] md:h-[500px]"}`}
          >
            {item.type !== "mp4" ? (
              <img
                src={`${ENDPOINTS.DIR_IMG}/${item.url}`}
                alt={`Contenido ${index}`}
                className={`${
                  auto ? "h-[400px]" : "h-[400px] md:h-[500px]"
                } w-full object-fill`}
              />
            ) : (
              <div
                className={`${
                  auto ? "h-[400px]" : "h-[400px] md:h-[500px]"
                } flex items-center justify-center`}
              >
                <ReactPlayer
                  url={`${ENDPOINTS.DIR_IMG}/${item.url}`}
                  controls
                />
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

const InteractiveGallery: React.FC<imagesAndVideos> = ({
  title,
  url,
  additionalImages,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="">
      <div className="group/gallery">
        <img
          src={carpeta_cerrada}
          alt="Imagen de vista previa"
          onClick={openModal}
          className="cursor-pointer h-32 m-auto group-hover/gallery:hidden"
        />
        <img
          src={carpeta_abierta}
          alt="Imagen de vista previa"
          onClick={openModal}
          className="cursor-pointer group-hover/gallery:block hidden  hover:scale-110  h-32 m-auto group-hover/galeryImage:scale-110 duration-500"
        />
      </div>
      <span className="line-clamp-2 overflow-hidden text-center text-xs text-gray-600">
        {title}
      </span>
      {modalIsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
          <div className="relative w-10/12">
            <button
              onClick={closeModal}
              className="absolute -top-10 -right-4 text-white text-2xl z-10"
            >
              &times;
            </button>
            <SliderImageVideo
              additionalImages={additionalImages}
            ></SliderImageVideo>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveGallery;
