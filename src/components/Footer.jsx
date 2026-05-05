import { AtSign, BarChart2, BookOpen, Code2, Link2, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const FOOTER_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const { personal, socials } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-logo">{personal.name}</p>
          <p className="m-0 max-w-sm text-sm leading-relaxed">{personal.title}</p>
        </div>
        <div className="footer-links flex flex-col">
          {FOOTER_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-white/80">Profiles</p>
          <div className="footer-social">
            <a className="social-icon" href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Code2 size={18} />
            </a>
            <a className="social-icon" href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Link2 size={18} />
            </a>
            <a className="social-icon" href={socials.twitter} target="_blank" rel="noreferrer" aria-label="X">
              <AtSign size={18} />
            </a>
            <a className="social-icon" href={socials.kaggle} target="_blank" rel="noreferrer" aria-label="Kaggle">
              <BarChart2 size={18} />
            </a>
            <a className="social-icon" href={socials.medium} target="_blank" rel="noreferrer" aria-label="Medium">
              <BookOpen size={18} />
            </a>
            <a className="social-icon" href={socials.email} aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {year} {personal.name}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
