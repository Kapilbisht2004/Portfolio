import posts from '../data/posts';

const Blogs = () => (
  <section id="blogs" className="py-16 bg-white dark:bg-gray-900 text-center">
    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Featured Blogs</h2>
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
      {posts.featured.map(post => (
        <div key={post.id} data-aos="fade-up" className="p-6 bg-gray-50 dark:bg-gray-800 rounded shadow">
          <h3 className="text-2xl font-semibold text-indigo-600">{post.title}</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{post.excerpt}</p>
          <div className="mt-4 text-sm text-gray-500">{post.author} • {post.date}</div>
          <a href={post.url} target="_blank" className="mt-2 inline-block text-indigo-500 underline">Read More</a>
        </div>
      ))}
    </div>

    <h2 className="text-3xl font-bold my-6 text-gray-900 dark:text-white">Latest Posts</h2>
    <div className="max-w-4xl mx-auto space-y-4">
      {posts.latest.map(post => (
        <div key={post.id} data-aos="zoom-in" className="p-4 bg-gray-50 dark:bg-gray-800 rounded shadow flex justify-between">
          <div>
            <h4 className="text-xl font-semibold text-indigo-600">{post.title}</h4>
            <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
          </div>
          <div className="text-sm text-gray-500">{post.date}</div>
        </div>
      ))}
    </div>

    <div className="mt-10">
      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Stay Updated</h3>
      <form className="max-w-md mx-auto flex gap-2">
        <input type="email" placeholder="Your email" className="flex-1 px-4 py-2 rounded border dark:bg-gray-900 dark:text-white" />
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Subscribe</button>
      </form>
    </div>
  </section>
);

export default Blogs;
