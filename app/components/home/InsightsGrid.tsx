import Link from "next/link";

const posts = [
  {
    id: 1,
    tag: "Insight",
    date: "December 9, 2024",
    title: "What you can do before starting a branding process",
    excerpt:
      "Before starting a branding process with an agency, there are steps that you, as a client, can take to ensure an efficient collaboration...",
    author: "Kandi",
    image: "/images/kandi-steps-feature-900x604.jpg",
    href: "#",
  },
  {
    id: 2,
    tag: "Insight",
    date: "July 9, 2024",
    title: "Questions to ask a branding agency",
    excerpt:
      "Looking for a branding agency can be overwhelming as it's important to find an agency that is the right fit for your company...",
    author: "Kandi",
    image: "/images/Questions-Feature-V2-900x604.jpg",
    href: "#",
  },
  {
    id: 3,
    tag: "How-to",
    date: "May 28, 2024",
    title: "Annual report design agency services",
    excerpt:
      "We offer annual report design agency services, from concept to production. At Kandi, we have a long history of integrated reports...",
    author: "Kandi",
    image: "/images/Annual-Report-Feature-600x403.jpg",
    href: "#",
  },
];

export default function InsightsGrid() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-extralight mb-12">
          Thoughts, ideas and news
        </h2>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Image wrapper with zoom on hover */}
              <div className="relative overflow-hidden group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-white text-gray-800 text-xs px-2 py-1 rounded">
                  {post.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <p className="text-xs text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-lg font-medium mb-3">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-6">{post.excerpt}</p>
                <p className="text-xs text-gray-500 flex items-center gap-2">
                  <span className="inline-block w-4 h-4 bg-gray-200 rounded-full"></span>
                  {post.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <Link
          href="#"
          className="relative inline-block px-6 py-3 font-medium border border-black overflow-hidden group"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            See all posts
          </span>
          <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
        </Link>
      </div>
    </section>
  );
}
