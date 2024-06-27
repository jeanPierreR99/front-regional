import React, { useEffect } from "react";
import { useParam, useParamId, usePost } from "../../context/Context.provider";
import SocialMedia from "../../components/SocialMedia";
import Links from "../../components/Links";
import ENDPOINTS from "../../config";
import CardPost from "../../components/CardPost";
import { SkeletonPostCard } from "../../components/Skeleton";

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

  const handleChangeParam = () => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set("search", "post");

    setParamId(newSearchParams.get("id") || "");
    const newUrl = `?${newSearchParams.toString()}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  useEffect(() => {
    handleChangeParam();
    window.scrollTo(0, 0);
  }, [paramURL, paramId]);

  return (
    <div className="pt-24 pb-6 overflow-hidden px-4 md:px-4 lg:px-16 flex flex-col gap-6">
      <div className="flex gap-3">
        <div className="flex-col hidden md:flex w-2/12 gap-4">
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
        <div className="w-full flex flex-col gap-8 md:w-10/12">
          {!paramPost && (
            <div className="w-full md:10/12 h-fit gap-3 flex md:flex-wrap flex-col md:flex-row justify-between">
              {" "}
              <SkeletonPostCard></SkeletonPostCard>
              <SkeletonPostCard></SkeletonPostCard>
              <SkeletonPostCard></SkeletonPostCard>
            </div>
          )}
          <div className="flex flex-wrap order-1 justify-between gap-2 md:gap-4 pb-2 right_scroll">
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
                  <div key={index} className="w-full">
                    <div className="">
                      <img
                        className="w-full md:w-1/2 h-auto object-contain float-left mr-4 mb-4"
                        src={`${ENDPOINTS.DIR_IMG}/${data.file.url}`}
                        alt=""
                      />
                      <p className=" text-blue-700 font-bold">
                        Publicado el {data.date_published}
                      </p>
                      <h4 className="uppercase text-black font-bold text-xl md:text-2xl">
                        {data.title}
                      </h4>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: processContent(data.content),
                        }}
                        className="text-black font-light whitespace-pre-line"
                      ></p>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
      <div className="mt-14">
        <Links></Links>
      </div>
      <SocialMedia></SocialMedia>
    </div>
  );
};

export default Post;
