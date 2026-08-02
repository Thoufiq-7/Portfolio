import React from "react";
// Make sure to use your correct image path here
import heroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="relative w-screen h-screen px-[3rem] py-[2rem] overflow-hidden bg-bg-dark text-text-main font-inter">
      {/* Giant Background Text */}
      {/* Giant Background Text */}
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-y-[2.9] font-oswald text-[16vw] font-semibold text-bg-red-dark leading-none z-[1] select-none tracking-tight whitespace-nowrap w-full text-center">
        PORTFOLIO
      </div>

      {/* Center Portrait Overlays the Text */}
      {/* Removed the height from this div entirely */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[2] pointer-events-none flex items-end">
        {/* Added max-w-none and put the h-[...] directly on the image */}
        <img
          src={heroImage}
          alt="Mohammed Thoufiq"
          className="h-[72vh] w-auto max-w-none object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
        />
      </div>

      {/* Pinned Bottom Left Content */}
      <div className="absolute bottom-[5%] left-[4%] z-10 max-w-[320px]">
        <div className="font-caveat text-[3.5rem] text-[#e0e0e0] mb-[-18px] -rotate-[5deg]">
          Hello, I'm
        </div>
        <h1 className="font-oswald text-[5.5rem] font-bold leading-[0.9] uppercase tracking-[-1px] mb-[1rem]">
          Mohammed
          <br />
          Thoufiq
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
      <div className="absolute top-[50%] right-[4%] -translate-y-1/2 z-10 flex items-center gap-[15px] max-w-[180px]">
        <div className="w-[35px] h-[35px] border border-white/20 rounded-full flex justify-center items-center text-[0.9rem] text-text-muted shrink-0">
          ✦
        </div>
        <div className="text-text-muted text-[0.7rem] leading-[1.4]">
          Turning ideas into powerful digital experiences.
        </div>
      </div>

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
