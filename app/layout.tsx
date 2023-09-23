"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/navigation";
import HomeSection from "./components/home";
import { useState } from "react";
import { SectionRefsProvider } from "@/context/refsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-Background bg-Text-Color overflow-x-hidden relative">
        <SectionRefsProvider>
          <AnimatePresence key={1} mode={"wait"}>
            {children}
          </AnimatePresence>
        </SectionRefsProvider>
      </body>
    </html>
  );
}
