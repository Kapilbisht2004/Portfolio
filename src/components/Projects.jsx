import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const allProjects = [
  {
    title: 'Text-to-Speech & Speech-to-Text App',
    description: 'A web-based tool for converting text to speech and vice versa.',
    category: 'JavaScript',
    tech: ['HTML', 'CSS', 'JavaScript', 'Speech API'],
    github: 'https://github.com/Kapilbisht2004/Text-to-speech-and-speechh-to-text',
    demo: '',
  },
  {
    title: 'Brain Tumor Detection',
    description: 'Deep learning model to detect brain tumors using MRI scans.',
    category: 'Machine Learning',
    tech: ['Python', 'CNN', 'TensorFlow', 'Keras'],
    github: 'https://github.com/Kapilbisht2004/Brain-tumor-prediction',
    demo: '',
  },
  {
    title: 'C to Python Transpiler',
    description: 'A GUI tool to convert C code into Python using PyQt5.',
    category: 'Python',
    tech: ['Python', 'C', 'PyQt5'],
    github: 'https://github.com/Kapilbisht2004/Ct-o-Py-convertor',
    demo: '',
  },
  {
    title: 'Custom Linux Shell',
    description: 'A GTK-based custom shell with command history and built-ins.',
    category: 'C/GTK',
    tech: ['C', 'GTK3', 'Linux'],
    github: 'https://github.com/Kapilbisht2004/Linux_Shell',
    demo: '',
  },
  {
    title: 'Credit Card Fraud Detection',
    description: 'ML Flask app that detects fraud in transaction data.',
    category: 'Machine Learning',
    tech: ['Flask', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/Kapilbisht2004/Credit-card-fraud-detection',
    demo: '',
  },
  {
    title: 'React Portfolio Website',
    description: 'Modern and animated personal portfolio built using React + Tailwind.',
    category: 'JavaScript',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/Kapilbisht2004/portfolio',
    demo: 'https://kapilbisht2004.github.io/portfolio',
  },
];

const categories = ['All', 'JavaScript', 'Python', 'Machine Learning', 'C/GTK'];

// 🎨 Dynamic title gradient by project
const getTitleGradient = (title) => {
  if (title.includes('Speech')) return 'from-pink-500 to-red-500';
  if (title.includes('Tumor')) return 'from-purple-500 to-rose-500';
  if (title.includes('Transpiler')) return 'from-blue-500 to-cyan-500';
  if (title.includes('Shell')) return 'from-green-600 to-green-300';
  if (title.includes('Fraud')) return 'from-yellow-500 to-orange-500';
  if (title.includes('Portfolio')) return 'from-indigo-500 to-purple-500';
  return 'from-indigo-500 to-pink-500';
};

const Projects = () => {
  const [selected, setSelected] = useState('All');

  const filtered =
    selected === 'All'
      ? allProjects
      : allProjects.filter((proj) => proj.category === selected);

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 mb-8">
        Projects
      </h2>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-4 flex-wrap mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-5 py-2 rounded-full border font-medium ${
              selected === cat
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-transparent'
                : 'bg-transparent text-gray-700 dark:text-gray-300 border-gray-400'
            } transition hover:-translate-y-1 hover:shadow-md`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-10 px-6 max-w-6xl mx-auto">
        {filtered.map((project, index) => (
          <div
            key={index}
            className="relative rounded-2xl p-6 bg-white dark:bg-gray-800 border border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(139,92,246,0.8)]"
          >
            <h3
              className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${getTitleGradient(
                project.title
              )} mb-2`}
            >
              {project.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-3">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-start gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm rounded-lg bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition flex items-center gap-2"
              >
                GitHub <ExternalLink size={14} />
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm rounded-lg bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800 transition flex items-center gap-2"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
