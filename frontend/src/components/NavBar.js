import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/Users/irvinglamadrid/LPP/frontend/src/logo.png'; // Adjust the path if necessary
import MobileNav from './MobileNav'; // Adjust the path if necessary

const NavBar = ({ openQuoteForm }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const getTitle = () => {
    const pageTitle = {
      "/": "Home",
      "/about": "About Us",
      "/services": "Services",
      "/gallery": "Gallery",
      "/testimonials": "Testimonials",
      "/contact": "Contact",
      "/quote": "Request a Quote"
    };

    return `Lamadrid Precision Painting${pageTitle[location.pathname] ? `: ${pageTitle[location.pathname]}` : ''}`;
  };

  const linkClass = (path) =>
    `text-[#293132] block md:inline px-1 ${location.pathname === path ? 'bg-gray-200 py-2 px-2 rounded text-white' : ''}`;

  return (
    <nav className="font-sans absolute top-8 md:top-12 left-1/2 transform rounded-xl -translate-x-1/2 bg-white border-4 border-gray-200 p-1 md:p-2 md:mx-2 lg:p-4 z-20 flex justify-between items-center w-full max-w-screen-xl">
      <div className="flex items-center text-2xl font-bold text-[#293132] font-montserrat ">
        <img src={logo} alt="favicon" className="w-8 h-8 mr-2" />
        <span className="hidden text-sm md:text-lg md:inline">{getTitle()}</span>
        <span className="inline md:hidden text-xs sm:text-sm ">Lamadrid Painting</span>
      </div>
      {!isOpen && (
        <div className="md:hidden  mt-2">
          <button
            onClick={toggleMenu}
            className="text-[#293132] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      )}
      <div className={`space-x-4 md:flex ${isOpen ? 'block' : 'hidden'} font-montserrat text-sm items-center md:block`}>
        <Link to="/" className={linkClass('/')} onClick={closeMenu}>Home</Link>
        <Link to="/about" className={linkClass('/about')} onClick={closeMenu}>About Us</Link>
        <Link to="/services" className={linkClass('/services')} onClick={closeMenu}>Services</Link>
        <Link to="/gallery" className={linkClass('/gallery')} onClick={closeMenu}>Gallery</Link>
        <button
          onClick={() => { openQuoteForm(); closeMenu(); }}
          className="text-white block md:inline bg-orange-400 rounded-md p-2"
        >
          Request a Quote
        </button>
      </div>
      {isOpen && (
        <MobileNav closeMenu={closeMenu} openQuoteForm={openQuoteForm} />
      )}
    </nav>
  );
};

export default NavBar;
