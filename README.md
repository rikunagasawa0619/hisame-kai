# 氷雨会 (HYOSUI-KAI) 公式ウェブサイト

Vtuber 氷雨莉桜氏によるエンタメ活動の拠点「氷雨会」の公式ウェブサイトです。

## 🎯 コンセプト

「大人の青春を追いかけて」をテーマに、ハンドボールとeスポーツの2つの活動を展開しています。

## 🛠 技術スタック

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: React Icons, Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel

## 📁 プロジェクト構造

```
hyosui-kai/
├── app/
│   ├── components/          # 共通コンポーネント
│   │   ├── Header.tsx      # ヘッダー
│   │   ├── Footer.tsx      # フッター
│   │   └── GoogleCalendar.tsx  # Googleカレンダー埋め込み
│   ├── handball/           # ハンドボール関連ページ
│   │   ├── junior/         # 中学生チーム
│   │   ├── reignite/       # 社会人チーム
│   │   └── page.tsx        # ハンドボールTOP
│   ├── esports/            # eスポーツページ
│   │   └── page.tsx
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # トップページ
│   └── globals.css         # グローバルスタイル
├── public/                 # 静的ファイル
│   ├── css/               # 既存テンプレートCSS
│   ├── images/            # 画像ファイル
│   └── js/                # 既存テンプレートJS
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

### 2. コンポーネントへの設定

`app/handball/page.tsx` の GoogleCalendar コンポーネントにIDを設定:

```tsx
<GoogleCalendar calendarId="YOUR_CALENDAR_ID@group.calendar.google.com" height={600} />
```

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

**今後の拡張予定**
- [ ] お問い合わせフォームの実装
- [ ] 会員専用ページ
- [ ] ブログ機能
- [ ] ギャラリーの充実
- [ ] 多言語対応
