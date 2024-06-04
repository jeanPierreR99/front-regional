import React, { useEffect } from "react";
import Logo from "../../components/Logo";
import SocialMedia from "../../components/SocialMedia";
import Links from "../../components/Links";

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section className="py-24 overflow-hidden px-4 md:px-4 lg:px-16">
      <div className="pt-10">
        <h2 className="text-3xl text-gray-200 md:text-4xl font-bold mb-8">
          CONTÁCTENOS
        </h2>
        <div className="text-gray-300 mb-2 font-light">
          <p>
            <strong className="font-semibold">¡Nos encantaría saber de ti!</strong> ¿Tienes alguna pregunta, comentario o
            simplemente quieres saludarnos? Estamos aquí para ayudarte. No dudes
            en ponerte en contacto con nosotros a través del formulario a
            continuación o utilizando cualquiera de los métodos de contacto
            proporcionados. Nuestro equipo estará encantado de atenderte y
            responder a todas tus inquietudes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Formulario de contacto */}
          <div>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-gray-300"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="rounded-md w-full px-3 py-2 border border-gray-800 focus:border-[#3183a9] placeholder-gray-500 text-gray-300 focus:outline-none sm:text-sm bg-black/40"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-300"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="rounded-md w-full px-3 py-2 border border-gray-800 focus:border-[#3183a9] placeholder-gray-500 text-gray-300 focus:outline-none sm:text-sm bg-black/40"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block font-medium text-gray-300"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="rounded-md w-full px-3 py-2 border border-gray-800 focus:border-[#3183a9] placeholder-gray-500 text-gray-300 focus:outline-none sm:text-sm bg-black/40"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                Enviar
              </button>
            </form>
          </div>
          {/* Mapa */}
          <div>
            <iframe
              title="Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19446.873996532093!2d-69.1849787430194!3d-12.599219362325457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9107df795f4cbdf9%3A0xf37df1e231ebfc50!2sDirecci%C3%B3n%20Regional%20de%20Vivienda%20Construcci%C3%B3n%20y%20Saneamiento%20Madre%20de%20Dios!5e0!3m2!1ses!2spe!4v1653682467789!5m2!1ses!2spe"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <Logo></Logo>
        <div className="md:mt-8 mt-2">
          <Links></Links>
        </div>
      </div>
      <SocialMedia></SocialMedia>
    </section>
  );
};

export default Contact;
