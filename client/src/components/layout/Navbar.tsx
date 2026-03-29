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
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* LOGO */}
        <Link href="/">
          <h1 className="text-lg sm:text-xl font-[Playfair_Display] font-semibold tracking-[0.18em] bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
            ALTERNA SAVINGS
          </h1>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <a
                className={`text-sm tracking-widest ${
                  location === item.path
                    ? "text-emerald-600"
                    : "text-gray-500 hover:text-emerald-600"
                }`}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>

        {/* LOGIN BUTTON */}
        <div className="hidden md:block">
          <Link href="/auth">
            <Button className="px-4">Login</Button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4 bg-white border-t">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <a
                className="block text-sm text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </Link>
          ))}

          <Link href="/auth">
            <Button className="w-full">Login</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}