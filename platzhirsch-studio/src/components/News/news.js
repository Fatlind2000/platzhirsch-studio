"use client";
import React, { useState, useRef } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

const GridComponent = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const gridRef = useRef(null);

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Change page and scroll to top
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20" ref={gridRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentItems.map((item, index) => (
          <div key={item.id} className={`bg-white rounded-lg overflow-hidden  ${index === 0 ? "first-item" : ""}`}>
            {/* Image */}
            <div className="h-80 overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 pl-0">
              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 line-clamp-2">{item.title}</h3>

              {/* Date with calendar icon */}
              <div className="flex items-center text-gray-500 mb-4 text-md">
                <FaCalendarDays className="mr-3 text-[var(--primary)]/70" />
                <span className="text-lg">{item.date}</span>
              </div>

              {/* Description with ellipsis for overflow */}
              <p className="text-gray-600 mb-6 line-clamp-3 text-md leading-relaxed">{item.description}</p>

              {/* Read More button */}
              <a
                href={item.link}
                className="py-2 text-[var(--secondary)] hover:text-[var(--primary)] flex items-center gap-2 transition-colors duration-300 group"
              >
                <span className="font-medium">Read More</span>
                <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12">
          <nav className="flex items-center gap-2">
            <button
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === number ? "bg-[var(--primary)] text-white" : "border border-gray-300 hover:bg-gray-50"
                } transition-colors`}
              >
                {number}
              </button>
            ))}

            <button
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              Next
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

// Example usage with more than 10 items
const ExampleGrid = () => {
  const sampleItems = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    imageUrl: `/Images/Home/download.jpg`,
    title: `Sample Item ${i + 1}`,
    date: new Date(Date.now() - i * 86400000).toLocaleDateString(),
    description: `This is a sample description for item ${
      i + 1
    }. It contains details about the item and what makes it special.`.repeat(2),
    link: "#",
  }));

  return <GridComponent items={sampleItems} />;
};

export default ExampleGrid;
