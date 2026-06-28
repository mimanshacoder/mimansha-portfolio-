import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { navItems, personalInfo } from '../../data/portfolioData';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'shadow-lg shadow-black/20' : ''
      }`}
      style={{
        background: scrolled ? 'rgba(17, 17, 17, 0.95)' : 'var(--nav-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex items-center gap-2.5 font-bold text-lg group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-dark)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Code2 className="w-4 h-4 text-[var(--color-charcoal)]" />
            </div>
            <span className="hidden sm:inline text-[var(--text-primary)] tracking-tight">
              {personalInfo.name.split(' ')[0]}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.href
                    ? 'text-[var(--color-gold)] bg-[rgba(200,169,107,0.08)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="hidden md:inline-flex items-center px-5 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] text-[var(--color-charcoal)] hover:shadow-lg hover:shadow-[rgba(200,169,107,0.2)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Hire Me
            </a>
            <button
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] cursor-pointer"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ borderTop: open ? '1px solid var(--border-color)' : 'none' }}
      >
        <div className="px-4 py-3 space-y-1" style={{ background: 'var(--bg-secondary)' }}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeSection === item.href
                  ? 'text-[var(--color-gold)] bg-[rgba(200,169,107,0.08)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="block text-center mt-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] text-[var(--color-charcoal)]"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
