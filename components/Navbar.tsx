"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import Logo from "@/public/img/unnamed.png";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = (): void => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center justify-between py-4 px-6 md:px-20 shadow-md transition-all duration-300 ${
        theme === "light"
          ? "bg-white text-[#4B5563]"
          : "bg-[#1F2937] text-gray-300"
      } ${isSticky ? "fixed top-0 left-0 w-full z-50" : "relative"}`}
    >
      <div className="flex items-center space-x-2">
        <Image
          src={Logo}
          alt="ProcureDC Logo"
          width={32}
          height={32}
          priority
          className="rounded-lg"
        />
        <div
          className={`text-xl font-bold ${
            theme === "light" ? "text-[#143AA2]" : "text-[#3E8DE3]"
          }`}
        >
          ProcureDC
        </div>
      </div>

      <div className="lg:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu" className="p-2">
          {isMenuOpen ? (
            <FaTimes size={24} className="text-gray-400" />
          ) : (
            <FaBars size={24} className="text-gray-400" />
          )}
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row lg:items-center lg:gap-20 absolute lg:static top-16 left-0 w-full lg:w-auto bg-opacity-95 lg:bg-transparent shadow-md lg:shadow-none transition-all duration-300 z-50 ${
          theme === "light" ? "bg-white" : "bg-[#1F2937]"
        }`}
      >
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 p-6 lg:p-0 w-full lg:w-auto text-center">
          {["Solutions", "Features", "Pricing", "Contact"].map(
            (item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase()}`}
                className="hover:text-[#143AA2] transition text-lg"
              >
                {item}
              </Link>
            )
          )}
        </div>

        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 p-6 lg:p-0 text-center">
          <button className="hover:underline text-lg cursor-pointer">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-[#143AA2] to-[#3E8DE3] text-white px-4 py-2 rounded-lg hover:opacity-90 transition cursor-pointer">
            Request a Demo
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 text-xl cursor-pointer transition"
          >
            {theme === "light" ? (
              <FaMoon className="text-gray-900" />
            ) : (
              <FaSun className="text-yellow-400" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
