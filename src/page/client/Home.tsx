import React, { useEffect } from "react";
import Slider from "../../components/Slider";
import CardNoticeHome from "../../components/CardNoticeHome";
import Presentation from "../../components/Presentation";
import { useNotice } from "../../context/Context.provider";
import CardProjects from "../../components/CardProjects";
import GallerySection from "../../components/GallerySection";
import Links from "../../components/Links";
import SocialMedia from "../../components/SocialMedia";

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
            <h6 className="merienda relative text-2xl md:text-5xl w-fit m-auto text-gray-900 font-black before:w-4/12 before:translate-x-[-50%] before:h-[3px] before:absolute before:left-[50%] before:bottom-[-15px] before:bg-[#0306A9]">
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
          <div className="flex gap-4 md:justify-center py-6 px-2 md:overflow-x-hidden overflow-x-auto">
            <div className="overflow-y-auto h-[400px] md:h-[500px] flex-shrink-0">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FDRVCSMDD%2Fposts%2Fpfbid02N1NdoGG22ZEVew7yJqcFDPe3WSgxb6CSgoknjtp6LxV711rU4vwK91Qy5gJQjPml&show_text=true&width=400"
                style={{ border: "none" }}
                width={380}
                height={800}
                className="overflow-y-auto"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="overflow-y-auto h-[400px] md:h-[500px] flex-shrink-0">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FDRVCSMDD%2Fposts%2Fpfbid0oCxMWY2n4r7ULuZaMyLir91FDcGH2pDQkqJvQ8Yku8VrnNN9pMcVNySmu8gRTzSbl&show_text=true&width=400"
                style={{ border: "none" }}
                width={380}
                height={800}
                className="overflow-y-auto"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="overflow-y-auto h-[400px] md:h-[500px] flex-shrink-0">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FDRVCSMDD%2Fposts%2Fpfbid0KrTewcdsUzVh3WvXd2fKkqBs53uh98hsag2mTvXXg7FQrowyuSxGzShKjLEW45wql&show_text=true&width=400"
                style={{ border: "none" }}
                width={380}
                height={800}
                className="overflow-y-auto"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-10 ">
          <div className="-mx-10 md:-mx-20">
            <CardProjects></CardProjects>
          </div>
        </div>
        <div className="px-4 py-2 md:px-4 lg:px-16 mt-14">
          <div className="flex flex-col mb-10">
            <h6 className="merienda relative text-2xl md:text-5xl w-fit m-auto text-gray-900 font-black before:w-4/12 before:translate-x-[-50%] before:h-[3px] before:absolute before:left-[50%] before:bottom-[-15px] before:bg-[#0306A9]">
              Multimedia
            </h6>
          </div>
          <div className="py-6">
            {Array.isArray(paramNotice) && paramNotice.length > 0 && (
              <GallerySection files={paramNotice[0].files}></GallerySection>
            )}
          </div>
        </div>
        <div className="px-4 py-2 md:px-4 lg:px-16 mt-6">
          <div className="flex flex-col gap-10">
            <h6 className="merienda relative mb-10 text-2xl md:text-5xl w-fit m-auto text-gray-900 font-black before:w-4/12 before:translate-x-[-50%] before:h-[3px] before:absolute before:left-[50%] before:bottom-[-15px] before:bg-[#0306A9]">
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
