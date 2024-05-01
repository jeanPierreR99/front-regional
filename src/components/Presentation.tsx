import React from "react";

const Presentation: React.FC = () => {
  return (
    <div className="md:flex md:h-[540px] gap-4 overflow-hidden">
      <div className="w-full md:w-7/12 flex flex-col justify-center gap-4">
        <h5 style={{ lineHeight: "1.2" }} className="text-2xl md:text-5xl merienda font-black text-[#11BEF8]">
          DIRECCIÓN REGIONAL DE VIVIENDA, CONSTRUCCIÓN Y SANEAMIENTO
        </h5>
        <p className="text-md text-gray-500 font-light ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
          necessitatibus quasi reiciendis perferendis ut tempore architecto
          pariatur? Provident aliquid, et rerum est odit accusamus alias,
          cupiditate ipsum itaque accusantium totam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Iure mollitia, veniam molestias tempore
          nostrum vel optio fuga nulla delectus adipisci harum, molestiae
          explicabo dolorum ad beatae possimus quidem quo quibusdam.
        </p>
        <span className="text-md merienda text-white font-bold bg-[#11BEF8] w-fit py-1 px-2 rounded-lg">
          Agua colorada, Salud para todos
        </span>
      </div>
      <div className="w-full md:h-[540px] h-[460px] md:w-5/12 relative">
        <img
          className="md:w-[300px] border-4 border-[#11BEF8] w-[260px] h-[300px] shadow-xl md:h-[370px]  absolute top-32 left-0 md:left-6 rounded-md z-10 object-cover"
          src="https://scontent.faqp2-2.fna.fbcdn.net/v/t31.18172-8/14500368_1745064772424258_3132535929541907353_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gkwh6dEOzUQQ7kNvgGWOOZb&_nc_ht=scontent.faqp2-2.fna&oh=00_AfAG116byb29AzcdtW4Hb-Cjb6AOuoqTz1jJgyf23WiVgA&oe=6651EF1E"
          alt=""
        />
        <img
          className="md:w-[300px]  border-4 border-[#11BEF8] w-[260px] h-[300px] shadow-xl md:h-[370px]  absolute top-6 left-36 md:left-40 rounded-md object-cover"
          src="https://cdn.www.gob.pe/uploads/document/file/2148734/standard_WhatsApp%20Image%202021-09-01%20at%204.52.01%20PM.jpeg.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Presentation;
