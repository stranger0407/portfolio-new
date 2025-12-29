import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, MessageCircle } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/raja',
    color: 'hover:text-blue-400',
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/Raja-Simform',
    color: 'hover:text-gray-300',
  },
  {
    name: 'LeetCode',
    icon: ExternalLink,
    url: 'https://leetcode.com/u/rgjha2001',
    color: 'hover:text-yellow-400',
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    url: 'https://api.whatsapp.com/send/?phone=%2B919106813893',
    color: 'hover:text-green-400',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="section-subtitle">Get in touch with me</p>
          </div>

          <div className="glass rounded-3xl p-8 md:p-12 gradient-border">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Reach Out</h3>
                  <p className="text-muted-foreground mb-8">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:rgjha2001@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:glow-sm transition-all">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">rgjha2001@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+919106813893"
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:glow-sm transition-all">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+91 9106813893</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Pune, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
                  <p className="text-muted-foreground mb-8">
                    Connect with me on social platforms to stay updated with my latest work and projects.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-xl glass glass-hover text-muted-foreground ${link.color} transition-all`}
                    >
                      <link.icon size={24} />
                      <span className="font-medium">{link.name}</span>
                    </a>
                  ))}
                </div>

                {/* Portfolio Link */}
                <a
                  href="https://raja-jha-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:scale-[1.02] glow transition-all"
                >
                  Visit Portfolio
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
