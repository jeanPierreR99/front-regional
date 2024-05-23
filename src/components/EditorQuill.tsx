import { useEffect, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from 'quill-image-resize-module-react';
import "react-quill/dist/quill.snow.css"; // Estilos Quill
import PATH_DOMAIN from "../config";
import "../../public/css/QuillNone.css";
Quill.register('modules/imageResize', ImageResize);

const EditorQuill = () => {
  const [editorHtml, setEditorHtml] = useState("");

  const handleEditorChange = (html: any) => {
    setEditorHtml(html);
  };
  
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike"],
      [
        { list: "ordered" },
        { list: "bullet" },
      ],
      [{ color: [] }],
    ],
    clipboard: {
      matchVisual: true,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
  ];

  // const handleSave = async () => {
    // try {
    //   const response = await fetch(
    //     `${PATH_DOMAIN}/regional/server/?action=savecontent`,
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ content: editorHtml }),
    //     }
    //   );
    //   if (response.ok) {
    //     alert("Contenido guardado exitosamente");
    //   } else {
    //     alert("Error al guardar el contenido");
    //   }
    // } catch (error) {
    //   console.error("Error al guardar el contenido:", error);
    // }
    // console.log(editorHtml)
  // };
  useEffect(() => {
    // Función para obtener el contenido guardado
    const getContent = async () => {
      try {
        const response = await fetch(
          `${PATH_DOMAIN}/regional/server/?action=getcontent`
        );
        if (response.ok) {
          // const data = await response.json();
          // Aquí aseguramos que el contenido obtenido sea una cadena HTML válida
          // setEditorHtml(data[13].content); // Ajusta según la estructura de tu JSON de respuesta
       setEditorHtml("")
        } else {
          console.error("Error al obtener el contenido:", response.statusText);
        }
      } catch (error) {
        console.error("Error al obtener el contenido:", error);
      }
    };

    getContent();
  }, []);

  return (
    <div>
      <ReactQuill
      className="h-[225px]"
        theme="snow"
        value={editorHtml}
        onChange={handleEditorChange}
        readOnly={false}
        modules={modules}
        formats={formats}
      />
      {/* <button
        onClick={handleSave}
        className="px-2 py-1 bg-red-500 text-white my-2"
      >
        Guardar Contenido
      </button>
      <div
      
        dangerouslySetInnerHTML={{ __html: editorHtml }}
        className="quill-content"
      /> */}
    </div>
  );
};

export default EditorQuill;
