import Logo from '../../assets/logo-traza-w.png';
import Logo2 from '../../assets/logo-traza-b.png';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col items-center mt-8 mb-[90px]">
      <p className="text-[14px] mb-3 dark:text-white">
        {t('footer.description')}
      </p>
      <figure>
        <img
          src={Logo}
          width={200}
          alt="Mestiza"
          className="block dark:hidden"
        />
        <img
          src={Logo2}
          width={200}
          alt="Mestiza"
          className="hidden dark:block"
        />
      </figure>
    </div>
  );
};

export default Footer;
