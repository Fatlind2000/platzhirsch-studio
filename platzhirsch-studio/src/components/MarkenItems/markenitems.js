"use client";
import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <div
    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-black/30 hover:bg-black/50  p-4 transition-all"
    onClick={onClick}
  >
    <FiChevronRight className="text-white text-2xl" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-black/30 hover:bg-black/50  p-4 transition-all"
    onClick={onClick}
  >
    <FiChevronLeft className="text-white text-2xl" />
  </div>
);

export default function BrandPage({ marke }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />, // Corrected position
    prevArrow: <PrevArrow />, // Corrected position
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "40px",
        }}
        className="absolute inset-0 flex items-center justify-center z-10 hover:pointer w-full"
      >
        <ul className="m-0 p-0 flex items-center justify-center pointer-events-auto">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`transition-all duration-300 mx-1.5 rounded-full ${
          i === currentSlide ? "w-4 h-4 border-2 border-white bg-transparent" : "w-3 h-3 bg-white opacity-50"
        }`}
      />
    ),
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
        },
      },
    ],
  };

  console.log(marke);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Brand Info Section */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-4">Gründungsjahr: {marke.grundungsjahr}</h2>
            <h2 className="text-xl font-semibold mb-4">Herkunftsland: {marke.herkunftsland}</h2>
            <h2 className="text-xl font-semibold mb-8">Gründer: {marke.grunder}</h2>

            <div className="mb-8">
              <a
                href={marke.website || "https://www.minotti.com/en"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[var(--secondary)] hover:bg-[var(--primary)] text-white font-medium py-2 px-6 rounded transition duration-300"
              >
                Official Website
              </a>
            </div>
          </div>

          <div>
            <img
              src={`http://192.168.68.197:8000/${marke.logo}`}
              alt={`${marke.name} logo`}
              className="w-auto h-auto"
            />
          </div>
        </div>

        {/* Brand Description */}
        <div className="prose max-w-none mb-12">
          {marke.produkte && <p className="text-lg leading-relaxed mb-6">Produkte: {marke.produkte}</p>}
          {marke.beschreibung && <p className="text-lg leading-relaxed">{marke.beschreibung}</p>}
        </div>

        {/* Image Slider */}
        <div className="slider-container w-full relative">
          {marke.bild_anhagen.length === 0 ? null : marke.bild_anhagen.length === 1 ? (
            // Single image display
            <div className="w-full">
              <div
                className="relative w-full h-200 sm:max-h-[50dvh] md:max-h-140 bg-cover bg-center"
                style={{ backgroundImage: `url('http://192.168.68.197:8000/${marke.bild_anhagen[0].bild_anhagen}')` }}
              >
                <div className="absolute inset-0 bg-black opacity-10"></div>
              </div>
            </div>
          ) : (
            // Slider for multiple images
            <Slider {...settings}>
              {marke.bild_anhagen.map((image, index) => (
                <div key={index} className="slider-slide bg-cover bg-center w-full">
                  <div
                    className="relative w-full h-200 sm:max-h-[50dvh] md:max-h-140 bg-cover bg-center"
                    style={{ backgroundImage: `url('http://192.168.68.197:8000/${image.bild_anhagen}')` }}
                  >
                    <div className="absolute inset-0 bg-black opacity-10"></div>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
}
