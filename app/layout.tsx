import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { FullScreenProvider } from "@/components/contexts/FullScreenContext";
import { ModalProvider } from "@/components/contexts/ModalContext";
import { ThemeProvider } from "@/components/contexts/ThemeContext";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SyntaxaEdit | Intelligent Online Code Editor",
  description: "Code, compile, and debug in real-time with SyntaxaEdit. A powerful, lightweight, and AI-enhanced online code editor supporting multiple languages like C and JavaScript.",
  keywords: ["code editor", "online compiler", "IDE", "javascript compiler", "c compiler", "web development", "syntaxa"],
  authors: [{ name: "SyntaxaEdit Team" }],
  icons: {
    icon: "/icons/logo.png",
  },
  openGraph: {
    title: "SyntaxaEdit | Intelligent Online Code Editor",
    description: "Experience the future of coding. Fast, simple, and powerful.",
    type: "website",
    locale: "en_US",
    siteName: "SyntaxaEdit",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased bg-white dark:bg-[#09090b] text-black dark:text-gray-100 transition-colors duration-300", poppins.variable)}>
        <ThemeProvider defaultTheme="system" storageKey="syntaxa-theme">
          <FullScreenProvider>
            <ModalProvider>
              <Navbar />
              {children}
              <Footer />
            </ModalProvider>
          </FullScreenProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}