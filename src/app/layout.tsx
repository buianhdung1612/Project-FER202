import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Sider from "./components/sider/Sider";
import Search from "./components/search/Search";
import Play from "./components/play/Play";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project FER202",
  description: "Project FER202: Nghe nhạc trực tuyến",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} antialiased bg-[#292929]`}
      >
        <div className="container mx-auto">
          <div className="flex items-start">
            <div className="w-[280px]">
              <Sider/>
            </div>
            <div className="ml-[20px] flex-1">
              <Search/>
              <main className="mt-[30px] mb-[120px]">
                {children}
              </main>
            </div>
          </div>
        </div>
        <Play/>
      </body>
    </html>
  );
}
