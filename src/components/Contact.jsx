// src/components/Contact.jsx
const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-white dark:bg-gray-900 px-6 py-16 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center min-h-[500px]">

        {/* Left: Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-indigo-600">Get in Touch</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md border dark:bg-gray-800 dark:text-white"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md border dark:bg-gray-800 dark:text-white"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-3 rounded-md border dark:bg-gray-800 dark:text-white"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Info Cards */}
        <div className="space-y-6">
          {/* Email Box */}
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md flex items-center gap-4 border dark:border-gray-700">
            <img src="/gmail.png" alt="Email" className="w-8 h-8" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <p className="font-medium text-gray-900 dark:text-white">bishtkapil06@example.com</p>
            </div>
          </div>

          {/* Phone Box */}
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md flex items-center gap-4 border dark:border-gray-700">
            <img src="/phone.png" alt="Phone" className="w-8 h-8" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
              <p className="font-medium text-gray-900 dark:text-white">+91 9675814416</p>
            </div>
          </div>

          {/* Location Box */}
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md flex items-center gap-4 border dark:border-gray-700">
            <img src="/location.png" alt="Location" className="w-8 h-8" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
              <p className="font-medium text-gray-900 dark:text-white">Bareilly, Uttarpradesh</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
