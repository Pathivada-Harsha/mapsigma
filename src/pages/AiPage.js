import "../pages_css/AiPage.css"

export default function AIModels() {
  return (
    <main className="aim-page">
      {/* Hero */}
      <section
        className="aim-hero"
        style={{ backgroundImage: "url(/images/hero-ai-models.jpg)" }}
        aria-label="Hero section"
      >
        <div className="aim-hero-inner">
          <div className="aim-hero-left">
            <h1 className="aim-title">AI-Enhanced Investment Models</h1>
            <p className="aim-subtitle">
              Advanced ML transforms complex data into actionable insights—discover signals, simulate scenarios,
              and optimize portfolios with discipline.
            </p>
            <div className="aim-actions">
              <a className="aim-button-primary" href="#overview">
                Explore Modeling
              </a>
              <a className="aim-button-ghost" href="/client-command-portal">
                See Client Portal
              </a>
            </div>
          </div>
          <div className="aim-hero-right">
            <img
              className="aim-side-image"
              src="/images/side-ai-models.jpg"
              alt="AI neural network with financial charts"
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="aim-section">
        <div className="aim-container">
          <h2 className="aim-h2">AI Enhanced Investment Models</h2>
          <p className="aim-p">
            At MAPSIGMA CAPITAL, our AI Enhanced Investment Models harness the power of advanced machine learning and
            artificial intelligence to transform complex market data into actionable investment insights. These models go
            far beyond traditional analysis by uncovering non-obvious patterns and relationships invisible to human
            analysts or conventional algorithms.
          </p>
        </div>
      </section>

      {/* Discovery Section */}
      <section className="aim-section aim-split">
        <div className="aim-text">
          <h2 className="aim-h2">Deep Signal Discovery</h2>
          <p className="aim-p">
            By training on vast datasets spanning decades of market history, economic cycles, and geopolitical events,
            our AI systems identify subtle signals and emerging trends that provide a competitive edge.
          </p>
        </div>
        <div className="aim-image">
          <img src="/images/signal-discovery.jpg" alt="Market signals AI discovery" />
        </div>
      </section>

      {/* Scenario Section */}
      <section className="aim-section aim-split-reverse">
        <div className="aim-image">
          <img src="/images/scenario-simulation.jpg" alt="Scenario simulation AI" />
        </div>
        <div className="aim-text">
          <h2 className="aim-h2">Scenario Simulation</h2>
          <p className="aim-p">
            Our machine learning frameworks simulate a wide array of macroeconomic scenarios—interest rates, inflation,
            policy shifts, global trade dynamics—helping investment teams anticipate outcomes and adjust strategies
            proactively.
          </p>
        </div>
      </section>

      {/* Stress Testing Section */}
      <section className="aim-section aim-split">
        <div className="aim-text">
          <h2 className="aim-h2">Dynamic Stress Testing</h2>
          <p className="aim-p">
            The AI models rigorously stress test portfolios under extreme market conditions and across multiple time
            horizons—from intraday volatility to long-term economic shifts. This enables us to identify vulnerabilities
            and optimize portfolios to withstand unforeseen shocks.
          </p>
        </div>
        <div className="aim-image">
          <img src="/images/stress-test.jpg" alt="Stress testing portfolios" />
        </div>
      </section>

      {/* Human + AI Loop Section */}
      <section className="aim-section">
        <div className="aim-container">
          <h2 className="aim-h2">Human + AI Loop</h2>
          <p className="aim-p">
            Importantly, these AI-driven insights complement human judgment. Our professionals continuously validate and
            refine outputs, ensuring alignment with core principles and market experience. This fusion of AI and
            expertise allows MAPSIGMA CAPITAL to deliver smarter, more adaptive investment strategies designed to thrive
            in today’s complex and rapidly evolving financial landscape.
          </p>
        </div>
      </section>
    </main>
  )
}
