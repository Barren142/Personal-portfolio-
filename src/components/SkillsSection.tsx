import React from 'react';
import { FileCode, Layers, Code, Terminal, Smartphone, Sparkles, Check } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_LIST } from '../data/portfolioData';
import { SkillItem } from '../types/portfolio';

export const SkillsSection: React.FC = () => {
  const getSkillIcon = (id: string, isSpecial: boolean) => {
    const iconClass = isSpecial ? 'w-5 h-5 text-white' : 'w-5 h-5 text-[#242424]';
    switch (id) {
      case 'html':
        return <FileCode className={iconClass} />;
      case 'css':
        return <Layers className={iconClass} />;
      case 'javascript':
        return <Code className={iconClass} />;
      case 'python':
        return <Terminal className={iconClass} />;
      case 'responsive-design':
        return <Smartphone className={iconClass} />;
      case 'ai-assisted-dev':
        return <Sparkles className={iconClass} />;
      default:
        return <Code className={iconClass} />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#E5E7EB] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#666666] font-mono py-0.5 px-2.5 bg-[#F7F7F7] border border-[#E5E7EB] rounded-md">
              02 · Technical Toolkit
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight font-display mb-4">
            {PERSONAL_INFO.skillsHeading}
          </h2>
          <p className="text-[#555555] text-base sm:text-lg leading-relaxed max-w-2xl">
            {PERSONAL_INFO.skillsSupportingText}
          </p>
          <div className="w-16 h-1 bg-[#111111] rounded-full mt-6" />
        </div>

        {/* Minimal Honest Note */}
        <div className="mb-10 p-4 rounded-xl bg-[#F7F7F7] border border-[#E5E7EB] flex items-center justify-between flex-wrap gap-3">
          <div className="text-xs sm:text-sm text-[#444444]">
            <strong className="text-[#111111]">Active Learning & Practice:</strong> Competencies presented with authentic student honesty — no artificial percentage bars or exaggerated claims.
          </div>
          <div className="text-xs font-mono text-[#666666]">
            Status: Continuous Practice
          </div>
        </div>

        {/* Structured Grid of Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_LIST.map((skill: SkillItem, index: number) => {
            // Give card #3 (JavaScript) and card #4 (Python) a striking deep charcoal accent treatment for visual rhythm
            const isFeatured = index === 2 || index === 3;

            return (
              <div
                key={skill.id}
                className={`p-7 rounded-2xl transition-all duration-200 flex flex-col justify-between group ${
                  isFeatured
                    ? 'bg-[#181818] text-white border-2 border-[#2E2E2E] shadow-md hover:border-[#555555]'
                    : 'bg-[#FFFFFF] text-[#111111] border border-[#E5E7EB] shadow-xs hover:border-[#B8BCC2] hover:shadow-sm'
                }`}
              >
                <div>
                  {/* Top Bar: Icon & Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                        isFeatured
                          ? 'bg-[#282828] border border-[#3E3E3E]'
                          : 'bg-[#F7F7F7] border border-[#E5E7EB] group-hover:bg-[#FFFFFF]'
                      }`}
                    >
                      {getSkillIcon(skill.id, isFeatured)}
                    </div>
                    <span
                      className={`text-xs font-mono ${
                        isFeatured ? 'text-[#B8BCC2]' : 'text-[#666666]'
                      }`}
                    >
                      {skill.category}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3
                    className={`text-xl font-bold tracking-tight mb-2.5 ${
                      isFeatured ? 'text-white' : 'text-[#111111]'
                    }`}
                  >
                    {skill.name}
                  </h3>

                  {/* Skill Description */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      isFeatured ? 'text-[#CCCCCC]' : 'text-[#555555]'
                    }`}
                  >
                    {skill.description}
                  </p>
                </div>

                {/* Key Practice Areas Checklist */}
                <div
                  className={`pt-5 border-t ${
                    isFeatured ? 'border-[#2E2E2E]' : 'border-[#E5E7EB]'
                  }`}
                >
                  <span
                    className={`text-[11px] uppercase tracking-wider font-semibold block mb-2.5 font-mono ${
                      isFeatured ? 'text-[#B8BCC2]' : 'text-[#666666]'
                    }`}
                  >
                    Focus Areas
                  </span>
                  <ul className="space-y-1.5 text-xs">
                    {skill.focusAreas.slice(0, 3).map((item, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2 leading-relaxed ${
                          isFeatured ? 'text-[#E0E0E0]' : 'text-[#444444]'
                        }`}
                      >
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isFeatured ? 'text-[#FFFFFF]' : 'text-[#111111]'
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
