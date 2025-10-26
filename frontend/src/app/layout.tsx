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
      <body className="bg-grey-50 font-primary lg:min-h-screen w-full flex flex-col items-center justify-center p-6 lg:p-10">
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
