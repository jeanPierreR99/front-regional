import { useParam } from "../../context/Context.provider";
import iconProject from "../../assets/icon-proyecto.png"
import iconNotice from "../../assets/icon-noticia.png"
import iconGalery from "../../assets/icon-galeria.png"
import iconEstadistica from "../../assets/icon-estadistica.png"


const CardOption: React.FC = () => {
  const {setParamURL } = useParam();

  const handleChangeParam = (newParam: string) => {
    setParamURL(newParam);
    console.log(newParam);
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.delete("id");
    newSearchParams.set("search", newParam);
    const newUrl = `?${newSearchParams.toString()}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };
  return (
    <div className="flex flex-wrap p-20 gap-10 justify-center items-center w-full h-full md:h-[calc(100vh-84px)] overflow-hidden">
    <button onClick={()=>{handleChangeParam("estadistica")}} className="w-[200px] bg-none text-gray-200 border border-[#3183a9] hover:bg-[#3183a9]/20 hover:text-white transition-all duration-300 items-center justify-center h-[200px] flex flex-col gap-2 shadow-lg p-8 rounded-lg hover:scale-125">
        <img src={iconEstadistica} className="w-[70%] h-[70%]" alt="" />
        <span>Estadistica</span>
      </button>
      <button onClick={()=>{handleChangeParam("project")}} className="w-[200px] bg-none text-gray-200 border border-[#3183a9] hover:bg-[#3183a9]/20 hover:text-white transition-all duration-300 items-center justify-center h-[200px] flex flex-col gap-2 shadow-lg p-8 rounded-lg hover:scale-125">
        <img src={iconProject} className="w-[70%] h-[70%]" alt="" />
        <span>Proyectos</span>
      </button>
      <button onClick={()=>{handleChangeParam("galery")}} className="w-[200px] bg-none text-gray-200 border border-[#3183a9] hover:bg-[#3183a9]/20 hover:text-white transition-all duration-300 items-center justify-center h-[200px] flex flex-col gap-2 shadow-lg p-8 rounded-lg hover:scale-125">
        <img src={iconGalery} className="w-[70%] h-[70%]" alt="" />
        <span>Galeria</span>
      </button>
      <button onClick={()=>{handleChangeParam("notice")}} className="w-[200px] bg-none text-gray-200 border border-[#3183a9] hover:bg-[#3183a9]/20 hover:text-white transition-all duration-300 items-center justify-center h-[200px] flex flex-col gap-2 shadow-lg p-8 rounded-lg hover:scale-125">
        <img src={iconNotice} className="w-[70%] h-[70%]" alt="" />
        <span>Noticias</span>
      </button>
    </div>
  );
};
export default CardOption;
