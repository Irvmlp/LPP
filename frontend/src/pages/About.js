import React, { useState, useEffect } from 'react';
import QuoteForm from '../components/QuoteForm';
import value1 from '../carasoul/reliability.png';
import value2 from '../carasoul/sustainability.png';
import value3 from '../carasoul/trust.png';
import value4 from '../carasoul/Accuracy.png';
import value5 from '../carasoul/innovation.png';

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
    <div className="relative h-screen md:overflow-y-clip overflow-y-scroll">
      <header className="font-sans md:h-full z-10 md:bottom-2 flex flex-col md:flex-row w-full p-2 items-center text-center mt-20 md:mt-12">
        <div className="order-2 md:order-1 w-full px-2 md:px-12 md:w-2/3 text-center flex flex-col justify-center items-center">
          <h1 className="text-lg lg:text-xl text-gray-400 font-bold font-montserrat mb-2 md:mb-2">Why Choose Us?</h1>
          <h1 className="text-lg md:text-xl lg:text-2xl text-[#293132] font-extrabold mb-2 md:mb-2 fira-sans-bold-italic">22 Years of Painting Excellence</h1>
          <p className="text-xs sm:text-sm md:text-md lg:text-lg text-[#293132] font-montserrat mb-6 w-4/5 text-center">
          3 generations, 22 years, and hundreds of transformed spaces later, Lamadrid Precision Painting continues offering homeowners and businesses a legacy of precision and quality that stands the test of time.
          </p>
          <div className="flex justify-center items-center md:-mt-4 mb-8">
            <button
              className="text-white bg-blue-400 text-lg md:text-lg md:mt-4 p-2 md:p-4 rounded-xl font-sans"
              onClick={openQuoteForm}
            >
              Get a free quote
            </button>
          </div>
          <div className="w-full md:px-12 flex justify-center items-center">
            <div className="flex gap-2 md:gap-6 lg:gap-12">
              <div className="flex flex-col items-center">
                <div className="mb-2">
                  <img src={value1} alt="Craftsmanship" className="w-12 h-12" />
                </div>
                <p className="text-sm text-[#293132] font-montserrat">Craftsmanship</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2">
                  <img src={value2} alt="Sustainability" className="w-12 h-12" />
                </div>
                <p className="text-sm text-[#293132] font-montserrat">Sustainability</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2">
                  <img src={value3} alt="Integrity" className="w-12 h-12" />
                </div>
                <p className="text-sm text-[#293132] font-montserrat">Integrity</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2">
                  <img src={value4} alt="Expertise" className="w-12 h-12" />
                </div>
                <p className="text-sm text-[#293132] font-montserrat">Expertise</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2">
                  <img src={value5} alt="Innovation" className="w-12 h-12" />
                </div>
                <p className="text-sm text-[#293132] font-montserrat">Innovation</p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 w-2/3 md:w-1/3 lg:flex justify-center items-center lg:justify-start ">
          <img src="/gallery/Projects/Pic.png" alt="Lamadrid Precision Painting Project" className="w-full lg:-ml-24 md:w-3/4 h-auto rounded-lg" />
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
