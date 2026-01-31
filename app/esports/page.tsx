'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGamepad, FaUsers, FaDiscord, FaTwitch, FaTrophy, FaShieldHalved, FaBullseye } from 'react-icons/fa6'
import { SiValorant, SiLeagueoflegends } from 'react-icons/si'

export default function EsportsPage() {
  const games = [
    {
      name: 'VALORANT',
      icon: SiValorant,
      description: '5v5タクティカルFPS。戦略と個人技が試される競技シーン',
      color: 'from-red-500 to-pink-600',
    },
    {
      name: 'League of Legends',
      icon: SiLeagueoflegends,
      description: '5v5 MOBA。チームワークと戦術が勝敗を分けるゲーム',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      name: 'APEX Legends',
      icon: FaBullseye,
      description: 'バトルロイヤルFPS。3人チームで頂点を目指す',
      color: 'from-orange-500 to-red-600',
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600">
          <div className="absolute inset-0 opacity-30 bg-[url('/images/esports-pattern.svg')]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <FaGamepad className="text-7xl md:text-9xl text-white mx-auto mb-8" />
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8">E-SPORTS</h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-purple-100 mb-10 font-medium leading-relaxed">
              Vtuber 氷雨莉桜氏を中心としたeスポーツサークル
            </p>
            <div className="inline-block px-8 py-4 bg-white/20 backdrop-blur-md rounded-full text-white font-bold text-lg md:text-xl">
              <FaShieldHalved className="inline mr-3 text-xl" />
              完全招待制
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                About Circle
              </span>
            </h2>

            <div className="glass p-10 md:p-14 lg:p-16 rounded-3xl mb-16">
              <p className="text-gray-200 leading-relaxed text-xl md:text-2xl mb-8">
                氷雨会eスポーツサークルは、Vtuber 氷雨莉桜氏を中心に、ゲームを通じて真剣に交流を深めるコミュニティです。
                Valorant、League of Legends、APEX Legendsをメインタイトルとして、カジュアルから競技シーンまで幅広く活動しています。
              </p>
              <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
                完全招待制のため、既存メンバーからの紹介が必要となります。オンラインでの活動だけでなく、定期的にオフラインイベントも開催し、
                リアルでも繋がりを大切にしています。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: FaUsers, label: 'アクティブメンバー', value: '30+' },
                { icon: FaGamepad, label: '対応タイトル', value: '3' },
                { icon: FaTrophy, label: '大会参加実績', value: '10+' },
              ].map((item, i) => (
                <div key={i} className="glass p-6 rounded-2xl text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-2xl text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{item.value}</div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">対応ゲームタイトル</h2>
            <p className="text-gray-400 text-lg text-center mb-12">3つのメインタイトルで活動中</p>

            <div className="grid md:grid-cols-3 gap-8">
              {games.map((game, index) => (
                <motion.div
                  key={game.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-3xl text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${game.color} flex items-center justify-center mx-auto mb-6`}>
                    <game.icon className="text-4xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{game.name}</h3>
                  <p className="text-gray-400">{game.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-8 text-center text-white">活動内容</h2>

            <div className="space-y-6">
              {[
                {
                  title: 'オンラインプレイ',
                  desc: 'Discordサーバーで日々交流しながら、カジュアルからランクマッチまで楽しんでいます',
                  icon: FaDiscord,
                },
                {
                  title: 'スクリム・練習会',
                  desc: '定期的にチーム練習やスクリムを実施。戦術を磨き、チームワークを高めます',
                  icon: FaTrophy,
                },
                {
                  title: '配信・動画活動',
                  desc: '氷雨莉桜氏をはじめ、メンバーによる配信活動も積極的に行っています',
                  icon: FaTwitch,
                },
                {
                  title: 'オフラインイベント',
                  desc: '定期的にオフ会を開催し、リアルでの交流も大切にしています',
                  icon: FaUsers,
                },
              ].map((activity, i) => (
                <div key={i} className="glass p-6 rounded-2xl flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <activity.icon className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
                    <p className="text-gray-400">{activity.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <FaShieldHalved className="text-6xl text-purple-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">参加について</h2>
            <div className="glass p-8 md:p-12 rounded-3xl">
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                当サークルは<span className="text-purple-400 font-semibold">完全招待制</span>となっております。
                <br />
                既存メンバーからの紹介、または氷雨莉桜氏の配信・SNSを通じて
                <br />
                コミュニティに馴染んでいただいた方に招待状をお送りしています。
              </p>
              <p className="text-gray-400 text-sm">
                ※無差別な勧誘や営業目的の参加はお断りしております
              </p>
            </div>

            <div className="mt-12">
              <p className="text-gray-500 text-sm">
                Discord サーバーは招待制のため、公開リンクはございません
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
