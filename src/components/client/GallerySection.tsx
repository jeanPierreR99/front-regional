import React from "react";
import ENDPOINTS from "../../config";

const verifyTypeFile: React.FC = (type: any, url: any) => {
  if (type !== "mp4") {
    return (
      <img
        src={`${ENDPOINTS.DIR_IMG}/${url}`}
        alt="Descripción de la imagen 1"
        className="w-full hover:scale-110 duration-500 h-[290px] md:h-[300px] object-fit"
      />
    );
  }

  return (
    <video
      className="w-full h-[290px] md:h-[300px] object-cover"
      controls
      src={`${ENDPOINTS.DIR_IMG}/${url}`}
    />
  );
};

const GallerySection: React.FC<any> = ({ files }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
      {files.map((data: any) => (
        <div className="overflow-hidden col-span-1">
          {verifyTypeFile(data.type, data.url)}
        </div>
      ))}
    </div>
  );
};

export default GallerySection;
