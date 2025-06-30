const Resume = () => (
  <section
    id="resume"
    className="py-16 bg-gray-50 dark:bg-gray-900 text-center"
    data-aos="fade-up"
  >
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
      Resume
    </h2>

    {/* 🔲 Resume Box with hover glow & lift */}
    <div
      className="max-w-3xl mx-auto transform transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] rounded-xl"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
        <iframe
          src="/resume.pdf"
          className="w-full h-[500px] rounded border"
          title="Kapil's Resume"
        ></iframe>

        {/* 🔽 Download Button */}
        <div className="flex justify-center">
          <a
            href="/resume.pdf"
            download
            className="group relative mt-6 inline-block px-6 py-3 rounded-xl text-indigo-500 dark:text-indigo-400 font-medium
                       bg-white/10 dark:bg-white/5 border-2 border-transparent
                       hover:-translate-y-1 transition-all duration-300 shadow-md
                       hover:shadow-[0_0_12px_rgba(99,102,241,0.5)]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="relative z-10">Download Resume</span>

            {/* Background Fill */}
            <span className="absolute inset-[2px] rounded-xl bg-white dark:bg-gray-900 z-0"></span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
