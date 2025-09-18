import React, { useState } from "react";
import medisort from '../assets/images/medisort.png';
import keylogs from '../assets/images/keylogs.png';
import '../assets/styles/RecyclerProject.scss';

function RecyclerProject() {
    const projects = [
        {
            id: 1,
            title: "Medisort",
            description: "A simple Python GUI tool for rapid manual sorting/tagging of large collections of images or videos into custom folders.",
            image: medisort,
            link: "https://github.com/anijam99/medisort"
        },
        {
            id: 2,
            title: "Keylogs",
            description: "A simple keylogger project written in C.",
            image: keylogs,
            link: "https://github.com/anijam99/keylogs"
        }
        // Add more projects here as needed
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentProject = projects[currentIndex];

    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="project-carousel">
                <button className="carousel-btn prev-btn" onClick={goToPrevious}>
                    &#8249;
                </button>
                
                <div className="project-slide">
                    <div className="project">
                        <a href={currentProject.link} target="_blank" rel="noreferrer">
                            <img src={currentProject.image} className="zoom" alt="thumbnail" width="100%"/>
                        </a>
                        <a href={currentProject.link} target="_blank" rel="noreferrer">
                            <h2>{currentProject.title}</h2>
                        </a>
                        <p>{currentProject.description}</p>
                    </div>
                </div>

                <button className="carousel-btn next-btn" onClick={goToNext}>
                    &#8250;
                </button>
            </div>

            <div className="carousel-indicators">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>

            <div className="project-counter">
                {currentIndex + 1} of {projects.length}
            </div>
        </div>
    );
}

export default RecyclerProject;