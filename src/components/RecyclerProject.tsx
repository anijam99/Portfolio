import React, { useState, useCallback, useEffect, useRef } from "react";
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
            link: "https://github.com/anijam99/medisort",
            tags: ["Python", "GUI", "Productivity"]
        },
        {
            id: 2,
            title: "Keylogs",
            description: "A simple keylogger project written in C for educational purposes.",
            image: keylogs,
            link: "https://github.com/anijam99/keylogs",
            tags: ["C", "Security", "Low-level"]
        },
        {
            id: 3,
            title: "Portfolio",
            description: "This portfolio website built with React and TypeScript featuring modern UI/UX design.",
            image: medisort,
            link: "https://github.com/anijam99/portfolio",
            tags: ["React", "TypeScript", "SCSS"]
        },
        {
            id: 4,
            title: "Data Scraper",
            description: "A web scraping tool built with Python and Selenium for automated data collection.",
            image: keylogs,
            link: "https://github.com/anijam99",
            tags: ["Python", "Selenium", "Automation"]
        },
        {
            id: 5,
            title: "API Wrapper",
            description: "A lightweight API wrapper library for streamlined backend integrations.",
            image: medisort,
            link: "https://github.com/anijam99",
            tags: ["Python", "REST", "API"]
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(Math.floor(projects.length / 2));
    const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const slideRef = useRef<HTMLDivElement | null>(null);
    const [slideSize, setSlideSize] = useState({ width: 340, gap: 20 });
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const minSwipeDistance = 50;

    const goToPrevious = useCallback(() => {
        if (isAnimating) return;
        setSlideDirection('right');
        setIsAnimating(true);
        // use double rAF to ensure smooth frame timing before updating index
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === 0 ? projects.length - 1 : prevIndex - 1
                );
            });
        });
    }, [isAnimating, projects.length]);

    const goToNext = useCallback(() => {
        if (isAnimating) return;
        setSlideDirection('left');
        setIsAnimating(true);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === projects.length - 1 ? 0 : prevIndex + 1
                );
            });
        });
    }, [isAnimating, projects.length]);

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentIndex) return;
        const direction = index > currentIndex ? 'left' : 'right';
        setSlideDirection(direction);
        setIsAnimating(true);
        requestAnimationFrame(() => requestAnimationFrame(() => setCurrentIndex(index)));
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') goToPrevious();
            if (e.key === 'ArrowRight') goToNext();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [goToPrevious, goToNext]);

    // measure slide width + gap for accurate translate
    useEffect(() => {
        const measure = () => {
            if (!containerRef.current || !slideRef.current || !trackRef.current) return;
            const slideEl = slideRef.current;
            const trackEl = trackRef.current;
            const trackStyle = window.getComputedStyle(trackEl);
            const gap = parseFloat(trackStyle.columnGap || trackStyle.gap) || 20;
            setSlideSize({ width: slideEl.offsetWidth, gap });
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    // transitionend handler to toggle isAnimating off
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const onEnd = (e: TransitionEvent) => {
            if (e.propertyName !== 'transform') return;
            setIsAnimating(false);
            setSlideDirection(null);
        };
        track.addEventListener('transitionend', onEnd);
        return () => track.removeEventListener('transitionend', onEnd);
    }, []);

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) goToNext();
        if (isRightSwipe) goToPrevious();
    };

    const getProjectIndex = (offset: number) => {
        let index = currentIndex + offset;
        while (index < 0) index += projects.length;
        while (index >= projects.length) index -= projects.length;
        return index;
    };

    // Show 5 projects: far-left, left, center, right, far-right
    const getVisibleProjects = () => {
        return [
            { project: projects[getProjectIndex(-2)], position: 'far-left' },
            { project: projects[getProjectIndex(-1)], position: 'left' },
            { project: projects[getProjectIndex(0)], position: 'center' },
            { project: projects[getProjectIndex(1)], position: 'right' },
            { project: projects[getProjectIndex(2)], position: 'far-right' }
        ];
    };

    const handleSlideClick = (position: string) => {
        if (isAnimating) return;
        if (position === 'left' || position === 'far-left') {
            goToPrevious();
        } else if (position === 'right' || position === 'far-right') {
            goToNext();
        }
    };

    return (
        <div className="projects-container" id="projects">
            <h1>Other Projects</h1>
            <p className="section-subtitle">Some side projects I've worked on</p>
            
            <div 
                className="project-carousel"
                ref={containerRef}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <button 
                    className="carousel-btn prev-btn" 
                    onClick={goToPrevious}
                    aria-label="Previous project"
                    disabled={isAnimating}
                >
                    <span>‹</span>
                </button>
                
                <div className="carousel-viewport" ref={containerRef}>
                    <div
                        className="carousel-track"
                        ref={trackRef}
                        style={{
                            transform: (() => {
                                if (!containerRef.current) return 'translate3d(0,0,0)';
                                const containerWidth = containerRef.current.clientWidth;
                                const totalSlide = slideSize.width + slideSize.gap;
                                const centerOffset = containerWidth / 2 - slideSize.width / 2;
                                const translateX = centerOffset - currentIndex * totalSlide;
                                return `translate3d(${translateX}px,0,0)`;
                            })(),
                            transition: 'transform 0.48s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                        }}
                    >
                    {projects.map((project, index) => {
                        // compute minimal signed difference
                        let delta = index - currentIndex;
                        const half = Math.floor(projects.length / 2);
                        if (delta > half) delta -= projects.length;
                        if (delta < -half) delta += projects.length;
                        let positionClass = 'hidden';
                        if (delta === 0) positionClass = 'center';
                        else if (delta === -1) positionClass = 'left';
                        else if (delta === -2) positionClass = 'far-left';
                        else if (delta === 1) positionClass = 'right';
                        else if (delta === 2) positionClass = 'far-right';

                        return (
                            <div
                                key={`${project.id}-${index}`}
                                className={`project-slide ${positionClass}`}
                                onClick={() => handleSlideClick(positionClass)}
                                ref={index === 0 ? slideRef : null}
                            >
                                <div className="project">
                                    <div className="project-image-wrapper">
                                        {positionClass === 'center' ? (
                                            <a href={project.link} target="_blank" rel="noreferrer">
                                                <img src={project.image} className="zoom" alt={`${project.title} thumbnail`} />
                                            </a>
                                        ) : (
                                            <img src={project.image} alt={`${project.title} thumbnail`} />
                                        )}
                                    </div>
                                    <div className="project-content">
                                        {positionClass === 'center' ? (
                                            <a href={project.link} target="_blank" rel="noreferrer">
                                                <h2>{project.title}</h2>
                                            </a>
                                        ) : (
                                            <h2>{project.title}</h2>
                                        )}
                                        <p>{project.description}</p>
                                        <div className="project-tags">
                                            {project.tags.map((tag, idx) => (
                                                <span key={idx} className="tag">{tag}</span>
                                            ))}
                                        </div>
                                        {positionClass === 'center' && (
                                            <a href={project.link} target="_blank" rel="noreferrer" className="view-project-btn">
                                                View on GitHub →
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    </div>
                </div>
                <button 
                    className="carousel-btn next-btn" 
                    onClick={goToNext}
                    aria-label="Next project"
                    disabled={isAnimating}
                >
                    <span>›</span>
                </button>
            </div>

            <div className="carousel-indicators">
                {projects.map((project, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to ${project.title}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default RecyclerProject;