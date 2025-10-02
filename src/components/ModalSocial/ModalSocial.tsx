import { Link } from 'react-router-dom';
import { FaFacebookF, FaGlobe } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { t } from 'i18next';

export const ModalSocial = () => {
  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center z-[9]">
      <div className="relative z-[2] text-center">
        <h4 className="text-[20px]"> {t('product.title_social')} </h4>
        <p className="text-[13px] px-5">{t('product.description_social')}</p>
        <ul className="flex items-center flex-wrap w-full justify-center mt-10">
          <li className="mx-5 mb-3">
            <Link
              to="https://www.facebook.com/profile.php?id=61556000202561"
              target="_blank"
              className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shadow-md"
            >
              <FaFacebookF />
            </Link>
          </li>
          <li className="mx-5 mb-3">
            <Link
              to="https://www.instagram.com/trazasuite/"
              target="_blank"
              className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shadow-md"
            >
              <FaInstagram />
            </Link>
          </li>
          {/* <li className="mx-5 mb-3">
            <Link
              to="/"
              className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shadow-md"
            >
              <FaYoutube />
            </Link>
          </li> */}
          {/* icon web */}
          <li className="mx-5 mb-3">
            <Link
              to="https://www.trazar.io/"
              target="_blank"
              className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shadow-md"
            >
              <FaGlobe />
            </Link>
          </li>
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
      </div>
      <div className="bg-[#edeeed] absolute inset-0 w-full h-full opacity-[0.6]"></div>
    </div>
  );
};
