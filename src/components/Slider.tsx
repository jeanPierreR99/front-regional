import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { handleChangeParamId } from "../functions";
import { useParam, useParamId } from "../context/Context.provider";

const Slider: React.FC = () => {
  const [currSlide, setCurrSlide] = useState<number>(0);
  const { setParamURL } = useParam();
  const { setParamId } = useParamId();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const slides = [
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

  const maxSlide = slides.length;

  const nextSlide = () => {
    setCurrSlide((prevSlide) =>
      prevSlide === maxSlide - 1 ? 0 : prevSlide + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrSlide(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  const prevSlide = () => {
    setCurrSlide((prevSlide) =>
      prevSlide === 0 ? maxSlide - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    // preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  return (
    <div
      {...swipeHandlers}
      className="relative h-[calc(100vh-180px)] md:h-screen w-full overflow-hidden"
    >
      <div className="absolute top-0 left-0 background-slider w-full h-full"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>
      <button
        onClick={prevSlide}
        className="absolute w-10 h-10 ml-2 hidden cursor-pointer font-bold text-white/60 hover:text-white rounded-full bg-white/20 hover:bg-blue-400 duration-200 leading-tight text-center z-[600] top-[50%] translate-y-[-50%] left-0 md:flex items-center justify-center"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute w-10 h-10 mr-2 hidden cursor-pointer font-bold text-white/60 hover:text-white rounded-full bg-white/20 hover:bg-blue-400 duration-200 leading-tight text-center z-[600] top-[50%] translate-y-[-50%] right-0 md:flex items-center justify-center"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        className="flex h-full w-full transition-transform duration-1000"
        style={{ transform: `translateX(-${currSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 flex flex-col md:flex-row w-full h-full px-4"
          >
            <div className="w-full md:w-6/12 h-6/12 pt-36 md:pt-0  flex flex-col justify-center text-white md:px-14">
              <h4 className="md:text-5xl text-2xl merienda font-black line-clamp-2 md:leading-tight">
                {slide.titulo}
              </h4>
              <h4 className="md:text-lg mt-4 merienda line-clamp-5">
                {slide.contenido}
              </h4>
              <div className="flex my-4 justify-end">
                <button
                  onClick={() =>
                    handleChangeParamId(
                      "post",
                      slide.id.toString(),
                      setParamURL,
                      setParamId
                    )
                  }
                  className="flex text-yellow-400 gap-1 font-bold hover:text-yellow-300 w-fit"
                >
                  Seguir leyendo{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-full items-center justify-center flex md:w-6/12 h-full overflow-hidden relative m-auto">
              <img
                src={slide.imagen}
                alt={`Slide ${index + 1}`}
                className="md:w-[70%] w-full h-full md:h-[80%]"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2 z-[600]">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currSlide ? "bg-blue-400" : "bg-blue-100"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
