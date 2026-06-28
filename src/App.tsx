import { useEffect } from "react";

const features = [
  { glyph: "wave", step: "01", title: "録音", text: "声も会話も、そのまま残す" },
  { glyph: "text", step: "02", title: "日本語文字起こし", text: "読み返せる日本語テキストに" },
  { glyph: "diamond", step: "03", title: "オンデバイスAI要約", text: "要点だけ、短く見渡せる" },
  { glyph: "tag", step: "04", title: "タイトル自動生成", text: "ひと目でわかる名前を添える" },
  { glyph: "check", step: "05", title: "結果表示", text: "ひとつの流れで確認できる" },
] as const;

const onDevicePoints = [
  { title: "送信しない", text: "音声を外部サーバーに送らない" },
  { title: "追加料金なし", text: "API利用料を抑えやすい" },
  { title: "オフラインでも", text: "通信に依存せず動く" },
];

const values = [
  {
    image: "/02-recording.jpg",
    alt: "録音中の画面",
    title: ["メモ取りを手放して、", "会話に集中"],
    text: "書き留める手は止めていい。話している間にFlowistが記録し、あとから読み返せる下書きを残す。目の前のやりとりに、まっすぐ向き合える。",
    reverse: false,
  },
  {
    image: "/04-result.jpg",
    alt: "要約結果の画面",
    title: ["録音も思考も会議も、", "次に使える形に"],
    text: "要点とタイトルが添えられた状態で残るから、見返すのも、共有するのも早い。AIを意識しなくても、自然に整っていく。",
    reverse: true,
  },
];

const previewSteps = [
  { image: "/01-idle.jpg", num: "01", label: "はじめる", alt: "開始画面" },
  { image: "/03-processing.jpg", num: "02", label: "流れる", alt: "整理中の画面" },
  { image: "/04-result.jpg", num: "03", label: "整う", alt: "要約結果の画面" },
];

