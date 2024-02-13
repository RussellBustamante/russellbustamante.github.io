// src/Experience.js
import React from 'react';

const Experience = ({ title, company, period, description }) => {
  return (
    <div className="mb-6 p-4 bg-white shadow-md rounded">
      <h3 className="text-xl font-semibold">{title} - {company}</h3>
      <p className="text-gray-600">{period}</p>
      <p className="mt-2 text-gray-800">{description}</p>
    </div>
  );
};

export default Experience;
