import { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, ChevronRight, Cpu } from 'lucide-react';

const roles = [
  'Full_Stack_Engineer',
  'React.js_Developer',
  'Spring_Boot_Dev',
  'Problem_Solver',
];

const codeSnippets = [
  'const developer = new Raja();',
  'await buildAwesome(project);',
  'function transform(idea) {}',
  'return scalable_solution;',
  'git push origin main',
  'npm run deploy',
];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typeSpeed = isDeleting ? 30 : 80;

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden matrix-bg">
      {/* Floating code snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {codeSnippets.map((snippet, index) => (
          <div
            key={index}
            className="absolute text-primary/20 font-mono text-sm whitespace-nowrap animate-float"
            style={{
              left: `${10 + (index * 15)}%`,
              top: `${20 + (index * 12)}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${4 + index}s`,
            }}
          >
            {snippet}
          </div>
        ))}
      </div>

      {/* Cyber grid effect */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-5s' }} />
      
      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* System Status */}
          <div className="inline-flex items-center gap-3 glass rounded px-6 py-3 mb-8 animate-fade-up neon-border">
            <Cpu className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs uppercase tracking-widest">System Status:</span>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50" />
            <span className="text-primary text-xs font-bold">ONLINE</span>
          </div>

          {/* Terminal Window */}
          <div className="glass rounded-sm overflow-hidden mb-8 animate-fade-up neon-border" style={{ animationDelay: '0.1s' }}>
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 border-b border-primary/20">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-muted-foreground ml-4 font-mono">raja@portfolio:~</span>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 md:p-8 text-left font-mono">
              <div className="text-muted-foreground text-sm mb-2">
                <span className="text-primary">$</span> cat developer.info
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 tracking-wider">
                <span className="text-foreground">Hi, I'm </span>
                <span className="neon-text animate-flicker">RAJA JHA</span>
              </h1>
              
              <div className="text-muted-foreground text-sm mb-4">
                <span className="text-primary">$</span> echo $ROLE
              </div>
              <div className="h-10 md:h-14 mb-6">
                <p className="text-xl md:text-3xl font-display">
                  <span className="text-secondary">&lt;</span>
                  <span className="text-accent">{displayText}</span>
                  <span className="text-primary terminal-cursor">█</span>
                  <span className="text-secondary">/&gt;</span>
                </p>
              </div>

              <div className="text-muted-foreground text-sm">
                <span className="text-primary">$</span> cat mission.txt
              </div>
              <p className="text-muted-foreground mt-2 text-sm md:text-base">
                <span className="text-primary">&gt;</span> Transforming Ideas into Elegant and Scalable Solutions
              </p>
            </div>
          </div>

          {/* Location & Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-muted-foreground animate-fade-up text-sm" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-sm neon-border">
              <MapPin size={14} className="text-primary" />
              <span className="font-mono">Pune, IN</span>
            </div>
            <a href="mailto:rgjha2001@gmail.com" className="flex items-center gap-2 glass px-4 py-2 rounded-sm hover:glow-sm transition-all neon-border">
              <Mail size={14} className="text-primary" />
              <span className="font-mono">rgjha2001@gmail.com</span>
            </a>
            <a href="tel:+919106813893" className="flex items-center gap-2 glass px-4 py-2 rounded-sm hover:glow-sm transition-all neon-border">
              <Phone size={14} className="text-primary" />
              <span className="font-mono">+91 9106813893</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a href="#projects" className="cyber-button">
              <span className="flex items-center gap-2">
                View_Projects
                <ChevronRight size={18} />
              </span>
            </a>
            <a href="#contact" className="cyber-button">
              <span className="flex items-center gap-2">
                Init_Contact
                <ChevronRight size={18} />
              </span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-primary/50">
            <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
