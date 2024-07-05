import type { Metadata } from "next";
import { K2D } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const k2d = K2D({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Coding Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${k2d.className} bg-gray-50 text-gray-900`}>
        <Header />
        <main className="mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
        <footer className="border-t mt-8 py-4 text-center text-gray-600">
          <p>&copy; 2024 Coding Blog. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

// <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
