import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Activity, ArrowUpRight } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />

      <main className="pt-32 pb-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <header className="mb-12">
            <h1 className="text-3xl font-serif font-medium mb-2 text-gray-900">Portfolio Overview</h1>
            <p className="text-muted-foreground">Client data will be displayed here.</p>
          </header>

          {/* Key Metrics Placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-panel border-gray-200 bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Total Value</CardTitle>
                <DollarSign className="w-4 h-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-serif text-gray-900">[Value]</div>
                <p className="text-xs text-green-600 mt-1 flex items-center font-medium">
                  <ArrowUpRight className="w-3 h-3 mr-1" /> [Change %]
                </p>
              </CardContent>
            </Card>

            <Card className="glass-panel border-gray-200 bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Active Investments</CardTitle>
                <Activity className="w-4 h-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-serif text-gray-900">[Count]</div>
                <p className="text-xs text-muted-foreground mt-1">Across [X] asset classes</p>
              </CardContent>
            </Card>

            <Card className="glass-panel border-green-200 bg-green-50/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-green-700 uppercase tracking-wider">Available Capital</CardTitle>
                <TrendingUp className="w-4 h-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-serif text-green-700">[Amount]</div>
                <p className="text-xs text-green-600/80 mt-1">Ready for deployment</p>
              </CardContent>
            </Card>
          </div>

          {/* Chart & Allocations Placeholder */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="md:col-span-2 glass-panel border-gray-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-serif text-gray-900">Performance History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full border border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50/50">
                  <p className="text-sm text-muted-foreground tracking-wide">Interactive performance graph will be rendered here</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-panel border-gray-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-serif text-gray-900">Asset Allocation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 font-medium">Asset Class {i}</span>
                      <span className="text-gray-900">[XX]%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full bg-green-500 w-${i}/4`} style={{ width: `${Math.max(20, 100 - (i * 20))}%` }} />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </main>
    </div>
  );
}