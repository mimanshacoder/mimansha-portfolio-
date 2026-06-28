import { Mail, ArrowRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../../data/socialIcons';
import SectionHeader from '../ui/SectionHeader';
import { personalInfo } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Contact"
          title="Have a project idea? Let's build it."
          subtitle="I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision."
        />

        <div ref={ref} className="reveal max-w-4xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] text-center mb-12">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-dark)] p-[2px]">
                <div className="w-full h-full rounded-[14px] bg-[var(--bg-card)]" />
              </div>
              <div className="absolute inset-[2px] rounded-[14px] overflow-hidden">
                <img
                  src="/mimi.png"
                  alt="Mimansha Sharma"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 20%' }}
                />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Let's Create Something Amazing
            </h3>
            <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto">
              Whether you need a website, a redesign or a full stack developer for your team — I'm here to help bring your ideas to life.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] text-[var(--color-charcoal)] font-bold shadow-lg shadow-[rgba(200,169,107,0.25)] hover:shadow-[rgba(200,169,107,0.4)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail className="w-4 h-4" /> Email Me <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[rgba(200,169,107,0.25)] text-[var(--color-gold)] font-bold hover:border-[var(--color-gold)] hover:bg-[rgba(200,169,107,0.05)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />} {copied ? 'Copied!' : 'Copy Email'}
              </button>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[rgba(200,169,107,0.25)] text-[var(--color-gold)] font-bold hover:border-[var(--color-gold)] hover:bg-[rgba(200,169,107,0.05)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[rgba(200,169,107,0.25)] text-[var(--color-gold)] font-bold hover:border-[var(--color-gold)] hover:bg-[rgba(200,169,107,0.05)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[rgba(200,169,107,0.25)] text-[var(--color-gold)] font-bold hover:border-[var(--color-gold)] hover:bg-[rgba(200,169,107,0.05)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <WhatsappIcon className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
