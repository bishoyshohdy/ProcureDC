"use client";

import { useTheme } from "@/context/ThemeContext";
import Image1 from "@/public/img/WhatOurClientsSayImage1.jpeg";
import Image2 from "@/public/img/WhatOurClientsSayImage2.jpeg";
import Image3 from "@/public/img/WhatOurClientsSayImage3.jpeg";

import Image, { StaticImageData } from "next/image";

type Testimonial = {
  image: StaticImageData;
  name: string;
  position: string;
  review: string;
  rating: number;
};

export default function WhatOurClientsSay() {
  const { theme } = useTheme();

  const testimonials: Testimonial[] = [
    {
      image: Image1,
      name: "Sarah Johnson",
      position: "Procurement Manager",
      review:
        "ProcureDC has transformed how we manage our data center procurement. The platform is intuitive and the cost savings are significant.",
      rating: 5,
    },
    {
      image: Image2,
      name: "Tyler Smith",
      position: "IT Director",
      review:
        "The supplier verification process gives us peace of mind. We’ve found reliable partners and streamlined our operations.",
      rating: 5,
    },
    {
      image: Image3,
      name: "Michael Chen",
      position: "Operations Manager",
      review:
        "The platform has opened up new markets for us. The analytics tools help us make data-driven decisions.",
      rating: 5,
    },
  ];

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
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md ${
                theme === "light" ? "bg-white" : "bg-[#2D3748]"
              }`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-1xl">{testimonial.position}</p>
                </div>
              </div>

              <p className="text-lg mb-4">{testimonial.review}</p>

              <div className="flex justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#143AA2] text-2xl">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
