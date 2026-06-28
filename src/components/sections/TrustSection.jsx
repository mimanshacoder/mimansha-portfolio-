import SectionHeader from '../ui/SectionHeader';
import { trustStats } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

function TrustCard({ stat }) {
  const ref = useScrollReveal();
  const Icon = stat.icon;

  return (
    <div
      ref={ref}
      className="reveal group p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all duration-500 hover:-translate-y-1 text-center hover:shadow-[0_8px_32px_rgba(200,169,107,0.06)]"
    >
      <div className="w-12 h-12 rounded-xl bg-[rgba(200,169,107,0.08)] border border-[rgba(200,169,107,0.12)] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-[rgba(200,169,107,0.15)] transition-all duration-300">
        <Icon className="w-6 h-6 text-[var(--color-gold)]" />
      </div>
      <p className="text-3xl font-bold gold-text mb-1">{stat.value}</p>
      <p className="text-sm text-[var(--text-secondary)] font-medium">{stat.label}</p>
    </div>
  );
}

export default function TrustSection() {
  return (
    <section id="trust" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why Hire Me"
          title="What Sets Me Apart"
          subtitle="Combining technical skills with a passion for creating exceptional digital experiences"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
          {trustStats.map((stat) => (
            <TrustCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
