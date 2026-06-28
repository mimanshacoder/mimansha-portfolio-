import { Send } from 'lucide-react';
import { availability } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Availability() {
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
    <section className="py-16" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal max-w-3xl mx-auto text-center p-8 sm:p-12 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(200,169,107,0.08)] border border-[rgba(200,169,107,0.15)] text-[var(--color-gold)] text-xs font-semibold mb-6 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {availability.title}
          </div>
          <p className="text-[var(--text-secondary)] mb-8 text-lg">
            {availability.description}
          </p>
          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] text-[var(--color-charcoal)] font-bold shadow-lg shadow-[rgba(200,169,107,0.25)] hover:shadow-[rgba(200,169,107,0.4)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-base"
          >
            <Send className="w-5 h-5" /> Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
