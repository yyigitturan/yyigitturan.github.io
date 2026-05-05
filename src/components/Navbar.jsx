import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolio';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const headerClass = scrolled
    ? 'bg-[var(--color-white)] shadow-[0_2px_8px_rgba(10,21,81,0.08)]'
    : 'bg-transparent';

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-[background,box-shadow] duration-300 ${headerClass}`}
    >
      <div className="container flex h-16 items-center justify-between md:h-[72px]">
        <a href="#" className="text-base font-extrabold text-[var(--color-text-primary)] md:text-lg">
          {portfolioData.personal.name}
        </a>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-[var(--color-text-secondary)] md:flex"
          aria-label="Primary"
        >
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-[var(--color-primary)]">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-[var(--radius-sm)] bg-[var(--color-primary)] px-5 py-2.5 text-sm font-bold text-white shadow-[var(--shadow-cta)] transition hover:bg-[var(--color-primary-hover)]"
          >
            Get in touch
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href="#contact"
            className="rounded-[var(--radius-sm)] bg-[var(--color-primary)] px-3 py-2 text-xs font-bold text-white shadow-[var(--shadow-cta)]"
          >
            Contact
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white text-[var(--color-text-primary)]"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-white)] transition-[max-height] duration-300 ease-out md:hidden ${
          open ? 'max-h-[420px] shadow-[0_8px_24px_rgba(10,21,81,0.08)]' : 'max-h-0 border-transparent'
        }`}
      >
        <nav className="container flex flex-col gap-1 py-4" aria-label="Mobile">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-[var(--radius-sm)] px-3 py-3 text-sm font-semibold text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-light)] hover:text-[var(--color-primary)]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
