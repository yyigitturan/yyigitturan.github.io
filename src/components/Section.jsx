export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = 'bg-[#F9FAFB]',
}) {
  return (
    <section id={id} className={`reveal py-20 ${className}`}>
      <div className="mx-auto w-full max-w-[1200px] px-6">
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#4F46E5]">{eyebrow}</p>}
            {title && <h2 className="text-3xl font-bold text-[#111827] md:text-4xl">{title}</h2>}
            {description && <p className="mt-3 text-base text-[#6B7280] md:text-lg">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
