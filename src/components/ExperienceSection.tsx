import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: 'Programmer_Analyst_Trainee',
    company: 'Cognizant Technology Solutions',
    location: 'India',
    duration: '2025 - Present',
    description: 'Working as a full-stack developer, contributing to enterprise-level applications and collaborating with cross-functional teams.',
    current: true,
    code: 'EXP_001',
  },
  {
    title: 'React.js_Developer_Intern',
    company: 'Simform Solutions',
    location: 'Ahmedabad, India',
    duration: 'Jan 2025 - May 2025',
    description: 'Developed responsive web applications using React.js, collaborated on component libraries, and implemented modern UI/UX patterns.',
    current: false,
    code: 'EXP_002',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary/50 text-xs font-mono mb-4">
              <Briefcase className="w-4 h-4" />
              <span>career.timeline.render()</span>
            </div>
            <h2 className="section-title">
              <span className="text-primary">//</span> Work <span className="neon-text">Experience</span>
            </h2>
            <p className="section-subtitle">/* professional.journey.map() */</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative flex gap-8 group"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex flex-shrink-0 w-16 items-start pt-6">
                    <div className={`w-4 h-4 rounded-sm border-2 border-primary ${exp.current ? 'bg-primary animate-cyber-pulse' : 'bg-background'}`} />
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 glass rounded-sm overflow-hidden group-hover:glow-sm transition-all duration-500 neon-border">
                    {/* Card Header */}
                    <div className="flex items-center justify-between px-6 py-3 bg-muted/30 border-b border-primary/20">
                      <span className="text-xs font-mono text-primary/50">{exp.code}</span>
                      {exp.current && (
                        <span className="px-3 py-1 rounded-sm bg-primary/20 text-primary text-xs font-mono uppercase tracking-wider border border-primary/30 animate-pulse">
                          Active
                        </span>
                      )}
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="font-display text-xl font-semibold mb-1 uppercase tracking-wide">
                          <ChevronRight className="inline w-5 h-5 text-primary mr-1" />
                          {exp.title}
                        </h3>
                        <p className="text-accent font-mono">{exp.company}</p>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-xs">
                        <div className="flex items-center gap-2 glass px-3 py-1 rounded-sm neon-border">
                          <Calendar size={12} className="text-primary" />
                          <span className="font-mono">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 glass px-3 py-1 rounded-sm neon-border">
                          <MapPin size={12} className="text-primary" />
                          <span className="font-mono">{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                        <span className="text-primary">// </span>
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
