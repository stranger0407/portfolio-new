import { ExternalLink, Github, Folder, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce_Platform',
    description: 'Full-stack eCommerce with auth, cart system, and secure sessions. Modular Angular UI + Spring Boot REST APIs.',
    technologies: ['Spring_Boot', 'Angular', 'REST', 'SQL'],
    github: 'https://github.com/Raja-Simform/ecommerce-app',
    featured: true,
    code: 'PRJ_001',
  },
  {
    title: 'Netflix_Clone',
    description: 'Netflix-style streaming interface with Firebase auth and TMDb API. Responsive UI with optimized loading.',
    technologies: ['React', 'Firebase', 'TMDb_API'],
    github: 'https://github.com/Raja-Simform/netflix-clone',
    featured: true,
    code: 'PRJ_002',
  },
  {
    title: 'Atomix_Component_Lib',
    description: 'Reusable UI component library with modals, inputs, tabs. Documented in Storybook.',
    technologies: ['React', 'TypeScript', 'Storybook'],
    github: 'https://github.com/Raja-Simform/Atomix',
    featured: true,
    code: 'PRJ_003',
  },
  {
    title: 'India_Post_Tracker',
    description: 'Postal tracking UI using public APIs. Advanced search by PIN code with detailed status data.',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/Raja-Simform/IndiaPost',
    demo: 'https://india-post-gy2ty90a5-raja-jhas-projects.vercel.app/',
    code: 'PRJ_004',
  },
  {
    title: 'Custom_Hooks_Library',
    description: 'Reusable hooks for API calls, auth handling, and UI abstractions.',
    technologies: ['React', 'TypeScript'],
    github: 'https://github.com/Raja-Simform/CustomHooks',
    demo: 'https://custom-hooks-jade.vercel.app/',
    code: 'PRJ_005',
  },
  {
    title: 'Paint_Studio',
    description: 'Canvas-based drawing tool with shapes, colors, undo/redo, and custom brushes.',
    technologies: ['React', 'TypeScript'],
    github: 'https://github.com/Raja-Simform/React-Paint-App/tree/dev',
    demo: 'https://react-paint-app-rosy.vercel.app/',
    code: 'PRJ_006',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 matrix-bg opacity-50" />
      <div className="absolute inset-0 cyber-grid opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary/50 text-xs font-mono mb-4">
              <Folder className="w-4 h-4" />
              <span>projects.forEach(render)</span>
            </div>
            <h2 className="section-title">
              <span className="text-primary">//</span> Featured <span className="neon-text">Projects</span>
            </h2>
            <p className="section-subtitle">/* repository.showcase() */</p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card group flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/30">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[10px] font-mono text-primary/50">{project.code}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary transition-colors uppercase tracking-wide">
                  <ChevronRight className="inline w-4 h-4 text-primary mr-1" />
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-1 mb-4 font-mono leading-relaxed">
                  <span className="text-primary/50">// </span>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-sm bg-muted border border-primary/20 text-primary font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-primary/20">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={14} />
                      <span>source</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
