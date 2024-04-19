import React from 'react';
import Header from '@/components/Header';
import MobileGallery from '@/components/MobileGallery';
import Hours from '@/components/Hours';
import Button from '@/components/Button';
import Location from '@/components/Location';
import AboutT from '@/components/AboutT';
import Image from 'next/image';

const TabletLayout: React.FC = () => {
  return (
    <div className="items-center justify-center min-h-screen">
      <Header />
      <div className="mt-4 flex"> 
        <Image src="/ramen.jpg" alt="store front" width={300} height={500} />
        <div className="flex-col">
          <div id="menu">
            <Button />
          </div>
          <div id="location">
            <Location />
          </div>
          <div id="hours">
            <Hours />
          </div>
          <div id="about">
            <AboutT />
          </div>
        </div>
      </div>
      <div id="gallery">
          <MobileGallery />
        </div>
    </div>
  );
};

export default TabletLayout;