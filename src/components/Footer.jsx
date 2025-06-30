// src/components/Footer.jsx
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className="bg-white dark:bg-gray-900 pt-4 pb-5 mt-10"
      data-aos="fade-up"
    >
      {/* 🔹 Only One Line */}
      <hr className="border-t border-gray-300 dark:border-gray-600 mb-4" />

      {/* 🔹 Name + Description + Icons */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Kapil
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Creating beautiful, functional websites and applications with a focus
          on user experience and clean code.
        </p>

        {/* 🔹 Glowing Social Icons */}
        <div className="flex justify-center gap-6 mt-3">
          <a
            href="https://github.com/Kapilbisht2004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <Github className="w-6 h-6 text-purple-500 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
          </a>
          <a
            href="https://linkedin.com/in/kapilbisht2004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <Linkedin className="w-6 h-6 text-blue-500 drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
          </a>
          <a
            href="mailto:kapil.bisht123@gmail.com"
            className="hover:scale-110 transition"
          >
            <Mail className="w-6 h-6 text-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.8)]" />
          </a>
        </div>
      </div>

      {/* 🔹 Bottom Part: Links + Copyright */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Kapil Bisht. All rights reserved.
        </div>

        <div className="flex gap-5 text-sm font-medium text-gray-700 dark:text-gray-300">
          <a href="#home" className="hover:text-indigo-500 transition">
            Home
          </a>
          <a href="#about" className="hover:text-indigo-500 transition">
            About
          </a>
          <a href="#projects" className="hover:text-indigo-500 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-indigo-500 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
