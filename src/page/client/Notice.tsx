import { useNotice, useParamId } from "../../context/Context.provider";
import CardNotice from "../../components/CardNotice";
import { useEffect } from "react";
import GallerySection from "../../components/GallerySection";
import Logo from "../../components/Logo";
import Links from "../../components/Links";
import ENDPOINTS from "../../config";
import SocialMedia from "../../components/SocialMedia";

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
  const { paramId, setParamId } = useParamId();

  const handleChangeParam = () => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set("search", "notice");

    setParamId(newSearchParams.get("id") || "1");
    const newUrl = `?${newSearchParams.toString()}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  useEffect(() => {
    handleChangeParam();
    window.scrollTo(0, 0);
    console.log(paramNotice)
  }, [paramId]);

  return (
    <div className="flex flex-col px-4 md:px-4 lg:px-16  pt-14 pb-24">
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
                  <p className=" text-yellow-300 font-bold">
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
                  <div className="flex overflow-hidden flex-wrap justify-around gap-4 w-full h-full mt-10">
                    <GallerySection files={obj.files}></GallerySection>
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
      {paramId == "1" &&
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

              <p className=" text-yellow-300 font-bold">
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
              <div className="flex overflow-hidden flex-wrap justify-around gap-4 w-full h-full mt-10">
                <GallerySection files={paramNotice[0].files}></GallerySection>
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
        <Logo></Logo>
        <div className="md:mt-8 mt-2">
          <Links></Links>
        </div>
      </div>
      <SocialMedia></SocialMedia>
    </div>
  );
};

export default Notice;
