"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useTheme } from "@/context/ThemeContext";
import HeroImage1 from "@/public/img/HeroImage1.png";
import HeroImage2 from "@/public/img/HeroImage2.png";
import HeroImage3 from "@/public/img/HeroImage3.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import BgImage from "@/public/img/HeroBg.jpeg";
import React, { ReactNode } from "react";

type DataItem = {
  number: string;
  title: string;
  image?: StaticImageData;
  icon?: ReactNode;
  add?: string;
};

export default function HeroSection() {
  const { theme } = useTheme();

  const data: DataItem[] = [
    {
      number: "1000+",
      title: "Hyperscale",
      image: HeroImage1,
    },
    {
      number: "120+",
      title: "Countries",
      image: HeroImage3,
    },
    {
      number: "5000+",
      title: "Sub-suppliers",
      image: HeroImage2,
    },
    {
      number: "10+",
      title: "Suppliers",
      icon: <FaMapMarkerAlt size={64} className="text-[#3E8DE3]" />,
      add: "per Sector per Region",
    },
  ];

  return (
    <section
      className={`relative py-16 px-6 md:px-20 ${
        theme === "light" ? "text-[#4B5563]" : "text-gray-300"
      }`}
    >
      <div
        className={`absolute inset-0 bg-cover bg-center opacity-90 filter ${
          theme === "light"
            ? "hue-rotate-180 saturate-150"
            : "hue-rotate-0 saturate-100"
        }`}
        style={{ backgroundImage: `url(${BgImage.src})` }}
      />

      <div className="relative text-center max-w-3xl z-10">
        <h1 className="text-4xl md:text-5xl lg:text-7xl text-left leading-tight font-bold font-inter text-white">
          Your One-Stop Platform for Data Center Procurement
        </h1>

        <p className="text-lg md:text-xl text-left text-white mt-4 font-inter font-normal">
          Empower your procurement process, expand your partnerships, and unlock
          unmatched purchasing power.
        </p>

        <div className="flex justify-start space-x-4 mt-8">
          <Link
            href="/get-started"
            className={`px-8 py-3 rounded-lg font-semibold transition ${
              theme === "light"
                ? "bg-white text-[#143AA2] border border-[#143AA2] hover:bg-[#143AA2] hover:text-white"
                : "bg-[#3E8DE3] text-white border border-[#3E8DE3] hover:bg-[#143AA2] hover:text-white"
            }`}
            aria-label="Get Started"
          >
            Get Started
          </Link>
          <Link
            href="/learn-more"
            className={`px-8 py-3 rounded-lg font-semibold transition ${
              theme === "light"
                ? "bg-opacity-30 text-white border border-white hover:bg-[#143AA2] hover:text-white"
                : "bg-opacity-30 text-white border border-white hover:bg-[#3E8DE3] hover:text-white"
            }`}
            aria-label="Learn More"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="relative mt-16 z-10">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 rounded-3xl shadow-lg backdrop-blur-[7px] border ${
            theme === "light"
              ? "border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.1)]"
              : "border-[rgba(255,255,255,0.18)] bg-[rgba(31,41,55,0.5)]"
          }`}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex flex-row items-center p-6 text-white rounded-lg transition-transform transform hover:scale-105 ${
                theme === "light" ? "bg-white/10" : "bg-[#1F2937]/50"
              }`}
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                  quality={75} 
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 10vw"
                  priority
                  className="mb-4"
                />
              ) : (
                item.icon
              )}

              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold">{item.number}</p>
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                {item.add && <p className="text-sm">{item.add}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
