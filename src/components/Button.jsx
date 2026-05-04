export default function Button({ children, variant = 'primary', href = '#', type = 'button' }) {
  const base = 'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ease-out hover:scale-[1.03]';
  const variants = {
    primary: 'bg-[#FF6100] text-white shadow-md hover:bg-[#e45700] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-200/60',
    secondary: 'border border-white/70 bg-transparent text-white hover:border-white hover:bg-white hover:text-[#0F172A]',
  };

  if (type === 'submit') {
    return (
      <button type="submit" className={`${base} ${variants[variant]}`}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </a>
  );
}
