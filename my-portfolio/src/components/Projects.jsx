import React, { useState, useRef } from "react";
import auraImage from "../assets/AuraEventz.png";

// Import your actual project images here when ready
// import auraImage from '../assets/auraeventz-mockup.png';
// import neuroImage from '../assets/neurolearn-mockup.png';
// import stockImage from '../assets/smartstock-mockup.png';
// import cliImage from '../assets/cli-mockup.png';

const projects = [
  {
    title: "AuraEventz",
    role: "Full-Stack Web App",
    desc: "A modular event management application connecting event visionaries with a skilled workforce. Built with a robust backend and a dynamic frontend.",
    tags: ["Python Flask", "Tailwind CSS", "Firebase"],
    img: auraImage,
    live: "https://auraeventz.onrender.com/",
    code: "https://github.com/Thoufiq-7/AuraEventz_",
  },
  {
    title: "NeuroLearn",
    role: "Recommendation Engine",
    desc: "A personalized educational recommendation platform implementing hybrid filtering models designed to map user skill gaps.",
    tags: ["Hybrid Filtering", "React", "Glassmorphism"],
    img: "https://picsum.photos/seed/neuro/1000/900",
    live: "#",
    code: "#",
  },
  {
    title: "SmartStock AI",
    role: "ML Dashboard",
    desc: "A time-series machine learning forecasting dashboard utilizing predictive analytics to optimize supply chain inventory procurement.",
    tags: ["Python", "Predictive Analytics", "Data Pipelines"],
    img: "https://picsum.photos/seed/smartstock/1000/900",
    live: "#",
    code: "#",
  },
  {
    title: "Command Parser",
    role: "Terminal Utility",
    desc: "A command-line interface application executing automated text interpretation through modular command mapping.",
    tags: ["Java", "OOP", "Custom Data Structures"],
    img: "https://picsum.photos/seed/cli/1000/900",
    live: "#",
    code: "#",
  },
];

const STACK_OFFSETS = [
  { x: 0, y: 0, r: 0, s: 1, o: 1 },
  { x: 16, y: 16, r: -2.4, s: 0.965, o: 1 },
  { x: 30, y: 30, r: 2.6, s: 0.93, o: 1 },
  { x: 42, y: 42, r: -1.6, s: 0.9, o: 1 },
  { x: 52, y: 52, r: 1.2, s: 0.87, o: 1 },
];

function transformFor(pos) {
  const m = STACK_OFFSETS[Math.min(pos, STACK_OFFSETS.length - 1)];
  return `translate(${m.x}px, ${m.y}px) rotate(${m.r}deg) scale(${m.s})`;
}

