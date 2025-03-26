import Image from "next/image";
import Link from "next/link";

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      title: "Inspiration für einen unvergesslichen Sommer",
      description:
        "Erweitern Sie Ihren Innenbereich mit den exklusiven Outdoor-Kollektionen von Minotti, Solpuri und EMU.",
      image: "/Images/Home/inspiration.jpg",
      date: "May 15, 2023",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Neue Farben & praktische Ergänzungen",
      description:
        "Der Sommer 2024 steht vor der Tür: Entdecken Sie unsere neusten Empfehlungen für den Innen- und Außenbereich.",
      image: "/Images/Home/secondImage.jpg",
      date: "April 28, 2023",
      readTime: "4 min read",
      featured: false,
    },
    {
      id: 3,
      title: "Salone del Mobile 2024 und Möbel für den Außenbereich",
      description:
        "Wir berichten von der Salone del Mobile 2024 und stellen Ihnen exklusive Möbel für den Außenbereich vor.",
      image: "/Images/Home/thidImage.jpg",
      date: "April 10, 2023",
      readTime: "3 min read",
      featured: false,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 flex flex-col items-center">
        <h2 className="text-lg mb-8 text-amber-400 text-center uppercase">Our Blog</h2>
        <p className="text-3xl md:text-4xl mb-8 max-w-2xl font-bold text-center">Neueste Nachrichten</p>
      </div>

      {/* Desktop Layout (featured + column) */}
      <div className="hidden lg:flex flex-row gap-8">
        {/* Featured Post (Left) */}
        <div className="w-1/2">
          <BlogCard post={posts[0]} />
        </div>

        {/* Secondary Posts (Right) */}
        <div className="w-1/2 flex flex-col gap-8">
          {posts.slice(1).map((post) => (
            <BlogCard key={post.id} post={post} isCompact />
          ))}
        </div>
      </div>

      {/* Tablet & Mobile Layout (all full-width cards) */}
      <div className="flex md:hidden lg:hidden flex-col gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <div className="sm:hidden md:grid grid-cols-2 lg:hidden flex-col gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

// Reusable Blog Card Component
const BlogCard = ({ post, isCompact = false }) => {
  return (
    <article className={`h-full overflow-hidden transition-shadow duration-300 ${isCompact ? "flex flex-row" : ""}`}>
      {/* Image */}
      <div className={`relative ${isCompact ? "w-1/3 h-48" : "w-full h-64 md:h-80"}`}>
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className={`p-6 flex flex-col ${isCompact ? "w-2/3" : ""}`}>
        <h3 className={`${isCompact ? "text-lg" : "text-xl md:text-2xl"} font-bold text-gray-900 mb-3`}>
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">{post.description}</p>
        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mt-auto"
        >
          Read More
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogSection;
