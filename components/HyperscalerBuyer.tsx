"use client";

import { useTheme } from "@/context/ThemeContext";
import BgImage from "@/public/img/bgTransformsProcurement.jpeg";
import { RiArrowRightUpLine } from "react-icons/ri";
import Image from "next/image";

export default function HyperscalerBuyer() {
  const { theme } = useTheme();

  return (
    <section
      className={`relative py-16 px-6 md:px-20 overflow-hidden ${
        theme === "light"
          ? "bg-white text-[#4B5563]"
          : "bg-[#1F2937] text-gray-300"
      }`}
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={BgImage}
          alt="Background image showing a futuristic AI theme"
          fill
          quality={100}
          className="absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#143AA2] via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 max-w-10xl mx-auto">
        <div className="text-left mb-12 max-w-3xl">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-4 ${
              theme === "light" ? "text-white" : "text-[#3E8DE3]"
            }`}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Data Center Hyperscaler Buyer
          </h2>
          <p className="text-lg md:text-xl text-[#f3f4f6]">
            Scale Smarter: Source Globally, Save Aggressively, Sustain
            Seamlessly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
          {[
            {
              title: "Supply Chain Resilience",
              description:
                "Guaranteed Access to Pre-Vetted, Redundant Suppliers. Mitigate risks of delays, shortages, or geopolitical disruptions with a curated network of certified sub-suppliers across regions.",
            },
            {
              title: "Cost Optimization at Scale",
              description:
                "Dynamic Pricing Transparency & Volume Aggregation. Leverage real-time market intelligence and aggregated global demand to negotiate competitive pricing for high-volume purchases.",
            },
            {
              title: "Sustainability Assurance",
              description:
                "Pre-Certified Suppliers Meeting Global Standards. Pre-vetted, compliant suppliers streamline due diligence and ensure alignment with ISO standards, energy efficiency, and ESG goals.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 ${
                theme === "light"
                  ? "bg-[#143AA280] text-[#4B5563]"
                  : "bg-[#2D3748] text-gray-300"
              }`}
            >
              <h3 className="text-xl font-bold mb-4 text-white">
                {item.title}
              </h3>
              <p className="text-lg text-white">{item.description}</p>
              <div className="absolute bottom-4 left-18/20 transform -translate-x-1/2">
                <RiArrowRightUpLine className="text-white w-10 h-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
