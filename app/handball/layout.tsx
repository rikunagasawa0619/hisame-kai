import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ハンドボール | 氷雨会',
  description: '千葉県柏市・流山市を拠点に活動するハンドボールチーム。中学生チーム「〇〇柏」と社会人チーム「REIGNITE」の2チームが活躍中。体験練習・見学随時受付中。',
  keywords: 'ハンドボール,柏市,流山市,中学生,社会人,REIGNITE,氷雨会,スポーツ',
  openGraph: {
    title: 'ハンドボール | 氷雨会',
    description: '千葉県柏市・流山市を拠点に活動するハンドボールチーム',
    type: 'website',
  },
}

export default function HandballLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
