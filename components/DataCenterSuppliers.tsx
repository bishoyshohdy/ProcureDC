"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Image1 from "@/public/img/DataCenterSuppliersImage.jpeg";
import { RiArrowRightUpLine } from "react-icons/ri";

export default function DataCenterSuppliers() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    {
      title: "Consultants",
      description:
        "Expand your market presence by connecting with data center giants across the globe.",
      image: Image1,
    },
    {
      title: "Contractors",
      description:
        "Showcase your compliance with international standards to attract top-tier buyers.",
      image: Image1,
    },
    {
      title: "Original Equipment Manufacturer",
      description:
        "Gain access to real-time market data to optimize your offerings and pricing.",
      image: Image1,
    },
    {
      title: "Power",
      description:
        "Align with buyers who prioritize sustainability and long-term partnerships.",
      image: Image1,
    },
  ];

  return (
    <section
      className={`py-16 px-6 md:px-20 ${
        theme === "light"
          ? "bg-white text-[#4B5563]"
          : "bg-[#1F2937] text-gray-300"
      }`}
      aria-label="Data Center Suppliers Section"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="text-center md:text-left">
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl text-left leading-tight font-bold font-inter ${
                theme === "light" ? "text-black" : "text-[#3E8DE3]"
              }`}
            >
              Data Center Suppliers
            </h2>
            <p
              className={`text-lg md:text-xl ${
                theme === "light" ? "text-[#4B5563]" : "text-gray-300"
              }`}
            >
              Be the Go-To Supplier for Global Data Center Giants
            </p>
          </div>
          <button
            className={`mt-6 md:mt-0 px-6 py-3 rounded-lg font-semibold transition ${
              theme === "light"
                ? "bg-gradient-to-r from-[#143AA2] to-[#3E8DE3] text-white hover:opacity-90"
                : "bg-gradient-to-r from-[#3E8DE3] to-[#143AA2] text-white hover:opacity-90"
            }`}
            aria-label="Talk to an Expert"
          >
            Talk to an Expert
            <RiArrowRightUpLine className="inline-block w-7 h-7 ml-2" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full font-inter font-semibold text-left p-8.5 rounded-lg mb-2 transition ${
                  activeTab === index
                    ? theme === "light"
                      ? "bg-gradient-to-r from-[#143AA2] to-[#3E8DE3] text-white rounded-tl-3xl rounded-bl-none md:ml-8"
                      : "bg-[#3E8DE3] text-white rounded-tl-3xl rounded-bl-none md:ml-8"
                    : theme === "light"
                    ? "bg-gray-100 text-[#143AA2] hover:bg-gray-200"
                    : "bg-[#2D3748] hover:bg-[#4A5568]"
                }`}
                aria-label={`Switch to ${tab.title} tab`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="w-full md:w-3/4">
            <div
              className={`p-6 rounded-lg shadow-md ${
                theme === "light" ? "bg-white" : "bg-[#2D3748]"
              }`}
            >
              <Image
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                className="w-full h-64 object-cover rounded-lg mb-6"
                priority
              />
              <h3
                className={`text-2xl font-bold mb-4 ${
                  theme === "light" ? "text-[#143AA2]" : "text-[#3E8DE3]"
                }`}
              >
                {tabs[activeTab].title}
              </h3>
              <p className="text-lg">{tabs[activeTab].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
