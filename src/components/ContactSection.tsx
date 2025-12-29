import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, MessageCircle, Wifi } from 'lucide-react';
import ContactForm from './ContactForm';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/raja',
    code: 'LI',
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/Raja-Simform',
    code: 'GH',
  },
  {
    name: 'LeetCode',
    icon: ExternalLink,
    url: 'https://leetcode.com/u/rgjha2001',
    code: 'LC',
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    url: 'https://api.whatsapp.com/send/?phone=%2B919106813893',
    code: 'WA',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary/50 text-xs font-mono mb-4">
              <Wifi className="w-4 h-4" />
              <span>establishing_connection...</span>
            </div>
            <h2 className="section-title">
              <span className="text-primary">//</span> Let's <span className="neon-text">Connect</span>
            </h2>
            <p className="section-subtitle">/* init.communication.protocol() */</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="font-display text-xl font-semibold mb-6 uppercase tracking-wider">
                <span className="text-primary">&gt;</span> Send_Message
              </h3>
              <ContactForm />
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-6">
              {/* Contact Info Card */}
              <div className="glass rounded-sm overflow-hidden neon-border">
                <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 border-b border-primary/20">
                  <span className="text-xs text-muted-foreground font-mono">contact_data.json</span>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-muted-foreground font-mono text-sm mb-6">
                    // Open to new projects and collaborations
                  </p>

                  <a
                    href="mailto:rgjha2001@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-sm bg-muted/30 hover:bg-muted/50 transition-colors group border border-primary/20 hover:border-primary/40"
                  >
                    <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/30 group-hover:glow-sm transition-all">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-primary/50 font-mono">EMAIL</p>
                      <p className="font-mono text-sm">rgjha2001@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+919106813893"
                    className="flex items-center gap-4 p-4 rounded-sm bg-muted/30 hover:bg-muted/50 transition-colors group border border-primary/20 hover:border-primary/40"
                  >
                    <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/30 group-hover:glow-sm transition-all">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-primary/50 font-mono">PHONE</p>
                      <p className="font-mono text-sm">+91 9106813893</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-sm bg-muted/30 border border-primary/20">
                    <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/30">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-primary/50 font-mono">LOCATION</p>
                      <p className="font-mono text-sm">Pune, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-sm overflow-hidden neon-border">
                <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 border-b border-primary/20">
                  <span className="text-xs text-muted-foreground font-mono">social_links.map()</span>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 rounded-sm bg-muted/30 hover:bg-muted/50 border border-primary/20 hover:border-primary/40 hover:glow-sm transition-all group"
                      >
                        <link.icon size={20} className="text-primary" />
                        <div>
                          <span className="font-mono text-sm block">{link.name}</span>
                          <span className="text-[10px] text-primary/50 font-mono">[{link.code}]</span>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Portfolio Link */}
                  <a
                    href="https://raja-jha-portfolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full mt-6 cyber-button"
                  >
                    Visit_Portfolio
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
