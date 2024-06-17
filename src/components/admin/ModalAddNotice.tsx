import React, { useState } from "react";
import axios from "axios";
import ENDPOINTS from "../../config";
import { useNotice } from "../../context/Context.provider";
import relojArena from "../../assets/icons8-reloj-arena-abajo.gif";

interface ModalAddNoticeProps {
  toast: any;
}

const getDate = () => {
  let fechaActual = new Date();

  let anio = fechaActual.getFullYear();
  let mes = String(fechaActual.getMonth() + 1).padStart(2, "0");
  let dia = String(fechaActual.getDate()).padStart(2, "0");
  let horas = String(fechaActual.getHours()).padStart(2, "0");
  let minutos = String(fechaActual.getMinutes()).padStart(2, "0");
  let segundos = String(fechaActual.getSeconds()).padStart(2, "0");

  let fechaHoraActual = `${anio}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
  return fechaHoraActual;
};
const processContent = (text: string) => {
  if (!text) return "";
  const boldPattern = /\*\*(.*?)\*\*/g;
  text = text.replace(boldPattern, '<strong class="text-bold">$1</strong>');

  const listPattern = /--(.*?)--/g;
  text = text.replace(listPattern, "<li>$1</li>");

  return text;
};

const verifyTypeFile = (type: any, file: any) => {
  if (type.startsWith("image/")) {
    return <img className="w-full h-full object-cover" src={file} alt="" />;
  }

  return (
    <video
      src={file}
      className="w-full h-[300px] md:h-full object-cover"
      controls
    ></video>
  );
};

const ModalAddNotice: React.FC<ModalAddNoticeProps> = ({ toast }) => {
  const { paramNotice, setParamNotice } = useNotice();
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
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
    let date_published = new Date().getTime().toString();
    let create_at = getDate();

    if (!title || !content || files.length < 4) {
      setUploadMessage("Rellene todos los campos y 4 archivos requeridos");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("date_published", date_published);
    formData.append("create_at", create_at);
    for (let i = 0; i < files.length; i++) {
      formData.append("files[]", files[i]);
    }
    try {
      const response = await axios.post(ENDPOINTS.ADD_NOTICE, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      if (response.data.response.status === 200) {
        const updatedParamNotice = [
          ...paramNotice,
          response.data.response.data,
        ];

        setParamNotice(updatedParamNotice);
        setTitle("");
        setContent("");
        setFiles([]);
        setLoading(false);
        setUploadMessage("");
        toast.success("Noticia agregada");
        return;
      }
    } catch (error) {
      toast.info("Ocurrio un error");
    }
    console.log(paramNotice);
  };

  return (
    <div className="">
      <span className="font-bold text-xl">NUEVA NOTICIA</span>
      <br />
      <br />
      <div className="">
        <form
          className="w-full md:flex flex-row gap-2"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="w-full md:w-6/12 flex flex-col gap-2 h-[630px] md:sticky top-0">
            <input
              type="text"
              className="rounded-md w-full px-3 py-2 border border-gray-300 focus:border-[#0306a9] placeholder-gray-300 text-gray-500 focus:outline-none sm:text-sm"
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="text-gray-500 text-xs flex flex-col">
              <span>
                **Texto de ejemplo Bold**
                <span className="text-bold"> Texto de ejemplo Bold</span>
              </span>
              <span className="flex gap-4">
                --Texto de ejemplo List--<li> Texto de ejemplo List</li>
              </span>
              <span className="flex gap-4">
                --**Texto de ejemplo Combinado**--
                <li className="text-bold">Texto de ejemplo Combinado</li>
              </span>
            </div>
            <textarea
              className="rounded-md w-full px-3 py-2 border border-gray-300 focus:border-[#0306a9] placeholder-gray-300 text-gray-500 focus:outline-none sm:text-sm"
              rows={10}
              placeholder="Contenido"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <input
              type="file"
              className="file:rounded-md -mt-1 file:bg-green-600 text-green-600 file:border-none file:hover:cursor-pointer cursor-pointer file:py-1 file:text-white w-full py-2 focus:outline-none sm:text-sm"
              onChange={handleFileChange}
              multiple
              accept="image/*, video/*"
            />
            <div className="w-full">
              <table className="w-full divide-y divide-gray-200">
                <thead className="">
                  <tr>
                    <th className="py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                      4 ARCHIVOS REQUERIDOS
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {files.map((file, index) => (
                    <tr key={index}>
                      <td className="px-1  py-1  text-sm text-blue-500">
                        {file.name}
                      </td>
                      <td className="px-1 py-1 text-sm">
                        <button
                          type="button"
                          onClick={() => handleRemoveFile(index)}
                          className="text-red-500 hover:text-red-500/70"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {uploadMessage && <p className="text-red-500">{uploadMessage}</p>}
            <button
              type="submit"
              className="w-full flex gap-2 items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            >
              <span>Agregar</span>
              {loading && <img src={relojArena} alt="" className="h-6" />}
            </button>
          </div>
          <div className="w-full md:w-6/12 border border-gray-300 p-2 rounded-md">
            {files.length > 0 && (
              <div className="w-full h-[250px] relative">
                <img
                  className="w-full h-full object-cover"
                  src={URL.createObjectURL(files[0])}
                  alt=""
                />
              </div>
            )}
            <p className=" text-[#0306a9] font-bold">
              Publicado el {getDate()}
            </p>
            <span className="text-xl md:text-2xl font-bold  text-gray-900 uppercase">
              {title}
            </span>
            <div className="column-container mt-2">
              <p
                className="first-letter:text-7xl first-letter:font-light first-letter:text-gray-700 first-letter:mr-3 first-letter:float-left text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: processContent(content),
                }}
                style={{
                  overflowWrap: "break-word",
                  whiteSpace: "pre-line",
                }}
              ></p>
            </div>
            <div className="mt-6">
              <div className="grid grid-cols-4 gap-1">
                {files && files.length > 1 && (
                  <div className="relative h-[250px] col-span-2">
                    {verifyTypeFile(
                      files[1].type,
                      URL.createObjectURL(files[1])
                    )}
                  </div>
                )}
                {files && files.length > 2 && (
                  <div className="relative h-[250px] col-span-2">
                    {verifyTypeFile(
                      files[2].type,
                      URL.createObjectURL(files[2])
                    )}
                  </div>
                )}
                {files && files.length > 3 && (
                  <div className="relative h-[250px] col-span-4">
                    {verifyTypeFile(
                      files[3].type,
                      URL.createObjectURL(files[3])
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAddNotice;
