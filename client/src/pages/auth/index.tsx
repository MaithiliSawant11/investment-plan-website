"use client";

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [, navigate] = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameInput = document.querySelector("#name") as HTMLInputElement;
    const userName = nameInput?.value || "Client";

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", userName);

    navigate("/dashboard");
  };

  return (
    <ResponsiveLayout>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative">

        <Link href="/">
          <a className="absolute top-6 left-4 sm:left-8 flex items-center text-sm text-muted-foreground hover:text-gray-900">
            <ArrowLeft className="w-4 h-4 mr-2" /> Return Home
          </a>
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md">

          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-serif font-bold">ALTERNA SAVINGS</h1>
            <p className="text-xs uppercase text-muted-foreground">Secure Client Portal</p>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-2xl bg-white">

            {/* TOGGLE */}
            <div className="flex space-x-6 mb-6 border-b pb-3">
              <button onClick={() => setIsLogin(true)}
                className={`${isLogin ? "text-green-600 border-b-2 border-green-500" : ""}`}>
                Login
              </button>

              <button onClick={() => setIsLogin(false)}
                className={`${!isLogin ? "text-green-600 border-b-2 border-green-500" : ""}`}>
                Sign Up
              </button>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>

              {!isLogin && (
                <div>
                  <Label>Full Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
              )}

              <div>
                <Label>Email</Label>
                <Input type="email" />
              </div>

              <div>
                <Label>Password</Label>
                <Input type="password" />
              </div>

              <Button className="w-full">
                {isLogin ? "Login" : "Create Account"}
              </Button>

              <div className="flex justify-center text-xs mt-3">
                <ShieldCheck className="w-4 h-4 mr-1 text-green-600" />
                Secure connection
              </div>

            </form>
          </div>
        </motion.div>
      </div>
    </ResponsiveLayout>
  );
}