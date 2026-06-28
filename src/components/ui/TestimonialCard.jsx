import { Quote, Star } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function TestimonialCard({ testimonial }) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className="reveal p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all duration-300 hover:-translate-y-1"
    >
      <Quote className="w-8 h-8 text-[rgba(200,169,107,0.25)] mb-4" />
      <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      {testimonial.stars && (
        <div className="flex gap-0.5 mb-4">
          {Array.from({ length: testimonial.stars }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-[var(--color-gold)] fill-[var(--color-gold)]" />
          ))}
        </div>
      )}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-dark)] flex items-center justify-center text-[var(--color-charcoal)] text-sm font-bold">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-semibold text-sm">{testimonial.name}</p>
          <p className="text-xs text-[var(--text-muted)]">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
