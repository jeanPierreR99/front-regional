import { useParam, useParamId } from "../../context/Context.provider";
import iconPost from "../../assets/img-icon/icon-post.png";
import iconNotice from "../../assets/img-icon/icon-noticia.png";
import iconGalery from "../../assets/img-icon/icon-galeria.png";
import iconEstadistica from "../../assets/img-icon/icon-estadistica.png";
import { handleChangeParam } from "../../functions";
import { useSearchParams } from "react-router-dom";

const CardOption: React.FC = () => {
  const { setParamURL } = useParam();
  const { setParamId } = useParamId();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="flex flex-wrap gap-10 justify-center py-20 md:pt-0 items-center w-full h-full  md:h-[calc(100vh-84px)] overflow-hidden">
      <button
        onClick={() => {
          handleChangeParam("estadistica", setParamURL, setParamId, setSearchParams);
        }}
        className="w-[200px] bg-white text-gray-600 hover:bg-gray-300 hover:text-black font-bold transition-all duration-300 items-center justify-center h-[200px] flex flex-col gap-2 shadow-lg p-8 rounded-lg hover:scale-125"
      >
        <img src={iconEstadistica} className="w-[70%] h-[70%]" alt="" />
        <span>Métricas</span>
      </button>
      <button
        onClick={() => {
          handleChangeParam("multimedia", setParamURL, setParamId, setSearchParams);
        }}
        className="w-[200px] bg-white text-gray-600 hover:bg-gray-300 hover:text-black font-bold transition-all duration-300 items-center justify-center h-[200px] flex flex-col gap-2 shadow-lg p-8 rounded-lg hover:scale-125"
      >
        <img src={iconGalery} className="w-[70%] h-[70%]" alt="" />
        <span>Galeria</span>
      </button>
      <button
        onClick={() => {
          handleChangeParam("post", setParamURL, setParamId, setSearchParams);
        }}
        className="w-[200px] bg-white text-gray-600 hover:bg-gray-300 hover:text-black font-bold transition-all duration-300 items-center justify-center h-[200px] flex flex-col gap-2 shadow-lg p-8 rounded-lg hover:scale-125"
      >
        <img src={iconPost} className="w-[70%] h-[70%]" alt="" />
        <span>Comunicados</span>
      </button>
      <button
        onClick={() => {
          handleChangeParam("notice", setParamURL, setParamId, setSearchParams);
        }}
        className="w-[200px] bg-white text-gray-600 hover:bg-gray-300 hover:text-black font-bold transition-all duration-300 items-center justify-center h-[200px] flex flex-col gap-2 shadow-lg p-8 rounded-lg hover:scale-125"
      >
        <img src={iconNotice} className="w-[70%] h-[70%]" alt="" />
        <span>Noticias</span>
      </button>
    </div>
  );
};
export default CardOption;
