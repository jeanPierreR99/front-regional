import React, { useState } from "react";
import axios from "axios";
import ENDPOINTS from "../../config";
import { usePost } from "../../context/Context.provider";
import relojArena from "../../assets/img-icon/loader-sub.gif";

interface FormPostAdminProps {
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

const FormPostAdmin: React.FC<FormPostAdminProps> = ({ toast }) => {
  const { paramPost, setParamPost } = usePost();
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [file, setFile] = useState<File>();
  const [uploadMessage, setUploadMessage] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList[0]) {
      setFile(fileList[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let date_published = new Date().getTime().toString();
    let create_at = getDate();

    if (!title || !content || !file) {
      setUploadMessage("Rellene todos los campos");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("date_published", date_published);
    formData.append("create_at", create_at);
    formData.append("file", file);
    try {
      const response = await axios.post(ENDPOINTS.ADD_POST, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      if (response.data.response.status === 200) {
        const updatedParamPost = [
          ...paramPost,
          response.data.response.data,
        ];

        setParamPost(updatedParamPost);
        setTitle("");
        setContent("");
        setFile(undefined);
        setLoading(false);
        setUploadMessage("");
        toast.success("Comunicado agregada");
        return;
      }
    } catch (error) {
      toast.info("Ocurrio un error");
    }
    console.log(paramPost);
  };

  return (
    <div className="">
      <span className="font-bold text-xl">NUEVO COMUNICADO</span>
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
            {file && (
              <div className="">
                <img
                  className="w-full md:w-1/2 h-auto object-contain float-left mr-4 mb-4"
                  src={URL.createObjectURL(file)}
                  alt=""
                />
              </div>
            )}
            <div className="">
              <p className=" text-red-600 font-bold">
                publicado el {getDate()}{" "}
              </p>
              <h4 className="uppercase text-blaxk font-bold text-xl md:text-2xl">
                {title}
              </h4>
              <p
                className="first-letter:text-7xl first-letter:font-light first-letter:mr-3 first-letter:float-left text-black font-light"
                dangerouslySetInnerHTML={{
                  __html: processContent(content),
                }}
                style={{
                  overflowWrap: "break-word",
                  whiteSpace: "pre-line",
                }}
              ></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPostAdmin;
