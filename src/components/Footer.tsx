import { Heart, Code2, Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-primary/20 relative">
      {/* Scan line effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-xs font-mono">
          <p className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-primary" />
            <span>Crafted with</span>
            <Heart size={12} className="text-destructive fill-destructive animate-pulse" />
            <span>by</span>
            <span className="text-primary neon-text">RAJA_JHA</span>
          </p>
          
          <p className="flex items-center gap-2">
            <Code2 size={14} className="text-primary" />
            <span className="text-primary/50">//</span>
            <span>React + TypeScript + Tailwind</span>
          </p>

          <p className="flex items-center gap-2">
            <span className="text-primary/50">&lt;</span>
            <span>© {new Date().getFullYear()} All rights reserved</span>
            <span className="text-primary/50">/&gt;</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
