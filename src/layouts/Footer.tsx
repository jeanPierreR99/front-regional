import React from "react";
import { useParam } from "../context/Context.provider";
import SocialMedia from "../components/client/SocialMedia";
const Footer: React.FC = () => {
  const { paramURL } = useParam();
  return (
    <div className={paramURL == "login" ? "hidden" : "px-4 md:px-28 bg-gray-100 overflow-hidden"}>
      {" "}
      <footer className="md:grid grid-cols-3 pt-10 h-full">
        <div className="flex flex-col gap-6 items-center">
          <span className="md:text-4xl text-2xl font-bold">CONTACTO</span>
          <div className="text-gray-500 font-light text-lg text-center">
            <p className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 m-auto"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z"
                  clip-rule="evenodd"
                />
              </svg>
              <strong>Dirección: </strong>Independendia Nacional 909 esquina
              amnuel dominguesz
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 m-auto"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              <strong>Teléfono: </strong>+51 987564562
            </p>
            <p className="border-b border-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 m-auto"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <strong>Correo: </strong>Comunicaciones@gmail.com
            </p>
            <div className="mb-2">
              <span className="text-gray-900">Madre de Dios - Puerto Maldonado</span>
            <img src="https://regionmadrededios.gob.pe/visitas/logo-aa.png" alt="" />
            </div>
          </div>
        </div>
        <div className="p-6 h-[250px] md:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2401.323830158927!2d-69.19497592094153!3d-12.599296842228735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x917b4954ec2ac43d%3A0xed893397a0a22a0a!2sDirecci%C3%B3n%20Regional%20de%20Vivienda%2C%20Construcci%C3%B3n%20y%20Saneamiento%20de%20MDD!5e0!3m2!1ses!2spe!4v1719508715038!5m2!1ses!2spe"
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <span className="md:text-4xl text-2xl font-bold">REDES SOCIALES</span>
          <SocialMedia></SocialMedia>
          <div className="w-11/12 h-[250px]">
            <img
              src="https://www.muvh.gov.py/wp-content/uploads/2023/08/negro.png"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </footer>
      <div className="bg-red-600 -mx-28 text-center">
        <p className="mt-8 text-xs text-gray-200 p-2 sm:mt-0">
          &copy; 2024. DRVCS. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
