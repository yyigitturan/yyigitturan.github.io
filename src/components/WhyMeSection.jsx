import { portfolioData } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function WhyMeSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className={`why-section reveal-section ${isVisible ? 'is-visible' : ''}`}>
      <div className="container">
        <p className="about-eyebrow" style={{ color: 'var(--color-primary-mid)' }}>
          Capabilities
        </p>
        <h2 className="section-title">Core strengths</h2>

        <div className="features-grid">
          {portfolioData.whyMe.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
