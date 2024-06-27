import React, { useEffect } from "react";
import {
  useLogin,
  useNotice,
  useParam,
  useParamId,
  usePost,
} from "../context/Context.provider";
import Home from "../page/admin/Home";
import NoticeAdmin from "../page/admin/NoticeAdmin";
import PostAdmin from "../page/admin/PostAdmin";
import ENDPOINTS from "../config";
import axios from "axios";
import MultimediaAdmin from "../page/admin/MultimediaAdmin";
import { HandlePage, handleChangeParam, handleData } from "../functions";
import loading from "../assets/img-icon/home.gif";
import SystemMetrics from "../page/admin/SystemMetrics";

const pageMap = {
  admin: Home,
  notice: NoticeAdmin,
  estadistica: SystemMetrics,
  post: PostAdmin,
  multimedia: MultimediaAdmin,
};

const allowPages = ["admin", "notice", "estadistica", "post", "multimedia"];

type PageMapKeys = keyof typeof pageMap;

const RouteAdmin: React.FC = () => {
  const { paramURL, setParamURL } = useParam();
  const { setParamId } = useParamId();
  const { logout } = useLogin();
  const { setParamNotice } = useNotice();
  const { setParamPost } = usePost();

  const sessionDestroy = () => {
    localStorage.clear();
    handleChangeParam("home", setParamURL, setParamId);
    logout();
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchQuery = searchParams.get("search");
    setParamURL(searchQuery || "admin");

    handleData(axios, ENDPOINTS.GET_NOTICE, setParamNotice);
    handleData(axios, ENDPOINTS.GET_POST, setParamPost);

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

  if (!allowPages.includes(paramURL)) {
    return (
      <div className="h-screen flex justify-center items-center">
        <img
          src={loading}
          className="w-16 h-16 bg-[#04BDF3] rounded-full"
          alt="loading"
        />
      </div>
    );
  }

  const pageKey = paramURL as PageMapKeys;

  return (
    <div className="">
      {paramURL && (
        <div>
          <div className="w-full px-4 h-[60px] bg-[#0306a9] flex items-center justify-between ">
            <span className="text-white text-xl">ADMINISTRADOR</span>
            <button
              onClick={sessionDestroy}
              className={`after:content-['Salir'] p-2 after:text-gray-700 after:bg-gray-200 after:absolute after:top-[50%] after:translate-y-[-50%] relative after:hidden after:right-10 hover:after:block after:p-1 after:rounded-md`}
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
          <div className="px-4 py-2 md:px-4 lg:px-16 mt-2">
            {paramURL != "admin" && (
              <div className="text-gray-500 text-sm py-4">
                <div>
                  <button
                    className="hover:text-gray-500/70"
                    onClick={() =>
                      handleChangeParam("admin", setParamURL, setParamId)
                    }
                  >
                    Admin
                  </button>
                  <span className="text-gray-400"> / {paramURL}</span>
                </div>
              </div>
            )}
            <HandlePage page={pageKey} pageMap={pageMap}></HandlePage>
          </div>
        </div>
      )}
    </div>
  );
};

export default RouteAdmin;
