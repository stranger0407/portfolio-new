import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
          <p className="flex items-center gap-2">
            Crafted with <Heart size={16} className="text-red-500 fill-red-500" /> by
            <span className="text-primary font-semibold">Raja Jha</span>
          </p>
          
          <p className="flex items-center gap-2">
            <Code2 size={16} className="text-primary" />
            Built with React, TypeScript & Tailwind CSS
          </p>

          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
