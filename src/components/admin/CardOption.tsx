import { useParam, useParamId } from "../../context/Context.provider";
import iconPost from "../../assets/icon-post.png"
import iconNotice from "../../assets/icon-noticia.png"
import iconGalery from "../../assets/icon-galeria.png"
import iconEstadistica from "../../assets/icon-estadistica.png"
import { handleChangeParam } from "../../functions";

const CardOption: React.FC = () => {
  const {setParamURL } = useParam();
  const {setParamId} = useParamId();

  return (           
    <div className="flex flex-wrap gap-10 justify-center py-20 md:pt-0 items-center w-full h-full  md:h-[calc(100vh-84px)] overflow-hidden">
    <button onClick={()=>{handleChangeParam("estadistica", setParamURL, setParamId)}} className="w-[200px] bg-none text-gray-200 border border-[#3183a9] hover:bg-[#3183a9]/20 hover:text-white transition-all duration-300 items-center justify-center h-[200px] flex flex-col gap-2 shadow-lg p-8 rounded-lg hover:scale-125">
        <img src={iconEstadistica} className="w-[70%] h-[70%]" alt="" />
        <span>Estadistica</span>
      </button>
      <button onClick={()=>{handleChangeParam("post", setParamURL, setParamId)}} className="w-[200px] bg-none text-gray-200 border border-[#3183a9] hover:bg-[#3183a9]/20 hover:text-white transition-all duration-300 items-center justify-center h-[200px] flex flex-col gap-2 shadow-lg p-8 rounded-lg hover:scale-125">
        <img src={iconPost} className="w-[70%] h-[70%]" alt="" />
        <span>Proyectos</span>
      </button>
      <button onClick={()=>{handleChangeParam("multimedia", setParamURL, setParamId)}} className="w-[200px] bg-none text-gray-200 border border-[#3183a9] hover:bg-[#3183a9]/20 hover:text-white transition-all duration-300 items-center justify-center h-[200px] flex flex-col gap-2 shadow-lg p-8 rounded-lg hover:scale-125">
        <img src={iconGalery} className="w-[70%] h-[70%]" alt="" />
        <span>Galeria</span>
      </button>
      <button onClick={()=>{handleChangeParam("notice", setParamURL, setParamId)}} className="w-[200px] bg-none text-gray-200 border border-[#3183a9] hover:bg-[#3183a9]/20 hover:text-white transition-all duration-300 items-center justify-center h-[200px] flex flex-col gap-2 shadow-lg p-8 rounded-lg hover:scale-125">
        <img src={iconNotice} className="w-[70%] h-[70%]" alt="" />
        <span>Noticias</span>
      </button>
    </div>
  );
};
export default CardOption;
