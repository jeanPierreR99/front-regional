import { useEffect } from "react";
import { useGallery } from "../../context/Context.provider";
import FormGalleryAdmin from "../../components/admin/FormGalleryAdmin";
import { toast, ToastContainer } from "react-toastify";
import InteractiveGallery from "../../components/client/InteractiveGallery";

function MultimediaAdmin() {
  const { paramGallery } = useGallery();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [paramGallery]);

  return (
    <div className="flex flex-col gap-4">
      <FormGalleryAdmin toast={toast}></FormGalleryAdmin>
      <details className="p-4 border border-gray-300 rounded-lg">
        <summary className="text-lg font-semibold cursor-pointer text-green-600">
          Ver Galleria
        </summary>
        <div className="grid md:grid-cols-5 grid-cols-2 gap-10">
          {paramGallery &&
            Array.isArray(paramGallery) &&
            paramGallery.map((data: any, index: any) => (
              <div key={index} className="">
                <InteractiveGallery
                  title={data.title}
                  url={data.files[0].url}
                  additionalImages={data.files}
                ></InteractiveGallery>
              </div>
            ))}
        </div>
      </details>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default MultimediaAdmin;
