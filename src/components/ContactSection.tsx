import React, { useState } from 'react';
import { Mail, Phone, Github, Copy, Check, Send, Sparkles, User, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formFeedback, setFormFeedback] = useState<string | null>(null);

  const handleCopy = (type: 'email' | 'phone', text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(type);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setFormFeedback('Please enter a message before sending.');
      return;
    }

    const mailSubject = encodeURIComponent(
      subject.trim() || `Portfolio Inquiry from ${senderName || 'Recruiter / Collaborator'}`
    );
    const mailBody = encodeURIComponent(
      `Hello Snehil,\n\n${message}\n\nFrom: ${senderName || 'Anonymous'} (${senderEmail || 'No email provided'})`
    );

    // Open direct mail client
    window.location.href = `mailto:${PERSONAL_INFO.contact.email}?subject=${mailSubject}&body=${mailBody}`;
    setFormFeedback('Opening your email client with your message drafted...');
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-slate-800/80 bg-[#08090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2 font-mono">
            04. Direct Contact & Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            I am actively looking for internship opportunities, project collaborations, and mentorship. Feel free to reach out directly via email, phone, or GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Verified Contact Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Primary Email Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0D0F17] border border-slate-800 shadow-xl flex flex-col justify-between">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.contact.email}`}
                      className="text-lg sm:text-xl font-bold text-white hover:text-indigo-400 transition-colors break-all"
                    >
                      {PERSONAL_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('email', PERSONAL_INFO.contact.email)}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 gap-3">
                <span className="text-xs text-slate-400">
                  {copiedField === 'email' ? '✓ Copied to clipboard!' : 'Preferred for internship inquiries'}
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-sm hover:shadow-blue-500/25 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span>Email Me</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0D0F17] border border-slate-800 shadow-xl flex flex-col justify-between">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Phone / Mobile
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.contact.phone}`}
                      className="text-lg sm:text-xl font-bold text-white hover:text-indigo-400 transition-colors font-mono"
                    >
                      {PERSONAL_INFO.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('phone', PERSONAL_INFO.contact.phone)}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 gap-3">
                <span className="text-xs text-slate-400">
                  {copiedField === 'phone' ? '✓ Copied to clipboard!' : 'Direct voice or messaging'}
                </span>
                <a
                  href={`tel:${PERSONAL_INFO.contact.phone}`}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-sm hover:shadow-indigo-500/25 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span>Call Me</span>
                  <Phone className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0D0F17] border border-slate-800 shadow-xl flex flex-col justify-between">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      GitHub Profile
                    </span>
                    <a
                      href={PERSONAL_INFO.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg sm:text-xl font-bold text-white hover:text-purple-400 transition-colors"
                    >
                      github.com/{PERSONAL_INFO.contact.githubHandle}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 gap-3">
                <span className="text-xs text-slate-400">
                  Source code repositories & learning explorations
                </span>
                <a
                  href={PERSONAL_INFO.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span>View GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Message Composer (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0D0F17] border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-bold text-white">Send a Quick Note</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Have a project idea, internship query, or question for Snehil? Draft your message below to dispatch directly via your email client.
              </p>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Internship / Web Project Inquiry"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Snehil, I saw your portfolio and would love to discuss..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                    required
                  />
                </div>

                {formFeedback && (
                  <p className="text-xs text-indigo-300 font-medium">
                    {formFeedback}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-md hover:shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Draft & Send Email</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
