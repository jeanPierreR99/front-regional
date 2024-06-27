import React, { useEffect } from "react";
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
import { HandlePage } from "../functions";

export interface DataNotice {
  id: string;
  title: string;
  files: string;
  content: string;
  create_at: string;
  date_published: string;
}

const pageMap = {
  home: Inicio,
  notice: Notice,
  about: About,
  multimedia: Multimedia,
  post: Post,
  contact: Contact,
  login: Login,
};

const allowPages = [
  "home",
  "notice",
  "about",
  "multimedia",
  "post",
  "contact",
  "login",
];

type PageMapKeys = keyof typeof pageMap;

const RouteDefault: React.FC = () => {
  const { paramURL, setParamURL } = useParam();
  const { setParamNotice } = useNotice();
  const { setParamPost } = usePost();
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
    <div className="bg-white w-full">
      <Header />
      <HandlePage page={pageKey} pageMap={pageMap}></HandlePage>
      <Footer></Footer>
    </div>

    
  );
};

export default RouteDefault;
