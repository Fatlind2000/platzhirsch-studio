import Image from "next/image";
import image1 from "../../../public/Images/Home/download.jpg";
import image2 from "../../../public/Images/Home/grey-and-brown-combo-style-room-1.jpg";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Work = () => {
  const [activeBg, setActiveBg] = useState(0);
  const [hoveredItem, setHoveredItem] = useState();

  const items = [
    {
      title: "We Visit You At Home",
      description: "We will measure your kitchen, ask you questions and start the actual design process with you.",
      bgImage: image1,
    },
    {
      title: "Preliminary Computer Designs",
      description: "We will measure your kitchen, ask you questions and start the actual design process with you.",
      bgImage: image2,
    },
    {
      title: "Begin The Detailed Design Process",
      description: "We will measure your kitchen, ask you questions and start the actual design process with you.",
      bgImage: image1,
    },
  ];

  return (
    <div className="py-10 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full p-4 rounded-lg flex flex-col justify-center items-center">
          <h2 className="text-lg mb-3 text-amber-400 text-center uppercase">How we works</h2>
          <h4 className="text-3xl md:text-5xl font-bold text-black text-center mt-10 mb-10">
            3 Easy steps to get interior design
          </h4>
          <p className="text-center text-lg lg:max-w-[200px] md:max-w-none mb-10">
            The layout of your kitchen varies from one design to another.
          </p>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="relative h-[90vh] w-full overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                activeBg === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={item.bgImage}
                alt={item.title}
                fill
                className="object-cover"
                quality={80}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full w-full flex items-end justify-center pb-10">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="flex flex-col md:flex-col lg:flex-row gap-4 md:gap-8 items-start w-full">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`
              flex flex-col items-start p-6 md:p-8 text-white transition-all duration-300 cursor-pointer relative
              ${index !== items.length - 1 ? "border-b border-white/50 lg:border-r lg:border-b-0 " : ""}
              ${hoveredItem === index ? "z-20" : "z-10"}
            `}
                  onMouseEnter={() => {
                    setActiveBg(index);
                    setHoveredItem(index);
                  }}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => setActiveBg(index)}
                >
                  {/* Title & Description (Text on Top) */}
                  <div className="w-full">
                    <h3 className="text-xl md:text-3xl font-bold mb-2 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <div className={`overflow-hidden ${hoveredItem === index ? "h-[3.5rem]" : "h-[0rem]"}`}>
                      <p
                        className={`text-base md:text-lg transition-all duration-500 ${
                          hoveredItem === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <button className="mt-4 transition-colors rounded flex items-center gap-2 hover:text-amber-400">
                    Learn More <FaArrowRight />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
