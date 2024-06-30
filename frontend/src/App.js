import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import QuoteForm from './components/QuoteForm';
import Banner from './components/Banner';

function App() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const openQuoteForm = () => {
    setIsQuoteFormOpen(true);
  };

  const closeQuoteForm = () => {
    setIsQuoteFormOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <Banner/> 
        <NavBar openQuoteForm={openQuoteForm} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
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
    </Router>
  );
}

export default App;
