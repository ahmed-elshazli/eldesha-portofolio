import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { AllGraphicProjects } from './components/AllGraphicProjects';
import { AllUIUXProjects } from './components/AllUIUXProjects';

type Page = 'home' | 'graphic' | 'uiux';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  useEffect(() => {
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  if (currentPage === 'graphic') {
    return (
      <div className="min-h-screen bg-[#1A1325] overflow-x-hidden">
        <Navbar />
        <AllGraphicProjects onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  if (currentPage === 'uiux') {
    return (
      <div className="min-h-screen bg-[#1A1325] overflow-x-hidden">
        <Navbar />
        <AllUIUXProjects onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1325] overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProjectsShowcase onNavigateToGraphic={() => setCurrentPage('graphic')} onNavigateToUIUX={() => setCurrentPage('uiux')} />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}