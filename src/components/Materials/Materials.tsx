'use client';

import { useTranslation } from 'react-i18next';
import imgBussiness from '../../assets/logo-mestiza.svg';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { IoCart } from 'react-icons/io5';
import { useQueryCall } from '@ic-reactor/react';

const Materials = () => {
  const { t, i18n } = useTranslation();
  const { data: data2, call: call2 } = useQueryCall({
    functionName: 'readModelId',
    args: ['M0000001'],
  });

  const { data: data1, call: call1 } = useQueryCall({
    functionName: 'readProductDpp',
    args: ['M0000001'],
  });

  const product = Array.isArray(data2) ? data2[0] : {};
  const product2 = Array.isArray(data2) ? data2[0] : {};

  return (
    <div className="flex items-start justify-between max-w-[1024px] mx-auto mt-4 px-4 w-full">
      <div className="max-md:text-center max-md:mb-4 w-full">
        <h4 className="font-bold text-[#5f6259] text-[15px] text-left dark:text-white">
          {t('product.materials')}
        </h4>
        <ul className="p-0 text-left">
          <li className="text-[11px] text-[#5f6259] dark:text-white max-w-[120px]">
            {product?.summary_materials}
          </li>
        </ul>
      </div>
      <div className="max-md:text-center max-md:mb-4 w-full">
        <h4 className="font-bold text-[#5f6259] text-[15px] uppercase dark:text-white">
          {product?.name_model}
        </h4>
        <ul>
          <li className="text-[14px] mt-3 text-[#5f6259] font-bold dark:text-white">
            {t('product.traceable')}
          </li>
        </ul>
      </div>
      <div className="max-md:text-center max-md:mb-4 w-full">
        <h4 className="font-bold text-[#5f6259] text-[15px] dark:text-white">
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
    </div>
  );
};

export default Materials;
