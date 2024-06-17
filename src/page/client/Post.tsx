import React, { useEffect } from "react";
import { useParam, useParamId } from "../../context/Context.provider";
import { handleChangeParamId } from "../../functions";
import SocialMedia from "../../components/SocialMedia";
import Links from "../../components/Links";

const processContent = (text: string) => {
  if (!text) return "";
  const boldPattern = /\*\*(.*?)\*\*/g;
  text = text.replace(boldPattern, '<strong class="text-bold">$1</strong>');

  const listPattern = /--(.*?)--/g;
  text = text.replace(listPattern, "<li>$1</li>");

  return text;
};

const ItemPost: React.FC<any> = ({ img }: any) => {
  return (
    <div className="w-[180px] md:w-[350px] flex-shrink-0 h-[300px] md:h-[350px] hover:scale-105 duration-500">
      <button className="h-full w-full">
        <img className="w-full h-full" src={img} alt="img" />
      </button>
    </div>
  );
};

const itemsPost = [
  {
    id: 1,
    titulo: "Juntos por un Futuro más Limpio: Campaña de Saneamiento 2024",
    contenido:
      "¡Únete a nuestra Campaña de Saneamiento 2024 y contribuye a un entorno más limpio y saludable para todos! La correcta gestión de residuos y el acceso a servicios de saneamiento son fundamentales para el bienestar de nuestra comunidad. \n\n¿Por qué es importante el saneamiento? \n\n**Salud Pública:** Previene enfermedades y mejora la calidad de vida. La falta de saneamiento adecuado puede llevar a la propagación de enfermedades infecciosas como el cólera, la disentería y la hepatitis A. \n\n**Medio Ambiente:** Protege nuestros ríos, lagos y suelos de la contaminación. Los desechos no tratados adecuadamente pueden contaminar el agua potable, afectar la fauna y flora, y dañar los ecosistemas. \n\n**Economía:** Reduce los costos asociados con el tratamiento de enfermedades y mejora la productividad. Invertir en saneamiento contribuye a crear entornos de trabajo más saludables y, en consecuencia, economías más fuertes. \n\n¿Cómo puedes participar? \n\n**Educación:** Aprende y difunde prácticas adecuadas de saneamiento y manejo de residuos. Participa en nuestros talleres y programas educativos para estar mejor informado y capacitado. \n\n**Voluntariado:** Únete a nuestras jornadas de limpieza comunitaria y ayuda a mantener nuestras áreas públicas limpias y seguras para todos. \n\n**Donaciones:** Apoya con recursos para mejorar las infraestructuras de saneamiento en áreas necesitadas. Tu contribución puede marcar una gran diferencia. \n\n**Denuncia:** Reporta malas prácticas y vertederos ilegales en tu comunidad. Ayúdanos a mantener nuestros entornos libres de contaminación.",
    fecha: "2024-06-11T10:10:00",
    imagen: "https://pbs.twimg.com/media/FN6n_N2XMA4bit3.jpg",
  },
  {
    id: 2,
    titulo: "Taller de Educación Ambiental",
    contenido:
      "El Taller de Educación Ambiental tendrá lugar el 25 de Junio de 2024 a las 10:00 AM en el Parque Central. \n\nEste taller está diseñado para proporcionar a los participantes un conocimiento profundo sobre las prácticas adecuadas de saneamiento y manejo de residuos. Los temas que se abordarán incluyen: \n\n- La importancia del saneamiento en la salud pública. \n- Técnicas de reciclaje y reducción de residuos. \n- Métodos para conservar y proteger nuestros recursos naturales. \n\nHabrá actividades interactivas, demostraciones y materiales educativos disponibles para todos los asistentes. Este es un evento ideal para familias, educadores, y cualquier persona interesada en hacer una diferencia positiva en su comunidad.",
    fecha: "2024-06-25T10:00:00",
    imagen:
      "https://i.pinimg.com/736x/c5/9f/7e/c59f7efdb6c9cf5d1eff88974cc14c3b.jpg",
  },
  {
    id: 3,
    titulo: "Jornada de Limpieza Comunitaria",
    contenido:
      "Únete a nosotros en la Jornada de Limpieza Comunitaria el 5 de Julio de 2024 a las 8:00 AM en el Río Principal. \n\nEsta jornada es una oportunidad para que los miembros de la comunidad trabajen juntos para limpiar y embellecer uno de nuestros recursos naturales más preciados. \n\nActividades: \n\n- Recolección de basura y desechos en las orillas del río. \n- Clasificación y reciclaje de materiales recolectados. \n- Plantación de árboles y vegetación nativa para prevenir la erosión del suelo. \n\nTodos los materiales necesarios, incluidos guantes, bolsas de basura y herramientas, serán proporcionados. Se recomienda a los voluntarios usar ropa cómoda y zapatos adecuados para trabajar en áreas naturales. Al finalizar la jornada, habrá un almuerzo comunitario para todos los participantes.",
    fecha: "2024-07-05T08:00:00",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJAtlVhc8_9SRAgtLiWzzG1UL8FGxmo1kd0Q&s",
  },
  {
    id: 4,
    titulo: "Conferencia sobre Innovaciones en Saneamiento",
    contenido:
      "La Conferencia sobre Innovaciones en Saneamiento se celebrará el 20 de Julio de 2024 a las 2:00 PM en el Centro de Convenciones. \n\nEsta conferencia reunirá a expertos en el campo del saneamiento y la gestión de residuos para discutir las últimas innovaciones y mejores prácticas. \n\nTemas de la conferencia: \n\n- Tecnologías emergentes en tratamiento de aguas residuales. \n- Soluciones sostenibles para la gestión de residuos sólidos. \n- Políticas públicas y su impacto en el saneamiento. \n- Casos de estudio de proyectos exitosos a nivel global. \n\nAdemás de las presentaciones y paneles de discusión, habrá oportunidades para el networking y una exposición de productos y servicios relacionados con el saneamiento. Este evento es una oportunidad invaluable para profesionales del sector, funcionarios públicos, y estudiantes interesados en el campo del saneamiento y la gestión ambiental.",
    fecha: "2024-07-20T14:00:00",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETzzz9zD9em3A28ZkixfyOsiuRLRAtVfR4w&s",
  },
];

