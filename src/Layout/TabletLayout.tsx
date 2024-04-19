import React from 'react';
import Header from '@/components/Header';
import MobileGallery from '@/components/MobileGallery';
import Hours from '@/components/Hours';
import Button from '@/components/Button';
import Location from '@/components/Location';
import About from '@/components/About';
import Image from 'next/image';

const TabletLayout: React.FC = () => {
  return (
    <div className="items-center justify-center min-h-screen">
      <Header />
      <div className="mt-4"> 
        <Image src="/ramen.jpg" alt="store front" width={800} height={300} />
        <div id="menu">
          <Button />
        </div>
        <div id="location">
          <Location />
        </div>
        <div id="hours">
          <Hours />
        </div>
        <div className="w-full" id="about">
          <About />
        </div>
        <div id="gallery">
          <MobileGallery />
        </div>
      </div>
    </div>
  );
};

export default TabletLayout;