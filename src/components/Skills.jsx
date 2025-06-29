const Skills = () => {
  const skillSections = [
    {
      title: '🧠 Frontend',
      color: 'text-indigo-400',
      shadow: 'hover:shadow-[0_4px_25px_rgba(129,140,248,0.4)]',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      title: '⚙️ Backend',
      color: 'text-green-400',
      shadow: 'hover:shadow-[0_4px_25px_rgba(74,222,128,0.4)]',
      skills: ['Node.js', 'Express.js', 'PHP', 'Python', 'Flask', 'REST APIs'],
    },
    {
      title: '🗃️ Databases',
      color: 'text-orange-400',
      shadow: 'hover:shadow-[0_4px_25px_rgba(251,191,36,0.4)]',
      skills: ['MongoDB', 'MySQL', 'SQLite'],
    },
    {
      title: '🛠️ DevOps & Tools',
      color: 'text-blue-400',
      shadow: 'hover:shadow-[0_4px_25px_rgba(96,165,250,0.4)]',
      skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'Netlify'],
    },
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-2">
          My Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-400">Technologies I use to build modern and scalable apps</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {skillSections.map((section, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl border border-white/20 bg-white/20 dark:bg-white/5 shadow-md backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 ${section.shadow}`}
          >
            <h3 className={`text-2xl font-semibold mb-4 ${section.color}`}>{section.title}</h3>
            <div className="grid grid-cols-2 gap-3">
              {section.skills.map((skill) => (
                <div
                  key={skill}
                  className={`px-4 py-2 rounded-lg text-sm text-center ${section.color} bg-white/10 border border-white/20 transition duration-300 transform hover:scale-105 ${section.shadow}`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
