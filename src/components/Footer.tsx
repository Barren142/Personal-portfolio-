import React from 'react';
import { ArrowUp, Heart, Github, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-800 bg-[#06070B] text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-900">
          {/* Brand & Academic Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-lg font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs text-slate-500 font-mono mt-0.5">
              B.Tech Computer Science & Engineering (Data Science)
            </span>
          </div>

          {/* Nav Links: Home, About, Skills, Projects, Contact */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-2 text-xs font-mono"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Required Text: "Designed with passion by Snehil Kashyap." */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p className="flex items-center gap-1.5 text-slate-400 font-medium">
            <span>Designed with passion by Snehil Kashyap.</span>
          </p>

          <div className="flex items-center gap-4 text-slate-500 font-mono">
            <span>Portfolio &copy; {new Date().getFullYear()}</span>
            <span aria-hidden="true">·</span>
            <span>All Links Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
