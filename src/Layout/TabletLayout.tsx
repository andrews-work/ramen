import React from 'react';
import Header from '@/components/Header';
import TGallery from '@/components/TGallery';
import HoursT from '@/components/HoursT';
import ButtonT from '@/components/ButtonT';
import LocationT from '@/components/LocationT';
import AboutM from '@/components/AboutM';
import Image from 'next/image';

const TabletLayout: React.FC = () => {
  return (
    <div className="items-center justify-center min-h-screen">
      <Header />
      <div className="mt-4 flex"> 
        <div id="gallery w-[50vw]">
          <TGallery />
        </div>
        <div className="flex-col w-[35vw]">
          <div id="menu">
            <ButtonT />
          </div>
          <div id="location">
            <LocationT />
          </div>
          <div id="hours">
            <HoursT />
          </div>
          <div id="about">
            <AboutM />
          </div>
        </div>
      </div>
      <Image src="/ramen.jpg" alt="store front" width={300} height={110} />

    </div>
  );
};

export default TabletLayout;