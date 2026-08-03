import React, { useState, useEffect } from "react";
// Make sure to use your correct image path here
import heroImage from "../assets/hero.png";

const Hero = () => {
  const fullTextGreeting = "Hello, I'm";
  const fullTextName = "Mohammed Thoufiq";

  const [typedGreeting, setTypedGreeting] = useState("");
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    let isDeleting = false;
    let greetingIdx = 0;
    let nameIdx = 0;
    let timeoutId;

    const animateLoop = () => {
      if (!isDeleting) {
        // --- TYPING PHASE ---
        if (greetingIdx < fullTextGreeting.length) {
          greetingIdx++;
          setTypedGreeting(fullTextGreeting.slice(0, greetingIdx));
          timeoutId = setTimeout(animateLoop, 60);
        } else if (nameIdx < fullTextName.length) {
          nameIdx++;
          setTypedName(fullTextName.slice(0, nameIdx));
          timeoutId = setTimeout(animateLoop, 80);
        } else {
          // Pause at full text before deleting
          timeoutId = setTimeout(() => {
            isDeleting = true;
            animateLoop();
          }, 2500);
        }
      } else {
        // --- DELETING PHASE ---
        if (nameIdx > 0) {
          nameIdx--;
          setTypedName(fullTextName.slice(0, nameIdx));
          timeoutId = setTimeout(animateLoop, 40);
        } else if (greetingIdx > 0) {
          greetingIdx--;
          setTypedGreeting(fullTextGreeting.slice(0, greetingIdx));
          timeoutId = setTimeout(animateLoop, 30);
        } else {
          // Pause briefly before typing again
          isDeleting = false;
          timeoutId = setTimeout(animateLoop, 600);
        }
      }
    };

    animateLoop();

    return () => clearTimeout(timeoutId);
  }, []);

  const portfolioLetters = "PORTFOLIO".split("");

  return (
    <div className="relative w-screen h-screen px-[3rem] py-[2rem] overflow-hidden bg-bg-dark text-text-main font-inter">
      {/* CSS Animations */}
      <style>{`
        /* Floating Portrait Motion */
        @keyframes floatPortrait {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-18px);
          }
        }
        .animate-float {
          animation: floatPortrait 4.5s ease-in-out infinite;
        }

        /* Blinking Typing Cursor */
        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .typing-cursor {
          display: inline-block;
          width: 3px;
          height: 0.8em;
          background-color: #e0e0e0;
          margin-left: 4px;
          vertical-align: middle;
          animation: blinkCursor 0.8s infinite;
        }

        /* Sequential Michael Jackson Flow Glow (P -> O) */
        @keyframes mjFlowGlow {
          0%, 100% {
            color: var(--color-bg-red-dark, #3b0707);
            text-shadow: none;
            transform: scale(1);
          }
          15% {
            color: #ff3333;
            text-shadow: 0 0 25px rgba(239, 68, 68, 0.9), 0 0 50px rgba(220, 38, 38, 0.6);
            transform: scale(1.03);
          }
        }
        .mj-letter-glow {
          display: inline-block;
          animation: mjFlowGlow 2.8s ease-in-out infinite;
        }
      `}</style>

      {/* Giant Background Text with MJ Sequential Flow Step (P -> O) */}
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-y-[2.9] font-oswald text-[16vw] font-semibold text-bg-red-dark leading-none z-[1] select-none tracking-tight whitespace-nowrap w-full text-center">
        {portfolioLetters.map((char, index) => (
          <span
            key={index}
            className="mj-letter-glow"
            style={{
              animationDelay: `${index * 0.18}s`, // Staggered delay for P to O flow step
            }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Center Portrait Overlays the Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[2] pointer-events-none flex items-end">
        <img
          src={heroImage}
          alt="Mohammed Thoufiq"
          className="h-[72vh] w-auto max-w-none object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] animate-float"
        />
      </div>

      {/* Pinned Bottom Left Content */}
      <div className="absolute bottom-[5%] left-[4%] z-10 max-w-[320px]">
        {/* Infinite Typewriter Greeting */}
        <div className="font-caveat text-[3.5rem] text-[#e0e0e0] mb-[-18px] -rotate-[5deg] min-h-[3.8rem]">
          {typedGreeting}
          {typedGreeting.length < fullTextGreeting.length && (
            <span className="typing-cursor" />
          )}
        </div>

        {/* Infinite Typewriter Name */}
        <h1 className="font-oswald text-[5.5rem] font-bold leading-[0.9] uppercase tracking-[-1px] mb-[1rem] min-h-[10rem]">
          {typedName.split(" ")[0]}
          {typedName.includes(" ") && <br />}
          {typedName.split(" ")[1] || ""}
          {typedGreeting.length === fullTextGreeting.length && (
            <span className="typing-cursor" />
          )}
        </h1>

        <div className="text-accent-red font-oswald text-[1.1rem] font-medium uppercase leading-[1.3] mb-[1rem] tracking-[1px]">
          WEB DESIGNER &<br />
          MERN STACK DEVELOPER
        </div>

        <p className="text-text-muted text-[0.8rem] leading-[1.6] mb-[1.5rem]">
          I design and build complex full-stack web applications and scalable
          backend architectures. Passionate about algorithmic problem-solving
          and details that make a difference.
        </p>

        <div className="text-[0.75rem] font-semibold text-text-muted flex items-center gap-[8px] tracking-[1px]">
          <span>🌐</span> AVAILABLE WORLDWIDE
        </div>
      </div>

      {/* Pinned Middle Right Badge */}
      
      

      {/* Pinned Bottom Right Stats */}
      <div className="absolute bottom-[5%] right-[4%] z-10 flex flex-col gap-[1.5rem]">
        <div className="flex items-center gap-[15px]">
          <div className="font-oswald text-[3rem] font-bold text-accent-red leading-none w-[60px] text-left">
            2+
          </div>
          <div className="text-[0.65rem] text-text-muted font-semibold uppercase leading-[1.4] tracking-[1px]">
            Internships
            <br />
            Completed
          </div>
        </div>

        <div className="flex items-center gap-[15px]">
          <div className="font-oswald text-[3rem] font-bold text-accent-red leading-none w-[60px] text-left">
            5+
          </div>
          <div className="text-[0.65rem] text-text-muted font-semibold uppercase leading-[1.4] tracking-[1px]">
            FULL-STACK
            <br />
            PROJECTS
          </div>
        </div>

        <div className="flex items-center gap-[15px]">
          <div className="font-oswald text-[3rem] font-bold text-accent-red leading-none w-[60px] text-left">
            2+
          </div>
          <div className="text-[0.65rem] text-text-muted font-semibold uppercase leading-[1.4] tracking-[1px]">
            HACKATHONS
            <br />
            ATTENDED
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;