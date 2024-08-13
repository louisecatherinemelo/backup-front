'use client';

import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    manufacturer: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form data
    if (!formData.name || !formData.description || !formData.manufacturer) {
      alert('Please fill in all required fields.');
      return;
    }

    // Simulate form submission (replace with actual submission logic)
    console.log('Form submitted!');
    console.log(formData);

    // Reset the form
    setFormData({ name: '', description: '', manufacturer: '' });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container mx-auto max-w-sm p-4">
      <h1 className="text-2xl font-bold text-center">Registrar Novo Item</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="block text-gray-700">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="block text-gray-700">Descrição:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="manufacturer" className="block text-gray-700">Fabricante:</label>
          <input
            type="text"
            id="manufacturer"
            name="manufacturer"
            value={formData.manufacturer}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">Registrar Item</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
