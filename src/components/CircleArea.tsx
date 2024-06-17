import vivienda from "../assets/vivienda.png";
import construccion from "../assets/construccion.png";
import saneamiento from "../assets/sameamiento.png";
import urbanismo from "../assets/urbanismo.png";
import fond from "../assets/image-1.jpeg";
const CircleArea = () => {
  return (
    <div className="flex flex-col items-center justify-center my-28">
      <div className="w-[500px] relative md:h-[500px] h-[900px] rounded-full ">
        <img
          src={vivienda}
          alt=""
          className="absolute w-24 h-24 right-14 md:right-[calc(100%-120px)] p-2 top-12 bg-white z-10 rounded-full"
        />
        <img
          src={construccion}
          alt=""
          className="absolute w-24 h-24 left-14 md:left-[calc(100%-120px)] p-2 md:top-10 top-[270px] bg-white z-10 rounded-full"
        />
        <img
          src={saneamiento}
          alt=""
          className="absolute w-24 h-24 right-14 md:right-[calc(100%-120px)] p-2 bottom-[250px] md:bottom-10 bg-white z-10 rounded-full"
        />
        <img
          src={urbanismo}
          alt=""
          className="absolute w-24 h-24 md:left-[calc(100%-120px)] left-11 p-2 -bottom-8 md:bottom-10 bg-white z-10 rounded-full"
        />
        <img
          src={fond}
          className="w-full hidden md:block h-full rounded-full object-cover"
          alt=""
        />
        <div className=" text-gray-500 md:text-right text-right absolute right-40 w-[60%] md:w-[70%] md:right-full top-0">
          <h4 className=" text-[#0306A9] font-bold text-xl relative after:absolute after:left-20 after:bottom-6 after:content-['01'] after:text-[#0306A9] after:text-7xl leading-relaxed">Vivienda</h4>
          <p className="">
            La vivienda es esencial para el bienestar humano. Ofrece refugio,
            seguridad y un espacio para la vida familiar. La demanda de
            viviendas asequibles y sostenibles es un desafío creciente en las
            ciudades modernas.
          </p>
        </div>
        <div className=" text-gray-500 absolute w-[60%] md:w-[70%] left-40 md:left-full top-60 md:top-0">
          <h4 className="text-[#0306A9] font-bold text-xl relative after:absolute after:right-20 after:bottom-6 after:content-['02'] after:text-[#0306A9] after:text-7xl leading-relaxed">Construcción</h4>
          <p className="">
            La construcción impulsa el desarrollo, creando desde viviendas hasta
            grandes infraestructuras. Esta industria busca ser más eficiente y
            sostenible, adoptando nuevas tecnologías para reducir el impacto
            ambiental y mejorar la seguridad.
          </p>
        </div>
        <div className=" text-gray-500 text-right absolute w-[60%] right-40 md:w-[70%] md:right-full md:bottom-0 bottom-[180px]">
          <h4 className="text-[#0306A9] font-bold text-xl relative after:absolute after:left-20 after:bottom-6 after:content-['03'] after:text-[#0306A9] after:text-7xl leading-relaxed">Saneamiento</h4>
          <p className="">
            El saneamiento adecuado es vital para la salud pública. Gestiona el
            agua potable y el tratamiento de aguas residuales, previniendo
            enfermedades y protegiendo los recursos hídricos. Mejorar el
            saneamiento es crucial para un futuro saludable.
          </p>
        </div>
        <div className=" text-gray-500 left-36 absolute w-[60%] md:w-[70%] md:left-full md:bottom-0 -bottom-24">
          <h4 className="text-[#0306A9] font-bold text-xl relative after:absolute after:right-20 after:bottom-6 after:content-['04'] after:text-[#0306A9] after:text-7xl leading-relaxed">Urbanismo</h4>
          <p className="">
            El urbanismo planifica y diseña ciudades funcionales y sostenibles.
            Considera viviendas, espacios públicos y transporte, promoviendo la
            inclusión y el bienestar. Con el crecimiento urbano, enfrenta el
            reto de gestionar el espacio eficientemente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CircleArea;
