import { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Download, ExternalLink } from 'lucide-react';

const roles = [
  'Full Stack Software Engineer',
  'React.js Developer',
  'Spring Boot Developer',
  'Problem Solver',
];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden mesh-gradient">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Hi, I'm{' '}
            <span className="gradient-text text-glow">Raja Jha</span>
          </h1>

          {/* Typewriter Role */}
          <div className="h-12 md:h-16 mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-3xl text-muted-foreground">
              <span className="text-primary">&lt;</span>
              {displayText}
              <span className="animate-pulse text-primary">|</span>
              <span className="text-primary">/&gt;</span>
            </p>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Transforming Ideas into Elegant and Scalable Solutions
          </p>

          {/* Location & Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-muted-foreground animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-primary" />
              <span>Pune, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-primary" />
              <a href="mailto:rgjha2001@gmail.com" className="hover:text-primary transition-colors">
                rgjha2001@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-primary" />
              <a href="tel:+919106813893" className="hover:text-primary transition-colors">
                +91 9106813893
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 glow"
            >
              View My Work
              <ExternalLink size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 glass glass-hover px-8 py-4 rounded-full font-semibold"
            >
              Get In Touch
              <Download size={18} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
