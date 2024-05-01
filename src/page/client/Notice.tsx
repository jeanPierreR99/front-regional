import { useNotice, useParamId } from "../../context/Context.provider";
import CardNotice from "../../components/CardNotice";
import { useEffect } from "react";
import ImageGallery from "../../components/ImageGallery";
const Notice: React.FC = () => {
  const { paramNotice } = useNotice();
  const { paramId, setParamId } = useParamId();
  // const handleChangeParam = () => {
  //   const newSearchParams = new URLSearchParams(window.location.search);
  //   const id = newSearchParams.get("id");
  //   setUrl(id);
  // };

  const handleChangeParam = () => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set("search", "notice");

    setParamId(newSearchParams.get("id") || "1");
    const newUrl = `?${newSearchParams.toString()}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  useEffect(() => {
    handleChangeParam();
  }, []); // Sin dependencias

  return (
    <div className="flex flex-col gap-28 px-2 mt-10 bg-[#fbfbfb]">
      {paramId &&
        Array.isArray(paramNotice) &&
        paramNotice.map((obj) => {
          if (obj.id === paramId) {
            return (
              <div key={obj.id} className="flex flex-col md:flex-row gap-4">
                <div className="left w-full md:w-[calc(100%-430px)] flex flex-col gap-0 pb-10">
                  <span className="text-xl md:text-4xl  anton-regular bg-red-600 text-white px-2 uppercase">
                    {obj.titulo}
                  </span>
                  <div className="w-full h-[400px] relative">
                    <img className="w-full h-full" src={obj.imagen} alt="" />
                    <p className="text-white flex items-center gap-1 text-sm w-fit absolute p-2 right-0 bottom-0 bg-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                        />
                      </svg>
                      <span className="relative text-white">{obj.fecha}</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 px-2 mt-2">
                    <div
                      className="column-container"
                      style={{
                        columnCount: "2",
                        columnGap: "20px",
                        textAlign: "justify",
                      }}
                    >
                      <p className="first-letter:text-7xl first-letter:font-light first-letter:text-gray-700 first-letter:mr-3 first-letter:float-left text-gray-500 font-light">
                        {obj.descripcion}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 w-full h-full justify-center mt-6">
                    <ImageGallery
                      url={
                        "https://peruconstruye.net/wp-content/uploads/2024/01/Saneamiento-Obras-Agua-potable-compressed.jpg"
                      }
                      type="image"
                    ></ImageGallery>
                    <ImageGallery
                      url={
                        "https://peruconstruye.net/wp-content/uploads/2024/01/agua-potable-2.jpg"
                      }
                      type="image"
                    ></ImageGallery>
                    <ImageGallery
                      url={
                        "https://portal.andina.pe/EDPfotografia3/Thumbnail/2020/12/28/000737009W.jpg"
                      }
                      type="image"
                    ></ImageGallery>
                    <ImageGallery
                      url={
                        "https://e.rpp-noticias.io/xlarge/2023/01/19/074207_1377242.jpg"
                      }
                      type="image"
                    ></ImageGallery>
                    <ImageGallery
                      url={
                        "http://localhost/regional/uploads/Y2meta.app%20-%20Kim%20Dracula%20%e2%80%93%20Paparazzi%20(Official%20Video).mp4"
                      }
                      type="video"
                    ></ImageGallery>
                        <ImageGallery
                      url={
                        "http://localhost/regional/uploads/Y2meta.app%20-%20Kim%20Dracula%20%e2%80%93%20Paparazzi%20(Official%20Video).mp4"
                      }
                      type="video"
                    ></ImageGallery>
                  </div>
                </div>
                <div
                  style={{ position: "sticky", top: "10px", overflowY: "auto" }}
                  className="right w-full md:w-[430px]  h-auto md:h-screen flex flex-row md:flex-col overflow-x-auto gap-4 px-2 py-4 md:py-0"
                >
                  {Array.isArray(paramNotice) &&
                    paramNotice.map((data) => (
                      <CardNotice
                        key={data.id}
                        id={data.id}
                        titulo={data.titulo}
                        imagen={data.imagen}
                        descripcion={data.descripcion}
                        fecha={data.fecha}
                      ></CardNotice>
                    ))}
                </div>
              </div>
            );
          }
        })}
      {paramId == undefined && (
        <div className="flex flex-col md:flex-row gap-4">
          <div className="left w-full md:w-[calc(100%-430px)] flex flex-col gap-0 pb-10">
            <p className="text-xl md:text-4xl font-bold bg-red-600 text-white px-2 uppercase">
              {Array.isArray(paramNotice) && paramNotice[0].titulo}
            </p>
            <div className="w-full h-[400px] relative">
              <img
                className="w-full h-full"
                src={Array.isArray(paramNotice) && paramNotice[0].imagen}
                alt=""
              />
              <p className="text-white flex items-center gap-1 text-sm w-fit absolute p-2 right-0 bottom-0 bg-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
                <span>
                  {Array.isArray(paramNotice) && paramNotice[0].fecha}
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-2 px-2 mt-2">
              <div
                className="column-container"
                style={{
                  columnCount: "2",
                  columnGap: "20px",
                  textAlign: "justify",
                }}
              >
                <p className="font-light text-gray-700">
                  {Array.isArray(paramNotice) && paramNotice[1].descripcion}
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ position: "sticky", top: "10px", overflowY: "auto" }}
            className="right w-full md:w-[430px]  h-auto md:h-screen flex flex-row md:flex-col overflow-x-auto gap-4 px-2 py-4 md:py-0"
          >
            {Array.isArray(paramNotice) &&
              paramNotice.map((data) => (
                <CardNotice
                  key={data.id}
                  id={data.id}
                  titulo={data.titulo}
                  imagen={data.imagen}
                  descripcion={data.descripcion}
                  fecha={data.fecha}
                ></CardNotice>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notice;
