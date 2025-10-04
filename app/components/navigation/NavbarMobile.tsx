"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const NavbarMobile: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="lg:hidden w-full bg-white shadow-md px-6 py-4"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Go to home page">
          <span className="text-2xl font-semibold text-gray-800">Pulsie</span>
        </Link>

        {/* Hamburger Button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          {menuOpen ? (
            // X Icon
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Items */}
      {menuOpen && (
        <div className="mt-4 space-y-2">
          <Link href="/" className="block text-base font-medium text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="block text-base font-medium text-gray-700 hover:text-gray-900">
            About
          </Link>

          {/* Services Dropdown */}
          <div>
            <button
              onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
              className="w-full flex justify-between items-center text-base font-medium text-gray-700 hover:text-gray-900"
              aria-expanded={openDropdown === "services"}
            >
              Services
              <span>{openDropdown === "services" ? "−" : "+"}</span>
            </button>
            {openDropdown === "services" && (
              <div className="ml-4 mt-2 space-y-1">
                <Link href="/services/web-design" className="block text-sm text-gray-600 hover:text-gray-900">
                  Web Design
                </Link>
                <Link href="/services/seo" className="block text-sm text-gray-600 hover:text-gray-900">
                  SEO
                </Link>
                <Link href="/services/marketing" className="block text-sm text-gray-600 hover:text-gray-900">
                  Marketing
                </Link>
              </div>
            )}
          </div>

          {/* Portfolio Dropdown */}
          <div>
            <button
              onClick={() => setOpenDropdown(openDropdown === "portfolio" ? null : "portfolio")}
              className="w-full flex justify-between items-center text-base font-medium text-gray-700 hover:text-gray-900"
              aria-expanded={openDropdown === "portfolio"}
            >
              Portfolio
              <span>{openDropdown === "portfolio" ? "−" : "+"}</span>
            </button>
            {openDropdown === "portfolio" && (
              <div className="ml-4 mt-2 space-y-1">
                <Link href="/portfolio/web-projects" className="block text-sm text-gray-600 hover:text-gray-900">
                  Web Projects
                </Link>
                <Link href="/portfolio/graphic-design" className="block text-sm text-gray-600 hover:text-gray-900">
                  Graphic Design
                </Link>
                <Link href="/portfolio/apps" className="block text-sm text-gray-600 hover:text-gray-900">
                  Apps
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="block text-base font-medium text-gray-700 hover:text-gray-900">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavbarMobile;
