import React, { useState } from 'react';
import axios from 'axios';
import favicon from '/Users/irvinglamadrid/new-painting-company/frontend/src/favicon.ico'; // Adjust the path if necessary
import social1 from '/Users/irvinglamadrid/new-painting-company/frontend/src/svgs/social1.svg';
import social2 from '/Users/irvinglamadrid/new-painting-company/frontend/src/svgs/social2.svg';
import social3 from '/Users/irvinglamadrid/new-painting-company/frontend/src/svgs/social3.svg';

const QuoteForm = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [services, setServices] = useState({
    commercial: false,
    residential: false,
    interior: false,
    exterior: false,
    cabinets: false,
    spraying: false,
  });
  const [size, setSize] = useState('');
  const [startDate, setStartDate] = useState('');
  const [completionDate, setCompletionDate] = useState('');
  const [asap, setAsap] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (name && email) {
      setStep(step + 1);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      await axios.post('http://89.116.50.185:5001/api/send-email', {
        name,
        email,
        phone,
        details,
        services,
        size,
        startDate: asap ? 'ASAP' : startDate,
        completionDate: asap ? 'ASAP' : completionDate,
      });

      setSuccess(true);
      setStep(3); // Move to the thank you page
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleServiceChange = (e) => {
    setServices({
      ...services,
      [e.target.name]: e.target.checked,
    });
  };

  const handleAsapChange = () => {
    setAsap(!asap);
    if (!asap) {
      setStartDate('');
      setCompletionDate('');
    }
  };

  const progressWidth = step === 1 ? '33%' : step === 2 ? '66%' : '100%';

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-6xl mx-auto w-full md:w-3/4 lg:w-5/6">
      {error && <p className="text-red-500">There was an error sending your request.</p>}

      <div className="relative w-full bg-gray-200 rounded-full h-2.5 mb-5">
        <div className="absolute top-0 left-0 h-2.5 rounded-full bg-blue-500" style={{ width: progressWidth }}></div>
      </div>

      {step === 1 && (
        <div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Phone</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number (optional)"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-blue-500 text-white p-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-blue-500 text-white p-2 rounded"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Project Details</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Provide any additional details about the project"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Services Required</label>
            <div className="flex flex-wrap">
              {Object.keys(services).map((service) => (
                <label key={service} className="mr-4 mb-2">
                  <input
                    type="checkbox"
                    name={service}
                    checked={services[service]}
                    onChange={handleServiceChange}
                    className="mr-2"
                  />
                  {service.charAt(0).toUpperCase() + service.slice(1)}
                </label>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Size in sqft</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              placeholder="Enter the size of the project in sqft"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Start Date</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              disabled={asap}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Completion Date</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded"
              value={completionDate}
              onChange={(e) => setCompletionDate(e.target.value)}
              disabled={asap}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              <input
                type="checkbox"
                checked={asap}
                onChange={handleAsapChange}
                className="mr-2"
              />
              ASAP
            </label>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-blue-500 text-white p-2 rounded"
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="text-center">
          <div className="flex flex-col items-center justify-center mb-4">
            <img src={favicon} alt="favicon" className="w-24 h-24 mr-2" />
            <h1 className="text-2xl font-bold text-[#293132] font-montserrat">Lamadrid Precision Painting</h1>
          </div>
          <p className="text-green-500 mb-4 text-xl font-bold">Thank you for choosing us!</p>
          <p className="mb-4">Check out our <a href="/gallery" className="text-blue-500 underline">gallery</a> or  <a href="/services" className="text-blue-500 underline">Testimonials</a></p>
          <div className="flex justify-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={social1} alt="Facebook" className="w-10 h-10" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={social2} alt="Instagram" className="w-10 h-10" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={social3} alt="Pinterest" className="w-10 h-10" />
            </a>
          </div>
          <button
            type="button"
            className="mt-4 bg-blue-500 text-white p-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      )}
    </form>
  );
};

export default QuoteForm;
