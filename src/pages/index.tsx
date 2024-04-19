import React, { useState, useEffect } from 'react';
import MobileLayout from '../Layout/MobileLayout';
import TabletLayout from '../Layout/TabletLayout';
import LTabletLayout from '../Layout/LTabletLayout';
import DesktopLayout from '../Layout/DesktopLayout';
import './../app/globals.css';

const HomePage: React.FC = () => {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setScreenSize('mobile');
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1189) {
        setScreenSize('smallTablet'); 
      } else if (window.innerWidth >= 1190 && window.innerWidth <= 1350) {
        setScreenSize('largeTablet'); 
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {screenSize === 'mobile' && <MobileLayout />}
      {screenSize === 'smallTablet' && <TabletLayout />} 
      {screenSize === 'largeTablet' && <LTabletLayout />} 
      {screenSize === 'desktop' && <DesktopLayout />}
    </>
  );
};

export default HomePage;
