import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Nav';
import Footer from './Footer';
import Slider from './SliderProduct';
import Materials from './Materials';
import { ModalCoockies } from './ModalCoockies';
import { useTranslation } from 'react-i18next';
import { availableLanguages } from '../i18n';
import { useTraceabilityStore } from '../store/useTraceabilityStore';
import { useGtinNavigation } from '../hooks/useGtinNavigation';
import Home from '../pages/Home';
import { Traceability } from '../pages/Traceability';
import { Sustainability } from '../pages/Sustainability';
import Blockchain from '../pages/Blockchain';
import Share from '../pages/Share';

const Layout: React.FC = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { gtin } = useGtinNavigation();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const activeTab = useTraceabilityStore((s) => s.activeTab);
  const notFound = useTraceabilityStore((s) => s.notFound);

  useEffect(() => {
    if (notFound) {
      navigate('/not-found', { replace: true, state: { gtin } });
    }
  }, [notFound, navigate, gtin]);

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
      <main className="flex-grow">
        {activeTab === 'product' && <Home />}
        {activeTab === 'traceability' && <Traceability />}
        {activeTab === 'sustainability' && <Sustainability />}
        {activeTab === 'blockchain' && <Blockchain />}
        {activeTab === 'share' && <Share />}
      </main>
      <Footer />
      <ModalCoockies />
    </div>
  );
};

export default Layout;
