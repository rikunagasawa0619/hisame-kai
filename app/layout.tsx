import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700', '900'],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "氷雨会 | Vtuber 氷雨莉桜氏によるエンタメ活動の拠点",
  description: "大人の青春を追いかけて。千葉県柏市・流山市を拠点とするハンドボールチームとeスポーツサークルの活動拠点。",
  keywords: "氷雨会,ハンドボール,eスポーツ,柏市,流山市,Vtuber,氷雨莉桜",
  openGraph: {
    title: "氷雨会 | HISAME-KAI",
    description: "大人の青春を追いかけて",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/inview.css" />
      </head>
      <body className={`${notoSansJP.variable} antialiased`}>
        <Header />
        {children}
        <Footer />

        <script src="/js/main.js" defer></script>
      </body>
    </html>
  );
}
