'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.height = ''
    }
  }, [menuOpen])

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <header>
        <h1 id="logo">
          <Link href="/">
            <img src="/images/logo.png" alt="氷雨会" />
          </Link>
        </h1>

        <nav>
          <ul>
            <li><Link href="/#about">氷雨会とは</Link></li>
            <li><Link href="/handball">ハンドボール</Link></li>
            <li><Link href="/esports">eスポーツ</Link></li>
            <li><Link href="/#contact">お問い合わせ</Link></li>
          </ul>
        </nav>
      </header>

      {/* ハンバーガーメニューボタン */}
      <div
        id="menubar_hdr"
        className={menuOpen ? 'ham' : ''}
        onClick={handleMenuToggle}
      >
        <span></span><span></span><span></span>
      </div>

      {/* モバイルメニュー */}
      <div id="menubar" className={menuOpen ? '' : 'display-none'}>
        <p className="logo">
          <img src="/images/logo.png" alt="氷雨会" />
        </p>

        <nav>
          <ul>
            <li><Link href="/" onClick={handleLinkClick}>ホーム</Link></li>
            <li><Link href="/#about" onClick={handleLinkClick}>氷雨会とは</Link></li>
            <li><Link href="/handball" onClick={handleLinkClick}>ハンドボール</Link></li>
            <li><Link href="/esports" onClick={handleLinkClick}>eスポーツ</Link></li>
            <li><Link href="/#contact" onClick={handleLinkClick}>お問い合わせ</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}
