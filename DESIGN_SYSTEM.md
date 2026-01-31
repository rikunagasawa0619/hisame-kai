# HISAME-KAI デザインシステム

## 📐 概要

このドキュメントは、HISAME-KAI ウェブサイトのデザインシステムを定義します。
一貫性のあるユーザー体験を提供するため、すべてのページでこのガイドラインに従ってください。

---

## 🎨 カラーパレット

### プライマリーカラー

```css
/* Cyan-Blue グラデーション（ハンドボール） */
from-cyan-400 to-blue-500
from-cyan-500 to-blue-600
from-cyan-600 via-blue-700 to-blue-900

/* Purple-Pink グラデーション（eスポーツ） */
from-purple-400 to-pink-500
from-purple-500 to-pink-600
from-purple-900 via-blue-900 to-cyan-900

/* Orange-Red グラデーション（REIGNITE） */
from-orange-400 to-red-500
from-orange-500 to-red-600
```

### ベースカラー

```css
/* 背景 */
bg-black
bg-gray-900
bg-gradient-to-b from-black to-gray-900
bg-gradient-to-b from-gray-900 to-black

/* テキスト */
text-white          /* メインテキスト */
text-gray-300       /* サブテキスト */
text-gray-400       /* 補助テキスト */
text-gray-500       /* 注釈 */

/* ボーダー */
border-gray-800
border-gray-700
```

---

## 📝 タイポグラフィ

### フォント

```css
font-family: 'Noto Sans JP', 'Hiragino Mincho Pro', serif
```

### フォントサイズ

| 用途 | クラス | サイズ |
|------|--------|--------|
| 超大見出し | `text-9xl` | 8rem (128px) |
| 大見出し | `text-6xl` | 3.75rem (60px) |
| 見出し1 | `text-5xl` | 3rem (48px) |
| 見出し2 | `text-4xl` | 2.25rem (36px) |
| 見出し3 | `text-3xl` | 1.875rem (30px) |
| 見出し4 | `text-2xl` | 1.5rem (24px) |
| 見出し5 | `text-xl` | 1.25rem (20px) |
| 本文 | `text-lg` | 1.125rem (18px) |
| 本文（小） | `text-base` | 1rem (16px) |
| キャプション | `text-sm` | 0.875rem (14px) |

### フォントウェイト

```css
font-black    /* 900 - 超太字（見出し） */
font-bold     /* 700 - 太字（小見出し） */
font-semibold /* 600 - やや太字（強調） */
font-medium   /* 500 - 中太字（ナビゲーション） */
font-normal   /* 400 - 通常（本文） */
```

---

## 🎭 コンポーネント

### ボタン

#### プライマリーボタン

```tsx
<Link
  href="/path"
  className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
>
  <FaIcon />
  ボタンテキスト
</Link>
```

#### セカンダリーボタン

```tsx
<Link
  href="/path"
  className="inline-flex items-center gap-3 px-10 py-4 border-2 border-cyan-500 text-cyan-400 rounded-full font-bold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
>
  <FaIcon />
  ボタンテキスト
</Link>
```

### カード

#### グラスモーフィズムカード

```tsx
<div className="glass p-8 rounded-3xl">
  {/* コンテンツ */}
</div>
```

`.glass` クラスは `globals.css` で定義：

```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

#### グラデーションカード

```tsx
<div className="p-10 rounded-3xl bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-gray-700 transition-all duration-300">
  {/* コンテンツ */}
</div>
```

### アイコンボックス

```tsx
<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
  <FaIcon className="text-3xl text-white" />
</div>
```

---

## ✨ アニメーション

### Framer Motion

すべてのアニメーションは Framer Motion を使用：

#### 基本のフェードイン（上から）

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* コンテンツ */}
</motion.div>
```

#### 遅延付きフェードイン

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.2 }}
  viewport={{ once: true }}
>
  {/* コンテンツ */}
