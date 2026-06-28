import { useEffect, useRef } from 'react';

export default function SkillBar({ skill }) {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.width = `${skill.level}%`;
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [skill.level]);

  return (
    <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all duration-300">
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-sm text-[var(--text-primary)]">{skill.name}</span>
        <span className="text-xs font-bold text-[var(--color-gold)]">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-[rgba(200,169,107,0.1)] overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full bg-gradient-to-r from-[var(--color-gold-dark)] to-[var(--color-gold)] transition-all duration-1000 ease-out"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
}
