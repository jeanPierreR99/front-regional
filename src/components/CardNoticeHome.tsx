import PATH_DOMAIN from "../config";
import { useParam, useParamId } from "../context/Context.provider";
import { DataNotice } from "../routes/RouteDefault";
const CardNoticeHome: React.FC<DataNotice> = ({
  id,
  title,
  files,
  content,
  create_at,
}) => {
  const { setParamURL } = useParam();
  const { setParamId } = useParamId();

  const handleChangeParam = (newParam: string) => {
    setParamURL("notice");
    setParamId(newParam);
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.delete("search");
    newSearchParams.delete("id");
    newSearchParams.append("search", "notice");
    newSearchParams.append("id", newParam);
    const newUrl = `?${newSearchParams.toString()}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  return (
    <div  onClick={() => handleChangeParam(id)} className="cursor-pointer w-[300px] h-auto md:w-[390px] group/notice border border-[#3183a9] flex-shrink-0 overflow-hidden shadow-lg hover:bg-[#3183a9]/20 duration-500">
      <div className="overflow-hidden relative">
      <img
        className="w-[300px] md:w-[390px] h-[240px] z-[9999 ]  group-hover/notice:scale-110 scale duration-500 transition-all"
        src={`${PATH_DOMAIN}/regional/server/${files}`}
        alt="Imagen"
      />
        <p className="absolute bottom-4 left-0 bg-red-600 p-2 z-20 text-white  text-end text-sm mt-2 ">
          <span>{create_at}</span>
        </p>
      </div>
      <div className="px-6 py-4 relative overflow-hidden">
        <a
          className="relative line-clamp-3 text-gray-300 font-bold  z-10 text-lg text-justify group-hover/notice:text-white mb-2"
        >
          {title}
        </a>
        <p className="relative z-10 text-gray-300 group-hover/notice:text-white font-light text-sm line-clamp-3">
          {content}
        </p>
      
      </div>
    </div>
  );
};

export default CardNoticeHome;
