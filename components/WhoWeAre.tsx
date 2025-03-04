"use client";

import Image from "next/image";
import Logo from "@/public/img/unnamed.png";
import { useTheme } from "@/context/ThemeContext";

export default function WhoWeAre() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-16 px-6 md:px-20 ${
        theme === "light"
          ? "bg-white text-[#4B5563]"
          : "bg-[#1F2937] text-gray-300"
      }`}
      aria-label="Who We Are Section"
    >
      <h1
        className={`text-xl md:text-2xl font-extrabold p-3 mb-8 inline-block rounded-lg ${
          theme === "light"
            ? "bg-[#D1E5FA] text-[#3E8DE3]"
            : "bg-[#3E8DE3] text-white"
        }`}
      >
        WHO WE ARE
      </h1>
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-black leading-tight ${
                theme === "light" ? "text-[#143AA2]" : "text-[#3E8DE3]"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Powering the Future of Data Centers, One Connection at a Time
            </h1>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Image
              src={Logo}
              alt="Company Logo"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>

        <div
          className={`mt-16 border-t ${
            theme === "light" ? "border-gray-300" : "border-gray-600"
          }`}
          aria-hidden="true"
        ></div>
      </div>
    </section>
  );
}
