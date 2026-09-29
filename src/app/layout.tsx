import type { Metadata } from "next";
import "./globals.css";
import PublicLayoutWrapper from "@/components/PublicLayoutWrapper";

export const metadata: Metadata = {
  title: "IMTGS — Intelligent Material Transaction & Grading System",
  description: "AI-powered material grading and IoT-verified transactions for the next generation of MSME material recovery. Every material. Verified. Traceable. Intelligent.",
  keywords: "material grading, AI, IoT, scrap, e-waste, MSME, traceability, circular economy",
  openGraph: {
    title: "IMTGS — Every Material. Verified. Traceable. Intelligent.",
    description: "AI-powered material grading and IoT-verified transactions for MSMEs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <PublicLayoutWrapper>
          {children}
        </PublicLayoutWrapper>
      </body>
    </html>
  );
}
