import React, { useState } from 'react';
import { ArrowRight, Code2, Sparkles, Terminal, ExternalLink, Mail, FolderGit2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'code' | 'curriculum'>('profile');

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-glow pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split screen hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column (7 cols): Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Zero-Pill unboxed metadata kicker */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-400 mb-4 tracking-wide">
              <span className="text-indigo-400 font-semibold">B.Tech CSE (Data Science)</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>1st Year Undergrad</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-blue-400">Open to Internships</span>
            </div>

            {/* Display Headline with balanced wrap */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4 text-balance">
              {PERSONAL_INFO.name}
            </h1>

            {/* Headline Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-indigo-300/90 mb-6 font-display tracking-normal">
              {PERSONAL_INFO.headline}
            </p>

            {/* Exact Required Introduction */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              {PERSONAL_INFO.introduction}
            </p>

            {/* Action Buttons: Prominent "Explore My Projects" */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 cursor-pointer group whitespace-nowrap"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all duration-200 flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </button>

              <a
                href={PERSONAL_INFO.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

            {/* Subtle learning focus note */}
            <div className="flex items-center gap-3 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                Continuously building real-world projects with modern HTML, CSS, JavaScript, and Python.
              </span>
            </div>
          </div>

          {/* Right Column (5 cols): Interactive Futuristic Student Dev Console */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-[#0D0F17] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 bg-slate-950/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">snehil_workspace.tsx</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>node v20</span>
                </div>
              </div>

              {/* Segmented Tab Controls (Functional Buttons) */}
              <div className="flex items-center border-b border-slate-800/60 bg-slate-900/40 px-2 py-1.5 gap-1">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    activeTab === 'profile'
                      ? 'bg-slate-800 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  developer.json
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    activeTab === 'code'
                      ? 'bg-slate-800 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  algorithms.py
                </button>
                <button
                  onClick={() => setActiveTab('curriculum')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    activeTab === 'curriculum'
                      ? 'bg-slate-800 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  curriculum.log
                </button>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[290px] flex flex-col justify-between">
                {activeTab === 'profile' && (
                  <div className="text-slate-300 space-y-1">
                    <p className="text-slate-500">// Student Profile Object</p>
                    <p className="text-purple-400">const <span className="text-blue-300">snehilKashyap</span> = &#123;</p>
                    <p className="pl-4 text-slate-300">name: <span className="text-emerald-300">"Snehil Kashyap"</span>,</p>
                    <p className="pl-4 text-slate-300">degree: <span className="text-emerald-300">"B.Tech CSE"</span>,</p>
                    <p className="pl-4 text-slate-300">specialization: <span className="text-emerald-300">"Data Science"</span>,</p>
                    <p className="pl-4 text-slate-300">year: <span className="text-amber-300">1</span> <span className="text-slate-500">// First Year</span>,</p>
                    <p className="pl-4 text-slate-300">passions: [</p>
                    <p className="pl-8 text-indigo-300">"Web Development",</p>
                    <p className="pl-8 text-indigo-300">"Artificial Intelligence",</p>
                    <p className="pl-8 text-indigo-300">"Robotics",</p>
                    <p className="pl-8 text-indigo-300">"Problem Solving"</p>
                    <p className="pl-4 text-slate-300">],</p>
                    <p className="pl-4 text-slate-300">liveProjectsCount: <span className="text-amber-300">3</span>,</p>
                    <p className="pl-4 text-slate-300">status: <span className="text-emerald-300">"Actively building & learning"</span></p>
                    <p className="text-purple-400">&#125;;</p>
                  </div>
                )}

                {activeTab === 'code' && (
                  <div className="text-slate-300 space-y-1">
                    <p className="text-slate-500"># Data Science & Algorithmic Practice</p>
                    <p><span className="text-purple-400">class</span> <span className="text-yellow-300">StudentEngineer</span>:</p>
                    <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self):</p>
                    <p className="pl-8 text-slate-300">self.skills = [<span className="text-emerald-300">"HTML"</span>, <span className="text-emerald-300">"CSS"</span>, <span className="text-emerald-300">"JS"</span>, <span className="text-emerald-300">"Python"</span>]</p>
                    <p className="pl-8 text-slate-300">self.mindset = <span className="text-emerald-300">"Continuous Improvement"</span></p>
                    <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">iterate</span>(self, project):</p>
                    <p className="pl-8 text-slate-300">print(<span className="text-emerald-300">f"Deploying &#123;project&#125; with clean code"</span>)</p>
                    <p className="pl-8 text-purple-400">return <span className="text-amber-300">True</span></p>
                  </div>
                )}

                {activeTab === 'curriculum' && (
                  <div className="text-slate-300 space-y-2">
                    <p className="text-slate-500">[ACADEMIC FOCUS LOG - B.TECH CSE (DATA SCIENCE)]</p>
                    <div className="space-y-1.5 text-xs">
                      <div className="flex items-center justify-between text-slate-300">
                        <span>Foundation Mathematics & Logic</span>
                        <span className="text-emerald-400">ACTIVE</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span>Python Programming & Scripting</span>
                        <span className="text-emerald-400">ACTIVE</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span>Front-End Web Development (HTML/CSS/JS)</span>
                        <span className="text-emerald-400">PROJECTS BUILT</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span>Data Science Exploratory Analysis</span>
                        <span className="text-blue-400">LEARNING</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span>Robotics & Sensor Interfacing</span>
                        <span className="text-purple-400">EXPLORING</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Console footer output line */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Ready to collaborate</span>
                  </span>
                  <span className="text-slate-500">Snehil Kashyap · 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Metric Strip Below the Split (per 2-Column Balance rule in Section 5.13) */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums text-indigo-400">
              3
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Live Deployed Projects
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums text-blue-400">
              1st Year
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              B.Tech CSE (Data Science)
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums text-purple-400">
              6 Core
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Practiced Web & Tech Skills
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums text-emerald-400">
              100%
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Responsive & Mobile Friendly
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
