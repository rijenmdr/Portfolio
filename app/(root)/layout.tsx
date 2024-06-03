import { Navbar } from "@/components/common";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
        <div className="items-start inline-flex">
            <Navbar/>
            <main className="mt-[136px] wrapper">
              {children}
            </main>
        </div>
    </div>
  );
}
