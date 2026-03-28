import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      <Navbar />

      <main className="pt-32 pb-20 flex-grow container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4 text-gray-900">Contact Our Team</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Inquiries regarding institutional allocations, wealth management services, and platform access.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-2xl font-serif border-b border-gray-200 pb-4 text-gray-900">Corporate Headquarters</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-50 border border-green-100 rounded-full text-green-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-gray-900">Office Location</h3>
                    <p className="text-muted-foreground text-sm">Address details will be displayed here.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-50 border border-green-100 rounded-full text-green-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-gray-900">Direct Line</h3>
                    <p className="text-muted-foreground text-sm">Phone number will be displayed here.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-50 border border-green-100 rounded-full text-green-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-gray-900">Electronic Mail</h3>
                    <p className="text-muted-foreground text-sm">Email contact will be displayed here.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl border-gray-200 bg-white shadow-lg">
              <h2 className="text-2xl font-serif mb-6 text-gray-900">Send an Inquiry</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">First Name</Label>
                    <Input className="bg-gray-50/50 border-gray-200 focus:border-green-500 focus:ring-green-500/20" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Last Name</Label>
                    <Input className="bg-gray-50/50 border-gray-200 focus:border-green-500 focus:ring-green-500/20" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Email Address</Label>
                  <Input type="email" className="bg-gray-50/50 border-gray-200 focus:border-green-500 focus:ring-green-500/20" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Inquiry Type</Label>
                  <select className="flex h-10 w-full rounded-md border border-gray-200 bg-gray-50/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/20 focus-visible:border-green-500 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="" disabled>Select option...</option>
                    <option value="access">Platform Access Request</option>
                    <option value="support">Client Support</option>
                    <option value="other">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Message</Label>
                  <Textarea className="bg-gray-50/50 border-gray-200 focus:border-green-500 focus:ring-green-500/20 min-h-[120px]" placeholder="How can we assist you?" />
                </div>

                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold mt-4 shadow-sm">
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}