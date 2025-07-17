import { Link } from 'react-router-dom';
import './App.css'; // Reuse styles

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>Here are some of the projects I've worked on recently.</p>
      </div>

      <div className="project-list">
        {/* 🟢 Sample Project */}
        <div className="project-card">
          <h2>Book Hub</h2>
          <p>A full-stack book discovery app built with React, TypeScript, Node.js, and Express.</p>
          <a 
            href="https://bookhub-project-url.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn"
          >
            Visit Live Project
          </a>
        </div>

        {/* 🔁 You can copy the above block for more projects */}

        <Link to="/" className="btn secondary" style={{ marginTop: '40px' }}>
          ← Back to Portfolio
        </Link>
      </div>
    </div>
  );
};

export default Projects;
