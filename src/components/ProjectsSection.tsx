import React, { useState } from 'react';
import { ExternalLink, Info, ArrowUpRight, GraduationCap, Dumbbell, Sparkles, Monitor, Tablet, Smartphone } from 'lucide-react';
import { PROJECTS_LIST } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeDeviceView, setActiveDeviceView] = useState<Record<string, 'desktop' | 'mobile'>>({
    'school-website': 'desktop',
    'gym-website': 'desktop',
    'beauty-parlour-website': 'desktop',
  });

  const getCategoryIcon = (mockupType: string) => {
    switch (mockupType) {
      case 'school':
        return <GraduationCap className="w-5 h-5 text-sky-400" />;
      case 'gym':
        return <Dumbbell className="w-5 h-5 text-indigo-400" />;
      case 'beauty':
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      default:
        return <ExternalLink className="w-5 h-5 text-blue-400" />;
    }
  };

  const setDeviceForProject = (id: string, device: 'desktop' | 'mobile') => {
    setActiveDeviceView((prev) => ({ ...prev, [id]: device }));
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative border-t border-slate-800/80 bg-[#08090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2 font-mono">
              03. Featured Website Implementations
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Real, responsive web applications built with clean code and deployed live on Vercel. Click any project to explore the live deployment.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>3 Active Vercel Deployments</span>
          </div>
        </div>

        {/* Projects Cards Grid (3 cards in 3 columns on large screens) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_LIST.map((project: ProjectItem) => {
            const currentDevice = activeDeviceView[project.id] || 'desktop';

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-[#0D0F17] border border-slate-800 hover:border-slate-700/80 shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                {/* Simulated Modern Browser Window Header */}
                <div className="border-b border-slate-800 bg-slate-950/80 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>

                  {/* Browser URL bar representation */}
                  <div className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800/80 text-[11px] font-mono text-slate-400 max-w-[210px] truncate flex items-center gap-1.5">
                    <span className="text-slate-600">https://</span>
                    <span className="text-slate-300 truncate">{project.mockupDetails.browserUrl}</span>
                  </div>

                  {/* Viewport toggle (Desktop / Mobile preview simulation) */}
                  <div className="flex items-center gap-1 text-slate-500">
                    <button
                      onClick={() => setDeviceForProject(project.id, 'desktop')}
                      className={`p-1 rounded transition-colors cursor-pointer ${
                        currentDevice === 'desktop' ? 'text-indigo-400 bg-slate-800' : 'hover:text-slate-300'
                      }`}
                      title="Desktop Layout"
                    >
                      <Monitor className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setDeviceForProject(project.id, 'mobile')}
                      className={`p-1 rounded transition-colors cursor-pointer ${
                        currentDevice === 'mobile' ? 'text-indigo-400 bg-slate-800' : 'hover:text-slate-300'
                      }`}
                      title="Mobile Layout"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Simulated Webpage Visual Frame (Zero broken image, pure aesthetic SVG/CSS mockup) */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-950 via-[#0A0D18] to-slate-900 p-5 flex flex-col justify-between overflow-hidden border-b border-slate-800/80">
                  {/* Subtle ambient glow matching project accent */}
                  <div
                    className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20"
                    style={{ backgroundColor: project.themeColor.accent }}
                  />

                  {/* Top Bar of the Mockup Webpage */}
                  <div className="relative z-10 flex items-center justify-between border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                        {getCategoryIcon(project.mockupDetails.mockupType)}
                      </div>
                      <span className="text-xs font-bold text-white tracking-tight">
                        {project.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live</span>
                    </span>
                  </div>

                  {/* Center Hero Mockup Content */}
                  <div className="relative z-10 my-auto py-2">
                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug mb-1.5">
                      {project.mockupDetails.headline}
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {project.mockupDetails.subheadline}
                    </p>
                  </div>

                  {/* Bottom Elements: Quick layout skeleton simulating modern responsive site */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] pt-3 border-t border-white/5">
                    <div className="flex items-center gap-2 text-slate-400">
                      <span>Responsive UI</span>
                      <span aria-hidden="true">·</span>
                      <span>CSS Grid</span>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-white hover:text-indigo-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Preview</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Project Details Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata (Zero-pill discipline) */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                      <span className="text-indigo-400 font-mono">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Live on Vercel</span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies list (unboxed text with separators) */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 mb-6 font-mono">
                      {project.technologies.map((tech, i) => (
                        <React.Fragment key={tech}>
                          <span className="text-indigo-300">{tech}</span>
                          {i < project.technologies.length - 1 && <span className="text-slate-600">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Working Action Buttons */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-sm hover:shadow-indigo-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="py-2.5 px-3.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      title="Inspect Specs & Architecture"
                    >
                      <Info className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Details</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
