"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronUp, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

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
      subItems: [
        { name: "WOHNEN", href: "/indoor/wohnen" },
        { name: "KÜCHE", href: "/indoor/kueche" },
        { name: "ARBEITEN", href: "/indoor/arbeiten" },
        { name: "LICHT", href: "/indoor/licht" },
        { name: "ACCESSOIRES", href: "/indoor/accessoires" },
      ],
    },
    { name: "OUTDOOR", href: "/outdoor" },
    { name: "BERATUNG", href: "/beratung" },
    {
      name: "ÜBER UNS",
      subItems: [
        { name: "AUSSTELLUNG", href: "/ueber-uns/ausstellung" },
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
    <header className="fixed w-full z-50">
      {/* Main Navigation */}
      <nav className={`w-full bg-[#16222b] py-4`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center h-16 w-40 relative">
            <Image src="/Images/Navbar/Logo.png" alt="Logo" fill className="object-contain object-left" />
          </Link>

          {/* Desktop Navigation */}
          <div>
            {/* Contact Info Bar */}

            <div className="hidden lg:flex items-center space-x-8 relative">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.subItems ? (
                    <>
                      <button
                        onMouseEnter={() => toggleDropdown(item.name)}
                        className="flex items-center text-white hover:text-amber-500 transition uppercase text-sm"
                      >
                        {item.name}
                        {openDropdown === item.name ? (
                          <FiChevronUp className="ml-1" />
                        ) : (
                          <FiChevronDown className="ml-1" />
                        )}
                      </button>
                      {openDropdown === item.name && (
                        <div
                          className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 uppercase text-sm"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.href} className="text-white hover:text-amber-500 transition uppercase text-sm">
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Studio Info Panel Trigger */}
              <button
                onClick={() => setShowStudioInfo(!showStudioInfo)}
                className="text-white hover:text-amber-500 transition uppercase text-lg"
              >
                <FiMenu />
              </button>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white rounded p-2 focus:outline-none transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Studio Info Panel (Desktop) */}
        {showStudioInfo && (
          <div className="hidden lg:block fixed inset-0 bg-black/20 z-40" onClick={() => setShowStudioInfo(false)}>
            <div
              className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end p-4">
                <button
                  className="text-gray-800 rounded p-1 focus:outline-none"
                  onClick={() => setShowStudioInfo(false)}
                  aria-label="Close studio info"
                >
                  <FiX size={24} />
                </button>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-4">Unser Studio</h3>
                <div className="flex items-start mb-3">
                  <FiMapPin className="text-amber-500 mt-1 mr-2" />
                  <p className="text-gray-600 text-sm">Musterstraße 123, 12345 Berlin</p>
                </div>
                <div className="flex items-start mb-3">
                  <FiClock className="text-amber-500 mt-1 mr-2" />
                  <div>
                    <p className="text-gray-600 text-sm">Mo-Fr: 9:00 - 18:00</p>
                    <p className="text-gray-600 text-sm">Sa: 10:00 - 14:00</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiPhone className="text-amber-500 mt-1 mr-2" />
                  <p className="text-gray-600 text-sm">+49 30 1234567</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 bg-black/20 z-40" onClick={closeMobileMenu}>
            <div
              className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end p-4">
                <button
                  className="text-gray-800 rounded p-1 focus:outline-none"
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
                          className="flex items-center justify-between w-full text-gray-800 py-2 uppercase text-sm"
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
                                className="block py-2 text-gray-600 hover:text-amber-500 uppercase text-sm"
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
                        className="block py-2 text-gray-800 hover:text-amber-500 uppercase text-sm"
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
