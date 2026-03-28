"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Edit, Users, Settings } from "lucide-react";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";

export default function Admin() {
  return (
    <ResponsiveLayout>
      <div className="min-h-screen bg-background relative">

        <Navbar />

        <main className="pt-24 sm:pt-32 pb-16 sm:pb-20 container mx-auto px-4 sm:px-6 md:px-8">

          {/* HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif font-medium mb-2 text-gray-900">
                Administrative Console
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                System management and user overview.
              </p>
            </div>

            <Button variant="outline" className="w-full sm:w-auto border-gray-200 text-gray-700 hover:bg-gray-50">
              <Settings className="w-4 h-4 mr-2" />
              System Settings
            </Button>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">

            {/* LEFT PANEL */}
            <div className="md:col-span-1 space-y-4">

              <Card className="glass-panel border-green-200 bg-green-50/50 cursor-pointer shadow-sm">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-green-800">Client Management</h3>
                    <p className="text-xs text-green-600/80">Manage user accounts</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-panel border-gray-200 bg-white opacity-60 cursor-not-allowed">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <Edit className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Content Editor</h3>
                    <p className="text-xs text-muted-foreground">Module disabled in demo</p>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* RIGHT TABLE */}
            <div className="md:col-span-3">

              <Card className="glass-panel border-gray-200 overflow-hidden bg-white shadow-sm">

                <CardHeader className="border-b border-gray-100 bg-gray-50/50">
                  <CardTitle className="text-base sm:text-lg font-serif text-gray-900">
                    Client Directory
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0 overflow-x-auto">
                  {/* 👇 THIS makes table scroll on mobile instead of breaking */}
                  <div className="min-w-[600px]">
                    <Table>

                      <TableHeader>
                        <TableRow className="border-gray-100 bg-gray-50/30">
                          <TableHead className="text-xs uppercase">Client Identifier</TableHead>
                          <TableHead className="text-xs uppercase">Status</TableHead>
                          <TableHead className="text-xs uppercase">Total Allocation</TableHead>
                          <TableHead className="text-right text-xs uppercase">Actions</TableHead>
                        </TableRow>
                      </TableHeader>

                      <TableBody>
                        {[1, 2, 3, 4, 5].map((i) => (
                          <TableRow key={i} className="border-gray-100 hover:bg-gray-50/50">
                            <TableCell className="font-medium text-gray-900">
                              Client {i}
                            </TableCell>

                            <TableCell>
                              <span className="inline-flex px-2 py-1 text-xs bg-green-100 text-green-800 border rounded-full">
                                Active
                              </span>
                            </TableCell>

                            <TableCell className="font-serif text-gray-700">
                              [Amount]
                            </TableCell>

                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-50">
                                Edit Data
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>

                    </Table>
                  </div>
                </CardContent>

              </Card>

            </div>

          </div>
        </main>
      </div>
    </ResponsiveLayout>
  );
}