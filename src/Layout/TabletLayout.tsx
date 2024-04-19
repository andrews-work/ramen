import React from 'react';
import Header from '@/components/Header';
import TGallery from '@/components/TGallery';
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
        <Image src="/ramen.jpg" alt="store front" width={500} height={400} />
        <div className="flex-col w-[30vw]">
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
          <TGallery />
        </div>
    </div>
  );
};

export default TabletLayout;