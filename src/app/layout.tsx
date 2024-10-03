import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "ZoškaInsta",
  description: "Created by Martin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}