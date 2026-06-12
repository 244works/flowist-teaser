const features = [
  {
    title: "録音",
    text: "iPhoneで思考や会話をそのまま残します。",
  },
  {
    title: "日本語文字起こし",
    text: "あとで読み返しやすい日本語テキストにします。",
  },
  {
    title: "オンデバイスAI要約",
    text: "長い録音の要点を、短く見渡せる形へ。",
  },
  {
    title: "タイトル自動生成",
    text: "メモの内容がひと目でわかる名前を添えます。",
  },
  {
    title: "結果表示",
    text: "録音、文字起こし、要約をひとつの流れで確認できます。",
  },
];

const values = [
  "ユーザーがAIに話しかける前に、もう整理されている。",
  "会議中のメモ取りを減らし、会話に集中できる。",
  "外部LLM APIを前提にしない設計。",
  "追加のAI利用料を抑えやすい。",
  "録音メモ、思考メモ、会議メモを次に使える形にする。",
  "AIを意識しなくても、自然に情報が整う。",
];

const previewSteps = ["録音", "文字起こし", "要約", "タイトル生成"];

function App() {
  return (
    <main className="page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-inner">
            <AppIcon className="hero-icon" />
            <p className="product-label">Flowist</p>
            <h1 id="hero-title">メモは任せて、会議に集中する。</h1>
            <p className="hero-copy">記録はFlowistに。あとで手直しできる下書きを残します。</p>
            <div className="hero-actions" aria-label="Flowist status">
              <p className="status-pill">Closed Beta準備中</p>
              <p className="status-note">録音から要約まで、iPhoneで</p>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="section flow-section" aria-labelledby="what-title">
        <div className="section-heading">
          <p className="eyebrow">What Flowist does</p>
          <h2 id="what-title">録音したあとを、次に使いやすく。</h2>
        </div>
        <div className="flow-board">
          <div className="flow-board-visual" aria-hidden="true">
            <div className="photo-tile flow-photo" />
            <div className="flow-wave">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="flow-note">
              <span>Local AI</span>
              <strong>声を、次に使う形へ。</strong>
            </div>
          </div>
          <ol className="flow-steps">
            {features.map((feature, index) => (
              <li key={feature.title}>
                <span className="flow-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section insight-section" aria-labelledby="why-title">
        <div className="section-heading">
          <p className="eyebrow">Why it matters</p>
          <h2 id="why-title">メモが、最初から少し整っている。</h2>
        </div>
        <div className="insight-board">
          <div className="insight-core">
            <div className="insight-photo" aria-hidden="true" />
            <span>Before prompt</span>
            <strong>ユーザーがAIに話しかける前に、もう整理されている。</strong>
            <div className="insight-beams" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
          </div>
          <ul className="value-list">
            {values.slice(1).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section preview-section" aria-labelledby="preview-title">
        <div className="section-heading">
          <p className="eyebrow">Preview</p>
          <h2 id="preview-title">録音から整理までの流れ。</h2>
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

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Flowist visual concept">
      <div className="visual-orbit" />
      <div className="visual-core">
        <div className="photo-tile visual-photo" />
        <div className="visual-pulse" />
      </div>
      <div className="voice-ribbons" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="wave-lane" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="memory-card transcript-card">
        <span>Transcript</span>
        <p>次の打ち合わせで話す内容を、先に短く整理しておく。</p>
      </div>
      <div className="memory-card summary-card">
        <span>Summary</span>
        <p>確認したい点と次のアクション。</p>
      </div>
      <div className="record-button" aria-hidden="true">
        <span />
      </div>
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
          <strong>録るだけで、使えるメモへ</strong>
          <p>話した内容を、使えるメモに整えます。</p>
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
