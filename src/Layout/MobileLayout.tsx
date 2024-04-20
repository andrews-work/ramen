// MobileLayout component
import React from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import Button from '@/components/Button';
import HoursM from '@/components/HoursM';
import Location from '@/components/Location';
import AboutT from '@/components/AboutT';
import MobileGallery from '@/components/MobileGallery';

const MobileLayout: React.FC = () => {
  return (
    <div className="items-center justify-center min-h-screen">
      <Header />
      <div className="mt-4 flex items-center"> 
        <Image src="/ramen.jpg" alt="store front" width={800} height={300} />
        <div id="menu">
          <Button />
        </div>
        <div id="location">
          <Location />
        </div>
        <div id="hours">
          <HoursM />
        </div>
        <div id="about">
          <AboutT />
        </div>
        <div id="gallery">
          <MobileGallery />
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;
