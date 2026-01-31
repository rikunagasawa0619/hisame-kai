'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBars, FaXmark } from 'react-icons/fa6'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  const navLinks = [
    { href: '/#about', label: '氷雨会とは' },
    { href: '/handball', label: 'ハンドボール' },
    { href: '/esports', label: 'eスポーツ' },
    { href: '/#contact', label: 'お問い合わせ' },
  ]

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black text-white hover:text-cyan-400 transition-colors">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              HISAME-KAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block" role="navigation" aria-label="メインナビゲーション">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-cyan-400 transition-colors font-semibold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuToggle}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-cyan-400 transition-colors"
            aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <FaXmark className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-black/95 backdrop-blur-lg" onClick={handleLinkClick} />

        <div className="relative h-full flex flex-col">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="text-2xl font-black text-white hover:text-cyan-400 transition-colors"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                HISAME-KAI
              </span>
            </Link>

            <button
              onClick={handleMenuToggle}
              className="w-10 h-10 flex items-center justify-center text-white hover:text-cyan-400 transition-colors"
              aria-label="メニューを閉じる"
            >
              <FaXmark className="text-2xl" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 overflow-y-auto px-6 py-8" role="navigation" aria-label="モバイルメニュー">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  onClick={handleLinkClick}
                  className="block px-6 py-4 text-xl font-semibold text-white hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-all"
                >
                  ホーム
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block px-6 py-4 text-xl font-semibold text-white hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
