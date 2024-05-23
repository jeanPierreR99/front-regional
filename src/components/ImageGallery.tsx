import { useState } from "react";

interface galeryProps {
  url: string;
  type: string;
}
const ImageGallery: React.FC<galeryProps> = ({ url, type }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState("");

  const openLightbox = (mediaUrl: any) => {
    setSelectedMedia(mediaUrl);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedMedia("");
  };

  const renderMedia = () => {
    if (type === "image") {
      return (
        <div className="w-full h-full">
          <div
            className="w-[100%] h-[100%] cursor-pointer sepia hover:sepia-0 transition-all duration-500"
            onClick={() => openLightbox(url)}
          >
            <img className="w-full h-full rounded-lg" src={url} alt="" />
          </div>
          <span className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-gray-500 rounded-full bg-white/80 select-none p-2 hidden group-hover/image:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </span>
          <span className="absolute bottom-0 right-0 bg-blue-500 text-white px-2 py-1 rounded-tl-lg text-xs">
            Foto
          </span>
        </div>
      );
    } else if (type === "video") {
      return (
        <>
          <span className="absolute z-10 bottom-0 right-0 bg-blue-500 text-white px-2 py-1 rounded-tl-lg text-xs">
            Video
          </span>
          <div className="w-[100%] h-[100%] cursor-pointer sepia hover:sepia-0">
            <video className="w-full h-full rounded-lg" controls src={url} />
          </div>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="flex relative rounded-lg w-[49%] md:w-[250px] h-[200px] group/image bg-black shadow-md">
      {renderMedia()}
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[90%] h-[50%] md:h-[95%]">
            {type === "image" && (
              <img className="w-full h-full" src={selectedMedia} alt="" />
            )}
            {type === "video" && (
              <video className="w-full h-full" controls src={selectedMedia} />
            )}
            <button
              className="absolute top-10 right-24 text-white py-1 px-3 hover:bg-red-600 bg-red-500 rounded-md"
              onClick={closeLightbox}
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
