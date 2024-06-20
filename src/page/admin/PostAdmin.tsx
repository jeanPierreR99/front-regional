import { ToastContainer, toast } from "react-toastify";
import FormPostAdmin from "../../components/admin/FormPostAdmin";
import { usePost } from "../../context/Context.provider";
import CardPost from "../../components/CardPost";
import { useState } from "react";
import ModalViewPost from "../../components/admin/ModalViewPost";

const PostAdmin: React.FC = () => {
  const { paramPost } = usePost();
  const [isOpenView, setIsOpenView] = useState(false);
  const [paramId, setParamId] = useState("");

  const openModalView = (id: string) => {
    setParamId(id);
    setIsOpenView(true);
  };

  const closeModalView = () => {
    setIsOpenView(false);
  };
  return (
    <div className="flex flex-col gap-4">
      <FormPostAdmin toast={toast}></FormPostAdmin>
      <details className="p-4 border border-gray-300 rounded-lg">
        <summary className="text-lg font-semibold cursor-pointer text-orange-600">
          Ver comunicados
        </summary>
        <div className="w-full flex md:flex-wrap flex-col md:flex-row md:gap-10 gap-3 justify-center items-center overflow-hidden">
          {paramPost &&
            paramPost.map((data: any, index: any) => (
              <div
                key={data.id}
                className=""
                onClick={() => {
                  openModalView(data.id);
                }}
              >
                <CardPost
                  key={index}
                  id={data.id}
                  img={data.file.url}
                  title={data.title}
                  content={data.content}
                  date_published={data.date_published}
                ></CardPost>
              </div>
            ))}
        </div>
      </details>
      <ModalViewPost
        isOpeView={isOpenView}
        id={paramId}
        toast={toast}
        onClose={closeModalView}
      />
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
};

export default PostAdmin;
