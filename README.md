# 氷雨会 (HISAME-KAI) 公式ウェブサイト

Vtuber 氷雨莉桜氏によるエンタメ活動の拠点「氷雨会」の公式ウェブサイトです。

## 🎯 コンセプト

「大人の青春を追いかけて」をテーマに、ハンドボールとeスポーツの2つの活動を展開しています。

## ✨ 最新のアップデート（2026-01-31）

### 🚀 主要な改善

- **モダンな技術スタックへ完全移行**
  - 古いCSS（1650行）とjQueryを完全削除
  - Tailwind CSS + Framer Motionに統一
  - Next.js Image最適化の実装

- **SEO対策の強化**
  - 全ページに個別メタデータを追加
  - sitemap.xml と robots.txt を実装
  - Open Graph対応

- **アクセシビリティ向上（WCAG 2.1 AA準拠）**
  - セマンティックHTML使用
  - ARIA属性の追加
  - キーボードナビゲーション対応

- **エラーページ追加**
  - 404ページ（not-found.tsx）
  - 500エラーページ（error.tsx）

- **デザインシステム**
  - 統一されたカラーパレット
  - コンポーネントライブラリ
  - アニメーションガイドライン

詳細は `DESIGN_SYSTEM.md` を参照してください。

## 🛠 技術スタック

- **Framework**: Next.js 16.1.6 (App Router)
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4.0
- **Animation**: Framer Motion 12.29.2
- **Icons**: React Icons 5.5.0
- **Language**: TypeScript 5.x
- **Deployment**: Vercel

## 📁 プロジェクト構造

```
hisame-kai/
├── app/
│   ├── components/              # 共通コンポーネント
│   │   ├── Header.tsx          # モダンなヘッダー（Tailwind CSS）
│   │   ├── Footer.tsx          # モダンなフッター（Tailwind CSS）
│   │   ├── Loading.tsx         # ローディング画面
│   │   └── GoogleCalendar.tsx  # Googleカレンダー埋め込み
│   ├── handball/               # ハンドボール関連ページ
│   │   ├── junior/
│   │   │   ├── page.tsx       # 中学生チーム詳細
│   │   │   └── layout.tsx     # SEOメタデータ
│   │   ├── reignite/
│   │   │   ├── page.tsx       # 社会人チーム詳細
│   │   │   └── layout.tsx     # SEOメタデータ
│   │   ├── page.tsx           # ハンドボールTOP
│   │   └── layout.tsx         # SEOメタデータ
│   ├── esports/
│   │   ├── page.tsx           # eスポーツページ
│   │   └── layout.tsx         # SEOメタデータ
│   ├── layout.tsx             # ルートレイアウト
│   ├── page.tsx               # トップページ（完全リニューアル）
│   ├── not-found.tsx          # 404エラーページ
│   ├── error.tsx              # 500エラーページ
│   ├── sitemap.ts             # sitemap.xml生成
│   ├── robots.ts              # robots.txt生成
│   └── globals.css            # グローバルスタイル（Tailwind）
├── public/
│   └── images/                # 画像ファイル
├── DESIGN_SYSTEM.md           # デザインシステムドキュメント
├── next.config.ts             # Next.js設定（画像最適化含む）
├── tailwind.config.ts         # Tailwind CSS設定
└── package.json
```

## 🚀 開発環境のセットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

### 3. ビルドテスト

```bash
npm run build
npm start
```

## 📝 コンテンツの更新方法

### ページの追加

新しいページを追加する場合は、`app/` ディレクトリ内に新しいフォルダを作成し、`page.tsx` を配置します。

例: `/about` ページを追加する場合
```
app/about/page.tsx
```

### 画像の追加・更新

画像は `public/images/` に配置します。後からロゴや写真を追加する場合もこのディレクトリを使用してください。

```tsx
import Image from 'next/image'

<Image src="/images/your-image.jpg" alt="説明" width={800} height={600} />
```

### テキストの変更

各ページの内容は対応する `page.tsx` ファイルを編集します。

- トップページ: `app/page.tsx`
- ハンドボール: `app/handball/page.tsx`
- eスポーツ: `app/esports/page.tsx`

## 🗓 Googleカレンダー連携の設定

### 1. Googleカレンダーの公開設定

1. Googleカレンダーにアクセス
2. 対象のカレンダーを選択
3. 「設定と共有」を開く
4. 「アクセス権限」で「一般公開して誰でも利用できるようにする」をオン
5. 「カレンダーの統合」からカレンダーIDをコピー

### 2. カレンダーIDの設定

`app/components/GoogleCalendar.tsx` のカレンダーIDを更新:

```tsx
const CALENDAR_ID = "YOUR_CALENDAR_ID@group.calendar.google.com"
```

詳細な手順はファイル内のコメントを参照してください。

## 🎨 デザインのカスタマイズ

### カラーテーマの変更

`app/globals.css` と Tailwind CSS のクラスでカラースキームを変更できます。

主要なグラデーション:
- **ハンドボール**: `from-cyan-500 to-blue-600`
- **eスポーツ**: `from-purple-500 to-pink-600`
- **REIGNITE**: `from-orange-500 to-red-600`

### フォントの変更

`app/layout.tsx` で Google Fonts を変更:

```tsx
import { Noto_Sans_JP } from "next/font/google";
```

## 📱 レスポンシブデザイン

全てのページはモバイルファーストで設計されています。

- **モバイル**: デフォルト
- **タブレット**: `md:` プレフィックス (768px以上)
- **デスクトップ**: `lg:` プレフィックス (1024px以上)

## 🚢 Vercelへのデプロイ

### 1. Vercelアカウントの準備

[vercel.com](https://vercel.com) でアカウントを作成

### 2. GitHubリポジトリの接続

1. Vercelダッシュボードで「New Project」
2. GitHubリポジトリを選択
3. Framework Preset: Next.js が自動選択されます

### 3. 環境変数の設定（必要に応じて）

Vercelダッシュボードで環境変数を設定します。

### 4. デプロイ

「Deploy」ボタンをクリックすると自動的にビルドとデプロイが実行されます。

以降、mainブランチへのpushで自動デプロイされます。

## 🔧 トラブルシューティング

### ビルドエラーが発生する場合

```bash
# キャッシュをクリア
rm -rf .next
npm run build
```

### 画像が表示されない場合

- 画像のパスが正しいか確認（`/images/` から始まる絶対パス）
- 画像ファイルが `public/images/` に配置されているか確認

### カレンダーが表示されない場合

- カレンダーIDが正しく設定されているか確認
- カレンダーが公開設定になっているか確認

## 📧 お問い合わせ

ウェブサイトに関する質問や問題報告は、氷雨会運営チームまでご連絡ください。

## 📄 ライセンス

© 2024-2026 氷雨会 (HYOSUI-KAI). All Rights Reserved.

---

## 📋 今後の改善予定

### 🎯 短期目標

- [ ] 実際の写真素材への差し替え（現在SVGプレースホルダー）
- [ ] 中学生チーム正式名称の決定（現在「〇〇柏」）
- [ ] Google カレンダーIDの設定
- [ ] OGP画像の作成と設定

### 🚀 中長期目標

- [ ] お問い合わせフォームの実装（reCAPTCHA付き）
- [ ] 会員専用ページ
- [ ] ニュース・ブログ機能
- [ ] ギャラリーページの充実
- [ ] 試合・イベントスケジュール管理
- [ ] パフォーマンス最適化（画像の遅延読み込み等）
- [ ] E2Eテストの追加
