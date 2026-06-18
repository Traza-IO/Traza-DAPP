import { Link } from 'react-router-dom';
import { FaFacebookF, FaGlobe } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { t } from 'i18next';

export const ModalError = () => {
  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center z-[9]">
      <div className="relative z-[2] text-center bg-white p-5 rounded-lg">
        <h4 className="text-[20px]">Error </h4>
        <p className="text-[13px] px-5">GTIN not found</p>
      </div>
      <div className="bg-[#edeeed] absolute inset-0 w-full h-full opacity-[0.6]"></div>
    </div>
  );
};
