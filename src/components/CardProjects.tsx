import React from "react";

const CardProjects: React.FC = () => {
  return (
    <div className="w-full group/project overflow-hidden mt-6 flex-shrink-0 flex h-[500px] px-2 md:px-4 lg:px-16">
      <div className="w-6/12 relative flex items-center justify-center">
        <iframe
          className="z-10 w-[400px] h-[400px] rounded-xl border-4  border-[#081d3d]"
          src="https://www.youtube.com/embed/-Nojl0TZ3P8?si=8IManOh4rm5LAWwF"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <span className="absolute top-[50%] translate-y-[-50%] w-full left-60 h-[5px] bg-[#081d3d]"></span>
      </div>
      <div className="w-6/12 flex flex-col gap-2 relative bg-[#081d3d] p-2 pt-10">
        <div className="absolute group-hover/project:w-[2000px] transition-all duration-700 right-[60px] top-0 w-full h-full bg-[#081d3d] -skew-x-12"></div>
        <span className="text-white z-10 font-bold pr-12 text-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto{" "}
        </span>
        <span className="text-white font-light z-10 pr-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rerum
          cumque obcaecati libero, voluptatum, voluptatibus quae dolores nobis,
          tempore necessitatibus corrupti unde omnis tenetur fuga quod pariatur
          quaerat sint ad. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Et fugiat corrupti illum! Maxime mollitia ratione corrupti
          aperiam? Quis, fugiat, maxime dicta nostrum exercitationem officiis
          aliquam reprehenderit dolor amet laborum ea! Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Nostrum tenetur iure eveniet
          quidem. Cumque quisquam delectus nobis? Aut alias fugiat doloribus,
          nulla quia sint consectetur nostrum iusto ea ad veritatis?
        </span>
        <span className="text-white/60 font-light z-10">1 de mayo del 2024</span>
        <div className="text-right z-10 my-auto pr-12">
          <button className="border hover:bg-black/30 text-white w-fit px-2 py-1 rounded-md">
            ver proyecto
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProjects;
