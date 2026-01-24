import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import vyticlePage from '../assets/images/vyticle-page.png';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/anijam99" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
          <h1>Jamie</h1>
          <p className="title-role">Developer, Founder of <a href="https://vyticle.com" target="_blank" rel="noreferrer" className="startup-link">Vyticle</a></p>
          <div className="mobile_social_icons">
            <a href="https://github.com/anijam99" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
        </div>
        
        {/* Featured Startup Section */}
        <div className="featured-project">
          <div className="project-card">
            <div className="startup-logo">
              <img src={vyticlePage} alt="Vyticle Dashboard" />
            </div>
            <div className="project-info">
              <a href="https://vyticle.com" target="_blank" rel="noreferrer">
                <h3>Vyticle</h3>
              </a>
              <p>Streamline due diligence by monitoring whether the stories driving markets are strengthening, stalling, or breaking, using real evidence, not opinions.</p>
              <div className="project-link">
                <a href="https://vyticle.com" target="_blank" rel="noreferrer">
                  Visit Vyticle →
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