import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'eスポーツ | 氷雨会',
  description: 'Vtuber 氷雨莉桜氏を中心としたeスポーツサークル。Valorant、League of Legends、APEX Legendsで活動中。完全招待制で質の高いコミュニティを維持しています。',
  keywords: 'eスポーツ,Valorant,League of Legends,APEX Legends,氷雨莉桜,Vtuber,氷雨会,ゲーミング',
  openGraph: {
    title: 'eスポーツ | 氷雨会',
    description: 'Vtuber 氷雨莉桜氏を中心としたeスポーツサークル',
    type: 'website',
  },
}

export default function EsportsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
