'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaUsers, FaCalendarDays, FaTrophy, FaGraduationCap } from 'react-icons/fa6'

export default function JuniorTeamPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-blue-800" />
        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/handball" className="inline-flex items-center text-cyan-200 hover:text-white mb-4 transition-colors">
              <FaArrowLeft className="mr-2" /> ハンドボールTOPに戻る
            </Link>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4">〇〇柏</h1>
            <p className="text-xl md:text-2xl text-cyan-100">中学生ハンドボールチーム</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-white mb-8">チーム概要</h2>
            <div className="glass p-8 rounded-3xl mb-12">
              <p className="text-gray-300 leading-relaxed text-lg">
                〇〇柏は、ハンドボールに情熱を注ぐ中学生たちが集まるチームです。基礎技術の習得から戦術理解まで、段階的な指導により選手一人ひとりの成長をサポートします。全国大会出場を目標に、仲間と切磋琢磨しながら青春を謳歌しています。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: FaUsers, label: 'メンバー数', value: '15名' },
                { icon: FaCalendarDays, label: '練習日', value: '火・木・土' },
                { icon: FaTrophy, label: '目標', value: '全国大会出場' },
                { icon: FaGraduationCap, label: '対象', value: '中学1-3年生' },
              ].map((item, i) => (
                <div key={i} className="glass p-6 rounded-2xl flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <item.icon className="text-2xl text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                    <div className="text-2xl font-bold text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-4xl font-bold text-white mb-8">指導方針</h2>
            <div className="space-y-4 mb-12">
              {[
                { title: '基礎技術の徹底', desc: 'パス、シュート、ドリブルなど基本動作を丁寧に指導' },
                { title: 'チームワークの育成', desc: '仲間を思いやり、協力し合える関係性を構築' },
                { title: '戦術理解の深化', desc: 'ゲーム分析を通じて戦術眼を養う' },
                { title: '人間性の成長', desc: 'スポーツを通じて礼儀や責任感を学ぶ' },
              ].map((item, i) => (
                <div key={i} className="glass p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="#contact"
                className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
              >
                体験練習のお申し込み
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
