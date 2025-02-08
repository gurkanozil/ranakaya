import { Code, ExternalLink } from 'lucide-react'; // Icons used for Code and Live links
// import images for projects down here
import portfolio from '../images/projects/portfolio.png';
import riseup from '../images/projects/riseup.png';
// import PROJECTIMAGE from '../images/PROJECTIMAGE.png';

// import icons for tech down here
import figma from '../images/icons/figma.svg';
import react from '../images/icons/react.svg';
import vue from '../images/icons/vue.svg';
import netlify from '../images/icons/netlify.svg';
import github from '../images/icons/github.svg';
import tailwindcss from '../images/icons/tailwindcss.svg';
import bootstrap from '../images/icons/bootstrap.svg';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: (<>
        This website was designed by me in Figma and developed by <a className='font-bold hover:underline' href="https://gurkanozil.github.io/">G.M. Özil</a> using React.js and TailwindCSS.<br />
        It's hosted on Github Pages. Below you can find the source code.
      </>),
      image: portfolio,
      tech: [
      <><img src={figma} alt="Figma" className="w-6 h-6 mr-1" /><p>Figma</p></>,
      <><img src={react} alt="React" className="w-6 h-6 mr-1" /><p>React</p></>,
      <><img src={tailwindcss} alt="Tailwind" className="w-6 h-6 mr-1" /><p>TailwindCSS</p></>,
      <><img src={github} alt="Github" className="w-6 h-6 mr-1" /><p>Github Pages</p></>
    ],
      code: 'https://github.com/gurkanozil/ranakaya',
      live: 'https://gurkanozil.github.io/ranakaya',
    },
    {
      title: 'Rise Up Belgium',
      description: (<>
          This was a project I made at school.<br />
          It was designed using Figma, built with Vue.js and hosted on Netlify.<br />
          Feel free to visit the live website using the button below!
        </>),
      image: riseup,
      tech: [
      <><img src={figma} alt="Figma" className="w-6 h-6 mr-1" /><p>Figma</p></>,
      <><img src={vue} alt="Vue" className="w-6 h-6 mr-1" /><p>Vue</p></>,
      <><img src={bootstrap} alt="Tailwind" className="w-6 h-6 mr-1" /><p>Bootstrap</p></>,
      <><img src={netlify} alt="Netlify" className="w-6 h-6 mr-1" /><p>Netlify</p></>
    ],
      live: 'https://riseupbelgium.netlify.app/',
    },
    // Template for adding projects, remove // at beginning of each line
    //{
    //  title: 'Example', (required to show a project)
    //  description: (<> /put your HTML here/ </>),
    //  image: '#', either link to a URL or import from directory at beginning of file
    //  tech: ['#'],
    //  code: '#',
    //  live: '#',
    //},
  ];

  // Don't make changes below here
  return (
    <div id="Projects">
      <h2 className="text-6xl font-extrabold text-center text-pink-500 mb-12">PROJECTS</h2>
      <div className="grid gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-white rounded-xl shadow-2xl overflow-hidden">
            {project.image && project.title && ( //if image and title exist
              project.live ? ( // if live link exists, make the image clickable
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full min-h-48 max-h-64 object-cover object-top hover:scale-105 transition-transform duration-200 ease-in-out"
                  />
                </a>
              ) : ( // otherwise only show image if image and title exist
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full min-h-48 max-h-64 object-cover object-top hover:scale-105 transition-transform duration-200 ease-in-out"
                  />
              )
            )}
            <div className="p-6">
              {project.live ? ( // check if a live link exists for the project
                // If it exists, make the title clickable
                <a href={project.live} className="hover:underline" target="_blank" rel="noopener noreferrer">
                  <h3 className="text-3xl font-bold text-pink-500 mb-2">{project.title}</h3>
                </a>
              ) : (
                // If it doesn't exist, just display the title
                <h3 className="text-3xl font-bold text-pink-500 mb-2">{project.title}</h3>
              )}
              {project.description && ( //show description if it exists
                <p className="mb-4">{project.description}</p>
              )}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tech && project.tech.length > 0 && project.tech.map((tech) => ( //show tech if it exists
                  <span
                    key={tech}
                    className="flex flex-row px-4 py-1 bg-gray-100 text-gray-600 rounded-xl text-md tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.code && ( //show code link if it exists
                  <a
                    href={project.code}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors hover:underline"
                  >
                    <Code size={18} />
                    <span>Code</span>
                  </a>
                )}
                {project.live && ( //show live demo link if it exists
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors hover:underline"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;