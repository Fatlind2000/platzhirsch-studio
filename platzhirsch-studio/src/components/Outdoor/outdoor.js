import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const OutdoorLivingSection = () => {
  const brands = ["Minotti", "Paola Lenti", "Solpuri", "Desalto", "Sifas", "Livintwist", "Heatsail", "Tuuci"];

  return (
    <section className="py-25 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] mb-6">
            Extend Your Living Room <span className="text-[var(--primary)]">– Outdoors!</span>
          </h2>

          <div className="space-y-6 text-md [var(--secondary)]/80">
            <p>
              And outside, that is. How? With our weather-resistant, high-tech outdoor furniture and accessories.
              Because we want to be able to enjoy our outdoor space not just in the summer, but on beautiful days in
              spring, late summer, and even the golden autumn.
              <br /> Transform your garden, balcony, or terrace into a little paradise where you can retreat when you
              are looking for peace and quiet from everyday life.
              <br />
              Whats more relaxing than enjoying a balmy spring, summer, or autumn evening with a glass of wine, chatting
              with dear friends, or simply letting your mind wander?
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-[var(--secondary)]/90">Featured Brands:</h3>
            <div className="flex flex-wrap gap-3">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="px-4 py-2 bg-[var(--secondary)]/10 hover:bg-[var(--primary)] rounded-full text-[var(--secondary)]/90 hover:text-[var(--ternary)]"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 relative h-100 lg:h-[700px] overflow-hidden ">
          <Image src="/Images/Home/download.jpg" alt="Luxury outdoor living space" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default OutdoorLivingSection;
