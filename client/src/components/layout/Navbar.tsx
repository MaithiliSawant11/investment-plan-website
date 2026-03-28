import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/60 backdrop-blur-xl border-b border-black/5">
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between flex-wrap gap-3">

    <Link href="/">
      <div className="flex items-center gap-2 min-w-0">
  <h1 className="text-base sm:text-lg md:text-xl font-[Playfair_Display] font-semibold tracking-[0.18em] bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(16,185,129,0.25)]">
  ALTERNA SAVINGS
</h1>
</div>
    </Link>

    <div className="hidden md:flex items-center space-x-10">
      {[
        { name: "HOME", path: "/" },
        { name: "DASHBOARD", path: "/dashboard" },
        { name: "CONTACT", path: "/contact" },
        { name: "ADMIN", path: "/admin" },
      ].map((item) => (
        <Link key={item.name} href={item.path}>
          <a
            className={`text-sm tracking-widest transition-all ${
              location === item.path
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            {item.name}
          </a>
        </Link>
      ))}
    </div>

    <Link href="/auth">
      <div className="flex items-center gap-2 flex-shrink-0">
  <Button className="px-3 sm:px-4 whitespace-nowrap">
    Login
  </Button>
</div>
    </Link>
  </div>
</nav>
  );
}