import React, { useState } from 'react';
import { Mail, Phone, Github, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const handleCopy = (type: 'email' | 'phone', text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(type);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setFeedbackMessage('Please enter a short message before sending.');
      return;
    }

    const mailSubject = encodeURIComponent(
      subject.trim() || `Inquiry from ${senderName || 'Portfolio Visitor'}`
    );
    const mailBody = encodeURIComponent(
      `Hello Snehil,\n\n${message}\n\nFrom: ${senderName || 'Anonymous'} (${senderEmail || 'No email provided'})`
    );

    window.location.href = `mailto:${PERSONAL_INFO.contact.email}?subject=${mailSubject}&body=${mailBody}`;
    setFeedbackMessage('Opening your default mail client with your drafted message...');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#1A1A1A] text-white border-b border-[#242424] relative overflow-hidden">
      {/* Subtle geometric pattern on dark background */}
      <div className="absolute inset-0 pattern-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#B8BCC2] font-mono py-0.5 px-2.5 bg-[#282828] border border-[#3E3E3E] rounded-md">
              04 · Contact & Connect
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            {PERSONAL_INFO.contactHeading}
          </h2>
          <p className="text-[#CCCCCC] text-base sm:text-lg leading-relaxed max-w-2xl">
            {PERSONAL_INFO.contactSupportingText}
          </p>
          <div className="w-16 h-1 bg-[#FFFFFF] rounded-full mt-6" />
        </div>

        {/* 2-Column Grid: Contact Channels (with exact requested 3 buttons) & Direct Note Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Channels & Three Dedicated Action Buttons (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            {/* 1. Email Box with "Email Me" Button */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#222222] border border-[#333333] hover:border-[#555555] transition-all shadow-md flex flex-col justify-between">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#2C2C2C] border border-[#3E3E3E] flex items-center justify-center text-white">
                    <Mail className="w-5 h-5 text-[#B8BCC2]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#A0A0A0] uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.contact.email}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-[#E0E0E0] transition-colors break-all"
                    >
                      {PERSONAL_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('email', PERSONAL_INFO.contact.email)}
                  className="p-2 text-[#A0A0A0] hover:text-white rounded-lg hover:bg-[#2C2C2C] transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Exact BUTTON 1: "Email Me" — white background with black text */}
              <div className="pt-4 border-t border-[#333333] flex items-center justify-between">
                <span className="text-xs text-[#A0A0A0]">
                  {copiedField === 'email' ? '✓ Copied to clipboard' : 'Direct inbox communication'}
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  className="px-5 py-2.5 text-xs font-bold text-[#111111] bg-white hover:bg-[#F3F4F6] active:scale-98 rounded-xl shadow-xs transition-all duration-150 flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <span>Email Me</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#111111]" />
                </a>
              </div>
            </div>

            {/* 2. Phone Box with "Call Me" Button */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#222222] border border-[#333333] hover:border-[#555555] transition-all shadow-md flex flex-col justify-between">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#2C2C2C] border border-[#3E3E3E] flex items-center justify-center text-white">
                    <Phone className="w-5 h-5 text-[#B8BCC2]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#A0A0A0] uppercase tracking-wider block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.contact.phone}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-[#E0E0E0] transition-colors font-mono"
                    >
                      {PERSONAL_INFO.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('phone', PERSONAL_INFO.contact.phone)}
                  className="p-2 text-[#A0A0A0] hover:text-white rounded-lg hover:bg-[#2C2C2C] transition-colors cursor-pointer shrink-0"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Exact BUTTON 2: "Call Me" — transparent background with a white border and white text */}
              <div className="pt-4 border-t border-[#333333] flex items-center justify-between">
                <span className="text-xs text-[#A0A0A0]">
                  {copiedField === 'phone' ? '✓ Copied to clipboard' : 'Direct voice or messaging'}
                </span>
                <a
                  href={`tel:${PERSONAL_INFO.contact.phone}`}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-transparent hover:bg-white/10 border-2 border-white rounded-xl transition-all duration-150 flex items-center gap-2 cursor-pointer active:scale-98 whitespace-nowrap"
                >
                  <span>Call Me</span>
                  <Phone className="w-3.5 h-3.5 text-white" />
                </a>
              </div>
            </div>

            {/* 3. GitHub Box with "Visit GitHub" Button */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#222222] border border-[#333333] hover:border-[#555555] transition-all shadow-md flex flex-col justify-between">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#2C2C2C] border border-[#3E3E3E] flex items-center justify-center text-white">
                    <Github className="w-5 h-5 text-[#B8BCC2]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#A0A0A0] uppercase tracking-wider block">
                      GitHub Profile
                    </span>
                    <a
                      href={PERSONAL_INFO.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-bold text-white hover:text-[#E0E0E0] transition-colors"
                    >
                      github.com/{PERSONAL_INFO.contact.githubHandle}
                    </a>
                  </div>
                </div>
              </div>

              {/* Exact BUTTON 3: "Visit GitHub" — transparent background with a silver border and white text */}
              <div className="pt-4 border-t border-[#333333] flex items-center justify-between">
                <span className="text-xs text-[#A0A0A0]">
                  Explore repositories and active project code
                </span>
                <a
                  href={PERSONAL_INFO.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs font-bold text-white bg-transparent hover:bg-white/10 border-2 border-[#B8BCC2] rounded-xl transition-all duration-150 flex items-center gap-2 cursor-pointer active:scale-98 whitespace-nowrap"
                >
                  <span>Visit GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B8BCC2]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Dark Message Composer (6 cols) */}
          <div className="lg:col-span-6">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#222222] border border-[#333333] shadow-lg">
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#CCCCCC] mb-6">
                Have a question or looking to collaborate? Fill out the form below to dispatch an email directly.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#B8BCC2] mb-1.5 font-mono">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1A1A1A] border border-[#3E3E3E] text-sm text-white placeholder-[#777777] focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#B8BCC2] mb-1.5 font-mono">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1A1A1A] border border-[#3E3E3E] text-sm text-white placeholder-[#777777] focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#B8BCC2] mb-1.5 font-mono">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Project Inquiry / Internship Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1A1A1A] border border-[#3E3E3E] text-sm text-white placeholder-[#777777] focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#B8BCC2] mb-1.5 font-mono">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello Snehil, I saw your portfolio and would like to talk about..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1A1A1A] border border-[#3E3E3E] text-sm text-white placeholder-[#777777] focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all resize-none"
                    required
                  />
                </div>

                {feedbackMessage && (
                  <p className="text-xs text-[#B8BCC2] font-medium">
                    {feedbackMessage}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 px-5 text-xs font-bold text-[#111111] bg-white hover:bg-[#F3F4F6] active:scale-98 rounded-xl shadow-md transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Dispatch Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
