// src/components/Resume.jsx

const Resume = () => (
  <section id="resume" className="py-16 bg-gray-50 dark:bg-gray-900 text-center">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Resume</h2>
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
      <iframe
        src="/resume.pdf"
        className="w-full h-[500px] rounded border"
        title="Kapil's Resume"
      ></iframe>
      <a
        href="/resume.pdf"
        download
        className="mt-4 inline-block px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Download Resume
      </a>
    </div>
  </section>
);

export default Resume;
