import React from 'react';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
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
      <div className="h-70vh flex items-center justify-center">
        {/* left */}
        <div id="about" className="w-[25vw] h-full mx-4 items-center justify-center">
          <ButtonLT />
          <LocationLT />
          <AboutLT />
        </div>


        {/* middle */}
        <div className="w-[40vw]">
          <Image src="/ramen.jpg" alt="Desktop Image" width={600} height={200} />
        </div>

        {/* right */}
        <div id="hours" className="w-[30vw] ml-2 h-full mx-4 items-center justify-center">
          <HoursLT />
        </div>
      </div>

      {/* gallery */}
      <div id="gallery" className="h-20vh">
        <Gallery />
      </div>
    </div>
  );
};

export default LTabletLayout;