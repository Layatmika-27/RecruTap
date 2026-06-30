import "./App.css";

function App() {
  return (
    <div className="app">

      <nav className="navbar">
        <h2 className="logo">RecruTap</h2>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Analyze</a>
          <a href="#">About</a>
        </div>
      </nav>

      <section className="hero">

        <h1>
          Tap.
          <br />
          Verify.
          <br />
          Apply.
        </h1>

        <p>
          RecruTap helps students and fresh graduates analyze job
          opportunities before sharing their personal information.
          Our AI evaluates trust signals and highlights potential risks
          so you can apply with confidence.
        </p>

        <div className="buttons">
          <button className="primary-btn">
            Analyze Job
          </button>

          <button className="secondary-btn">
            Learn More
          </button>
        </div>

      </section>

      <section className="features">

        <div className="card">
          <h3>🔍 Scam Detection</h3>
          <p>
            Detect suspicious phrases like registration fees,
            urgent hiring, and fake promises.
          </p>
        </div>

        <div className="card">
          <h3>📊 AI Risk Score</h3>
          <p>
            Receive an explainable trust score with confidence
            level and detailed reasoning.
          </p>
        </div>

        <div className="card">
          <h3>🛡 Privacy Protection</h3>
          <p>
            Learn what information is safe to share during
            different stages of recruitment.
          </p>
        </div>

      </section>

    </div>
  );
}

export default App;