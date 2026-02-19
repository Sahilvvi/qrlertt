import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QRlert | Smart ID Card Solutions for Modern Institutions",
  description: "Secure, verifiable, and smart ID card systems with QR technology for schools, colleges, and enterprises.",
  icons: {
    icon: "/qrlert.png",
    apple: "/qrlert.png",
  },
  openGraph: {
    title: "QRlert | Smart ID Card Solutions",
    description: "Secure, verifiable, and smart ID card systems with QR technology.",
    images: ["/qrlert.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
