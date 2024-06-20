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
  const { paramURL, setParamURL } = useParam();
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
    <div className="flex flex-col px-4 md:px-4 lg:px-16  pt-24 pb-6">
      <div className="flex gap-3 flex-col md:flex-row">
        <div className="flex-col hidden md:flex w-2/12 gap-3">
          <div className="overflow-y-auto h-[400px] flex-shrink-0">
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FDRVCSMDD%2Fposts%2Fpfbid0KrTewcdsUzVh3WvXd2fKkqBs53uh98hsag2mTvXXg7FQrowyuSxGzShKjLEW45wql&show_text=true&width=200"
              style={{ border: "none" }}
              width={350}
              height={800}
              className="overflow-y-auto"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="overflow-y-auto h-[400px] flex-shrink-0">
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FDRVCSMDD%2Fposts%2Fpfbid0oCxMWY2n4r7ULuZaMyLir91FDcGH2pDQkqJvQ8Yku8VrnNN9pMcVNySmu8gRTzSbl&show_text=true&width=200"
              style={{ border: "none" }}
              width={350}
              height={800}
              className="overflow-y-auto"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
        {paramId == "" &&
          Array.isArray(paramNotice) &&
          paramNotice.length > 0 && (
            <div
              key={paramNotice[0].id}
              className="left w-full md:w-6/12 flex flex-col gap-0"
            >
              <div className="w-full h-[400px] relative">
                <img
                  className="w-full h-full"
                  src={`${ENDPOINTS.DIR_IMG}/${paramNotice[0].files[0].url}`}
                  alt=""
                />
              </div>

              <p className=" text-red-600 font-bold">
                Publicado el {paramNotice[0].date_published}
              </p>

              <span className="text-xl md:text-2xl font-bold  text-black uppercase">
                {paramNotice[0].title}
              </span>
              <div className="column-container">
                <p
                  dangerouslySetInnerHTML={{
                    __html: processContent(paramNotice[0].content),
                  }}
                  style={{ whiteSpace: "pre-line" }}
                  className="first-letter:text-7xl first-letter:text-gray-800 first-letter:mr-3 first-letter:float-left text-black font-light"
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
                  className="hover:text-red-600/70 text-red-600 float-end w-fit px-2 py-1 rounded-md flex gap-1 font-bold"
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
          )}
        {paramId &&
          Array.isArray(paramNotice) &&
          paramNotice.length > 0 &&
          paramNotice.map((obj) => {
            if (obj.id == paramId) {
              return (
                <div
                  key={obj.id}
                  className="left w-full md:w-6/12 flex flex-col gap-0"
                >
                  <div className="w-full h-[400px] relative">
                    <img
                      className="w-full h-full"
                      src={`${ENDPOINTS.DIR_IMG}/${obj.files[0].url}`}
                      alt=""
                    />
                  </div>
                  <p className=" text-red-600 font-bold">
                    Publicado el {obj.date_published}
                  </p>
                  <span className="text-xl md:text-2xl font-bold  text-black uppercase">
                    {obj.title}
                  </span>
                  <div className="column-container">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: processContent(obj.content),
                      }}
                      style={{ whiteSpace: "pre-line" }}
                      className="first-letter:text-7xl first-letter:text-gray-800 first-letter:mr-3 first-letter:float-left text-black font-light"
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
                      className="hover:text-red-600/70 text-red-600 float-end w-fit px-2 py-1 rounded-md flex gap-1 font-bold"
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
              );
            }
          })}
        <div
          style={{ position: "sticky", top: "90px", overflowY: "auto" }}
          className="right_scroll w-full md:w-4/12  h-auto md:h-[calc(100vh-100px)] flex flex-col md:flex-col gap-3 md:pr-2 py-4 md:py-0 overflow-x-hidden"
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

      <div className="mt-14">
        <Links></Links>
      </div>
      <SocialMedia></SocialMedia>
    </div>
  );
};

export default Notice;
