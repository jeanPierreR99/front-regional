import { useState } from "react";
import PATH_DOMAIN from "../config";

interface galeryProps {
  url: string;
  type: string;
}
const ImageGallery: React.FC<galeryProps> = ({ url, type }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const renderMedia = () => {
    if (type !== "mp4") {
      return (
        <div className="w-full h-[200px] md:h-[350px]">
          <div
            className="w-[100%] h-[100%] cursor-pointer grayscale hover:grayscale-0 transition-all duration-500"
            onClick={() => setLightboxOpen(true)}
          >
            <img
              className="w-full h-full hover:scale-110 duration-500"
              src={`${PATH_DOMAIN}/regional/server/${url}`}
              alt=""
            />
          </div>
          <span className="absolute bottom-0 right-0 bg-blue-900 text-white px-2 py-1 rounded-tl-lg text-xs">
            Foto
          </span>
        </div>
      );
    }
    return (
      <div className="w-full h-[200px] md:h-[350px]">
        <span className="absolute z-10 bottom-0 right-0 bg-red-800 text-white px-2 py-1 rounded-tl-lg text-xs">
          Video
        </span>
        <div className="w-full h-full cursor-pointer grayscale hover:grayscale-0">
          <video
            className="w-full h-full"
            controls
            src={`${PATH_DOMAIN}/regional/server/${url}`}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex relative group/image bg-black shadow-md">
      {renderMedia()}
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[90%] h-[50%] md:h-[95%]">
            {type !== "video" && (
              <img
                className="w-full h-full"
                src={`${PATH_DOMAIN}/regional/server/${url}`}
                alt=""
              />
            )}
            {type === "video" && (
              <video
                className="w-full h-full"
                controls
                src={`${PATH_DOMAIN}/regional/server/${url}`}
              />
            )}
            <button
              className="absolute top-10 right-24 text-white py-1 px-3 hover:bg-red-600 bg-red-500 rounded-md"
              onClick={() => setLightboxOpen(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
