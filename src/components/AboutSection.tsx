import { Code2, Layers, Cpu, Zap, Database, Globe } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full_Stack',
    description: 'End-to-end development',
    code: '0x01',
  },
  {
    icon: Layers,
    title: 'Scalable',
    description: 'Clean architecture',
    code: '0x02',
  },
  {
    icon: Cpu,
    title: 'Sys_Design',
    description: 'Efficient systems',
    code: '0x03',
  },
  {
    icon: Zap,
    title: 'Optimize',
    description: 'Performance first',
    code: '0x04',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary/50 text-xs font-mono mb-4">
              <span>{'<section id="about">'}</span>
            </div>
            <h2 className="section-title">
              <span className="text-primary">//</span> About <span className="neon-text">Me</span>
            </h2>
            <p className="section-subtitle">/* System.developer.info */</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Text - Terminal Style */}
            <div className="glass rounded-sm overflow-hidden neon-border">
              <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 border-b border-primary/20">
                <Database className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground font-mono">about_data.json</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-4">
                <div>
                  <span className="text-secondary">{"{"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-accent">"greeting"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-foreground">"Hey there! I'm Raja"</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-accent">"role"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-foreground">"Software Developer"</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-accent">"passion"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-foreground">"Full-stack web development"</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-accent">"skills"</span>
                  <span className="text-muted-foreground">: [</span>
                </div>
                <div className="pl-8 text-foreground">
                  <span>"Responsive web apps"</span><span className="text-muted-foreground">,</span><br />
                  <span>"Scalable frontend systems"</span><span className="text-muted-foreground">,</span><br />
                  <span>"Real-time collaboration tools"</span>
                </div>
                <div className="pl-4">
                  <span className="text-muted-foreground">],</span>
                </div>
                <div className="pl-4">
                  <span className="text-accent">"expertise"</span>
                  <span className="text-muted-foreground">: [</span>
                  <span className="text-primary">"React.js"</span>
                  <span className="text-muted-foreground">, </span>
                  <span className="text-primary">"Node.js"</span>
                  <span className="text-muted-foreground">, </span>
                  <span className="text-primary">"Android"</span>
                  <span className="text-muted-foreground">]</span>
                </div>
                <div>
                  <span className="text-secondary">{"}"}</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Highlight Cards */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={item.title}
                    className="glass rounded-sm p-4 group hover:glow-sm transition-all duration-500 neon-border"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/30">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-[10px] font-mono text-primary/50">{item.code}</span>
                    </div>
                    <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground font-mono">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Education Card */}
              <div className="glass rounded-sm p-6 neon-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/30">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-primary/50 font-mono mb-1">EDUCATION.exe</div>
                    <h4 className="font-display text-lg font-semibold mb-1 uppercase tracking-wide">B.E. Computer Engineering</h4>
                    <p className="text-muted-foreground text-sm font-mono">L.D. College of Engineering</p>
                    <div className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-sm bg-primary/10 border border-primary/30">
                      <span className="text-primary text-sm font-mono font-bold">CGPA: 8.6/10.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 text-primary/50 text-xs font-mono">
            <span>{'</section>'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
