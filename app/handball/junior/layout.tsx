import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '〇〇柏（中学生チーム）| ハンドボール | 氷雨会',
  description: '未来のハンドボール選手を育成する中学生チーム「〇〇柏」。基礎から応用まで丁寧に指導し、全国大会出場を目指します。週3回の練習で基礎体力と技術を磨きます。',
  keywords: 'ハンドボール,中学生,〇〇柏,柏市,流山市,氷雨会,ジュニア,育成',
  openGraph: {
    title: '〇〇柏（中学生チーム）| ハンドボール | 氷雨会',
    description: '未来のハンドボール選手を育成する中学生チーム',
    type: 'website',
  },
}

export default function JuniorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
