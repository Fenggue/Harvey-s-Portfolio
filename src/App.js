import React from 'react';
import './index.css';
import './style.css';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resources from './Resources';
import Contact from './components/Contact';

function App() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <div className="nav-row">
          <nav className="nav-links">
            <a href="#home">Home.</a>
            <a href="#about">About me.</a>
            <a href="#contact">Contacts.</a>
            <a href="#projects">Projects.</a>
          </nav>
          <a href="#resume" className="resume-link">Download Resume</a>
        </div>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-left">
          <h1>portfolio.</h1>
        </div>
        <div className="hero-right">
          <img src="/6188d905-c9ea-430c-b467-d0ca18d94c85.jpeg" alt="Portfolio" className="hero-photo" />
          <div className="hero-divider" />
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-left">
          <div className="about-image-wrapper">
            <div className="about-image" aria-hidden="true" />
          </div>
        </div>
        <div className="about-right">
          <h2>about me.</h2>
          <div className="about-copy">
            <p>
              My name is Harvey Sacpa, an aspiring digital artist based in Baguio City. I am currently pursuing a degree in Multimedia Arts at the University of the Cordilleras.
            </p>
            <p>
              Ever since I discovered my passion for creativity, I have developed a strong connection with art and design, which led me to pursue Multimedia Arts as my field of study.
            </p>
            <p>
              Through my journey, I continue to explore different forms of digital art and visual design, constantly improving my skills and expressing ideas through creative work.
            </p>
          </div>
        </div>
      </section>

      <main className="main-sections">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Resources />
        <Contact />
      </main>
    </div>
  );
}

export default App;
