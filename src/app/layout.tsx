// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";
import AuthProvider from "../components/AuthProvider";
import CustomThemeProvider from "@/components/ThemeProvider"; // Updated path

// Global metadata for the entire site
export const metadata: Metadata = {
  title: "SnapZoška", // You can customize this
  description: "Created by students of SPŠE Zochova 9, Bratislava", // Customize this as well
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <CustomThemeProvider> {/* Wrap the app with the theme provider */}
          <AuthProvider> {/* Provides session context for the entire app */}
            <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
              <Navbar /> {/* Navbar available on all pages */}
              <main style={{ flexGrow: 1 }}>{children}</main> {/* Renders the specific page content */}
            </div>
          </AuthProvider>
        </CustomThemeProvider>
      </body>
    </html>
  );
}


