import React, { useEffect } from "react";
import { useLogin, useNotice, useParam } from "../context/Context.provider";
import Home from "../page/admin/Home";
import NoticeAdmin from "../page/admin/NoticeAdmin";
import ProjectAdmin from "../page/admin/ProjectAdmin";
import PATH_DOMAIN from "../config";
import axios from "axios";
import arrowLeft from "../assets/flecha-hacia-atras.png";
import MultimediaAdmin from "../page/admin/MultimediaAdmin";

const RouteAdmin: React.FC = () => {
  const { paramURL, setParamURL } = useParam();
  const { logout } = useLogin();
  const { setParamNotice } = useNotice();
  const sessionDestroy = () => {
    localStorage.clear();
    handleChangeParam("home");
    logout();
  };

  const handleChangeParam = (newParam: string) => {
    setParamURL(newParam);
    console.log(newParam);
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.delete("id");
    newSearchParams.set("search", newParam);
    const newUrl = `?${newSearchParams.toString()}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchQuery = searchParams.get("search");
    setParamURL(searchQuery || "admin");

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${PATH_DOMAIN}/regional/server/?action=obtener`
        );
        setParamNotice(response.data);
      } catch (error) {
        console.log("error");
      }
    };

    fetchData();

    const handlePopState = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const searchQuery = searchParams.get("search");
      setParamURL(searchQuery || "admin");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="bg-[#041025]">
      {paramURL && (
        <div>
          <div className="w-full h-[60px] bg-blue-800 flex items-center justify-between ">
            <div className="flex items-center">
              <button
                onClick={() => {
                  handleChangeParam("admin");
                }}
                className="rouned-full relative after:content-['volver'] after:text-gray-700 after:bg-gray-200 after:absolute after:top-[50%] after:translate-y-[-50%] after:left-12 after:hidden hover:after:block after:p-1 after:rounded-md text-gray-400 hover:text-black  w-10 h-10 ml-10 rounded-full"
              >
                <img src={arrowLeft} className="w-full h-full" alt="" />
              </button>
              <span className="text-white text-xl pl-4">ADMINISTRADOR</span>
            </div>
            <button
              onClick={sessionDestroy}
              className={`pr-4 after:content-['Salir'] p-2 after:text-gray-700 after:bg-gray-200 after:absolute after:top-[50%] after:translate-y-[-50%] relative after:hidden after:right-10 hover:after:block after:p-1 after:rounded-md`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                />
              </svg>
            </button>
          </div>
          <div className="px-2 py-2 md:px-4 lg:px-16 mt-2">
            {paramURL === "admin" ? (
              <Home />
            ) : paramURL === "notice" ? (
              <NoticeAdmin />
            ) : paramURL === "project" ? (
              <ProjectAdmin />
            ) : paramURL === "multimedia" ? (
              <MultimediaAdmin />
            ) : (
              <h1>NO EXISTE LA RUTA</h1>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RouteAdmin;
