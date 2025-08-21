
import "swiper/css";
import carousel1 from "../../assets/b1.png";
import carousel2 from "../../assets/b2.png";
import carousel3 from "../../assets/b3.png";
import carousel4 from "../../assets/b4.png";
import bgCarousel from "../../assets/fd-black.jpg";
import { backend } from '../../declarations/backend';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoConstructOutline } from "react-icons/io5";

const SliderProduct = () => {
  const settings = {
    dots: true, // Activa los puntos de navegación
    infinite: true, // Carrusel infinito
    speed: 500, // Velocidad de la transición en ms
    slidesToShow: 3, // Cantidad de slides visibles (desktop)
    slidesToScroll: 1, // Cantidad de slides que se desplazan por transición
    autoplay: true, // Activar autoplay
    autoplaySpeed: 20000000, // Velocidad del autoplay en ms
    responsive: [
      {
        breakpoint: 768, // Para pantallas menores a 768px
        settings: {
          slidesToShow: 1, // Mostrar 1 slide en mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  console.log(backend, 'backend');
  
  return (
    <div
      style={{ backgroundImage: `url(${bgCarousel})` }}
      className="bg-cover w-full bg-fixed bg-center bg-no-repeat py-8 max-w-[1024px] mx-auto overflow-hidden"
    >
      <Slider
        {...settings}
        className="p-4 bg-gray-100 rounded-lg shadow-lg"
      >
        <div className="">
          <img
            src={carousel1}
            width={200}
            height={300}
            alt="image1"
            className="mx-auto"
          />
        </div>
        <div className="">
          <img
            src={carousel2}
            width={200}
            height={300}
            alt="image2"
            className="mx-auto"
          />
        </div>
        <div className="">
          <img
            src={carousel3}
            width={200}
            height={300}
            alt="image3"
            className="mx-auto"
          />
        </div>
        <div className="">
          <img
            src={carousel4}
            width={200}
            height={300}
            alt="image4"
            className="mx-auto"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderProduct;
