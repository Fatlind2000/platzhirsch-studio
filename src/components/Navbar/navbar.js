"use client";
import { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiPhone,
  FiMapPin,
  FiClock,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { TfiPinterest } from "react-icons/tfi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showStudioInfo, setShowStudioInfo] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const navItems = [
    { name: "HOME", href: "/" },
    {
      name: "INDOOR",
      href: "#",
      subItems: [
        { name: "WOHNEN", href: "/indoor/wohnen" },
        { name: "KÜCHE", href: "/indoor/kuche" },
        { name: "ARBEITEN", href: "/indoor/arbeiten" },
        { name: "LICHT", href: "/indoor/licht" },
        { name: "ACCESSOIRES", href: "/indoor/accessoires" },
      ],
    },
    { name: "OUTDOOR", href: "/outdoor" },
    { name: "BERATUNG", href: "/beratung" },
    {
      name: "ÜBER UNS",
      href: "/ueber-uns",
      subItems: [
        { name: "MARKEN", href: "/ueber-uns/marken" },
        { name: "TEAM", href: "/ueber-uns/team" },
        { name: "KARRIERE", href: "/ueber-uns/karriere" },
        { name: "PRESSE", href: "/ueber-uns/presse" },
        { name: "PARTNER", href: "/ueber-uns/partner" },
      ],
    },
    { name: "NEWS", href: "/news" },
    { name: "SALE", href: "/sale" },
    { name: "KONTAKT", href: "/kontakt" },
  ];

  return (
    <header className="fixed w-full z-50 bg-[var(--secondary)] ">
      {/* Main Navigation */}
      <nav className={`w-full max-w-7xl mx-auto  py-4 `}>
        <div className=" px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center h-16 w-40 relative">
            <Image
              src="/Images/Navbar/Logo.png"
              alt="Logo"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="object-contain object-left"
            />
          </Link>

          {/* Desktop Navigation */}
          <div>
            <div className="hidden lg:flex items-center space-x-8 relative">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.subItems ? (
                    <>
                      <Link
                        href={item.href}
                        onMouseEnter={() => toggleDropdown(item.name)}
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center text-[var(--ternary)] hover:text-[var(--primary)] transition uppercase text-sm"
                      >
                        {item.name}
                        {openDropdown === item.name ? (
                          <FiChevronUp className="ml-1" />
                        ) : (
                          <FiChevronDown className="ml-1" />
                        )}
                      </Link>
                      {openDropdown === item.name && (
                        <div
                          className="absolute left-0 mt-6 w-48 bg-[var(--ternary)] rounded-md shadow-lg py-1 z-50"
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-[var(--primary)]/10 hover:text-[var(--secondary)] uppercase text-sm"
                              onClick={() => {
                                setOpenDropdown(null);
                                closeMobileMenu();
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-[var(--ternary)] hover:text-[var(--primary)] transition uppercase text-sm"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Studio Info Panel Trigger */}
              <button
                onClick={() => setShowStudioInfo(!showStudioInfo)}
                className="text-[var(--ternary)] hover:cursor-pointer hover:text-[var(--primary)] transition uppercase text-2xl cursor:pointer"
              >
                <FiMenu />
              </button>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white rounded p-2 focus:outline-none transition cursor:pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Studio Info Panel (Desktop) */}
        {showStudioInfo && (
          <div
            className="hidden lg:block fixed inset-0 bg-[var(--quaternary)]/20 z-40 "
            onClick={() => setShowStudioInfo(false)}
          >
            <div
              className=" absolute right-0 top-0 h-full  w-100 bg-[var(--secondary)] shadow-lg transform transition-transform duration-300 "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end p-4 ">
                <button
                  className="text-[var(--ternary)] rounded p-1 focus:outline-none cursor-pointer"
                  onClick={() => setShowStudioInfo(false)}
                  aria-label="Close studio info"
                >
                  <FiX size={24} />
                </button>
              </div>

              <div className="px-15 overflow-auto">
                <div className="relative h-15 w-full flex items-start justify-start mb-10 ">
                  <Image
                    src="/Images/Navbar/Logo.png"
                    alt="Logo"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    className="object-contain flex items-start justify-start"
                  />
                </div>

                <div className="flex items-start mb-10">
                  <p className="text-center text-[var(--ternary)] text-2xl">
                    Stilvolle Wohnkonzepte mit Persönlichkeit und Qualität
                  </p>
                </div>

                <div className="flex items-start mb-10">
                  <FiMapPin className="text-[var(--primary)] mt-1 mr-2" />
                  <p className="text-[var(--ternary)] text-md">Landstraße 11, 6911 Lochau (Vorarlberg) Österreich</p>
                </div>

                <div className="flex items-start mb-10">
                  <FiClock className="text-[var(--primary)] mt-1 mr-2" />
                  <div>
                    <p className="text-[var(--ternary)] text-md">Montag: Ruhetag</p>
                    <p className="text-[var(--ternary)] text-md">Dienstag-Freitag: 10-18 Uhr</p>
                    <p className="text-[var(--ternary)] text-md">Samstag: 10-14 Uhr</p>
                  </div>
                </div>

                <div className="flex items-start mb-10">
                  <FiPhone className="text-[var(--primary)] mt-1 mr-2" />
                  <a
                    href="tel:+43557446255"
                    className="text-[var(--ternary)] text-md hover:text-[var(--primary)] transition"
                  >
                    +43 5574 46255
                  </a>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4 mb-10">
                  <a
                    href="https://www.facebook.com/platzhirsch.studio/"
                    target="blank"
                    className="text-[var(--primary)] hover:text-[var(--ternary)] transition-colors"
                  >
                    <FiFacebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/platzhirsch.studio/?hl=en"
                    target="blank"
                    className="text-[var(--primary)] hover:text-[var(--ternary)] transition-colors"
                  >
                    <FiInstagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/platzhirsch-studio"
                    target="blank"
                    className="text-[var(--primary)] hover:text-[var(--ternary)] transition-colors"
                  >
                    <FaLinkedinIn className="w-6 h-6" />
                  </a>
                </div>

                {/* Image Grid - 3 per row */}
                <div className="grid grid-cols-3 gap-4 mb-10">
                  {[
                    "bannerImage-1.jpg",
                    "bannerImage-2.jpg",
                    "bannerImage-3.jpg",
                    "bannerImage-4.jpg",
                    "bannerImage-5.jpg",
                    "bannerImage.jpg",
                  ].map((item, index) => (
                    <div key={index} className="relative aspect-square">
                      <Image
                        src={`/Images/Home/${item}`} // Adjust path as needed
                        alt={`Gallery image ${item}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>

                {/* Footer Text */}
                <div className="border-t border-[var(--ternary)] pt-6">
                  <p className="text-[var(--ternary)] text-sm text-center">
                    © {new Date().getFullYear()} Platzhirsch Studio. Alle Rechte vorbehalten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 bg-black/20 z-40 " onClick={closeMobileMenu}>
            <div
              className="absolute right-0 top-0 h-full w-full sm:w-100 bg-[var(--ternary)] shadow-lg transform transition-transform duration-300 "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end p-4">
                <button
                  className="text-[var(--secondary)] rounded p-1 focus:outline-none"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <FiX size={24} />
                </button>
              </div>

              <div className="px-4 py-2">
                {navItems.map((item) => (
                  <div key={item.name} className="mb-2">
                    {item.subItems ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full text-[var(--secondary)]/90 hover:text-[var(--primary)] py-2 uppercase text-sm hover:cursor-pointer"
                        >
                          {item.name}
                          {openDropdown === item.name ? (
                            <FiChevronUp className="ml-1" />
                          ) : (
                            <FiChevronDown className="ml-1" />
                          )}
                        </button>
                        {openDropdown === item.name && (
                          <div className="ml-4 space-y-2">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block py-2 text-[var(--secondary)]/90 hover:text-[var(--primary)] uppercase text-sm hover:cursor-pointer"
                                onClick={closeMobileMenu}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-2 text-[var(--secondary)] hover:text-[var(--primary)] uppercase text-sm hover:cursor-pointer"
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
