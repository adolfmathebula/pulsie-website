"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const NavbarDesktop: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      className="hidden fixed  top-0 z-50 lg:flex lg:items-center lg:justify-between w-full px-16 py-4 bg-white shadow-sm h-20"
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link href="/" aria-label="Go to home page">
          <span className="text-3xl font-semibold text-gray-800">Pulsie</span>
        </Link>
      </div>

      {/* Nav Links */}
      <div className="flex items-center space-x-6">
        <Link href="/" className="text-base font-black text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <Link href="/about" className="text-base font-black text-gray-600 hover:text-gray-900">
          About
        </Link>

        {/* Services Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpenMenu(openMenu === "services" ? null : "services")}
            className="text-base font-black text-gray-600 hover:text-gray-900 inline-flex items-center"
          >
            Services
            <ChevronDown className="ml-1 w-4 h-4" />
          </button>
          {openMenu === "services" && (
            <div className="absolute z-10 bg-white shadow-lg rounded-md mt-2 w-40">
              <Link href="/services/web-design" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Web Design
              </Link>
              <Link href="/services/seo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                SEO
              </Link>
              <Link href="/services/marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Marketing
              </Link>
            </div>
          )}
        </div>

        {/* Portfolio Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpenMenu(openMenu === "portfolio" ? null : "portfolio")}
            className="text-base font-black text-gray-600 hover:text-gray-900 inline-flex items-center"
          >
            Portfolio
            <ChevronDown className="ml-1 w-4 h-4" />
            {/**<ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${openMenu === "portfolio" ? "rotate-180" : ""}`} />*/}
          </button>
          {openMenu === "portfolio" && (
            <div className="absolute z-10 bg-white shadow-lg rounded-md mt-2 w-44">
              <Link href="/portfolio/web-projects" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Web Projects
              </Link>
              <Link href="/portfolio/graphic-design" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Graphic Design
              </Link>
              <Link href="/portfolio/apps" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Apps
              </Link>
            </div>
          )}
        </div>

        <Link href="/contact" className="text-base font-black text-gray-600 hover:text-gray-900">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
