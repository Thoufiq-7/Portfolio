import React from 'react';

const Navbar = () => {
  return (
    // The outer nav tag fixes the position at the top center of the screen
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      
      {/* The Glassmorphism Container */}
      <div className="flex items-center justify-between px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
        
        {/* Left: Logo Area */}
        <a href="#home" className="font-oswald text-xl font-bold tracking-wider text-text-main uppercase">
          Dev<span className="text-accent-red">.</span>
        </a>

        {/* Center: Navigation Links (Hidden on mobile, visible on medium screens and up) */}
        <ul className="hidden md:flex items-center gap-10 font-inter text-sm font-medium text-text-muted">
          <li>
            <a href="#home" className="hover:text-text-main transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-text-main transition-colors duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-text-main transition-colors duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-text-main transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Right: Call to Action Button */}
        <a 
          href="#resume" 
          className="px-6 py-2.5 text-xs font-bold tracking-widest uppercase text-text-main bg-accent-red hover:bg-bg-red-dark border border-accent-red hover:border-bg-red-dark rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(217,26,26,0.3)] hover:shadow-[0_0_20px_rgba(217,26,26,0.6)]"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
