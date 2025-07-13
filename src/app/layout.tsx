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
  title: "Sandy Select | 高端米其林太妃糖与蛋糕  | 温哥华最好吃的蛋糕",
  description: "Sandy Select，米其林大厨Sandy亲手制作，臻选Whole Foods有机食材，匠心手作，只为极致美味。主营高端太妃糖与精品蛋糕，温哥华最好吃的蛋糕。"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
