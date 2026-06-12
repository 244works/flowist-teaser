const features = [
  {
    title: "録音",
    text: "声も会話も、そのまま残す",
  },
  {
    title: "日本語文字起こし",
    text: "読み返せる日本語テキストに",
  },
  {
    title: "オンデバイスAI要約",
    text: "要点だけ、短く見渡せる",
  },
  {
    title: "タイトル自動生成",
    text: "ひと目でわかる名前を添える",
  },
  {
    title: "結果表示",
    text: "ひとつの流れで確認できる",
  },
];

const values = [
  "メモ取りを手放して、会話に集中",
  "外部LLM APIを前提にしない設計",
  "追加のAI利用料を抑えやすい",
  "録音も思考も会議も、次に使える形に",
  "AIを意識しなくても、自然に整う",
];

const previewSteps = ["録音", "文字起こし", "要約", "タイトル生成"];

function App() {
  return (
    <main className="page">
      <PageFlow />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-inner">
          <AppIcon className="hero-icon" />
          <p className="product-label">Flowist</p>
          <h1 id="hero-title">流れに、のせていく</h1>
          <p className="hero-copy">声も、考えごとも、そのまま。あとは集中するだけ。</p>
          <div className="hero-actions" aria-label="Flowist status">
            <p className="status-pill">Closed Beta準備中</p>
          </div>
        </div>
      </section>

      <section className="section flow-section" aria-labelledby="what-title">
        <div className="section-heading">
          <h2 id="what-title">ひとつの流れになる</h2>
        </div>
        <ol className="flow-steps">
          {features.map((feature, index) => (
            <li key={feature.title} className="flow-step">
              <span className="flow-node">{String(index + 1).padStart(2, "0")}</span>
              <div className="flow-step-body">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section insight-section" aria-labelledby="why-title">
        <div className="section-heading">
          <h2 id="why-title">最初から、少し整っている</h2>
        </div>
        <ul className="value-list">
          {values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </section>

      <section className="section preview-section" aria-labelledby="preview-title">
        <div className="section-heading">
          <h2 id="preview-title">録音から、整理まで</h2>
        </div>
        <AppPreview />
      </section>

      <footer className="footer">
        <div>
          <strong>Flowist</strong>
          <p>Local AI memo app for iPhone</p>
        </div>
        <p>Built for a small Closed Beta preview.</p>
      </footer>
    </main>
  );
}

function PageFlow() {
  const path =
    "M50,0 C50,70 24,120 50,200 C73,272 28,322 51,410 C71,486 30,548 52,640 C70,716 33,772 50,860 C62,930 50,968 50,1000";
  return (
    <div className="page-flow" aria-hidden="true">
      <svg
        className="page-flow-svg"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="flowStroke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2de4ff" stopOpacity="0" />
            <stop offset="0.08" stopColor="#2de4ff" stopOpacity="0.85" />
            <stop offset="0.5" stopColor="#3f8fff" stopOpacity="0.7" />
            <stop offset="1" stopColor="#3f8fff" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path className="flow-line flow-line-halo" d={path} vectorEffect="non-scaling-stroke" />
        <path className="flow-line flow-line-core" d={path} vectorEffect="non-scaling-stroke" />
        <path className="flow-line flow-line-spark" d={path} vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}

function AppPreview() {
  return (
    <div className="phone-preview" aria-label="Flowist app preview">
      <div className="phone-shell">
        <div className="phone-bar" />
        <AppIcon className="preview-icon" />
        <div className="preview-header">
          <span>Flowist</span>
          <strong>流れに、のせていく</strong>
          <p>記録はFlowistに。あとで手直しできる下書きを残します。</p>
        </div>
        <div className="screen-wave" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="recording-card">
          <div className="recording-dot" />
          <div>
            <span>録音</span>
            <strong>00:42</strong>
          </div>
        </div>
        <div className="transcript-block">
          <span>文字起こし</span>
          <p>次の打ち合わせで話す内容を、先に短く整理しておく。</p>
        </div>
        <div className="summary-block">
          <span>要約</span>
          <p>確認したい点と次のアクションをまとめる。</p>
        </div>
        <div className="title-block">
          <span>タイトル生成</span>
          <strong>打ち合わせ前の整理</strong>
        </div>
        <div className="step-row">
          {previewSteps.map((step) => (
            <span key={step}>{step}</span>
          ))}
        </div>
        <div className="phone-record-control" aria-hidden="true">
          <span />
          録音を開始
        </div>
      </div>
    </div>
  );
}

function AppIcon({ className }: { className: string }) {
  return <img className={className} src="/flowist-icon.png" alt="" aria-hidden="true" />;
}

export default App;
