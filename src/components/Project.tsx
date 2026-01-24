import React from "react";
import medisort from '../assets/images/medisort.png';
import keylogs from '../assets/images/keylogs.png';
import '../assets/styles/Project.scss';

function Project() {
    const projects = [
        {
            title: "Medisort",
            description: "A simple Python GUI tool for rapid manual sorting/tagging of large collections of images or videos into custom folders.",
            image: medisort,
            link: "https://github.com/anijam99/medisort",
            tags: ["Python", "GUI", "Productivity"]
        },
        {
            title: "Keylogs",
            description: "A simple keylogger project written in C for educational purposes.",
            image: keylogs,
            link: "https://github.com/anijam99/keylogs",
            tags: ["C", "Security", "Low-level"]
        },
        {
            title: "Portfolio",
            description: "This portfolio website built with React and TypeScript featuring modern UI/UX design.",
            image: medisort,
            link: "https://github.com/anijam99/portfolio",
            tags: ["React", "TypeScript", "SCSS"]
        },
        {
            title: "Data Scraper",
            description: "A web scraping tool built with Python and Selenium for automated data collection.",
            image: keylogs,
            link: "https://github.com/anijam99",
            tags: ["Python", "Selenium", "Automation"]
        },
        {
            title: "API Wrapper",
            description: "A lightweight API wrapper library for streamlined backend integrations.",
            image: medisort,
            link: "https://github.com/anijam99",
            tags: ["Python", "REST", "API"]
        }
    ];

    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <p className="section-subtitle">Some of my more important projects in my development</p>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <img src={project.image} className="zoom" alt={project.title} width="100%"/>
                        </a>
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <h2>{project.title}</h2>
                        </a>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;