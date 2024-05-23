import React from "react";
import PATH_DOMAIN from "../config";

const verifyTypeFile: React.FC = (type: any, url: any) => {
  if (type !== "mp4") {
    return (
      <img
        src={`${PATH_DOMAIN}/regional/server/${url}`}
        alt="Descripción de la imagen 1"
        className="w-full h-[300px] md:h-[400px] object-fit"
      />
    );
  }

  return (
    <video
      className="w-full h-[300px] md:h-[400px] object-cover"
      controls
      src={`${PATH_DOMAIN}/regional/server/${url}`}
      // src={`${PATH_DOMAIN}/regional/server/${imagen}`}
    />
  );
};
const GallerySection: React.FC<any> = ({ files }) => {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-4 gap-1">
        <div className="relative col-span-2 border-2 border-[#3183a9]">
          {verifyTypeFile(files[0].type, files[0].url)}
        </div>
        <div className="relative col-span-2 border-2  border-[#3183a9]">
          {verifyTypeFile(files[1].type, files[1].url)}
        </div>
        <div className="relative col-span-4 border-2  border-[#3183a9]">
          {verifyTypeFile(files[3].type, files[3].url)}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
