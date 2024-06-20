import React, { useEffect } from "react";
import Slider from "../../components/Slider";
import CardNoticeHome from "../../components/CardNoticeHome";
import Presentation from "../../components/Presentation";
import { useNotice } from "../../context/Context.provider";
import CardProjects from "../../components/CardProjects";
import GallerySection from "../../components/GallerySection";
import Links from "../../components/Links";
import SocialMedia from "../../components/SocialMedia";
import CardNoticeFacebook from "../../components/CardNoticeFacebook";

const Inicio: React.FC = () => {
  const { paramNotice } = useNotice();

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="">
      <Slider></Slider>
      <div className="flex flex-col  overflow-hidden relative">
        <div>
          <Presentation></Presentation>
        </div>
        <div>{/* <CircleArea></CircleArea> */}</div>
        <div className="px-4 py-2 md:px-4 lg:px-16 mt-14">
          <div className="flex flex-col mb-10">
            <h6 className="merienda relative text-2xl md:text-5xl w-fit m-auto text-gray-900 font-black before:w-4/12 before:translate-x-[-50%] before:h-[3px] before:absolute before:left-[50%] before:bottom-[-15px] before:bg-red-600">
              Ultimas Noticias
            </h6>
          </div>
          <div className="flex gap-4 md:justify-center py-6 px-2 overflow-x-auto">
            {Array.isArray(paramNotice) &&
              paramNotice
                .slice(0, 3)
                .map((data) => (
                  <CardNoticeHome
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    files={data.files[0].url}
                    content={data.content}
                    create_at={data.create_at}
                    date_published={data.date_published}
                  ></CardNoticeHome>
                ))}
          </div>
          <CardNoticeFacebook></CardNoticeFacebook>
        </div>
        <div className="px-4  md:px-4 lg:px-16 mt-14 flex flex-col  items-center bg-gray-200  gap-10 py-8">
          <div className="flex z-10 flex-col justify-center items-center">
            <h5 className="text-2xl relative md:text-5xl merienda font-black w-fit m-auto text-gray-900 before:w-4/12 before:translate-x-[-50%] before:h-[3px] before:absolute before:left-[50%] before:bottom-[-15px] before:bg-red-600">
              Nuestros Proyectos
            </h5>
          </div>
          <CardProjects></CardProjects>
          <div className="flex w-full justify-end">
            <a
              href="https://www.youtube.com/watch?v=wWnvjlezl24"
              target="__blank"
              className="flex gap-1 border border-black hover:bg-cyan-500 p-2 text-gray-900 font-bold hover:text-gray-900 duration-300 hover:border-cyan-500 w-fit mt-10 "
            >
              Ver mas proyectos
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
            </a>
          </div>
        </div>
        <div className="px-4 py-2 md:px-4 lg:px-16 mt-14">
          <div className="flex flex-col mb-10">
            <h6 className="merienda relative text-2xl md:text-5xl w-fit m-auto text-gray-900 font-black before:w-4/12 before:translate-x-[-50%] before:h-[3px] before:absolute before:left-[50%] before:bottom-[-15px] before:bg-red-600">
              Multimedia
            </h6>
          </div>
          <div className="py-6">
            {Array.isArray(paramNotice) && paramNotice.length > 0 && (
              <GallerySection files={[]}></GallerySection>
            )}
          </div>
        </div>
        <div className="px-4 py-2 md:px-4 lg:px-16 mt-6">
          <div className="flex flex-col gap-10">
            <h6 className="merienda relative mb-10 text-2xl md:text-5xl w-fit m-auto text-gray-900 font-black before:w-4/12 before:translate-x-[-50%] before:h-[3px] before:absolute before:left-[50%] before:bottom-[-15px] before:bg-red-600">
              Enlaces de Interes
            </h6>
          </div>
          <div className="py-6 mx-2">
            <Links></Links>
          </div>
        </div>
      </div>
      <SocialMedia></SocialMedia>
    </div>
  );
};

export default Inicio;
