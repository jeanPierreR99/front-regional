// import { DataNotice } from "../routes/RouteDefault";
import { useParam,useParamId } from "../context/Context.provider";
import { DataNotice } from "../routes/RouteDefault";
const CardNotice: React.FC<DataNotice> = ({
  id,
  titulo,
  imagen,
  descripcion,
  fecha,
}) => {
  const { setParamURL } = useParam();
  const { setParamId } = useParamId();

  const handleChangeParam = (newParam: string) => {
    setParamURL("notice");
    setParamId(newParam)
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.delete("search");
    newSearchParams.delete("id");
    newSearchParams.append("search", "notice");
    newSearchParams.append("id", newParam);
    const newUrl = `?${newSearchParams.toString()}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  return (
    <div className="w-[300px] h-auto md:w-[390px] bg-white flex-shrink-0 rounded-md overflow-hidden shadow-lg">
      <img
        className="w-[300px] md:w-[390px] h-[240px]"
        src={imagen}
        alt="Imagen"
      />
      <div className="px-6 py-4">
        <button
          onClick={() => handleChangeParam(id)}
          className="text-sm text-justify font-medium hover:text-blue-800  mb-2 line-clamp-3"
        >
          {titulo}
        </button>
        <p className="text-gray-500 font-light text-sm line-clamp-3">
          {descripcion}
        </p>
        <p className="text-gray-400 font-light text-end text-sm mt-2 ">
          <span>{fecha}</span>
        </p>
      </div>
    </div>
  );
};

export default CardNotice;
