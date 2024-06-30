import React, { useState, useEffect } from 'react';
import img1 from '../carasoul/bryanrolling.png';
import img2 from '../carasoul/dadspraying.png';

const Carousel = () => {
  const projectImages = [img1, img2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [projectImages.length]);

  return (
    <div className="">
      {projectImages.map((imageUrl, index) => (
        <div
          key={index}
          className={` rounded-xl absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={imageUrl} alt={`Slide ${index}`} className="ml-20 md:ml-40 items-center w-2/3 md:w-auto md:h-full  py-24 " />
        </div>
      ))}
      <div className="absolute bottom-4 flex space-x-2">
        {projectImages.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3  rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
