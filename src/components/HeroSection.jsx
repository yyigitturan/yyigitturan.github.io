import { ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function HeroSection() {
  const { hero, personal } = portfolioData;

  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-stagger-item hero-badge">{hero.badge}</div>
            <h1 id="hero-heading" className="hero-stagger-item hero-title">
              {hero.headlineLine1}
              {hero.headlineLine2 ? (
                <>
                  <br />
                  <span className="highlight">{hero.headlineLine2}</span>
                </>
              ) : null}
            </h1>
            <p className="hero-stagger-item hero-desc">{personal.bio}</p>
            <div className="hero-stagger-item flex flex-wrap gap-3">
              <a className="btn-primary" href={hero.cta1.href}>
                {hero.cta1.label}
                <ArrowRight className="ml-2 inline" size={18} aria-hidden />
              </a>
              <a className="btn-secondary" href={hero.cta2.href} download={hero.cta2.download}>
                {hero.cta2.label}
              </a>
            </div>
            <div className="hero-stagger-item hero-proof" aria-label="Profiles">
              {hero.proofLinks.map((item, i) => (
                <span key={item.label} className="flex items-center">
                  {i > 0 && (
                    <span className="dot" aria-hidden>
                      ·
                    </span>
                  )}
                  <a
                    className="text-[var(--color-text-secondary)] underline-offset-2 transition hover:text-[var(--color-primary)] hover:underline"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label}
                  </a>
                </span>
              ))}
            </div>
          </div>
          <div className="hero-visual hero-visual-float">
            <img
              src="/img/word.png"
              alt="Sentiment analysis visualization"
              className="h-auto w-full max-w-[520px] rounded-[var(--radius-xl)] border border-[var(--color-border)] shadow-[var(--shadow-hover)]"
              width={800}
              height={600}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
