// components/Footer.tsx
import Link from "next/link";
import { FaFacebookF, FaVimeoV, FaPinterestP, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiBehance, SiMedium } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto m-20 flex flex-col md:flex-row md:justify-between gap-10">
        
        {/* Explore */}
        <div>
          <h4 className="uppercase tracking-wide text-sm font-semibold mb-4">Explore</h4>
          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/work">Work</Link></li>
            <li><Link href="/clients">Clients</Link></li>
            <li><Link href="/news">News</Link></li>
            <li><Link href="/side-projects">Side projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy-policy">Privacy policy</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="uppercase tracking-wide text-sm font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>Digital design</li>
            <li>Graphic design</li>
            <li>Brand design</li>
          </ul>
        </div>

        {/* Thoughts, Ideas and News */}
        <div>
          <h4 className="uppercase tracking-wide text-sm font-semibold mb-4">
            Thoughts, Ideas and News
          </h4>
          <ul className="space-y-4">
            <li>
              <p className="hover:underline">What you can do before starting a branding process</p>
              <span className="text-sm text-gray-400">December 9, 2024</span>
            </li>
            <li>
              <p className="hover:underline">Questions to ask a branding agency</p>
              <span className="text-sm text-gray-400">July 9, 2024</span>
            </li>
            <li>
              <p className="hover:underline">Annual report design agency services</p>
              <span className="text-sm text-gray-400">May 28, 2024</span>
            </li>
          </ul>
        </div>

        {/* Let’s talk */}
        <div>
          <h4 className="uppercase tracking-wide text-sm font-semibold mb-4">Let’s talk</h4>
          <p>
            <a href="mailto:hello@kandi.co.za" className="underline">
              hello@kandi.co.za
            </a>
          </p>
          <p className="mt-2">+27 078 172 6554</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>© 2025 Kandi - Brand and Design Agency.</p>
        <div className="flex space-x-5 mt-4 md:mt-0">
    
          <FaFacebookF className="hover:text-white cursor-pointer" />
          <FaVimeoV className="hover:text-white cursor-pointer" />
          <FaPinterestP className="hover:text-white cursor-pointer" />
          <FaLinkedinIn className="hover:text-white cursor-pointer" />
          <FaInstagram className="hover:text-white cursor-pointer" />
          <SiBehance className="hover:text-white cursor-pointer" />
          <SiMedium className="hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
