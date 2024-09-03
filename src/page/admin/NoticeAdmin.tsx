import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNotice } from "../../context/Context.provider";
import CardNotice from "../../components/client/CardNotice";
import FormNoticeAdmin from "../../components/admin/FormNoticeAdmin";
import ModalViewNotice from "../../components/admin/ModalViewNotice";

const NoticeAdmin: React.FC = () => {
  const { paramNotice } = useNotice();
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
      <FormNoticeAdmin toast={toast}></FormNoticeAdmin>
      <details className="p-4 border border-gray-300 rounded-lg">
        <summary className="text-lg font-semibold cursor-pointer text-green-600">
          Ver Noticias
        </summary>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          {Array.isArray(paramNotice) &&
            paramNotice.map((data) => (
              <div
                key={data.id}
                onClick={() => {
                  openModalView(data.id);
                }}
              >
                <CardNotice
                  id={data.id}
                  title={data.title}
                  files={data.files[0].url}
                  content={data.content}
                  create_at={data.create_at}
                  date_published={data.date_published}
                ></CardNotice>
              </div>
            ))}
        </div>
      </details>
      <ModalViewNotice
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

export default NoticeAdmin;
