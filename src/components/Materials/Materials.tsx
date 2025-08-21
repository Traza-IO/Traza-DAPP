'use client';

import { useTranslation } from 'react-i18next';
import imgBussiness from '../../assets/logo-mestiza.svg';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { IoCart } from 'react-icons/io5';
import { useQueryCall } from '@ic-reactor/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { backend } from '../../declarations/backend';
import { useTraceabilityStore } from '../../store/useTraceabilityStore';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useSearchParams } from 'react-router-dom';

const Materials = () => {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  // const gtin = searchParams.get('GTIN');
  const gtin = '17751234567890';
  const { data, isLoading, fetchData } = useTraceabilityStore();
  const loading = isLoading;

  useEffect(() => {
    if (gtin) {
      fetchData(gtin);
    }
  }, [gtin]);
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await backend.getInfo('17751234567890');
  //       setMaterials(res[0]);
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="flex items-start justify-between max-w-[1024px] mx-auto mt-4 px-4 w-full">
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
          <div className="flex flex-col gap-2">
            <Skeleton count={1} height={20} width={100} />
            <Skeleton count={1} height={20} width={100} />
          </div>
        </div>
      ) : (
      <>
        <div className="max-md:text-center max-md:mb-4 w-full">
          <h4 className="font-bold text-[#5f6259] text-[15px] text-left dark:text-white">
            {t('product.materials')}
          </h4>
          <ul className="p-0 text-left">
            <li className="text-[11px] text-[#5f6259] dark:text-white max-w-[120px]">
              {data?.summary_materials}
            </li>
          </ul>
        </div>
        <div className="max-md:text-center max-md:mb-4 w-full">
          <h4 className="font-bold text-[#5f6259] text-[15px] uppercase dark:text-white">
            {data?.name_model}
          </h4>
          <ul>
            <li className="text-[14px] mt-3 text-[#5f6259] font-bold dark:text-white">
              {t('product.traceable')}
            </li>
          </ul>
        </div>
        <div className="max-md:text-center max-md:mb-4 w-full">
          <h4 className="font-bold text-[#5f6259] text-[15px] dark:text-white text-center">
            {t('product.company')}
          </h4>
          <figure>
            <img
              src={imgBussiness}
              width={100}
              alt={imgBussiness}
              className="block mx-auto"
            />
          </figure>
          <div className="w-full flex justify-between max-w-[90px] mx-auto mt-2">
            <button>
              <FaFacebookSquare color="#acb2a8" size={18} />
            </button>
            <button>
              <FaInstagram color="#acb2a8" size={18} />
            </button>
            <button>
              <FaWhatsapp color="#acb2a8" size={18} />
            </button>
            <button>
              <IoCart color="#acb2a8" size={18} />
            </button>
          </div>
        </div>
      </>
      )}
    </div>
  );
};

export default Materials;
