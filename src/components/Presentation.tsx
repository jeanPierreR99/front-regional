import React from "react";
// import preOne from "../assets/image-4.jpeg";
import preTwo from "../assets/image-1.jpeg";
const Presentation: React.FC = () => {
  return (
    <div className=" flex cont-img-presentation md:flex-row flex-col gap-14 overflow-hidden relative px-2 py-12 md:px-4 lg:px-16">
      {/* <img
        className="absolute z-10 left-0 top-0 w-full h-full"
        src="https://i0.wp.com/vagamundosviajeros.com/wp-content/uploads/2016/08/puertomaldonado00302.jpg?ssl=1"
        alt=""
      /> */}
      <div className="absolute z-10 w-full h-full top-0 left-0 bg-[#041025]/90 "></div>
      <div className="w-full z-20 md:w-7/12 flex flex-col justify-center gap-4">
        <h5
          style={{ lineHeight: "1.2" }}
          className="text-2xl z-20 md:text-5xl merienda font-black text-gray-100"
        >
          Lo que hacemos
        </h5>
        <p className="text-md text-gray-300 font-light z-20">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
          necessitatibus quasi reiciendis perferendis ut tempore architecto
          pariatur? Provident aliquid, et rerum est odit accusamus alias,
          cupiditate ipsum itaque accusantium totam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Iure mollitia, veniam molestias tempore
          nostrum vel optio fuga nulla delectus adipisci harum, molestiae
          explicabo dolorum ad beatae possimus quidem quo quibusdam.
        </p>
        <ul className="list-none">
          <li className="mb-2 font-light text-gray-300 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
            MEJORAR LA PRESTACIÓN DE SERVICIOS DE SANEAMIENTO RURAL
          </li>
          <li className="mb-2 font-light text-gray-300 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
          MEJORAR LA PRESTACIÓN DE SERVICIOS DE SANEAMIENTO RURAL
          </li>
          <li className="mb-2 font-light text-gray-300 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
          MEJORAR LA PRESTACIÓN DE SERVICIOS DE SANEAMIENTO RURAL
          </li>
          <li className="mb-2 font-light text-gray-300 relative ml-4 before:w-[10px] before:h-[10px] before:absolute before:bg-red-600 before:top-[50%] before:left-[-15px] before:translate-y-[-50%]">
          MEJORAR LA PRESTACIÓN DE SERVICIOS DE SANEAMIENTO RURAL
          </li>
        </ul>
        <span className="text-gray-300 mt-5 font-light text-md relative ml-32  before:absolute  before:top-[50%] before:left-[-125px] before:text-8xl before:text-red-600 before:translate-y-[-50%] before:content-['10'] before:font-bold       after:absolute  after:top-[-40px] after:left-[-15px] after:text-5xl after:text-red-600 after:content-['+'] after:font-bold">Años llegando a tu hogar</span>
      </div>
      <div className="w-full z-20  h-[460px] md:w-5/12 relative">
        <img
          className="absolute object-cover  z-20 w-[240px] h-[240px] bottom-0 left-0 border-2 border-[#3183a9]"
          src="https://norteenlinea.com/media/k2/items/cache/80bb739c86fe521ed43709e93dbc77a6_XL.jpg"
          alt=""
        />
        <img
          className="absolute object-cover left-0 top-0 w-full h-[90%] border-2 border-[#3183a9]"
          src={preTwo}
          alt=""
        />
      </div>
    </div>
  );
};

export default Presentation;
