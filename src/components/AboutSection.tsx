import { Code2, Layers, Cpu, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack',
    description: 'End-to-end web development',
  },
  {
    icon: Layers,
    title: 'Scalable',
    description: 'Clean & maintainable code',
  },
  {
    icon: Cpu,
    title: 'System Design',
    description: 'Efficient architectures',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimized solutions',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="section-subtitle">Get to know me better</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hey there! I'm Raja, a passionate Software Developer with a strong foundation in full-stack web development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I create responsive web applications, build clean and scalable frontend systems, and enjoy working on collaborative real-time tools.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I also love diving into system design, crafting efficient algorithms, and have hands-on experience with technologies like <span className="text-primary font-semibold">React.js</span>, <span className="text-primary font-semibold">Node.js</span> and <span className="text-primary font-semibold">Android (Java)</span>.
              </p>

              {/* Education Card */}
              <div className="glass rounded-2xl p-6 mt-8 gradient-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Bachelor of Engineering (B.E.)</h4>
                    <p className="text-muted-foreground">Computer Engineering</p>
                    <p className="text-sm text-muted-foreground mt-1">L.D. College of Engineering</p>
                    <div className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                      CGPA: 8.6/10.0
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="glass glass-hover rounded-2xl p-6 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
