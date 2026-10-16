import React, { useState } from 'react';
import { Layout, Database, Cpu, Bot, CheckCircle2, BookOpen, Lightbulb, Compass } from 'lucide-react';
import { PERSONAL_INFO, FOCUS_PILLARS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Bot':
        return <Bot className="w-5 h-5" />;
      default:
        return <Layout className="w-5 h-5" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-slate-800/80 bg-[#08090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2 font-mono">
            01. Background & Academic Focus
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            About Me
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {PERSONAL_INFO.aboutDetailed}
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0D0F17] border border-slate-800/80 shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-indigo-400" />
                <span>The Student Engineer Mindset</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                As a first-year student in <strong>B.Tech Computer Science & Engineering</strong> specializing in <strong>Data Science</strong>, my primary focus is building strong conceptual foundations while actively translating theory into code. Rather than waiting for senior years, I believe in learning by constructing genuine projects.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {PERSONAL_INFO.learningPhilosophy}
              </p>
              <div className="pt-2 text-xs text-slate-400 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-800/60">
                <span>Specialization: Data Science</span>
                <span aria-hidden="true">·</span>
                <span>Year of Study: 2026 First Year</span>
                <span aria-hidden="true">·</span>
                <span>Goal: Front-End & Data Science Internships</span>
              </div>
            </div>

            {/* Quick Principles Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <BookOpen className="w-4 h-4 text-blue-400 mb-2" />
                <h4 className="text-sm font-semibold text-white mb-1">Curious Learner</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Rapid absorption of modern tools, libraries, and design principles.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <Lightbulb className="w-4 h-4 text-amber-400 mb-2" />
                <h4 className="text-sm font-semibold text-white mb-1">Creative Solutions</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Approaching interface challenges and algorithms with logical problem-solving.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mb-2" />
                <h4 className="text-sm font-semibold text-white mb-1">Execution First</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Turning ideas into deployable, responsive, tested websites.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Technology Focus Explorer */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-[#0D0F17] border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-white">Core Technology Interests</h3>
                <span className="text-xs text-slate-500 font-mono">Interactive</span>
              </div>

              {/* Selector Tabs (Functional Buttons) */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {FOCUS_PILLARS.map((pillar, idx) => {
                  const isSelected = selectedPillar === idx;
                  return (
                    <button
                      key={pillar.title}
                      onClick={() => setSelectedPillar(idx)}
                      className={`p-2.5 rounded-xl text-left transition-all cursor-pointer flex items-center gap-2.5 border ${
                        isSelected
                          ? 'bg-slate-800/90 border-indigo-500/50 text-white shadow-md'
                          : 'bg-slate-900/40 border-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                      }`}
                    >
                      <span className={`shrink-0 ${isSelected ? 'text-indigo-400' : 'text-slate-500'}`}>
                        {getPillarIcon(pillar.iconName)}
                      </span>
                      <span className="text-xs font-semibold truncate">{pillar.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Pillar Details */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {getPillarIcon(FOCUS_PILLARS[selectedPillar].iconName)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {FOCUS_PILLARS[selectedPillar].title}
                    </h4>
                    <p className="text-xs text-indigo-300">
                      {FOCUS_PILLARS[selectedPillar].subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-3">
                  {FOCUS_PILLARS[selectedPillar].description}
                </p>

                <div className="pt-3 border-t border-slate-800/60">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Key Exploration Areas
                  </span>
                  <div className="space-y-1.5">
                    {FOCUS_PILLARS[selectedPillar].topics.map((topic) => (
                      <div key={topic} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
