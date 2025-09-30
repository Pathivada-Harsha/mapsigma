import "../pages_css/RealTime.css"

export default function RealTimeData() {
  const items = [
    {
      title: "Live Market Feeds",
      body: "Capture equities, bonds, FX, commodities, and alternative assets with ultra-low latency.",
    },
    {
      title: "Unified Normalization",
      body: "Cleanse and standardize diverse sources for seamless cross-asset analysis.",
    },
    {
      title: "Actionable Signals",
      body: "Detect anomalies and emerging patterns in milliseconds for faster decisions.",
    },
    {
      title: "Scalable Infrastructure",
      body: "Built on a robust cloud platform to handle growing data demands.",
    },
  ]

  return (
    <main className="rtd-page">
      {/* Hero */}
      <section
        className="rtd-hero"
        style={{ backgroundImage: "url(/images/hero-real-time.jpg)" }}
        aria-label="Hero section"
      >
        <div className="rtd-hero-inner">
          <div className="rtd-hero-left">
            <h1 className="rtd-title">Real-Time Data Infrastructure</h1>
            <p className="rtd-subtitle">
              Ingest, process, and analyze millions of events per second across global markets for a live, accurate view
              of risk and opportunity.
            </p>
            <div className="rtd-actions">
              <a className="rtd-button-primary" href="#overview">
                Learn More
              </a>
              <a className="rtd-button-ghost" href="/client-command-portal">
                See Client Portal
              </a>
            </div>
          </div>
          <div className="rtd-hero-right">
            <img
              className="rtd-side-image"
              src="/images/side-real-time.jpg"
              alt="Streaming market data and charts"
            />
          </div>
        </div>
      </section>

      {/* Overview / Full Content */}
      <section id="overview" className="rtd-section">
        <div className="rtd-container">
          <h2 className="rtd-h2">At the Core of MAPSIGMA CAPITAL</h2>
          <p className="rtd-p">
            Our Real Time Data Infrastructure is a high-performance, scalable system designed to ingest, process and
            analyze millions of data points every second from markets around the world.
          </p>
        </div>
      </section>

      <section className="rtd-section-alt">
        <div className="rtd-container rtd-split">
          <div className="rtd-split-left">
            <h3 className="rtd-feature-title">Continuous Market Feeds</h3>
            <p>
              Unlike traditional models that rely on delayed or batch-processed data, our infrastructure captures live
              feeds from equities, bonds, currencies, commodities and alternative assets.
            </p>
            <p>
              This continuous flow of real-time information ensures that our analysts and strategists work with the most
              current, accurate and comprehensive market picture available.
            </p>
          </div>
          <div className="rtd-split-right">
            <img src="/images/market-feeds.jpg" alt="Continuous live market feeds" className="rtd-split-image" />
          </div>
        </div>
      </section>

      <section className="rtd-section">
        <div className="rtd-container rtd-split reverse">
          <div className="rtd-split-left">
            <h3 className="rtd-feature-title">Diverse Data Sources</h3>
            <p>
              Our system integrates diverse data sources, including price movements, trading volumes, economic
              indicators, news sentiment, social trends and geopolitical events.
            </p>
            <p>
              Sophisticated filtering and normalization techniques clean and standardize this data, enabling seamless
              comparison and analysis.
            </p>
          </div>
          <div className="rtd-split-right">
            <img src="/images/data-sources.jpg" alt="Diverse data sources" className="rtd-split-image" />
          </div>
        </div>
      </section>

      <section className="rtd-section-alt">
        <div className="rtd-container rtd-split">
          <div className="rtd-split-left">
            <h3 className="rtd-feature-title">Ultra-Low Latency Processing</h3>
            <p>
              By processing this massive volume of live data with ultra-low latency, we empower our investment teams to
              identify emerging patterns, detect market anomalies and respond swiftly to evolving conditions.
            </p>
            <p>This edge in speed and precision is critical in today’s fast-moving, interconnected financial landscape.</p>
          </div>
          <div className="rtd-split-right">
            <img src="/images/low-latency.jpg" alt="Low latency data processing" className="rtd-split-image" />
          </div>
        </div>
      </section>

      <section className="rtd-section">
        <div className="rtd-container">
          <h2 className="rtd-h2">Transforming Data into Intelligence</h2>
          <p className="rtd-p">
            Ultimately, our Real Time Data Infrastructure is not just about access to information—it’s about
            transforming data into actionable intelligence.
          </p>
          <p className="rtd-p">
            It equips MAPSIGMA CAPITAL to anticipate market shifts before they fully materialize, enabling proactive
            decision-making and superior risk management on behalf of our clients.
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="rtd-section-alt">
        <div className="rtd-container">
          <h2 className="rtd-h2">Why it matters</h2>
          <p className="rtd-p">
            Speed and precision turn data into advantage. We combine live tick data with news, macro indicators, and
            sentiment to anticipate shifts before they materialize.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="rtd-section">
        <div className="rtd-container">
          <h2 className="rtd-h2">Key Features</h2>
          <ul className="rtd-features">
            {items.map((it) => (
              <li key={it.title} className="rtd-feature-card">
                <h3 className="rtd-feature-title">{it.title}</h3>
                <p className="rtd-feature-body">{it.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
