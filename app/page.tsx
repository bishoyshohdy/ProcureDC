"use client";

import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HeroSection = lazy(() => import("@/components/HeroSection"));
const WhoWeAre = lazy(() => import("@/components/WhoWeAre"));
const TransformsProcurement = lazy(
  () => import("@/components/TransformsProcurement")
);
const HyperscalerBuyer = lazy(() => import("@/components/HyperscalerBuyer"));
const DataCenterSuppliers = lazy(
  () => import("@/components/DataCenterSuppliers")
);
const TrustedByIndustryLeaders = lazy(
  () => import("@/components/TrustedByIndustryLeaders")
);
const WhatOurClientsSay = lazy(() => import("@/components/WhatOurClientsSay"));
const EmpowerGrowthSection = lazy(
  () => import("@/components/EmpowerGrowthSection")
);

export default function Home() {
  return (
    <>
      <head>
        <title>
          ProcureDC - Your One-Stop Platform for Data Center Procurement
        </title>
        <meta
          name="description"
          content="ProcureDC transforms data center procurement with an intuitive, data-driven platform. Connect with global buyers and suppliers, optimize costs, and ensure sustainability."
        />
        <meta
          name="keywords"
          content="data center, procurement, suppliers, buyers, sustainability, cost optimization"
        />
        <meta name="author" content="ProcureDC" />
      </head>

      <Navbar />

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <WhoWeAre />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <TransformsProcurement />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <HyperscalerBuyer />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <DataCenterSuppliers />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <TrustedByIndustryLeaders />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <WhatOurClientsSay />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <EmpowerGrowthSection />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
