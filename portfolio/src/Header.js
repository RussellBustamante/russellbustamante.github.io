// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-dark-blue text-white body-font shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-light-blue">Home</Link>
          <Link to="/experience" className="mr-5 hover:text-light-blue">Experience</Link>
          <Link to="/projects" className="mr-5 hover:text-light-blue">Projects</Link>
          <Link to="/posts" className="mr-5 hover:text-light-blue">Posts</Link>
          {/* Add more navigation links as needed */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
