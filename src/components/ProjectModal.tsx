import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Globe, Sparkles, Layers, ShieldCheck } from 'lucide-react';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0D0F17] rounded-2xl border border-slate-700/80 shadow-2xl text-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0D0F17]/95 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">{project.title}</h3>
              <p className="text-xs text-slate-400 font-mono">{project.category} · Live Deployment</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Simulated Browser URL bar */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-slate-500">https://</span>
              <span className="text-slate-200 font-semibold truncate">{project.mockupDetails.browserUrl}</span>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 ml-4 shrink-0 transition-colors"
            >
              <span>Visit Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider font-mono mb-2">
              Project Overview
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Features Built */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider font-mono mb-3">
              Key Features Built & Practiced
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used (Unboxed text with separators per anti-pill rule) */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider font-mono mb-2">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-indigo-300">
              {project.technologies.map((tech, i) => (
                <React.Fragment key={tech}>
                  <span className="font-medium">{tech}</span>
                  {i < project.technologies.length - 1 && <span className="text-slate-600">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Student Takeaway */}
          <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-900/40 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-300">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Learning & Engineering Takeaways</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Constructed by Snehil Kashyap to practice responsive design break points, structured layout planning, semantic HTML markup, and cross-device testing. Deployed and verified on Vercel.
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="sticky bottom-0 px-6 py-4 border-t border-slate-800 bg-[#0D0F17]/95 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verified Live Project</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm hover:shadow-indigo-500/25 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Open Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
