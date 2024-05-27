import React, { useState } from "react";
import axios from "axios";
import PATH_DOMAIN from "../../config";
import { useNotice } from "../../context/Context.provider";
import relojArena from "../../assets/icons8-reloj-arena-abajo.gif";

interface ModalAddNoticeProps {
  isOpen: boolean;
  toast: any;
  onClose: () => void;
}

const ModalAddNotice: React.FC<ModalAddNoticeProps> = ({
  isOpen,
  toast,
  onClose,
}) => {
  const { paramNotice, setParamNotice } = useNotice();
  if (!isOpen) return null;
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [uploadMessage, setUploadMessage] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (files?.length >= 4) {
      toast.warning("Maximo 4 Archivos");
      return;
    }
    if (fileList) {
      const newFiles: File[] = Array.from(fileList);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };
  const handleRemoveFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title || !content || !date || files.length < 4) {
      setUploadMessage("Rellene todos los campos y 4 archivos requeridos");
      return;
    }

    setLoading(true)
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("date", date);
    for (let i = 0; i < files.length; i++) {
      formData.append("files[]", files[i]);
    }
    try {
      const response = await axios.post(
        `${PATH_DOMAIN}/regional/server/?action=addnotice`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedParamNotice = [...paramNotice, response.data];

      setParamNotice(updatedParamNotice);
      setTitle("");
      setContent("");
      setDate("");
      setFiles([]);
      setLoading(false)
      setUploadMessage("");
      toast.success("Noticia agregada");
    } catch (error) {
      toast.info("Ocurrio un error");
    }
    console.log(paramNotice);
  };

  return (
    <div className="fixed h-screen top-0 left-0 z-[999] py-4 outline-none bg-black/30 w-full">
      <div className="relative z-10 w-11/12 lg:w-[70%] md:w-8/12  mx-auto">
        <div className="bg-[#041025] border border-[#3183a9] w-full   rounded-lg shadow-lg">
          <div className="flex justify-between items-center border-b border-[#3183a9] p-4">
            <h3 className="text-lg text-gray-300 font-semibold">
              Nueva Noticia
            </h3>
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={onClose}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="p-4 overflow-y-auto h-auto">
            <form
              className="w-full h-full md:flex flex-row gap-2"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <div className="w-6/12 flex flex-col gap-2">
                <input
                  type="text"
                  className="rounded-md w-full px-3 py-2 border border-gray-800 focus:border-[#3183a9] placeholder-gray-500 text-gray-300 focus:outline-none sm:text-sm bg-black/40"
                  placeholder="Título"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  className="rounded-md w-full px-3 py-2 border border-gray-800 focus:border-[#3183a9] placeholder-gray-500 text-gray-300 focus:outline-none sm:text-sm bg-black/40"
                  rows={6}
                  placeholder="Contenido"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <input
                  type="text"
                  className="rounded-md w-full px-3 py-2 border border-gray-800 focus:border-[#3183a9] placeholder-gray-500 text-gray-300 focus:outline-none sm:text-sm bg-black/40"
                  placeholder="Fecha de registro"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                {uploadMessage && (
                  <p className="text-red-500">{uploadMessage}</p>
                )}
                <button
                  type="submit"
                  className="w-full flex gap-2 items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                >
                  <span>Agregar</span>
                  {loading && <img src={relojArena} alt="" className="h-6" />}
                </button>
              </div>
              <div className="w-6/12">
                <input
                  type="file"
                  className="file:rounded-md file:bg-yellow-200 text-yellow-300 file:border-none file:hover:cursor-pointer cursor-pointer file:py-1 file:text-gray-700 w-full py-2 focus:outline-none sm:text-sm"
                  onChange={handleFileChange}
                  multiple
                />
                <div className="w-full">
                  <table className="w-full divide-y divide-gray-200">
                    <thead className="">
                      <tr>
                        <th className="py-3 text-left text-xs font-medium text-gray-300 tracking-wider">
                          4 ARCHIVOS REQUERIDOS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {files.map((file, index) => (
                        <tr key={index}>
                          <td className="px-1  py-1  text-sm text-gray-400">
                            {file.name}
                          </td>
                          <td className="px-1 py-1 text-sm text-gray-400">
                            <button
                              type="button"
                              onClick={() => handleRemoveFile(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
    </div>
  );
};

export default ModalAddNotice;
