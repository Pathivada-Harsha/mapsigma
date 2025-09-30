import { useState, useEffect, useRef } from "react"
import "../pages_css/Principles.css"
import principle1 from "../images/principles/principle1.png"
import Article1 from "../images/Research&insights/H-Article1.png"
import Article2 from "../images/Research&insights/H-Article2.png"
import Article3 from "../images/Research&insights/H-Article3.png"
import Article4 from "../images/Research&insights/H-Article4.png"
import Article5 from "../images/Research&insights/H-Article5.png"
import Article6 from "../images/Research&insights/H-Article6.png"
import Article7 from "../images/Research&insights/H-Article7.png"
import Article8 from "../images/Research&insights/H-Article8.png"
import Article9 from "../images/Research&insights/H-Article9.png"
import Article10 from "../images/Research&insights/H-Article10.png"
import Article11 from "../images/Research&insights/H-Article11.png"
import Article12 from "../images/Research&insights/H-Article12.png"
export default function PrinciplesContent() {
  const [visibleSections, setVisibleSections] = useState(new Set())
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.dataset.section))
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
      }
    )

    const elements = document.querySelectorAll('[data-section]')
    elements.forEach((el) => observerRef.current.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const isVisible = (section) => visibleSections.has(section)

  return (
    <div className="pr-container">
      {/* Hero Section */}
      <section className="pr-hero">
        <div className="pr-hero-bg-overlay"></div>
        <div className="pr-hero-content">
          <h1 className="pr-hero-title">Principles at MAPSIGMA CAPITAL</h1>
          <p className="pr-hero-subtitle">
            How Austin Prakesh's Life Philosophy Became the Operating DNA of a Modern Investment Firm
          </p>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="pr-foundation">
        <div className="pr-foundation-content">
          <div className="pr-foundation-text">
            <p 
              className={`pr-foundation-intro pr-animate ${isVisible('foundation-intro') ? 'pr-visible' : ''}`}
              data-section="foundation-intro"
            >
              MAPSIGMA CAPITAL was not built on trends, timing or luck. It was built on principles tested in real life,
              forged through adversity and sharpened through years of discipline, clarity and mindset.
            </p>
            <div 
              className={`pr-foundation-highlight pr-animate-scale ${isVisible('foundation-highlight') ? 'pr-visible' : ''}`}
              data-section="foundation-highlight"
            >
              <p className="pr-foundation-belief">
                At the heart of MAPSIGMA CAPITAL lies a timeless belief:{" "}
                <strong>When you deeply understand how the world works, you can build what lasts.</strong>
              </p>
            </div>
            <p 
              className={`pr-foundation-description pr-animate ${isVisible('foundation-desc') ? 'pr-visible' : ''}`}
              data-section="foundation-desc"
            >
              That belief shapes everything from how we invest to how we lead, from how we treat our clients to how we
              build culture within our firm. But more importantly, it begins at home with a mindset that puts family
              first and legacy at the center of every decision.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="pr-photo-gallery">
        <div className="pr-gallery-container">
          <h2 
            className={`pr-gallery-title pr-animate ${isVisible('gallery-title') ? 'pr-visible' : ''}`}
            data-section="gallery-title"
          >
            Our Journey in Pictures
          </h2>
          <div className="pr-gallery-grid">
            <div 
              className={`pr-gallery-item pr-gallery-large pr-animate-scale ${isVisible('gallery-1') ? 'pr-visible' : ''}`}
              data-section="gallery-1"
              style={{ transitionDelay: '0.1s' }}
            >
              <img src={Article1} alt="Team collaboration" />
              <div className="pr-gallery-caption">Building Together</div>
            </div>
            <div 
              className={`pr-gallery-item pr-animate-scale ${isVisible('gallery-2') ? 'pr-visible' : ''}`}
              data-section="gallery-2"
              style={{ transitionDelay: '0.2s' }}
            >
              <img src={Article2} alt="Partnership" />
              <div className="pr-gallery-caption">Trust & Partnership</div>
            </div>
            <div 
              className={`pr-gallery-item pr-animate-scale ${isVisible('gallery-3') ? 'pr-visible' : ''}`}
              data-section="gallery-3"
              style={{ transitionDelay: '0.3s' }}
            >
              <img src={Article3} alt="Analysis" />
              <div className="pr-gallery-caption">Deep Analysis</div>
            </div>
            <div 
              className={`pr-gallery-item pr-animate-scale ${isVisible('gallery-4') ? 'pr-visible' : ''}`}
              data-section="gallery-4"
              style={{ transitionDelay: '0.4s' }}
            >
              <img src={Article6} alt="Global reach" />
              <div className="pr-gallery-caption">Global Perspective</div>
            </div>
            <div 
              className={`pr-gallery-item pr-gallery-wide pr-animate-scale ${isVisible('gallery-5') ? 'pr-visible' : ''}`}
              data-section="gallery-5"
              style={{ transitionDelay: '0.5s' }}
            >
              <img src={Article5} alt="Strategy" />
              <div className="pr-gallery-caption">Strategic Vision</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Framework Section */}
      <section className="pr-framework">
        <div className="pr-framework-bg"></div>
        <div className="pr-framework-grid">
          <div 
            className={`pr-framework-content pr-animate-left ${isVisible('framework-content') ? 'pr-visible' : ''}`}
            data-section="framework-content"
          >
            <h2 className="pr-framework-title">A Principles Driven Investment Framework</h2>
            <p className="pr-framework-text">
              Austin Prakesh developed MAPSIGMA CAPITAL's investment philosophy by combining real world experience with
              relentless inquiry.
            </p>
            <div className="pr-framework-quotes">
              <div className="pr-quote">We don't chase headlines. We study history.</div>
              <div className="pr-quote">We don't react. We anticipate.</div>
            </div>
            <p className="pr-framework-description">
              By analyzing patterns across decades, across geographies and across economic cycles we've built a deep
              understanding of how capital flows, how markets behave and how policy shapes opportunity. This allows us
              to navigate complexity with confidence creating strategies that are resilient, not reactive.
            </p>
          </div>
          <div 
            className={`pr-framework-visual pr-animate-right ${isVisible('framework-visual') ? 'pr-visible' : ''}`}
            data-section="framework-visual"
          >
            <div className="pr-framework-image">
              <img 
                src={principle1}
                alt="Investment Framework - History, Analysis, Strategy"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/500x500/f8f9fa/004225?text=History+%E2%86%94+Analysis+%E2%86%94+Strategy"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Principles Matter Section */}
      <section className="pr-why-matters">
        <div className="pr-why-content">
          <h2 
            className={`pr-why-title pr-animate ${isVisible('why-title') ? 'pr-visible' : ''}`}
            data-section="why-title"
          >
            Why Principles Matter
          </h2>
          <div className="pr-why-grid">
            <div 
              className={`pr-why-card pr-animate ${isVisible('why-card-1') ? 'pr-visible' : ''}`}
              data-section="why-card-1"
              style={{ transitionDelay: '0.1s' }}
            >
              <div className="pr-why-icon">🎯</div>
              <p>
                Because in a world full of noise, <strong>clarity is power</strong>
              </p>
            </div>
            <div 
              className={`pr-why-card pr-animate ${isVisible('why-card-2') ? 'pr-visible' : ''}`}
              data-section="why-card-2"
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="pr-why-icon">📊</div>
              <p>
                Because when others guess, <strong>we calculate</strong>
              </p>
            </div>
            <div 
              className={`pr-why-card pr-animate ${isVisible('why-card-3') ? 'pr-visible' : ''}`}
              data-section="why-card-3"
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="pr-why-icon">⚖️</div>
              <p>
                Because when the ground shifts, <strong>principles keep us steady</strong>
              </p>
            </div>
          </div>
          <div 
            className={`pr-why-statement pr-animate-scale ${isVisible('why-statement') ? 'pr-visible' : ''}`}
            data-section="why-statement"
          >
            <p>
              At MAPSIGMA CAPITAL, principles aren't abstract ideas. They are the compass that guides our decisions, the
              foundation of our risk management and the heartbeat of our culture.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Showcase Section */}
      <section className="pr-photo-showcase">
        <div className="pr-showcase-container">
          <div 
            className={`pr-showcase-image pr-animate-left ${isVisible('showcase-image') ? 'pr-visible' : ''}`}
            data-section="showcase-image"
          >
            <img src={Article8} alt="Leadership" />
          </div>
          <div 
            className={`pr-showcase-content pr-animate-right ${isVisible('showcase-content') ? 'pr-visible' : ''}`}
            data-section="showcase-content"
          >
            <h2 className="pr-showcase-title">Leadership That Inspires</h2>
            <p className="pr-showcase-text">
              Our leadership team brings decades of combined experience in global markets, strategic investing, and
              principled decision-making. We believe that true leadership is not about commanding from the top, but
              about empowering from within.
            </p>
            <div className="pr-showcase-stats">
              <div className="pr-stat-item">
                <div className="pr-stat-number">25+</div>
                <div className="pr-stat-label">Years Experience</div>
              </div>
              <div className="pr-stat-item">
                <div className="pr-stat-number">$2B+</div>
                <div className="pr-stat-label">Assets Managed</div>
              </div>
              <div className="pr-stat-item">
                <div className="pr-stat-number">100%</div>
                <div className="pr-stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="pr-legacy">
        <div className="pr-legacy-content">
          <div 
            className={`pr-legacy-left pr-animate-left ${isVisible('legacy-left') ? 'pr-visible' : ''}`}
            data-section="legacy-left"
          >
            <h2 className="pr-legacy-title">A Legacy Built on Purpose</h2>
            <p className="pr-legacy-text">
              Austin's personal journey from humble beginnings to global investor, mentor and builder has shaped
              MAPSIGMA CAPITAL into more than an investment firm. It's a principled institution with a soul. One that
              values truth over comfort, excellence over ego and legacy over noise.
            </p>
          </div>
          <div 
            className={`pr-legacy-right pr-animate-right ${isVisible('legacy-right') ? 'pr-visible' : ''}`}
            data-section="legacy-right"
          >
            <div className="pr-legacy-values">
              <div className="pr-value-item" style={{ transitionDelay: '0.1s' }}>
                <span className="pr-value-label">Truth</span>
                <span className="pr-value-vs">over</span>
                <span className="pr-value-contrast">Comfort</span>
              </div>
              <div className="pr-value-item" style={{ transitionDelay: '0.2s' }}>
                <span className="pr-value-label">Excellence</span>
                <span className="pr-value-vs">over</span>
                <span className="pr-value-contrast">Ego</span>
              </div>
              <div className="pr-value-item" style={{ transitionDelay: '0.3s' }}>
                <span className="pr-value-label">Legacy</span>
                <span className="pr-value-vs">over</span>
                <span className="pr-value-contrast">Noise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Statement Section */}
      <section className="pr-final">
        <div className="pr-final-bg-overlay"></div>
        <div className="pr-final-content">
          <div className="pr-final-statement">
            <p 
              className={`pr-final-text pr-animate ${isVisible('final-text') ? 'pr-visible' : ''}`}
              data-section="final-text"
            >
              We don't just invest for returns.{" "}
              <strong>We invest with reason, with conviction and with responsibility.</strong>
            </p>
            <div className="pr-final-principles">
              <div 
                className={`pr-final-principle pr-animate ${isVisible('final-principle-1') ? 'pr-visible' : ''}`}
                data-section="final-principle-1"
                style={{ transitionDelay: '0.1s' }}
              >
                <strong>Because when principles lead, performance follows</strong>
              </div>
              <div 
                className={`pr-final-principle pr-animate ${isVisible('final-principle-2') ? 'pr-visible' : ''}`}
                data-section="final-principle-2"
                style={{ transitionDelay: '0.2s' }}
              >
                <strong>Because when family comes first, the future stands stronger</strong>
              </div>
              <div 
                className={`pr-final-principle pr-animate ${isVisible('final-principle-3') ? 'pr-visible' : ''}`}
                data-section="final-principle-3"
                style={{ transitionDelay: '0.3s' }}
              >
                <strong>Because with the right mindset, anything is possible</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}