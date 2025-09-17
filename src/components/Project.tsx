import React from "react";
import medisort from '../assets/images/medisort.png';
import keylogs from '../assets/images/keylogs.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/anijam99/medisort" target="_blank" rel="noreferrer"><img src={medisort} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/anijam99/medisort" target="_blank" rel="noreferrer"><h2>Medisort</h2></a>
                <p>A simple Python GUI tool for rapid manual sorting/tagging of large collections of images or videos into custom folders.</p>
            </div>
            <div className="project">
                <a href="https://github.com/anijam99/keylogs" target="_blank" rel="noreferrer"><img src={keylogs} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/anijam99/keylogs" target="_blank" rel="noreferrer"><h2>Keylogs</h2></a>
                <p>A simple keylogger project written in C.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;