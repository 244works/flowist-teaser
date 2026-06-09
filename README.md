# Flowist Teaser

Flowist の一時的なティザーLPです。

Flowist は、iPhoneで録音した音声を日本語で文字起こしし、要約・タイトル生成まで行うローカルAIメモアプリです。このリポジトリでは、少人数にコンセプトを素早く見せるためのシンプルな1ページを管理します。

中心メッセージ:

> ユーザーがAIに話しかける前に、もう整理されている。

正式なマーケティングサイトではなく、Closed Beta準備中の軽い紹介ページとして小さく保ちます。

## 開発方法

依存関係をインストールします。

```bash
npm install
```

ローカル開発サーバーを起動します。

```bash
npm run dev
```

## ビルド方法

本番用ビルドを作成します。

```bash
npm run build
```

ビルド成果物は Vite 標準の `dist/` を想定します。

## Vercelデプロイ方針

Vercelには通常の Vite + React プロジェクトとしてインポートします。

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

追加のバックエンド、認証、CMS、Analytics、フォーム機能は前提にしません。
