import React, { useState, useEffect } from 'react';
import MobileLayout from '../Layout/MobileLayout';
import TabletLayout from '../Layout/TabletLayout';
import DesktopLayout from '../Layout/DesktopLayout';
import './../app/globals.css';

const HomePage: React.FC = () => {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setScreenSize('mobile');
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1199) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize(); // Set initial screen size
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {screenSize === 'mobile' && <MobileLayout />}
      {screenSize === 'tablet' && <TabletLayout />}
      {screenSize === 'desktop' && <DesktopLayout />}
    </>
  );
};

export default HomePage;
