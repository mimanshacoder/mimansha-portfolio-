import { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

export default function LoadingScreen() {
  const [fading, setFading] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1200);
    const removeTimer = setTimeout(() => setRemoved(true), 1800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div className={`loader ${fading ? 'hidden' : ''}`}>
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-dark)] flex items-center justify-center mx-auto mb-5 animate-pulse-gold">
          <Code2 className="w-8 h-8 text-[var(--color-charcoal)]" />
        </div>
        <p className="text-lg font-bold tracking-tight text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
          Mimansha Sharma
        </p>
        <p className="text-xs text-[var(--text-muted)] font-medium tracking-widest uppercase mt-1">Full Stack Developer</p>
        <div className="mt-6 w-32 h-0.5 mx-auto rounded-full bg-[rgba(200,169,107,0.1)] overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] rounded-full animate-[loading_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
