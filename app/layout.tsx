import type { Metadata } from "next";
import "./globals.css";
import { ibmPlexSans } from "@/font";

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
      <body className={ibmPlexSans.variable}>{children}</body>
    </html>
  );
}
