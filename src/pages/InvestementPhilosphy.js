import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../pages_css/InvestementPhilosphy.css";

// Import your actual images - replace these paths with your real images
// import heroBackground from "../images/investment/hero-bg.jpg";
// import ctaBackground from "../images/investment/cta-bg.jpg";
import frameworkImage from "../images/Research&insights/H-Article11.png";
import processImage from "../images/Research&insights/H-Article9.png";
// import riskManagementImage from "../images/investment/risk-management.png";

export default function InvestmentPhilosophy() {
    const [visibleSections, setVisibleSections] = useState(new Set());
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Prevent animations during route changes
                    if (document.body.dataset.routeChanging === "true") {
                        return;
                    }
                    
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => new Set(prev).add(entry.target.dataset.section));
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -100px 0px"
            }
        );

        const elements = document.querySelectorAll('[data-section]');
        elements.forEach((el) => observerRef.current.observe(el));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    const isVisible = (section) => visibleSections.has(section);

    return (
        <div className="Investment-Philosophy-Page-container">
            {/* Hero Section with Background Image */}
            <section className="Investment-Philosophy-Page-hero">
                <div className="Investment-Philosophy-Page-hero-overlay"></div>
                <div className="Investment-Philosophy-Page-hero-content">
                    <div 
                        className={`Investment-Philosophy-Page-hero-text Investment-Philosophy-Page-animate ${isVisible('hero-text') ? 'Investment-Philosophy-Page-visible' : ''}`}
                        data-section="hero-text"
                    >
                        <span className="Investment-Philosophy-Page-hero-label">Investment Philosophy</span>
                        <h1 className="Investment-Philosophy-Page-hero-title">
                            Principles-Driven Investing in Uncertain Times
                        </h1>
                        <p className="Investment-Philosophy-Page-hero-subtitle">
                            How clarity, discipline, and truth-seeking guide investment decisions in volatile market environments
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy Introduction */}
            <section className="Investment-Philosophy-Page-intro">
                <div className="Investment-Philosophy-Page-intro-content">
                    <div 
                        className={`Investment-Philosophy-Page-intro-text Investment-Philosophy-Page-animate ${isVisible('intro-text') ? 'Investment-Philosophy-Page-visible' : ''}`}
                        data-section="intro-text"
                    >
                        <h2 className="Investment-Philosophy-Page-section-title">
                            Built on Truth, Not Trends
                        </h2>
                        <p className="Investment-Philosophy-Page-intro-description">
                            At MAPSIGMA CAPITAL, our investment philosophy is rooted in timeless principles rather than fleeting market sentiment. We believe that sustainable returns come from understanding fundamental truths about markets, economies, and human behavior.
                        </p>
                        <p className="Investment-Philosophy-Page-intro-description">
                            Our approach combines rigorous analysis, disciplined execution, and unwavering commitment to our core principles, allowing us to navigate uncertainty with confidence and clarity.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Principles Grid */}
            <section className="Investment-Philosophy-Page-principles">
                <div className="Investment-Philosophy-Page-principles-header">
                    <h2 
                        className={`Investment-Philosophy-Page-section-title Investment-Philosophy-Page-animate ${isVisible('principles-title') ? 'Investment-Philosophy-Page-visible' : ''}`}
                        data-section="principles-title"
                    >
                        Our Core Investment Principles
                    </h2>
                    <p 
                        className={`Investment-Philosophy-Page-section-subtitle Investment-Philosophy-Page-animate ${isVisible('principles-subtitle') ? 'Investment-Philosophy-Page-visible' : ''}`}
                        data-section="principles-subtitle"
                    >
                        Five pillars that guide every investment decision we make
                    </p>
                </div>

                <div className="Investment-Philosophy-Page-principles-grid">
                    <div 
                        className={`Investment-Philosophy-Page-principle-card Investment-Philosophy-Page-animate-scale ${isVisible('principle-1') ? 'Investment-Philosophy-Page-visible' : ''}`}
                        data-section="principle-1"
                        style={{ transitionDelay: '0.1s' }}
                    >
                        <div className="Investment-Philosophy-Page-principle-number">01</div>
                        <h3 className="Investment-Philosophy-Page-principle-title">Long-Term Value Creation</h3>
                        <p className="Investment-Philosophy-Page-principle-description">
                            We focus on sustainable value creation over years and decades, not quarters. Patient capital deployed with conviction yields compounding returns.
                        </p>
                    </div>

                    <div 
                        className={`Investment-Philosophy-Page-principle-card Investment-Philosophy-Page-animate-scale ${isVisible('principle-2') ? 'Investment-Philosophy-Page-visible' : ''}`}
                        data-section="principle-2"
                        style={{ transitionDelay: '0.2s' }}
                    >
                        <div className="Investment-Philosophy-Page-principle-number">02</div>
                        <h3 className="Investment-Philosophy-Page-principle-title">Fundamental Analysis</h3>
                        <p className="Investment-Philosophy-Page-principle-description">
                            Deep research into business models, competitive advantages, management quality, and financial health forms the foundation of every investment decision.
                        </p>
                    </div>

                    <div 
                        className={`Investment-Philosophy-Page-principle-card Investment-Philosophy-Page-animate-scale ${isVisible('principle-3') ? 'Investment-Philosophy-Page-visible' : ''}`}
                        data-section="principle-3"
                        style={{ transitionDelay: '0.3s' }}
                    >
                        <div className="Investment-Philosophy-Page-principle-number">03</div>
                        <h3 className="Investment-Philosophy-Page-principle-title">Risk Management First</h3>
                        <p className="Investment-Philosophy-Page-principle-description">
                            Preservation of capital is paramount. We employ rigorous risk frameworks, scenario analysis, and position sizing to protect against downside.
                        </p>
                    </div>

                    <div 
                        className={`Investment-Philosophy-Page-principle-card Investment-Philosophy-Page-animate-scale ${isVisible('principle-4') ? 'Investment-Philosophy-Page-visible' : ''}`}
                        data-section="principle-4"
                        style={{ transitionDelay: '0.4s' }}
                    >
                        <div className="Investment-Philosophy-Page-principle-number">04</div>
                        <h3 className="Investment-Philosophy-Page-principle-title">Contrarian Thinking</h3>
                        <p className="Investment-Philosophy-Page-principle-description">
                            The best opportunities often emerge when conventional wisdom is wrong. We seek asymmetric returns by thinking independently and acting with conviction.
                        </p>
                    </div>

                    <div 
                        className={`Investment-Philosophy-Page-principle-card Investment-Philosophy-Page-animate-scale ${isVisible('principle-5') ? 'Investment-Philosophy-Page-visible' : ''}`}
                        data-section="principle-5"
                        style={{ transitionDelay: '0.5s' }}
                    >
                        <div className="Investment-Philosophy-Page-principle-number">05</div>
                        <h3 className="Investment-Philosophy-Page-principle-title">Continuous Learning</h3>
                        <p className="Investment-Philosophy-Page-principle-description">
                            Markets evolve, and so must we. We maintain intellectual humility, constantly updating our frameworks based on new data and experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* Investment Framework */}
            <section className="Investment-Philosophy-Page-framework">
                <div className="Investment-Philosophy-Page-framework-content">
                    <div 
                        className={`Investment-Philosophy-Page-framework-visual Investment-Philosophy-Page-animate-left ${isVisible('framework-visual') ? 'Investment-Philosophy-Page-visible' : ''}`}
                        data-section="framework-visual"
                    >
                        <img src={frameworkImage} alt="Investment Framework" />
                    </div>
                    <div 
                        className={`Investment-Philosophy-Page-framework-text Investment-Philosophy-Page-animate-right ${isVisible('framework-text') ? 'Investment-Philosophy-Page-visible' : ''}`}
                        data-section="framework-text"
                    >
                        <span className="Investment-Philosophy-Page-section-label">Our Framework</span>
                        <h2 className="Investment-Philosophy-Page-section-title">
                            A Systematic Approach to Value Discovery
                        </h2>
                        <p className="Investment-Philosophy-Page-description">
                            Our investment framework combines quantitative rigor with qualitative insight. We analyze thousands of data points across financial metrics, industry dynamics, macroeconomic trends, and management capabilities.
                        </p>
                        <div className="Investment-Philosophy-Page-framework-steps">
                            <div className="Investment-Philosophy-Page-step">
                                <div className="Investment-Philosophy-Page-step-icon">🔍</div>
                                <div className="Investment-Philosophy-Page-step-content">
                                    <h4>Discovery & Screening</h4>
                                    <p>Identifying opportunities through proprietary screens and industry analysis</p>
                                </div>
                            </div>
                            <div className="Investment-Philosophy-Page-step">
                                <div className="Investment-Philosophy-Page-step-icon">📊</div>
                                <div className="Investment-Philosophy-Page-step-content">
                                    <h4>Deep Due Diligence</h4>
                                    <p>Comprehensive financial modeling and competitive analysis</p>
                                </div>
                            </div>
                            <div className="Investment-Philosophy-Page-step">
                                <div className="Investment-Philosophy-Page-step-icon">⚖️</div>
                                <div className="Investment-Philosophy-Page-step-content">
                                    <h4>Valuation & Risk Assessment</h4>
                                    <p>Multi-scenario modeling with margin of safety principles</p>
                                </div>
                            </div>
                            <div className="Investment-Philosophy-Page-step">
                                <div className="Investment-Philosophy-Page-step-icon">🎯</div>
                                <div className="Investment-Philosophy-Page-step-content">
                                    <h4>Position Construction</h4>
                                    <p>Disciplined sizing based on conviction and risk parameters</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Investment Process */}
            <section className="Investment-Philosophy-Page-process">
                <div className="Investment-Philosophy-Page-process-content">
                    <div 
                        className={`Investment-Philosophy-Page-process-text Investment-Philosophy-Page-animate-left ${isVisible('process-text') ? 'Investment-Philosophy-Page-visible' : ''}`}
                        data-section="process-text"
                    >
                        <span className="Investment-Philosophy-Page-section-label">Our Process</span>
                        <h2 className="Investment-Philosophy-Page-section-title">
                            Disciplined Execution, Exceptional Results
                        </h2>
                        <p className="Investment-Philosophy-Page-description">
                            Consistency in process leads to consistency in outcomes. Our investment process has been refined over decades, incorporating lessons from both successes and failures.
                        </p>
                        <div className="Investment-Philosophy-Page-process-highlights">
                            <div className="Investment-Philosophy-Page-highlight-item">
                                <span className="Investment-Philosophy-Page-highlight-label">Research Hours</span>
                                <span className="Investment-Philosophy-Page-highlight-value">10,000+ annually</span>
                            </div>
                            <div className="Investment-Philosophy-Page-highlight-item">
                                <span className="Investment-Philosophy-Page-highlight-label">Data Sources</span>
                                <span className="Investment-Philosophy-Page-highlight-value">500+ monitored</span>
                            </div>
                            <div className="Investment-Philosophy-Page-highlight-item">
                                <span className="Investment-Philosophy-Page-highlight-label">Investment Horizon</span>
                                <span className="Investment-Philosophy-Page-highlight-value">3-7 years</span>
                            </div>
                        </div>
                    </div>
                    <div 
                        className={`Investment-Philosophy-Page-process-visual Investment-Philosophy-Page-animate-right ${isVisible('process-visual') ? 'Investment-Philosophy-Page-visible' : ''}`}
                        data-section="process-visual"
                    >
                        <img src={processImage} alt="Investment Process" />
                    </div>
                </div>
            </section>

            {/* Risk Management */}
            <section className="Investment-Philosophy-Page-risk">
                <div className="Investment-Philosophy-Page-risk-content">
                    <div 
                        className={`Investment-Philosophy-Page-risk-header Investment-Philosophy-Page-animate ${isVisible('risk-header') ? 'Investment-Philosophy-Page-visible' : ''}`}
                        data-section="risk-header"
                    >
                        <span className="Investment-Philosophy-Page-section-label">Risk Management</span>
                        <h2 className="Investment-Philosophy-Page-section-title">
                            Protecting Capital in All Market Conditions
                        </h2>
                        <p className="Investment-Philosophy-Page-section-subtitle">
                            Risk management isn't just about avoiding losses—it's about understanding the relationship between risk and return, and positioning portfolios to weather any storm.
                        </p>
                    </div>

                    <div className="Investment-Philosophy-Page-risk-grid">
                        <div 
                            className={`Investment-Philosophy-Page-risk-card Investment-Philosophy-Page-animate ${isVisible('risk-1') ? 'Investment-Philosophy-Page-visible' : ''}`}
                            data-section="risk-1"
                            style={{ transitionDelay: '0.1s' }}
                        >
                            <div className="Investment-Philosophy-Page-risk-icon">🛡️</div>
                            <h3 className="Investment-Philosophy-Page-risk-title">Diversification Strategy</h3>
                            <p className="Investment-Philosophy-Page-risk-description">
                                Balanced exposure across sectors, geographies, and asset classes to reduce concentration risk while maintaining conviction in our best ideas.
                            </p>
                        </div>

                        <div 
                            className={`Investment-Philosophy-Page-risk-card Investment-Philosophy-Page-animate ${isVisible('risk-2') ? 'Investment-Philosophy-Page-visible' : ''}`}
                            data-section="risk-2"
                            style={{ transitionDelay: '0.2s' }}
                        >
                            <div className="Investment-Philosophy-Page-risk-icon">📉</div>
                            <h3 className="Investment-Philosophy-Page-risk-title">Downside Protection</h3>
                            <p className="Investment-Philosophy-Page-risk-description">
                                Systematic stress testing, scenario analysis, and tail risk hedging to protect against severe market dislocations and black swan events.
                            </p>
                        </div>

                        <div 
                            className={`Investment-Philosophy-Page-risk-card Investment-Philosophy-Page-animate ${isVisible('risk-3') ? 'Investment-Philosophy-Page-visible' : ''}`}
                            data-section="risk-3"
                            style={{ transitionDelay: '0.3s' }}
                        >
                            <div className="Investment-Philosophy-Page-risk-icon">💰</div>
                            <h3 className="Investment-Philosophy-Page-risk-title">Position Sizing</h3>
                            <p className="Investment-Philosophy-Page-risk-description">
                                Dynamic position sizing based on conviction level, liquidity profile, and correlation with existing holdings to optimize risk-adjusted returns.
                            </p>
                        </div>

                        <div 
                            className={`Investment-Philosophy-Page-risk-card Investment-Philosophy-Page-animate ${isVisible('risk-4') ? 'Investment-Philosophy-Page-visible' : ''}`}
                            data-section="risk-4"
                            style={{ transitionDelay: '0.4s' }}
                        >
                            <div className="Investment-Philosophy-Page-risk-icon">🔄</div>
                            <h3 className="Investment-Philosophy-Page-risk-title">Continuous Monitoring</h3>
                            <p className="Investment-Philosophy-Page-risk-description">
                                Real-time portfolio monitoring, periodic rebalancing, and ongoing thesis validation to ensure alignment with our investment philosophy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Edge */}
            <section className="Investment-Philosophy-Page-edge">
                <div className="Investment-Philosophy-Page-edge-content">
                    <div 
                        className={`Investment-Philosophy-Page-edge-header Investment-Philosophy-Page-animate ${isVisible('edge-header') ? 'Investment-Philosophy-Page-visible' : ''}`}
                        data-section="edge-header"
                    >
                        <h2 className="Investment-Philosophy-Page-section-title">What Sets Us Apart</h2>
                    </div>

                    <div className="Investment-Philosophy-Page-edge-grid">
                        <div 
                            className={`Investment-Philosophy-Page-edge-item Investment-Philosophy-Page-animate-left ${isVisible('edge-1') ? 'Investment-Philosophy-Page-visible' : ''}`}
                            data-section="edge-1"
                        >
                            <h3 className="Investment-Philosophy-Page-edge-title">Independent Thinking</h3>
                            <p className="Investment-Philosophy-Page-edge-description">
                                We don't follow the herd. Our research-driven approach allows us to identify opportunities others miss and avoid pitfalls others fall into.
                            </p>
                        </div>

                        <div 
                            className={`Investment-Philosophy-Page-edge-item Investment-Philosophy-Page-animate-right ${isVisible('edge-2') ? 'Investment-Philosophy-Page-visible' : ''}`}
                            data-section="edge-2"
                        >
                            <h3 className="Investment-Philosophy-Page-edge-title">Global Perspective</h3>
                            <p className="Investment-Philosophy-Page-edge-description">
                                Drawing insights from markets worldwide, we identify cross-border trends and opportunities that local-focused investors often overlook.
                            </p>
                        </div>

                        <div 
                            className={`Investment-Philosophy-Page-edge-item Investment-Philosophy-Page-animate-left ${isVisible('edge-3') ? 'Investment-Philosophy-Page-visible' : ''}`}
                            data-section="edge-3"
                        >
                            <h3 className="Investment-Philosophy-Page-edge-title">Technology Integration</h3>
                            <p className="Investment-Philosophy-Page-edge-description">
                                Advanced analytics, machine learning models, and real-time data processing enhance our research without replacing human judgment.
                            </p>
                        </div>

                        <div 
                            className={`Investment-Philosophy-Page-edge-item Investment-Philosophy-Page-animate-right ${isVisible('edge-4') ? 'Investment-Philosophy-Page-visible' : ''}`}
                            data-section="edge-4"
                        >
                            <h3 className="Investment-Philosophy-Page-edge-title">Aligned Interests</h3>
                            <p className="Investment-Philosophy-Page-edge-description">
                                Our team invests alongside our clients. When you win, we win. This alignment ensures we're always acting in your best interest.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section with Background Image */}
            <section className="Investment-Philosophy-Page-cta">
                <div className="Investment-Philosophy-Page-cta-overlay"></div>
                <div className="Investment-Philosophy-Page-cta-content">
                    <div 
                        className={`Investment-Philosophy-Page-cta-text Investment-Philosophy-Page-animate ${isVisible('cta-content') ? 'Investment-Philosophy-Page-visible' : ''}`}
                        data-section="cta-content"
                    >
                        <h2 className="Investment-Philosophy-Page-cta-title">
                            Ready to Invest with Principles?
                        </h2>
                        <p className="Investment-Philosophy-Page-cta-description">
                            Partner with MAPSIGMA CAPITAL and experience investment management built on clarity, discipline, and unwavering commitment to your success.
                        </p>
                        <NavLink to="/contact" className="Investment-Philosophy-Page-cta-button">
                            Get Started Today
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
}