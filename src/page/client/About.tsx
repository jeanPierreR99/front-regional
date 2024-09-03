import React from "react";

const About: React.FC = () => {
  return (
    <section className="pt-20 pb-6 overflow-hidden px-2 md:px-4 lg:px-16">
      <div className="w-full">
        <section className="bg-cover relative bg-center -mx-2 md:-mx-16 h-[500px] text-white flex items-center image-about">
          <div className="absolute top-0 left-0 background-about  w-full h-full"></div>
          <div className="container mx-auto text-center z-10">
            <h2 className="text-4xl merienda md:text-6xl font-black">
              Dirección Regional de Vivienda, Construcción y Saneamiento
            </h2>
            <p className="text-xl mt-4">
              Comprometidos con el desarrollo y bienestar de nuestra comunidad.
            </p>
          </div>
        </section>

        <section className="container mx-auto my-16 p-8 bg-white">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Sobre Nosotros
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center">
              <div className="w-1/4 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-16 text-blue-600"
                >
                  <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="w-3/4 pl-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Nuestra Misión
                </h3>
                <p className="text-gray-600 leading-loose">
                  Proporcionar soluciones innovadoras y de alta calidad en
                  vivienda, construcción y saneamiento, mejorando la calidad de
                  vida de nuestros ciudadanos.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-1/4 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-16 text-blue-500"
                >
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path
                    fill-rule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="w-3/4 pl-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Nuestra Visión
                </h3>
                <p className="text-gray-600 leading-loose">
                  Ser líderes en la región, comprometidos con la innovación,
                  calidad y sostenibilidad en todos nuestros proyectos.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-1/4 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-16 text-blue-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="w-3/4 pl-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Nuestros Objetivos
                </h3>
                <p className="text-gray-600 leading-loose">
                  Garantizar el acceso a viviendas dignas, mejorar la
                  infraestructura urbana y promover prácticas sostenibles en el
                  manejo del agua.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-1/4 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-16 text-blue-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
                    clip-rule="evenodd"
                  />
                  <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                </svg>
              </div>
              <div className="w-3/4 pl-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Nuestra Historia
                </h3>
                <p className="text-gray-600 leading-loose">
                  Desde nuestros inicios en 1990, hemos trabajado
                  incansablemente para transformar la región y brindar un futuro
                  mejor a nuestras comunidades.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-1/4 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-16 text-blue-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                    clip-rule="evenodd"
                  />
                  <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                </svg>
              </div>
              <div className="w-3/4 pl-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Nuestro Compromiso
                </h3>
                <p className="text-gray-600 leading-loose">
                  Estamos comprometidos con la transparencia, la responsabilidad
                  social y el desarrollo sostenible en todos nuestros proyectos.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-1/4 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-16 text-blue-600"
                >
                  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                </svg>
              </div>
              <div className="w-3/4 pl-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Logros y Reconocimiento
                </h3>
                <p className="text-gray-600 leading-loose">
                  Hemos sido galardonados con múltiples premios por nuestra
                  excelencia en servicios de vivienda, construcción y
                  saneamiento.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className=" -mx-2 md:-mx-16 my-16 p-8 bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg">
              <img
                src="https://images.adsttc.com/media/images/62cf/3b37/3e4b/319d/dc00/0008/newsletter/VIA_02.jpg?1657748265"
                alt="Imagen 1"
                className="w-full mb-4 h-[200px]"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Proyecto de Vivienda
              </h3>
              <p className="text-gray-600 leading-loose">
                Desarrollo de viviendas asequibles y sostenibles en áreas
                urbanas y rurales.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg">
              <img
                src="https://i0.wp.com/www.actualidadambiental.pe/wp-content/uploads/2024/03/carretera-Interoceanica-en-Puerto-Maldonado-Vico-Mendez.jpg?resize=700%2C467&ssl=1"
                alt="Imagen 2"
                className="w-full mb-4 h-[200px]"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Infraestructura Urbana
              </h3>
              <p className="text-gray-600 leading-loose">
                Mejoras significativas en la infraestructura de la ciudad para
                un desarrollo urbano óptimo.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg">
              <img
                src="https://www.paho.org/sites/default/files/webinario-aguas-residuales-400x_0.jpg"
                alt="Imagen 3"
                className="w-full mb-4 h-[200px]"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Proyectos de Saneamiento
              </h3>
              <p className="text-gray-600 leading-loose">
                Implementación de sistemas de saneamiento eficientes y
                sostenibles en la región.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
