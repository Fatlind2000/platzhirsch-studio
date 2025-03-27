import Image from "next/image";
import Link from "next/link";

const AlternatingLayoutGrid = () => {
  const items = [
    {
      title: "Modern Living Room Designs",
      description:
        "Discover our curated collection of contemporary living room furniture that combines comfort with sleek, modern aesthetics. Perfect for urban spaces.",
      image: "/Images/Home/download.jpg",
      link: "/living-room",
    },
    {
      title: "Outdoor Furniture Collection",
      description:
        "Transform your patio or garden with our weather-resistant outdoor furniture. Designed for style and durability in all seasons.",
      image: "/Images/Home/download.jpg",
      link: "/outdoor",
    },
    {
      title: "Minimalist Bedroom Solutions",
      description:
        "Create your perfect sanctuary with our minimalist bedroom designs. Clean lines, quality materials, and peaceful aesthetics.",
      image: "/Images/Home/download.jpg",
      link: "/bedroom",
    },
    {
      title: "Luxury Kitchen Essentials",
      description:
        "Elevate your cooking space with our premium kitchen furniture and accessories. Where functionality meets high-end design.",
      image: "/Images/Home/download.jpg",
      link: "/kitchen",
    },
    {
      title: "Home Office Innovations",
      description:
        "Productive workspaces designed for comfort and efficiency. Our home office solutions adapt to your professional needs.",
      image: "/Images/Home/download.jpg",
      link: "/office",
    },
  ];

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
            index % 2 === 0 ? "" : "md:grid-flow-dense"
          }`}
        >
          {/* Image - appears first on even indexes, second on odd indexes */}
          <div className={`relative h-[300px] md:h-[500px] ${index % 2 === 0 ? "" : "md:col-start-2"}`}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover rounded-lg shadow-md"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Content - appears second on even indexes, first on odd indexes */}
          <div className={`${index % 2 === 0 ? "" : "md:col-start-1 md:row-start-1"}`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--secondary)]/90">{item.title}</h2>
            <p className="text-[var(--secondary)]/80 mb-6 text-md">{item.description}</p>
            <Link
              href={item.link}
              className="inline-block px-6 py-3 bg-[var(--primary)]/90 text-white rounded-lg hover:bg-[var(--primary)] transition-colors font-medium"
            >
              View Collection
              <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlternatingLayoutGrid;
