// src/components/Contact.jsx
import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    await fetch('https://formsubmit.co/ajax/bishtkapil06@gmail.com', {
      method: 'POST',
      body: data,
    });

    setSubmitted(true);
    form.reset();
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-white dark:bg-gray-900 px-6 py-16 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center min-h-[500px]">
        
        {/* 🔹 Left: Contact Form */}
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-6 text-indigo-600">Get in Touch</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded-md border dark:bg-gray-800 dark:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-md border dark:bg-gray-800 dark:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="p-3 rounded-md border dark:bg-gray-800 dark:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
            ></textarea>

            <button
              type="submit"
              className="bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-green-600 font-medium mt-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Message sent! I’ll get back to you soon.
              </p>
            )}
          </form>
        </div>

        {/* 🔹 Right: Info Cards */}
        <div className="space-y-6" data-aos="fade-left">
          {/* Email */}
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border dark:border-gray-700 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]">
            <img src="/gmail.png" alt="Email" className="w-8 h-8" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <p className="font-medium text-gray-900 dark:text-white">bishtkapil06@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border dark:border-gray-700 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]">
            <img src="/phone.png" alt="Phone" className="w-8 h-8" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
              <p className="font-medium text-gray-900 dark:text-white">+91 9675814416</p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border dark:border-gray-700 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]">
            <img src="/location.png" alt="Location" className="w-8 h-8" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
              <p className="font-medium text-gray-900 dark:text-white">Bareilly, Uttar Pradesh</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
