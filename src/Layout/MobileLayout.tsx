// MobileLayout component
import React from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import Button from '@/components/Button';
import Hours from '@/components/Hours';
import Location from '@/components/Location';
import AboutT from '@/components/AboutT';
import MobileGallery from '@/components/MobileGallery';

const MobileLayout: React.FC = () => {
  return (
    <div className="items-center justify-center min-h-screen">
      <Header />
      <div className="mt-4"> 
        <Image src="/ramen.jpg" alt="store front" width={800} height={300} />
        <div id="menu" className="ml-[2vw]">
          <Button />
        </div>
        <div id="location" className="ml-[9vw]">
          <Location />
        </div>
        <div id="hours" className="ml-[9vw]">
          <Hours />
        </div>
        <div id="about" className="ml-[9vw]">
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
