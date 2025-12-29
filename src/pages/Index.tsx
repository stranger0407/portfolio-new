import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import usePageAnalytics from '@/hooks/usePageAnalytics';

const Index = () => {
  usePageAnalytics();

  return (
    <>
      <Helmet>
        <title>Raja Jha - Full Stack Software Engineer | React, Angular, Spring Boot</title>
        <meta 
          name="description" 
          content="Full Stack Software Engineer at Cognizant with expertise in React, Angular, Spring Boot, TypeScript, and cloud technologies. Building scalable web applications and innovative solutions." 
        />
        <meta 
          name="keywords" 
          content="Raja Jha, Full Stack Developer, Software Engineer, React Developer, Angular Developer, Spring Boot, TypeScript, Java, Web Development, Cognizant, Portfolio" 
        />
        <meta name="theme-color" content="#3B82F6" />
        <meta property="og:title" content="Raja Jha - Full Stack Software Engineer" />
        <meta property="og:description" content="Transforming Ideas into Elegant and Scalable Solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://raja-jha-portfolio.vercel.app/" />
        <link rel="canonical" href="https://raja-jha-portfolio.vercel.app/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
