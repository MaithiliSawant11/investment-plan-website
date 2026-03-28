"use client";

import { ReactNode } from "react";

interface ResponsiveLayoutProps {
  children: ReactNode;
}

export default function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  return (
    <div className="min-h-screen w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
                    text-gray-800 bg-gradient-to-br from-[#f7f6f2] via-[#f3efe7] to-[#f7f6f2] 
                    overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto">{children}</div>
    </div>
  );
}