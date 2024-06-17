import React, { useEffect, useState } from "react";
import Inicio from "../page/client/Home";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { useParam } from "../context/Context.provider";
import Notice from "../page/client/Notice";
import axios from "axios";
import { useNotice } from "../context/Context.provider";
import About from "../page/client/About";
import Contact from "../page/client/Contact";
import ENDPOINTS from "../config";
import Login from "../page/client/Login";
import Multimedia from "../page/client/Multimedia";
import loading from "../assets/500.gif";
import Post from "../page/client/Post";
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
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchQuery = searchParams.get("search");
    setParamURL(searchQuery || "home");

    const fetchData = async () => {
      try {
        const response = await axios.get(ENDPOINTS.GET_NOTICE);
        if (response.data.response.status === 200) {
          setParamNotice(response.data.response.data);
          return;
        }
      } catch (error) {
        console.log("error");
      }
    };

    fetchData();

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
          <img src={loading} className="w-16 h-16 bg-[#04BDF3] rounded-full" alt="" />
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
