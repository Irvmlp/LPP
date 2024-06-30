import React, { useState, useEffect } from 'react';
import ProjectPics from './ProjectPics';
import img1 from '../carasoul/IMG_1450.jpg'; // Correctly import the image with its extension
import img2 from '../carasoul/IMG_5844.jpg'; // Correctly import the image with its extension
import img3 from '../carasoul/IMG_3423.jpg';
const Carousel = () => {
  const projectImages = [
    img2, // Use the imported image
    img3,
    img1,
    img2,
    img3,
    img1,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [projectImages.length]);

  return (
    <div className="relative h-screen w-screen overflow-hidden mt-6">
      {projectImages.map((imageUrl, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <ProjectPics imageUrl={imageUrl} />
        </div>
      ))}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {projectImages.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
