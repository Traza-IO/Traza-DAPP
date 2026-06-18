import { Link } from 'react-router-dom';
import { FaFacebookF, FaGlobe } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { t } from 'i18next';
import { useTraceabilityStore } from '../../store/useTraceabilityStore';
import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

export const ModalSocial = () => {
  const { data, isLoading, fetchData } = useTraceabilityStore();
  useEffect(() => {
    if (!data) {
      fetchData();
    }
  }, [data, fetchData]);  
  return (
    <div className="">
      <div className="relative z-[2] text-center">
        <h4 className="text-[20px]"> {t('product.title_social')} </h4>
        <p className="text-[13px] px-5">{t('product.description_social')}</p>
        {
          isLoading ? (
            <div className="flex flex-col gap-2 w-full">
              <Skeleton count={1} height={20} width={100} />
              <Skeleton count={1} height={20} width={100} />
            </div>
          ) : (
            <ul className="flex items-center flex-wrap w-full justify-center mt-10">
              {
                data?.brand_information.facebook && (
                  <li className="mx-5 mb-3">
                    <Link
                      to={data?.brand_information.facebook}
                      target="_blank"
                      className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shadow-md"
                    >
                      <FaFacebookF />
                    </Link>
                  </li>
                )
              }
              {
                data?.brand_information.instagram && (
                  <li className="mx-5 mb-3">
                    <Link
                      to={data?.brand_information.instagram}
                      target="_blank"
                      className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shadow-md"
                    >
                      <FaInstagram />
                    </Link>
                  </li>
                )
              }
              {
                data?.brand_information.whatsapp && (
                  <li className="mx-5 mb-3">
                    <Link
                      to={data?.brand_information.whatsapp}
                      target="_blank"
                    >
                      <FaWhatsapp />
                    </Link>
                  </li>
                )
              }
              {
                data?.brand_information.ecommerce && (
                  <li className="mx-5 mb-3">
                    <Link
                      to={data?.brand_information.ecommerce}
                      target="_blank"
                      className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shadow-md"
                    >
                      <FaGlobe />
                    </Link>
                  </li>
                )
              }
              {/* <li className="mx-5 mb-3">
                <Link
                  to="/"
                  className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shadow-md"
                >
                  <FaWhatsapp />
                </Link>
              </li>
              <li className="mx-5 mb-3">
                <Link
                  to="/"
                  className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shadow-md"
                >
                  <BsTwitterX />
                </Link>
              </li> */}
            </ul>
          )
        }
        
      </div>
    </div>
  );
};
