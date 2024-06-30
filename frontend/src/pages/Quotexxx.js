import React, { useState } from 'react';
import axios from 'axios';

const Quote = () => {
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
    setStep(step + 1);
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
      await axios.post('http://89.116.50.185:5000/send-email', {
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

  const progressWidth = step === 1 ? '50%' : '100%';

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-3xl mx-auto">
      {success && <p className="text-green-500">Your request has been sent successfully!</p>}
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
              onClick={handlePrevious}
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
    </form>
  );
};

export default Quote;