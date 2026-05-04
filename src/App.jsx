import { ArrowRight, Brain, Mail, Network } from 'lucide-react';
import { useEffect } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Section from './components/Section';
import { buildSteps, features, projects, stack } from './data/portfolioData';

function HeroGraph() {
  return (
    <div className="relative h-[340px] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-6 shadow-xl">
      <svg viewBox="0 0 600 340" className="h-full w-full">
        <defs>
          <linearGradient id="lineGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <path d="M20 250 C 130 140, 200 260, 280 180 S 430 130, 570 75" stroke="url(#lineGrad)" strokeWidth="4" fill="none" />
        <path d="M20 210 C 140 110, 215 220, 300 145 S 430 95, 570 45" stroke="#c7d2fe" strokeOpacity="0.65" strokeWidth="2.2" fill="none" />
        {[{ x: 20, y: 250 }, { x: 130, y: 185 }, { x: 280, y: 180 }, { x: 430, y: 130 }, { x: 570, y: 75 }].map((node) => (
          <g key={`${node.x}-${node.y}`}>
            <circle cx={node.x} cy={node.y} r="11" fill="#0f172a" stroke="#a5b4fc" strokeWidth="3" />
            <circle cx={node.x} cy={node.y} r="4" fill="#FF6100" />
          </g>
        ))}
      </svg>
      <div className="absolute bottom-4 right-4 rounded-xl border border-indigo-200/40 bg-white/95 px-3 py-2 text-xs text-slate-700 shadow">
        trajectory intelligence
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <form className="rounded-2xl border border-slate-100 bg-white p-7 shadow-[0_10px_26px_rgba(17,24,39,0.08)]">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Name
          <input className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition duration-200 focus:border-[#4F46E5] focus:bg-white" type="text" placeholder="Your name" />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Email
          <input className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition duration-200 focus:border-[#4F46E5] focus:bg-white" type="email" placeholder="you@domain.com" />
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium text-slate-700">
        Message
        <textarea className="mt-2 min-h-32 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition duration-200 focus:border-[#4F46E5] focus:bg-white" placeholder="Tell me about your project or role..." />
      </label>
      <div className="mt-5">
        <Button type="submit" variant="primary">Send Message</Button>
      </div>
    </form>
  );
}

export default function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827]">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold tracking-tight text-[#0F172A]">AI Engineer Portfolio</a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#projects" className="hover:text-[#0F172A]">Projects</a>
            <a href="#build" className="hover:text-[#0F172A]">How I Build</a>
            <a href="#stack" className="hover:text-[#0F172A]">Stack</a>
            <a href="#contact" className="hover:text-[#0F172A]">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="reveal bg-gradient-to-br from-[#0F172A] to-[#1E293B] py-24">
          <div className="mx-auto w-full max-w-[1200px] px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-200/30 bg-indigo-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100">
                <Brain size={14} /> AI Engineering
              </p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
                Building Intelligent Systems That Scale
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-300">
                AI Engineer focused on real-world ML systems, trajectory modeling, and multimodal learning.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#projects" variant="primary">View Projects</Button>
                <Button href="#contact" variant="secondary">Contact Me</Button>
              </div>
            </div>
            <HeroGraph />
          </div>
          </div>
        </section>

        <Section
          id="features"
          eyebrow="Core Focus"
          title="Applied AI capabilities"
          description="Product-minded machine learning delivered through modular, measurable, and deployable systems."
          className="bg-white"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="group">
                  <div className="mb-4 inline-flex rounded-xl bg-indigo-50 p-3 text-[#4F46E5] transition-colors duration-300 group-hover:bg-indigo-100">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#111827]">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Projects"
          title="Selected AI and data products"
          description="Conversion-focused project cards with concise technical context and fast access to details."
          className="bg-[#F9FAFB]"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title}>
                <h3 className="text-lg font-semibold text-[#111827]">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={`${project.title}-${tag}`} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F46E5] transition duration-300 hover:gap-2"
                >
                  View Details <ArrowRight size={16} />
                </a>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="build"
          eyebrow="Method"
          title="How I Build Systems"
          description="An end-to-end engineering flow from data reliability to production operations."
          className="bg-white"
        >
          <div className="grid gap-4 md:grid-cols-4">
            {buildSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_8px_24px_rgba(17,24,39,0.06)]">
                  {index < buildSteps.length - 1 && (
                    <div className="absolute right-[-18px] top-1/2 hidden h-[2px] w-9 -translate-y-1/2 bg-gradient-to-r from-indigo-300 to-slate-300 md:block" />
                  )}
                  <div className="mb-3 inline-flex rounded-lg bg-slate-100 p-2 text-[#4F46E5]"><Icon size={18} /></div>
                  <h3 className="text-lg font-semibold text-[#111827]">{step.title}</h3>
                  <p className="mt-2 text-sm text-[#6B7280]">{step.detail}</p>
                </div>
              );
            })}
          </div>
        </Section>

        <Section
          id="stack"
          eyebrow="Experience"
          title="Tools and stack"
          description="Technologies I use to design, train, evaluate, and ship machine learning systems."
          className="bg-[#F9FAFB]"
        >
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_10px_28px_rgba(17,24,39,0.06)]">
            <div className="mb-5 flex items-center gap-2 text-[#0A1551]">
              <Network size={18} />
              <p className="text-sm font-semibold uppercase tracking-[0.16em]">AI Engineer Stack</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {stack.map((item) => (
                <span key={item} className="rounded-xl border border-indigo-100 bg-indigo-50/60 px-4 py-2 text-sm font-medium text-[#0F172A] transition duration-300 hover:border-indigo-200 hover:bg-indigo-100/60">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Let’s build something meaningful"
          description="If you have a role, collaboration, or AI product challenge in mind, feel free to reach out."
          className="bg-white"
        >
          <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_10px_28px_rgba(17,24,39,0.06)]">
              <div className="mb-4 inline-flex rounded-xl bg-orange-50 p-3 text-[#FF6100]"><Mail size={20} /></div>
              <h3 className="text-xl font-semibold text-[#111827]">Open to opportunities</h3>
              <p className="mt-2 text-[#6B7280]">I’m always interested in practical AI systems and product-facing machine learning problems.</p>
              <div className="mt-5 space-y-2 text-sm text-slate-600">
                <p>Email: yigitturan19319@gmail.com</p>
                <p>LinkedIn: /in/yaşar-yiğit-turan-</p>
                <p>GitHub: /yyigitturan</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>
    </div>
  );
}
