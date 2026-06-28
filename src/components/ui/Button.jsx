const variants = {
  primary:
    'bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] text-[var(--color-charcoal)] shadow-lg shadow-[rgba(200,169,107,0.25)] hover:shadow-[rgba(200,169,107,0.4)] hover:-translate-y-0.5',
  outline:
    'border border-[rgba(200,169,107,0.25)] text-[var(--color-gold)] hover:border-[var(--color-gold)] hover:bg-[rgba(200,169,107,0.05)] hover:-translate-y-0.5',
  ghost:
    'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

export default function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
