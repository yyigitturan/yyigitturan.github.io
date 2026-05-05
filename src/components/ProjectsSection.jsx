import { ArrowUpRight, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function ProjectImages({ images }) {
  if (!images?.length) return null;
  return (
    <div className={`grid gap-2 ${images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
      {images.map((src) => (
        <img
          key={src}
          src={src}
          alt=""
          className="h-full w-full rounded-[var(--radius-md)] border border-[var(--color-border)] object-cover"
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
}

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const featured = portfolioData.projects.find((p) => p.featured);
  const rest = portfolioData.projects.filter((p) => !p.featured);

  return (
    <section ref={ref} id="projects" className={`projects-section reveal-section ${isVisible ? 'is-visible' : ''}`}>
      <div className="container">
        <p className="about-eyebrow">Portfolio Projects</p>
        <h2 className="section-title">Data Science and Analytics Work</h2>

        {featured && (
          <article className="project-card-featured">
            <div>
              <span className="tech-tag mb-3 inline-block">Featured</span>
              <h3 className="m-0 text-2xl font-extrabold text-[var(--color-text-primary)]">{featured.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-[var(--color-text-secondary)]">{featured.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featured.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                {featured.github && (
                  <a className="project-link" href={featured.github} target="_blank" rel="noreferrer">
                    <Code2 size={18} aria-hidden />
                    View on GitHub
                  </a>
                )}
                {featured.live && featured.live !== featured.github && (
                  <a className="project-link" href={featured.live} target="_blank" rel="noreferrer">
                    View on Kaggle
                    <ArrowUpRight size={16} aria-hidden />
                  </a>
                )}
              </div>
            </div>
            <div className="min-h-[200px]">
              <ProjectImages images={featured.images} />
            </div>
          </article>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => (
            <article key={project.title} className="project-card">
              <div className="mb-4">
                <ProjectImages images={project.images} />
              </div>
              <h3 className="m-0 text-lg font-bold text-[var(--color-text-primary)]">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">{project.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-4">
                {project.github && (
                  <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                    <Code2 size={18} aria-hidden />
                    View on GitHub
                  </a>
                )}
                {project.live && project.live !== project.github && (
                  <a className="project-link" href={project.live} target="_blank" rel="noreferrer">
                    View on Kaggle
                    <ArrowUpRight size={16} aria-hidden />
                  </a>
                )}
                {project.linkedin && (
                  <a className="project-link" href={project.linkedin} target="_blank" rel="noreferrer">
                    View LinkedIn video
                    <ArrowUpRight size={16} aria-hidden />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
