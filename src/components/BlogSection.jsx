import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function BlogSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="blog" className={`blog-section reveal-section ${isVisible ? 'is-visible' : ''}`}>
      <div className="container">
        <p className="about-eyebrow">Blog</p>
        <h2 className="section-title">Coming soon</h2>
        <p className="section-desc mb-10">Long-form write-ups and project notes are coming soon.</p>

        <div className="grid gap-6 md:grid-cols-2">
          {portfolioData.blog.map((post) => (
            <a
              key={post.href}
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="blog-card block text-inherit no-underline"
            >
              <p className="blog-badge">
                {post.category} {post.readTime && post.readTime !== '—' ? `· ${post.readTime}` : ''}
              </p>
              <h3 className="m-0 text-lg font-bold text-[var(--color-text-primary)]">{post.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{post.desc}</p>
              <span className="project-link mt-4 inline-flex">
                Read on Medium
                <ArrowUpRight size={16} aria-hidden />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
