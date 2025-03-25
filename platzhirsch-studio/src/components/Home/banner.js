import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../Images/Home/download.jpg";
import Image2 from "../../Images/Home/download.jpg";
import Image3 from "../../Images/Home/download.jpg";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // Custom dot positioning
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px", // Adjust this value to position vertically
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
  return (
    <div className="slider-container w-full h-screen">
      <Slider {...settings} beforeChange={(current, next) => setCurrentSlide(next)}>
        {/* Slide 1 */}
        <div className="slider-slide bg-cover bg-center w-full h-screen" style={{ backgroundImage: `url(${Image1})` }}>
          <div className="flex justify-center items-center flex-col h-full w-full bg-black bg-opacity-50 p-5">
            <h1
              className="text-white text-center 
                          text-3xl max-w-full 
                          sm:text-4xl 
                          md:text-5xl 
                          lg:text-6xl lg:max-w-[800px]
                          xl:text-7xl"
            >
              Design Build Kitchen
            </h1>
            <p
              className="text-white text-center 
                         text-lg md:text-xl 
                         mt-5 mx-auto
                         max-w-full md:max-w-[800px] lg:max-w-[1000px]"
            >
              Kitchens should be designed around what's truly important, family, food, and life.
            </p>
            <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-amber-400 mt-10">Get Started</button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="slider-slide bg-cover bg-center w-full h-screen" style={{ backgroundImage: `url(${Image2})` }}>
          <div className="flex justify-center items-center flex-col h-full w-full bg-black bg-opacity-50 p-5">
            <h1
              className="text-white text-center 
                          text-3xl max-w-full 
                          sm:text-4xl 
                          md:text-5xl 
                          lg:text-6xl lg:max-w-[800px]
                          xl:text-7xl"
            >
              Design Your Kitchen with the Experts
            </h1>
            <p
              className="text-white text-center 
                         text-lg md:text-xl 
                         mt-5 mx-auto
                         max-w-full md:max-w-[800px] lg:max-w-[1000px]"
            >
              Kitchens should be designed around what's truly important, family, food, and life.
            </p>
            <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-amber-400 mt-10">Get Started</button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="slider-slide bg-cover bg-center w-full h-screen" style={{ backgroundImage: `url(${Image3})` }}>
          <div className="flex justify-center items-center flex-col h-full w-full bg-black bg-opacity-50 p-5">
            <h1
              className="text-white text-center 
                          text-3xl max-w-full 
                          sm:text-4xl 
                          md:text-5xl 
                          lg:text-6xl lg:max-w-[800px]
                          xl:text-7xl"
            >
              Make a kitchen part of the family
            </h1>
            <p
              className="text-white text-center 
                         text-lg md:text-xl 
                         mt-5 mx-auto
                         max-w-full md:max-w-[800px] lg:max-w-[1000px]"
            >
              Kitchens should be designed around what's truly important, family, food, and life.
            </p>
            <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-amber-400 mt-10">Get Started</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
