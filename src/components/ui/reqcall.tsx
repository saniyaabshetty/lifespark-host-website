"use client";
import { useState } from 'react';

const RequestCall = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    preferredTimings: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="flex flex-col sm:flex-row bg-white shadow-lg p-8 rounded-lg w-full sm:max-w-4xl">
        {/* Form Section */}
        <form className="w-full sm:w-1/2 p-4" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6">Request a call</h2>
          <label className="block mb-4">
            Name *
            <input
              type="text"
              name="name"
              className="mt-1 p-2 border w-full"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="block mb-4">
            Email *
            <input
              type="email"
              name="email"
              className="mt-1 p-2 border w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="block mb-4">
            Phone
            <input
              type="tel"
              name="phone"
              className="mt-1 p-2 border w-full"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-4">
            Address *
            <textarea
              name="address"
              className="mt-1 p-2 border w-full"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          <label className="block mb-4">
            Preferred timings and other notes
            <input
              type="text"
              name="preferredTimings"
              className="mt-1 p-2 border w-full"
              value={formData.preferredTimings}
              onChange={handleChange}
            />
          </label>
          <div className="mb-4">
            <input type="checkbox" id="terms" name="terms" required />
            <label htmlFor="terms" className="ml-2">
              I agree to the terms & conditions
            </label>
          </div>
          <div className="mb-4">
            <input type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg" value="Submit" />
          </div>
        </form>

        {/* Package and Image Section */}
        <div className="w-full sm:w-1/2 p-4 rounded-lg flex justify-center items-center" style={{ backgroundColor: '#fefefe' }}>
          <img
            src="/Website_Card.png"
            alt="Included Package"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RequestCall;
