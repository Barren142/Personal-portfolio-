import React, { useState } from 'react';
import { ExternalLink, GraduationCap, Dumbbell, Sparkles, ArrowUpRight, Info } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_LIST } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'school':
        return <GraduationCap className="w-5 h-5 text-[#111111]" />;
      case 'gym':
        return <Dumbbell className="w-5 h-5 text-[#111111]" />;
      case 'beauty':
        return <Sparkles className="w-5 h-5 text-[#111111]" />;
      default:
        return <ExternalLink className="w-5 h-5 text-[#111111]" />;
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#F7F7F7] border-b border-[#E5E7EB] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#666666] font-mono py-0.5 px-2.5 bg-white border border-[#E5E7EB] rounded-md">
                03 · Portfolio Showcase
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight font-display mb-4">
              {PERSONAL_INFO.projectsHeading}
            </h2>
            <p className="text-[#555555] text-base sm:text-lg leading-relaxed">
              {PERSONAL_INFO.projectsSupportingText}
            </p>
            <div className="w-16 h-1 bg-[#111111] rounded-full mt-6" />
          </div>

          <div className="text-xs font-mono text-[#666666] bg-white px-3.5 py-1.5 rounded-lg border border-[#E5E7EB] shrink-0 self-start md:self-end">
            3 Active Vercel Deployments
          </div>
        </div>

        {/* 3-Column Premium Grid with Consistent Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_LIST.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#FFFFFF] border-2 border-[#E5E7EB] hover:border-[#111111] transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between overflow-hidden group"
            >
              {/* Clean Visual Preview Area */}
              <div className="border-b border-[#E5E7EB] bg-[#F3F4F6] p-5 flex flex-col justify-between h-52 relative overflow-hidden">
                {/* Browser bar representation */}
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D1D5DB]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D1D5DB]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D1D5DB]" />
                  </div>
                  <span className="text-[11px] font-mono text-[#555555] bg-white px-2.5 py-0.5 rounded border border-[#E5E7EB] truncate max-w-[190px]">
                    {project.mockupDetails.browserUrl}
                  </span>
                </div>

                {/* Center Blueprint Preview Element */}
                <div className="my-auto py-2 text-center flex flex-col items-center">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center mb-2.5 shadow-xs group-hover:scale-105 transition-transform">
                    {getProjectIcon(project.mockupDetails.mockupType)}
                  </div>
                  <h4 className="text-sm font-bold text-[#111111] tracking-tight">
                    {project.mockupDetails.headline}
                  </h4>
                  <span className="text-[11px] text-[#666666] font-mono mt-0.5">
                    {project.category}
                  </span>
                </div>

                {/* Preview footer */}
                <div className="flex items-center justify-between text-[11px] text-[#666666] pt-2 border-t border-[#E5E7EB]">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                    <span>Responsive UI</span>
                  </span>
                  <span className="font-mono text-[10px] text-[#888888]">Live on Vercel</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-[#666666] uppercase">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#111111] tracking-tight mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#444444] leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Action Area: Prominent "View Project" Button */}
                <div className="pt-5 border-t border-[#E5E7EB] flex items-center gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-5 text-xs font-bold text-white bg-[#111111] hover:bg-[#242424] active:scale-98 rounded-xl shadow-xs hover:shadow-sm transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B8BCC2]" />
                  </a>

                  <button
                    onClick={() => setModalProject(project)}
                    className="p-3 text-[#666666] hover:text-[#111111] hover:bg-[#F7F7F7] border border-[#E5E7EB] rounded-xl transition-colors cursor-pointer"
                    title="View Project Specifications"
                    aria-label="View Project Specifications"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
};
