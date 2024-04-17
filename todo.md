import React from 'react';
import Header from '@/components/Header';
import Hours from '@/components/Hours';
import Image from 'next/image';
import Button from '@/components/Button';
import Location from '@/components/Location';
import About from '@/components/About';

const DesktopLayout: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      {/* top */}
      <div className="h-60vh flex justify-center items-center min-h-screen bg-black">
        {/* left */}
        <div className="w-30vw text-center justify-center items-center border border-white z-10">
          <Hours />
        </div>
        {/* middle */}
        <div className="w-60vw flex justify-center items-center border border-white z-10">
          <Image src="/ramen.jpg" alt="Desktop Image" width={800} height={300} />
        </div>
        {/* right */}
        <div className="w-30vw text-center justify-center items-center border border-white z-10">
            <Button />
            <Location />
            <About />
        </div>
      </div>
      {/* bottom */}
      <div className="h-30vh">
        <Gallery />
      </div>
    </div>
  );
};

export default DesktopLayout;
