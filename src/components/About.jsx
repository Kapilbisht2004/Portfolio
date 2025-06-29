// src/components/About.jsx
import devImage from '../assets/skills.png';

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500 overflow-hidden"
    >
      {/* 🔵 Optional background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500 opacity-20 rounded-full blur-[150px] z-0"></div>

      <div className="relative max-w-6xl mx-auto px-6 z-10 grid md:grid-cols-2 items-center gap-10">

        {/* 👈 Left: About Text */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I’m <span className="font-semibold text-indigo-600 dark:text-indigo-400">Kapil Bisht</span>, a final-year B.Tech student from Bareilly with a strong passion for web development.
            I specialize in building modern, responsive, and user-centric websites using technologies like <strong>React</strong> and <strong>Tailwind CSS</strong>.
            <br /><br />
            I'm constantly exploring new tools and frameworks to stay ahead in the fast-evolving world of web development. My goal is to craft digital experiences that are not just visually appealing, but also intuitive, accessible, and meaningful.
            <br /><br />
            Whether it's a sleek portfolio, an interactive UI, or a dynamic web app — I love turning ideas into reality through clean and efficient code.
          </p>

          {/* 🔗 Contact Info */}
          <div className="mt-8 flex flex-col gap-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span>👤</span> <span>Kapil Bisht</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span> <span>Bareilly, India</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📧</span>
              <a
                href="mailto:bishtkapil06@gmail.com"
                className="hover:underline text-indigo-600 dark:text-indigo-400"
              >
                bishtkapil06@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* 👉 Right: Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={devImage}
            alt="Developer Illustration"
            className="w-72 md:w-96 max-h-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
