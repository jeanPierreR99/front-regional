import React, { useEffect } from "react";
import Mision from "../../components/Mision";
import Links from "../../components/Links";
import SocialMedia from "../../components/SocialMedia";
import HistoryLog from "../../components/HistoryLog";
import CircleArea from "../../components/CircleArea";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section className="pt-24 pb-6 overflow-hidden px-2 md:px-4 lg:px-16">
      <div className="w-full pt-10">
        <h2 className="text-3xl merienda px-2 text-gray-900 md:text-5xl font-black mb-8">
          Sobre Nosotros
        </h2>
        <CircleArea></CircleArea>
        <Mision></Mision>
        <HistoryLog></HistoryLog>
      </div>
      <div className="mt-14">
        <Links></Links>
      </div>
      <SocialMedia></SocialMedia>
    </section>
  );
};

export default About;
