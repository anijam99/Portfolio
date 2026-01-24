import React, {useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
  About,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className="main-container dark-mode">
        <Navigation />
        <div className="page-wrapper">
            <FadeIn transitionDuration={700}>
                <Main/>
                <Project/>
                <Timeline/>
                <Expertise/>
                <About/>
                <Contact/>
            </FadeIn>
        </div>
        <Footer />
    </div>
    );
}

export default App;