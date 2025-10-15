import { useState, useEffect, useRef } from "react"
import { NavLink } from "react-router-dom";
import "../pages_css/Principles.css"
import PrinciplesHero from "../components/Principle-Hero"
import principle1 from "../images/principles/principle1.png"
import principle2 from "../images/principles/Principle10.png"
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
import PrincipleLegacy1 from "../images/principles/PrincipleLegacy2.png"
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
            {/* <section className="pr-hero">
        <div className="pr-hero-bg-overlay"></div>
        <div className="pr-hero-content">
          <h1 className="pr-hero-title">Principles at MAPSIGMA CAPITAL</h1>
          <p className="pr-hero-subtitle">
            How Austin Prakesh's Life Philosophy Became the Operating DNA of a Modern Investment Firm
          </p>
        </div>
      </section> */}
            <PrinciplesHero />

            {/* Foundation Section */}
            <section className="pr-foundation">
                <div className="pr-foundation-content">
                    <div
                        className={`pr-foundation-image pr-animate-left ${isVisible('foundation-image') ? 'pr-visible' : ''}`}
                        data-section="foundation-image"
                    >
                        <img
                            src={principle2}
                            alt="MAPSIGMA CAPITAL Foundation"
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/600x800/004225/FFFFFF?text=Foundation"
                            }}
                        />
                    </div>
                    <div
                        className={`pr-foundation-text-content pr-animate-right ${isVisible('foundation-text') ? 'pr-visible' : ''}`}
                        data-section="foundation-text"
                    >
                        <div className="pr-foundation-label">OUR Foundation</div>
                        <h2 className="pr-foundation-title">
                            Built on principles tested in real life, forged through adversity
                        </h2>
                        <p className="pr-foundation-intro">
                            MAPSIGMA CAPITAL was not built on trends, timing or luck. It was built on principles tested in real life,
                            forged through adversity and sharpened through years of discipline, clarity and mindset.
                        </p>
                        <p className="pr-foundation-intro">
                            At the heart of MAPSIGMA CAPITAL lies a timeless belief: <strong>"When you deeply understand how the world works, you can build what lasts."</strong>
                        </p>
                        <p className="pr-foundation-intro">
                            That belief shapes everything from how we invest to how we lead, from how we treat our clients to how we
                            build culture within our firm. But more importantly, it begins at home with a mindset that puts family
                            first and legacy at the center of every decision.
                        </p>
                    </div>
                </div>
            </section>

            {/* Photo Gallery Section */}
            {/* <section className="pr-photo-gallery">
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
      </section> */}

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
                    <div
                        className={`pr-animate ${isVisible('why-header') ? 'pr-visible' : ''}`}
                        data-section="why-header"
                    >
                        <div className="pr-why-label">OUR FOUNDATION</div>
                        <h2 className="pr-why-title">Why Principles Matter</h2>
                        <div className="pr-why-highlight">Driven by Clarity</div>
                    </div>

                    <div className="pr-why-principles-grid">
                        <div
                            className={`pr-why-principle-card pr-animate ${isVisible('why-principle-1') ? 'pr-visible' : ''}`}
                            data-section="why-principle-1"
                            style={{ transitionDelay: '0.1s' }}
                        >
                            <div className="pr-why-principle-icon">
                                🔊
                            </div>
                            {/* <div className="pr-why-principle-icon">
                                <img src={clarityIcon} alt="Clarity icon" />
                            </div> */}
                            <div className="pr-why-principle-text">
                                Because in a world full of noise,
                                <strong>clarity is power</strong>
                            </div>
                        </div>

                        <div
                            className={`pr-why-principle-card pr-animate ${isVisible('why-principle-2') ? 'pr-visible' : ''}`}
                            data-section="why-principle-2"
                            style={{ transitionDelay: '0.2s' }}
                        >
                            <div className="pr-why-principle-icon">
                                🎯
                            </div>
                            <div className="pr-why-principle-text">
                                Because when others guess,
                                <strong>we calculate</strong>
                            </div>
                        </div>

                        <div
                            className={`pr-why-principle-card pr-animate ${isVisible('why-principle-3') ? 'pr-visible' : ''}`}
                            data-section="why-principle-3"
                            style={{ transitionDelay: '0.3s' }}
                        >
                            <div className="pr-why-principle-icon">
                                ⚓
                            </div>
                            <div className="pr-why-principle-text">
                                Because when the ground shifts,
                                <strong>principles keep us steady</strong>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`pr-why-statement pr-animate ${isVisible('why-statement') ? 'pr-visible' : ''}`}
                        data-section="why-statement"
                    >
                        <p>
                            At MAPSIGMA CAPITAL, principles aren't abstract ideas. They are the compass that guides our decisions,
                            the foundation of our risk management and the heartbeat of our culture.
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
            <section className="pr-legacy-final-combined">
                <div className="pr-legacy-final-wrapper">
                    {/* Top Cards Section */}
                    <div className="pr-legacy-cards-section">
                        <h2
                            className={`pr-legacy-main-title pr-animate ${isVisible('legacy-main-title') ? 'pr-visible' : ''}`}
                            data-section="legacy-main-title"
                        >
                            A Legacy Built on Purpose
                        </h2>
                        <p
                            className={`pr-legacy-main-subtitle pr-animate ${isVisible('legacy-subtitle') ? 'pr-visible' : ''}`}
                            data-section="legacy-subtitle"
                        >
                            Austin’s personal journey from humble beginnings to global investor, mentor and builder has shaped MAPSIGMA CAPITAL into more than an investment firm. It’s a principled institution with a soul.
                        </p>
                        <div className="pr-legacy-cards-grid">
                            <div
                                className={`pr-legacy-value-card pr-animate-scale ${isVisible('legacy-card-1') ? 'pr-visible' : ''}`}
                                data-section="legacy-card-1"
                                style={{ transitionDelay: '0.1s' }}
                            >
                                <div className="pr-legacy-card-icon">🎯</div>
                                <h3 className="pr-legacy-card-title">Truth over Comfort</h3>
                                <p className="pr-legacy-card-subtitle">We value honesty and transparency in all our decisions</p>
                            </div>
                            <div
                                className={`pr-legacy-value-card pr-animate-scale ${isVisible('legacy-card-2') ? 'pr-visible' : ''}`}
                                data-section="legacy-card-2"
                                style={{ transitionDelay: '0.2s' }}
                            >
                                <div className="pr-legacy-card-icon">⭐</div>
                                <h3 className="pr-legacy-card-title">Excellence over Ego</h3>
                                <p className="pr-legacy-card-subtitle">Results matter more than recognition</p>
                            </div>
                            <div
                                className={`pr-legacy-value-card pr-animate-scale ${isVisible('legacy-card-3') ? 'pr-visible' : ''}`}
                                data-section="legacy-card-3"
                                style={{ transitionDelay: '0.3s' }}
                            >
                                <div className="pr-legacy-card-icon">🏛️</div>
                                <h3 className="pr-legacy-card-title">Legacy over Noise</h3>
                                <p className="pr-legacy-card-subtitle">Building what lasts, not what's trending</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Image + Content Section */}
                    <div className="pr-legacy-final-container">
                        <div
                            className={`pr-legacy-final-image pr-animate-left ${isVisible('legacy-final-image') ? 'pr-visible' : ''}`}
                            data-section="legacy-final-image"
                        >
                            <img
                                src={PrincipleLegacy1}
                                alt="MAPSIGMA CAPITAL Investment Philosophy"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/500x600/1a1a2e/FFFFFF?text=Investment+Philosophy"
                                }}
                            />
                        </div>
                        <div
                            className={`pr-legacy-final-content pr-animate-right ${isVisible('legacy-final-content') ? 'pr-visible' : ''}`}
                            data-section="legacy-final-content"
                        >
                            <h2 className="pr-legacy-final-title">
                                We don't just invest for returns
                            </h2>
                            <div className="pr-legacy-final-features">
                                <div className="pr-legacy-final-feature">
                                    <div className="pr-legacy-final-check"></div>
                                    <div className="pr-legacy-final-feature-text">
                                        <strong>We invest with reason, with conviction and with responsibility</strong>
                                    </div>
                                </div>
                                <div className="pr-legacy-final-feature">
                                    <div className="pr-legacy-final-check"></div>
                                    <div className="pr-legacy-final-feature-text">
                                        Because when <strong>principles lead, performance follows</strong>
                                    </div>
                                </div>
                                <div className="pr-legacy-final-feature">
                                    <div className="pr-legacy-final-check"></div>
                                    <div className="pr-legacy-final-feature-text">
                                        Because when <strong>family comes first, the future stands stronger</strong>
                                    </div>
                                </div>
                                <div className="pr-legacy-final-feature">
                                    <div className="pr-legacy-final-check"></div>
                                    <div className="pr-legacy-final-feature-text">
                                        Because with the <strong>right mindset, anything is possible</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="pr-legacy-final-cta">
                                <NavLink to="/contact" className="pr-legacy-final-button">
                                    Get Started
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}