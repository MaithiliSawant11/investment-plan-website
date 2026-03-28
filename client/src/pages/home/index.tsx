import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText, Award, Shield, ArrowRight, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-green-500/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-500/5 via-background to-background pointer-events-none" />
      
      <Navbar />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-6 text-gray-900">
                Preserve Wealth.<br />
                <span className="green-gradient-text">Engineer Legacy.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                Platform description will be placed here. This area is reserved for the primary value proposition and structural layout demonstration.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Button size="lg" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold tracking-wide shadow-md">
                Client Portal <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-gray-300 hover:bg-gray-50 text-gray-700">
                View Methodology
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Brochure Section */}
        <section className="py-24 relative border-y border-gray-100 bg-gray-50/50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 border border-green-500/30 bg-green-500/5 px-3 py-1 rounded-full text-green-600 text-xs font-semibold tracking-wider mb-4">
                  <FileText className="w-3 h-3" />
                  <span>INVESTMENT PROSPECTUS</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-gray-900">Strategic Overview</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Detailed documentation regarding investment strategies, risk management protocols, and structural methodology will be available for review.
                </p>
                <div className="pt-4 flex gap-4">
                  <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700">
                    <Download className="mr-2 h-4 w-4" /> Download PDF
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[3/4] rounded-xl glass-panel p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group border-gray-200 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-transparent group-hover:scale-105 transition-transform duration-700" />
                  <FileText className="w-16 h-16 text-gray-300 mb-6" />
                  <h3 className="font-serif text-xl mb-2 text-gray-700">Document Preview</h3>
                  <p className="text-sm text-gray-400">Visual representation of brochure content will render here.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Placeholder */}
        <section className="py-24 container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-serif text-gray-600">Regulatory & Compliance Framework</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="glass-panel p-8 rounded-xl flex flex-col items-center justify-center text-center space-y-4 opacity-70 hover:opacity-100 hover:shadow-md transition-all duration-300">
                {i % 2 === 0 ? <Award className="w-10 h-10 text-green-500/50" /> : <Shield className="w-10 h-10 text-gray-400" />}
                <p className="text-xs tracking-widest text-muted-foreground uppercase">Certification Entity</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}