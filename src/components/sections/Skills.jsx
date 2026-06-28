import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { skills, skillCategories } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

function SkillBar({ skill }) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="reveal">
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-sm text-[var(--text-primary)]">{skill.name}</span>
        <span className="text-xs font-bold text-[var(--color-gold)]">{skill.level}%</span>
      </div>
      <div className="proficiency-bar">
        <div
          className="proficiency-fill"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState('frontend');

  return (
    <section id="skills" className="py-24" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Skills"
          title="Technologies I Work With"
          subtitle="Continuously learning and expanding my tech stack"
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                active === key
                  ? 'bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] text-[var(--color-charcoal)] shadow-lg shadow-[rgba(200,169,107,0.25)]'
                  : 'bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {skills[active].map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
