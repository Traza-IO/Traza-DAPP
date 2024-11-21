import React from 'react';
import Navbar from './Nav';
import Footer from './Footer';
import Slider from './SliderProduct';
import Materials from './Materials';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Slider />
      <Materials />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
