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
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1119) {
        setScreenSize('smallTablet'); 
      } else if (window.innerWidth >= 1120 && window.innerWidth <= 1530) {
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


// desktop layout is appearing when small layout should be appearing
// therefore i need to increase size of small layout