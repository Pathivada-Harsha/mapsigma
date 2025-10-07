import { useState, useEffect } from "react"
import "../components_css/Life-Hero1.css"
import { NavLink } from "react-router-dom";


export default function LifeHero1() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    const values = [
        {
            icon: "💎",
            title: "Excellence",
            description: "Commitment to the highest standards"
        },
        {
            icon: "🌱",
            title: "Growth",
            description: "Continuous learning and development"
        },
        {
            icon: "🤝",
            title: "Collaboration",
            description: "Building together as one team"
        },
        {
            icon: "🎯",
            title: "Impact",
            description: "Creating meaningful change"
        }
    ]

    return (
        <section className={`life-hero1-section ${isLoaded ? 'life-hero1-loaded' : ''}`}>
            {/* Background Pattern */}
            <div className="life-hero1-background">
                <div className="life-hero1-pattern"></div>
            </div>

            {/* Decorative Shapes */}
            <div className="life-hero1-shape life-hero1-shape-1"></div>
            <div className="life-hero1-shape life-hero1-shape-2"></div>
            <div className="life-hero1-shape life-hero1-shape-3"></div>

            <div className="life-hero1-container">
                {/* Left Content */}
                <div className="life-hero1-content">
                    <div className="life-hero1-badge">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 1L10.472 5.528L15.528 6.472L11.764 10.236L12.944 15.528L8 12.944L3.056 15.528L4.236 10.236L0.472 6.472L5.528 5.528L8 1Z" fill="currentColor" />
                        </svg>
                        <span>Life at MAPSIGMA</span>
                    </div>

                    <h1 className="life-hero1-title">
                        Where <span className="life-hero1-highlight">Purpose</span> Meets 
                        <span className="life-hero1-highlight"> Excellence</span>
                    </h1>

                    <p className="life-hero1-description">
                        Join a team that's redefining investment excellence. At MAPSIGMA, we're building
                        more than portfolios—we're building legacies, shaping futures, and creating
                        lasting impact through principled investing.
                    </p>

                    {/* Core Values */}
                    <div className="life-hero1-values">
                        {values.map((value, index) => (
                            <div key={index} className="life-hero1-value-card">
                                <div className="life-hero1-value-icon">{value.icon}</div>
                                <div className="life-hero1-value-content">
                                    <h3 className="life-hero1-value-title">{value.title}</h3>
                                    <p className="life-hero1-value-text">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}

                    <div className="life-hero1-actions">
                        <NavLink to="/careers" className="life-hero1-btn life-hero1-btn-primary">
                            Explore Careers
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M7.5 15L12.5 10L7.5 5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </NavLink>

                        <NavLink to="/culture" className="life-hero1-btn life-hero1-btn-secondary">
                            Our Culture
                        </NavLink>
                    </div>

                </div>

                {/* Right Image Grid */}
                <div className="life-hero1-image-section">
                    <div className="life-hero1-image-grid">
                        <div className="life-hero1-image-card life-hero1-card-large">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                                alt="Team collaboration"
                                className="life-hero1-image"
                            />
                            <div className="life-hero1-image-overlay">
                                <span className="life-hero1-image-tag">Collaboration</span>
                            </div>
                        </div>
                        <div className="life-hero1-image-card life-hero1-card-small">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80"
                                alt="Innovation workspace"
                                className="life-hero1-image"
                            />
                            <div className="life-hero1-image-overlay">
                                <span className="life-hero1-image-tag">Innovation</span>
                            </div>
                        </div>
                        <div className="life-hero1-image-card life-hero1-card-medium">
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=700&q=80"
                                alt="Team success"
                                className="life-hero1-image"
                            />
                            <div className="life-hero1-image-overlay">
                                <span className="life-hero1-image-tag">Excellence</span>
                            </div>
                        </div>
                        <div className="life-hero1-image-card life-hero1-card-accent">
                            <img
                                src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=700&q=80"
                                alt="Team culture"
                                className="life-hero1-image"
                            />
                            <div className="life-hero1-image-overlay">
                                <span className="life-hero1-image-tag">Culture</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            {/* <div className="life-hero1-scroll">
        <div className="life-hero1-scroll-line"></div>
        <span>Scroll to explore</span>
      </div> */}
        </section>
    )
}