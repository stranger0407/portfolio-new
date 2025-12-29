import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Web Application',
    description: 'Full-stack eCommerce platform with authentication, cart system, product browsing, and secure sessions. Implemented modular Angular UI and integrated Spring Boot REST APIs for smooth data flow.',
    technologies: ['Spring Boot', 'Angular', 'REST APIs', 'SQL'],
    github: 'https://github.com/Raja-Simform/ecommerce-app',
    featured: true,
  },
  {
    title: 'Netflix Clone',
    description: 'Netflix-style streaming interface with Firebase authentication and dynamic content rendering using TMDb API. Fully responsive UI with optimized image loading and smooth transitions.',
    technologies: ['React', 'Firebase', 'TMDb API'],
    github: 'https://github.com/Raja-Simform/netflix-clone',
    featured: true,
  },
  {
    title: 'Atomix – Component Library',
    description: 'Reusable UI component library featuring modals, inputs, tabs, and more. Documented in Storybook for consistency and ease of integration across multiple projects.',
    technologies: ['React', 'TypeScript', 'Storybook'],
    github: 'https://github.com/Raja-Simform/Atomix',
    featured: true,
  },
  {
    title: 'India Post Tracker',
    description: 'Postal tracking UI using public APIs with clean data visualization. Features advanced search by PIN code or branch name with detailed delivery status and location data.',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/Raja-Simform/IndiaPost',
    demo: 'https://india-post-gy2ty90a5-raja-jhas-projects.vercel.app/',
  },
  {
    title: 'React Custom Hooks Library',
    description: 'Reusable hooks for API calls, auth handling, and UI abstractions. Simplifies state management and enhances code reusability across modern React applications.',
    technologies: ['React', 'TypeScript'],
    github: 'https://github.com/Raja-Simform/CustomHooks',
    demo: 'https://custom-hooks-jade.vercel.app/',
  },
  {
    title: 'Interactive Paint Studio',
    description: 'Canvas-based drawing tool with shapes, colors, undo/redo, and custom brushes. Feature-rich digital painting application with intuitive canvas manipulation.',
    technologies: ['React', 'TypeScript'],
    github: 'https://github.com/Raja-Simform/React-Paint-App/tree/dev',
    demo: 'https://react-paint-app-rosy.vercel.app/',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">Things I've built</p>
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
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                        title="View Code"
                      >
                        <Github size={18} className="text-muted-foreground hover:text-foreground" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} className="text-muted-foreground hover:text-foreground" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-1 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-primary" />
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
