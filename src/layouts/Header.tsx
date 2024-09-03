import React, { useEffect, useState } from "react";
import { useParam, useParamId } from "../context/Context.provider";
import { handleChangeParam } from "../functions";
import SocialMedia from "../components/client/SocialMedia";
import LogoVivienda from "../assets/img-main/LOGOS_DRVCS_2024_02.png";
import LogoGoremad from "../assets/img-main/LOGO_GOREMAD_2023_01.png";
import { useSearchParams } from "react-router-dom";
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { paramURL, setParamURL } = useParam();
  const { setParamId } = useParamId();
  const [searchParams, setSearchParams] = useSearchParams();


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setScrolled(true); 
    } else { 
      setScrolled(false);  
    }

    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, []);


  return (
    <header
      className={
        paramURL == "login"
          ? "hidden"
          : "sticky top-0  z-[10] bg-white shadow-lg"
      }
    >
      <div
        className={`${
          scrolled&& "md:"
        } px-2 md:px-10 grid grid-cols-2 gap-4 md:grid-cols-3 h-20 md:h-36 items-center`}
      >
        <div className="md:col-span-1 hidden md:block">
          <img src={LogoGoremad} alt="" className="w-full h-20 md:h-36" />
        </div>
        <div className="md:pr-8 col-span-2 md:col-span-1 py-0">
          <img src={LogoVivienda} alt="" className="w-full h-20 md:h-28" />
        </div>
        <div className="md:col-span-1 my-auto hidden md:block">
          <div
            className={`hidden md:flex items-center gap-6 ${
              isSearchOpen ? "flex-col" : "flex-row"
            }`}
          >
            <div
              className={`relative flex items-center transition-all duration-300 ease-in-out ${
                isSearchOpen ? "w-full" : "w-0"
              }`}
            >
              <input
                type="text"
                placeholder="Buscar..."
                className={`p-2 pl-8 text-gray-900 bg-white outline-none border border-gray-300 rounded-full shadow-sm  focus:border-red-500 transition-all duration-300 ease-in-out ${
                  isSearchOpen ? "w-full" : "w-0"
                }`}
              />
              <button
                onClick={toggleSearch}
                className="absolute left-0 p-3 text-gray-500 focus:outline-none"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Otros íconos */}
            <SocialMedia></SocialMedia>
          </div>
        </div>
      </div>
      <div className="">
        <nav className="hidden lg:block bg-red-600 px-28 text-sm">
          <div className="">
            <ul className="flex items-center justify-center">
              <li>
                <button
                  onClick={() =>
                    handleChangeParam("home", setParamURL, setParamId, setSearchParams)
                  }
                  className="flex items-center text-white hover:text-gray-300 hover:bg-red-700 py-4 px-4 gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                  </svg>
                  INICIO
                </button>
              </li>
              <li className="relative group/institucion">
                <a
                  href="#"
                  className="flex items-center text-white hover:text-gray-300 hover:bg-red-700 py-4 px-4 gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                    <path
                      fill-rule="evenodd"
                      d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z"
                      clip-rule="evenodd"
                    />
                    <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
                  </svg>
                  INSTITUCIÓM
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 text-white"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <ul className="absolute left-0 bg-red-600 hidden group-hover/institucion:block">
                  <li>
                    <a
                      href="#"
                      className="block text-white hover:text-gray-300 hover:bg-red-700 py-2 px-4"
                    >
                      MISION - VISION
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-white hover:text-gray-300 hover:bg-red-700 py-2 px-4"
                    >
                      HISTORIA
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-white hover:text-gray-300 hover:bg-red-700 py-2 px-4"
                    >
                      ORGANIGRAMA
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-white hover:text-gray-300 hover:bg-red-700 py-2 px-4"
                    >
                      LEYES
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-white hover:text-gray-300 hover:bg-red-700 py-2 px-4"
                    >
                      RESOLUCIONES
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-white hover:text-gray-300 hover:bg-red-700 py-4 px-4 gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25a.75.75 0 0 1 .75.75v.756a49.106 49.106 0 0 1 9.152 1 .75.75 0 0 1-.152 1.485h-1.918l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 18.75 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 0 1-.262 1.453h-8.37a.75.75 0 0 1-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 5.25 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84L4.168 6.241H2.25a.75.75 0 0 1-.152-1.485 49.105 49.105 0 0 1 9.152-1V3a.75.75 0 0 1 .75-.75Zm4.878 13.543 1.872-7.662 1.872 7.662h-3.744Zm-9.756 0L5.25 8.131l-1.872 7.662h3.744Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  MARCO LEGAL
                </a>
              </li>
              <li className="relative group/medios">
                <a
                  href="#"
                  className="flex items-center text-white hover:text-gray-300 hover:bg-red-700 py-4 px-4 gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                  </svg>
                  COMUNICACIONES
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <ul className="absolute left-0 bg-red-600 hidden group-hover/medios:block">
                  <li>
                    <button
                      onClick={() =>
                        handleChangeParam("multimedia", setParamURL, setParamId, setSearchParams)
                      }
                      className="text-left w-full text-white hover:text-gray-300 hover:bg-red-700 py-2 px-4"
                    >
                      MUTIMEDIA
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        handleChangeParam("post", setParamURL, setParamId, setSearchParams)
                      }
                      className="text-left w-full text-white hover:text-gray-300 hover:bg-red-700 py-2 px-4"
                    >
                      COMUNICADOS
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        handleChangeParam("notice", setParamURL, setParamId, setSearchParams)
                      }
                      className="text-left w-full text-white hover:text-gray-300 hover:bg-red-700 py-2 px-4"
                    >
                      NOTICIAS
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleChangeParam("contact", setParamURL, setParamId, setSearchParams)
                  }
                  className="flex items-center text-white hover:text-gray-300 hover:bg-red-700 py-4 px-4 gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                      clip-rule="evenodd"
                    />
                    <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                  </svg>
                  CONTÁCTENOS
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-white hover:text-gray-300 hover:bg-red-700 py-4 px-4 gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  TRANSPARENCIA
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 text-white"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="bg-red-600 px-6 py-4 lg:hidden shadow-lg relative">
          <div className="flex items-center justify-end">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <ul
            className={`${
              isMenuOpen ? "left-0" : "left-[-2000px]"
            } bg-red-700 w-10/12 absolute h-screen top-14 duration-500  md:hidden`}
          >
            <li className="hover:bg-red-600/80">
              <button
                onClick={() =>
                  handleChangeParam("home", setParamURL, setParamId, setSearchParams)
                }
                className="text-left w-full text-white px-3 py-2"
              >
                INICIO
              </button>
            </li>
            <li>
              <a href="#" className="block px-3 py-2 text-yellow-400">
                INSTITUCIÓN
              </a>
              <ul className="pl-4">
                <li className="hover:bg-red-600/80">
                  <a href="#" className="block text-white px-3 py-2">
                    MISIÓN - VISIÓN
                  </a>
                </li>
                <li className="hover:bg-red-600/80">
                  <a href="#" className="block text-white px-3 py-2">
                    HISTORIA
                  </a>
                </li>
                <li className="hover:bg-red-600/80">
                  <a href="#" className="block text-white px-3 py-2">
                    ORGANIGRAMA
                  </a>
                </li>
                <li className="hover:bg-red-600/80">
                  <a href="#" className="block text-white px-3 py-2">
                    LEYES
                  </a>
                </li>
                <li className="hover:bg-red-600/80">
                  <a href="#" className="block text-white px-3 py-2">
                    RESOLUCIONES
                  </a>
                </li>
              </ul>
            </li>
            <li className="hover:bg-red-600/80">
              <a href="#" className="block text-white px-3 py-2">
                MARCO LEGAL
              </a>
            </li>
            <li>
              <a href="#" className="block px-3 py-2 text-yellow-400">
                COMUNICACIONES
              </a>
              <ul className="pl-4">
                <li className="hover:bg-red-600/80">
                  <button
                    className="text-left w-full text-white px-3 py-2"
                    onClick={() =>
                      handleChangeParam("multimedia", setParamURL, setParamId, setSearchParams)
                    }
                  >
                    MULTIMEDIA
                  </button>
                </li>
                <li className="hover:bg-red-600/80">
                  <button
                    onClick={() =>
                      handleChangeParam("post", setParamURL, setParamId, setSearchParams)
                    }
                    className="text-left w-full text-white px-3 py-2"
                  >
                    COMUNICADOS
                  </button>
                </li>
                <li className="hover:bg-red-600/80">
                  <button
                    onClick={() =>
                      handleChangeParam("notice", setParamURL, setParamId, setSearchParams)
                    }
                    className="text-left w-full text-white px-3 py-2"
                  >
                    NOTICIAS
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
