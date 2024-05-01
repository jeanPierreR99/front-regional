import React, { useState } from "react";
import { useParam } from "../context/Context.provider";
import logo from "../assets/logo-vivienda.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { paramURL, setParamURL } = useParam();

  const handleChangeParam = (newParam: string) => {
    setParamURL(newParam);
    console.log(newParam);
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.delete("id")
    newSearchParams.set("search", newParam);
    const newUrl = `?${newSearchParams.toString()}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={
        paramURL == "inicio"
          ? "relative sm:absolute font-light top-0  z-[300] w-full bg-blue-700 md:bg-transparent"
          : "relative font-light top-0 z-[300] w-full bg-blue-700"
      }
    >
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        <div className="flex items-center bg-white">
          <img className="h-16 w-full" src={logo} alt="" />
        </div>
        <nav className="hidden md:flex">
          <button
            onClick={() => handleChangeParam("inicio")}
            className="block text-white py-2 px-4 hover:border-b"
          >
            Inicio
          </button>
          <button
            onClick={() => handleChangeParam("about")}
            className="block text-white py-2 px-4 hover:border-b"
          >
            Sobre nosotros
          </button>
          <button
            onClick={() => handleChangeParam("notice")}
            className="block text-white py-2 px-4 hover:border-b"
          >
            Noticias
          </button>
          <button
            onClick={() => handleChangeParam("service")}
            className="block text-white py-2 px-4 hover:border-b"
          >
            Servicios
          </button>
          <button
            onClick={() => handleChangeParam("contact")}
            className="block text-white py-2 px-4 hover:border-b"
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
          <div className="md:hidden z-[999] absolute top-20 left-0 right-0 bg-blue-700">
            <div className="container mx-auto py-2 px-4">
              <button
                onClick={() => handleChangeParam("inicio")}
                className="block text-gray-300 py-2"
              >
                Inicio
              </button>
              <button
                onClick={() => handleChangeParam("about")}
                className="block text-gray-300 py-2"
              >
                Acerca de
              </button>
              <button
                onClick={() => handleChangeParam("notice")}
                className="block text-gray-300 py-2"
              >
                notice
              </button>
              <button
                onClick={() => handleChangeParam("contact")}
                className="block text-gray-300 py-2"
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
