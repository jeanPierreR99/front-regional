import { ToastContainer, toast } from "react-toastify";
import FormPostAdmin from "../../components/admin/FormPostAdmin";
import { usePost } from "../../context/Context.provider";
import CardPost from "../../components/CardPost";
import { useEffect, useState } from "react";
import ModalViewPost from "../../components/admin/ModalViewPost";
import axios from "axios";
import ENDPOINTS from "../../config";
import { addData } from "../../functions";

const PostAdmin: React.FC = () => {
  const { paramPost, setParamPost } = usePost();
  const [isOpenView, setIsOpenView] = useState(false);
  const [paramId, setParamId] = useState("");
  const [checkedStates, setCheckedStates] = useState<{
    [key: string]: boolean;
  }>({});
  const openModalView = (id: string) => {
    setParamId(id);
    setIsOpenView(true);
  };

  const closeModalView = () => {
    setIsOpenView(false);
  };

  const handleToggle = async (id: string) => {
    const newStatus = !checkedStates[id];
    setCheckedStates((prevStates) => ({
      ...prevStates,
      [id]: newStatus,
    }));

    const formData = new FormData();
    formData.append("status", newStatus ? "1" : "0");
    formData.append("id", id);

    try {
      const response = await addData(axios, formData, ENDPOINTS.UPDATE_POST);

      if (response.data.response.status === 200) {
        const updatedParamPost = response.data.response.data;
        setParamPost(updatedParamPost);
        console.log(response.data.response.data);
        toast.success("Estado actualizado: " + id);
        return;
      }
    } catch (error) {
      toast.info("Ocurrio un error");
    }
  };

  useEffect(() => {
    if (paramPost) {
      const initialCheckedStates = paramPost.reduce((acc: any, post: any) => {
        acc[post.id] = post.status === 1;
        return acc;
      }, {});
      setCheckedStates(initialCheckedStates);
    }
  }, [paramPost]);

  return (
    <div className="flex flex-col gap-4">
      <FormPostAdmin toast={toast}></FormPostAdmin>
      <details className="p-4 border border-gray-300 rounded-lg">
        <summary className="text-lg font-semibold cursor-pointer text-green-600">
          Ver comunicados
        </summary>
        <div className="w-full flex flex-wrap md:flex-row  gap-3 justify-between items-center overflow-hidden">
          {Array.isArray(paramPost) &&
            paramPost.map((data: any) => (
              <div key={data.id} className="">
                <div
                  onClick={() => {
                    openModalView(data.id);
                  }}
                >
                  <CardPost
                    id={data.id}
                    img={data.file.url}
                    title={data.title}
                    content={data.content}
                    date_published={data.date_published}
                  ></CardPost>
                </div>
                <div className="flex items-center float-right mb-2">
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={checkedStates[data.id]}
                        onChange={() => {
                          handleToggle(data.id);
                        }}
                      />
                      <div
                        className={`w-14 h-7 ${
                          checkedStates[data.id]
                            ? "bg-green-600"
                            : "bg-gray-400"
                        } rounded-full shadow-inner transition-colors`}
                      ></div>
                      <div
                        className={`dot absolute w-5 h-5 bg-white shadow-md rounded-full left-1 top-1 transition-transform ${
                          checkedStates[data.id]
                            ? "transform translate-x-7"
                            : ""
                        }`}
                      ></div>
                    </div>
                  </label>
                </div>
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
