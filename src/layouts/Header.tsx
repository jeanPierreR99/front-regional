import React, { useEffect, useState } from "react";
import { useParam } from "../context/Context.provider";
import logo from "../assets/logo-vivienda.png";
import {handleChangeParam} from "../functions";
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { paramURL, setParamURL } = useParam();

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
          ? `fixed font-light top-0  z-[999] w-full bg-blue-900 ${scrolled? "bg-blue-900":"md:bg-transparent"}`
          :paramURL=="login"?"hidden": " fixed font-light top-0 z-[999] w-full bg-blue-900"
      }
    >
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        <div className="flex items-center bg-white">
          <img className="h-16 w-full" src={logo} alt="" />
        </div>
        <nav className="hidden md:flex">
          <button
            onClick={() => handleChangeParam("home", setParamURL)}
            className="hover:text-white/70 hover:border-white/50 block text-white py-2 px-4 hover:border-b"
          >
            Inicio
          </button>
          <button
            onClick={() => handleChangeParam("about", setParamURL)}
            className="hover:text-white/70 hover:border-white/50 block text-white py-2 px-4 hover:border-b"
          >
            Sobre nosotros
          </button>
          <button
            onClick={() => handleChangeParam("notice", setParamURL)}
            className="hover:text-white/70 hover:border-white/50 block text-white py-2 px-4 hover:border-b"
          >
            Noticias
          </button>
          <button
            onClick={() => handleChangeParam("multimedia", setParamURL)}
            className="hover:text-white/70 hover:border-white/50 block text-white py-2 px-4 hover:border-b"
          >
            Multimedia
          </button>
          <button
            onClick={() => handleChangeParam("contact", setParamURL)}
            className="hover:text-white/70 hover:border-white/50 block text-white py-2 px-4 hover:border-b"
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
          <div className="md:hidden z-[999] absolute top-20 left-0 right-0 bg-blue-900">
            <div className="container mx-auto">
              <button
                onClick={() => handleChangeParam("home", setParamURL)}
                className="block text-gray-300 py-2 hover:bg-blue-800 w-full"
              >
                Inicio
              </button>
              <button
                onClick={() => handleChangeParam("about", setParamURL)}
                className="block text-gray-300 py-2 hover:bg-blue-800 w-full"
              >
                Sobre Nosotros
              </button>
              <button
                onClick={() => handleChangeParam("notice", setParamURL)}
                className="block text-gray-300 py-2 hover:bg-blue-800 w-full"
              >
                Noticias
              </button>
              <button
                onClick={() => handleChangeParam("multimedia", setParamURL)}
                className="block text-gray-300 py-2 hover:bg-blue-800 w-full"
              >
                Multimedia
              </button>
              <button
                onClick={() => handleChangeParam("contact", setParamURL)}
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
