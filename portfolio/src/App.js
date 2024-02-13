// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import PostsPage from './PostsPage';
import ExperiencePage from './ExperiencePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
