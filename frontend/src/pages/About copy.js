import React, { useState, useEffect } from 'react';
//import Carousel from '../components/Carasoul'; // Ensure this path is correct
import QuoteForm from '../components/QuoteForm';

const About = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const openQuoteForm = () => {
    setIsQuoteFormOpen(true);
  };

  const closeQuoteForm = () => {
    setIsQuoteFormOpen(false);
  };

  useEffect(() => {
    document.title = 'About Us - Lamadrid Precision Painting';
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Learn more about Lamadrid Precision Painting, a third-generation family of painters in Arizona offering high-quality painting services. Get a quote in less than 24 hours!';
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'painting company, Arizona, experienced painters, family business, painting services, free quote';
    document.head.appendChild(metaKeywords);

    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, []);

  return (
    <div className="relative h-screen">
      <header className="font-sans absolute h-96 md:h-52 transform md:-translate-x-1/4 z-10 md:bottom-2 md:mt-72 flex flex-col md:right-1/4 md:-ml-48 justify-center w-5/6 md:w-5/6 opacity-90 bg-white p-2 rounded-lg items-center text-center top-40 left-1/2 -translate-x-1/2">
        <h1 className="text-3xl text-[#293132] align-left md:text-left font-bold mb-4 font-montserrat w-full text-center  md:mb-6">Why Choose Us?</h1>
        <h1 className="text-3xl text-[#293132] align-left md:text-left font-bold mb-4 font-montserrat w-full text-center  md:mb-6">22 Years of Painting Excellence</h1>
        <div className="flex flex-col md:flex-row w-full">
          <div className="md:w-2/6 flex justify-center items-center">
            <button
              className="text-white bg-blue-400 text-xl p-4 rounded-xl font-sans opacity-100"
              onClick={openQuoteForm}
            >
              Get a free quote
            </button>
          </div>
          <div className="md:w-4/6 pr-2 mb-4 md:mb-0">
            <p className="text-lg text-[#293132] md:text-right md:mr-6 font-montserrat">With 22 years of painting expertise serving Arizona, LPP offers homeowners and businesses a legacy of precision and quality, ensuring your space isn’t just painted, but transformed with enduring craftsmanship.</p>
          </div>
        </div>
      </header>
      <main>
        {isQuoteFormOpen && (
          <div className="font-sans fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg relative w-full max-w-md mx-auto">
              <button
                className="absolute top-2 right-2 text-gray-500 bg-opacity-90 hover:text-gray-800"
                onClick={closeQuoteForm}
              >
                &times;
              </button>
              <QuoteForm onClose={closeQuoteForm} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default About;
