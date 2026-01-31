'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaUsers, FaCalendarDays, FaTrophy, FaFire } from 'react-icons/fa6'

export default function ReignitePage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-600 to-red-800" />
        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/handball" className="inline-flex items-center text-orange-200 hover:text-white mb-4 transition-colors">
              <FaArrowLeft className="mr-2" /> ハンドボールTOPに戻る
            </Link>
            <div className="flex items-center justify-center gap-4 mb-4">
              <FaFire className="text-6xl text-yellow-400" />
              <h1 className="text-5xl md:text-7xl font-black text-white">REIGNITE</h1>
              <FaFire className="text-6xl text-yellow-400" />
            </div>
            <p className="text-xl md:text-2xl text-orange-100">社会人ハンドボールチーム</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
                もう一度、燃え上がれ
              </h2>
              <p className="text-gray-400 text-lg">REIGNITE - 再び火をつける</p>
            </div>

            <div className="glass p-8 rounded-3xl mb-12">
              <p className="text-gray-300 leading-relaxed text-lg">
                REIGNITEは、仕事や家庭を持ちながらも「もう一度本気でハンドボールがしたい」という想いを持つ社会人が集まったチームです。経験者から初心者まで、全員が対等に切磋琢磨し、勝利を目指します。週末の練習で日常を忘れ、純粋にスポーツを楽しむ。それが私たちのスタイルです。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: FaUsers, label: 'メンバー数', value: '20名' },
                { icon: FaCalendarDays, label: '練習日', value: '土・日' },
                { icon: FaTrophy, label: '最新実績', value: '県リーグ準優勝' },
                { icon: FaFire, label: 'モットー', value: '本気で楽しむ' },
              ].map((item, i) => (
                <div key={i} className="glass p-6 rounded-2xl flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                    <item.icon className="text-2xl text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                    <div className="text-2xl font-bold text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-4xl font-bold text-white mb-8">チームの特徴</h2>
            <div className="space-y-4 mb-12">
              {[
                { title: '経験者から初心者まで歓迎', desc: 'レベルに応じた練習メニューで全員が成長できる環境' },
                { title: '社会人ライフとの両立', desc: '仕事や家庭を優先しながら、週末に全力でプレー' },
                { title: '真剣勝負の試合', desc: '県リーグや各種大会に積極的に参加し、本気で勝利を目指す' },
                { title: 'アットホームな雰囲気', desc: '練習後の交流会など、チームの絆を深める機会も充実' },
              ].map((item, i) => (
                <div key={i} className="glass p-6 rounded-2xl border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-orange-400 mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="glass p-8 rounded-3xl text-center mb-12">
              <FaFire className="text-6xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">見学・体験練習 大歓迎</h3>
              <p className="text-gray-400 mb-6">
                ハンドボール経験者はもちろん、「社会人になってから始めたい」という方も大歓迎です。
                <br />
                まずは気軽に練習を見学しに来てください。
              </p>
              <Link
                href="#contact"
                className="inline-block px-10 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all"
              >
                お問い合わせ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
