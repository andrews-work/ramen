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
      <div className="mt-4 flex h-full align-items: start">
        <div id="gallery" className="w-[50vw] h-full">
          <TGallery />
        </div>
        <div className="flex-col w-[45vw] items-center justify-content: space-between space-y-4 p-4">
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
      <div className="px-8">
        <Image src="/ramen.jpg" alt="store front" layout="responsive" width={300} height={110} />
      </div>
    </div>
  );
};

export default TabletLayout;
