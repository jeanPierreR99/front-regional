import { useNotice, useParamId } from "../../context/Context.provider";
import CardNotice from "../../components/CardNotice";
import { useEffect } from "react";
import GallerySection from "../../components/GallerySection";
import Logo from "../../components/Logo";
import Links from "../../components/Links";
import PATH_DOMAIN from "../../config";
import SocialMedia from "../../components/SocialMedia";
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
  }, []); // Sin dependencias

  console.log(paramId);
  console.log(paramNotice);
  return (
    <div className="flex flex-col px-2 md:px-4 lg:px-16  pt-14">
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
                      src={`${PATH_DOMAIN}/regional/server/${obj.files[0].url}`}
                      alt=""
                    />
                  </div>
                  <p className=" text-red-600 font-bold">
                    Publicado el {obj.create_at}
                  </p>
                  <span className="text-xl md:text-2xl font-bold  text-gray-200 uppercase">
                    {obj.title}
                  </span>
                  <div className="flex flex-col gap-2 px-2 mt-2">
                    <div
                      className="column-container"
                      style={{
                        columnCount: "2",
                        columnGap: "20px",
                        textAlign: "justify",
                      }}
                    >
                      <p className="first-letter:text-7xl first-letter:font-light first-letter:text-gray-300 first-letter:mr-3 first-letter:float-left text-gray-300 font-light">
                        {obj.content}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-around gap-4 w-full h-full mt-10">
                    <GallerySection files={obj.files}></GallerySection>
                  </div>
                </div>
                <div
                  style={{ position: "sticky", top: "90px", overflowY: "auto" }}
                  className="right_scroll w-full md:w-5/12  h-auto md:h-[calc(100vh-100px)] flex flex-col md:flex-col gap-4 px-2 py-4 md:py-0 overflow-x-hidden"
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
                  src={`${PATH_DOMAIN}/regional/server/${paramNotice[0].files[0].url}`}
                  alt=""
                />
              </div>
           
              <p className=" text-red-600 font-bold">
                Publicado el {paramNotice[0].create_at}
              </p>
              <span className="text-xl md:text-2xl font-bold  text-gray-200 uppercase">
                {paramNotice[0].title}
              </span>
              <div className="flex flex-col gap-2 px-2 mt-2">
                <div
                  className="column-container"
                  style={{
                    columnCount: "2",
                    columnGap: "20px",
                    textAlign: "justify",
                  }}
                >
                  <p className="first-letter:text-7xl first-letter:font-light first-letter:text-gray-300 first-letter:mr-3 first-letter:float-left text-gray-300 font-light">
                    {paramNotice[0].content}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-around gap-4 w-full h-full mt-10">
                <GallerySection files={paramNotice[0].files}></GallerySection>
              </div>
            </div>
            <div
              style={{ position: "sticky", top: "90px", overflowY: "auto" }}
              className="right_scroll w-full md:w-5/12  h-auto md:h-[calc(100vh-100px)] flex flex-col md:flex-col gap-4 px-2 py-4 md:py-0 overflow-x-hidden"
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
        <div className="py-6">
          <Links></Links>
        </div>
      </div>
      <SocialMedia></SocialMedia>
    </div>
  );
};

export default Notice;
