import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

import { BsArrowRight } from "react-icons/bs";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
    // Custom dot positioning
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px", // Adjust this value to position vertically
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
  };
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const SliderData = [
    {
      img: "/Images/Home/bannerImage.jpg",
      title: "Minotti",
      description: "Der Garten als Erweiterung des anspruchvollen Wohnraums",
    },
    {
      img: "/Images/Home/bannerImage.webp",
      title: "Treca Paris",
      description: "Schlafen wie Gott in Frankeich",
    },
    {
      img: "/Images/Home/bannerImage-1.webp",
      title: "Poliform",
      description: "Der Sommer 2024 kann kommen",
    },
    {
      img: "/Images/Home/bannerImage-1.jpg",
      title: "Poliform Bed",
      description: "Designmöbel für den Wohn- und Schlafbereich",
    },
    {
      img: "/Images/Home/bannerImage-2.jpg",
      title: "Flos",
      description: "Ausdrucksstarke Leuchten-Designs",
    },
    {
      img: "/Images/Home/bannerImage-3.jpg",
      title: "Poliform Cucine",
      description: "Modulares Küchendesign aus Italien",
    },
    {
      img: "/Images/Home/bannerImage-4.jpg",
      title: "Rimadesio",
      description: "Elegante Wand- und Regalsysteme",
    },
    {
      img: "/Images/Home/bannerImage-5.jpg",
      title: "ClassiCon",
      description: "Möbelstücke zeitgenössischer Designer",
    },
  ];
  return (
    <div className="slider-container w-full h-dvh md:h-180">
      <Slider {...settings} beforeChange={(current, next) => setCurrentSlide(next)}>
        {SliderData.map((item, index) => (
          <div key={index} className="slider-slide w-full h-dvh md:h-180 relative">
            {/* Next.js Image component with priority for first slide */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={item.img}
                alt={item.title}
                priority={index === 0} // Only priority for first image
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Veil (Darker Overlay) */}
            <div className="absolute inset-0 bg-black opacity-65"></div>

            {/* Content (Text & Button) */}
            <div className="relative flex justify-center items-center flex-col h-dvh md:h-210 w-full p-5 text-center">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:max-w-[800px] xl:text-7xl">
                {item.title}
              </h1>
              <p className="text-white text-md md:text-xl mt-5 mx-auto max-w-full md:max-w-[800px] lg:max-w-[1000px] mb-4">
                {item.description}
              </p>
              <Link href={`/marken/${item.title.toLowerCase()}`}>
                <button className="mx-auto inline-flex items-center gap-2 justify-center text-sm bg-[#765119] text-white font-bold cursor-pointer px-8 py-3 rounded-full hover:bg-[#765119] transition delay-150 hover:text-white">
                  JETZT NACHRICHT SENDEN <BsArrowRight />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
