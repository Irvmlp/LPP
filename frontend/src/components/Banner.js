import React from 'react';
import phoneSvg from '/Users/irvinglamadrid/LPP/frontend/src/phone.svg'; // Adjust the path if necessary

const Banner = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 flex justify-between font-sans items-center px-2 md:px-8 mt-2">
      <div className="text-gray-600 text-xs sm:text-md font-bold font-monserrat">LICENCED | BONDED | INSURED | ROC#349206</div>
      
      <div className='flex flex-row items-center'> 
        <a href="tel:6023945505" className="text-gray-600 text-xs sm:text-md font-bold font-sans mr-2">602.394.5505</a>
        <img src={phoneSvg} alt="Left" className="w-3 h-4 transform scale-x-[-1] scale-y-[1] md:-mr-4" />  
      </div>
    </div>
  );
};

export default Banner;
