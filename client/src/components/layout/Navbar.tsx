import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-gray-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-serif font-bold green-gradient-text tracking-wider">
            AURUM
          </a>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/">
            <a className={`text-sm tracking-wide hover:text-green-500 transition-colors ${location === '/' ? 'text-green-500' : 'text-muted-foreground'}`}>HOME</a>
          </Link>
          <Link href="/dashboard">
            <a className={`text-sm tracking-wide hover:text-green-500 transition-colors ${location === '/dashboard' ? 'text-green-500' : 'text-muted-foreground'}`}>PORTFOLIO</a>
          </Link>
          <Link href="/contact">
            <a className={`text-sm tracking-wide hover:text-green-500 transition-colors ${location === '/contact' ? 'text-green-500' : 'text-muted-foreground'}`}>CONTACT</a>
          </Link>
          <Link href="/admin">
            <a className={`text-sm tracking-wide hover:text-green-500 transition-colors ${location === '/admin' ? 'text-green-500' : 'text-muted-foreground'}`}>ADMIN</a>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/auth">
            <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
              Client Portal
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full bg-red-50 border-t border-red-100 text-center py-1">
        <p className="text-[10px] text-red-600 uppercase tracking-widest">Notice: Platform currently under development. All data shown is for demonstration purposes only.</p>
      </div>
    </nav>
  );
}