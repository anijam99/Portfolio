import React from "react";
import '../assets/styles/About.scss';

function About() {
  return (
    <div className="about-container" id="about">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            {/* Edit this section to add your own story */}
            Hi there! I'm Jamie, a passionate developer and entrepreneur based in Singapore. 
            I love building products that solve real problems and make a meaningful impact.
          </p>
          <p>
            My journey in tech started with a curiosity for how things work, which quickly 
            evolved into a passion for creating innovative solutions. Today, I focus on 
            full-stack development, AI/ML applications, and building Vyticle.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, reading about 
            market trends, or working on the next big feature for my startup.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
