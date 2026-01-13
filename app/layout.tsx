import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UI Career Readiness Bootcamp | January 17, 2025",
  description: "Join us for an intensive bootcamp designed to equip University of Ibadan students with essential skills for success in business, career, and creative pursuits. January 17, 2025 | 12 PM - 6 PM",
  keywords: ["UI Bootcamp", "Career Development", "University of Ibadan", "Business Skills", "Creative Industries", "Professional Development"],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/logo.svg' },
    ],
  },
  openGraph: {
    title: "UI Career Readiness Bootcamp 2025",
    description: "Shaping Visionaries in Business, Career & Creative Industries",
    type: "website",
    images: ['/logo.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
