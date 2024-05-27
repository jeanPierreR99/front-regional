import React, { useEffect } from "react";
import Slider from "../../components/Slider";
import CardNoticeHome from "../../components/CardNoticeHome";
import Logo from "../../components/Logo";
import Presentation from "../../components/Presentation";
import Mision from "../../components/Mision";
import { useNotice } from "../../context/Context.provider";
import CardProjects from "../../components/CardProjects";
import GallerySection from "../../components/GallerySection";
import Links from "../../components/Links";
import GalleryFill from "../../components/GalleryFill";
import SocialMedia from "../../components/SocialMedia";

const Inicio: React.FC = () => {
  const { paramNotice } = useNotice();

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="">
      <Slider></Slider>
      <div className="flex flex-col mt-16 overflow-hidden relative">
        <div className="mb-16 px-2 md:px-4 lg:px-16">
          <Logo></Logo>
        </div>
        <div className="">
          <Presentation></Presentation>
        </div>
        <div>
          <Mision></Mision>
        </div>
        <div className="px-2 py-2 md:px-4 lg:px-16 mt-">
          <div className="flex flex-col gap-4">
            <h6 className="relative text-2xl md:text-4xl w-fit m-auto text-gray-300 font-light before:w-4/12 before:translate-x-[-50%] before:h-[3px] before:absolute before:left-[50%] before:bottom-[-5px] before:bg-red-600">
              SANEAMIENTO Y URBANISMO
            </h6>
            <span className="text-gray-300 text-center font-light">
              El saneamiento y el urbanismo constituyen los pilares
              fundamentales para el desarrollo sostenible de nuestras ciudades y
              comunidades. A través de una planificación adecuada y la
              implementación de infraestructuras modernas, podemos garantizar la
              salud pública, la protección del medio ambiente y la calidad de
              vida de todos los habitantes. Desde la gestión eficiente del agua
              y los residuos hasta la creación de espacios verdes accesibles,
              cada aspecto del saneamiento y el urbanismo influye en nuestra
              cotidianidad y en el legado que dejamos a las generaciones
              futuras.
            </span>
            <div className="-mx-10 md:-mx-20 pt-3">
              <GalleryFill></GalleryFill>
            </div>
          </div>
        </div>
        <div className="px-2 py-2 md:px-4 lg:px-16 mt-14">
          <div className="flex flex-col gap-4">
            <h6 className="relative text-2xl md:text-4xl w-fit m-auto text-gray-300 font-light before:w-4/12 before:translate-x-[-50%] before:h-[3px] before:absolute before:left-[50%] before:bottom-[-5px] before:bg-red-600">
              NOTICIAS
            </h6>
            <span className="text-gray-300 text-center font-light">
              Descubre las últimas novedades y acontecimientos relacionados con
              el desarrollo urbano, la vivienda sostenible y los proyectos en
              curso en la región de Madre de Dios. Mantente informado sobre los
              avances y las iniciativas que impactan en nuestra comunidad.
            </span>
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
        </div>
        <div className="mt-10 ">
          <div className="flex flex-col gap-4 px-2 md:px-4 lg:px-16">
            <h6 className="relative text-2xl md:text-4xl w-fit m-auto text-gray-300 font-light before:w-4/12 before:translate-x-[-50%] before:h-[3px] before:absolute before:left-[50%] before:bottom-[-5px] before:bg-red-600">
              PROYECTOS
            </h6>
            <span className="text-gray-300 text-center font-light">
              Explora nuestros proyectos emblemáticos y futuros, diseñados para
              mejorar la calidad de vida de los habitantes de Madre de Dios.
              Desde la construcción de infraestructuras hasta programas de
              desarrollo comunitario, conoce cómo estamos trabajando para un
              futuro más próspero y sostenible.
            </span>
          </div>
          <div className="-mx-10 md:-mx-20">
            <CardProjects></CardProjects>
          </div>
        </div>
        <div className="px-2 py-2 md:px-4 lg:px-16 mt-14">
          <div className="flex flex-col gap-4">
            <h6 className="relative text-2xl md:text-4xl w-fit m-auto text-gray-300 font-light before:w-4/12 before:translate-x-[-50%] before:h-[3px] before:absolute before:left-[50%] before:bottom-[-5px] before:bg-red-600">
              MULTIMEDIA
            </h6>
            <span className="text-gray-300 text-center font-light">
              Sumérgete en nuestra galería multimedia para visualizar imágenes,
              videos y contenido interactivo que destacan nuestros proyectos en
              acción. Vive la experiencia de nuestros logros visuales y
              audiovisuales, capturando el progreso y la belleza de nuestra
              región.
            </span>
          </div>
          <div className="py-6">
            {Array.isArray(paramNotice) && paramNotice.length > 0 && (
              <GallerySection files={paramNotice[0].files}></GallerySection>
            )}
          </div>
        </div>
        <div className="px-2 py-2 md:px-4 lg:px-16 mt-6">
          <div className="flex flex-col gap-4">
            <h6 className="relative text-2xl md:text-4xl w-fit m-auto text-gray-300 font-light before:w-4/12 before:translate-x-[-50%] before:h-[3px] before:absolute before:left-[50%] before:bottom-[-5px] before:bg-red-600">
              ENLACES DE INTERES
            </h6>
            <span className="text-gray-300 text-center font-light">
              Encuentra recursos útiles y enlaces relevantes relacionados con el
              sector de vivienda, construcción y saneamiento en Madre de Dios.
              Desde documentos oficiales hasta sitios web de interés, aquí
              encontrarás una recopilación de información que te ayudará a estar
              al día y tomar decisiones informadas.
            </span>
          </div>
          <div className="py-6">
            <Links></Links>
          </div>
        </div>
      </div>
      <SocialMedia></SocialMedia>
    </div>
  );
};

export default Inicio;
