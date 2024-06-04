import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNotice } from "../../context/Context.provider";
import CardNotice from "../../components/CardNotice";
import iconAddNotice from "../../assets/icon-add-noticia.png";
import ModalAddNotice from "../../components/admin/ModalAddNotice";
import ModalViewNotice from "../../components/admin/ModalViewNotice";

const NoticeAdmin: React.FC = () => {
  const { paramNotice } = useNotice();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenView, setIsOpenView] = useState(false);
  const [paramId, setParamId] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModalView = (id: string) => {
    setParamId(id);
    setIsOpenView(true);
  };

  const closeModalView = () => {
    setIsOpenView(false);
  };
console.log(paramNotice)
  return (
    <div className="flex flex-col gap-4">
      <button
        className="hover:scale-125 w-fit  hover:drop-shadow-md"
        onClick={openModal}
      >
        <img src={iconAddNotice} className="w-[50px] h-[50px]" alt="" />
      </button>
      <ModalAddNotice isOpen={isOpen} toast={toast} onClose={closeModal}></ModalAddNotice>
      <div className="w-full flex md:flex-wrap flex-col md:flex-row gap-10 justify-center overflow-hidden">
        {Array.isArray(paramNotice) &&
          paramNotice.map((data) => (
            <div
              key={data.id}
              className=" w-full md:w-5/12"
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
