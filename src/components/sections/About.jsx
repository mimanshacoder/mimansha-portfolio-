import { Lightbulb, Check } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import StatCounter from '../ui/StatCounter';
import { personalInfo, stats } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const strengths = [
  'Problem Solving',
  'Responsive UI',
  'Fast Learning',
  'Modern Frontend',
  'Clean Code',
  'Team Player',
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="About Me" title="The person behind the code" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-[var(--color-gold)] via-[var(--color-gold-dark)] to-[var(--color-gold)] p-[2px]">
                <div className="w-full h-full rounded-[1.4rem] bg-[var(--bg-primary)]" />
              </div>
              <div className="absolute inset-[3px] rounded-[1.4rem] overflow-hidden">
                <img
                  src="/mimi.png"
                  alt="Mimansha Sharma — Full Stack Developer"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 20%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-30" />
              </div>
            </div>
          </div>

          <div ref={ref} className="reveal space-y-6">
            <div className="text-[var(--text-secondary)] leading-relaxed text-lg space-y-4">
              {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {strengths.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-2 p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all duration-300"
                >
                  <Check className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0" />
                  <span className="text-sm font-medium text-[var(--text-primary)]">{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)]" /> Quick Stats
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[border-hover] transition-all duration-300 overflow-hidden"
                >
                  <StatCounter label={stat.label} value={stat.value} suffix={stat.suffix} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
