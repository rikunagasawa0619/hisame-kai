'use client'

import Link from 'next/link'
import Loading from './components/Loading'
import { useInView } from './hooks/useInView'

export default function Home() {
  return (
    <div id="container">
      <Loading />

      {/* メイン画像 */}
      <div id="mainimg">
        <div>
          <div className="text">
            <p>
              大人の青春を追いかけて。<br />
              Vtuber 氷雨莉桜氏による<br />
              エンタメ活動の拠点
            </p>
          </div>

          <div className="btn">
            <p>
              <Link href="/handball">
                <i className="fa-solid fa-hand-fist"></i>ハンドボール
              </Link>
            </p>
            <p>
              <Link href="/esports">
                <i className="fa-solid fa-gamepad"></i>eスポーツ
              </Link>
            </p>
          </div>
        </div>
      </div>

      <main>
        {/* 氷雨会について */}
        <section className="bg1 bg-pattern1 arrow" id="about">
          <h2 className="c">
            氷雨会とは<span>About HISAME-KAI</span>
          </h2>

          <div className="list-grid1">
            <div className="list bg-black up">
              <figure className="icon">
                <img src="/images/icon1.png" alt="" />
              </figure>
              <h4 className="kazari">
                ハンドボール
                <span className="color-check">2チームが活躍中</span>
              </h4>
              <p>
                千葉県柏市・流山市を拠点に、中学生チーム「〇〇柏」と社会人チーム「REIGNITE」が本気で青春を追いかけています。全国大会を目指す中学生から、もう一度燃え上がる社会人まで。
              </p>
              <span className="num">01</span>
            </div>

            <div className="list bg-black up">
              <figure className="icon">
                <img src="/images/icon2.png" alt="" />
              </figure>
              <h4 className="kazari">
                eスポーツ
                <span className="color-check">完全招待制サークル</span>
              </h4>
              <p>
                Vtuber 氷雨莉桜氏を中心としたeスポーツサークル。Valorant、League of Legends、APEX
                Legendsを通じて真剣に交流を深めるコミュニティ。オンラインとオフラインで繋がる。
              </p>
              <span className="num">02</span>
            </div>

            <div className="list bg-black up">
              <figure className="icon">
                <img src="/images/icon3.png" alt="" />
              </figure>
              <h4 className="kazari">
                <span className="color-check">リアルで繋がる</span>コミュニティ
              </h4>
              <p>
                年齢や経験を問わず、本気で青春を追いかける全ての人に活動の場を提供します。定期的なオフラインイベントで、リアルでも繋がりを大切にしています。
              </p>
              <span className="num">03</span>
            </div>
          </div>
        </section>

        {/* 2つの活動をご紹介 */}
        <section className="bg-primary-color">
          <div className="c">
            <h2 className="inline-block relative">
              2つの活動をご紹介
              <div>
                <img src="/images/logo.png" alt="氷雨会" />
              </div>
            </h2>
          </div>

          <div className="list-grid1">
            <div className="list up">
              <figure className="icon">
                <img src="/images/icon1.png" alt="" />
              </figure>
              <h4>
                <span className="marker">千葉県を拠点とするハンドボールチーム</span>
              </h4>
              <p>
                柏市・流山市の体育館で週2〜3回の練習を実施。中学生チームは基礎から丁寧に指導し、全国大会出場を目指します。社会人チームは経験者から初心者まで、全員が「もう一度燃え上がる」をテーマに活動。
              </p>
              <span className="num">01</span>
            </div>

            <div className="list up">
              <figure className="icon">
                <img src="/images/icon2.png" alt="" />
              </figure>
              <h4>
                <span className="marker">氷雨莉桜氏を中心としたeスポーツサークル</span>
              </h4>
              <p>
                Valorant、League of Legends、APEX
                Legendsの3タイトルで活動中。Discordでの日々の交流から、定期的なスクリム・練習会、オフラインイベントまで。完全招待制で質の高いコミュニティを維持しています。
              </p>
              <span className="num">02</span>
            </div>
          </div>
        </section>

        {/* 私たちのビジョン */}
        <section className="bg3 bg-pattern3">
          <h2 className="c">
            私たちのビジョン<span>Our Vision</span>
          </h2>

          <div className="list-normal1">
            <div className="list up">
              <figure>
                <img src="/images/photo1.jpg" alt="" />
              </figure>
              <div className="text">
                <h4>年齢や経験を問わず、本気で青春を追いかける</h4>
                <p>
                  ハンドボールもeスポーツも、それぞれの形で仲間と繋がり、成長し、楽しむことができる環境を目指しています。オンラインとオフラインの両方で活動し、リアルな繋がりも大切にするコミュニティです。
                </p>
                <p>
                  私たちと一緒に、<strong className="color-check">大人の青春</strong>を謳歌しませんか。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ハンドボールチーム紹介 */}
        <section id="handball-teams">
          <h2 className="bg-slideup">
            <div className="image">
              <div className="en-text">Handball Teams</div>
              <div className="jp-text">ハンドボールチーム</div>
            </div>
          </h2>

          <div className="list-grid-simple">
            <div className="list up">
              <figure>
                <img src="/images/thumb1.jpg" alt="" />
              </figure>
              <div className="text">
                <h4>中学生チーム「〇〇柏」</h4>
                <p>
                  基礎から丁寧に指導し、全国大会出場を目指す中学生チーム。週2〜3回の練習で基礎体力と技術を磨きます。
                </p>
              </div>
            </div>

            <div className="list up">
              <figure>
                <img src="/images/thumb2.jpg" alt="" />
              </figure>
              <div className="text">
                <h4>社会人チーム「REIGNITE」</h4>
                <p>
                  経験者から初心者まで、もう一度燃え上がる社会人チーム。仲間と汗を流し、青春を取り戻します。
                </p>
              </div>
            </div>
          </div>

          <div className="r">
            <p className="btn1">
              <Link href="/handball" className="inline-block">
                もっと詳しく見る
              </Link>
            </p>
          </div>
        </section>

        {/* お問い合わせ */}
        <section id="contact">
          <div className="list-c2">
            <div className="list bg-black">
              <figure>
                <img src="/images/bg_contact.jpg" alt="" />
              </figure>
              <div className="text">
                <h3>お問い合わせ</h3>
                <p>
                  各活動の詳細や参加方法について、お気軽にお問い合わせください。
                  <br />
                  体験練習や見学も随時受け付けております。
                </p>
                <p className="btn1">
                  <a href="mailto:rikunagasawa0619@gmail.com">
                    <i className="fa-regular fa-envelope"></i>お問い合わせ
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ページトップボタン */}
      <p className="pagetop">
        <a href="#">
          <i className="fas fa-angle-double-up"></i>
        </a>
      </p>
    </div>
  )
}
