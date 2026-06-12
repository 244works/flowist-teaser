# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A **temporary, disposable teaser landing page** for Flowist — a local-AI memo app for iPhone that records audio, transcribes it to Japanese, and summarizes / titles it on-device. This repo is **not** the Flowist iOS app; it is a single throwaway page meant to show the concept to a small audience while a Closed Beta is being prepared.

The guiding principle, repeated across the project docs: keep it **simple, clear, and easy to throw away**. Prefer a small, readable implementation over good design, extensibility, or generalization. The central message the page exists to convey:

> ユーザーがAIに話しかける前に、もう整理されている。

**Product positioning (important for copy):** Flowist is **not** an automatic, high-accuracy minutes generator. Its purpose is to reduce typing / handwritten note-taking *during* a meeting so participants can focus on the conversation, and afterwards to produce a **draft** that a human corrects and shares. Frame summaries as a starting point for people to fix — not as complete, fully-automated, or perfectly accurate output. The name "Flowist" expresses putting people into a flow state where it matters. See `AGENTS.md` → プロダクト思想 for the full statement.

`AGENTS.md` and `docs/CODING_GUIDE.md` are the source of truth for scope and tone — read them before any substantial change. The notes below summarize the parts most likely to trip up an edit.

## Commands

```bash
npm install      # install deps
npm run dev       # Vite dev server
npm run build     # tsc (typecheck, noEmit) + vite build → dist/
npm run preview   # serve the production build locally
```

There is no test suite, no linter, and no formatter configured. `npm run build` is the only automated check — it runs `tsc` first, so a type error fails the build. Run it before considering work done. Local dev must not require any extra service.

## Architecture

Standard Vite + React 19 + TypeScript, plain CSS — no router, no state management, no backend.

- `index.html` → `src/main.tsx` (mounts `<App>` in `StrictMode`) → `src/App.tsx`.
- **`src/App.tsx` is effectively the whole site.** It holds the page sections plus a few presentational sub-components (`HeroVisual`, `AppPreview`, `AppIcon`) in one file. Content (feature list, value bullets, preview steps) lives as plain arrays at the top of the file — this is intentional; do not extract it into separate data modules or split components unless the page genuinely outgrows one file.
- **`src/App.css`** (~1100 lines) is a single global stylesheet driving all layout and the CSS-only visual effects (waveforms, orbits, phone mockup). It is mobile-first. The look is an **intentional dark neon theme** (deep navy/black background, cyan/purple/pink gradients and glows, glassmorphism cards) — this is the agreed direction, so don't "correct" it toward a light/minimal Apple style. The decorative neon photos in `public/` are atmosphere only. Effects are static — there are no `@keyframes` animations, and that constraint should hold.
- `public/` holds static assets served from `/` (e.g. `/flowist-icon.png`).

## Hard constraints — do not violate without explicit instruction

These come straight from `AGENTS.md`:

- **No new dependencies** without a clear reason. Specifically do **not** add: Next.js, Tailwind, Framer Motion, UI component libraries, CMS, analytics, auth, backend / API routes, contact forms, or waitlist features.
- **No backend.** This stays a static, single-page site deployable to Vercel as a plain Vite project (Framework Preset `Vite`, build `npm run build`, output `dist`).
- Keep it **one page**. No complex routing, no heavy animations, no stock photography.
- Split a component or file **only when actually needed**; favor readability over abstraction. Let TypeScript inference do its job rather than over-annotating.

## Copy & tone (Japanese)

All user-facing copy is in Japanese and must stay calm, simple, and non-salesy.

- **Approved phrasings** include: 「ユーザーがAIに話しかける前に、もう整理されている。」 / 「iPhoneで録音した音声を、文字起こし・要約・タイトル生成まで行うローカルAIメモアプリ」 / 「外部LLM APIを前提にしない」 / 「Closed Beta準備中」.
- **Avoid hype / absolute claims**: 「完全プライベート」「絶対安全」「完璧な要約」「すべて自動化」「あらゆる会議に対応」「仕事が爆速になる」.
- For privacy, say 「外部LLM APIを前提にしない設計」. Do **not** claim 「一切外部送信しない」 unless the implementation and platform behavior are verifiably confirmed.
- Reflect the refined positioning: present output as a human-correctable **下書き**, keep summaries **断定しすぎない** (non-assertive), and don't promise complete/auto-generated minutes. Cautions before use and a confirm-before-share step are in keeping with the product stance — not over-promising.

## Before finishing

Quick review checklist (from the project docs): is it still a small throwaway teaser? No unneeded deps? No overhyped AI/privacy claims? Can someone tell what Flowist is within ~10 seconds? Readable on an iPhone-sized screen? Does `npm run build` succeed and does it deploy to Vercel with no special setup?
