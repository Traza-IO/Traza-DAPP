import 'swiper/css';
import carousel1 from '../../assets/b1.png';
import carousel2 from '../../assets/b2.png';
import carousel3 from '../../assets/b3.png';
import carousel4 from '../../assets/b4.png';
import bgCarousel from '../../assets/fd-black.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTraceabilityStore } from '../../store/useTraceabilityStore';
import Slider from 'react-slick';
import { IoConstructOutline } from 'react-icons/io5';
import { createActor } from '../../declarations/backend';
import { useState, useEffect, SetStateAction} from 'react';



const SliderProduct = () => {
  const canisterId = process.env.CANISTER_ID_BACKEND || 'uxrrr-q7777-77774-qaaaq-cai';
  const backend = createActor(canisterId);
  const [carousel1, setCarousel1] = useState('');
  const [carousel2, setCarousel2] = useState('');
  const [carousel3, setCarousel3] = useState('');
  const [carousel4, setCarousel4] = useState('');

  const [inputName, setInputName] = useState('');
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    // This runs once when component mounts (similar to onload)
    const fetchImage = async (name: string,component: { (value: SetStateAction<string>): void; (arg0: string): void; }) => {
      const bytes = await backend.getImage(name);
      if (!bytes || !Array.isArray(bytes) || bytes.length === 0) return;
      const blob = new Blob([new Uint8Array(bytes[0])], { type: 'image/jpeg' });
      component(URL.createObjectURL(blob));
    };
    fetchImage("b1.png",setCarousel1);
    fetchImage("b2.png",setCarousel2);
    fetchImage("b3.png",setCarousel3);
    fetchImage("b4.png",setCarousel4);
  }, []); // Empty dependency array = runs once on mount

  console.log('backend imported:', backend);
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

  return (
    <div
      style={{ backgroundImage: `url(${bgCarousel})` }}
      className="bg-cover w-full bg-fixed bg-center bg-no-repeat py-8 max-w-[1024px] mx-auto overflow-hidden"
    >
      <Slider {...settings} className="p-4 bg-gray-100 rounded-lg shadow-lg">
        <div className="">
         {carousel1 && <img src={carousel1}  width={200}
            height={300}
            className="mx-auto"/>}
        </div>
        <div className="">
         {carousel2 && <img src={carousel2}  width={200}
            height={300}
            className="mx-auto"/>}
        </div>
        <div className="">
         {carousel3 && <img src={carousel3}  width={200}
            height={300}
            className="mx-auto"/>}
        </div>
        <div className="">
         {carousel4 && <img src={carousel4}  width={200}
            height={300}
            className="mx-auto"/>}
        </div>
      </Slider>
    </div>
  );
};

export default SliderProduct;
