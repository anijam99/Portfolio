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
        },
        // Add a third project for better demonstration
        {
            id: 3,
            title: "Sample Project",
            description: "Another project description for demonstration purposes.",
            image: medisort, // Using same image for now
            link: "https://github.com/anijam99/sample"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToPrevious = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? projects.length - 1 : prevIndex - 1
            );
            setIsTransitioning(false);
        }, 150);
    };

    const goToNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === projects.length - 1 ? 0 : prevIndex + 1
            );
            setIsTransitioning(false);
        }, 150);
    };

    const goToSlide = (index:  number) => {
        if (isTransitioning || index === currentIndex) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsTransitioning(false);
        }, 150);
    };

    // Helper function to get the correct project index (handles wrapping)
    const getProjectIndex = (offset: number) => {
        const index = currentIndex + offset;
        if (index < 0) return projects.length + index;
        if (index >= projects.length) return index - projects.length;
        return index;
    };

    const getVisibleProjects = () => {
        return [
            { project: projects[getProjectIndex(-1)], position: 'left' },
            { project: projects[getProjectIndex(0)], position: 'center' },
            { project: projects[getProjectIndex(1)], position: 'right' }
        ];
    };

    return (
        <div className="projects-container" id="projects">
            <h1>School Projects</h1>
            <div className="project-carousel">
                <button className="carousel-btn prev-btn" onClick={goToPrevious}>
                    &#8249;
                </button>
               
                <div className={`carousel-track ${isTransitioning ? 'transitioning' : ''}`}>
                    {getVisibleProjects().map(({ project, position }, index) => (
                        <div 
                            key={`${project.id}-${position}`}
                            className={`project-slide ${position}`}
                            onClick={() => position !== 'center' && goToSlide(getProjectIndex(position === 'left' ? -1 : 1))}
                        >
                            <div className="project">
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    <img src={project.image} className="zoom" alt="thumbnail" width="100%"/>
                                </a>
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    <h2>{project.title}</h2>
                                </a>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
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
                        onClick={() => goToSlide(index)}
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