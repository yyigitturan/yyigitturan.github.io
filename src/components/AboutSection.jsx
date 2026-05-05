import { portfolioData } from '../data/portfolio';
import { useCountUp } from '../hooks/useCountUp';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function StatCard({ stat }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.25 });

  if (stat.type === 'count') {
    const n = useCountUp(stat.value, { startWhen: isVisible, duration: 1400 });
    return (
      <div ref={ref} className="stat-card">
        <div className="stat-number">
          {n}
          {stat.suffix ?? ''}
        </div>
        <div className="stat-label">{stat.label}</div>
      </div>
    );
  }

  return (
    <div ref={ref} className="stat-card">
      <div className="stat-number text-[clamp(18px,2.2vw,28px)] leading-tight">{stat.value}</div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { personal, stats, experience } = portfolioData;

  return (
    <section ref={ref} id="about" className={`about-section reveal-section ${isVisible ? 'is-visible' : ''}`}>
      <div className="container">
        <div className="about-grid">
          <div>
            <p className="about-eyebrow">About</p>
            <h2 className="section-title">Yaşar Yiğit Turan</h2>
            <p className="section-desc mb-6">{personal.bioExtended}</p>

            <div className="mt-10 space-y-8">
              {experience.map((job) => (
                <article key={`${job.company}-${job.period}`}>
                  <h3 className="m-0 text-lg font-bold text-[var(--color-text-primary)]">{job.company}</h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-primary)]">{job.role}</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{job.period}</p>
                  {job.desc ? (
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{job.desc}</p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>

          <div>
            <p className="about-eyebrow">Snapshot</p>
            <div className="stats-grid">
              {stats.map((s) => (
                <StatCard key={s.label} stat={s} />
              ))}
            </div>
            <div className="mt-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-light)] p-6">
              <p className="m-0 text-sm font-bold text-[var(--color-text-primary)]">Email</p>
              <a className="project-link mt-2 inline-flex" href={`mailto:${personal.email}`}>
                {personal.email}
              </a>
              {personal.emailAlt ? (
                <a className="project-link mt-2 block" href={`mailto:${personal.emailAlt}`}>
                  {personal.emailAlt}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
