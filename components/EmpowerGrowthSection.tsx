"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import BgImage from "@/public/img/final.jpeg";

export default function EmpowerGrowthSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`relative py-20 ${
        theme === "light" ? "bg-white" : "bg-[#1F2937]"
      }`}
    >
      <div className="absolute inset-x-0 bottom-0 h-[250px] bg-black">
        <Image
          src={BgImage}
          alt="Background image showing a futuristic AI theme"
          fill
          quality={100}
          className="opacity-50"
          priority
        />
      </div>

      <div
        className={`relative z-10 mx-auto w-full max-w-[85vw] p-6 md:p-8 rounded-lg shadow-lg ${
          theme === "light"
            ? "bg-[#143AA2] text-white"
            : "bg-[#2D3748] text-gray-300"
        }`}
      >
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Empower growth with AI: matching compliance, cost-efficiency, and
            sustainable success.
          </h2>

          <div className="flex justify-end">
            <button
              className={`px-8 py-2 md:px-12 md:py-3 rounded-lg font-semibold text-lg md:text-xl transition ${
                theme === "light"
                  ? "bg-white text-[#143AA2] hover:bg-gray-100"
                  : "bg-[#FFD700] text-[#1F2937] hover:bg-[#FFA500]"
              }`}
              aria-label="Request a Demo"
            >
              Request a Demo
            </button>
          </div>

          <p
            className={`mt-8 text-base md:text-lg ${
              theme === "light" ? "text-gray-300" : "text-gray-400"
            }`}
          >
            Join hundreds of companies worldwide that trust us to power
          </p>
        </div>
      </div>
    </section>
  );
}
