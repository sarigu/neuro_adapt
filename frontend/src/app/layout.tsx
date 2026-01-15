import type { Metadata } from "next";
import Header from "@/src/components/basic/Header";
import "@/resources/globals.css";
import "@/resources/fonts.css";

export const metadata: Metadata = {
  title: "Neuodiverse Support",
  description: "An app to make learning easier for neurodiverse university students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-grey-50 font-primary w-full flex flex-col items-center justify-center max-w-7xl mx-auto px-6 lg:px-10">
        <Header/>
        <main className="w-full flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
