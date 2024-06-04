import {useEffect, useState} from "react";
import { useNotice } from "../../context/Context.provider";
import ImageGallery from "../../components/ImageGallery";

function MultimediaAdmin() {
  const { paramNotice } = useNotice();
  const [allUrls, setAllUrls] = useState<Array<string>>([]);

  useEffect(() => {
    let auxArray: any = [];
    Array.isArray(paramNotice) &&
      paramNotice.forEach((obj: any) => {
        Array.isArray(obj.files) &&
          obj.files.forEach((element: any) => {
            auxArray.push(element);
          });
      });
    setAllUrls(auxArray);
    window.scrollTo(0, 0);
  }, [paramNotice]);
  return (
    <div>
      <div className="grid grid-cols-5 gap-2  -mx-2 md:-mx-4 lg:-mx-16">
        {allUrls &&
          Array.isArray(allUrls) &&
          allUrls.map((data: any, index: any) => (
            <div
              key={index}
              className={`${
                index % 5 === 0
                  ? "col-span-2 md:col-span-2"
                  : index % 3 === 0
                  ? "col-span-2 md:col-span-2"
                  : "col-span-3 md:col-span-3"
              } relative overflow-hidden`}
            >
              <ImageGallery url={data.url} type={data.type}></ImageGallery>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MultimediaAdmin;