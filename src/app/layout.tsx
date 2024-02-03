import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 h-screen text-gray-950`}>
        <div className="container mx-auto h-full">
          <div className="flex flex-wrap content-center justify-center h-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
