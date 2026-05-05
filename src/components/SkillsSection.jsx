import { portfolioData } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="skills" className={`skills-section reveal-section ${isVisible ? 'is-visible' : ''}`}>
      <div className="container">
        <p className="about-eyebrow">Capabilities</p>
        <h2 className="section-title">Skills</h2>
        <p className="section-desc mb-12">
          I&apos;ve developed these skills in data science and machine learning through coursework and personal
          projects.
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          {portfolioData.skills.map((cat) => (
            <div key={cat.category}>
              <h3 className="skill-category-title">{cat.category}</h3>
              {cat.lead ? <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">{cat.lead}</p> : null}
              {cat.images?.length ? (
                <div className="mb-4 flex flex-wrap gap-3">
                  {cat.images.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="h-14 w-auto max-w-[140px] rounded-[var(--radius-sm)] border border-[var(--color-border)] object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </div>
              ) : null}
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span key={tag} className="skill-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
