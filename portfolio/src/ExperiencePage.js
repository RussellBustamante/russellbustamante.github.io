// src/ExperiencePage.js
import React from 'react';
import Experience from './Experience';

const experiencesData = [
  {
    id: 0,
    title: 'Software Engineer',
    company: 'Tech Company',
    period: 'Jan 2020 - Present',
    description: 'Working on developing innovative software solutions...'
  },
  {
    id: 1,
    title: 'Web Developer',
    company: 'Web Solutions Inc.',
    period: 'May 2018 - Dec 2019',
    description: 'Created multiple high-profile web applications...'
  },
  // ...more experiences
];

const ExperiencePage = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center mb-10">Work Experience</h1>
      {experiencesData.map(exp => (
        <Experience key={exp.id} {...exp} />
      ))}
    </div>
  );
};

export default ExperiencePage;
