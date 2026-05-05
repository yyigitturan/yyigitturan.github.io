import { portfolioData } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();
  const { personal, hero } = portfolioData;

  return (
    <section
      ref={ref}
      id="contact"
      className={`cta-section reveal-section ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby="cta-heading"
    >
      <div className="cta-inner container">
        <h2 id="cta-heading" className="cta-title">
          Get in touch
        </h2>
        <p className="cta-desc">{personal.contactNote}</p>
        <p className="cta-desc text-sm">
          <a className="font-semibold text-white underline decoration-white/50" href={`mailto:${personal.email}`}>
            {personal.email}
          </a>
          {personal.emailAlt ? (
            <>
              {' '}
              ·{' '}
              <a className="font-semibold text-white underline decoration-white/50" href={`mailto:${personal.emailAlt}`}>
                {personal.emailAlt}
              </a>
            </>
          ) : null}
        </p>
        <div className="cta-buttons">
          <a className="btn-cta-white" href={`mailto:${personal.email}`}>
            Say hello
          </a>
          <a
            className="btn-secondary border-white/40 bg-white/10 text-white hover:border-white hover:text-white"
            href={hero.cta2.href}
            download={hero.cta2.download}
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
