import "../pages_css/AiPage.css"
import Ai1 from "../images/Technology/Ai1.png"
import Ai2 from "../images/Technology/Ai2.png"
import Ai3 from "../images/Technology/Ai3.png"
import Ai4 from "../images/Technology/Ai4.png"
import Ai5 from "../images/Technology/Ai5.png"
import Ai6 from "../images/Technology/Ai6.png"
import Ai7 from "../images/Technology/Ai7.png"
export default function AIModels() {
  return (
    <div className="aim-page">
      {/* Hero Section */}
      <section 
        className="aim-hero"
        style={{ backgroundImage: "url(/images/hero-ai-models.jpg)" }}
      >
        <div className="aim-hero-inner">
          <div className="aim-hero-left">
            <h1 className="aim-title">AI-Enhanced Investment Models</h1>
            <p className="aim-subtitle">
              Advanced machine learning transforms complex market data into actionable insights. Discover hidden signals, simulate scenarios, and optimize portfolios with precision and discipline.
            </p>
            <div className="aim-actions">
              <a className="aim-button-primary" href="#overview">
                Explore Our Models
              </a>
              <a className="aim-button-ghost" href="/client-command-portal">
                Client Portal
              </a>
            </div>
          </div>
          <div className="aim-hero-right">
            <img
              className="aim-side-image"
              src={Ai1}
              alt="AI neural network with financial charts"
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="aim-section">
        <div className="aim-container">
          <h2 className="aim-h2">Next-Generation Investment Intelligence</h2>
          <p className="aim-p">
            At MAPSIGMA CAPITAL, our AI Enhanced Investment Models harness the power of advanced machine learning and artificial intelligence to transform complex market data into actionable investment insights.
          </p>
          <p className="aim-p">
            These models go far beyond traditional analysis by uncovering non-obvious patterns and relationships that may be invisible to human analysts or conventional algorithms. By training on vast datasets spanning decades of market history, economic cycles, and geopolitical events, our AI systems identify subtle signals and emerging trends that provide a competitive edge.
          </p>
        </div>
      </section>

      {/* Deep Signal Discovery */}
      <section className="aim-section-alt">
        <div className="aim-split">
          <div className="aim-split-left">
            <h2 className="aim-feature-title">Deep Signal Discovery</h2>
            <p>
              By training on vast datasets spanning decades of market history, economic cycles, and geopolitical events, our AI systems identify subtle signals and emerging trends that provide a competitive edge.
            </p>
            <p>
              Our advanced neural networks analyze millions of data points simultaneously, recognizing patterns across multiple asset classes, time horizons, and market conditions. This comprehensive approach reveals opportunities that traditional methods often miss.
            </p>
          </div>
          <div className="aim-split-right">
            <img 
              className="aim-split-image"
              src={Ai3}
              alt="Market signals AI discovery" 
            />
          </div>
        </div>
      </section>

      {/* Scenario Simulation */}
      <section className="aim-section">
        <div className="aim-split reverse">
          <div className="aim-split-left">
            <h2 className="aim-feature-title">Scenario Simulation</h2>
            <p>
              Our machine learning frameworks simulate a wide array of macroeconomic scenarios, incorporating variables such as interest rates, inflation, policy shifts, and global trade dynamics.
            </p>
            <p>
              This scenario analysis helps our investment teams anticipate potential market outcomes and adjust portfolio strategies proactively. By modeling thousands of possible futures, we prepare for multiple contingencies and position portfolios to capitalize on emerging opportunities.
            </p>
          </div>
          <div className="aim-split-right">
            <img 
              className="aim-split-image"
              src={Ai4}
              alt="Scenario simulation AI" 
            />
          </div>
        </div>
      </section>

      {/* Dynamic Stress Testing */}
      <section className="aim-section-alt">
        <div className="aim-split">
          <div className="aim-split-left">
            <h2 className="aim-feature-title">Dynamic Stress Testing</h2>
            <p>
              The AI models rigorously stress test portfolios under extreme market conditions and across multiple time horizons—from intraday volatility to long-term economic shifts.
            </p>
            <p>
              This dynamic risk assessment enables us to identify vulnerabilities and optimize portfolio construction to withstand unforeseen shocks. Our systems continuously evaluate risk exposure and recommend adjustments to maintain optimal risk-return profiles.
            </p>
          </div>
          <div className="aim-split-right">
            <img 
              className="aim-split-image"
              src={Ai5}
              alt="Stress testing portfolios" 
            />
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="aim-section">
        <div className="aim-container">
          <h2 className="aim-h2">Core AI Capabilities</h2>
          <p className="aim-p">
            Our AI-enhanced investment platform combines cutting-edge technology with investment expertise to deliver superior outcomes.
          </p>
          <ul className="aim-features">
            <li className="aim-feature-card">
              <h3 className="aim-feature-title">Pattern Recognition</h3>
              <p className="aim-feature-body">
                Advanced algorithms detect complex patterns across historical data, identifying correlations and trends that signal investment opportunities.
              </p>
            </li>
            <li className="aim-feature-card">
              <h3 className="aim-feature-title">Predictive Analytics</h3>
              <p className="aim-feature-body">
                Machine learning models forecast market movements by analyzing thousands of economic indicators and market signals in real-time.
              </p>
            </li>
            <li className="aim-feature-card">
              <h3 className="aim-feature-title">Risk Optimization</h3>
              <p className="aim-feature-body">
                AI-powered portfolio optimization continuously balances risk and return, adjusting allocations based on changing market conditions.
              </p>
            </li>
            <li className="aim-feature-card">
              <h3 className="aim-feature-title">Adaptive Learning</h3>
              <p className="aim-feature-body">
                Our models continuously learn from new data, refining predictions and improving accuracy as market dynamics evolve over time.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Human + AI Integration */}
      <section className="aim-section-alt">
        <div className="aim-container">
          <h2 className="aim-h2">Human Intelligence + AI Power</h2>
          <div className="aim-long-content">
            <p>
              <strong>Importantly, these AI-driven insights complement human judgment.</strong> Our investment professionals continuously validate and refine model outputs, ensuring alignment with our core principles and market experience.
            </p>
            <p>
              The synergy between artificial intelligence and human expertise creates a powerful advantage. While AI excels at processing vast amounts of data and identifying patterns, our experienced professionals provide critical context, judgment, and oversight.
            </p>
            <p>
              This collaborative approach ensures that quantitative insights are balanced with qualitative analysis, market intuition, and decades of investment experience. Our team doesn't simply accept AI recommendations—they interrogate them, validate them, and integrate them into a comprehensive investment strategy.
            </p>
            <p>
              <strong>Together, this fusion of AI and expertise allows MAPSIGMA CAPITAL to deliver smarter, more adaptive investment strategies designed to thrive in today's complex and rapidly evolving financial landscape.</strong>
            </p>
          </div>
        </div>
      </section>

      
    </div>
  )
}
