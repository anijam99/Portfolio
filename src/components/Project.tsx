import React from "react";
import medisort from '../assets/images/medisort.png';
import keylogs from '../assets/images/keylogs.png';
import apifybloomberg from '../assets/images/apify-bloomberg.png';
import harry from '../assets/images/harry-text.png';
import ibkr from '../assets/images/ibkr.png';
import foodClassification from '../assets/images/food-classification.png';
import polyfintech100 from '../assets/images/polyfintech100.png';
import huaweiNus from '../assets/images/huawei-nus.png';
import mldaHackathon from '../assets/images/mlda-hackathon.png';
import '../assets/styles/Project.scss';

function Project() {
    const projects = [
        {
            title: "Apify Bloomberg Scraper",
            description: "Real-time Bloomberg data scraper built with Apify to extract and structure market data for downstream analysis.",
            image: apifybloomberg,
            link: "https://github.com/anijam99/Bloomberg-Real-Time-Scraper-With-Apify",
        },
        {
            title: "IBKR Trading Bot Boilerplate",
            description: "Boilerplate for building trading bots using the Interactive Brokers API, with example strategies and execution templates.",
            image: ibkr,
            link: "https://github.com/anijam99/ibkr-trading-bot-boilerplate",
        },
        {
            title: "Harry Potter Text Generation Model",
            description: "A generative text model fine-tuned to produce Harry Potter–style passages for experimentation and demos.",
            image: harry,
            link: "https://github.com/anijam99/Harry-Potter-Text-Generation-Model",
        },
        {
            title: "Medisort",
            description: "A Python GUI tool for rapid manual sorting and tagging of large collections of images or videos into custom folders.",
            image: medisort,
            link: "https://github.com/anijam99/medisort",
        },
        {
            title: "Keylogs",
            description: "A compact keylogger written in C used for learning low-level input handling and system hooks (educational only).",
            image: keylogs,
            link: "https://github.com/anijam99/keylogs",
        },
        {
            title: "Deep Learning Food Classification",
            description: "Convolutional model for multi-class food image classification developed as a school project.",
            image: foodClassification,
            link: "https://github.com/anijam99/Deep-Learning-Food-Classification/tree/main",
        },
        {
            title: "PolyFintech 100 API Hackathon 2023",
            description: "Runner-up Winner in the PayPal RegTech category at PolyFintech100 for retail fraud detection.",
            image: polyfintech100,
            link: "https://github.com/anijam99/PolyFintech-100-API-Hackathon-2023-",
        },
        {
            title: "Huawei–NUS Innovation Challenge 2023",
            description: "Stock trading model built for the Huawei–NUS innovation challenge, focusing on feature engineering and backtesting.",
            image: huaweiNus,
            link: "https://github.com/anijam99/Huawei--NUS-Innovation-Challenge-for-stock-trading-model?tab=readme-ov-file",
        },
        {
            title: "NTU Machine Learning and Data Analytics (MLDA) Hackathon 2022",
            description: "Nominated hackathon entry combining lightweight ML techniques for scam detection.",
            image: mldaHackathon,
            link: "https://github.com/anijam99/MLDA-Hackathon-2022-Pinocchio/tree/main",
        },
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