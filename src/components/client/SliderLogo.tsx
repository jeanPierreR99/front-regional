import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define tus logos en un array
const logos = [
  "https://regionmadrededios.gob.pe/visitas/logo-aa.png",
  "https://www.sedamhuancayo.com.pe/wp-content/uploads/2021/09/b3_anepssa.png",
  "https://regionmadrededios.gob.pe/visitas/logo-aa.png",
  "https://www.dramdd.gob.pe/wp-content/uploads/2018/07/logo-mobile2-w.png",
  "https://siar.minam.gob.pe/madrededios/wp-content/uploads/2022/02/logo-SIAR_1.png",
  "https://www.dramdd.gob.pe/wp-content/uploads/2018/07/logo-mobile2-w.png",
];

const SliderLogo = () => {
  // Configuración del slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-4">
      <Slider {...settings} className="slick-slider">
        {logos.map((logo, index) => (
          <div key={index} className="px-4"> {/* Añadir px-2 para espacio entre logos */}
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderLogo;
