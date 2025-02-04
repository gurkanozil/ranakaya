import { Github, ExternalLink } from 'lucide-react';
import webpageScreenshot from '../images/webpage_screenshot.png';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio website',
      description: 'My portfolio website',
      image: webpageScreenshot,
      tech: ['Figma', 'React'],
      github: 'https://github.com/gurkanozil/ranakaya',
      live: 'https://gurkanozil.github.io/ranakaya',
    },
    //{
    //  title: 'empty',
    //  description: '#',
    //  image: '#',
    //  tech: ['#'],
    //  github: '#',
    //  live: '#',
    //},
  ];

  return (
    <div className="max-w-4xl">
      <h2 className="text-6xl font-extrabold text-pink-500 mb-12">PROJECTS</h2>
      <div className="grid gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-pink-500 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors"
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;