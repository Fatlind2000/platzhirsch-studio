"use client";
import { useState } from "react";
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

const ImageSlider = ({ images }) => {
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

  return (
    <div className="slider-container w-full relative">
      <Slider {...settings}>
        {/* Slide 1 */}
        {images.map((image, index) => (
          <div className="slider-slide bg-cover bg-center w-full">
            <div
              className="relative w-full h-200 sm:max-h-[50dvh] md:max-h-180 bg-cover bg-center"
              style={{ backgroundImage: `url('${image}')` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
