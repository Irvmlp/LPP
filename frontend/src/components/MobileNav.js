import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path if necessary

const MobileNav = ({ closeMenu, openQuoteForm }) => {
  const location = useLocation();

  const linkClass = (path) => {
    const baseClass = 'text-[#293132] block text-2xl px-4 py-2';
    const activeClass = location.pathname === path ? 'bg-gray-200 rounded text-white' : '';
    const borderClass = location.pathname === path ? 'border-2 border-gray-200' : '';
    return `${baseClass} ${activeClass} ${borderClass}`;
  };

  return (
    <div className="fixed font-montserrat top-0 left-0 w-full h-screen bg-white z-50 flex flex-col justify-center items-center">
      <button
        className="absolute top-4 right-4 text-gray-500 text-5xl"
        onClick={closeMenu}
      >
        &times;
      </button>
      <div className="flex flex-col items-center mb-8">
        <img src={logo} alt="favicon" className="w-16 h-16 mb-4" />
        <span className="text-2xl font-bold text-center text-[#293132]">Lamadrid Precision Painting</span>
      </div>
      <Link to="/" className={linkClass('/')} onClick={closeMenu}>Home</Link>
      <Link to="/about" className={linkClass('/about')} onClick={closeMenu}>About Us</Link>
      <Link to="/services" className={linkClass('/services')} onClick={closeMenu}>Services</Link>
      <Link to="/gallery" className={linkClass('/gallery')} onClick={closeMenu}>Gallery</Link>
      <button
        onClick={() => { openQuoteForm(); closeMenu(); }}
        className="text-white bg-orange-400 rounded-md p-4 mt-8 text-2xl"
      >
        Request a Quote
      </button>
    </div>
  );
};

export default MobileNav;
