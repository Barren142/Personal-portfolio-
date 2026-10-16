import React, { useEffect } from 'react';
import { X, ExternalLink, Check, Globe } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border-2 border-[#111111] shadow-2xl text-[#111111] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB] bg-white/95 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#111111] text-white flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#111111] tracking-tight">{project.title}</h3>
              <p className="text-xs text-[#666666] font-mono">{project.category} · Live Deployment</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#666666] hover:text-[#111111] rounded-lg hover:bg-[#F7F7F7] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-6">
          {/* Live URL */}
          <div className="p-3.5 rounded-xl bg-[#F7F7F7] border border-[#E5E7EB] flex items-center justify-between text-xs font-mono text-[#333333]">
            <span className="truncate">https://{project.mockupDetails.browserUrl}</span>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111111] hover:underline font-bold flex items-center gap-1 shrink-0 ml-3"
            >
              <span>Visit Live</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#666666] uppercase tracking-wider mb-2 font-mono">
              Overview
            </h4>
            <p className="text-sm sm:text-base text-[#333333] leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#666666] uppercase tracking-wider mb-3 font-mono">
              Key Features & Implementation
            </h4>
            <div className="space-y-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#333333]">
                  <Check className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#666666] uppercase tracking-wider mb-2 font-mono">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-[#242424]">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-[#F7F7F7] border border-[#E5E7EB] rounded-md font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 px-6 py-4 border-t border-[#E5E7EB] bg-white flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#666666] hover:text-[#111111] hover:bg-[#F7F7F7] rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 text-xs font-bold text-white bg-[#111111] hover:bg-[#242424] rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>View Project</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
