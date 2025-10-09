"use client"

import { useState } from "react"
import "../pages_css/OurApproach.css"
import legacy from "../images/Research&insights/Ri18.png"
export default function ApproachContent() {
  const [activeLeader, setActiveLeader] = useState(0)

  return (
    <div className="Approach1-container">
      {/* Hero Section - Culture */}
      <section className="Approach1-hero">
        <div className="Approach1-hero-overlay"></div>
        <div className="Approach1-hero-content">
          <h1 className="Approach1-hero-title">Representing Culture</h1>
          <p className="Approach1-hero-subtitle">Where Trust is Earned and Legacy is Built Together</p>
        </div>
      </section>

      {/* Culture Introduction */}
      <section className="Approach1-culture-intro">
        <div className="Approach1-container-width">
          <div className="Approach1-culture-grid">
            <div className="Approach1-culture-text">
              <p className="Approach1-large-text">
                At MAPSIGMA CAPITAL, culture isn't defined by what we say. It's revealed in how we work, how we live and
                how we treat one another. It is our invisible engine, the heartbeat behind every decision, every
                investment and every promise we keep.
              </p>
              <p className="Approach1-body-text">
                We don't just manage money. We manage responsibility with the same seriousness you would expect from
                someone safeguarding your family's future. Because for us this isn't transactional. It's generational.
              </p>
            </div>
            <div className="Approach1-culture-visual">
              <div className="Approach1-culture-card">
                <div className="Approach1-culture-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>Building lasting value for generations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Split Layout */}
      {/* <section className="Approach1-values">
        <div className="Approach1-container-width">
          <div className="Approach1-value-item Approach1-value-left">
            <div className="Approach1-value-content">
              <h2 className="Approach1-value-title">We Build on Truth Not Trends</h2>
              <p className="Approach1-value-subtitle">Markets evolve. So must we.</p>
              <p className="Approach1-value-text">
                We operate in a world that doesn't care for opinions, only outcomes. To earn results that last we must
                first seek truth - the truth about the world, the truth about ourselves and the truth about what really
                creates value.
              </p>
              <p className="Approach1-value-text">
                That means being radically honest about what's working about what isn't and about the blind spots we all
                carry. Truth here isn't weaponized. It's welcomed. It helps us improve. It brings us closer. It builds
                trust from the inside out.
              </p>
            </div>
            <div className="Approach1-value-image">
              <img src="/truth-not-trends.jpg" alt="Truth Not Trends" />
            </div>
          </div>

          <div className="Approach1-value-item Approach1-value-right">
            <div className="Approach1-value-image">
              <img src="/excellence-not-ego.jpg" alt="Excellence Not Ego" />
            </div>
            <div className="Approach1-value-content">
              <h2 className="Approach1-value-title">We Honor Excellence Not Ego</h2>
              <p className="Approach1-value-subtitle">We don't reward noise. We reward clarity.</p>
              <p className="Approach1-value-text">
                No voice is too junior. No title is too senior. The best ideas win always.
              </p>
              <p className="Approach1-value-text">
                We challenge each other with respect and we back each other with courage. Because we know that greatness
                comes not from comfort but from the willingness to improve constantly relentlessly together.
              </p>
            </div>
          </div>

          <div className="Approach1-value-item Approach1-value-left">
            <div className="Approach1-value-content">
              <h2 className="Approach1-value-title">We Lead With Meaning</h2>
              <p className="Approach1-value-subtitle">Numbers alone don't drive us. Purpose does.</p>
              <p className="Approach1-value-text">
                Everyone at MAPSIGMA CAPITAL is here for a reason bigger than a role. Our work has weight. Our decisions
                ripple through communities, industries and generations.
              </p>
              <p className="Approach1-value-text">
                That's why we take time to know our clients, not just their balance sheets and why we build
                relationships that go beyond business. Because when work feels personal excellence becomes inevitable.
              </p>
            </div>
            <div className="Approach1-value-image">
              <img src="/lead-with-meaning.jpg" alt="Lead With Meaning" />
            </div>
          </div>
        </div>
      </section> */}

      {/* Belonging Section - Full Width with Overlay */}
      <section className="Approach1-belonging">
        <div className="Approach1-belonging-overlay"></div>
        <div className="Approach1-container-width">
          <div className="Approach1-belonging-content">
            <h2 className="Approach1-belonging-title">We're Building a Place Worth Belonging To</h2>
            <p className="Approach1-belonging-text">
              We believe in creating an environment where people don't just want to work but want to belong. A place
              where you feel safe to grow, safe to speak and safe to care deeply about your work, your team and your
              future.
            </p>
            <div className="Approach1-belonging-grid">
              <div className="Approach1-belonging-card">
                <h3>Thinkers</h3>
                <p>We question, analyze, and seek deeper understanding</p>
              </div>
              <div className="Approach1-belonging-card">
                <h3>Doers</h3>
                <p>We execute with precision and accountability</p>
              </div>
              <div className="Approach1-belonging-card">
                <h3>Learners</h3>
                <p>We evolve, adapt, and grow continuously</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Edge - Stats Section */}
      <section className="Approach1-edge">
        <div className="Approach1-container-width">
          <h2 className="Approach1-edge-title">Culture Is Our Greatest Edge</h2>
          <p className="Approach1-edge-subtitle">
            While markets fluctuate and technology advances one thing remains constant - the strength of our culture.
          </p>
          <div className="Approach1-edge-grid">
            <div className="Approach1-edge-item">
              <div className="Approach1-edge-icon">🤝</div>
              <h3>Client Trust</h3>
              <p>It's what makes clients trust us</p>
            </div>
            <div className="Approach1-edge-item">
              <div className="Approach1-edge-icon">⭐</div>
              <h3>Talent Retention</h3>
              <p>It's what makes talent stay</p>
            </div>
            <div className="Approach1-edge-item">
              <div className="Approach1-edge-icon">💪</div>
              <h3>Firm Strength</h3>
              <p>It's what turns a firm into a force</p>
            </div>
          </div>
          <p className="Approach1-edge-conclusion">
            At MAPSIGMA CAPITAL our culture isn't just what sets us apart
            <br />
            It's what holds us together
          </p>
        </div>
      </section>

      {/* Principles Section - Hero with Background */}
      <section className="Approach1-principles-hero">
        <div className="Approach1-principles-overlay"></div>
        <div className="Approach1-container-width">
          <div className="Approach1-principles-content">
            <h2 className="Approach1-principles-title">Principles at MAPSIGMA CAPITAL</h2>
            <p className="Approach1-principles-subtitle">
              How Austin Prakesh's Life Philosophy Became the Operating DNA of a Modern Investment Firm
            </p>
            <p className="Approach1-principles-text">
              MAPSIGMA CAPITAL was not built on trends, timing or luck. It was built on principles tested in real life,
              forged through adversity and sharpened through years of discipline, clarity and mindset.
            </p>
          </div>
        </div>
      </section>

      {/* Principles Framework - Card Grid */}
      <section className="Approach1-framework">
        <div className="Approach1-container-width">
          <h2 className="Approach1-section-title">A Principles Driven Investment Framework</h2>
          <p className="Approach1-section-intro">
            Austin Prakesh developed MAPSIGMA CAPITAL's investment philosophy by combining real world experience with
            relentless inquiry.
          </p>
          <div className="Approach1-framework-grid">
            <div className="Approach1-framework-card">
              <div className="Approach1-framework-number">01</div>
              <h3>Study History</h3>
              <p>We don't chase headlines. We study history.</p>
            </div>
            <div className="Approach1-framework-card">
              <div className="Approach1-framework-number">02</div>
              <h3>Anticipate</h3>
              <p>We don't react. We anticipate.</p>
            </div>
            <div className="Approach1-framework-card">
              <div className="Approach1-framework-number">03</div>
              <h3>Navigate Complexity</h3>
              <p>By analyzing patterns across decades, we navigate with confidence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Principles Matter - Highlight Section */}
      {/* <section className="Approach1-why-principles">
        <div className="Approach1-container-width">
          <div className="Approach1-why-content">
            <h2 className="Approach1-why-title">Why Principles Matter</h2>
            <div className="Approach1-why-grid">
              <div className="Approach1-why-item">
                <div className="Approach1-why-highlight">Clarity is Power</div>
                <p>In a world full of noise, clarity is power</p>
              </div>
              <div className="Approach1-why-item">
                <div className="Approach1-why-highlight">We Calculate</div>
                <p>When others guess, we calculate</p>
              </div>
              <div className="Approach1-why-item">
                <div className="Approach1-why-highlight">Principles Keep Us Steady</div>
                <p>When the ground shifts, principles keep us steady</p>
              </div>
            </div>
            <p className="Approach1-why-conclusion">
              At MAPSIGMA CAPITAL, principles aren't abstract ideas. They are the compass that guides our decisions, the
              foundation of our risk management and the heartbeat of our culture.
            </p>
          </div>
        </div>
      </section> */}

      {/* Legacy Section - Split with Image */}
      <section className="Approach1-legacy">
        <div className="Approach1-container-width">
          <div className="Approach1-legacy-grid">
            <div className="Approach1-legacy-image">
              <img src={legacy} alt="Legacy Built on Purpose" />
            </div>
            <div className="Approach1-legacy-content">
              <h2 className="Approach1-legacy-title">A Legacy Built on Purpose</h2>
              <p className="Approach1-legacy-text">
                Austin's personal journey from humble beginnings to global investor, mentor and builder has shaped
                MAPSIGMA CAPITAL into more than an investment firm. It's a principled institution with a soul. One that
                values truth over comfort, excellence over ego and legacy over noise.
              </p>
              <div className="Approach1-legacy-points">
                <div className="Approach1-legacy-point">
                  <span className="Approach1-legacy-bullet">→</span>
                  <p>We don't just invest for returns</p>
                </div>
                <div className="Approach1-legacy-point">
                  <span className="Approach1-legacy-bullet">→</span>
                  <p>We invest with reason, with conviction and with responsibility</p>
                </div>
                <div className="Approach1-legacy-point">
                  <span className="Approach1-legacy-bullet">→</span>
                  <p>Because when principles lead, performance follows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Modern Card Layout */}
      {/* <section className="Approach1-leadership">
        <div className="Approach1-container-width">
          <div className="Approach1-leadership-header">
            <h2 className="Approach1-section-title">Our Leadership</h2>
            <p className="Approach1-section-intro">
              Discover the visionaries shaping MAPSIGMA CAPITAL's strategic direction and long-term vision. These
              leaders are responsible for guiding the firm's overall strategy with clarity and purpose.
            </p>
          </div>

          
          <div className="Approach1-leader-profile">
            <div className="Approach1-leader-header">
              <div className="Approach1-leader-photo">
                <img src="/leader-amritpal.jpg" alt="Mr. Amritpal Singh Gadhoke" />
              </div>
              <div className="Approach1-leader-intro">
                <h3 className="Approach1-leader-name">Mr. Amritpal Singh Gadhoke</h3>
                <p className="Approach1-leader-title">Managing Director (MD)</p>
                <p className="Approach1-leader-summary">
                  A seasoned leader with over 18 years of experience in the food and beverage retail industry. Known for
                  his expertise in turnaround leadership and entrepreneurial innovation.
                </p>
              </div>
            </div>
            <div className="Approach1-leader-details">
              <p className="Approach1-leader-bio">
                Mr. Amritpal Singh Gadhoke excels in driving strategic growth, profitability, and brand expansion. His
                focus on business strategy, profit centre management, and new product launches has delivered significant
                market and revenue impact.
              </p>
              <div className="Approach1-leader-highlights">
                <h4>Key Highlights</h4>
                <ul className="Approach1-leader-list">
                  <li>Over 18 years of leadership in food and beverage retail industry</li>
                  <li>Managing Director of Passion Singh DMCC, Dubai</li>
                  <li>Former CEO of London Dairy Café and Bistro UAE</li>
                  <li>Expert in talent management, marketing, and operational efficiency</li>
                  <li>Commerce graduate from Mumbai University</li>
                  <li>Executive Post Graduate Program in Management at Welingkar's Institute</li>
                </ul>
              </div>
            </div>
          </div>

         
          <div className="Approach1-leader-profile">
            <div className="Approach1-leader-header">
              <div className="Approach1-leader-photo">
                <img src="/leader-arun.jpg" alt="Mr. S. Arun" />
              </div>
              <div className="Approach1-leader-intro">
                <h3 className="Approach1-leader-name">Mr. S. Arun</h3>
                <p className="Approach1-leader-title">Director Legal</p>
                <p className="Approach1-leader-summary">
                  Senior Partner at ALMT Legal, an accomplished corporate lawyer with extensive expertise in private
                  equity, capital markets, and international M&A.
                </p>
              </div>
            </div>
            <div className="Approach1-leader-details">
              <p className="Approach1-leader-bio">
                Arun S. has been instrumental in advising companies on Indian IPOs, intellectual property matters, and
                real estate investment trusts. His deep understanding of emerging sectors including blockchain, AI, and
                electric mobility has established him as a trusted advisor.
              </p>
              <div className="Approach1-leader-highlights">
                <h4>Key Highlights</h4>
                <ul className="Approach1-leader-list">
                  <li>Senior Partner at ALMT Legal</li>
                  <li>Expert in private equity, capital markets, and corporate finance</li>
                  <li>Cross-border expertise across US, UK, China, UAE, and Singapore</li>
                  <li>Advisor to blockchain, AI, and electric mobility sectors</li>
                  <li>Prolific author and speaker on private equity and IT laws</li>
                  <li>Strategic legal counsel to directors and boards of leading corporations</li>
                </ul>
              </div>
            </div>
          </div>

         
          <div className="Approach1-leader-profile">
            <div className="Approach1-leader-header">
              <div className="Approach1-leader-photo">
                <img src="/leader-kokila.jpg" alt="Ms Kokila Raja Ratna" />
              </div>
              <div className="Approach1-leader-intro">
                <h3 className="Approach1-leader-name">Ms Kokila Raja Ratna</h3>
                <p className="Approach1-leader-title">Chief Operation Officer (COO)</p>
                <p className="Approach1-leader-summary">
                  A seasoned professional in Operational Risk, Compliance, and Anti-Fraud, with over 21 years of
                  experience in global banking and financial services.
                </p>
              </div>
            </div>
            <div className="Approach1-leader-details">
              <p className="Approach1-leader-bio">
                A Certified Internal Auditor (CIA), Ms. Raja Ratna has held senior risk management roles at leading
                institutions including Habib Bank AG Zurich, Emirates NBD, ING Vysya, and HSBC. Her expertise spans
                global regulatory frameworks such as BASEL, AML/CFT, and GDPR.
              </p>
              <div className="Approach1-leader-highlights">
                <h4>Key Highlights</h4>
                <ul className="Approach1-leader-list">
                  <li>Over 21 years in operational risk, compliance, and anti-fraud</li>
                  <li>Certified Internal Auditor (CIA)</li>
                  <li>Chief Risk Officer at MAPSIMA</li>
                  <li>Expert in BASEL, AML/CFT, and GDPR frameworks</li>
                  <li>Senior roles at Habib Bank AG Zurich, Emirates NBD, ING Vysya, HSBC</li>
                  <li>Drives strategic risk management and compliance culture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Partners Section - Simple Grid */}
      <section className="Approach1-partners">
        <div className="Approach1-container-width">
          <h2 className="Approach1-section-title">Our Partners</h2>
          <p className="Approach1-section-intro">
            Our partners are more than executives and staff, they are the driving force behind MAPSIGMA CAPITAL. Each
            brings deep expertise, sharp execution and a shared commitment to our mission.
          </p>
          <p className="Approach1-partners-description">
            Together, they operate with discipline, agility and trust building the systems, relationships and results
            that define our success. This is a team aligned by purpose and united by principles, working every day to
            deliver lasting impact for our clients and communities.
          </p>
        </div>
      </section>

      {/* People Section - Photo Grid */}
      <section className="Approach1-people">
        <div className="Approach1-container-width">
          <h2 className="Approach1-section-title">People</h2>
          <p className="Approach1-people-subtitle">The Heart of MAPSIGMA CAPITAL</p>
          <div className="Approach1-people-content">
            <p className="Approach1-people-text">
              At MAPSIGMA CAPITAL, we believe the true value of any firm lies not in its assets but in its people.
            </p>
            <p className="Approach1-people-text">
              We don't just build portfolios. We build character, discipline and clarity in the people who manage them.
              From seasoned investors to rising minds across disciplines, every individual here brings a fire to solve,
              to grow and to lead with purpose.
            </p>
            <p className="Approach1-people-text">
              Our people come from all walks of life: entrepreneurs, technologists, analysts, veterans and creative
              thinkers. Each one is chosen not just for skill but for mindset. Not just for what they know, but for
              their willingness to learn, adapt and lead with integrity.
            </p>
          </div>
          {/* <div className="Approach1-people-grid">
            <div className="Approach1-people-card">
              <img src="/people-team-1.jpg" alt="Team Member" />
            </div>
            <div className="Approach1-people-card">
              <img src="/people-team-2.jpg" alt="Team Member" />
            </div>
            <div className="Approach1-people-card">
              <img src="/people-team-3.jpg" alt="Team Member" />
            </div>
            <div className="Approach1-people-card">
              <img src="/people-team-4.jpg" alt="Team Member" />
            </div>
          </div> */}
        </div>
      </section>

      {/* What We Look For - Checklist Style */}
      <section className="Approach1-look-for">
        <div className="Approach1-container-width">
          <div className="Approach1-look-for-grid">
            <div className="Approach1-look-for-content">
              <h2 className="Approach1-look-for-title">What We Look For</h2>
              <p className="Approach1-look-for-intro">We look for those who:</p>
              <div className="Approach1-look-for-list">
                <div className="Approach1-look-for-item">
                  <span className="Approach1-check">✓</span>
                  <p>Take ownership of outcomes</p>
                </div>
                <div className="Approach1-look-for-item">
                  <span className="Approach1-check">✓</span>
                  <p>Lead with truth not ego</p>
                </div>
                <div className="Approach1-look-for-item">
                  <span className="Approach1-check">✓</span>
                  <p>Are as committed to the mission as they are to each other</p>
                </div>
                <div className="Approach1-look-for-item">
                  <span className="Approach1-check">✓</span>
                  <p>See work as a platform for legacy not just income</p>
                </div>
              </div>
              <p className="Approach1-look-for-conclusion">
                Whether you've built businesses or overcome life's toughest battles. If you value clarity, conviction
                and contribution, you belong here.
              </p>
            </div>
            <div className="Approach1-look-for-visual">
              <div className="Approach1-look-for-card">
                <h3>More Than a Team</h3>
                <p>A Standard</p>
                <div className="Approach1-look-for-description">
                  <p>
                    MAPSIGMA CAPITAL isn't powered by hierarchy. It's powered by merit and mutual respect. We grow
                    leaders by mentoring them, not managing them.
                  </p>
                  <p>
                    We build a culture where speaking up is expected, feedback is welcomed and improvement is
                    non-negotiable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Statement - Full Width */}
      <section className="Approach1-final">
        <div className="Approach1-final-overlay"></div>
        <div className="Approach1-container-width">
          <div className="Approach1-final-content">
            <h2 className="Approach1-final-title">Guided by Purpose</h2>
            <p className="Approach1-final-text">
              Our people are here because they believe in something bigger than themselves.
            </p>
            <p className="Approach1-final-text">
              We are here to build wealth with wisdom and to serve generations with discipline, empathy and vision.
            </p>
            <p className="Approach1-final-text">Because when people rise, so does everything they touch.</p>
            <p className="Approach1-final-conclusion">
              At MAPSIGMA CAPITAL our people aren't just part of the firm
              <br />
              <strong>They are the firm.</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
