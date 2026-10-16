import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
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
    <footer className="border-t border-[#222222] bg-[#111111] text-[#A0A0A0] py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-[#242424]">
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-lg font-bold text-white tracking-tight font-display">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-xs text-[#888888] mt-1">
              Designed with clarity and purpose.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-7 text-xs sm:text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[#A0A0A0] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B8BCC2] hover:text-white transition-colors flex items-center gap-1 font-semibold"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#202020] hover:bg-[#2C2C2C] border border-[#333333] text-white transition-colors cursor-pointer flex items-center gap-2 text-xs font-medium"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#B8BCC2]" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666] text-center sm:text-left">
          <span>&copy; {new Date().getFullYear()} Snehil Kashyap. All rights reserved.</span>
          <span className="font-mono text-[#888888]">B.Tech CSE (Data Science) Undergraduate Portfolio</span>
        </div>
      </div>
    </footer>
  );
};
