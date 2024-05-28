// src/components/Multimedia.tsx
import React, { useEffect, useState } from "react";
import ImageGallery from "../../components/ImageGallery";
import SocialMedia from "../../components/SocialMedia";
import Logo from "../../components/Logo";
import Links from "../../components/Links";
import { useNotice } from "../../context/Context.provider";
const Multimedia: React.FC = () => {
  const { paramNotice } = useNotice();
  const [allUrls, setAllUrls] = useState<Array<string>>([]);

  useEffect(() => {
    let auxArray: any = [];
    Array.isArray(paramNotice) &&
      paramNotice.forEach((obj: any) => {
        Array.isArray(obj.files) &&
          obj.files.forEach((element: any) => {
            auxArray.push(element);
          });
      });
    setAllUrls(auxArray);
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="pt-24 overflow-hidden relative">
      <div className="pt-10">
        <h2 className="text-3xl px-2 md:px-4 lg:px-16 text-gray-200 md:text-4xl font-bold mb-8">
          MULTIMEDIA
        </h2>
        <div className="grid grid-cols-5 gap-2">
          {allUrls &&
            Array.isArray(allUrls) &&
            allUrls.map((data: any, index: any) => (
              <div
                key={index}
                className={`${
                  index % 5 === 0
                    ? "col-span-2 md:col-span-3"
                    : index % 3 === 0
                    ? "col-span-2 md:col-span-3"
                    : "col-span-3 md:col-span-2"
                } relative overflow-hidden`}
              >
                <ImageGallery url={data.url} type={data.type}></ImageGallery>
              </div>
            ))}
        </div>
      </div>
      <div className="mt-14">
        <Logo></Logo>
        <div className="py-6">
          <Links></Links>
        </div>
      </div>
      <SocialMedia></SocialMedia>
    </section>
  );
};

export default Multimedia;
