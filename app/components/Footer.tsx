import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div>
        <p className="logo">
          <img src="/images/logo.png" alt="氷雨会" />
        </p>
        <ul className="icons">
          <li><a href="https://x.com/rio_hisame" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a></li>
        </ul>
        <p>
          活動拠点：千葉県柏市・流山市<br />
          Tel: 070-8932-5852<br />
          Email: rikunagasawa0619@gmail.com
        </p>
        <small>Copyright&copy; {currentYear} 氷雨会 (HISAME-KAI) All Rights Reserved.</small>
      </div>

      <div>
        <ul>
          <li><Link href="/#about">氷雨会とは</Link></li>
          <li><Link href="/handball">ハンドボール</Link></li>
          <li><Link href="/esports">eスポーツ</Link></li>
          <li><Link href="/#contact">お問い合わせ</Link></li>
        </ul>
      </div>
    </footer>
  )
}
