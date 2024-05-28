import React, { useEffect } from "react";
import Mision from "../../components/Mision";
import aboutOne from "../../assets/about-1.png";
import aboutTwo from "../../assets/about-2.png";
import Logo from "../../components/Logo";
import Links from "../../components/Links";
import SocialMedia from "../../components/SocialMedia";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section className="pt-24 overflow-hidden px-2 md:px-4 lg:px-16">
      <div className="w-full pt-10">
        <h2 className="text-3xl text-gray-200 md:text-4xl font-bold mb-8">
          SOBRE NOSOTROS
        </h2>
        <Mision></Mision>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2 w-full">
            <img
              src={aboutTwo}
              alt="Sobre Nosotros"
              className="w-full h-full mix-blend-multiply"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <span className="text-2xl md:text-4xl font-bold text-gray-300">HISTORIA</span>
            <p className=" text-gray-300 font-light mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <span className="text-2xl md:text-4xl font-bold text-gray-300">
              COMPROMISO
            </span>
            <li className="text-gray-300 font-light">
              MEJORAR LA PRESTACIÓN DE SERVICIOS DE SANEAMIENTO RURAL{" "}
            </li>
            <li className="text-gray-300 font-light">
              MEJORAR LA PRESTACIÓN DE SERVICIOS DE SANEAMIENTO RURAL{" "}
            </li>
            <li className="text-gray-300 font-light">
              MEJORAR LA PRESTACIÓN DE SERVICIOS DE SANEAMIENTO RURAL{" "}
            </li>
            <li className="text-gray-300 font-light">
              MEJORAR LA PRESTACIÓN DE SERVICIOS DE SANEAMIENTO RURAL{" "}
            </li>
            <li className="text-gray-300 font-light">
              MEJORAR LA PRESTACIÓN DE SERVICIOS DE SANEAMIENTO RURAL{" "}
            </li>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2 w-full md:order-1">
            <img
              src={aboutOne}
              alt="Sobre Nosotros"
              className="w-full h-full mix-blend-multiply"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <span className="text-2xl md:text-4xl font-bold text-gray-300">
              LOGROS Y RECONOCIMIENTOS
            </span>
            <p className=" text-gray-300 font-light mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <li className="text-gray-300 font-light ">
              <strong>Logro 1:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Illum accusantium fuga rem eius corrupti officiis perspiciatis ut
              velit iure pariatur. Quia ratione ullam nisi soluta quam earum
              eaque, harum dolores.
            </li>
            <li className="text-gray-300 font-light ">
              <strong>Logro 2:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Illum accusantium fuga rem eius corrupti officiis perspiciatis ut
              velit iure pariatur. Quia ratione ullam nisi soluta quam earum
              eaque, harum dolores.
            </li>
            <li className="text-gray-300 font-light ">
              <strong>Logro 3:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Illum accusantium fuga rem eius corrupti officiis perspiciatis ut
              velit iure pariatur. Quia ratione ullam nisi soluta quam earum
              eaque, harum dolores.
            </li>
            <li className="text-gray-300 font-light ">
              <strong>Reconocimiento 1:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Illum accusantium fuga rem eius corrupti officiis perspiciatis ut
              velit iure pariatur. Quia ratione ullam nisi soluta quam earum
              eaque, harum dolores.
            </li>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <Logo></Logo>
        <div className="py-6">
          <Links></Links>
        </div>
      </div>
      <SocialMedia></SocialMedia>
    </section>
  );
};

export default About;
