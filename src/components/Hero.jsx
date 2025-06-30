// src/components/Hero.jsx
import { TypeAnimation } from 'react-type-animation';
import profilePic from '../assets/profile.png';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* 🔮 Glowing Orb */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-500 rounded-full blur-[150px] opacity-30"></div>

      {/* 🌌 Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-800/20 via-purple-800/10 to-transparent"></div>

      {/* 🧩 Main Grid */}
      <div
        className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center relative z-10"
      >
        {/* 🔤 Left: Text */}
        <div className="text-center md:text-left" data-aos="fade-right">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 mb-4 font-[Quicksand]">
            Hi, I’m Kapil Bisht
          </h1>

          <TypeAnimation
            sequence={[
              'Web Developer 👨‍💻',
              2000,
              'React Enthusiast 🚀',
              2000,
              'Coder 💻',
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-xl sm:text-2xl text-gray-300 mb-6 block"
            repeat={Infinity}
          />

          <p className="text-gray-400 max-w-md mb-6">
            I create clean, modern, and responsive web applications using React and Tailwind CSS.
          </p>

          {/* 🌐 Social Logos */}
          <div className="flex justify-center md:justify-start space-x-6 mb-6">
            <a
              href="https://github.com/Kapilbisht2004"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <img
                src="/github.png"
                alt="GitHub"
                className="w-7 h-7 hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/kapilbisht02"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <img
                src="/linkedin.png"
                alt="LinkedIn"
                className="w-7 h-7 hover:scale-110 transition-transform"
              />
            </a>
            <a href="mailto:bishtkapil06@example.com" title="Email">
              <img
                src="/gmail.png"
                alt="Email"
                className="w-7 h-7 hover:scale-110 transition-transform"
              />
            </a>
          </div>

          {/* 📄 Resume + Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              download
              className="group relative inline-block px-6 py-3 rounded-xl text-indigo-500 dark:text-indigo-400 font-medium bg-transparent border-2 border-transparent bg-white/10 dark:bg-white/5 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="relative z-10">Download Resume</span>
              <span
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] group-hover:shadow-lg"
                aria-hidden="true"
              ></span>
              <span className="absolute inset-[2px] rounded-xl bg-white dark:bg-gray-900"></span>
            </a>

            <a
              href="#contact"
              className="group relative inline-block px-6 py-3 rounded-xl text-indigo-500 dark:text-indigo-400 font-medium bg-transparent border-2 border-transparent bg-white/10 dark:bg-white/5 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="relative z-10">Contact Me</span>
              <span
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] group-hover:shadow-lg"
                aria-hidden="true"
              ></span>
              <span className="absolute inset-[2px] rounded-xl bg-white dark:bg-gray-900"></span>
            </a>
          </div>
        </div>

        {/* 🧑‍💻 Right: Profile Image */}
        <div className="flex justify-center md:justify-end" data-aos="fade-left">
          <img
            src={profilePic}
            alt="Kapil Profile"
            className="w-96 h-96 rounded-full object-cover border-4 border-indigo-600 shadow-xl transition-transform hover:scale-105"
          />
        </div>
      </div>

      {/* 🔽 Scroll Down Arrow with "Explore" text */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center z-20 animate-bounce">
        <a href="#about" aria-label="Scroll Down">
          <ChevronDown className="mx-auto text-indigo-400 w-8 h-8 hover:scale-125 transition-transform duration-300" />
          <span className="mt-1 text-sm text-indigo-300 font-medium animate-pulse tracking-wide">
            Explore
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
