"use client";
import Image from "next/image";
import image1 from "../../../public/Images/Home/aboutHome.jpg";
import image2 from "../../../public/Images/Home/secondAboutHome.jpg";

import Signature from "../../../public/Images/Home/home6_png-2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import Link from "next/link";

const About = () => {
  const settings = {
    dots: false, // Hide dots
    arrows: false, // Hide arrows
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    pauseOnHover: false, // Continue autoplay on hover
    fade: true, // Optional: Add fade transition
    cssEase: "linear", // Transition easing
  };
  const secondSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const images = [
    "/Images/Home/tuuci.png",
    "/Images/Home/heritage.png",
    "/Images/Home/umbrosa.png",
    "/Images/Home/coppenhagen.png",
    "/Images/Home/treca.png",
    "/Images/Home/trapa.png",
  ];

  const stats = [
    { value: "25", label: "Interior Design" },
    { value: "93", label: "Architecture" },
    { value: "48", label: "Construction" },
    { value: "68", label: "Projects Done" },
  ];
  return (
    <div className="py-20 max-w-7xl mx-auto ">
      <div className="flex flex-col md:flex-row gap-8 md:gap-8 sm:flex-col-reverse">
        {/* First Column */}
        <div className=" md:flex-col sm:flex-col-reverse w-full md:w-1/2 p-4 rounded-lg flex flex-col justify-center items-center ">
          <div className="relative h-150 w-full">
            <Image
              src={image1}
              alt="About our company"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 63vw"
              className="object-cover"
            />
          </div>
          <div className="w-full mb-10 md:mt-10">
            <div className="w-full max-w-4xl mx-auto">
              <h2 className="sm:lg md:text:xl text-5xl font-bold mb-5 text-[var(--quinary)] text-center mt-10 mb-10">
                Unsere Mission
              </h2>
              <p className="text-center text-ms text-[var(--secondary)]">
                Bei Platzhirsch Studio streben wir danach, kreative und durchdachte Lösungen zu entwickeln, die
                Markenidentitäten stärken und nachhaltig im Gedächtnis bleiben. Unser Ziel ist es, eine Brücke zwischen
                Design und Strategie zu schlagen, um unsere Kunden langfristig erfolgreich zu positionieren.
              </p>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center items-center">
          <h2 className={`text-lg mb-3 text-[var(--secondary)] text-center uppercase`}>ÜBER UNS</h2>
          <h3 className="sm:lg md:text:xl text-5xl font-bold mb-3 text-[var(--quinary)] text-center mt-5 mb-5">
            Ihre Vision, unser Antrieb
          </h3>
          <p className="text-center text-ms text-[var(--secondary)]">
            Platzhirsch Studio steht für kreatives Design, innovative Lösungen und maßgeschneiderte Markenstrategien.
            Wir bringen Ideen zum Leben – authentisch, modern und wirkungsvoll.
          </p>
          <Link
            href="/ueber-uns"
            className={`px-6 py-2 bg-[var(--secondary)] text-white font-medium rounded-lg transition-all duration-300 hover:bg-[var(--primary)] hover:shadow-md flex justify-center items-center gap-3 mt-10 mb-15 `}
          >
            Weiterlesen <FaAngleRight />
          </Link>
          <div className="relative h-150 w-full">
            <Image
              src={image2}
              alt="About our company"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 63vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto overflow-hidden mt-20">
        <Slider {...secondSettings}>
          {images.map((src, index) => (
            <div key={index} className="px-2">
              <div className="relative h-[40px] w-full">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default About;
