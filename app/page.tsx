'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  FaHandFist,
  FaGamepad,
  FaTrophy,
  FaUsers,
  FaEnvelope,
  FaArrowRight,
  FaAnglesUp,
} from 'react-icons/fa6'
import Loading from './components/Loading'

export default function Home() {
  const activities = [
    {
      icon: FaHandFist,
      title: 'ハンドボール',
      subtitle: '2チームが活躍中',
      description:
        '千葉県柏市・流山市を拠点に、中学生チーム「〇〇柏」と社会人チーム「REIGNITE」が本気で青春を追いかけています。全国大会を目指す中学生から、もう一度燃え上がる社会人まで。',
      gradient: 'from-cyan-400 to-blue-500',
      number: '01',
    },
    {
      icon: FaGamepad,
      title: 'eスポーツ',
      subtitle: '完全招待制サークル',
      description:
        'Vtuber 氷雨莉桜氏を中心としたeスポーツサークル。Valorant、League of Legends、APEX Legendsを通じて真剣に交流を深めるコミュニティ。オンラインとオフラインで繋がる。',
      gradient: 'from-purple-400 to-pink-500',
      number: '02',
    },
    {
      icon: FaUsers,
      title: 'リアルで繋がるコミュニティ',
      subtitle: '',
      description:
        '年齢や経験を問わず、本気で青春を追いかける全ての人に活動の場を提供します。定期的なオフラインイベントで、リアルでも繋がりを大切にしています。',
      gradient: 'from-orange-400 to-red-500',
      number: '03',
    },
  ]

  const teams = [
    {
      name: '〇〇柏',
      category: '中学生チーム',
      description: '基礎から丁寧に指導し、全国大会出場を目指す中学生チーム。週2〜3回の練習で基礎体力と技術を磨きます。',
      gradient: 'from-cyan-400 to-blue-500',
      href: '/handball/junior',
    },
    {
      name: 'REIGNITE',
      category: '社会人チーム',
      description: '経験者から初心者まで、もう一度燃え上がる社会人チーム。仲間と汗を流し、青春を取り戻します。',
      gradient: 'from-orange-400 to-red-500',
      href: '/handball/reignite',
    },
  ]

  return (
    <div className="min-h-screen">
      <Loading />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
              大人の青春を
              <br />
              追いかけて。
            </h1>
            <p className="text-xl md:text-3xl lg:text-4xl text-cyan-100 mb-4 font-medium">
              Vtuber 氷雨莉桜氏による
            </p>
            <p className="text-2xl md:text-4xl lg:text-5xl text-white mb-12 font-bold">
              エンタメ活動の拠点
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
              <Link
                href="/handball"
                className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaHandFist className="text-2xl" />
                <span>ハンドボール</span>
                <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/esports"
                className="group px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaGamepad className="text-2xl" />
                <span>eスポーツ</span>
                <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <main>
        {/* About Section */}
        <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-black to-gray-900" id="about">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                氷雨会とは
              </h2>
              <p className="text-cyan-400 text-xl md:text-2xl uppercase tracking-wider">About HISAME-KAI</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-gray-700 transition-all duration-300 group"
                >
                  <div className="mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${activity.gradient} flex items-center justify-center mb-6`}>
                      <activity.icon className="text-4xl text-white" />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {activity.title}
                    </h4>
                    {activity.subtitle && (
                      <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${activity.gradient} text-white`}>
                        {activity.subtitle}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                    {activity.description}
                  </p>
                  <span className="absolute bottom-6 right-6 text-7xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                    {activity.number}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities Detail Section */}
        <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
                2つの活動をご紹介
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-10 md:p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4">
                    <FaHandFist className="text-3xl text-white" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    千葉県を拠点とするハンドボールチーム
                  </h4>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  柏市・流山市の体育館で週2〜3回の練習を実施。中学生チームは基礎から丁寧に指導し、全国大会出場を目指します。社会人チームは経験者から初心者まで、全員が「もう一度燃え上がる」をテーマに活動。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-10 md:p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-4">
                    <FaGamepad className="text-3xl text-white" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    氷雨莉桜氏を中心としたeスポーツサークル
                  </h4>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Valorant、League of Legends、APEX Legendsの3タイトルで活動中。Discordでの日々の交流から、定期的なスクリム・練習会、オフラインイベントまで。完全招待制で質の高いコミュニティを維持しています。
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                私たちのビジョン
              </h2>
              <p className="text-cyan-400 text-xl md:text-2xl uppercase tracking-wider">Our Vision</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative aspect-video md:aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaTrophy className="text-9xl text-gray-700" />
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  年齢や経験を問わず、
                  <br />
                  本気で青春を追いかける
                </h4>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  ハンドボールもeスポーツも、それぞれの形で仲間と繋がり、成長し、楽しむことができる環境を目指しています。オンラインとオフラインの両方で活動し、リアルな繋がりも大切にするコミュニティです。
                </p>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  私たちと一緒に、
                  <strong className="text-cyan-400 font-bold">大人の青春</strong>
                  を謳歌しませんか。
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Handball Teams Section */}
        <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 uppercase tracking-tight">
                Handball Teams
              </h2>
              <p className="text-2xl md:text-3xl text-gray-400">ハンドボールチーム</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10 mb-12">
              {teams.map((team, index) => (
                <motion.div
                  key={team.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Link href={team.href} className="group block h-full">
                    <div className="h-full relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-gray-700 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <FaHandFist className="text-9xl text-gray-700" />
                      </div>

                      <div className="relative p-10 md:p-12 flex flex-col justify-end min-h-[400px] bg-gradient-to-t from-black via-black/80 to-transparent">
                        <span className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-2">
                          {team.category}
                        </span>
                        <h3 className={`text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r ${team.gradient} bg-clip-text text-transparent`}>
                          {team.name}
                        </h3>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                          {team.description}
                        </p>
                        <div className="flex items-center text-cyan-400 font-bold text-lg group-hover:translate-x-2 transition-transform duration-300">
                          チーム詳細
                          <FaArrowRight className="ml-3 text-xl" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link
                href="/handball"
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
              >
                もっと詳しく見る
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-black to-gray-900" id="contact">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-700 to-purple-800">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px]" />
              </div>

              <div className="relative p-12 md:p-16 text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  お問い合わせ
                </h3>
                <p className="text-xl text-cyan-100 mb-4 leading-relaxed">
                  各活動の詳細や参加方法について、
                  <br className="hidden sm:block" />
                  お気軽にお問い合わせください。
                </p>
                <p className="text-lg text-cyan-100 mb-10">
                  体験練習や見学も随時受け付けております。
                </p>
                <a
                  href="mailto:rikunagasawa0619@gmail.com"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-900 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/50 transition-all duration-300"
                >
                  <FaEnvelope className="text-2xl" />
                  お問い合わせ
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Page Top Button */}
      <motion.a
        href="#"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 z-50"
        aria-label="ページトップへ戻る"
      >
        <FaAnglesUp />
      </motion.a>
    </div>
  )
}
