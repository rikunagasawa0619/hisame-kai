import Link from 'next/link'
import { FaXTwitter, FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { href: '/#about', label: '氷雨会とは' },
    { href: '/handball', label: 'ハンドボール' },
    { href: '/esports', label: 'eスポーツ' },
    { href: '/#contact', label: 'お問い合わせ' },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo & Social */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                HISAME-KAI
              </h2>
              <p className="text-gray-400 text-sm mt-1">氷雨会</p>
            </Link>

            <div className="mb-6">
              <a
                href="https://x.com/rio_hisame"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-gray-800 hover:border-cyan-500 rounded-xl transition-all text-white"
                aria-label="X (Twitter)でフォロー"
              >
                <FaXTwitter className="text-xl text-cyan-400" />
                <span className="font-semibold">X (Twitter)</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">お問い合わせ</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <FaLocationDot className="text-cyan-400 mt-1 flex-shrink-0" />
                <span>千葉県柏市・流山市</span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="text-cyan-400 mt-1 flex-shrink-0" />
                <a href="tel:070-8932-5852" className="hover:text-cyan-400 transition-colors">
                  070-8932-5852
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-cyan-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:rikunagasawa0619@gmail.com"
                  className="hover:text-cyan-400 transition-colors break-all"
                >
                  rikunagasawa0619@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">サイトマップ</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                >
                  ホーム
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Copyright &copy; {currentYear} 氷雨会 (HISAME-KAI) All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