function App() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="page">
      <PageDecor />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-ribbon" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-inner">
          <img className="hero-icon" src="/flowist-icon.png" alt="" aria-hidden="true" />
          <p className="eyebrow">FLOWIST</p>
          <h1 id="hero-title">流れに、のせていく</h1>
          <p className="hero-copy">
            声も、考えごとも、そのまま。あとは集中するだけ。
            <br />
            iPhoneの中で完結する、ローカルAIメモ。
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#join">
              ベータに参加する
            </a>
            <span className="status">
              <span className="status-dot" aria-hidden="true" />
              ベータテスト実施中
            </span>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="reveal">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2 id="process-title" className="section-title">
            ひとつの流れになる
          </h2>
        </div>
        <p className="section-lead reveal">
          話しはじめてから読み返すまで、操作はとぎれない。録音した瞬間から、整理は静かに進んでいく。
        </p>
        <ol className="steps">
          {features.map((feature) => (
            <li className="step reveal" key={feature.step}>
              <span className="step-icon" aria-hidden="true">
                <StepGlyph glyph={feature.glyph} />
              </span>
              <div className="step-body">
                <span className="step-num">STEP {feature.step}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section ondevice" aria-labelledby="ondevice-title">
        <div className="ondevice-card reveal">
          <div className="ondevice-card-glow" aria-hidden="true" />
          <div className="ondevice-inner">
            <p className="eyebrow">ON-DEVICE</p>
            <h2 id="ondevice-title" className="section-title">
              声も要約も、端末の中だけで完結する
            </h2>
            <p className="section-lead">
              外部のLLM APIを前提にしない設計。録音も文字起こしも要約も、あなたのiPhoneの中で。だから、追加のAI利用料も気にせず使える。
            </p>
            <div className="ondevice-points">
              {onDevicePoints.map((point) => (
                <div className="ondevice-point" key={point.title}>
                  <strong>{point.title}</strong>
                  <p>{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section" aria-labelledby="why-title">
        <div className="values-head reveal">
          <p className="eyebrow">WHY FLOWIST</p>
          <h2 id="why-title" className="section-title">
            最初から、少し整っている
          </h2>
          <p className="section-lead">
            AIに話しかける前に、もう整理されている。Flowistは、記録した「そのあと」を軽くする。
          </p>
        </div>
        <div className="values">
          {values.map((value) => (
            <div className={`value-row reveal${value.reverse ? " reverse" : ""}`} key={value.image + value.title[0]}>
              <div className="phone-frame">
                <img src={value.image} alt={value.alt} loading="lazy" decoding="async" />
              </div>
              <div className="value-text">
                <h3>
                  {value.title[0]}
                  <br />
                  {value.title[1]}
                </h3>
                <p>{value.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section preview-section" aria-labelledby="preview-title">
        <div className="preview-head reveal">
          <p className="eyebrow">PREVIEW</p>
          <h2 id="preview-title" className="section-title">
            録音から、整理まで
          </h2>
        </div>
        <div className="preview-flow">
          <div className="preview-glow" aria-hidden="true" />
          {previewSteps.map((step) => (
            <figure className="pv-item reveal" key={step.num}>
              <div className="pv-frame">
                <img src={step.image} alt={step.alt} loading="lazy" decoding="async" />
              </div>
              <figcaption>
                <span className="pv-num">{step.num}</span>
                {step.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="cta" id="join" aria-labelledby="cta-title">
        <h2 id="cta-title" className="reveal">ベータテストに参加しませんか</h2>
        <p>少人数のClosed Betaを実施中です。Flowistを、いちはやく試してください。</p>
        <a className="btn-primary" href="#">
          ベータに参加する
        </a>
        <div className="platforms">
          <span className="chip">
            <span className="chip-dot" aria-hidden="true" />
            iPhone（Appleシリコン世代）対応
          </span>
          <span className="chip chip--soon">
            <span className="chip-ring" aria-hidden="true" />
            Mac 開発中
          </span>
          <span className="chip chip--soon">
            <span className="chip-ring" aria-hidden="true" />
            iPad 開発中
          </span>
        </div>
        <span className="invite">招待制</span>
      </section>

      <footer className="footer">
        <div>
          <strong>Flowist</strong>
          <p>Local AI memo app · iPhone（Appleシリコン世代）／ Mac・iPad 開発中</p>
        </div>
        <p className="footer-meta">Closed Beta · 2026</p>
      </footer>
    </main>
  );
}

function StepGlyph({ glyph }: { glyph: string }) {
  switch (glyph) {
    case "wave":
      return (
        <span className="g-wave">
          <span />
          <span />
          <span />
          <span />
          <span />
        </span>
      );
    case "text":
      return <span className="g-text">あ</span>;
    case "diamond":
      return (
        <span className="g-diamond">
          <span />
        </span>
      );
    case "tag":
      return (
        <span className="g-tag">
          <span />
        </span>
      );
    case "check":
      return (
        <span className="g-check">
          <span />
        </span>
      );
    default:
      return null;
  }
}

function PageDecor() {
  const path =
    "M50,0 C50,70 26,120 50,200 C72,272 30,322 51,410 C70,486 32,548 52,640 C70,716 34,772 50,860 C60,930 50,968 50,1000";
  return (
    <>
      <div className="grid-overlay" aria-hidden="true" />
      <div className="spine" aria-hidden="true">
        <svg viewBox="0 0 100 1000" preserveAspectRatio="none" fill="none">
          <defs>
            <linearGradient id="spineStroke" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2de4ff" stopOpacity="0" />
              <stop offset="0.06" stopColor="#2de4ff" stopOpacity="0.65" />
              <stop offset="0.5" stopColor="#3f8fff" stopOpacity="0.4" />
              <stop offset="1" stopColor="#3f8fff" stopOpacity="0.16" />
            </linearGradient>
          </defs>
          <path className="spine-halo" d={path} vectorEffect="non-scaling-stroke" />
          <path className="spine-core" d={path} vectorEffect="non-scaling-stroke" />
          <path className="spine-spark" d={path} pathLength={1000} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
    </>
  );
}

export default App;
