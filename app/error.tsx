'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { FaHouse, FaRotateRight } from 'react-icons/fa6'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 px-6">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-black text-white mb-4 opacity-20">
            500
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            エラーが発生しました
          </h2>
          <p className="text-xl text-orange-100 mb-12">
            申し訳ございません。予期しないエラーが発生しました。
            <br />
            もう一度お試しいただくか、トップページに戻ってください。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
          >
            <FaRotateRight className="text-xl" />
            もう一度試す
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-orange-400 text-orange-400 rounded-full font-bold text-lg hover:bg-orange-400 hover:text-white transition-all duration-300"
          >
            <FaHouse className="text-xl" />
            トップページへ
          </Link>
        </div>
      </div>
    </div>
  )
}
