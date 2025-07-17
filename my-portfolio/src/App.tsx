import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="portfolio-container">
      {/* Left section */}
      <div className="left-section">
        <img src="/profile.jpg" alt="Ingabire Diane" className="profile-img" />
        <h1>INGABIRE Diane (she/her)</h1>
        <h2>Frontend Developer</h2>
        <p className="tagline">I create responsive, user-friendly websites using React & TypeScript.</p>

        <div className="special-links">
          <a
            href="https://github.com/Idiane"
            target="_blank"
            rel="noopener noreferrer"
            className="special-btn"
          >
            <img src="/github.svg" alt="GitHub" className="icon" />
            GitHub
          </a>

          <a
            href="mailto:ingabirediane980@gmail.com"
            className="special-btn"
          >
            <img src="/mail.svg" alt="Email" className="icon" />
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/ingabire-diane-306622271/"
            target="_blank"
            rel="noopener noreferrer"
            className="special-btn"
          >
            <img src="/linkedin.svg" alt="LinkedIn" className="icon" />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Right section */}
      <div className="right-section">
        <h2>About Me</h2>
        <p>
          I am a passionate Frontend Developer with experience in building modern, responsive interfaces.
          I specialize in React, TypeScript, and love creating clean, user-focused designs.
        </p>
        <p>
          In addition to frontend development, I’ve worked on projects involving UI/UX, and I’m constantly learning new technologies.
        </p>
        <div className="buttons">
          <a href="/RESUME.pdf" target="_blank" rel="noopener noreferrer" className="btn">View Resume</a>
          <Link to="/projects" className="btn secondary">Projects</Link>
        </div>
      </div>
      
    </div>
  );
}

export default App;
