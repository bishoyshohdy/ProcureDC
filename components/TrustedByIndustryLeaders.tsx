"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import Image, { StaticImageData } from "next/image";

import image1 from "@/public/img/TrustedByIndustryLeadersImage1.png";
import image2 from "@/public/img/TrustedByIndustryLeadersImage2.png";
import image3 from "@/public/img/TrustedByIndustryLeadersImage3.png";
import image4 from "@/public/img/TrustedByIndustryLeadersImage4.png";
import image5 from "@/public/img/TrustedByIndustryLeadersImage5.png";
import image6 from "@/public/img/TrustedByIndustryLeadersImage6.png";
import image7 from "@/public/img/TrustedByIndustryLeadersImage7.png";
import image8 from "@/public/img/TrustedByIndustryLeadersImage8.png";
import image9 from "@/public/img/TrustedByIndustryLeadersImage9.png";
import image10 from "@/public/img/TrustedByIndustryLeadersImage10.png";
import image11 from "@/public/img/TrustedByIndustryLeadersImage11.png";
import image12 from "@/public/img/TrustedByIndustryLeadersImage12.png";
import image13 from "@/public/img/TrustedByIndustryLeadersImage13.png";
import image14 from "@/public/img/TrustedByIndustryLeadersImage14.png";
import image15 from "@/public/img/TrustedByIndustryLeadersImage15.png";
import image16 from "@/public/img/TrustedByIndustryLeadersImage16.png";
import image17 from "@/public/img/TrustedByIndustryLeadersImage17.png";
import image18 from "@/public/img/TrustedByIndustryLeadersImage18.png";

type Tab = "Buyers" | "Suppliers";

export default function TrustedByIndustryLeaders() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<Tab>("Buyers"); // State لإدارة التبويب النشط

  // بيانات الصور
  const clients: Record<Tab, { src: StaticImageData; alt: string }[]> = {
    Buyers: [
      { src: image1, alt: "Client 1" },
      { src: image2, alt: "Client 2" },
      { src: image3, alt: "Client 3" },
      { src: image4, alt: "Client 4" },
      { src: image5, alt: "Client 5" },
      { src: image6, alt: "Client 6" },
      { src: image7, alt: "Client 7" },
      { src: image8, alt: "Client 8" },
      { src: image9, alt: "Client 9" },
      { src: image10, alt: "Client 10" },
      { src: image11, alt: "Client 11" },
      { src: image12, alt: "Client 12" },
      { src: image13, alt: "Client 13" },
      { src: image14, alt: "Client 14" },
      { src: image15, alt: "Client 15" },
      { src: image16, alt: "Client 16" },
      { src: image17, alt: "Client 17" },
      { src: image18, alt: "Client 18" },
    ],
    Suppliers: [
      { src: image13, alt: "Client 13" },
      { src: image14, alt: "Client 14" },
      { src: image15, alt: "Client 15" },
      { src: image16, alt: "Client 16" },
      { src: image17, alt: "Client 17" },
      { src: image18, alt: "Client 18" },
      { src: image1, alt: "Client 1" },
      { src: image2, alt: "Client 2" },
      { src: image3, alt: "Client 3" },
      { src: image4, alt: "Client 4" },
      { src: image5, alt: "Client 5" },
      { src: image6, alt: "Client 6" },
      { src: image7, alt: "Client 7" },
      { src: image8, alt: "Client 8" },
      { src: image9, alt: "Client 9" },
      { src: image10, alt: "Client 10" },
      { src: image11, alt: "Client 11" },
      { src: image12, alt: "Client 12" },
    ],
  };

  return (
    <section
      className={`py-16 px-6 md:px-20 ${
        theme === "light"
          ? "bg-white text-[#4B5563]"
          : "bg-[#1F2937] text-gray-300"
      }`}
    >
      <div className="container">
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl text-left leading-tight font-bold font-inter ${
            theme === "light" ? "text-black" : "text-[#3E8DE3]"
          }`}
        >
          Trusted by Industry Leaders
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Join hundreds of companies worldwide that trust us to power their
          business
        </p>

        <div className="space-x-4 mb-8">
          <button
            onClick={() => setActiveTab("Buyers")}
            className={`px-12 py-2 rounded-lg font-semibold cursor-pointer transition ${
              activeTab === "Buyers"
                ? theme === "light"
                  ? "bg-[#143AA2] text-white"
                  : "bg-[#3E8DE3] text-white"
                : theme === "light"
                ? "bg-gray-100 hover:bg-gray-200"
                : "bg-[#2D3748] hover:bg-[#4A5568]"
            }`}
          >
            Buyers
          </button>
          <button
            onClick={() => setActiveTab("Suppliers")}
            className={`px-11 py-2 rounded-lg font-semibold cursor-pointer transition ${
              activeTab === "Suppliers"
                ? theme === "light"
                  ? "bg-[#143AA2] text-white"
                  : "bg-[#3E8DE3] text-white"
                : theme === "light"
                ? "bg-gray-100 hover:bg-gray-200"
                : "bg-[#2D3748] hover:bg-[#4A5568]"
            }`}
          >
            Suppliers
          </button>
        </div>

        <div
          className={`p-3 rounded-lg shadow-md ${
            theme === "light" ? "bg-white" : "bg-[#2D3748]"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {clients[activeTab].map((image, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={image.src}
                  alt={`Client ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
