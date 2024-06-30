import React, { useState, useEffect } from 'react';
import dadspraying from '../carasoul/dadspraying.png'; // Ensure this path is correct
import QuoteForm from '../components/QuoteForm';

const services = [
  {
    title: "Residential",
    description: "High-quality interior and exterior painting services for homes.",
  },
  {
    title: "Commercial",
    description: "Professional painting services for businesses and commercial properties.",
  },
  {
    title: "Interior",
    description: "Detailed and careful interior painting to enhance your living space.",
  },
  {
    title: "Exterior",
    description: "Durable and weather-resistant exterior painting solutions.",
  },
  {
    title: "Epoxy Coatings",
    description: "Protective and decorative epoxy coatings for floors and surfaces.",
  },
  {
    title: "Cabinetry",
    description: "Expert cabinet painting and refinishing services.",
  },
  // Add more services as needed
];

const Services = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openQuoteForm = () => {
    setIsQuoteFormOpen(true);
  };

  const closeQuoteForm = () => {
    setIsQuoteFormOpen(false);
  };

  const openServiceDescription = (service) => {
    setSelectedService(service);
  };

  const closeServiceDescription = () => {
    setSelectedService(null);
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
      document.head.removeChild(metaDescription, true);
      document.head.removeChild(metaKeywords, true);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-y-scroll lg:overflow-y-hidden">
      <header className="md:h-full z-10 md:bottom-2 flex flex-col sm:flex-row w-full md:px-12 p-2 justify-center items-center text-center mt-16 sm:mt-28 sm:-ml-6 md:mt-12 space-y-6 md:space-y-0">
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <img src={dadspraying} alt="Dad Spraying" className="w-3/5 md:w-full h-auto rounded-lg" />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2 justify-center gap-2">
          <h1 className="text-lg md:text-2xl font-bold md:mb-2 fira-sans-bold-italic text-gray-600 -mt-4">Our Expert Services</h1>

          <div className="flex gap-2 mb-2 mt-2">
            {services.slice(0, 2).map((service, index) => (
              <div key={index} className="w-1/2 border-2 border-gray-400 p-4 rounded-lg shadow-lg" onClick={() => openServiceDescription(service)}>
                <h2 className="text-sm font-bold text-[#293132] mb-2">{service.title}</h2>
                <p className="hidden md:block text-sm text-[#293132]">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mb-2">
            {services.slice(2, 4).map((service, index) => (
              <div key={index} className="w-1/2 border-2 border-gray-400 p-4 rounded-lg shadow-lg" onClick={() => openServiceDescription(service)}>
                <h2 className="text-sm font-bold text-[#293132] mb-2">{service.title}</h2>
                <p className="hidden md:block text-sm text-[#293132]">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mb-2">
            {services.slice(4, 6).map((service, index) => (
              <div key={index} className="w-1/2 border-2 border-gray-400 p-4 rounded-lg shadow-lg" onClick={() => openServiceDescription(service)}>
                <h2 className="text-sm font-bold text-[#293132] mb-2">{service.title}</h2>
                <p className="hidden md:block text-sm text-[#293132]">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="flex mt-4 justify-center items-center">
            <button
              className="text-white bg-blue-400 text-lg md:text-lg md:mt-4 p-2 md:p-4 rounded-xl font-sans"
              onClick={openQuoteForm}
            >
              Get a free quote
            </button>
          </div>
        </div>
      </header>

      {selectedService && (
        <div className="font-sans fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg relative w-full max-w-md mx-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 bg-opacity-90 hover:text-gray-800"
              onClick={closeServiceDescription}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">{selectedService.title}</h2>
            <p className="text-md text-[#293132]">{selectedService.description}</p>
          </div>
        </div>
      )}

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
