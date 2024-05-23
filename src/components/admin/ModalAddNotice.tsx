import React, { useState } from "react";
import axios from "axios";
import PATH_DOMAIN from "../../config";
import { useNotice } from "../../context/Context.provider";
import EditorQuill from "../EditorQuill";

interface ModalAddNoticeProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAddNotice: React.FC<ModalAddNoticeProps> = ({ isOpen, onClose }) => {
  const { paramNotice, setParamNotice } = useNotice();
  if (!isOpen) return null;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [uploadMessage, setUploadMessage] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (files?.length >= 4) {
      alert("solo puede agregar 4 archivos");
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

      // Actualiza el estado con los datos combinados
      setParamNotice(updatedParamNotice);

      console.log("--------------");
      console.log(paramNotice);
      //   setUploadMessage(response.data);
      setTitle("");
      setContent("");
      setDate("");
      setFiles([]);
      setUploadMessage("Datos guardados");
    } catch (error) {
      // Manejar errores
      setUploadMessage("Error al subir archivos");
    }
    console.log(paramNotice);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative z-10 w-11/12 lg:w-[70%] md:w-8/12  mx-auto my-6">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center border-b border-gray-200 p-4">
            <h3 className="text-lg font-semibold">Nueva Noticia</h3>
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
          <div className="p-4">
            <form
              className="w-full h-full md:flex flex-row gap-2"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <div className="w-8/12 flex flex-col gap-2">
                <input
                  type="text"
                  className="rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Título"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {/* <textarea
                  className="rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  rows={4}
                  placeholder="Contenido"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea> */}
                <div className="h-[270px]">
                  <EditorQuill></EditorQuill>
                </div>
                <input
                  type="text"
                  className="rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Fecha de registro"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                {uploadMessage && (
                  <p className="text-red-500">{uploadMessage}</p>
                )}
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                >
                  Agregar
                </button>
              </div>
              <div className="w-5/12">
                <input
                  type="file"
                  className="file:rounded-md file:bg-gray-700 file:border-none file:hover:cursor-pointer cursor-pointer file:py-1 file:text-white w-full py-2 focus:outline-none sm:text-sm"
                  onChange={handleFileChange}
                  multiple
                />
                <div className="w-full">
                  <table className="w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          4 Archivos requeridos
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {files.map((file, index) => (
                        <tr key={index}>
                          <td className="px-1  py-1  text-sm text-gray-500">
                            {file.name}
                          </td>
                          <td className="px-1 py-1 text-sm text-gray-500">
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
