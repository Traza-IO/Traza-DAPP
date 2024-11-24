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
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
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
      <select
        defaultValue={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        {availableLanguages.map((language) => (
          <option key={language}>{language}</option>
        ))}
      </select>
      <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
        >
          Toggle Theme
        </button>
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
