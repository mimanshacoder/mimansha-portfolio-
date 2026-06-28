import { ArrowDown } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Hero() {
  const ref = useScrollReveal();

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[rgba(200,169,107,0.04)] blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[rgba(200,169,107,0.03)] blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={ref} className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(200,169,107,0.08)] border border-[rgba(200,169,107,0.15)] text-[var(--color-gold)] text-xs font-semibold mb-8 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] animate-pulse-gold" />
              Open for Freelance & Remote Projects
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-2 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              {personalInfo.name}
            </h1>

            <div className="flex flex-wrap items-center gap-2 mt-3 mb-6">
              {personalInfo.title && (
                <>
                  <span className="text-xl sm:text-2xl font-semibold gold-text">{personalInfo.title}</span>
                  <span className="text-[var(--text-muted)] text-lg">|</span>
                </>
              )}
              {personalInfo.subtitle && (
                <>
                  <span className="text-xl sm:text-2xl font-semibold gold-text">{personalInfo.subtitle}</span>
                  <span className="text-[var(--text-muted)] text-lg">|</span>
                </>
              )}
              <span className="text-xl sm:text-2xl font-semibold gold-text">{personalInfo.tertiary}</span>
            </div>

            <p className="text-lg sm:text-xl font-medium text-[var(--text-primary)] max-w-xl mb-3 leading-relaxed">
              {personalInfo.valueStatement}
            </p>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl mb-10 leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => scrollTo('#projects')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] text-[var(--color-charcoal)] font-bold shadow-lg shadow-[rgba(200,169,107,0.25)] hover:shadow-[rgba(200,169,107,0.4)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[var(--color-gold)] text-[var(--color-charcoal)] font-bold hover:bg-[var(--color-gold-light)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                Start a Project
              </button>
            </div>

            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl flex items-center justify-center border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--color-gold)] hover:border-[var(--border-hover)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px]">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[var(--color-gold)] via-[var(--color-gold-dark)] to-[var(--color-gold)] p-[2px] animate-[spin_12s_linear_infinite]">
                <div className="w-full h-full rounded-[2rem] bg-[var(--bg-primary)]" />
              </div>

              <div className="absolute inset-[4px] rounded-[1.9rem] overflow-hidden">
                <img
                  src="/mimi.png"
                  alt="Mimansha Sharma — Full Stack Developer"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 20%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-40" />
              </div>

              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[rgba(200,169,107,0.1)] via-transparent to-[rgba(200,169,107,0.05)] blur-2xl pointer-events-none" />

              <div className="absolute -top-4 -right-4 px-4 py-2.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-md shadow-xl z-10">
                <span className="text-sm font-bold gold-text">&lt;/&gt; React Developer</span>
              </div>

              <div className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-md shadow-xl flex items-center gap-2 z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-[var(--text-secondary)]">Available for work</span>
              </div>

              <div className="absolute -top-2 -left-2 w-12 h-12 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--color-gold)] to-transparent rounded-full" />
                <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-[var(--color-gold)] to-transparent rounded-full" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-[var(--color-gold)] to-transparent rounded-full" />
                <div className="absolute bottom-0 right-0 h-full w-[2px] bg-gradient-to-t from-[var(--color-gold)] to-transparent rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); scrollTo('#about'); }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[var(--text-muted)] hover:text-[var(--color-gold)] transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
