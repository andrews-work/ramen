import React, { useState, useEffect } from 'react';

const images = [
  { src: '/ramen.jpg', alt: 'Ramen Image', width: 800, height: 300 },
  { src: '/ramen1.jpg', alt: 'Ramen 1 Image', width: 800, height: 300 },
  { src: '/ramen2.jpg', alt: 'Ramen 2 Image', width: 800, height: 300 },
  { src: '/ramen3.jpg', alt: 'Ramen 3 Image', width: 800, height: 300 },
  { src: '/ramen4.jpg', alt: 'Ramen 4 Image', width: 800, height: 300 },
  { src: '/ramen5.jpg', alt: 'Ramen 5 Image', width: 800, height: 300 },
  { src: '/ramen6.jpg', alt: 'Ramen 6 Image', width: 800, height: 300 },
  { src: '/ramen7.jpg', alt: 'Ramen 7 Image', width: 800, height: 300 },
  { src: '/ramen8.jpg', alt: 'Ramen 8 Image', width: 800, height: 300 },
  { src: '/ramen9.jpg', alt: 'Ramen 9 Image', width: 800, height: 300 },
];

const NUM_IMAGES_TO_SHOW = 1;
const SLIDESHOW_INTERVAL = 3000; // 3 seconds

const MobileGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= images.length ? 0 : prevIndex + 1
      );
    }, SLIDESHOW_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentIndex % images.length];

  return (
    <section className="py-8 px-4 max-w-screen-lg mx-auto">
      <div className="relative flex justify-center">
        <div className="image-container">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="h-auto rounded-lg shadow-lg mx-2"
            style={{ maxWidth: '80vw', height: '40vh' }}
          />
        </div>
      </div>
    </section>
  );
};


export default MobileGallery;
