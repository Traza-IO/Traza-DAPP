import { Link, useLocation } from 'react-router-dom';
import {
  FaInfoCircle,
  FaDashcube,
  FaInfinity,
  FaShareAlt,
  FaLeaf,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useGtinNavigation } from '../../hooks/useGtinNavigation';

const Nav = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { buildUrlWithGtin, gtin } = useGtinNavigation();
  const pathname = location.pathname;

  const isActive = (page: string) => pathname === `/${gtin}/${page}`;

  return (
    <nav className="fixed w-full bottom-0 left-0 right-0 bg-[#f5f5f4] shadow-lg z-10">
      <ul className="flex w-full">
        <li
          className={`flex-1 dark:text-white ${
            isActive('product')
              ? 'bg-[#797f75] dark:bg-5f6259 text-white'
              : 'text-[#5f6259] dark:bg-black'
          }`}
        >
          <Link to={buildUrlWithGtin('product')} className="py-3 block text-center">
            <FaInfoCircle className="mx-auto dark:text-white" size={24} />
            <span className="text-[10px]">{t('navigation.product')}</span>
          </Link>
        </li>
        <li
          className={`flex-1 dark:text-white ${
            isActive('traceability')
              ? 'bg-[#797f75] dark:bg-5f6259 text-white'
              : 'text-[#5f6259] dark:bg-black'
          }`}
        >
          <Link to={buildUrlWithGtin('traceability')} className="py-3 block text-center">
            <FaDashcube className="mx-auto dark:text-white" size={24} />
            <span className="text-[10px]">{t('navigation.Traceability')}</span>
          </Link>
        </li>
        <li
          className={`flex-1 dark:text-white ${
            isActive('sustainability')
              ? 'bg-[#797f75] dark:bg-5f6259 text-white'
              : 'text-[#5f6259] dark:bg-black'
          }`}
        >
          <Link
            to={buildUrlWithGtin('sustainability')}
            className="py-3 block text-center"
          >
            <FaLeaf className="mx-auto dark:text-white" size={24} />
            <span className="text-[10px]">
              {t('navigation.Sustainability')}
            </span>
          </Link>
        </li>
        <li
          className={`flex-1 dark:text-white ${
            isActive('blockchain')
              ? 'bg-[#797f75] dark:bg-5f6259 text-white'
              : 'text-[#5f6259] dark:bg-black'
          }`}
        >
          <Link to={buildUrlWithGtin('blockchain')} className="py-3 block text-center">
            <FaInfinity className="mx-auto dark:text-white" size={24} />
            <span className="text-[10px]">{t('navigation.Blockchain')}</span>
          </Link>
        </li>
        <li
          className={`flex-1 dark:text-white ${
            isActive('share')
              ? 'bg-[#797f75] dark:bg-5f6259 text-white'
              : 'text-[#5f6259] dark:bg-black'
          }`}
        >
          <Link to={buildUrlWithGtin('share')} className="py-3 block text-center">
            <FaShareAlt className="mx-auto dark:text-white" size={24} />
            <span className="text-[10px]">{t('navigation.Share')}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
