import React, { useState } from 'react';
import Project from './Project';

const categoriesData = {
  'Computer Vision': [
    { name: 'Project 1', href: '/computer-vision#project1' },
    { name: 'Project 2', href: '/computer-vision#project2' },
    // ...more projects
  ],
  'Introduction to Computer Systems': [
    // ...projects
  ],
  // ...other categories
};

const ProjectsPage = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <main className="max-w-6xl mx-auto p-5">
      <section id="projects" className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        {Object.entries(categoriesData).map(([categoryName, projects]) => (
          <div key={categoryName} className="category">
            <button
              onClick={() => toggleCategory(categoryName)}
              className="text-left w-full bg-blue-800 text-white p-2 rounded mb-3 focus:outline-none"
            >
              <h3 className="hover:underline">{categoryName}</h3>
            </button>
            {openCategory === categoryName && (
              <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded shadow-lg">
                {projects.slice(0, 3).map((project) => (
                  <Project key={project.name} name={project.name} href={project.href} />
                ))}
                <div className="flex items-center justify-center bg-gray-200 rounded-lg hover:bg-gray-300 p-2">
                  <a
                    href={`/${categoryName.replace(/\s+/g, '-').toLowerCase()}`}
                    className="hover:underline text-blue-800"
                  >
                    View All
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default ProjectsPage;
