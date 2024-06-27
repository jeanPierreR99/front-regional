import React from "react";

const itemsProyects = [
  {
    title: `Gobierno Regional de Madre de Dios gestiona entrega de agua en zonas
          rurales de Inambari y Tambopata`,
    url: "https://www.youtube.com/embed/-Nojl0TZ3P8?si=8IManOh4rm5LAWwF",
  },
  {
    title: `Gobierno Regional de Madre de Dios gestiona entrega de agua en zonas
          rurales de Inambari y Tambopata`,
    url: "https://www.youtube.com/embed/zvZuTSTDp50?si=dNTCAtDkuO2ACy-_",
  },
  {
    title: `Gobierno Regional de Madre de Dios gestiona entrega de agua en zonas
          rurales de Inambari y Tambopata`,
    url: "https://www.youtube.com/embed/wWnvjlezl24?si=La9cB0hl2efcWPuN",
  },
];
const CardProjects: React.FC = () => {
  return (
    <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-14 md:gap-4 mx-4 z-10">
      {itemsProyects.map((data, index) => (
        <div
          key={index}
          className="h-[350px] w-full gap-10 text-center flex flex-col text-gray-800 font-bold"
        >
          {data.title}
          <iframe
            className="w-full  h-full"
            src={data.url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default CardProjects;
