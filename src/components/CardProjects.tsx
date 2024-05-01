import React from "react";

const CardProjects: React.FC = () => {
  return (
    <div className="w-10/12 overflow-hidden flex-shrink-0 flex h-[400px] bg-white shadow-lg rounded-lg">
      <div className="w-6/12 relative flex items-center justify-center">
        <img
          className="h-[350px] w-[350px] rounded-full object-cover z-10 border-[5px] border-[#04BFF6]"
          src="https://agua.org.mx/wp-content/uploads/2016/04/16-04-12%20retos%20del%20agua%20y%20senamiento.jpg"
          alt=""
        />
 
        <span className="absolute top-[50%] translate-y-[-50%] w-full left-40 h-[5px] bg-[#04BFF6]"></span>
      </div>
      <div className="w-6/12 flex flex-col gap-2 relative bg-[#04BFF6] p-2 pt-10">
        <div className="absolute right-[50px] top-0 w-full h-full bg-[#04BFF6] -skew-x-12"></div>
        <span className="text-white z-10 font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto{" "}
        </span>
        <span className="text-white font-light z-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rerum
          cumque obcaecati libero, voluptatum, voluptatibus quae dolores nobis,
          tempore necessitatibus corrupti unde omnis tenetur fuga quod pariatur
          quaerat sint ad. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Et fugiat corrupti illum! Maxime mollitia ratione corrupti
          aperiam? Quis, fugiat, maxime dicta nostrum exercitationem officiis
          aliquam reprehenderit dolor amet laborum ea!
        </span>
        <span className="text-white font-light z-10">
          1 de mayo del 2024
        </span>
        <div className="text-right z-10 my-auto">
        <button className="border hover:bg-black/10 text-white w-fit px-2 py-1 rounded-md">ver proyecto</button>
        </div>
      </div>
    </div>
  );
};

export default CardProjects;
