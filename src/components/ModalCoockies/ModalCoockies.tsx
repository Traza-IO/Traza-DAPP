import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

export const ModalCoockies = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    const cookiesAccepted = Cookies.get('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);
  const handleAccept = () => {
    Cookies.set('cookiesAccepted', 'true', { expires: 1 });
    setShowBanner(false);
  };
  return showBanner ? (
    <div className="p-5 fixed bottom-3 rounded-[10px] bg-[#45483d] left-[2%] right-[2%] z-30 flex flex-col md:flex-row justify-center gap-4 items-center">
      <p className="text-white leading-[1.2]">{t('product.coockie_text')}</p>
      <button
        onClick={handleAccept}
        className="border-2 border-solid border-[#acb2a8] rounded-[5px] h-[38px] items-center text-white max-md:mt-3 min-w-[150px]"
      >
        {t('product.coockie_button')}
      </button>
    </div>
  ) : null;
};
