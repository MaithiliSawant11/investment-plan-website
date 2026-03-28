"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { DollarSign, Activity, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";

export default function Dashboard() {
  const [, navigate] = useLocation();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const handleUnload = () => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userName");
    };
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) navigate("/auth");
    else setUserName(localStorage.getItem("userName") || "Client");
  }, []);

  return (
    <ResponsiveLayout>
      <div className="min-h-screen text-gray-800 relative overflow-hidden bg-gradient-to-br from-[#f7f6f2] via-[#f3efe7] to-[#f7f6f2]">

        {/* glow */}
        <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-emerald-400/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-yellow-400/10 blur-[120px] rounded-full" />

        <Navbar />

        <main className="pt-24 sm:pt-32 pb-20 container mx-auto px-4 sm:px-6 md:px-8">

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">

            {/* USER INFO */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Welcome back,</p>
                <h2 className="text-xl sm:text-2xl font-serif">{userName}</h2>
              </div>
            </div>

            {/* HEADER */}
            <header>
              <h1 className="text-2xl sm:text-4xl font-serif mb-2">USER Dashboard</h1>
              <p className="text-muted-foreground">
                Overview of your investments and capital performance.
              </p>
            </header>

            {/* METRICS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">

              <Card className="glass-panel p-6 rounded-2xl hover:scale-[1.02] transition">
                <CardHeader className="flex justify-between pb-2">
                  <CardTitle className="text-xs uppercase tracking-widest text-muted-foreground">
                    Total Value
                  </CardTitle>
                  <DollarSign className="w-5 h-5 text-emerald-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl sm:text-3xl font-serif">Total Value will be displayed</div>
                  <p className="text-xs text-emerald-600 mt-1 flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-1" /> +8.2%
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-panel p-6 rounded-2xl hover:scale-[1.02] transition">
                <CardHeader className="flex justify-between pb-2">
                  <CardTitle className="text-xs uppercase tracking-widest text-muted-foreground">
                    Active Investments
                  </CardTitle>
                  <Activity className="w-5 h-5 text-emerald-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl sm:text-3xl font-serif">Number of investments</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Diversified portfolio
                  </p>
                </CardContent>
              </Card>

            </div>

            {/* PERFORMANCE */}
            <div>
              <Card className="glass-panel p-6 sm:p-8 rounded-2xl shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl font-serif">
                    Performance Overview
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="h-[250px] sm:h-[350px] w-full border border-dashed border-gray-300 rounded-xl flex items-center justify-center bg-white/50">
                    <p className="text-sm text-muted-foreground text-center px-4">
                      Interactive performance chart will appear here
                    </p>
                  </div>
                </CardContent>

              </Card>
            </div>

          </motion.div>
        </main>
      </div>
    </ResponsiveLayout>
  );
}