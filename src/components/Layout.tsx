import React, { useEffect, useState } from 'react';
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
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark');
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  return (
    <div className="flex flex-col min-h-screen dark:bg-black">
      <div className="flex w-full justify-between absolute z-20 top-0 left-0 right-0 p-4">
        <select
          defaultValue={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          className="rounded-[20px] pb-2 px-2 dark:bg-[#45483d] bg-[#ccc] dark:text-white"
        >
          {availableLanguages.map((language) => (
            <option key={language}>{language}</option>
          ))}
        </select>
        <div className="">
          <label className="toggle">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === 'dark'}
            />
            <span className="slider" />
          </label>
        </div>
      </div>
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
