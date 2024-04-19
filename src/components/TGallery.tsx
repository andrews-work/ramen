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
];

const NUM_IMAGES_TO_SHOW = 3;
const SLIDESHOW_INTERVAL = 3000; 

const TGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= images.length ? 0 : prevIndex + 1
      );
    }, SLIDESHOW_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const visibleImages = Array.from({ length: NUM_IMAGES_TO_SHOW }, (_, index) =>
    images[(currentIndex + index) % images.length]
  );

  return (
    <section className="py-4 px-4 max-w-screen-lg mx-auto mb-4">
      <div className="relative flex-col justify-center">
        {visibleImages.map((image, index) => (
          <div key={index} className="image-container">
            <img
              src={image.src}
              alt={`Image ${index + 1 + currentIndex}`}
              className="h-auto rounded-lg shadow-lg mx-4 my-4"
              style={{ maxWidth: '45vw', height: '33vh' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TGallery;
