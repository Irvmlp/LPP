import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carasoul';
import QuoteForm from '../components/QuoteForm';

const Home = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const openQuoteForm = () => setIsQuoteFormOpen(true);
  const closeQuoteForm = () => setIsQuoteFormOpen(false);

  useEffect(() => {
    document.title = 'Lamadrid Precision Painting - Home';
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Lamadrid Precision Painting, your trusted painting company in Arizona. Specializing in residential, commercial, interior, and exterior painting services. Contact us for a free quote today!';
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'painting company, Arizona, residential painting, commercial painting, interior painting, exterior painting, epoxy, cabinets, free quote';
    document.head.appendChild(metaKeywords);

    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, []);

  return (
    <div className="relative h-screen">
      <header className="absolute h-84 md:h-52 transform  z-10 md:bottom-2 md:mt-72 flex flex-col  justify-center md:justify-start md:left-1/3 w-5/6 md:w-3/5 opacity-90 bg-white p-2 rounded-lg  text-center top-40 left-1/2 -translate-x-1/2">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left mt-4 md:ml-8 md:mb-6 fira-sans-bold-italic">Over 90% of Our Jobs Are Repeat Clients or Referrals</h1>
        <div className="flex flex-col md:flex-row w-full">
          <div className="lg:w-4/5  pr-2 mb-2 md:mb-0">
          <p className="text-md md:text-lg md:text-left md:ml-6 font-montserrat">
       Over 22 years of satisfied clients. Specializing in residential, commercial, interior, exterior,
         epoxy, cabinets.
         <p>
         <a href="/about" className="text-blue-500 hover:underline">Learn more about us</a> and our 
           <a href="/services" className="text-blue-500 hover:underline"> services</a>.
          </p>
          </p>

           </div>
          <div className="md:w-1/5 -ml-8 flex justify-center items-center">
            <button
              className="font-montserrat text-white bg-blue-400 text-xl p-4 rounded-xl"
              onClick={openQuoteForm}
            >
              Free Quote
            </button>
          </div>
        </div>
      </header>
      <main>
        <Carousel/>
        {isQuoteFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg relative w-full max-w-md mx-auto">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
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

export default Home;
