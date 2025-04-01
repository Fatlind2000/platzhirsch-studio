import BeforeFooter from "@/components/Reusable/Footer";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import bgImage from "../../public/Images/NotFound/minotti-sofas.webp";

export default function NotFound() {
  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center">
        <Image
          src={bgImage}
          alt="404 Background"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          placeholder="blur"
          quality={75}
          priority
        />
        <div className="absolute inset-0 bg-black/70 z-10" />

        <div className="relative z-10 py-16 px-6 text-center max-w-3xl mx-auto">
          <h1 className="text-8xl font-bold mb-8 text-[#daa14c]">404</h1>

          <p className="mb-12 font-bold text-4xl md:text-5xl leading-tight tracking-normal text-white">
            Hoppla! Seite nicht gefunden.
          </p>
          <p className="mb-12 text-white">
            Die gesuchte Seite wurde verschoben, entfernt, <br /> umbenannt oder hat möglicherweise nie existiert.
          </p>
          <Link href="/">
            <button className="mx-auto font-bold inline-flex items-center gap-2 justify-center text-sm bg-white text-[#30373e] cursor-pointer px-8 py-3 rounded-full hover:bg-[#daa14c] transition delay-150 hover:text-white">
              ZURÜCK ZUR STARTSEITE <BsArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
