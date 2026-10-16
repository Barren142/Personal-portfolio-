import React from 'react';
import { ArrowRight, Mail, Compass, Layers, Sparkles, Code2, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 bg-[#FFFFFF] overflow-hidden border-b border-[#E5E7EB]">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 pattern-grid-light opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Typographic Hierarchy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small professional label above headline */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#666666] font-mono py-1 px-3 bg-[#F7F7F7] border border-[#E5E7EB] rounded-full">
                {PERSONAL_INFO.heroLabel}
              </span>
            </div>

            {/* Prominent Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-[#111111] tracking-tight leading-[1.05] mb-4 font-display">
              {PERSONAL_INFO.name}
            </h1>

            {/* Main Headline */}
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#242424] tracking-tight mb-6 leading-snug">
              {PERSONAL_INFO.headline}
            </h2>

            {/* Exact Polished Introduction */}
            <p className="text-[#444444] text-base sm:text-lg leading-relaxed mb-9 max-w-2xl font-normal">
              {PERSONAL_INFO.introduction}
            </p>

            {/* Two Highly Visible CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              {/* PRIMARY BUTTON: Dominant black, generous padding, hover lift */}
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-7 py-4 text-sm font-semibold text-white bg-[#111111] hover:bg-[#242424] active:scale-98 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2.5 cursor-pointer group whitespace-nowrap"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-[#B8BCC2] group-hover:translate-x-1 transition-transform" />
              </button>

              {/* SECONDARY BUTTON: Crisp white with clearly visible black border */}
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-7 py-4 text-sm font-semibold text-[#111111] bg-white hover:bg-[#F7F7F7] border-2 border-[#111111] rounded-xl transition-all duration-200 flex items-center gap-2.5 cursor-pointer active:scale-98 whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-[#242424]" />
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Authentic Academic & Exploration Indicators */}
            <div className="pt-6 border-t border-[#E5E7EB] flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#666666]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#111111]" />
                <strong className="text-[#111111]">1st Year B.Tech</strong>
              </span>
              <span aria-hidden="true" className="text-[#B8BCC2]">·</span>
              <span>Data Science Focus</span>
              <span aria-hidden="true" className="text-[#B8BCC2]">·</span>
              <span className="text-[#242424]">3 Live Deployed Projects</span>
            </div>
          </div>

          {/* Right Column: Sophisticated Black, White, & Silver Layered Geometric Panel (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl bg-[#F7F7F7] border-2 border-[#E5E7EB] p-7 flex flex-col justify-between shadow-sm overflow-hidden">
              {/* Layered geometric backdrop panels in silver and charcoal */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#E5E7EB]/70 rounded-bl-full pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-[#111111]/5 rounded-tr-full pointer-events-none" />

              {/* Panel Top Header: Architectural Metrology */}
              <div className="relative z-10 flex items-center justify-between border-b border-[#E5E7EB] pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#111111] text-white flex items-center justify-center font-bold text-xs">
                    SK
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#111111] block tracking-tight">
                      Architectural Canvas
                    </span>
                    <span className="text-[11px] text-[#666666]">Craft & Exploration</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#111111]" />
                  <span className="text-[11px] font-mono text-[#666666]">v2.6</span>
                </div>
              </div>

              {/* Central Geometric Panel Elements: Black, Charcoal, Silver */}
              <div className="relative z-10 my-auto py-5 space-y-3">
                {/* Panel 1: Deep Black Feature Surface */}
                <div className="p-4 rounded-xl bg-[#111111] text-white shadow-xs space-y-2 border border-[#242424]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5 text-[#B8BCC2]" />
                      <span>Web Engineering</span>
                    </span>
                    <span className="font-mono text-[11px] text-[#B8BCC2]">Active Projects</span>
                  </div>
                  <div className="w-full bg-[#242424] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-white h-full rounded-full w-5/6" />
                  </div>
                </div>

                {/* Panel 2: Charcoal Surface */}
                <div className="p-4 rounded-xl bg-[#242424] text-white shadow-xs space-y-2 border border-[#333333]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-[#B8BCC2]" />
                      <span>Data Science & Python</span>
                    </span>
                    <span className="font-mono text-[11px] text-[#B8BCC2]">Academic Focus</span>
                  </div>
                  <div className="w-full bg-[#111111] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#B8BCC2] h-full rounded-full w-3/4" />
                  </div>
                </div>

                {/* Panel 3: Crisp White with Silver Border */}
                <div className="p-4 rounded-xl bg-white text-[#111111] shadow-xs space-y-2 border border-[#E5E7EB]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#111111] flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#666666]" />
                      <span>AI & Emerging Tech</span>
                    </span>
                    <span className="font-mono text-[11px] text-[#666666]">Continuous Practice</span>
                  </div>
                  <div className="w-full bg-[#F7F7F7] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#242424] h-full rounded-full w-2/3" />
                  </div>
                </div>
              </div>

              {/* Panel Footer */}
              <div className="relative z-10 pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#666666]">
                <span className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#242424]" />
                  <span className="font-medium text-[#242424]">Student Portfolio</span>
                </span>
                <span className="font-mono text-[11px] text-[#888888]">2026 Edition</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metric Bar Below Split */}
        <div className="mt-14 pt-8 border-t border-[#E5E7EB] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-[#F7F7F7] border border-[#E5E7EB]">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#666666] mb-1">
              Academic Program
            </div>
            <div className="text-sm font-bold text-[#111111]">
              B.Tech CSE (Data Science)
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#F7F7F7] border border-[#E5E7EB]">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#666666] mb-1">
              Academic Level
            </div>
            <div className="text-sm font-bold text-[#111111]">
              1st Year Undergraduate
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#F7F7F7] border border-[#E5E7EB]">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#666666] mb-1">
              Live Work
            </div>
            <div className="text-sm font-bold text-[#111111]">
              3 Deployed Web Apps
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#F7F7F7] border border-[#E5E7EB]">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#666666] mb-1">
              Engagement
            </div>
            <div className="text-sm font-bold text-[#111111]">
              Open to Internships
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
