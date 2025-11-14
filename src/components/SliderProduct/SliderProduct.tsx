import 'swiper/css';
import bgCarousel from '../../assets/fd-black.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTraceabilityStore } from '../../store/useTraceabilityStore';
import Slider from 'react-slick';
import { createActor } from '../../declarations/backend';
import { useState, useEffect, SetStateAction} from 'react';
import Skeleton from 'react-loading-skeleton';

const SliderProduct = () => {
  const canisterId = process.env.CANISTER_ID_BACKEND || 'uxrrr-q7777-77774-qaaaq-cai';
  const backend = createActor(canisterId);
  const [carousel1, setCarousel1] = useState('');
  const [carousel2, setCarousel2] = useState('');
  const [carousel3, setCarousel3] = useState('');
  const [carousel4, setCarousel4] = useState('');
  const { data, isLoading, fetchData } = useTraceabilityStore();
  useEffect(() => {
    if (!data) {
      fetchData();
    }
  }, [data, fetchData]);

  useEffect(() => {
    // This runs once when component mounts (similar to onload)
    const fetchImage = async (name: string,component: { (value: SetStateAction<string>): void; (arg0: string): void; }) => {
      const bytes = await backend.getImage(name);
      if (!bytes || !Array.isArray(bytes) || bytes.length === 0) return;
      const blob = new Blob([new Uint8Array(bytes[0])], { type: 'image/jpeg' });
      component(URL.createObjectURL(blob));
    };
    console.log(data, 'data initial');
    if (data) {
      fetchImage(data.photo_product.frontal,setCarousel1);
      fetchImage(data.photo_product.left,setCarousel2);
      fetchImage(data.photo_product.later,setCarousel3);
      fetchImage(data.photo_product.right,setCarousel4);
    }
  }, [ data ]); // Empty dependency array = runs once on mount

  const settings = {
    dots: true, // Activa los puntos de navegación
    infinite: true, // Carrusel infinito
    speed: 500, // Velocidad de la transición en ms
    slidesToShow: 3, // Cantidad de slides visibles (desktop)
    slidesToScroll: 1, // Cantidad de slides que se desplazan por transición
    autoplay: true, // Activar autoplay
    autoplaySpeed: 3000, // Velocidad del autoplay en ms
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
      {isLoading ? (
        <div className="flex flex gap-2 w-full">
          <Skeleton count={1} height={200} width={200} />
          <Skeleton count={1} height={200} width={200} />
          <Skeleton count={1} height={200} width={200} />
          <Skeleton count={1} height={200} width={200} />
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default SliderProduct;
