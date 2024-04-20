import React from 'react';
import Header from '@/components/Header';
import GalleryTL from '@/components/GalleryTL';
import HoursLT from '@/components/HoursLT';
import ButtonLT from '@/components/ButtonLT';
import LocationLT from '@/components/LocationLT';
import AboutLT from '@/components/AboutLT';
import Image from 'next/image';

const LTabletLayout: React.FC = () => {
  return (
    <div className="layout h-screen">
      {/* header */}
      <div className="h-10vh">
        <Header />
      </div>

      {/* main */}
      <div className="h-70vh flex ml-2 items-center justify-center">
        {/* left */}
        <div id="about" className="w-[25vw] ml-4 h-full mx-4 items-center justify-center">
          <ButtonLT />
          <LocationLT />
          <AboutLT />
        </div>


        {/* middle */}
        <div className="w-[40vw] mx-2">
          <Image src="/ramen.jpg" alt="Desktop Image" width={600} height={210} />
        </div>

        {/* right */}
        <div id="hours" className="w-[30vw] ml-4 h-full mx-4 items-center justify-center">
          <HoursLT />
        </div>
      </div>

      {/* gallery */}
      <div id="gallery" className="h-20vh">
        <GalleryTL />
      </div>
    </div>
  );
};

export default LTabletLayout;