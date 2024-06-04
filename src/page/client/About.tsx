import React, { useEffect } from "react";
import Mision from "../../components/Mision";
import Logo from "../../components/Logo";
import Links from "../../components/Links";
import SocialMedia from "../../components/SocialMedia";
import HistoryLog from "../../components/HistoryLog";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section className="py-24 overflow-hidden px-2 md:px-4 lg:px-16">
      <div className="w-full pt-10">
        <h2 className="text-3xl px-2 text-gray-200 md:text-4xl font-bold mb-8">
          SOBRE NOSOTROS
        </h2>
        <Mision></Mision>
        <HistoryLog></HistoryLog>
      </div>
      <div className="mt-14">
        <Logo></Logo>
        <div className="md:mt-8 mt-2">
          <Links></Links>
        </div>
      </div>
      <SocialMedia></SocialMedia>
    </section>
  );
};

export default About;
