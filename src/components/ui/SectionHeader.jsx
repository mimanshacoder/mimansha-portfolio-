import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function SectionHeader({ label, title, subtitle, center = true }) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className={`reveal mb-16 ${center ? 'text-center' : ''}`}>
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[rgba(200,169,107,0.08)] text-[var(--color-gold)] border border-[rgba(200,169,107,0.15)] mb-5">
        {label}
      </span>
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