export default function Projects() {
  const [order, setOrder] = useState(projects.map((_, i) => i));
  const animating = useRef(false);
  const [flying, setFlying] = useState(null);

  const posOf = (key) => order.indexOf(key);

  const goNext = () => {
    if (animating.current) return;
    animating.current = true;
    const topKey = order[0];
    setFlying({ key: topKey, dir: "next" });

    setTimeout(() => {
      setOrder((prev) => [...prev.slice(1), prev[0]]);
      setFlying(null);
      animating.current = false;
    }, 560);
  };

  const goPrev = () => {
    if (animating.current) return;
    animating.current = true;
    const backKey = order[order.length - 1];
    setFlying({ key: backKey, dir: "prev" });

    setOrder((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);

    setTimeout(() => {
      setFlying(null);
      animating.current = false;
    }, 560);
  };

  const jumpTo = (targetIdx) => {
    if (animating.current) return;
    const steps = order.indexOf(targetIdx);
    if (steps <= 0) return;
    let count = 0;
    const tick = () => {
      if (count >= steps) return;
      goNext();
      count += 1;
      setTimeout(tick, 600);
    };
    tick();
  };

  return (
    <section className="relative w-full bg-bg-dark py-24 px-6 overflow-hidden font-inter">
      {/* Background ambient glow accents */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-red-700/10 rounded-full blur-[140px]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-accent-red uppercase">
              Selected Work
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-oswald font-bold text-text-main tracking-tight uppercase">
              Proj<span className="text-bg-red-dark">ects</span>
            </h2>
          </div>
          <p className="text-text-muted text-sm max-w-xs">
            {String(order[0] + 1).padStart(2, "0")} of{" "}
            {String(projects.length).padStart(2, "0")} — cycle through with the
            arrows or dots below.
          </p>
        </div>

        {/* Stage */}
        <div className="relative w-full h-[560px] md:h-[480px]">
          {projects.map((p, key) => {
            const pos = posOf(key);
            const isFlyingNext = flying?.key === key && flying.dir === "next";
            const isFlyingPrev = flying?.key === key && flying.dir === "prev";

            let style = { transform: transformFor(pos), zIndex: 50 - pos };
            if (isFlyingNext) {
              style = {
                transform: "translate(120%, 26px) rotate(11deg)",
                opacity: 0,
                zIndex: 60,
                transition:
                  "transform .56s cubic-bezier(.5,-0.2,.6,1), opacity .5s ease",
              };
            } else if (isFlyingPrev) {
              style = {
                transform: transformFor(0),
                zIndex: 60,
                transition:
                  "transform .56s cubic-bezier(.22,.9,.32,1), opacity .5s ease",
              };
            }

            // Glow style logic based on active vs stacked position
            const isFrontCard = pos === 0;

            return (
              <article
                key={key}
                style={style}
                className={`absolute inset-0 grid grid-cols-1 md:grid-cols-[1fr_1.1fr] rounded-2xl overflow-hidden
                  bg-gradient-to-br from-black via-[#120505] to-red-500/45 transition-all duration-500
                  ${
                    isFrontCard
                      ? /* FRONT CARD: High intensity 360-degree crimson glow + glowing crimson border */
                        "border border-red-600/50 shadow-[0_0_40px_rgba(220,38,38,0.35),0_0_80px_rgba(220,38,38,0.15)]"
                      : /* BACK STACK CARDS: Lighter ambient glow bleed all around */
                        "border border-red-900/30 shadow-[0_0_20px_rgba(220,38,38,0.12)] pointer-events-none"
                  }
                  ${!isFlyingNext && !isFlyingPrev ? "transition-transform duration-[620ms] ease-[cubic-bezier(.22,.9,.32,1)]" : ""}
                `}
              >
                {/* 360-degree subtle red edge gradient line around all inner edges */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-red-500/20" />

                {/* Left Side Content */}
                <div
                  className={`relative z-10 flex flex-col justify-center p-8 md:p-12 order-2 md:order-1 transition-opacity duration-300 ${
                    pos === 0 ? "opacity-100 delay-150" : "opacity-0"
                  }`}
                >
                  <span className="font-mono text-xs text-accent-red tracking-widest mb-4">
                    {String(key + 1).padStart(2, "0")} /{" "}
                    {String(projects.length).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted mb-3">
                    {p.role}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-oswald font-bold text-text-main uppercase leading-tight mb-4">
                    {p.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-[38ch]">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] uppercase tracking-wide px-3 py-1 rounded-full border border-white/10 text-white/50 bg-white/[0.02]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-5 mt-6">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-main border-b border-accent-red pb-1 hover:text-accent-red hover:border-bg-red-dark transition-colors"
                    >
                      View live
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </a>
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-text-muted border-b border-white/15 pb-1 hover:text-white/80 hover:border-white/40 transition-colors"
                    >
                      Source
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Right Side 3D Image */}
                {/* NEW CODE (Bigger Image) */}
                <div
                  className={`relative order-1 md:order-2 h-full w-full flex items-center justify-center p-0 overflow-hidden transition-opacity duration-300 ${
                    pos === 0 ? "opacity-100 delay-150" : "opacity-0"
                  }`}
                >
                  <img
                    src={p.img}
                    alt={`${p.title} preview`}
                    className="w-[115%] h-[115%] max-w-none object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={goPrev}
            aria-label="Previous project"
            className="w-11 h-11 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-md text-white/70
              flex items-center justify-center hover:bg-accent-red/20 hover:border-accent-red/50 hover:text-white
              transition-colors active:scale-95"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => jumpTo(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`h-[2px] rounded-full transition-all duration-300 ${
                  order[0] === i
                    ? "w-8 bg-accent-red"
                    : "w-5 bg-white/15 hover:bg-white/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            aria-label="Next project"
            className="w-11 h-11 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-md text-white/70
              flex items-center justify-center hover:bg-accent-red/20 hover:border-accent-red/50 hover:text-white
              transition-colors active:scale-95"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
