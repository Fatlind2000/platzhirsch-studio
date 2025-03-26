import Link from "next/link";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaTwitter, FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import Image from "next/image";
import footerimg from "../../../public/Images/Footer/PlatzImage.png";

export default function Footer() {
  return (
    <div className="relative bg-[url('/Images/NotFound/footer_BG.jpg')] bg-cover bg-top w-full text-white">
      <div className="relative w-full">
        <div className="absolute inset-0 bg-gray-800/60 z-0" />

        <div className="relative z-10 py-16 px-6 text-center max-w-3xl mx-auto">
          <h1 className="text-base mb-4 text-[#daa14c] tracking-[0.7] font-semibold">YOU DREAM IT, WE DESIGN IT</h1>
          <p className="mb-12 font-bold text-4xl md:text-5xl leading-tight tracking-normal">
            We can build you the kitchen <br /> of your dreams
          </p>
          <Link href="/">
            <button className="mx-auto inline-flex items-center gap-2 justify-center text-sm bg-[#daa14c] text-white font-bold cursor-pointer px-8 py-3 rounded-full hover:bg-[#c88f3f] transition delay-150 hover:text-white">
              SCHEDULE A CHAT <MdOutlineCalendarMonth />
            </button>
          </Link>
        </div>
      </div>

      <hr className="w-full border-t border-gray-600 m-0 p-0" />

      <div className="relative w-full">
        <div className="absolute inset-0 bg-gray-800/80 z-0" />

        <footer className="relative z-10 w-full py-8 px-8 md:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            <div>
              <Image src={footerimg} alt="Logo" width={50} height={25} />
              <h2 className="text-base font-bold text-[#daa14c] mb-4 mt-4">PLATZHIRSCH HOME LIVING</h2>

              <div className="flex items-center gap-3 mb-4 text-[#daa14c]">
                <FiPhoneCall size={20} />
                <div>
                  <a href="tel:+43557446255" className="font-bold text-white text-lg hover:text-[#daa14c] transition">
                    +43 5574 46255
                  </a>
                  <p className="text-xs text-[#daa14c]">Kontaktieren Sie Uns</p>
                </div>
              </div>

              <div className="flex gap-4 mt-4 text-gray-400 text-xl">
                <a
                  href="https://www.facebook.com/platzhirsch.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.instagram.com/platzhirsch.studio/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.linkedin.com/company/platzhirsch-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  <RiLinkedinFill />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-md font-semibold mb-4 text-white">ÜBER UNS</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Landstraße 11</li>
                <li>6911 Lochau (Vorarlberg)</li>
                <li>Österreich</li>
                <li>E-Mail:</li>
                <li>
                  <a href="mailto:info@platzhirsch.studio" className="hover:text-[#daa14c] transition">
                    info@platzhirsch.studio
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-md font-semibold mb-4 text-white">ÖFFNUNGZEITEN</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Montag: Ruhetag</li>
                <li>Dienstag-Freitag: 10-18 Uhr</li>
                <li>Samstag: 10-14 Uhr</li>
                <li>
                  Außerhalb der Öffnungszeiten <br />
                  sind wir gerne nach Terminvereinbarung für Sie da.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-md font-semibold mb-4 text-white">WEITERFÜHRENDE LINKS</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Newsletter</li>
                <li>Kontakt</li>
                <li>Platzhirsch Cafe</li>
                <li>Privatsphäre-Einstellungen</li>
                <li>Datenschutz</li>
                <li>Impressum</li>
              </ul>
            </div>

            <div>
              <h3 className="text-md font-semibold mb-4 text-white">NEWSLETTER ABONNIEREN</h3>
              <p className="text-sm text-gray-400 mb-4">
                Abonnieren Sie, um Inspiration, Ideen und Neuigkeiten in Ihrem Posteingang zu erhalten.
              </p>
              <div className="flex border border-transparent bg-gray-600 hover:border-[#daa14c] transition-colors duration-200">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 text-white text-sm  outline-none border-white"
                />
                <button className=" px-4 py-2  text-xs text-[#daa14c] cursor-pointer">ABONNIEREN</button>
              </div>
            </div>
          </div>

          <hr className="border-t border-gray-600 w-full mt-15 p-0" />
          <div className="mt-8 mb-0 text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Platzhirsch Studio. Alle Rechte vorbehalten.
          </div>
        </footer>
      </div>
    </div>
  );
}
