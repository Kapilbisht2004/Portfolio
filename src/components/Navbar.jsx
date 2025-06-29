// src/components/Navbar.jsx
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  // ✅ Get default dark mode from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      return true;
    }
    return false;
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50">
      <h1 className="text-xl font-bold text-indigo-600 cursor-pointer">Kapil</h1>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="hover:text-indigo-500 transition"
          >
            {link}
          </a>
        ))}
        <button onClick={toggleTheme} className="ml-4" aria-label="Toggle Dark Mode">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleTheme} className="mr-4" aria-label="Toggle Dark Mode">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 px-6 py-4 flex flex-col gap-4 md:hidden z-40">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-500 transition"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
