import { handleChangeParam } from "../../functions";
import { Truncate } from "./Truncate";
import Nanduti from "../../assets/img-main/nanduti.jpg";
import { useParam, useParamId } from "../../context/Context.provider";
import { useSearchParams } from "react-router-dom";

interface propHeaderSub{
    title: string;
    titleHolder:string;
    date: string;
    param: string
}
const HeaderSub: React.FC<propHeaderSub> = ({title, titleHolder, date, param}) => {

    const {setParamURL } = useParam();
    const { paramId, setParamId } = useParamId();
    const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="relative mx-4 md:mx-28">
      <img className="h-40 object-cover w-full" src={Nanduti} alt="" />
      <div className="absolute font-serif top-[50%] translate-y-[-50%] w-full px-2 ">
        <p className="text-xl line-clamp-3 md:text-3xl font-bold">
          {title || titleHolder}
        </p>
        <p className="text-gray-800 text-end">{date}</p>
        <div className="text-gray-800 font-light font-serif text-sm overflow-hidden">
          <button
            className=""
            onClick={() =>
              handleChangeParam(
                "home",
                setParamURL,
                setParamId,
                setSearchParams
              )
            }
          >
            Inicio
          </button>{" "}
          /{" "}
          <button
            className={`${!paramId||!date ? "text-blue-800 font-bold" : ""} lowercase first-letter:uppercase`}
            onClick={() =>
              handleChangeParam(
                param,
                setParamURL,
                setParamId,
                setSearchParams
              )
            }
          >
            {titleHolder}
          </button>
          <Truncate text={title} wordLimit={8}></Truncate>
        </div>
      </div>
    </div>
  );
};

export default HeaderSub;
