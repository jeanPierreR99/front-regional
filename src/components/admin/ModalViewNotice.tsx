import React, { useState } from "react";
import GallerySection from "../client/GallerySection";
import { useNotice } from "../../context/Context.provider";
import ENDPOINTS from "../../config";
import relojArena from "../../assets/img-icon/loader-sub.gif";
import axios from "axios";

interface ModalViewNoticeProps {
  isOpeView: boolean;
  id: string;
  toast: any;
  onClose: () => void;
}

const processContent = (text: string) => {
  if (!text) return "";
  const boldPattern = /\*\*(.*?)\*\*/g;
  text = text.replace(boldPattern, '<strong class="text-bold">$1</strong>');
  
  const listPattern = /--(.*?)--/g;
  text = text.replace(listPattern, '<li>$1</li>');

  return text;
};

const ModalViewNotice: React.FC<ModalViewNoticeProps> = ({
  isOpeView,
  id,
  toast,
  onClose,
}) => {
  const { paramNotice, setParamNotice } = useNotice();
  const [loading, setLoading] = useState<boolean>(false);

  if (!isOpeView) return null;

  const deleteNotice = async (id: any) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${ENDPOINTS.DELETE_NOTICE+id}`
      );
      if (response.data.response.status===200) {
        setParamNotice((prevNotices: any) =>
          prevNotices.filter((notice: any) => notice.id !== id)
        );
        toast.success("Eliminado Correctamente: " + id);
        setLoading(false);
        onClose();
        console.log(response);
      }
    } catch (e) {
      console.log("error en: " + e);
    }
  };
  return (
    <div className="fixed h-screen w-full top-0 left-0 z-[999] py-4 outline-none bg-black/30">
      <div className="relative z-10 w-11/12 lg:w-[50%] md:w-8/12  h-[100%] mx-auto">
        <div className="bg-white w-full  h-full rounded-lg shadow-lg">
          <div className="flex justify-between items-center border-b border-gray-300 p-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Noticia {id}
            </h3>
            <button
              className="text-gray-300 hover:text-gray-400 focus:outline-none"
              onClick={onClose}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="p-4 overflow-y-auto h-[90%] overflow-x-hidden">
            {Array.isArray(paramNotice) &&
              paramNotice.map((obj) => {
                if (obj.id === id) {
                  return (
                    <div key={obj.id} className="">
                      <div>
                        <button
                          className="bg-red-600 flex gap-2 items-center hover:bg-red-500 text-white px-4 py-1 rounded-md mb-2"
                          onClick={() => deleteNotice(obj.id)}
                        >
                          <span>Eliminar</span>
                          {loading && (
                            <img src={relojArena} alt="" className="h-6" />
                          )}
                        </button>
                      </div>
                      <div className="w-full flex flex-col">
                        <div className="w-full h-[400px] relative">
                          <img
                            className="w-full h-full object-cover"
                            src={`${ENDPOINTS.DIR_IMG}/${obj.files[0].url}`}
                            alt=""
                          />
                        </div>
                        <p className=" text-[#0306a9] font-bold">
                          Publicado el {obj.date_published}
                        </p>
                        <span className="text-xl md:text-2xl font-bold  text-black uppercase">
                          {obj.title}
                        </span>
                        <div className="flex flex-col gap-2 px-2 mt-2">
                          <div className="column-container">
                            <p
                              className="first-letter:text-7xl first-letter:font-light first-letter:mr-3 first-letter:float-left text-black font-light"
                              dangerouslySetInnerHTML={{
                                __html: processContent(obj.content),
                              }}
                              style={{ whiteSpace: "pre-line" }}
                            ></p>
                          </div>
                        </div>
                        <div className="mt-6">
                          <GallerySection files={obj.files}></GallerySection>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-gray-900 opacity-50 w-full h-full"></div>
    </div>
  );
};

export default ModalViewNotice;
