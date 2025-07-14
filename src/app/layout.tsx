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
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 右侧悬浮联系方式栏 */}
        <div className="fixed right-4 top-1/3 z-50 flex flex-col gap-4">
          {/* 电话 */}
          <a
            href="tel:+17788798016"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-pink-100 transition group"
            title="电话"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span role="img" aria-label="phone" className="text-2xl">📞</span>
            <span className="absolute right-14 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">+1 778-879-8016</span>
          </a>
          {/* 微信 */}
          <a
            href="weixin://dl/chat?nana2011bj"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-green-100 transition group"
            title="微信"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-weixin text-3xl text-green-500"></i>
            <span className="absolute right-14 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">微信ID: nana2011bj</span>
          </a>
          {/* WhatsApp */}
          <a
            href="https://wa.me/17788798016"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-green-200 transition group"
            title="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp text-3xl text-green-600"></i>
            <span className="absolute right-14 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">WhatsApp: +1 778-879-8016</span>
          </a>
        </div>
        {children}
      </body>
    </html>
  );
}
