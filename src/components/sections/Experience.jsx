import { Briefcase, GraduationCap } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { timeline } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const typeConfig = {
  education: { icon: GraduationCap, label: 'Education', color: 'bg-[rgba(200,169,107,0.1)] text-[var(--color-gold)] border-[rgba(200,169,107,0.2)]' },
  internship: { icon: Briefcase, label: 'Internship', color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' },
  learning: { icon: Briefcase, label: 'Learned', color: 'bg-blue-500/10 text-blue-500 border-blue-500/20' },
};

function TimelineItem({ item, index }) {
  const ref = useScrollReveal();
  const config = typeConfig[item.type] || typeConfig.education;
  const Icon = config.icon;
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="reveal relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
      <div className="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 z-10 w-10 h-10 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--color-gold)] flex items-center justify-center shadow-lg shadow-[rgba(200,169,107,0.15)]">
        <Icon className="w-4 h-4 text-[var(--color-gold)]" />
      </div>

      <div className={`${isEven ? 'md:col-start-2 md:pl-8' : 'md:col-start-1 md:row-start-1 md:pr-8 md:text-right'}`}>
        <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all duration-300 hover:-translate-y-1">
          <div className={`flex items-center gap-2 mb-2 flex-wrap ${!isEven ? 'md:justify-end' : ''}`}>
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${config.color}`}>
              {config.label}
            </span>
            <span className="text-xs text-[var(--text-muted)]">{item.period}</span>
          </div>
          <h3 className="text-base font-bold mb-1">{item.title}</h3>
          <p className="text-sm font-medium text-[var(--color-gold)] mb-2">{item.institution}</p>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Experience"
          title="My Professional Journey"
          subtitle="Education and internships that shaped my career"
        />

        <div className="relative">
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-gold)] to-transparent" />
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
