'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FaLocationDot,
  FaCalendarDays,
  FaUsers,
  FaTrophy,
  FaInstagram,
  FaXTwitter,
  FaArrowRight,
} from 'react-icons/fa6'
import GoogleCalendar from '../components/GoogleCalendar'

export default function HandballPage() {
  const teams = [
    {
      name: '〇〇柏',
      category: '中学生チーム',
      description: '未来のハンドボール選手を育成する中学生チーム。基礎から応用まで丁寧に指導し、全国大会出場を目指します。',
      members: '15名',
      practice: '週3回',
      href: '/handball/junior',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      name: 'REIGNITE',
      category: '社会人チーム',
      description: '本気で勝利を目指す社会人チーム。経験者から初心者まで、全員が「もう一度燃え上がる」をテーマに活動しています。',
      members: '20名',
      practice: '週2回',
      href: '/handball/reignite',
      gradient: 'from-orange-400 to-red-500',
    },
  ]

  const facilities = [
    {
      name: '柏市中央体育館',
      address: '千葉県柏市柏下73',
      access: 'JR柏駅から徒歩15分',
    },
    {
      name: '流山市総合運動公園体育館',
      address: '千葉県流山市野々下1-40-1',
      access: 'TX流山おおたかの森駅から車で10分',
    },
  ]

  const achievements = [
    { year: '2024', title: '千葉県社会人リーグ 準優勝', team: 'REIGNITE' },
    { year: '2023', title: '柏市中学生大会 ベスト4', team: '〇〇柏' },
    { year: '2023', title: '流山市民大会 優勝', team: 'REIGNITE' },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-700 to-blue-900">
          <div className="absolute inset-0 opacity-20 bg-[url('/images/handball-pattern.svg')]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8">
              HANDBALL
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-cyan-100 mb-10 font-medium">
              千葉県柏市・流山市を拠点に活動
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-white text-lg md:text-xl">
              <div className="flex items-center gap-3">
                <FaUsers className="text-cyan-300 text-2xl" />
                <span className="font-semibold">2チーム</span>
              </div>
              <div className="flex items-center gap-3">
                <FaLocationDot className="text-cyan-300 text-2xl" />
                <span className="font-semibold">複数の活動拠点</span>
              </div>
              <div className="flex items-center gap-3">
                <FaTrophy className="text-cyan-300 text-2xl" />
                <span className="font-semibold">大会実績多数</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">所属チーム</h2>
            <p className="text-gray-300 text-xl md:text-2xl">2つのチームがそれぞれの目標に向かって活動しています</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {teams.map((team, index) => (
              <motion.div
                key={team.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Link href={team.href} className="group block h-full">
                  <div className="h-full p-10 md:p-12 rounded-3xl bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-gray-700 transition-all duration-300">
                    <div className="mb-6">
                      <span className="text-base text-gray-400 uppercase tracking-wider font-semibold">{team.category}</span>
                      <h3 className={`text-5xl md:text-6xl font-black mt-3 bg-gradient-to-r ${team.gradient} bg-clip-text text-transparent`}>
                        {team.name}
                      </h3>
                    </div>

                    <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">{team.description}</p>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="p-6 rounded-xl bg-white/5">
                        <div className="text-3xl md:text-4xl font-bold text-white mb-2">{team.members}</div>
                        <div className="text-base text-gray-400">メンバー</div>
                      </div>
                      <div className="p-6 rounded-xl bg-white/5">
                        <div className="text-3xl md:text-4xl font-bold text-white mb-2">{team.practice}</div>
                        <div className="text-base text-gray-400">練習頻度</div>
                      </div>
                    </div>

                    <div className="flex items-center text-cyan-400 font-bold text-lg group-hover:translate-x-2 transition-transform duration-300">
                      チーム詳細
                      <FaArrowRight className="ml-3 text-xl" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section - Google Calendar Integration */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">活動予定</h2>
                <p className="text-gray-400 text-lg">Googleカレンダーと同期された最新のスケジュール</p>
              </div>
              <FaCalendarDays className="text-6xl text-cyan-400 opacity-50" />
            </div>

            <div className="glass rounded-3xl p-8">
              <GoogleCalendar />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">主な活動場所</h2>
            <p className="text-gray-400 text-lg text-center mb-12">アクセス良好な複数の体育館で活動しています</p>

            <div className="grid md:grid-cols-2 gap-8">
              {facilities.map((facility, index) => (
                <motion.div
                  key={facility.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <FaLocationDot className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{facility.name}</h3>
                      <p className="text-gray-400 mb-2">{facility.address}</p>
                      <p className="text-cyan-400 text-sm">{facility.access}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">主な実績</h2>
            <p className="text-gray-400 text-lg text-center mb-12">近年の大会成績</p>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 p-6 glass rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex-shrink-0">
                    <FaTrophy className="text-2xl text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-cyan-400 font-bold">{achievement.year}</span>
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400">
                        {achievement.team}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SNS & Gallery Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">活動の様子</h2>
            <p className="text-gray-400 text-lg text-center mb-12">SNSで日々の活動をチェック</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass p-8 rounded-3xl text-center">
                <FaInstagram className="text-6xl text-pink-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Instagram</h3>
                <p className="text-gray-400 mb-6">練習風景や大会の様子を投稿中</p>
                <a
                  href="https://www.instagram.com/nagasawariku/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all"
                >
                  フォローする
                </a>
              </div>

              <div className="glass p-8 rounded-3xl text-center">
                <FaXTwitter className="text-6xl text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">X (Twitter)</h3>
                <p className="text-gray-400 mb-6">試合速報や練習予定をリアルタイム配信</p>
                <a
                  href="https://x.com/rio_hisame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  フォローする
                </a>
              </div>
            </div>

            {/* Photo Gallery Placeholder */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700"
                >
                  <span className="text-gray-600 text-sm">写真{i}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              体験練習・見学 随時受付中
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              初心者から経験者まで大歓迎！まずはお気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
              >
                お問い合わせ
              </Link>
              <Link
                href="#"
                className="px-10 py-4 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                よくある質問
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
