import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

export default function Choice() {
  return (
    <div className="relative w-full my-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/Images/Home/download.jpg" alt="Background" fill quality={100} priority />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[var(--secondary)]/70 bg-opacity-50 z-1"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 py-40 ">
        <h2 className={`text-lg mb-8 text-[var(--primary)] text-center uppercase`}>IHRE BESTE WAHL</h2>
        <p className="sm:lg md:text:xl text-5xl font-bold mb-3 text-[var(--ternary)] text-center mb-10 max-w-2xl">
          Lassen Sie uns Ihr neues Traumprojekt starten
        </p>
        <Link href={`/kontakt`}>
          <button
            target="blank"
            className="mx-auto inline-flex items-center gap-2 justify-center text-sm bg-[var(--secondary)] text-white font-bold cursor-pointer px-8 py-3 rounded-full hover:bg-[var(--primary)] transition delay-100 hover:text-white"
          >
            JETZT NACHRICHT SENDEN <BsArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
}
