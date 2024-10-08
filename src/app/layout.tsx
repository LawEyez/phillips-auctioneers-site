import type { Metadata } from "next";
import { Inter as FontPrimary, DM_Sans as FontSecondary } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const fontPrimary = FontPrimary({ subsets: ["latin"], variable: '--font-primary' });
const fontSecondary = FontSecondary({ subsets: ["latin"], variable: '--font-secondary' });

export const metadata: Metadata = {
  title: "Phillips Auctioneers Properties - Leader in Property Sale and Property Auction",
  description: "Leader in Property Sale and Property Auction",
  icons: {
    icon: 'https://properties.phillipsauctioneers.co.ke/wp-content/uploads/2022/06/icon.png'
  },
  twitter: {
    card: 'summary_large_image',
    site: '',
    creator: '',
    images: [''],
    title: 'Phillips Auctioneers Properties - Leader in Property Sale and Property Auction',
    description: ''
  },
  keywords: [
    'properties',
    'auction'
  ],
  openGraph: {
    title: 'Phillips Auctioneers Properties - Leader in Property Sale and Property Auction',
    description: '',
    siteName: 'Phillips Auctioneers Properties',
    url: 'https://properties.phillipsauctioneers.co.ke',
    type: 'website'
  },
  robots: 'index, follow'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontPrimary.variable} ${fontSecondary.variable}`}>
      <body className={`${fontPrimary.className} d`}>
        <Header />

        <main className="">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
