import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"

import { ibmPlexSans } from "@/font";

import "./globals.css";

export const metadata: Metadata = {
  title: "Rijen Manandhar",
  description: "Portfolio of Rijen Manandhar",
  icons: {
    icon: "/images/user/about.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmPlexSans.variable}>
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
