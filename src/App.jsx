import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';
import BrandBar from './components/BrandBar';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import WhyMeSection from './components/WhyMeSection';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <BrandBar />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <WhyMeSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
