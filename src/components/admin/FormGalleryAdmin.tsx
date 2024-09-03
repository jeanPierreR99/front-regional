import React, { useState } from "react";
import axios from "axios";
import ENDPOINTS from "../../config";
import { useGallery } from "../../context/Context.provider";
import relojArena from "../../assets/img-icon/loader-sub.gif";
import { addData } from "../../functions";

interface FormGalleryAdminProps {
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

const FormGalleryAdmin: React.FC<FormGalleryAdminProps> = ({ toast }) => {
  const { paramGallery, setParamGallery } = useGallery();
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);
  const [uploadMessage, setUploadMessage] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
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
    console.log("click")
    let date_published = new Date().getTime().toString();
    let create_at = getDate();

    if (!title || files.length < 2) {
      setUploadMessage("Rellene todos los campos y 2 archivos requerido");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("date_published", date_published);
    formData.append("create_at", create_at);
    for (let i = 0; i < files.length; i++) {
      formData.append("files[]", files[i]);
    }
    try {
      const response = await addData(axios, formData, ENDPOINTS.ADD_GALLERY);
      console.log(response);
      if (response.data.response.status === 200) {
        const updatedParamNotice = [
          response.data.response.data,
          ...paramGallery,
        ];

        setParamGallery(updatedParamNotice);
        setTitle("");
        setFiles([]);
        setLoading(false);
        setUploadMessage("");
        toast.success("Carpeta agregada");
        return;
      }
    } catch (error) {
      toast.info("Ocurrio un error");
    }
  };

  return (
    <div className="">
      <span className="font-bold text-xl">NUEVA CARPETA</span>
      <br />
      <br />
      <div className="">
        <form
          className="w-full md:flex flex-row gap-2"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="w-full md:w-6/12 flex flex-col gap-2 md:sticky top-0">
            <input
              type="text"
              className="rounded-md w-full px-3 py-2 border border-gray-300 focus:border-[#0306a9] placeholder-gray-300 text-gray-500 focus:outline-none sm:text-sm"
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
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
                      ARCHIVOS REQUERIDOS (sin límite)
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
            <p className=" text-red-600 font-bold">Publicado el {getDate()}</p>
            <span className="text-xl md:text-2xl font-bold  text-black uppercase">
              {title}
            </span>
            <div className="mt-6">
              <div className="grid grid-cols-2 gap-1">
                {files &&
                  files.map((data, index) => (
                    <div key={index} className="relative h-[250px] col-span-1">
                      {verifyTypeFile(data.type, URL.createObjectURL(data))}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormGalleryAdmin;
