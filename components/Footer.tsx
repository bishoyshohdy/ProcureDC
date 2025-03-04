"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-20 bg-black text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">ProcureDC</h2>
            <p className="text-sm text-gray-400">
              Transforming data center procurement for the digital age.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-700 transition"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition"
              >
                <FaFacebookF size={24} />
              </a>
            </div>
          </div>

          {[
            {
              title: "Solutions",
              links: [
                "/for-buyers",
                "/for-suppliers",
                "/enterprise",
                "/pricing",
              ],
            },
            {
              title: "Company",
              links: ["/about-us", "/careers", "/blog", "/press"],
            },
            {
              title: "Support",
              links: [
                "/help-center",
                "/documentation",
                "/contact-us",
                "/status",
              ],
            },
          ].map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-3">{section.title}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link} className="hover:underline">
                      {link.replace("/", "").replace("-", " ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-6 mt-6 flex flex-col md:flex-row justify-center md:justify-between items-center text-sm text-gray-300 text-center">
          <p className="mb-4 md:mb-0">© 2025 ProcureDC. All rights reserved.</p>
          <div className="flex flex-wrap justify-center space-x-4">
            {["/privacy-policy", "/terms-of-service", "/cookie-policy"].map(
              (link, i) => (
                <Link key={i} href={link} className="hover:underline">
                  {link.replace("/", "").replace("-", " ")}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
