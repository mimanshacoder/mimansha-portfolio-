import { ExternalLink, Clock, Target, Lightbulb, Wrench, TrendingUp } from 'lucide-react';
import { GithubIcon } from '../../data/socialIcons';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function ProjectCard({ project }) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className="reveal group rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_64px_rgba(200,169,107,0.1)]"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-70" />
        {project.duration && (
          <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-card)]/90 backdrop-blur-sm text-xs font-medium text-[var(--text-secondary)] border border-[var(--border-color)]">
            <Clock className="w-3.5 h-3.5 text-[var(--color-gold)]" /> {project.duration}
          </div>
        )}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-card)]/90 backdrop-blur-sm text-xs font-medium text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-gold)] text-[var(--color-charcoal)] text-xs font-bold hover:bg-[var(--color-gold-light)] transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" /> Live Demo
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold mb-4 group-hover:text-[var(--color-gold)] transition-colors">
          {project.title}
        </h3>

        <div className="space-y-4">
          {project.problem && (
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[rgba(239,68,68,0.1)] flex items-center justify-center">
                <Target className="w-4 h-4 text-red-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1">Problem</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{project.problem}</p>
              </div>
            </div>
          )}

          {project.solution && (
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[rgba(34,197,94,0.1)] flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1">Solution</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{project.solution}</p>
              </div>
            </div>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[rgba(200,169,107,0.1)] flex items-center justify-center">
                <Wrench className="w-4 h-4 text-[var(--color-gold)]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">Tools</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-lg bg-[rgba(200,169,107,0.08)] text-[var(--color-gold)] border border-[rgba(200,169,107,0.15)] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {project.outcome && (
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[rgba(59,130,246,0.1)] flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1">Outcome</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{project.outcome}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
