import React, { useState } from "react";
import { 
  Code2, 
  Database, 
  Layers, 
  Terminal, 
  Cpu, 
  Server, 
  Globe, 
  Flame, 
  Workflow, 
  Box, 
  Bot, 
  GitBranch 
} from "lucide-react";

const skillCategories = ["All", "Core & Language", "Web & MERN", "AI / ML & Data", "Tools & Cloud"];

const skills = [
  // Core & Languages
  { name: "Java (OOP)", category: "Core & Language", icon: Code2, color: "from-orange-500 to-red-600", tag: "Expert" },
  { name: "Data Structures", category: "Core & Language", icon: Cpu, color: "from-red-500 to-rose-700", tag: "Core" },
  { name: "Python", category: "Core & Language", icon: Terminal, color: "from-yellow-500 to-emerald-600", tag: "Advanced" },
  
  // Web & MERN
  { name: "React.js", category: "Web & MERN", icon: Globe, color: "from-cyan-400 to-blue-600", tag: "Frontend" },
  { name: "Node.js & Express", category: "Web & MERN", icon: Server, color: "from-emerald-500 to-green-700", tag: "Backend" },
  { name: "MongoDB", category: "Web & MERN", icon: Database, color: "from-green-500 to-emerald-800", tag: "Database" },
  { name: "Tailwind CSS", category: "Web & MERN", icon: Layers, color: "from-sky-400 to-indigo-600", tag: "Styling" },
  { name: "Python Flask", category: "Web & MERN", icon: Flame, color: "from-red-600 to-slate-800", tag: "Backend" },
  
  // AI / ML & Data
  { name: "Machine Learning", category: "AI / ML & Data", icon: Bot, color: "from-purple-500 to-indigo-700", tag: "Analytics" },
  { name: "Data Pipelines", category: "AI / ML & Data", icon: Workflow, color: "from-pink-500 to-rose-700", tag: "ETL" },
  
  // Tools & Cloud
  { name: "Firebase", category: "Tools & Cloud", icon: Flame, color: "from-amber-400 to-orange-600", tag: "BaaS" },
  { name: "Git / GitHub", category: "Tools & Cloud", icon: GitBranch, color: "from-red-500 to-orange-600", tag: "Version Control" },
];

export default function TechnicalSkills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section className="relative w-full bg-bg-dark py-24 px-6 font-inter overflow-hidden border-t border-white/5">
      {/* Background ambient light */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-900/10 rounded-full blur-[180px]" />

      <div className="relative max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="font-mono text-xs tracking-[0.25em] text-accent-red uppercase">
            Technical Playground
          </span>
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-text-main tracking-tight uppercase">
            Skills & <span className="text-bg-red-dark">Technologies</span>
          </h2>
          
          <div className="w-16 h-[2px] bg-accent-red mx-auto mt-2" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-accent-red text-white border border-accent-red shadow-[0_0_20px_rgba(220,38,38,0.5)] scale-105"
                  : "bg-white/[0.03] text-text-muted border border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Playful Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 pt-6">
          {filteredSkills.map((skill, idx) => {
            const Icon = skill.icon;
            const isHovered = hoveredSkill === skill.name;

            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br from-red-950/20 via-[#0d0d0d] to-black 
                  border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.8)] 
                  cursor-pointer select-none transition-all duration-500 ease-out
                  hover:-translate-y-3 hover:scale-105 hover:border-accent-red/60 hover:shadow-[0_0_35px_rgba(220,38,38,0.35)]`}
              >
                {/* Glowing Background Radial on Hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-xl pointer-events-none`}
                />

                {/* Top Skill Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-white/10 bg-white/[0.03] text-text-muted group-hover:border-accent-red/40 group-hover:text-white transition-colors">
                    {skill.tag}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-accent-red opacity-40 group-hover:opacity-100 group-hover:shadow-[0_0_8px_rgba(220,38,38,1)] transition-all" />
                </div>

                {/* Interactive Logo Container */}
                <div className="relative flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-accent-red/50 group-hover:bg-accent-red/10 transition-all duration-300">
                  <Icon
                    className={`w-7 h-7 text-white/80 group-hover:text-white transition-transform duration-500 ${
                      isHovered ? "scale-125 rotate-6 text-accent-red" : ""
                    }`}
                  />
                </div>

                {/* Skill Name */}
                <h3 className="font-oswald text-lg font-bold text-text-main uppercase tracking-wide group-hover:text-accent-red transition-colors">
                  {skill.name}
                </h3>
                <p className="font-mono text-[11px] text-text-muted mt-1 opacity-60 group-hover:opacity-100 transition-opacity">
                  {skill.category}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}