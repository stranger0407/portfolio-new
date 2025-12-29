const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Frontend',
    skills: ['React', 'Angular', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'Redux'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Backend',
    skills: ['Spring Boot', 'Node.js'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Database',
    skills: ['MySQL'],
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'DevOps/Cloud',
    skills: ['Docker', 'AWS', 'Jenkins'],
    color: 'from-red-500 to-rose-500',
  },
  {
    title: 'Tools',
    skills: ['GitHub', 'VS Code'],
    color: 'from-indigo-500 to-violet-500',
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="section-subtitle">Technologies I work with</p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass rounded-2xl p-6 group hover:scale-[1.02] transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
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
