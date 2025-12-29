import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Programmer Analyst Trainee',
    company: 'Cognizant Technology Solutions',
    location: 'India',
    duration: '2025 - Present',
    description: 'Working as a full-stack developer, contributing to enterprise-level applications and collaborating with cross-functional teams.',
    current: true,
  },
  {
    title: 'React.js Developer Intern',
    company: 'Simform Solutions',
    location: 'Ahmedabad, India',
    duration: 'Jan 2025 - May 2025',
    description: 'Developed responsive web applications using React.js, collaborated on component libraries, and implemented modern UI/UX patterns.',
    current: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="section-subtitle">My professional journey</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-purple-500 to-primary/20 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative flex gap-8 group"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex flex-shrink-0 w-16 items-start pt-6">
                    <div className={`w-4 h-4 rounded-full border-4 border-background ${exp.current ? 'bg-primary animate-pulse-glow' : 'bg-muted'}`} />
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 glass rounded-2xl p-6 md:p-8 group-hover:glow-sm transition-all duration-500">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-primary" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-primary" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground">{exp.description}</p>
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
