import React from "react";
import HeaderSub from "../../components/client/HeaderSub";

const Contact: React.FC = () => {
  return (
    <div className="overflow-hidden py-1 bg-gray-200">
      <HeaderSub
        title=""
        titleHolder="CONTÁCTENOS"
        date=""
        param="contact"
      ></HeaderSub>
      <div className="mx-2 md:mx-28 bg-white px-2 py-10 text-sm">
        <div className="text-gray-500">
          <p>
            <strong className="text-lg">¡Nos encantaría saber de ti!</strong> ¿Tienes
            alguna pregunta, comentario o simplemente quieres saludarnos?
            Estamos aquí para ayudarte. No dudes en ponerte en contacto con
            nosotros a través del formulario a continuación o utilizando
            cualquiera de los métodos de contacto proporcionados. Nuestro equipo
            estará encantado de atenderte y responder a todas tus inquietudes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          <div>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-gray-500"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="rounded-md w-full px-3 py-2 border border-gray-300 focus:border-blue-800 text-gray-500 focus:outline-none sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-500"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="rounded-md w-full px-3 py-2 border border-gray-300 focus:border-blue-800 text-gray-500 focus:outline-none sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block font-medium text-gray-500"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="rounded-md w-full px-3 py-2 border border-gray-300 focus:border-blue-800 text-gray-500 focus:outline-none sm:text-sm"
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
          <div className="h-[300px] md:h-full w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2401.323830158927!2d-69.19497592094153!3d-12.599296842228735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x917b4954ec2ac43d%3A0xed893397a0a22a0a!2sDirecci%C3%B3n%20Regional%20de%20Vivienda%2C%20Construcci%C3%B3n%20y%20Saneamiento%20de%20MDD!5e0!3m2!1ses!2spe!4v1719508715038!5m2!1ses!2spe"
              // width="600"
              // height="450"
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
