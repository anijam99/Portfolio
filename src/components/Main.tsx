import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/avatar.jpg';
// Import your project image
import medisort from '../assets/images/medisort.png';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/anijam99" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
          <h1>Jamie</h1>
          <p>Full Stack Developer</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/anijam99" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
        </div>
        
        {/* Featured Project Section */}
        <div className="featured-project">
          <div className="featured-badge">Featured Project</div>
          <div className="project-card">
            <a href="https://github.com/anijam99/medisort" target="_blank" rel="noreferrer">
              <img src={medisort} alt="Medisort thumbnail" />
            </a>
            <div className="project-info">
              <a href="https://github.com/anijam99/medisort" target="_blank" rel="noreferrer">
                <h3>Medisort</h3>
              </a>
              <p>A Python GUI tool for rapid manual sorting of large image/video collections</p>
              <div className="project-link">
                <a href="https://github.com/anijam99/medisort" target="_blank" rel="noreferrer">
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;