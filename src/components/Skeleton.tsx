export const SkeletonNoticeCard = () => {
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

export const SkeletonPostCard = () => {
  return (
    <div className="w-full md:w-[30%] flex flex-col gap-2">
      <div className=" bg-gray-300 animate-pulse w-full h-[200px]"></div>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full bg-gray-300 h-10   animate-pulse"></div>
        <div className="w-full bg-gray-300 h-10   animate-pulse"></div>
        <div className="w-full bg-gray-300  h-10  animate-pulse"></div>
      </div>
    </div>
  );
};

export const SkeletonMultimediaCard = () => {
    return (
      <div className="w-full h-[300px] bg-gray-300 animate-pulse">
      </div>
    );
  };
