import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const OutdoorLivingSection = ({ second }) => {
  const brands = ["Minotti", "Paola Lenti", "Solpuri", "Desalto", "Sifas", "Livintwist", "Heatsail", "Tuuci"];
  console.log("second", second);
  return (
    <section className="py-25 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] mb-6">
            {second?.title} <span className="text-[var(--primary)]"> {second?.secondTitle}</span>
          </h2>

          <div className="space-y-6 text-md [var(--secondary)]/80">
            <p>
              {second?.description.map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                  <br />
                </span>
              ))}
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-[var(--secondary)]/90">Vorgestellte Marken:</h3>
            <div className="flex flex-wrap gap-3">
              {second.brands.map((brand) => (
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
          <Image src={`${second.image}`} alt="Luxury outdoor living space" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default OutdoorLivingSection;
