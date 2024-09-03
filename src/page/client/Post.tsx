import React, { useEffect, useState } from "react";
import { useParam, useParamId, usePost } from "../../context/Context.provider";
import ENDPOINTS from "../../config";
import CardPost from "../../components/client/CardPost";
import { SkeletonPostCard } from "../../components/client/Skeleton";
import { useSearchParams } from "react-router-dom";
import HeaderSub from "../../components/client/HeaderSub";
import { propHeader } from "./Notice";

const processContent = (text: string) => {
  if (!text) return "";
  const boldPattern = /\*\*(.*?)\*\*/g;
  text = text.replace(boldPattern, '<strong class="text-bold">$1</strong>');

  const listPattern = /--(.*?)--/g;
  text = text.replace(listPattern, "<li>$1</li>");

  return text;
};

const Post: React.FC = () => {
  const { paramURL } = useParam();
  const { paramId, setParamId } = useParamId();
  const { paramPost } = usePost();
  const [searchParams, setSearchParams] = useSearchParams();
  const [valHeaderPost, setValHeaderPost] = useState<propHeader>({
    title: "",
    date: "",
  });

  const changeLocalParam = () => {
    setParamId(searchParams.get("id") || "");
    if (paramId && paramPost) {
      const foundPost = paramPost.find(
        (obj: any) => obj.id === parseFloat(paramId)
      );
      if (foundPost) {
        setValHeaderPost({
          title: foundPost.title,
          date: foundPost.date_published,
        });
      }
    } else {
      setValHeaderPost({ title: "", date: "" });
    }
  };

  useEffect(() => {
    changeLocalParam();
  }, [paramURL, paramId]);

  return (
    <div className="overflow-hidden flex flex-col py-1 bg-gray-200">
      <HeaderSub
        title={valHeaderPost.title}
        titleHolder="COMUNICADOS"
        date={valHeaderPost.date}
        param="post"
      ></HeaderSub>
      <div className="flex gap-3 mx-2 md:mx-28 bg-white p-2 pb-10">
        <div className="w-full flex flex-col gap-8">
          {!paramPost && (
            <div className="w-full md:10/12 h-fit gap-3 flex md:flex-wrap flex-col md:flex-row justify-between">
              {" "}
              <SkeletonPostCard></SkeletonPostCard>
              <SkeletonPostCard></SkeletonPostCard>
              <SkeletonPostCard></SkeletonPostCard>
            </div>
          )}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 order-1 mt-10">
            {paramPost &&
              paramPost.map((data: any, index: any) => (
                <CardPost
                  key={index}
                  id={data.id}
                  img={data.file.url}
                  title={data.title}
                  content={data.content}
                  date_published={data.date_published}
                ></CardPost>
              ))}
          </div>
          {paramId &&
            paramPost &&
            paramPost.map((data: any, index: any) => {
              if (data.id.toString() == paramId) {
                return (
                  <div key={index} className="w-full pb-6">
                    <div className="mt-8">
                      <img
                        className="w-full md:w-1/2 h-auto object-contain float-left mr-4 mb-4"
                        src={`${ENDPOINTS.DIR_IMG}/${data.file.url}`}
                        alt=""
                      />
                      <p
                        dangerouslySetInnerHTML={{
                          __html: processContent(data.content),
                        }}
                        className="text-black font-light whitespace-pre-line text-sm"
                      ></p>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default Post;
