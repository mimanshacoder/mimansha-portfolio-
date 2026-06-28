import SectionHeader from '../ui/SectionHeader';
import { workProcess } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

function ProcessStep({ step, isLast }) {
  const ref = useScrollReveal();
  const Icon = step.icon;

  return (
    <div ref={ref} className="reveal relative flex items-start gap-6">
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-14 h-14 rounded-2xl bg-[rgba(200,169,107,0.08)] border border-[rgba(200,169,107,0.15)] flex items-center justify-center group-hover:scale-110 transition-all duration-300">
          <Icon className="w-7 h-7 text-[var(--color-gold)]" />
        </div>
        {!isLast && (
          <div className="w-0.5 h-full min-h-[40px] bg-gradient-to-b from-[var(--color-gold)] to-transparent mt-2" />
        )}
      </div>
      <div className="pb-10">
        <span className="text-xs font-bold text-[var(--color-gold)] uppercase tracking-widest mb-1 block">Step {step.step}</span>
        <h3 className="text-lg font-bold mb-2 text-[var(--text-primary)]">{step.title}</h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-md">{step.description}</p>
      </div>
    </div>
  );
}

export default function WorkProcess() {
  return (
    <section id="workprocess" className="py-24" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="How I Work"
          title="My Work Process"
          subtitle="A structured approach to delivering high-quality projects on time"
        />

        <div className="max-w-2xl mx-auto">
          {workProcess.map((step, i) => (
            <ProcessStep key={step.step} step={step} isLast={i === workProcess.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
