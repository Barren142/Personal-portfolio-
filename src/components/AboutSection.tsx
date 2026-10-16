import React from 'react';
import { Layout, Database, Cpu, Bot, Compass, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, FOCUS_PILLARS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#B8BCC2]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#B8BCC2]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#B8BCC2]" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-[#B8BCC2]" />;
      default:
        return <Layout className="w-5 h-5 text-[#B8BCC2]" />;
    }
  };

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#161616] text-white relative overflow-hidden border-b border-[#242424]">
      {/* Subtle geometric pattern on dark background */}
      <div className="absolute inset-0 pattern-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#B8BCC2] font-mono py-0.5 px-2.5 bg-[#242424] border border-[#383838] rounded-md">
              01 · About Snehil
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-6">
            {PERSONAL_INFO.aboutHeading}
          </h2>
          <div className="w-16 h-1 bg-[#B8BCC2] rounded-full mb-8" />
        </div>

        {/* Editorial Layout: Left Storytelling & Right Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Natural Editorial Story (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#202020] border border-[#333333] shadow-lg space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-[#333333]">
                <div className="w-10 h-10 rounded-xl bg-[#2A2A2A] border border-[#444444] flex items-center justify-center text-white">
                  <Compass className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    Perspective & Purpose
                  </h3>
                  <p className="text-xs text-[#B8BCC2]">First-Year B.Tech CSE (Data Science)</p>
                </div>
              </div>

              {/* Exact Refined Paragraphs */}
              {PERSONAL_INFO.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx} className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed font-normal">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-[#333333] flex items-center justify-between text-xs text-[#B8BCC2]">
                <span>Foundation: Computer Science</span>
                <span aria-hidden="true" className="text-[#555555]">·</span>
                <span>Specialization: Data Science</span>
              </div>
            </div>

            {/* Quick Principles Banner */}
            <div className="p-5 rounded-xl bg-[#1E1E1E] border border-[#2E2E2E] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs text-[#E5E7EB]">
                <CheckCircle2 className="w-4 h-4 text-[#B8BCC2] shrink-0" />
                <span>Committed to writing accessible, responsive, well-structured code.</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Interest Pillars in Clean Dark Cards (7 cols) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {FOCUS_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-6 rounded-2xl bg-[#202020] border border-[#333333] hover:border-[#555555] transition-all duration-200 shadow-md flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#2A2A2A] border border-[#3E3E3E] flex items-center justify-center mb-4 group-hover:border-[#666666] transition-colors">
                      {getPillarIcon(pillar.iconName)}
                    </div>

                    <h4 className="text-base font-bold text-white mb-1.5 tracking-tight">
                      {pillar.title}
                    </h4>

                    <p className="text-xs text-[#B8BCC2] font-medium mb-3">
                      {pillar.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed mb-5">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#2E2E2E] flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-[#A0A0A0]">
                    {pillar.topics.map((t, idx) => (
                      <span key={t}>
                        {t}
                        {idx < pillar.topics.length - 1 && <span className="ml-2 text-[#555555]">·</span>}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
