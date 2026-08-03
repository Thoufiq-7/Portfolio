import React, { useState, useEffect, useRef } from "react";
import { Mail, MapPin, Send, Code2, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Triggers the sequence when contact section enters viewport
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0a0a0a] text-white py-24 px-6 font-inter overflow-hidden border-t border-white/5"
    >
      {/* Background Ambient Lighting */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-red-900/15 rounded-full blur-[180px]" />

      <div className="relative max-w-6xl mx-auto space-y-16">
        
        {/* Step 1: Section Header (Appears First - Delay 0ms) */}
        <div
          className={`text-center space-y-3 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-mono text-xs tracking-[0.25em] text-accent-red uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-text-main tracking-tight uppercase">
            Let's Build <span className="text-bg-red-dark">Together</span>
          </h2>
          <p className="text-text-muted text-sm max-w-md mx-auto">
            Open for software engineering roles, hackathon collaborations, and
            full-stack projects. Drop a message!
          </p>
          <div className="w-16 h-[2px] bg-accent-red mx-auto mt-2" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Side Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Step 2: Direct Contact Card (Appears Second - Delay 250ms) */}
            <div
              className={`p-6 rounded-2xl bg-gradient-to-br from-red-950/30 via-[#0d0d0d] to-black border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)] space-y-6 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: isVisible ? "250ms" : "0ms" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-red/10 border border-accent-red/30 flex items-center justify-center text-accent-red">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider block">
                    Direct Mail
                  </span>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-text-main font-semibold hover:text-accent-red transition-colors"
                  >
                    mohammedthoufiq527@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-red/10 border border-accent-red/30 flex items-center justify-center text-accent-red">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider block">
                    Location
                  </span>
                  <span className="text-text-main font-semibold">
                    Chennai, India
                  </span>
                </div>
              </div>
            </div>

            {/* Step 3: Social Links Card (Appears Third - Delay 500ms) */}
            <div
              className={`p-6 rounded-2xl bg-gradient-to-br from-red-950/20 via-[#0d0d0d] to-black border border-white/10 space-y-4 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
            >
              <span className="font-mono text-xs text-accent-red uppercase tracking-widest block">
                // Connect Online
              </span>

              <div className="grid grid-cols-3 gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/Thoufiq-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-accent-red/50 hover:bg-accent-red/10 transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 fill-text-muted group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span className="font-mono text-[11px] text-text-muted group-hover:text-white flex items-center gap-0.5">
                    GitHub{" "}
                    <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/mohammed-thoufiq-734001320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-accent-red/50 hover:bg-accent-red/10 transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 fill-text-muted group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="font-mono text-[11px] text-text-muted group-hover:text-white flex items-center gap-0.5">
                    LinkedIn{" "}
                    <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                  </span>
                </a>

                {/* LeetCode */}
                <a
                  href="https://leetcode.com/u/md_thoufiq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-accent-red/50 hover:bg-accent-red/10 transition-all duration-300 group"
                >
                  <Code2 className="w-5 h-5 text-text-muted group-hover:text-white transition-colors" />
                  <span className="font-mono text-[11px] text-text-muted group-hover:text-white flex items-center gap-0.5">
                    LeetCode{" "}
                    <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                  </span>
                </a>
              </div>
            </div>

          </div>

          {/* Step 4: Interactive Form (Appears Fourth - Delay 750ms) */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: isVisible ? "750ms" : "0ms" }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-gradient-to-br from-red-950/30 via-[#0d0d0d] to-black border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)] space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-text-muted block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-text-main placeholder-text-muted/40 font-mono text-sm focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-all"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-text-muted block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-text-main placeholder-text-muted/40 font-mono text-sm focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-all"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider text-text-muted block">
                  Message
                </label>
                <textarea
                  required
                  rows="5"
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-text-main placeholder-text-muted/40 font-mono text-sm focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-mono text-xs uppercase tracking-widest bg-accent-red text-white font-bold border border-accent-red shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:bg-bg-red-dark hover:border-bg-red-dark hover:shadow-[0_0_30px_rgba(220,38,38,0.7)] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <span>Message Sent Successfully!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}