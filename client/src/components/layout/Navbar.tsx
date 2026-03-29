import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "DASHBOARD", path: "/dashboard" },
    { name: "CONTACT", path: "/contact" },
    { name: "ADMIN", path: "/admin" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/60 border-b border-black/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* LOGO */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <h1 className="text-sm sm:text-lg md:text-xl font-[Playfair_Display] font-semibold tracking-[0.18em] bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              ALTERNA SAVINGS
            </h1>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <a
                className={`text-sm tracking-widest transition-all ${
                  location === item.path
                    ? "text-emerald-600"
                    : "text-gray-600 hover:text-emerald-600"
                }`}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* LOGIN BUTTON (Desktop only) */}
          <Link href="/auth">
            <Button className="hidden md:inline-flex px-4 whitespace-nowrap">
              Login
            </Button>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100 flex flex-col items-center space-y-6 py-6">

          {navItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <a
                onClick={() => setIsOpen(false)}
                className={`text-sm tracking-widest ${
                  location === item.path
                    ? "text-emerald-600"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </a>
            </Link>
          ))}

          {/* LOGIN BUTTON MOBILE */}
          <Link href="/auth">
            <Button
              onClick={() => setIsOpen(false)}
              className="w-40"
            >
              Login
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}