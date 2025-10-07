"use client"

import "../pages_css/Technology.css"
import { useState, useEffect, useRef } from "react"
import TechnologyPillars from "../components/Technology-pillars.js"
import ClientExperienceSection from "../components/Technology-client.js"
import Hero from "../components/Technology-Hero.js"
import Tech1 from "./../images/Technology/Tech-Home1.jpg"
export default function TechnologyPage() {
    const [visibleSections, setVisibleSections] = useState(new Set())
    const [activeFeature, setActiveFeature] = useState(0)
    const observerRef = useRef(null)

    const techPillars = [
        {
            icon: "📡",
            title: "Real Time Data Infrastructure",
            description: "We ingest and process millions of data points daily across global markets enabling our analysts and strategists to make decisions based on live market intelligence not yesterday's news."
        },
        {
            icon: "🤖",
            title: "AI Enhanced Investment Models",
            description: "Our machine learning algorithms are used to uncover non-obvious patterns, simulate macroeconomic scenarios and stress test portfolios across multiple time horizons."
        },
        {
            icon: "📊",
            title: "Portfolio Management System",
            description: "A centralized platform that tracks, evaluates and optimizes every investment position across asset classes. Built with automation audit trails and risk overlays to maintain discipline in execution."
        },
        {
            icon: "⚡",
            title: "Risk Command Center",
            description: "A real time risk dashboard that monitors exposure volatility and correlation across all portfolios. Our risk system doesn't just flag issues, it recommends solutions."
        },
        {
            icon: "🔒",
            title: "Cybersecurity and Data Governance",
            description: "Security is not negotiable. We operate with enterprise grade encryption layered firewalls penetration testing and full compliance with international data protection standards."
        }
    ]

    const clientFeatures = [
        "Live portfolio updates",
        "Strategic reports and investment insights",
        "Secure document access and messaging",
        "Market outlooks curated by our strategy team"
    ]

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

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % clientFeatures.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [clientFeatures.length])

    const isVisible = (section) => visibleSections.has(section)

    return (
        <div className="tech-container">
            {/* Hero Section */}
            {/* <section className="tech-hero">
                <div className="tech-hero-overlay"></div>
                <div className="tech-hero-content">
                    <div
                        className={`tech-hero-label tech-animate ${isVisible('hero') ? 'tech-visible' : ''}`}
                        data-section="hero"
                    >
                        TECHNOLOGY
                    </div>
                    <h1
                        className={`tech-hero-title tech-animate ${isVisible('hero') ? 'tech-visible' : ''}`}
                        data-section="hero"
                    >
                        Where Intelligence Meets Precision
                    </h1>
                    <p
                        className={`tech-hero-text tech-animate ${isVisible('hero') ? 'tech-visible' : ''}`}
                        data-section="hero"
                    >
                        At MAPSIGMA CAPITAL, technology is not an afterthought. It is a strategic foundation. We have designed and
                        engineered a robust, intelligent and adaptive technology ecosystem that empowers everything we do from
                        investment research to risk management to client reporting.
                    </p>
                    <div
                        className={`tech-hero-goal tech-animate-scale ${isVisible('hero') ? 'tech-visible' : ''}`}
                        data-section="hero"
                    >
                        Our goal is simple: <strong>to give our clients clarity, control and confidence</strong> in an ever-evolving financial world.
                    </div>
                </div>
                <div className="tech-hero-grid-bg"></div>
            </section> */}
            <Hero />
            {/* Platform Overview */}
            {/* <section className="tech-platform">
                <div className="tech-platform-container">
                    <div
                        className={`tech-platform-content tech-animate-left ${isVisible('platform') ? 'tech-visible' : ''}`}
                        data-section="platform"
                    >
                        <h2 className="tech-section-title">An Integrated Platform Built for Performance</h2>
                        <p className="tech-section-text">
                            Our proprietary platform seamlessly connects data, people and process into one powerful decision-making
                            engine. This system allows our investment and operations teams to move faster, see deeper and act with precision.
                        </p>
                        <div className="tech-platform-stats">
                            <div className="tech-stat-box">
                                <div className="tech-stat-number">1M+</div>
                                <div className="tech-stat-label">Data Points Daily</div>
                            </div>
                            <div className="tech-stat-box">
                                <div className="tech-stat-number">24/7</div>
                                <div className="tech-stat-label">Real-Time Monitoring</div>
                            </div>
                            <div className="tech-stat-box">
                                <div className="tech-stat-number">99.9%</div>
                                <div className="tech-stat-label">System Uptime</div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`tech-platform-visual tech-animate-right ${isVisible('platform') ? 'tech-visible' : ''}`}
                        data-section="platform"
                    >
                        <div className="tech-visual-card">
                            <div className="tech-visual-icon">💻</div>
                            <h3>Unified Platform</h3>
                            <p>One system connecting all aspects of investment management</p>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="tech-platform">
                <div className="tech-platform-container">
                    <div
                        className={`tech-platform-content tech-animate-left ${isVisible('platform') ? 'tech-visible' : ''}`}
                        data-section="platform"
                    >
                        <div className="tech-platform-label">OUR PLATFORM</div>
                        <h2 className="tech-section-title">An Integrated Platform Built for Performance</h2>
                        <p className="tech-section-text">
                            Our proprietary platform seamlessly connects data, people and process into one powerful decision-making
                            engine. This system allows our investment and operations teams to move faster, see deeper and act with precision.
                        </p>

                        <button className="tech-platform-btn">
                            Get Expert Advice
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`tech-platform-visual tech-animate-right ${isVisible('platform') ? 'tech-visible' : ''}`}
                        data-section="platform"
                    >
                        <img
                            src={Tech1}
                            alt="MAPSIGMA CAPITAL Technology Platform"
                            className="tech-platform-image"
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/800x600/004225/FFFFFF?text=Technology+Platform"
                            }}
                        />
                    </div>
                </div>
            </section>
            {/* Tech Pillars */}
            {/* <section className="tech-pillars">
        <div className="tech-pillars-container">
          <h2 
            className={`tech-section-title-center tech-animate ${isVisible('pillars-title') ? 'tech-visible' : ''}`}
            data-section="pillars-title"
          >
            Key Pillars of Our Technology Structure
          </h2>
          <p className="tech-pillars-subtitle">
            Game-changing solutions powering intelligent investment decisions
          </p>
          <div className="tech-pillars-grid-new">
            {techPillars.map((pillar, index) => (
              <div
                key={index}
                className={`tech-pillar-card-new tech-animate-scale ${isVisible(`pillar-${index}`) ? 'tech-visible' : ''}`}
                data-section={`pillar-${index}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="tech-pillar-image">
                  <img 
                    src={`/images/technology/pillar-${index + 1}.jpg`} 
                    alt={pillar.title}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x500/004225/FFFFFF?text=${encodeURIComponent(pillar.title)}`
                    }}
                  />
                  <div className="tech-pillar-overlay"></div>
                </div>
                <div className="tech-pillar-content-new">
                  <div className="tech-pillar-icon-new">{pillar.icon}</div>
                  <h3 className="tech-pillar-title-new">{pillar.title}</h3>
                  <p className="tech-pillar-description-new">{pillar.description}</p>
                  <button className="tech-pillar-btn">
                    Learn More
                    <svg className="tech-pillar-arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
            <TechnologyPillars />
            {/* Client Portal */}
            {/* <section className="tech-client">
                <div className="tech-client-bg"></div>
                <div className="tech-client-container">
                    <div
                        className={`tech-client-content tech-animate-left ${isVisible('client') ? 'tech-visible' : ''}`}
                        data-section="client"
                    >
                        <h2 className="tech-section-title">Client Experience Redefined</h2>
                        <p className="tech-section-text">
                            Every MAPSIGMA client has access to a custom built <strong>Client Command Portal</strong>, a secure and
                            intuitive dashboard that provides:
                        </p>
                        <div className="tech-features-list">
                            {clientFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`tech-feature-item ${activeFeature === index ? 'tech-feature-active' : ''}`}
                                >
                                    <div className="tech-feature-check">✓</div>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <p className="tech-client-tagline">
                            Clients can interact with their investments in real time, monitor key metrics and communicate directly
                            with our team from anywhere in the world.
                        </p>
                    </div>
                    <div
                        className={`tech-client-mockup tech-animate-right ${isVisible('client') ? 'tech-visible' : ''}`}
                        data-section="client"
                    >
                        <div className="tech-mockup-frame">
                            <div className="tech-mockup-header">
                                <div className="tech-mockup-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="tech-mockup-title">Client Command Portal</div>
                            </div>
                            <div className="tech-mockup-body">
                                <div className="tech-mockup-sidebar">
                                    <div className="tech-mockup-menu-item tech-mockup-active">Dashboard</div>
                                    <div className="tech-mockup-menu-item">Portfolio</div>
                                    <div className="tech-mockup-menu-item">Reports</div>
                                    <div className="tech-mockup-menu-item">Messages</div>
                                </div>
                                <div className="tech-mockup-content">
                                    <div className="tech-mockup-card">
                                        <div className="tech-mockup-card-title">Portfolio Overview</div>
                                        <div className="tech-mockup-chart"></div>
                                    </div>
                                    <div className="tech-mockup-grid">
                                        <div className="tech-mockup-metric">
                                            <div className="tech-mockup-metric-value">$2.4M</div>
                                            <div className="tech-mockup-metric-label">Total Value</div>
                                        </div>
                                        <div className="tech-mockup-metric">
                                            <div className="tech-mockup-metric-value">+12.3%</div>
                                            <div className="tech-mockup-metric-label">YTD Return</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            < ClientExperienceSection />
            {/* Future Focus */}
            <section className="tech-future">
                <div className="tech-future-container">
                    <div
                        className={`tech-future-content tech-animate ${isVisible('future') ? 'tech-visible' : ''}`}
                        data-section="future"
                    >
                        <h2 className="tech-section-title-center">Built to Adapt and Evolve</h2>
                        <p className="tech-future-text">
                            What we build today is designed to evolve tomorrow. Our in-house tech team continuously develops tools
                            that respond to shifts in markets, regulations and client needs. We also integrate seamlessly with third
                            party APIs and platforms to maintain interoperability and innovation.
                        </p>
                        <div className="tech-future-statement">
                            <span className="tech-future-statement-company">
                                MAPSIGMA CAPITAL is not just tech enabled.
                            </span>
                            <span className="tech-future-statement-highlight">
                                We are tech driven, insight led and future focused.
                            </span>
                        </div>
                    </div>
                    {/* <div className="tech-future-grid">
                        <div
                            className={`tech-future-card tech-animate-scale ${isVisible('future-1') ? 'tech-visible' : ''}`}
                            data-section="future-1"
                        >
                            <div className="tech-future-icon">🔄</div>
                            <h3>Continuous Innovation</h3>
                            <p>Regular updates and feature releases</p>
                        </div>
                        <div
                            className={`tech-future-card tech-animate-scale ${isVisible('future-2') ? 'tech-visible' : ''}`}
                            data-section="future-2"
                            style={{ transitionDelay: '0.1s' }}
                        >
                            <div className="tech-future-icon">🔗</div>
                            <h3>Seamless Integration</h3>
                            <p>Compatible with third-party platforms</p>
                        </div>
                        <div
                            className={`tech-future-card tech-animate-scale ${isVisible('future-3') ? 'tech-visible' : ''}`}
                            data-section="future-3"
                            style={{ transitionDelay: '0.2s' }}
                        >
                            <div className="tech-future-icon">🚀</div>
                            <h3>Future-Ready</h3>
                            <p>Scalable architecture for tomorrow's needs</p>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    )
}