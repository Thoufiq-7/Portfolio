import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      {/* The Glassmorphism Container */}
      <div className="flex items-center justify-between px-6 md:px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative">
        
        {/* Left: Logo Area */}
        <a href="#home" className="font-oswald text-xl font-bold tracking-wider text-text-main uppercase">
          Thoufiq<span className="text-accent-red">.</span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 font-inter text-xs font-medium text-text-muted uppercase tracking-wider">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-text-main hover:text-accent-red transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Resume CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-[11px] font-bold tracking-widest uppercase text-text-main bg-accent-red hover:bg-bg-red-dark border border-accent-red hover:border-bg-red-dark rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(217,26,26,0.3)] hover:shadow-[0_0_20px_rgba(217,26,26,0.6)]"
          >
            Resume
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-muted hover:text-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 p-6 bg-[#0d0d0d]/95 backdrop-blur-xl border border-white/10 rounded-2xl md:hidden shadow-[0_10px_30px_rgba(0,0,0,0.9)] flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm text-text-muted hover:text-accent-red uppercase tracking-wider transition-colors py-1"
              >
                // {link.name}
              </a>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;