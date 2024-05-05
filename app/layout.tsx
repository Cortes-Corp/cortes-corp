import type { Metadata } from "next";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Cortes Corp",
  description: "Real Estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
