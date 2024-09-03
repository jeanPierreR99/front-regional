import {
  useNotice,
  useParam,
  useParamId,
} from "../../context/Context.provider";
import CardNotice from "../../components/client/CardNotice";
import { useEffect, useState } from "react";
import { handleChangeParamId, handleChangeParam } from "../../functions";
import { SliderImageVideo } from "../../components/client/InteractiveGallery";
import { useSearchParams } from "react-router-dom";
import HeaderSub from "../../components/client/HeaderSub";

const processContent = (text: string) => {
  if (!text) return "";
  const boldPattern = /\*\*(.*?)\*\*/g;
  text = text.replace(boldPattern, '<strong class="text-bold">$1</strong>');

  const listPattern = /--(.*?)--/g;
  text = text.replace(listPattern, "<li>$1</li>");

  return text;
};

const SkeletonNoticeCard = () => {
  return (
    <div className="w-full md:w-[49%] h-[150px] flex gap-2">
      <div className="block bg-gray-300 animate-pulse w-4/12"></div>
      <div className="w-8/12 flex flex-col gap-4">
        <div className="w-full bg-gray-300 h-10   animate-pulse"></div>
        <div className="w-full bg-gray-300 h-10   animate-pulse"></div>
        <div className="w-full bg-gray-300  h-10  animate-pulse"></div>
      </div>
    </div>
  );
};

export interface propHeader {
  title: string;
  date: string;
}

const Notice: React.FC = () => {
  const { paramNotice } = useNotice();
  const { paramURL, setParamURL } = useParam();
  const { paramId, setParamId } = useParamId();
  const [searchParams, setSearchParams] = useSearchParams();
  const [valHeaderNotice, setValHeaderNotice] = useState<propHeader>({
    title: "",
    date: "",
  });

  const changeLocalParam = () => {
    setParamId(searchParams.get("id") || "");
    if (paramId && paramNotice) {
      const foundNotice = paramNotice.find(
        (obj: any) => obj.id === parseFloat(paramId)
      );
      if (foundNotice) {
        setValHeaderNotice({
          title: foundNotice.title,
          date: foundNotice.date_published,
        });
      }
    } else {
      setValHeaderNotice({ title: "", date: "" });
    }
  };

  useEffect(() => {
    changeLocalParam();
  }, [paramURL, paramId]);

  return (
    <div className="flex flex-col bg-gray-200 py-1 min-h-screen">
      <HeaderSub
        title={valHeaderNotice.title}
        titleHolder="NOTICIAS"
        date={valHeaderNotice.date}
        param="notice"
      ></HeaderSub>
      <div className="flex gap-3 flex-col md:flex-row px-2 pb-10 bg-white md:mx-28 mx-4">
        {!paramNotice && (
          <div className="w-full mt-10 md:10/12 h-fit gap-3 flex md:flex-wrap flex-col md:flex-row justify-between">
            <SkeletonNoticeCard></SkeletonNoticeCard>
            <SkeletonNoticeCard></SkeletonNoticeCard>
            <SkeletonNoticeCard></SkeletonNoticeCard>
            <SkeletonNoticeCard></SkeletonNoticeCard>
          </div>
        )}
        {paramId == "" && (
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {paramNotice &&
              paramNotice.map((data: any, index: any) => (
                <CardNotice
                  key={index}
                  id={data.id}
                  title={data.title}
                  files={data.files[0].url}
                  content={data.content}
                  create_at={data.create_at}
                  date_published={data.date_published}
                ></CardNotice>
              ))}
          </div>
        )}

        {paramId &&
          paramNotice &&
          paramNotice.map((obj: any, index: any) => {
            if (obj.id == paramId) {
              return (
                <div
                  key={index}
                  className="w-full md:grid grid-cols-3 gap-4 pt-8"
                >
                  <div className="col-span-2">
                    <div className="h-[450px] relative overflow-hidden">
                      <SliderImageVideo
                        additionalImages={obj.files}
                        auto={true}
                      ></SliderImageVideo>
                    </div>
                    <div className="column-container">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: processContent(obj.content),
                        }}
                        style={{ whiteSpace: "pre-line" }}
                        className="first-letter:text-7xl first-letter:mr-3 first-letter:float-left text-black font-light"
                      ></p>
                    </div>
                    <div className="text-right z-10 md:pr-12">
                      <button
                        onClick={() =>
                          handleChangeParamId(
                            "multimedia",
                            obj.id,
                            setParamURL,
                            setParamId,
                            setSearchParams
                          )
                        }
                        className="hover:text-blue-700/70 text-blue-700 float-end w-fit px-2 py-1 rounded-md flex gap-1 font-bold"
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
                  <div className="col-span-1 hidden md:block">
                    <div className="relative mb-4">
                      <span className="w-full h-1 bg-red-600 absolute top-[50%]"></span>
                      <span className="bg-red-600 w-fit relative z-[9] text-white py-2 pr-6 flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                        </svg>
                        Otras Noticias
                      </span>
                    </div>
                    {Array.isArray(paramNotice) &&
                      paramNotice.slice(0, 10).map((data: any) => (
                        <div key={data.id}>
                          <button
                            onClick={() =>
                              handleChangeParamId(
                                "notice",
                                data.id,
                                setParamURL,
                                setParamId,
                                setSearchParams
                              )
                            }
                            className="text-left mt-2 bg-gray-200 text-sm hover:text-blue-500 px-2 py-1"
                          >
                            {data.title}
                          </button>
                        </div>
                      ))}
                    <div className="mt-2 text-center">
                      <button
                        onClick={() =>
                          handleChangeParam(
                            "notice",
                            setParamURL,
                            setParamId,
                            setSearchParams
                          )
                        }
                        className="border border-blue-500 px-2 py-1 text-blue-500 text-sm hover:bg-blue-500 hover:text-white duration-200"
                      >
                        Ver mas
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Notice;
