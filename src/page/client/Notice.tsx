import {
  useNotice,
  useParam,
  useParamId,
} from "../../context/Context.provider";
import CardNotice from "../../components/CardNotice";
import { useEffect } from "react";
import Links from "../../components/Links";
import ENDPOINTS from "../../config";
import SocialMedia from "../../components/SocialMedia";
import { handleChangeParamId } from "../../functions";

const processContent = (text: string) => {
  if (!text) return "";
  // Reemplazar **texto** con <strong>texto</strong>
  const boldPattern = /\*\*(.*?)\*\*/g;
  text = text.replace(boldPattern, '<strong class="text-bold">$1</strong>');

  // Reemplazar --texto-- con <li>texto</li>
  const listPattern = /--(.*?)--/g;
  text = text.replace(listPattern, "<li>$1</li>");

  return text;
};

const Notice: React.FC = () => {
  const { paramNotice } = useNotice();
  const { paramURL ,setParamURL } = useParam();
  const { paramId, setParamId } = useParamId();

  const handleChangeParam = () => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set("search", "notice");

    setParamId(newSearchParams.get("id") || "");
    const newUrl = `?${newSearchParams.toString()}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  useEffect(() => {
    handleChangeParam();
    window.scrollTo(0, 0);
  }, [paramId, paramURL]);

  return (
    <div className="flex flex-col px-4 md:px-4 lg:px-16  pt-14 pb-6">
      {paramId &&
        Array.isArray(paramNotice) &&
        paramNotice.length > 0 &&
        paramNotice.map((obj) => {
          if (obj.id == paramId) {
            return (
              <div
                key={obj.id}
                className="flex flex-col md:flex-row gap-4 pt-10"
              >
                <div className="left w-full md:w-7/12 flex flex-col gap-0">
                  <div className="w-full h-[400px] relative">
                    <img
                      className="w-full h-full"
                      src={`${ENDPOINTS.DIR_IMG}/${obj.files[0].url}`}
                      alt=""
                    />
                  </div>
                  <p className=" text-blue-400 font-bold">
                    Publicado el {obj.date_published}
                  </p>
                  <span className="text-xl md:text-2xl font-bold  text-gray-200 uppercase">
                    {obj.title}
                  </span>
                  <div className="column-container">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: processContent(obj.content),
                      }}
                      style={{ whiteSpace: "pre-line" }}
                      className="first-letter:text-7xl first-letter:font-light first-letter:text-gray-300 first-letter:mr-3 first-letter:float-left text-gray-300 font-light"
                    ></p>
                  </div>
                  <div className="text-right z-10 md:pr-12">
                    <button
                      onClick={() =>
                        handleChangeParamId(
                          "multimedia",
                          obj.id,
                          setParamURL,
                          setParamId
                        )
                      }
                      className="hover:text-blue-400/70 text-blue-400 float-end w-fit px-2 py-1 rounded-md flex gap-1"
                    >
                      Ver galeria
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div
                  style={{ position: "sticky", top: "90px", overflowY: "auto" }}
                  className="right_scroll w-full md:w-5/12  h-auto md:h-[calc(100vh-100px)] flex flex-col md:flex-col gap-4 md:pr-2 py-4 md:py-0 overflow-x-hidden"
                >
                  {Array.isArray(paramNotice) &&
                    paramNotice.map((data) => (
                      <CardNotice
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        files={data.files[0].url}
                        content={data.content}
                        create_at={data.create_at}
                        date_published={data.date_published}
                      ></CardNotice>
                    ))}
                </div>
              </div>
            );
          }
        })}
      {paramId == "" &&
        Array.isArray(paramNotice) &&
        paramNotice.length > 0 && (
          <div
            key={paramNotice[0].id}
            className="flex flex-col md:flex-row gap-4 pt-10"
          >
            <div className="left w-full md:w-7/12 flex flex-col gap-0">
              <div className="w-full h-[400px] relative">
                <img
                  className="w-full h-full"
                  src={`${ENDPOINTS.DIR_IMG}/${paramNotice[0].files[0].url}`}
                  alt=""
                />
              </div>

              <p className=" text-blue-400 font-bold">
                Publicado el {paramNotice[0].date_published}
              </p>

              <span className="text-xl md:text-2xl font-bold  text-gray-200 uppercase">
                {paramNotice[0].title}
              </span>
              <div className="column-container">
                <p
                  dangerouslySetInnerHTML={{
                    __html: processContent(paramNotice[0].content),
                  }}
                  style={{ whiteSpace: "pre-line" }}
                  className="first-letter:text-7xl first-letter:font-light first-letter:text-gray-300 first-letter:mr-3 first-letter:float-left text-gray-300 font-light"
                ></p>
              </div>
              <div className="text-right z-10 md:pr-12">
                <button
                  onClick={() =>
                    handleChangeParamId(
                      "multimedia",
                      paramNotice[0].id,
                      setParamURL,
                      setParamId
                    )
                  }
                  className="hover:text-blue-400/70 text-blue-400 float-end w-fit px-2 py-1 rounded-md flex gap-1"
                >
                  Ver galeria
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              style={{ position: "sticky", top: "90px", overflowY: "auto" }}
              className="right_scroll w-full md:w-5/12  h-auto md:h-[calc(100vh-100px)] flex flex-col md:flex-col gap-4 md:pr-2 py-4 md:py-0 overflow-x-hidden"
            >
              {Array.isArray(paramNotice) &&
                paramNotice.map((data) => (
                  <CardNotice
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    files={data.files[0].url}
                    content={data.content}
                    create_at={data.create_at}
                    date_published={data.date_published}
                  ></CardNotice>
                ))}
            </div>
          </div>
        )}
      <div className="mt-14">
        <Links></Links>
      </div>
      <SocialMedia></SocialMedia>
    </div>
  );
};

export default Notice;
