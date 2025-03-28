"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "http://192.168.68.197:8000/api/method/platzhirsch_studio.platzhirsch_studio.doctype.news.api.news_data"
        );
        if (!response.ok) throw new Error("Fehler beim Abrufen der Daten");

        const data = await response.json();

        // Filter and format the data
        const formattedPosts = data.message
          .sort((a, b) => new Date(b.creation) - new Date(a.creation)) // Sort by date (newest first)
          .slice(0, 3) // Get only the 3 latest posts
          .map((post) => ({
            id: post.name,
            title: post.title,
            description: post.beschreibung,
            image: post.bild_anhagen,
            date: new Date(post.creation).toLocaleDateString("de-DE", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }),
            readTime: "3 min read", // Default value or you could calculate from content
            featured: false, // Will set the first one as featured below
          }));

        // Mark the first post as featured
        if (formattedPosts.length > 0) {
          formattedPosts[0].featured = true;
        }

        setPosts(formattedPosts);
      } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-lg mb-8 text-[var(--primary)] text-center uppercase">Neuigkeiten</h2>
          <p className="text-3xl md:text-4xl mb-8 max-w-2xl font-bold text-center text-[var(--quinary)]">
            Neueste Nachrichten
          </p>
        </div>
        <div className="flex justify-center">
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-lg mb-8 text-[var(--primary)] text-center uppercase">Neuigkeiten</h2>
          <p className="text-3xl md:text-4xl mb-8 max-w-2xl font-bold text-center text-[var(--quinary)]">
            Neueste Nachrichten
          </p>
        </div>
        <div className="flex justify-center">
          <p>Keine Beiträge gefunden.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 flex flex-col items-center">
        <h2 className="text-lg mb-8 text-[var(--primary)] text-center uppercase">Neuigkeiten</h2>
        <p className="text-3xl md:text-4xl mb-8 max-w-2xl font-bold text-center text-[var(--quinary)]">
          Neueste Nachrichten
        </p>
      </div>

      {/* Desktop Layout (featured + column) */}
      <div className="hidden lg:flex flex-row gap-8">
        {/* Featured Post (Left) */}
        {posts[0] && (
          <div className="w-1/2">
            <BlogCard post={posts[0]} />
          </div>
        )}

        {/* Secondary Posts (Right) */}
        <div className="w-1/2 flex flex-col gap-8">
          {posts.slice(1).map((post) => (
            <BlogCard key={post.id} post={post} isCompact />
          ))}
        </div>
      </div>

      {/* Tablet Layout (2 columns) */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Mobile Layout (all full-width cards) */}
      <div className="flex flex-col md:hidden gap-8">
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
        <img
          src={`http://192.168.68.197:8000${post.image}`}
          alt={post.title}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Content */}
      <div className={`p-6 flex flex-col ${isCompact ? "w-2/3" : ""}`}>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className={`${isCompact ? "text-lg" : "text-xl md:text-2xl"} font-bold text-[var(--quinary)] mb-3`}>
          {post.title}
        </h3>
        <p className="text-[var(--secondary)] mb-4 flex-grow">{post.description}</p>
        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center text-[var(--secondary)] hover:text-[var(--primary)] font-medium mt-auto"
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
