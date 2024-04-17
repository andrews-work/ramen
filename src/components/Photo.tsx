// Photo.tsx

import React from 'react';
import Image from 'next/image';
import ImageSrc from '../styles/ramen.jpg';

interface PhotoProps {
  className?: string;
  altText?: string;
  width?: number;
  height?: number;
}

const Photo: React.FC<PhotoProps> = ({ className, altText = 'About Us', width, height }) => {
  return (
    <Image
      src={ImageSrc}
      alt={altText}
      className={className}
      layout="responsive"
      width={width}
      height={height}
    />
  );
};

export default Photo;
