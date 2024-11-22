import React from 'react';
import Navbar from './Nav';
import Footer from './Footer';
import Slider from './SliderProduct';
import Materials from './Materials';
import { ModalCoockies } from './ModalCoockies';
import { useTranslation } from 'react-i18next';
import { availableLanguages } from '../i18n';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col min-h-screen">
      <select
        defaultValue={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        {availableLanguages.map((language) => (
          <option key={language}>{language}</option>
        ))}
      </select>
      <Navbar />
      <Slider />
      <Materials />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ModalCoockies />
    </div>
  );
};

export default Layout;
