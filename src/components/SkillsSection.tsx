import { Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    code: 'LANG',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++'],
    color: 'from-cyan-400 to-blue-500',
    hex: '#00ffff',
  },
  {
    title: 'Frontend',
    code: 'FRNT',
    skills: ['React', 'Angular', 'HTML', 'CSS', 'Bootstrap', 'Tailwind', 'Redux'],
    color: 'from-purple-400 to-pink-500',
    hex: '#ff00ff',
  },
  {
    title: 'Backend',
    code: 'BACK',
    skills: ['Spring Boot', 'Node.js'],
    color: 'from-green-400 to-emerald-500',
    hex: '#00ff66',
  },
  {
    title: 'Database',
    code: 'DATA',
    skills: ['MySQL'],
    color: 'from-orange-400 to-yellow-500',
    hex: '#ffaa00',
  },
  {
    title: 'DevOps',
    code: 'DEVS',
    skills: ['Docker', 'AWS', 'Jenkins'],
    color: 'from-red-400 to-rose-500',
    hex: '#ff4444',
  },
  {
    title: 'Tools',
    code: 'UTIL',
    skills: ['GitHub', 'VS Code'],
    color: 'from-indigo-400 to-violet-500',
    hex: '#8844ff',
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary/50 text-xs font-mono mb-4">
              <Terminal className="w-4 h-4" />
              <span>loading skills_matrix...</span>
            </div>
            <h2 className="section-title">
              <span className="text-primary">//</span> Technical <span className="neon-text">Skills</span>
            </h2>
            <p className="section-subtitle">/* core.competencies.load() */</p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass rounded-sm group hover:scale-[1.02] transition-all duration-500 overflow-hidden"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  borderColor: category.hex,
                  borderWidth: '1px',
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-primary/20 bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div 
                      className={`w-2 h-8 rounded-full bg-gradient-to-b ${category.color}`} 
                    />
                    <div>
                      <h3 className="font-display text-sm font-bold uppercase tracking-widest">{category.title}</h3>
                      <span className="text-[10px] font-mono text-muted-foreground">MODULE_{category.code}</span>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-primary/50">
                    [{category.skills.length}]
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="skill-badge"
                        style={{
                          animationDelay: `${skillIndex * 0.05}s`,
                        }}
                      >
                        <span className="text-primary/50 mr-1">&gt;</span>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress bar effect */}
                <div className="h-1 bg-muted">
                  <div 
                    className={`h-full bg-gradient-to-r ${category.color} opacity-50`}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
