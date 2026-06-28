import SectionHeader from '../ui/SectionHeader';
import { services } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

function ServiceCard({ service }) {
  const ref = useScrollReveal();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className="reveal group p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_48px_rgba(200,169,107,0.08)]"
    >
      <div className="w-14 h-14 rounded-2xl bg-[rgba(200,169,107,0.08)] border border-[rgba(200,169,107,0.12)] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[rgba(200,169,107,0.15)] transition-all duration-300">
        <Icon className="w-7 h-7 text-[var(--color-gold)]" />
      </div>
      <h3 className="text-lg font-bold mb-2 text-[var(--text-primary)] group-hover:text-[var(--color-gold)] transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Services"
          title="What I Build"
          subtitle="Crafting digital experiences that drive results and elevate your brand"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
