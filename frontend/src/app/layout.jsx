'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./admin/components/navbar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Hide navbar on login page and admin panel
  const hideNavbar = pathname.startsWith("/login") || pathname.startsWith("/admin");

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        {/* Show Navbar only for public pages */}
        {!hideNavbar && (
          <div className="fixed top-0 left-0 w-full z-50">
            <Navbar />
          </div>
        )}

        {/* Add top padding only when Navbar is visible */}
        <main className={!hideNavbar ? "pt-16" : ""}>
          {children}
        </main>
      </body>
    </html>
  );
}
