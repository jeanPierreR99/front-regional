import vivienda from "../assets/vivienda.png";
import construccion from "../assets/construccion.png";
import saneamiento from "../assets/sameamiento.png";
import urbanismo from "../assets/urbanismo.png";
import fond from "../assets/image-1.jpeg";
const CircleArea = () => {
  return (
    <div className="flex items-center justify-center my-20">
      <div className="w-[500px] relative h-[500px] rounded-full ">
        <img
          src={vivienda}
          alt=""
          className="absolute w-24 h-24 right-[calc(100%-120px)] p-2 top-10 bg-[#041025] z-10 rounded-full"
        />
        <img
          src={construccion}
          alt=""
          className="absolute w-24 h-24 left-[calc(100%-120px)] p-2 top-10 bg-[#041025] z-10 rounded-full"
        />
        <img
          src={saneamiento}
          alt=""
          className="absolute w-24 h-24 right-[calc(100%-120px)] p-2 bottom-10 bg-[#041025] z-10 rounded-full"
        />
        <img
          src={urbanismo}
          alt=""
          className="absolute w-24 h-24 left-[calc(100%-120px)] p-2 bottom-10 bg-[#041025] z-10 rounded-full"
        />
        <img
          src={fond}
          className="w-full h-full rounded-full object-cover"
          alt=""
        />
        <div className=" text-gray-300 text-right absolute w-[70%] right-full top-0">
          <h4 className=" text-gray-200 font-bold text-4xl">VIVIENDA</h4>
          <p className="font-light">
            La vivienda es esencial para el bienestar humano. Ofrece refugio,
            seguridad y un espacio para la vida familiar. La demanda de
            viviendas asequibles y sostenibles es un desafío creciente en las
            ciudades modernas.
          </p>
        </div>
        <div className=" text-gray-300 absolute w-[80%] left-full top-0">
          <h4 className=" text-gray-200 font-bold text-4xl">CONSTRUCCION</h4>
          <p className="font-light">
            La construcción impulsa el desarrollo, creando desde viviendas hasta
            grandes infraestructuras. Esta industria busca ser más eficiente y
            sostenible, adoptando nuevas tecnologías para reducir el impacto
            ambiental y mejorar la seguridad.
          </p>
        </div>
        <div className=" text-gray-300 text-right absolute w-[70%] right-full bottom-0">
          <h4 className=" text-gray-200 font-bold text-4xl">SANEAMIENTO</h4>
          <p className="font-light">
            El saneamiento adecuado es vital para la salud pública. Gestiona el
            agua potable y el tratamiento de aguas residuales, previniendo
            enfermedades y protegiendo los recursos hídricos. Mejorar el
            saneamiento es crucial para un futuro saludable.
          </p>
        </div>
        <div className=" text-gray-300 absolute w-[70%] left-full bottom-0">
          <h4 className=" text-gray-200 font-bold text-4xl">URBANISMO</h4>
          <p className="font-light">
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
