import React, { useEffect, useState } from "react";
import Inicio from "../page/client/Home";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { useParam, usePost } from "../context/Context.provider";
import Notice from "../page/client/Notice";
import axios from "axios";
import { useNotice } from "../context/Context.provider";
import About from "../page/client/About";
import Contact from "../page/client/Contact";
import ENDPOINTS from "../config";
import Login from "../page/client/Login";
import Multimedia from "../page/client/Multimedia";
import loading from "../assets/img-icon/home.gif";
import Post from "../page/client/Post";
import { handleData } from "../functions";
export interface DataNotice {
  id: string;
  title: string;
  files: string;
  content: string;
  create_at: string;
  date_published: string;
}

const RouteDefault: React.FC = () => {
  const { paramURL, setParamURL } = useParam();
  const { setParamNotice } = useNotice();
  const { setParamPost } = usePost();
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchQuery = searchParams.get("search");
    setParamURL(searchQuery || "home");

    handleData(axios, ENDPOINTS.GET_NOTICE, setParamNotice);
    handleData(axios, ENDPOINTS.GET_POST, setParamPost);

    const handlePopState = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const searchQuery = searchParams.get("search");
      setParamURL(searchQuery || "home");
    };

    window.addEventListener("popstate", handlePopState);
    setTimeout(() => {
      setLoad(false);
    }, 1500);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="bg-white">
      {load && (
        <div className="h-screen flex justify-center items-center">
          <img
            src={loading}
            className="w-16 h-16 bg-[#04BDF3] rounded-full"
            alt=""
          />
        </div>
      )}
      {!load && (
        <div>
          <Header />
          <div className="">
            {paramURL === "home" ? (
              <Inicio />
            ) : paramURL === "notice" ? (
              <Notice />
            ) : paramURL === "about" ? (
              <About />
            ) : paramURL === "multimedia" ? (
              <Multimedia />
            ) : paramURL === "post" ? (
              <Post />
            ) : paramURL === "contact" ? (
              <Contact />
            ) : paramURL === "login" ? (
              <Login />
            ) : (
              <h1>NO EXISTE LA RUTA</h1>
            )}
          </div>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default RouteDefault;