const Post: React.FC = () => {
  const { paramURL, setParamURL } = useParam();
  const { paramId, setParamId } = useParamId();

  const handleChangeParam = () => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set("search", "post");

    setParamId(newSearchParams.get("id") || "");
    const newUrl = `?${newSearchParams.toString()}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  useEffect(() => {
    handleChangeParam();
    window.scrollTo(0, 0);
  }, [paramURL, paramId]);
  return (
    <div className="pt-24 pb-6 overflow-hidden px-4 md:px-4 lg:px-16 flex flex-col gap-6">
      <div className="flex">
        <div className="flex-col hidden md:flex w-2/12 gap-4 py-6 px-2">
          <div className="overflow-y-auto h-[400px] flex-shrink-0">
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FDRVCSMDD%2Fposts%2Fpfbid02N1NdoGG22ZEVew7yJqcFDPe3WSgxb6CSgoknjtp6LxV711rU4vwK91Qy5gJQjPml&show_text=true&width=200"
              style={{ border: "none" }}
              width={350}
              height={800}
              className="overflow-y-auto"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="overflow-y-auto h-[400px] flex-shrink-0">
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FDRVCSMDD%2Fposts%2Fpfbid0oCxMWY2n4r7ULuZaMyLir91FDcGH2pDQkqJvQ8Yku8VrnNN9pMcVNySmu8gRTzSbl&show_text=true&width=200"
              style={{ border: "none" }}
              width={350}
              height={800}
              className="overflow-y-auto"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
        {paramId &&
          itemsPost.map((data, index) => {
            if (data.id.toString() == paramId) {
              return (
                <div key={index} className="w-full md:w-10/12">
                  <div className="">
                    <img
                      className="w-full md:w-1/2 h-auto object-contain float-left mr-4 mb-4"
                      src={data.imagen}
                      alt=""
                    />
                    <p className=" text-[#0306A9] font-bold">
                      Publicado el {data.fecha}
                    </p>
                    <h4 className="uppercase text-gray-900 font-bold text-xl md:text-2xl">
                      {data.titulo}
                    </h4>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: processContent(data.contenido),
                      }}
                      className="text-gray-500 whitespace-pre-line"
                    ></p>
                  </div>
                </div>
              );
            }
          })}
  
      {paramId == "" && (
        <div className="md:w-10/12 w-full">
          <div className="">
            <img
              className="w-full md:w-1/2 h-auto object-contain float-left mr-4 mb-4"
              src={itemsPost[0].imagen}
              alt=""
            />
          </div>
          <div className="">
            <p className=" text-[#0306A9] font-bold">
              Publicado el {itemsPost[0].fecha}
            </p>
            <h4 className="uppercase text-gray-900 font-bold text-xl md:text-2xl">
              {itemsPost[0].titulo}
            </h4>
            <p
              dangerouslySetInnerHTML={{
                __html: processContent(itemsPost[0].contenido),
              }}
              className="text-gray-500 whitespace-pre-line"
            ></p>
          </div>
          
        </div>
      )}
          </div>
      <h4 className="text-5xl font-black">Comunicados</h4>
      <div className="flex flex-wrap justify-between gap-2 md:gap-4 pb-2 right_scroll">
        {itemsPost.map((data, index) => (
          <div
            onClick={() =>
              handleChangeParamId(
                "post",
                data.id.toString(),
                setParamURL,
                setParamId
              )
            }
            key={index}
          >
            <ItemPost img={data.imagen}></ItemPost>
          </div>
        ))}
      </div>
      <div className="mt-14">
        <Links></Links>
      </div>
      <SocialMedia></SocialMedia>
    </div>
  );
};

export default Post;
