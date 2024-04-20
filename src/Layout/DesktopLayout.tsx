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
      <div className="h-70vh flex items-center justify-center">
        {/* left */}
        <div id="about" className="w-[25vw] mr-[40vw] h-full mx-4 items-center justify-center">
          <Button />
          <Location />
          <About />
        </div>


        {/* middle */}
        <div className="w-[50vw] h-full mx-4 px-8">
          <Image src="/ramen.jpg" alt="Desktop Image" width={800} height={300} />
        </div>

        {/* right */}
        <div id="hours" className="w-[25vw] ml-[40vw] h-full mx-4 items-center justify-center">
          <Hours />
        </div>
      </div>

      {/* gallery */}
      <div id="gallery" className="h-20vh">
        <Gallery />
      </div>
    </div>
  );
};

export default DesktopLayout;