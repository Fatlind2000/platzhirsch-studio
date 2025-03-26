import Image from "next/image";
import Image1 from "../../../public/Images/Home/download.jpg";
import { FaAngleRight } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { FaBox } from "react-icons/fa6";
import { TbHomeCheck } from "react-icons/tb";
import { BsPersonGear } from "react-icons/bs";

const Services = () => {
  return (
    <div className="py-20 ">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="relative h-140  ">
          <Image src={Image1} alt="" fill className="object-cover rounded-sm mr-10" />
        </div>
      </div>
      <div className="w-full bg-[#30373e] pt-50 -mt-50">
        <div className=" py-10 max-w-7xl mx-auto  ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Section 1 */}
            <div className="flex-1 p-6 justify-between md:col-span-2 lg:col-span-1">
              <h2 className="text-lg md:text-xl font-bold text-amber-400 mb-10">Our Services</h2>
              <p className="text-3xl md:text-5xl text-white mb-10">We provide more than just quality services</p>
              <button className="text-sm md:text-base text-white font-bold bg-amber-600 px-6 py-2 uppercase flex justify-center items-center gap-1 mt-10">
                read more <FaAngleRight />
              </button>
            </div>

            {/* Section 2 */}
            <div className="flex-1 p-6  ">
              <h3 className="text-xl font-bold text-white mb-3 flex justify-start items-center gap-2">
                <GrUserWorker className="font-4xl w-15 h-15" />
                Smart care
              </h3>
              <p className="text-white mb-4">
                Proud of professional Ecommerce services on live chat, dedicate consultation by expertise and
                professional designers.
              </p>

              <h3 className="text-xl font-bold text-white mb-3 mt-6 flex justify-start items-center gap-2">
                <FaBox className="font-4xl w-15 h-15" />
                Kitchen Planner
              </h3>
              <p className="text-white">
                Enjoy fast delivery with our service. Receive interior/exterior furniture for house as quickly as you
                want with the best offer.
              </p>
            </div>

            {/* Section 3 */}
            <div className="flex-1 p-6  rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3 flex justify-start items-center gap-2">
                <TbHomeCheck className="font-4xl w-15 h-15" />
                Home check
              </h3>
              <p className="text-white mb-4">
                Perfect consultation with home check. Check carefully your home before suggesting suitable interior
                design in your sweet home.
              </p>

              <h3 className="text-xl font-bold text-white mb-3 mt-6 flex justify-start items-center gap-2">
                <BsPersonGear className="font-4xl w-15 h-15" />
                Kitchen Design
              </h3>
              <p className="text-white">
                Not sure where to start? Let us help. We can handle all aspects of your kitchen refresh, design your own
                style and make it special.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
