import { Code2, Heart } from 'lucide-react';
import { personalInfo, navItems, socialLinks } from '../../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-[var(--border-color)]" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }} className="flex items-center gap-2 font-bold text-lg mb-3 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-dark)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Code2 className="w-4 h-4 text-[var(--color-charcoal)]" />
              </div>
              <span className="text-[var(--text-primary)]">{personalInfo.name.split(' ')[0]}</span>
            </a>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-xs">
              Full stack developer crafting end-to-end solutions with modern technologies. 
              Specializing in scalable architectures, APIs, databases, and seamless user experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-[var(--text-muted)]">Quick Links</h4>
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                  className="block text-sm text-[var(--text-secondary)] hover:text-[var(--color-gold)] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-[var(--text-muted)]">Connect</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--color-gold)] hover:border-[var(--border-hover)] transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="text-center">
          <p className="text-xs text-[var(--text-muted)] flex items-center justify-center gap-1">
            &copy; {currentYear} {personalInfo.name}. Built with <Heart className="w-3 h-3 text-[var(--color-gold)] fill-[var(--color-gold)]" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
