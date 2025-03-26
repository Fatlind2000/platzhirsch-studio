import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

export default function Choice() {
  return (
    <div className="relative w-full my-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/Home/download.jpg" // Replace with your image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-800/80 bg-opacity-50 z-1"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 py-40 ">
        <h1 className="text-lg mb-8 text-amber-400 text-center uppercase">IHRE BESTE WAHL</h1>
        <p className="sm:lg md:text:xl text-5xl font-bold mb-3 text-white text-center mb-10 max-w-2xl">
          Lassen Sie uns Ihr neues Traumprojekt starten
        </p>
        <Link href="/contact" passHref>
          <button className="px-8 py-2 bg-white hover:bg-amber-600 text-slate-800 hover:text-white font-medium rounded-4xl text-lg transition-colors duration-300 flex items-center gap-3">
            Jetzt starten <FaAngleRight />
          </button>
        </Link>
      </div>
    </div>
  );
}
