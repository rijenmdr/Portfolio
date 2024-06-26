import { Navbar } from "@/components/common";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-[100dvh] flex-col">
        <div className="items-start inline-flex">
            <Navbar/>
            <main className="mt-[136px] wrapper mb-8 px-4">
              {children}
            </main>
        </div>
    </div>
  );
}
