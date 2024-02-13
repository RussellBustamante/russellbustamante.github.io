import React from 'react';

const Project = ({ name, href }) => {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-md transition duration-300">
      <a href={href} className="text-xl font-bold hover:text-blue-600 transition duration-300">
        {name}
      </a>
      {/* Include additional project details here if necessary */}
    </div>
  );
};

export default Project;
