import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-text-main scroll-smooth">
      {/* Floating Glassmorphism Navbar */}
      <Navbar />

      {/* 1. Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* 2. Internship Experience Timeline */}
      <section id="experience">
        <Experience />
      </section>

      {/* 3. Technical Skills Playground */}
      <section id="skills">
        <TechnicalSkills />
      </section>

      {/* 4. 3D Projects Showcase */}
      <section id="projects">
        <Projects />
      </section>

      {/* 5. Contact Form Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;