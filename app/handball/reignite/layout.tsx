import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'REIGNITE（社会人チーム）| ハンドボール | 氷雨会',
  description: '本気で勝利を目指す社会人ハンドボールチーム「REIGNITE」。経験者から初心者まで、全員が「もう一度燃え上がる」をテーマに活動しています。週2回の練習で青春を取り戻す。',
  keywords: 'ハンドボール,社会人,REIGNITE,柏市,流山市,氷雨会,スポーツ',
  openGraph: {
    title: 'REIGNITE（社会人チーム）| ハンドボール | 氷雨会',
    description: '本気で勝利を目指す社会人ハンドボールチーム',
    type: 'website',
  },
}

export default function ReigniteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
