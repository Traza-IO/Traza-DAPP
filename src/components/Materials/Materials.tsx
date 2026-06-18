'use client';

import { useTranslation } from 'react-i18next';
 import imgBussiness from '../../assets/logo-qapary.png';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { IoCart } from 'react-icons/io5';
import { SetStateAction, useEffect, useState, useRef } from 'react';
import { useTraceabilityStore } from '../../store/useTraceabilityStore';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';
import { createActor } from '../../declarations/backend';

const Materials = () => {
  const { t } = useTranslation();
  const { data, isLoading, fetchData } = useTraceabilityStore();
  const canisterId = process.env.CANISTER_ID_BACKEND || 'uxrrr-q7777-77774-qaaaq-cai';
  const backend = createActor(canisterId);
  const loading = isLoading;
  const [logoMestiza, setLogoMestiza] = useState<string>('');
  const logoUrlRef = useRef<string>('');
  
  useEffect(() => {
    if (!data) {
      fetchData();
    }
  }, [data, fetchData]);
  
  useEffect(() => {
    const fetchImage = async (name: string, component: { (value: SetStateAction<string>): void; (arg0: string): void; }) => {
      const bytes = await backend.getImage(name);
      if (!bytes || !Array.isArray(bytes) || bytes.length === 0) return;
      const blob = new Blob([new Uint8Array(bytes[0])], { type: 'image/jpeg' });
      const imageUrl = URL.createObjectURL(blob);
      
      // Revoke previous URL if it exists
      if (logoUrlRef.current) {
        URL.revokeObjectURL(logoUrlRef.current);
      }
      
      logoUrlRef.current = imageUrl;
      component(imageUrl);
    };
    
    if (data?.brand_information?.logo_mestiza) {
      fetchImage(data.brand_information.logo_mestiza, setLogoMestiza);
    }
    
    // Cleanup: revoke object URL when component unmounts or data changes
    return () => {
      if (logoUrlRef.current) {
        URL.revokeObjectURL(logoUrlRef.current);
        logoUrlRef.current = '';
      }
    };
  }, [data]);

  return (
    <div className="flex flex-col-reverse items-start justify-between max-w-[1024px] mx-auto mt-4 px-4 w-full">
      {loading ? (
        <div className="flex gap-3 w-full justify-between">
          <div className="flex flex-col gap-2">
            <Skeleton count={1} height={20} width={100} />
            <Skeleton count={1} height={20} width={100} />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton count={1} height={20} width={100} />
            <Skeleton count={1} height={20} width={100} />
          </div>
        </div>
      ) : (
        <>
          {/* <div className="max-md:text-center max-md:mb-4 w-full">
            <h4 className="font-bold text-[#5f6259] text-[15px] text-left dark:text-white">
              {t('product.materials')}
            </h4>
            <ul className="p-0 text-left">
              <li className="text-[11px] text-[#5f6259] dark:text-white max-w-[120px]">
                {data?.summary_materials}
              </li>
            </ul>
          </div> */}
          <div className="max-md:text-center max-md:mb-4 w-full">
            <h4 className="font-normal text-[#5f6259] text-[15px] dark:text-white">
              {data?.name_model}
            </h4>
            <ul>
              <li className="text-[14px] text-[#5f6259] font-normal dark:text-white">
                {t('product.traceable')}
              </li>
            </ul>
          </div>
          <div className="max-md:text-center max-md:mb-4 w-full">
            {/* <h4 className="font-bold text-[#5f6259] text-[15px] dark:text-white text-center">
              {t('product.company')}
            </h4> */}
            <figure>
              {logoMestiza && (
                <img
                  src={logoMestiza}
                  width={100}
                  alt="Logo Mestiza"
                  className="block mx-auto"
                />
              )}
            </figure>
            <div className="w-full flex justify-between max-w-[90px] mx-auto mt-2">
              <Link to={data?.brand_information.facebook} target="_blank">
                <FaFacebookSquare color="#acb2a8" size={18} />
              </Link>
              <Link to={data?.brand_information.instagram} target="_blank">
                <FaInstagram color="#acb2a8" size={18} />
              </Link>
              <Link to={data?.brand_information.whatsapp} target="_blank">
                <FaWhatsapp color="#acb2a8" size={18} />
              </Link>
              <Link to={data?.brand_information.ecommerce} target="_blank">
                <IoCart color="#acb2a8" size={18} />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Materials;
