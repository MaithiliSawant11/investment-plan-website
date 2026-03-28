"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText, Award, Shield, Download } from "lucide-react";
import { Link, useLocation } from "wouter";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";

export default function Home() {
  const [, navigate] = useLocation();

  const handleDownload = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      alert("Please login to download brochure");
      navigate("/auth");
    } else {
      const link = document.createElement("a");
      link.href = "/brochure.png";
      link.download = "brochure.png";
      link.click();
    }
  };

  return (
    <ResponsiveLayout>
      <div className="min-h-screen text-gray-800 relative overflow-hidden bg-gradient-to-br from-[#f7f6f2] via-[#f3efe7] to-[#f7f6f2]">

        {/* 🌿 glow */}
        <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-emerald-400/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-yellow-400/10 blur-[120px] rounded-full" />

        <Navbar />

        <main className="pt-24 sm:pt-32">

          {/* HERO */}
          <section className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-20 sm:pb-32">
            <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-10">

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-6 tracking-tight">
  PRESERVE WEALTH.<br />
  <span className="text-yellow-500 tracking-wide drop-shadow-[0_2px_10px_rgba(255,200,0,0.25)]">
    INVEST SMARTER.
  </span>
</h1>

                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  A premium financial platform designed to manage, protect, and grow capital with precision and long-term strategic intelligence.
                </p>
              </motion.div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-10">
                <Link href="/dashboard">
                  <Button className="btn-primary w-full sm:w-auto">Client Portal</Button>
                </Link>

                <Button
                  variant="outline"
                  className="w-full sm:w-auto"
                  onClick={() => {
                    const section = document.getElementById("brochure");
                    if (section) {
                      const yOffset = -80;
                      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                >
                  View Methodology
                </Button>
              </div>
            </div>
          </section>

          {/* BROCHURE */}
          <section id="brochure" className="py-16 sm:py-28 bg-[#f3efe7]/60 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl space-y-6">

              <div className="inline-flex items-center justify-center space-x-2 border px-4 py-1 rounded-full text-xs">
                <FileText className="w-3 h-3" />
                <span>INVESTMENT PROSPECTUS</span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif">
                Strategic Overview
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Comprehensive insights into portfolio structuring, risk frameworks, and long-term capital allocation strategies.
              </p>

              <Button onClick={handleDownload} className="w-full sm:w-auto">
                <Download className="mr-2 h-4 w-4" />
                Download Brochure
              </Button>
            </div>

            <div className="mt-10 sm:mt-16 px-4 sm:px-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border">
                <img src="/brochure.png" className="w-full object-cover object-top" />
              </div>
            </div>
          </section>

          {/* WHY + INSURANCE */}
          <section className="py-16 sm:py-24 container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16">

              {/* LEFT */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-serif">Why Choose Us?</h2>

                <ul className="space-y-4 text-sm sm:text-base text-muted-foreground">
                  <li className="flex gap-3">• Trusted credit-union-backed savings</li>
                  <li className="flex gap-3">• High returns with flexible terms</li>
                  <li className="flex gap-3">• Safe and secure investment options</li>
                  <li className="flex gap-3 text-yellow-500">• Designed to empower your financial goals</li>
                </ul>
              </div>

              {/* RIGHT */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-6">
                <h2 className="text-2xl sm:text-3xl font-serif">Insurance Schemes</h2>

                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-3">
                    <span>Senior Citizen Insurance</span>
                    <span className="text-emerald-600">up to $100,000</span>
                  </div>

                  <div className="flex justify-between">
                    <span>All Citizens Insurance</span>
                    <span className="text-emerald-600">up to $50,000</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section className="py-16 sm:py-28 container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-serif">Compliance & Trust</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="glass-panel p-6 sm:p-10 rounded-2xl flex flex-col items-center text-center space-y-4">
                  {i % 2 === 0 ? <Award className="w-8 h-8" /> : <Shield className="w-8 h-8" />}
                  <p className="text-xs uppercase">Certification Entity</p>
                </div>
              ))}
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </ResponsiveLayout>
  );
}