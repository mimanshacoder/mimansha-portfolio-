import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';

export default function StatCounter({ label, value, suffix = '' }) {
  const { count, ref } = useAnimatedCounter(value);

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <div className="text-2xl sm:text-3xl font-bold gold-text">
        {count}{suffix}
      </div>
      <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium leading-tight">{label}</p>
    </div>
  );
}
