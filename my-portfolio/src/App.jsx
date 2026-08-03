import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-bg-dark min-h-screen text-text-main font-inter">
      <Navbar />
      <Hero />
      <Projects/>
    </div>
  );
}

export default App;