"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import VideoImage from "@/public/img/TransformsProcurementImage.png";
import { useState } from "react";

export default function TransformsProcurement() {
  const { theme } = useTheme();
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  return (
    <section
      className={`py-16 px-6 md:px-20 ${
        theme === "light"
          ? "bg-white text-[#4B5563]"
          : "bg-[#1F2937] text-gray-300"
      }`}
      aria-label="Transforms Procurement Section"
    >
      <div className="container mx-auto">
        <h1
          className={`max-w-full sm:max-w-2/3 text-left
    text-[10vw] sm:text-5xl md:text-4xl lg:text-6xl 
    leading-[1.2] font-black font-inter 
    ${theme === "light" ? "text-black" : "text-[#3E8DE3]"}`}
        >
          See How ProcureDC Transforms Procurement
        </h1>

        <p className="text-1xl md:text-1xl mb-8">
          Watch how we connect buyers and suppliers through an intuitive,
          data-driven platform.
        </p>

        <div className="flex justify-center">
          <div className="w-full md:w-4/5 lg:w-7/8 relative">
            {showVideo ? (
              <div className="relative aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/tFesMj3sYfA?si=ZM22c4NFjQpD-Ziz"
                  title="ProcureDC Platform Overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-lg w-full h-[500px]"
                ></iframe>
              </div>
            ) : (
              <div
                className="relative cursor-pointer"
                onClick={handlePlayVideo}
              >
                <Image
                  src={VideoImage}
                  alt="Video Thumbnail"
                  className="rounded-2xl shadow-lg w-full h-120"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="bg-white rounded-full p-4 shadow-lg hover:bg-gray-100 transition"
                    aria-label="Play Video"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8 cursor-pointer text-[#143AA2]"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
