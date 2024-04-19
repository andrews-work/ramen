import React from 'react';
import Header from '@/components/Header';
import TGallery from '@/components/TGallery';
import Hours from '@/components/Hours';
import ButtonT from '@/components/ButtonT';
import Location from '@/components/Location';
import About from '@/components/About';
import Image from 'next/image';

const TabletLayout: React.FC = () => {
  return (
    <div className="items-center justify-center min-h-screen">
      <Header />
      <div className="mt-4 flex"> 
        <Image src="/ramen.jpg" alt="store front" width={500} height={110} />
        <div className="flex-col w-[15vw]">
          <div id="menu">
            <ButtonT />
          </div>
          <div id="location">
            <Location />
          </div>
          <div id="hours">
            <Hours />
          </div>
          <div id="about">
            <About />
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