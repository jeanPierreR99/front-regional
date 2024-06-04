import gobierno from "../assets/gobierno.png"
import iconNotice from "../assets/icon-noticia.png"
import coer from "../assets/coer.png"
import datas from "../assets/datas.png"


const Links: React.FC = () => {

  return (
    <div className="flex flex-wrap gap-2 md:gap-10 justify-around md:justify-center items-center text-center">
    <a href="https://datass.vivienda.gob.pe/" className="w-[170px] bg-none text-gray-200 border border-[#3183a9] hover:bg-[#3183a9]/20 hover:text-white transition-all duration-300 items-center justify-center h-[150px] flex flex-col gap-2 shadow-lg p-8 rounded-lg hover:scale-125">
        <img src={datas} className="w-[70%] h-[70%]" alt="" />
        <span>DATASS</span>
      </a>
      <a href="https://datass.vivienda.gob.pe/" className="w-[170px] bg-none text-gray-200 border border-[#3183a9] hover:bg-[#3183a9]/20 hover:text-white transition-all duration-300 items-center justify-center h-[150px] flex flex-col gap-2 shadow-lg p-8 rounded-lg hover:scale-125">
        <img src={gobierno} className="w-[70%] h-[70%]" alt="" />
        <span>GOGIERNO REGIONAL</span>
      </a>
      <a href="https://datass.vivienda.gob.pe/" className="w-[170px] bg-none text-gray-200 border border-[#3183a9] hover:bg-[#3183a9]/20 hover:text-white transition-all duration-300 items-center justify-center h-[150px] flex flex-col gap-2 shadow-lg p-8 rounded-lg hover:scale-125">
        <img src={coer} className="w-[70%] h-[70%]" alt="" />
        <span>COER</span>
      </a>
      <a href="https://datass.vivienda.gob.pe/" className="w-[170px] bg-none text-gray-200 border border-[#3183a9] hover:bg-[#3183a9]/20 hover:text-white transition-all duration-300 items-center justify-center h-[150px] flex flex-col gap-2 shadow-lg p-8 rounded-lg hover:scale-125">
        <img src={iconNotice} className="w-[70%] h-[70%]" alt="" />
        <span>Noticias</span>
      </a>
    </div>
  );
};
export default Links;
