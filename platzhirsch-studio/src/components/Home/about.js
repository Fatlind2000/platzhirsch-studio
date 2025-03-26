import Image from "next/image";
import image1 from "../../../public/Images/Home/download.jpg";
import Signature from "../../../public/Images/Home/home6_png-2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";

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
    "/Images/Home/umbrosa.png ",
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
            <Image src={image1} alt="About our company" fill className="object-cover rounded-lg" />
          </div>
          <div className="w-full">
            <div className="relative h-20 w-full my-10">
              <Image src={Signature} alt="About our company" fill className="object-contain rounded-lg" />
            </div>
            <div className="w-full max-w-4xl mx-auto">
              <Slider {...settings}>
                {/* Slide 1 */}
                <div className="h-64 md:h-96 flex items-center justify-center">
                  <p className="text-black text-lg text-center font-halfbold text-gray-600">
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book."
                  </p>
                  <p className="font-bold text-md text-center text-black mt-10"> Joshua Keith</p>
                  <p className="text-black text-sm text-center font-halfbold text-gray-600 mt-3">Fresh Design</p>
                </div>

                {/* Slide 2 */}
                <div className="h-64 md:h-96  flex items-center justify-center">
                  <p className="text-black text-lg text-center font-halfbold text-gray-600">
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book."
                  </p>
                  <p className="font-bold text-md text-center text-black mt-10"> Sharon Keith</p>
                  <p className="text-black text-sm text-center font-halfbold text-gray-600 mt-3">Fresh Design</p>
                </div>

                {/* Slide 3 */}
                <div className="h-64 md:h-96 flex items-center justify-center">
                  <p className="text-black text-lg text-center font-halfbold text-gray-600">
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book."
                  </p>
                  <p className="font-bold text-md text-center text-black mt-10"> Sharon Gunther</p>
                  <p className="text-black text-sm text-center font-halfbold text-gray-600 mt-3">Fresh Design</p>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="w-full md:w-1/2 p-4 rounded-lg flex flex-col justify-center items-center">
          <h2 className="text-lg mb-3 text-amber-400 text-center uppercase">About Us</h2>
          <h4 className="sm:lg md:text:xl text-5xl font-bold mb-3 text-black text-center mt-10 mb-10">
            Creative solutions by professional designers
          </h4>
          <p className="text-center text-lg">
            Your kitchen is an expression of who you are, and its design should match your lifestyle. Whether you have
            traditional tastes or desire a modern feel, we can design your dream kitchen to suit any purpose.
          </p>
          <button className="px-6 py-2 bg-[#16222b] text-white font-medium rounded-lg transition-all duration-300 hover:bg-amber-400 hover:shadow-md flex justify-center items-center gap-3 mt-10 mb-15 ">
            Continue Reading <FaAngleRight />
          </button>
          <div className="relative h-150 w-full">
            <Image src={image1} alt="About our company" fill className="object-cover rounded-lg" />
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-15 mb-10">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`
              relative
              flex flex-col items-center
              ${
                index !== stats.length - 1
                  ? "after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-16 after:w-px after:bg-gray-300 sm:after:block after:hidden"
                  : ""
              }
            `}
          >
            <span className="text-4xl md:text-5xl font-bold text-amber-600">{stat.value}+</span>
            <span className="mt-2 text-lg text-gray-600 text-center">{stat.label}</span>
          </div>
        ))}
      </div> */}
      <div className="max-w-full mx-auto overflow-hidden mt-20">
        <Slider {...secondSettings}>
          {images.map((src, index) => (
            <div key={index} className="px-2">
              <div className="relative h-[40px] w-full">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-contain rounded-lg"
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
