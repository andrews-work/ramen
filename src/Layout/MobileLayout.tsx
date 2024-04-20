// MobileLayout component
import React from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import Button from '@/components/Button';
import HoursM from '@/components/HoursM';
import LocationM from '@/components/LocationM';
import AboutMo from '@/components/AboutMo';
import MobileGallery from '@/components/MobileGallery';

const MobileLayout: React.FC = () => {
  return (
    <div className="items-center justify-center min-h-screen">
      <Header />
      <div className="mt-4 flex-col"> 
        <Image src="/ramen.jpg" alt="store front" width={800} height={300} />
        <div>
          <Button />
        </div>
        <div>
          <LocationM />
        </div>
        <div>
          <HoursM />
        </div>
        <div>
          <AboutMo />
        </div>
        <div>
          <MobileGallery />
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;
