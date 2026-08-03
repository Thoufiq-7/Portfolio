import React, { useEffect, useRef, useState } from "react";

const internships = [
  {
    period: "MAY 2025 — JUNE 2025",
    role: "Fullstack developer Intern",
    company: "Big-Si-Bucks pvt ltd",
    desc: "Collaborated on building real-time dashboard components and integrating authentication flows with Firebase and Cloud functions.",
    skills: ["JavaScript", "Firebase", "Node.js", "Glassmorphic UI"],
  },
  {
    period: "NOVEMBER 2025 — DECEMBER 2025",
    role: "AIML Intern",
    company: "Big-Si-Bucks pvt ltd",
    desc: "Engineered core machine learning models and automated data pipelines to analyze system metrics. Implemented time-series analytics to predict performance bottlenecks and optimize resource allocation.",
    skills: ["Python", "ML", "DL"],
  },
  {
    period: "MAY 2026 - JUNE 2026",
    role: "MERN STACK DEVELOPER",
    company: "Pantech-e-Learning",
    desc: "Implemented robust RESTful APIs with secure JWT authentication, responsive user interface state management using React hooks, and optimized MongoDB query indexing for low-latency data operations.",
    skills: ["React.js", "Node.js", "Express.js", "REST APIs"],
  },
];

// Helper Component for Scroll-Triggered Cards
function AnimatedCard({ item, idx, isEven }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggles visibility on AND off so animation repeats every scroll
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Triggers when 20% of card enters the viewport
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col md:flex-row items-center ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline Glow Node */}
      <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-bg-dark border-2 border-accent-red z-10 shadow-[0_0_15px_rgba(220,38,38,0.9)] hover:scale-125 hover:bg-accent-red transition-all duration-300" />

      {/* Content Card (Equal px-6 md:px-12 padding ensures equal distance from timeline dot on both sides) */}
      <div className="w-full md:w-1/2 pl-12 pr-4 md:px-12 py-4 overflow-hidden">
        <div
          className={`p-6 md:p-8 rounded-2xl bg-gradient-to-br from-red-950/40 via-[#0d0d0d] to-black border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:border-accent-red/50 
            transition-all duration-[1300ms] cubic-bezier(0.16, 1, 0.3, 1) ${
            isVisible
              ? "opacity-100 translate-x-0"
              : isEven
              ? "opacity-0 translate-x-[120%]" // Slides from right corner
              : "opacity-0 -translate-x-[120%]" // Slides from left corner
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="font-mono text-xs text-accent-red tracking-wider">
              {item.period}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-white/10 bg-white/[0.02] text-text-muted">
              Internship
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-oswald font-bold text-text-main uppercase">
            {item.role}
          </h3>
          <p className="text-sm font-mono text-text-muted mb-4">
            @ {item.company}
          </p>

          <p className="text-sm text-text-muted leading-relaxed mb-6">
            {item.desc}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2">
            {item.skills.map((s, i) => (
              <span
                key={i}
                className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-md bg-white/[0.03] border border-white/5 text-white/70"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Empty Spacer Column for Desktop Alignment */}
      <div className="hidden md:block md:w-1/2" />
    </div>
  );
}

export default function Experience() {
  return (
    <section className="relative w-full bg-bg-dark py-24 px-6 font-inter overflow-hidden border-t border-white/5">
      {/* Background ambient red lighting */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[160px]" />

      <div className="relative max-w-5xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="font-mono text-xs tracking-[0.25em] text-accent-red uppercase">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-text-main tracking-tight uppercase">
            Internship <span className="text-bg-red-dark">Experience</span>
          </h2>
          <div className="w-16 h-[2px] bg-accent-red mx-auto mt-2" />
        </div>

        {/* Zig-Zag Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-red-600/50 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {internships.map((item, idx) => (
              <AnimatedCard
                key={idx}
                item={item}
                idx={idx}
                isEven={idx % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}