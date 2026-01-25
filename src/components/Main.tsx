import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import vyticlePage from '../assets/images/vyticle-page.png';
import avatar from '../assets/images/avatar.jpg';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="intro-row">
          <div className="image-wrapper">
            <img src={avatar} alt="Avatar" />
          </div>
          <div className="content">
            <div className="social_icons">
              <a href="https://github.com/anijam99" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            </div>
            <h1>Jamie Tran</h1>
            <p className="title-role">Developer, Founder of <a href="https://vyticle.com" target="_blank" rel="noreferrer" className="startup-link">Vyticle</a></p>
            <div className="mobile_social_icons">
              <a href="https://github.com/anijam99" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            </div>
          </div>
        </div>
        
        {/* Featured Startup Section */}
        <div className="featured-project">
          <div className="project-card">
            <div className="startup-logo">
              <a href="https://vyticle.com" target="_blank" rel="noreferrer"><img src={vyticlePage} alt="Vyticle Dashboard" /></a>
            </div>
            <div className="project-info">
              <p>Streamline due diligence by monitoring whether the stories driving markets are strengthening, stalling, or breaking, using real evidence, not opinions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;