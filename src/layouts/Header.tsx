import React, { useEffect, useState } from "react";
import { useParam, useParamId } from "../context/Context.provider";
import logo from "../assets/img-main/logo-vivienda.png";
import { handleChangeParam } from "../functions";
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { paramURL, setParamURL } = useParam();
  const { setParamId } = useParamId();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Agrega un evento de escucha de scroll cuando el componente se monta
    window.addEventListener("scroll", handleScroll);

    // Elimina el evento de escucha de scroll cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Verifica la posición actual del scroll y actualiza el estado en consecuencia
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <header
      className={
        paramURL == "home"
          ? `fixed font-light top-0  z-[999] w-full bg-[#0306a9] ${
              scrolled ? "bg-[#0306a9] shadow-lg text-white" : "text-white md:bg-transparent"
            }`
          : paramURL == "login"
          ? "hidden"
          : " fixed font-light top-0 z-[999] w-full bg-[#0306a9] shadow-lg text-white"
      }
    >
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        <div className="flex items-center bg-white">
          <img className="h-16 w-full" src={logo} alt="" />
        </div>
        <nav className="hidden md:flex">
          <button
            onClick={() => handleChangeParam("home", setParamURL, setParamId)}
            className=" hover:text-white/70 hover:border-white/50 block py-2 px-4 hover:border-b"
          >
            Inicio
          </button>
          <button
            onClick={() => handleChangeParam("about", setParamURL, setParamId)}
            className=" hover:text-white/70 hover:border-white/50 block py-2 px-4 hover:border-b"
          >
            Sobre nosotros
          </button>
          <li className="relative group list-none  hover:border-white/50 block py-2 px-4 hover:border-b">
            <a href="#" className="hover:text-white/70 flex gap-1 items-center">
              Medios{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
            <ul className="absolute left-0 hidden w-40 bg-blue-700 px-2 text-white group-hover:block">
              <li>
                {" "}
                <button
                  onClick={() =>
                    handleChangeParam("notice", setParamURL, setParamId)
                  }
                  className="hover:text-white/70 border-white block py-2 w-full border-b"
                >
                  Noticias
                </button>
              </li>
              <button
                onClick={() =>
                  handleChangeParam("post", setParamURL, setParamId)
                }
                className="hover:text-white/70 border-white block py-2 w-full border-b"
              >
                Comunicados
              </button>
              <li>
                {" "}
                <button
                  onClick={() =>
                    handleChangeParam("multimedia", setParamURL, setParamId)
                  }
                  className="hover:text-white/70 hover:border-white block py-2 w-full"
                >
                  Multimedia
                </button>
              </li>
            </ul>
          </li>
          <button
            onClick={() =>
              handleChangeParam("contact", setParamURL, setParamId)
            }
            className=" hover:text-white/70 hover:border-white/50  hover:border-b block py-2 px-4"
          >
            Contactos
          </button>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-2 z-[999] absolute top-20 left-0 right-0 bg-[#0306a9]">
            <div className="container mx-auto">
              <button
                onClick={() =>
                  handleChangeParam("home", setParamURL, setParamId)
                }
                className="block text-gray-300 py-2 hover:bg-blue-800 w-full"
              >
                Inicio
              </button>
              <button
                onClick={() =>
                  handleChangeParam("about", setParamURL, setParamId)
                }
                className="block text-gray-300 py-2 hover:bg-blue-800 w-full"
              >
                Sobre Nosotros
              </button>
              <li className="relative hover:h-[160px] duration-500 group list-none block text-gray-300 py-2 px-4">
                <a
                  href="#"
                  className="flex gap-1 items-center justify-center"
                >
                  Medios{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </a>
                <ul className="absolute left-0 hidden w-full bg-[#0306a9] px-2 group-hover:block">
                  <li>
                    {" "}
                    <button
                      onClick={() =>
                        handleChangeParam("notice", setParamURL, setParamId)
                      }
                      className=" block py-2 w-full hover:bg-blue-800"
                    >
                      Noticias
                    </button>
                  </li>
                  <button
                    onClick={() =>
                      handleChangeParam("post", setParamURL, setParamId)
                    }
                    className=" block py-2 w-full hover:bg-blue-800"
                  >
                    Comunicados
                  </button>
                  <li>
                    {" "}
                    <button
                      onClick={() =>
                        handleChangeParam("multimedia", setParamURL, setParamId)
                      }
                      className=" block py-2 w-full hover:bg-blue-800"
                    >
                      Multimedia
                    </button>
                  </li>
                </ul>
              </li>
              <button
                onClick={() =>
                  handleChangeParam("contact", setParamURL, setParamId)
                }
                className="block text-gray-300 py-2 hover:bg-blue-800 w-full"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
