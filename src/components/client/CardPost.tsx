import React from "react";
import ENDPOINTS from "../../config";
import { handleChangeParamId } from "../../functions";
import { useParam, useParamId } from "../../context/Context.provider";
import { useSearchParams } from "react-router-dom";
interface cardPostProps {
  id: String;
  img: String;
  title: String;
  content: String;
  date_published: String;
}

const CardPost: React.FC<cardPostProps> = ({
  id,
  img,
  title,
  content,
  date_published,
}) => {
  const { setParamURL } = useParam();
  const { setParamId } = useParamId();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div
      className="w-full h-full flex flex-col hover:bg-gray-100 gap-2 flex-shrink-0 group/post cursor-pointer"
      onClick={() =>
        handleChangeParamId(
          "post",
          id.toString(),
          setParamURL,
          setParamId,
          setSearchParams
        )
      }
    >
      <div className="w-full h-full overflow-hidden">
        <img
          className="w-full h-full group-hover/post:scale-110 duration-500"
          src={`${ENDPOINTS.DIR_IMG}/${img}`}
          alt="img"
        />
      </div>
      <div className="text-left flex flex-col px-2">
        <a className="line-clamp-2 text-sm text-black font-bold">{title}</a>
        <p className="text-black text-sm font-light line-clamp-3 ">{content}</p>
        <span className="text-gray-500 text-right font-light text-xs line-clamp-2 ">
          {date_published}
        </span>
      </div>
    </div>
  );
};

export default CardPost;
