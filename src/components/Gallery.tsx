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
  // { src: '/ramen8.jpg', alt: 'Ramen 8 Image', width: 800, height: 300 },
  // { src: '/ramen9.jpg', alt: 'Ramen 9 Image', width: 800, height: 300 },
];

const NUM_IMAGES_TO_SHOW = 8;
const SLIDESHOW_INTERVAL = 3000; // 3 seconds

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= images.length ? 0 : prevIndex + 1
      );
    }, SLIDESHOW_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  // Calculate visibleImages considering wrapping around at the end of images array
  const visibleImages = Array.from({ length: NUM_IMAGES_TO_SHOW }, (_, index) =>
    images[(currentIndex + index) % images.length]
  );

  return (
    <section className="py-4 px-4 max-w-screen-lg mx-auto">
      <div className="relative flex justify-center">
        {visibleImages.map((image, index) => (
          <div key={index} className="image-container">
            <img
              src={image.src}
              alt={`Image ${index + 1 + currentIndex}`}
              className="h-auto rounded-lg shadow-lg mx-2"
              style={{ maxWidth: '12vw', height: '20vh' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
