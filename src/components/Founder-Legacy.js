import { useState, useEffect, useRef } from "react"
import "../components_css/Founder-Legacy.css"
import ZerodhaLogo from "./../images/Founder/zerodah.png"
import SesolaLogo from "./../images/Founder/Sesola.png"
import ISTLLogo from "./../images/Founder/istlabs-logo.png"

export default function FounderLegacySection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const innovations = [
        {
            logo: ZerodhaLogo,
            title: "Financial Education",
            company: "Zerodha",
            description: "Championing financial literacy and democratizing access to markets across India"
        },
        {
            logo: ISTLLogo,
            title: "Smart Infrastructure",
            company: "ISTL",
            description: "Pioneering digital infrastructure and smart meter technology for India's power sector"
        },
        {
            logo: SesolaLogo,
            title: "Green Energy",
            company: "Sesola",
            description: "Accelerating the transition to clean, sustainable solar energy solutions"
        }
    ]

    const nextGenPillars = [
        {
            number: "01",
            title: "Deep Macro Intelligence",
            description: "Understanding global patterns, economic shifts, and systemic interconnections that drive long-term value creation"
        },
        {
            number: "02",
            title: "Tech-Enabled Precision",
            description: "Leveraging AI, data analytics, and advanced tools to make informed, precise investment decisions at scale"
        },
        {
            number: "03",
            title: "Uncompromising Human Values",
            description: "Maintaining integrity, purpose, and ethical principles at the core of every strategic decision"
        }
    ]

    return (
        <section
            className={`founder-legacy-section ${isVisible ? 'founder-legacy-visible' : ''}`}
            ref={sectionRef}
        >
            <div className="founder-legacy-container">
                {/* Header */}
                <div className="founder-legacy-header">
                    <div className="founder-legacy-badge">Strategic Vision</div>
                    <h2 className="founder-legacy-title">
                        Strategic Innovations and <span className="founder-legacy-accent">Legacy in the Making</span>
                    </h2>
                    <p className="founder-legacy-subtitle">
                        Austin's principled thinking has led to early and bold moves — from championing financial education
                        in India through Zerodha to investing in smart infrastructure (ISTL) and green energy (Sesola)
                        long before they were headlines.
                    </p>
                </div>

                {/* Innovations Timeline */}
                <div className="founder-legacy-innovation-cards">
                    {innovations.map((innovation, index) => (
                        <div
                            key={index}
                            className="founder-legacy-innovation-card"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="founder-legacy-card-icon">
                                <img
                                    src={innovation.logo}
                                    alt={innovation.company}
                                    className="founder-legacy-logo"
                                />
                            </div>
                            <div className="founder-legacy-card-badge">{innovation.company}</div>
                            <h4 className="founder-legacy-card-title">{innovation.title}</h4>
                            <p className="founder-legacy-card-description">{innovation.description}</p>
                            <div className="founder-legacy-card-line"></div>
                        </div>
                    ))}
                </div>


                {/* Next Generation Vision */}
                <div className="founder-legacy-vision">
                    <div className="founder-legacy-vision-content">
                        <h3 className="founder-legacy-vision-title">The Next Generation of Investing</h3>
                        <p className="founder-legacy-vision-intro">
                            He believes the next generation of investing will belong to those who combine:
                        </p>

                        <div className="founder-legacy-pillars">
                            {nextGenPillars.map((pillar, index) => (
                                <div
                                    key={index}
                                    className="founder-legacy-pillar"
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <div className="founder-legacy-pillar-number">{pillar.number}</div>
                                    <div className="founder-legacy-pillar-content">
                                        <h4 className="founder-legacy-pillar-title">{pillar.title}</h4>
                                        <p className="founder-legacy-pillar-description">{pillar.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="founder-legacy-vision-image">
                        <div className="founder-legacy-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop"
                                alt="Future of Investing"
                                className="founder-legacy-image"
                            />
                            <div className="founder-legacy-image-gradient"></div>
                        </div>
                    </div>
                </div>

                {/* Mission Statement */}
                <div className="founder-legacy-mission">
                    <div className="founder-legacy-mission-content">
                        <svg className="founder-legacy-mission-icon" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path d="M24 4L28.944 18.112L44 20.944L34 30.112L36.888 46.888L24 38.944L11.112 46.888L14 30.112L4 20.944L19.056 18.112L24 4Z" fill="#004225" />
                        </svg>
                        <h3 className="founder-legacy-mission-title">Built for the Long Term</h3>
                        <p className="founder-legacy-mission-text">
                            MAPSIGMA is designed not just to survive shifts in the market but to lead them by building
                            a system that evolves, learns and delivers clarity under chaos.
                        </p>
                        <div className="founder-legacy-mission-footer">
                            <div className="founder-legacy-mission-line"></div>
                            <p className="founder-legacy-mission-tagline">
                                The goal is not to be the biggest. The goal is to be the most trusted, principled and future ready.
                            </p>
                        </div>
                    </div>

                    <div className="founder-legacy-stats">
                        <div className="founder-legacy-stat">
                            <div className="founder-legacy-stat-value">Trust</div>
                            <div className="founder-legacy-stat-label">Over Scale</div>
                        </div>
                        <div className="founder-legacy-stat">
                            <div className="founder-legacy-stat-value">Principles</div>
                            <div className="founder-legacy-stat-label">Over Profit</div>
                        </div>
                        <div className="founder-legacy-stat">
                            <div className="founder-legacy-stat-value">Future</div>
                            <div className="founder-legacy-stat-label">Over Present</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}