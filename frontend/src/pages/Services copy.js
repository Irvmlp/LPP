import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carasoul'; // Ensure this path is correct
import QuoteForm from '../components/QuoteForm';

const services = [
  {
    title: "Residential Painting",
    description: "High-quality interior and exterior painting services for homes.",
  },
  {
    title: "Commercial Painting",
    description: "Professional painting services for businesses and commercial properties.",
  },
  {
    title: "Interior Painting",
    description: "Detailed and careful interior painting to enhance your living space.",
  },
  {
    title: "Exterior Painting",
    description: "Durable and weather-resistant exterior painting solutions.",
  },
  {
    title: "Epoxy Coatings",
    description: "Protective and decorative epoxy coatings for floors and surfaces.",
  },
  {
    title: "Cabinet Refinishing",
    description: "Expert cabinet painting and refinishing services.",
  },
  // Add more services as needed
];

const Services = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const openQuoteForm = () => {
    setIsQuoteFormOpen(true);
  };

  const closeQuoteForm = () => {
    setIsQuoteFormOpen(false);
  };

  useEffect(() => {
    document.title = 'Painting Services - Lamadrid Precision Painting';
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Explore our professional painting services at Lamadrid Precision Painting. We offer residential, commercial, interior, exterior, epoxy coatings, and cabinet refinishing services in Arizona.';
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'painting services, residential painting, commercial painting, interior painting, exterior painting, epoxy coatings, cabinet refinishing, Arizona';
    document.head.appendChild(metaKeywords);

    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-y-scroll">
      <header className="font-monserrat absolute py-16 transform md:-translate-x-1/2 z-10 md:bottom-12 flex flex-col left-1/2 justify-center w-5/6 md:w-4/6 items-center text-center top-24 md:top-40 -translate-x-1/2">
        <h1 className="text-3xl text-[#293132] font-bold mb-4 font-montserrat w-full text-center">Our Professional Painting Services</h1>
        <div className="grid grid-cols-2 gap-6 w-full px-4">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-lg md:text-xl font-bold text-[#293132] mb-2">{service.title}</h2>
              <p className="text-sm md:text-lg text-[#293132]">{service.description}</p>
            </div>
          ))}
        </div>
        <button
          className="text-white bg-orange-400 text-xl w-96 p-4 rounded-xl font-sans opacity-100 mt-6"
          onClick={openQuoteForm}
        >
          Request a Quote
        </button>
      </header>
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
    </div>
  );
};

export default Services;
