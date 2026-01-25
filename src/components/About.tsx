import React from "react";
import '../assets/styles/About.scss';

function About() {
  return (
    <div className="about-container" id="about">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi! I'm Jamie, a developer based in Singapore currently serving National Service.
            I founded Vyticle to streamline due diligence and build practical tools that solve real problems.
          </p>
          <p>
            I'm inspired by researchers like Ilya Sutskever, a pioneer in deep learning and co‑founder of OpenAI.
            Their work drives my commitment to ethical, transparent AI and to implementing strong safeguards for responsible deployment.
          </p>
          <p>
            Beyond AI, I enjoy exploring web scraping, quant trading, data science, and automation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
