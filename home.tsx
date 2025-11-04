import Hero from './portfolio/Hero';
import ProjectGrid from './portfolio/ProjectGrid';
import ImpactSection from './portfolio/ImpactSection';
import AboutSection from './portfolio/AboutSection';
import BackgroundAnimation from './portfolio/BackgroundAnimation';
import Header from './portfolio/Header';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <BackgroundAnimation />
      <Header />
      <div className="pt-20">
        <Hero />
        <ProjectGrid />
        <ImpactSection />
        <AboutSection />
      </div>
    </div>
  );
}