</motion.div>
```

#### 横からのフェードイン

```tsx
<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* コンテンツ */}
</motion.div>
```

---

## 📐 レイアウト

### グリッドシステム

```tsx
{/* 2カラム */}
<div className="grid md:grid-cols-2 gap-8">
  {/* アイテム */}
</div>

{/* 3カラム */}
<div className="grid md:grid-cols-3 gap-8">
  {/* アイテム */}
</div>

{/* 4カラム */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {/* アイテム */}
</div>
```

### コンテナ

```tsx
<div className="container mx-auto max-w-7xl px-6">
  {/* コンテンツ */}
</div>
```

### セクション

```tsx
<section className="py-24 md:py-32 px-6 bg-gradient-to-b from-black to-gray-900">
  <div className="container mx-auto max-w-7xl">
    {/* コンテンツ */}
  </div>
</section>
```

---

## 🎯 アクセシビリティ

### 必須事項

1. **セマンティックHTML**
   - `<button>` を使用（クリック可能な要素）
   - `<nav>` を使用（ナビゲーション）
   - `<header>`, `<footer>`, `<main>`, `<section>` を適切に使用

2. **ARIA属性**
   ```tsx
   <button
     aria-label="メニューを開く"
     aria-expanded={menuOpen}
     aria-controls="mobile-menu"
   >
   ```

3. **キーボードナビゲーション**
   - すべての操作がキーボードで可能
   - フォーカス状態を明示

4. **コントラスト比**
   - テキスト：最低4.5:1（WCAG AA）
   - 大きなテキスト：最低3:1

5. **代替テキスト**
   - すべての画像に意味のある `alt` 属性

---

## 🌐 レスポンシブデザイン

### ブレークポイント

```css
sm: 640px   /* スマートフォン（横） */
md: 768px   /* タブレット */
lg: 1024px  /* ラップトップ */
xl: 1280px  /* デスクトップ */
2xl: 1536px /* 大型ディスプレイ */
```

### モバイルファースト

常にモバイルを基準にデザインし、大画面向けに拡張：

```tsx
<h1 className="text-4xl md:text-6xl lg:text-8xl">
  {/* モバイル: 4xl, タブレット: 6xl, デスクトップ: 8xl */}
</h1>
```

---

## 🔧 ベストプラクティス

### Do's ✅

- Framer Motion を使用してアニメーション
- Tailwind CSS のユーティリティクラスを使用
- グラデーションで視覚的な深みを追加
- コンテナで最大幅を制限（`max-w-7xl`）
- セマンティックHTMLを使用
- `viewport={{ once: true }}` でアニメーションを1回のみ実行

### Don'ts ❌

- インラインスタイルを使用しない（Tailwindで対応）
- jQueryや古いCSSを使用しない
- `<div onClick>` の代わりに `<button>` を使用
- 過度なアニメーションを避ける
- アクセシビリティを犠牲にしない

---

## 📦 使用ライブラリ

| ライブラリ | バージョン | 用途 |
|-----------|-----------|------|
| Next.js | 16.1.6 | フレームワーク |
| React | 19.2.3 | UI ライブラリ |
| Tailwind CSS | 4.0 | スタイリング |
| Framer Motion | 12.29.2 | アニメーション |
| React Icons | 5.5.0 | アイコン |
| TypeScript | 5.x | 型安全性 |

---

## 📝 メンテナンス

### コードレビューチェックリスト

- [ ] Tailwind CSS のみを使用（古いCSSなし）
- [ ] Framer Motion でアニメーション実装
- [ ] アクセシビリティ基準を満たす
- [ ] レスポンシブデザイン対応
- [ ] 適切なSEOメタデータ
- [ ] エラーハンドリング実装
- [ ] TypeScript の型エラーなし

### 今後の改善項目

- [ ] 実際の写真素材への差し替え
- [ ] 中学生チーム名の正式決定
- [ ] Google カレンダーID の設定
- [ ] パフォーマンス最適化
- [ ] E2Eテストの追加

---

**最終更新**: 2026-01-31
