import ENDPOINTS from "../../config";
import { useParam, useParamId } from "../../context/Context.provider";
import { DataNotice } from "../../routes/RouteDefault";
import { handleChangeParamId } from "../../functions";
import { useSearchParams } from "react-router-dom";

const CardNotice: React.FC<DataNotice> = ({
  id,
  title,
  files,
  content,
  date_published,
}) => {
  const { setParamURL } = useParam();
  const { setParamId } = useParamId();
  const [searchParams ,setSearchParams] = useSearchParams();


  return (
    <div
      onClick={() => handleChangeParamId("notice", id, setParamURL, setParamId, setSearchParams)}
      className="flex cursor-pointer h-[135px] md:w-full group/notice hover:bg-gray-100 duration-400 flex-shrink-0 overflow-hidden"
    >
      <div className="overflow-hidden relative w-4/12">
        <img
          className="object-fit w-full h-full group-hover/notice:scale-110 duration-500"
          src={`${ENDPOINTS.DIR_IMG}/${files}`}
          alt="Imagen"
        />
      </div>
      <div className="px-4 flex flex-col justify-around py-1 w-8/12 relative overflow-hidden">
        <a className="line-clamp-3 text-sm text-red-600 font-bold font-serif">
          {title}
        </a>
        <div className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4 text-gray-500"
          >
            <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
            <path
              fill-rule="evenodd"
              d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="text-gray-500 font-light text-xs">
            {date_published}
          </span>
        </div>
        <button className="w-fit flex gap-2 items-center text-gray-500 font-light text-xs hover:text-gray-600">
          Leer mas{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path
              fill-rule="evenodd"
              d="M17.303 5.197A7.5 7.5 0 0 0 6.697 15.803a.75.75 0 0 1-1.061 1.061A9 9 0 1 1 21 10.5a.75.75 0 0 1-1.5 0c0-1.92-.732-3.839-2.197-5.303Zm-2.121 2.121a4.5 4.5 0 0 0-6.364 6.364.75.75 0 1 1-1.06 1.06A6 6 0 1 1 18 10.5a.75.75 0 0 1-1.5 0c0-1.153-.44-2.303-1.318-3.182Zm-3.634 1.314a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardNotice;
