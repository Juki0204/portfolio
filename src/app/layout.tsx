import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Hachi_Maru_Pop } from "next/font/google";
import { Yomogi } from "next/font/google";
import { Zen_Maru_Gothic } from "next/font/google";

import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/components/Common/ThemeProvider";
import Body from "@/components/Common/Body";
import Footer from "@/components/Footer/Footer";

import Loading from "@/app/loading";

import { ViewTransitions } from "next-view-transitions";

// const inter = Inter({ subsets: ["latin"] });

const HachiMaruPop = Hachi_Maru_Pop({ weight: "400", subsets: ["latin"] });
const YomogiFont = Yomogi({ weight: "400", subsets: ["latin"] });
const ZenMaruGothic = Zen_Maru_Gothic({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naomorphosis",
  description: "Naomaru + Metamorphosis = Naomorphosis. 技術力や想像力、クリエイターとしてこれからも「進化し続けたい」という想いを自身のクリエイター名と合わせた造語です。これまでに制作した作品を載せています。",
  robots: "noindex nofollow",
  openGraph: {
    type: "website",
    url: "https://naomaru-design.vercel.app/",
    title: "Naomorphosis",
    description: "Naomaru + Metamorphosis = Naomorphosis. 技術力や想像力、クリエイターとしてこれからも「進化し続けたい」という想いを自身のクリエイター名と合わせた造語です。これまでに制作した作品を載せています。",
    siteName: "Naomorphosis",
    images: [{
      url: "https://naomaru-design.vercel.app/img/og_image.jpg",
    }],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <ViewTransitions>
        <html lang="en" className="hidden-scrollbar">
          <Body font={`${ZenMaruGothic.className}`}>
            <Header />
            {children}
            <Footer />
          </Body>
        </html>
      </ViewTransitions>
    </ThemeProvider>
  );
}