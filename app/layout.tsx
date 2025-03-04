import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "ProcureDC | Optimize Data Center Procurement",
  description:
    "Helping hyperscale data center operators streamline procurement.",
  keywords: [
    "data center",
    "procurement",
    "hyperscale",
    "suppliers",
    "buyers",
    "sustainability",
    "cost optimization",
  ],
  authors: [{ name: "ProcureDC", url: "https://procuredc.com" }],
  openGraph: {
    title: "ProcureDC | Optimize Data Center Procurement",
    description:
      "Helping hyperscale data center operators streamline procurement.",
    url: "https://procuredc.com",
    siteName: "ProcureDC",
    images: [
      {
        url: "https://procuredc.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "ProcureDC - Optimize Data Center Procurement",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProcureDC | Optimize Data Center Procurement",
    description:
      "Helping hyperscale data center operators streamline procurement.",
    images: ["https://procuredc.com/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://procuredc.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
