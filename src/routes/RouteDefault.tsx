import React, { useEffect } from "react";
import Inicio from "../page/client/Inicio";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { useParam } from "../context/Context.provider";
import Notice from "../page/client/Notice";
import axios from "axios";
import { useNotice } from "../context/Context.provider";

export interface DataNotice {
  id: string;
  titulo: string;
  imagen: string;
  descripcion: string;
  fecha: string;
}

const RouteDefault: React.FC = () => {
  const { paramURL, setParamURL } = useParam();
  const { setParamNotice } = useNotice();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchQuery = searchParams.get("search");
    setParamURL(searchQuery || "inicio");

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/regional/server/?action=notice"
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
      setParamURL(searchQuery || "inicio");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="">
      <Header></Header>
      <div className="">
        {paramURL === "inicio" ? (
          <Inicio />
        ) : paramURL === "notice" ? (
          <Notice />
        ) : paramURL === "about" ? (
          <h1>SOBRE NOSOTROS</h1>
        ) : paramURL === "service" ? (
          <h1>SERVICIOS</h1>
        ) : paramURL === "contact" ? (
          <h1>CONTACTO</h1>
        ) : (
          <h1>NO EXISTE LA RUTA</h1>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RouteDefault;
