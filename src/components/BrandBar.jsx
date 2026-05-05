import { portfolioData } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function BrandBar() {
  const { ref, isVisible } = useScrollAnimation();
  const items = [...portfolioData.brands, ...portfolioData.brands];

  return (
    <section
      ref={ref}
      className={`brand-bar reveal-section ${isVisible ? 'is-visible' : ''}`}
      aria-label="Tools and affiliations"
    >
      <div className="container">
        <p className="brand-bar-label">Tools &amp; affiliations</p>
        <div className="marquee">
          <div className="marquee-track">
            {items.map((name, i) => (
              <span key={`${name}-${i}`} className="brand-logo-item">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
