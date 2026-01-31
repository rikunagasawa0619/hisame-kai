import Link from 'next/link'
import { FaHouse, FaHandFist, FaGamepad } from 'react-icons/fa6'

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 px-6">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-black text-white mb-4 opacity-20">
            404
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ページが見つかりません
          </h2>
          <p className="text-xl text-cyan-100 mb-12">
            お探しのページは存在しないか、移動した可能性があります。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <FaHouse className="text-xl" />
            トップページへ
          </Link>
          <Link
            href="/handball"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
          >
            <FaHandFist className="text-xl" />
            ハンドボール
          </Link>
          <Link
            href="/esports"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-full font-bold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
          >
            <FaGamepad className="text-xl" />
            eスポーツ
          </Link>
        </div>
      </div>
    </div>
  )
}
