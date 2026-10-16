import React, { useState } from 'react';
import { Code, FileCode, Check, Eye, Terminal, Sparkles, Smartphone, Layers } from 'lucide-react';
import { SKILLS_LIST } from '../data/portfolioData';
import { SkillItem } from '../types/portfolio';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedSkillId, setExpandedSkillId] = useState<string | null>('html');

  const categories = ['All', 'Front-End', 'Programming', 'Design', 'Modern AI'];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_LIST
    : SKILLS_LIST.filter(s => s.category === selectedCategory);

  const getSkillIcon = (id: string) => {
    switch (id) {
      case 'html':
        return <FileCode className="w-5 h-5 text-orange-400" />;
      case 'css':
        return <Layers className="w-5 h-5 text-blue-400" />;
      case 'javascript':
        return <Code className="w-5 h-5 text-yellow-400" />;
      case 'python':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'responsive-design':
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case 'ai-assisted-dev':
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      default:
        return <Code className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-slate-800/80 bg-[#08090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2 font-mono">
              02. Technical Toolkit & Practice
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Skills & Technologies
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              These are the core technologies and modern development workflows I am actively learning, practicing, and building projects with.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Functional Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Learning Status Disclaimer Notice (Authentic & Professional) */}
        <div className="mb-10 p-4 rounded-xl bg-indigo-950/20 border border-indigo-900/40 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-indigo-200">
            <span className="w-2 h-2 rounded-full bg-indigo-400 shrink-0 animate-pulse" />
            <span><strong>Honest Student Competencies:</strong> Focused on foundational mastery, semantic clean code, and practical implementation over buzzwords.</span>
          </div>
          <div className="text-xs text-indigo-300 font-mono">
            Status: Actively Practicing & Learning
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill: SkillItem) => {
            const isExpanded = expandedSkillId === skill.id;
            return (
              <div
                key={skill.id}
                className={`rounded-2xl bg-[#0D0F17] border transition-all duration-200 flex flex-col justify-between overflow-hidden ${
                  isExpanded
                    ? 'border-indigo-500/50 shadow-xl shadow-indigo-950/20 ring-1 ring-indigo-500/30'
                    : 'border-slate-800/80 hover:border-slate-700/80 shadow-lg'
                }`}
              >
                <div className="p-6">
                  {/* Top line: Category and status in clean unboxed metadata */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                    <span className="font-mono text-indigo-400">{skill.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-400">{skill.status}</span>
                  </div>

                  {/* Skill Title & Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                      {getSkillIcon(skill.id)}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Skill Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {skill.description}
                  </p>

                  {/* Focus Areas List */}
                  <div className="space-y-2 mb-4">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Practice Focus
                    </span>
                    {skill.focusAreas.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Code Snippet Drawer when expanded */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-800/80">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                        <span>{skill.codeSample.filename}</span>
                        <span className="text-indigo-400 uppercase">{skill.codeSample.language}</span>
                      </div>
                      <pre className="p-3 rounded-lg bg-slate-950 text-slate-300 font-mono text-[11px] leading-relaxed overflow-x-auto border border-slate-900">
                        <code>{skill.codeSample.code}</code>
                      </pre>
                    </div>
                  )}
                </div>

                {/* Card Action: Toggle Code / Details */}
                <div className="px-6 py-3 bg-slate-950/40 border-t border-slate-800/60 flex items-center justify-between">
                  <button
                    onClick={() => setExpandedSkillId(isExpanded ? null : skill.id)}
                    className="text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{isExpanded ? 'Hide Code Sample' : 'View Code Sample'}</span>
                  </button>
                  <span className="text-[11px] text-slate-500 font-mono">B.Tech Practice</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
