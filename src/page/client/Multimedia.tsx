// src/components/Multimedia.tsx
import React from "react";
import { useGallery } from "../../context/Context.provider";
import { SkeletonMultimediaCard } from "../../components/client/Skeleton";
import InteractiveGallery from "../../components/client/InteractiveGallery";
import HeaderSub from "../../components/client/HeaderSub";
const Multimedia: React.FC = () => {
  const { paramGallery } = useGallery();

  return (
    <div className="bg-gray-200 py-1">
      <HeaderSub
        title=""
        titleHolder="MULTIMEDIA"
        date=""
        param="multimedia"
      ></HeaderSub>
      <div className="mx-2 md:mx-28 bg-white p-2">
        {!paramGallery && (
          <div className="col-span-2 grid grid-cols-3 gap-2 py-10">
            <SkeletonMultimediaCard></SkeletonMultimediaCard>
            <SkeletonMultimediaCard></SkeletonMultimediaCard>
            <SkeletonMultimediaCard></SkeletonMultimediaCard>
            <SkeletonMultimediaCard></SkeletonMultimediaCard>
            <SkeletonMultimediaCard></SkeletonMultimediaCard>
            <SkeletonMultimediaCard></SkeletonMultimediaCard>
          </div>
        )}
        <div className="grid md:grid-cols-5 grid-cols-2 gap-10 py-10">
          {paramGallery &&
            Array.isArray(paramGallery) &&
            paramGallery.map((data) => (
              <InteractiveGallery
                title={data.title}
                url={data.files[0].url}
                additionalImages={data.files}
              ></InteractiveGallery>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Multimedia;
