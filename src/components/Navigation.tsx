import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'About', href: '/#about', code: '01' },
  { label: 'Skills', href: '/#skills', code: '02' },
  { label: 'Experience', href: '/#experience', code: '03' },
  { label: 'Projects', href: '/#projects', code: '04' },
  { label: 'Blog', href: '/blog', code: '05' },
  { label: 'Contact', href: '/#contact', code: '06' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('/#') && location.pathname === '/') {
      const element = document.querySelector(href.replace('/', ''));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (href: string) => {
    if (href === '/blog') {
      return location.pathname.startsWith('/blog');
    }
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3 border-b border-primary/20' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Terminal className="w-6 h-6 text-primary animate-pulse" />
          <span className="text-xl font-display font-bold neon-text tracking-widest">
            RAJA_JHA
          </span>
          <span className="text-primary terminal-cursor">_</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            item.href.startsWith('/') && !item.href.includes('#') ? (
              <Link
                key={item.href}
                to={item.href}
                className={`nav-link flex items-center gap-1 ${isActive(item.href) ? 'text-primary neon-text' : ''}`}
              >
                <span className="text-primary/50 text-[10px]">[{item.code}]</span>
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="nav-link flex items-center gap-1"
              >
                <span className="text-primary/50 text-[10px]">[{item.code}]</span>
                {item.label}
              </a>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary p-2 neon-border rounded"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded p-6 animate-fade-up border border-primary/30">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              item.href.startsWith('/') && !item.href.includes('#') ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`nav-link text-lg flex items-center gap-2 ${isActive(item.href) ? 'text-primary' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-primary">&gt;</span>
                  <span className="text-primary/50 text-xs">[{item.code}]</span>
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link text-lg flex items-center gap-2"
                  onClick={() => handleNavClick(item.href)}
                >
                  <span className="text-primary">&gt;</span>
                  <span className="text-primary/50 text-xs">[{item.code}]</span>
                  {item.label}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
