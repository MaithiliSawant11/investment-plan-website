import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/5 via-background to-background pointer-events-none" />
      
      <Link href="/">
        <a className="absolute top-8 left-8 flex items-center text-sm text-muted-foreground hover:text-gray-900 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Return Home
        </a>
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-serif font-bold green-gradient-text tracking-wider mb-2">AURUM</h1>
          <p className="text-muted-foreground text-sm tracking-wide uppercase">Secure Client Portal</p>
        </div>

        <div className="glass-panel p-8 rounded-2xl shadow-xl border-gray-200 relative overflow-hidden bg-white">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
          
          <div className="flex space-x-4 mb-8 border-b border-gray-100 pb-4">
            <button 
              onClick={() => setIsLogin(true)}
              className={`pb-4 -mb-4 text-sm font-medium transition-colors ${isLogin ? 'text-green-600 border-b-2 border-green-500' : 'text-muted-foreground hover:text-gray-900'}`}
            >
              Access Account
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`pb-4 -mb-4 text-sm font-medium transition-colors ${!isLogin ? 'text-green-600 border-b-2 border-green-500' : 'text-muted-foreground hover:text-gray-900'}`}
            >
              Request Access
            </button>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">Full Legal Name</Label>
                <Input id="name" className="bg-gray-50/50 border-gray-200 focus:border-green-500 focus:ring-green-500/20" placeholder="Required for verification" />
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">Registered Email</Label>
              <Input id="email" type="email" className="bg-gray-50/50 border-gray-200 focus:border-green-500 focus:ring-green-500/20" placeholder="client@example.com" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-xs uppercase tracking-wider text-muted-foreground">Password</Label>
                {isLogin && <a href="#" className="text-xs text-green-600 hover:text-green-700">Recover Access</a>}
              </div>
              <Input id="password" type="password" className="bg-gray-50/50 border-gray-200 focus:border-green-500 focus:ring-green-500/20" />
            </div>

            <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold h-12 shadow-sm">
              {isLogin ? 'Authenticate' : 'Submit Request'}
            </Button>

            <div className="flex items-center justify-center text-xs text-muted-foreground pt-4 space-x-2">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span>256-bit encrypted secure connection</span>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}