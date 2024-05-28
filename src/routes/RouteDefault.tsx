import React, { useEffect } from "react";
import Inicio from "../page/client/Home";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { useParam } from "../context/Context.provider";
import Notice from "../page/client/Notice";
import axios from "axios";
import { useNotice } from "../context/Context.provider";
import About from "../page/client/About";
import Contact from "../page/client/Contact";
import PATH_DOMAIN from "../config";
import Login from "../page/client/Login";
import Multimedia from "../page/client/Multimedia";
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
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchQuery = searchParams.get("search");
    setParamURL(searchQuery || "home");

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
      setParamURL(searchQuery || "home");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="bg-[#041025]">
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
  );
};

export default RouteDefault;
