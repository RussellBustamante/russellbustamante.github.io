// ComputerVision.js
import React from 'react';

function ComputerVision() {
  // Example project details
  const projects = [
    {
      id: "project1",
      name: "Dummy Project 1",
      description: "Description of Dummy Project 1...",
    },
    // Add more projects as needed
  ];

  return (
    <main className="max-w-6xl mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">16-385: Computer Vision Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}><a href={`#${project.id}`} className="text-blue-500 hover:underline">{project.name}</a></li>
        ))}
      </ul>
      {projects.map(project => (
        <div key={project.id} id={project.id}>
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </main>
  );
}

export default ComputerVision;
