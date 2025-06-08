import type { Metadata } from "next";
import "@/resources/globals.css";
import "@/resources/fonts.css";
import Header from "@/src/components/basic/Header";
import Footer from "@/src/components/basic/Footer";

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
      <body className="gradient font-primary">
        <Header/>
        <main className="p-5 md:p-10">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
