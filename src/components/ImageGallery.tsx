import { useState } from "react";
import ENDPOINTS from "../config";

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
            className="w-[100%] h-[100%] cursor-pointer transition-all duration-500"
            onClick={() => setLightboxOpen(true)}
          >
            <img
              className="w-full h-full hover:scale-110 duration-500 object-fit"
              src={`${ENDPOINTS.DIR_IMG}/${url}`}
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
        <div className="w-full h-full cursor-pointer">
          <video
            className="w-full h-full"
            controls
            src={`${ENDPOINTS.DIR_IMG}/${url}`}
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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-70">
          <div className="w-[90%] h-[50%] md:h-[95%]">
            {type !== "video" && (
              <img
                className="w-full h-full object-contain"
                src={`${ENDPOINTS.DIR_IMG}/${url}`}
                alt=""
              />
            )}
            {type === "video" && (
              <video
                className="w-full h-full"
                controls
                src={`${ENDPOINTS.DIR_IMG}/${url}`}
              />
            )}
            <button
              className="absolute top-5 right-10 text-gray-300 bg-red-700 hover:bg-red-600 py-1 px-3 rounded-md"
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
