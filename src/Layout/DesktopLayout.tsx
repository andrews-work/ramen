import React from 'react';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Hours from '@/components/Hours';
import Button from '@/components/Button';
import Location from '@/components/Location';
import About from '@/components/About';
import Image from 'next/image';

const DesktopLayout: React.FC = () => {
  return (
    <div className="layout h-screen">
      {/* header */}
      <div className="h-10vh">
        <Header />
      </div>

      {/* main */}
      <div className="h-70vh flex w-full justify-center items-center">
        {/* left */}
        <div className="h-70vh flex w-full justify-center items-center">
          {/* left */}
          <div id="about" className="h-full mr-[15vw] flex-col justify-center items-center">
            <Button />
            <Location />
            <About />
          </div>

          {/* middle */}
          <div className="w-[50vw] h-full flex justify-center items-center">
            <Image src="/ramen.jpg" alt="Desktop Image" width={800} height={300} />
          </div>

          {/* right */}
          <div id="hours" className="ml-[15vw] h-full flex justify-center items-center">
            <Hours />
          </div>
        </div>
      </div>

      {/* gallery */}
      <div id="gallery" className="h-20vh mt-2">
        <Gallery />
      </div>
    </div>
  );
};

export default DesktopLayout;