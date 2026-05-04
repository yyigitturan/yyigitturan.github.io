export default function Card({ children, className = '' }) {
  return (
    <article className={`rounded-xl border border-slate-100 bg-white p-6 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${className}`}>
      {children}
    </article>
  );
}
