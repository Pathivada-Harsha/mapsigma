import "../pages_css/Insights.css"
import { NavLink } from "react-router-dom"
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

export default function InsightsPage() {
    const featuredInsight = {
        category: "Market Analysis",
        title: "Navigating Volatility: Strategic Portfolio Positioning for 2025",
        excerpt: "An in-depth analysis of market dynamics, economic indicators, and strategic opportunities in an evolving global landscape.",
        author: "MAPSIGMA Research Team",
        date: "January 15, 2025",
        readTime: "12 min read",
        image: Article1
    }

    const latestInsights = [
        {
            category: "Economic Outlook",
            title: "Central Bank Policy Shifts and Investment Implications",
            excerpt: "Analyzing the coordinated monetary policy changes across major economies and their impact on asset allocation strategies.",
            date: "January 10, 2025",
            readTime: "8 min read",
            image: Article2
        },
        {
            category: "Technology Trends",
            title: "AI Revolution in Financial Markets: Opportunities and Risks",
            excerpt: "Exploring how artificial intelligence is transforming investment management and creating new market dynamics.",
            date: "January 8, 2025",
            readTime: "10 min read",
            image: Article3
        },
        {
            category: "ESG Investing",
            title: "Sustainable Finance: Beyond Compliance to Value Creation",
            excerpt: "How environmental, social, and governance factors are reshaping investment strategies and generating alpha.",
            date: "January 5, 2025",
            readTime: "7 min read",
            image: Article4
        },
        {
            category: "Global Markets",
            title: "Emerging Markets: The Next Growth Frontier",
            excerpt: "Identifying opportunities in developing economies positioned for long-term structural growth.",
            date: "January 3, 2025",
            readTime: "9 min read",
            image: Article5
        },
        {
            category: "Risk Management",
            title: "Portfolio Stress Testing in Uncertain Times",
            excerpt: "Advanced techniques for assessing portfolio resilience across multiple risk scenarios.",
            date: "December 28, 2024",
            readTime: "11 min read",
            image: Article6
        },
        {
            category: "Alternative Assets",
            title: "Private Markets: Access and Opportunity",
            excerpt: "Understanding the role of private equity and credit in modern portfolio construction.",
            date: "December 25, 2024",
            readTime: "10 min read",
            image: Article7
        }
    ]

    const categories = [
        { name: "Market Analysis", count: 24, icon: "📊", color: "#3B82F6" },
        { name: "Economic Outlook", count: 18, icon: "🌍", color: "#10B981" },
        { name: "Technology", count: 15, icon: "💡", color: "#F59E0B" },
        { name: "ESG & Sustainability", count: 12, icon: "🌱", color: "#22C55E" },
        { name: "Risk Management", count: 20, icon: "🛡️", color: "#EF4444" },
        { name: "Portfolio Strategy", count: 16, icon: "📈", color: "#8B5CF6" }
    ]

    const thoughtLeadership = [
        {
            title: "Austin Prakesh on Building Generational Wealth",
            type: "Founder's Perspective",
            description: "Insights on family values, legacy building, and long-term investment philosophy that guides MAPSIGMA CAPITAL.",
            image: Article9,
            author: "Austin Prakesh",
            Link: "/investment-philosophy"
        },
        {
            title: "Principles-Driven Investing in Uncertain Times",
            type: "Investment Philosophy",
            description: "How clarity, discipline, and truth-seeking guide investment decisions in volatile market environments.",
            image: Article8,
            author: "Research Team",
            Link: "/investment-philosophy"
        }
    ]

    const webinars = [
        {
            title: "Q1 2025 Market Outlook & Strategy Session",
            date: "February 5, 2025",
            time: "2:00 PM EST",
            speaker: "MAPSIGMA Strategy Team",
            image: Article10
        },
        {
            title: "AI in Portfolio Management: Real Applications",
            date: "January 28, 2025",
            time: "3:00 PM EST",
            speaker: "Technology & Research",
            image: Article11
        }
    ]

    return (
        <div className="insights-page">
            {/* Hero Section with Background Image */}
            <section
                className="insights-hero"

            >
                <div className="insights-hero-inner">
                    <div className="breadcrumb">Home / Insights</div>
                    <h1 className="insights-hero-title">Insights & Research</h1>
                    <p className="insights-hero-subtitle">
                        Data-driven insights, strategic research, and thought leadership from MAPSIGMA CAPITAL.
                        Empowering informed decisions through clarity, analysis, and expertise.
                    </p>
                </div>
            </section>

            {/* Featured Insight - Magazine Style */}
            <section className="featured-section">
                <div className="featured-container">
                    <div className="section-label">Featured Analysis</div>
                    <div className="featured-card">
                        <div className="featured-image-wrapper">
                            <img src={featuredInsight.image} alt={featuredInsight.title} />
                            <div className="featured-overlay"></div>
                            <div className="featured-content-overlay">
                                <div className="featured-category">{featuredInsight.category}</div>
                                <h2 className="featured-title">{featuredInsight.title}</h2>
                                <p className="featured-excerpt">{featuredInsight.excerpt}</p>
                                <div className="featured-meta">
                                    <span className="meta-item">{featuredInsight.author}</span>
                                    <span className="meta-divider">•</span>
                                    <span className="meta-item">{featuredInsight.date}</span>
                                    <span className="meta-divider">•</span>
                                    <span className="meta-item">{featuredInsight.readTime}</span>
                                </div>
                                <a href="#" className="featured-cta">Read Full Analysis →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Insights - Masonry Grid Style */}
            <section className="latest-insights">
                <div className="latest-container">
                    <div className="section-header">
                        <div>
                            <h2 className="section-title">Latest Insights</h2>
                            <p className="section-subtitle">Stay informed with our most recent analysis and research</p>
                        </div>
                        <a href="#" className="view-all-btn">View All Insights</a>
                    </div>
                    <div className="insights-masonry">
                        {latestInsights.map((insight, idx) => (
                            <article key={idx} className={`insight-card ${idx === 0 ? 'insight-card-large' : ''}`}>
                                <div className="insight-image-wrapper">
                                    <img src={insight.image} alt={insight.title} />
                                    <div className="insight-overlay"></div>
                                    <div className="insight-category-tag">{insight.category}</div>
                                </div>
                                <div className="insight-content">
                                    <h3 className="insight-title">{insight.title}</h3>
                                    <p className="insight-excerpt">{insight.excerpt}</p>
                                    <div className="insight-footer">
                                        <div className="insight-meta">
                                            <span>{insight.date}</span>
                                            <span className="meta-divider">•</span>
                                            <span>{insight.readTime}</span>
                                        </div>
                                        <a href="#" className="insight-link">Read More →</a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories - Visual Cards */}
            <section className="categories-section">
                <div className="categories-container">
                    <h2 className="section-title">Explore by Topic</h2>
                    <p className="section-subtitle">Browse our research across different investment themes and market sectors</p>
                    <div className="categories-grid">
                        {categories.map((cat, idx) => (
                            <a key={idx} href="#" className="category-card" style={{ borderTopColor: cat.color }}>
                                <div className="category-icon-wrapper" style={{ background: `${cat.color}15` }}>
                                    <span className="category-icon" style={{ color: cat.color }}>{cat.icon}</span>
                                </div>
                                <div className="category-info">
                                    <div className="category-name">{cat.name}</div>
                                    <div className="category-count">{cat.count} articles</div>
                                </div>
                                <div className="category-arrow">→</div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Thought Leadership - Image-Rich Cards */}
            <section className="thought-leadership">
                <div className="thought-container">
                    <div className="thought-header">
                        <h2 className="section-title">Thought Leadership</h2>
                        <p className="section-subtitle">
                            Perspectives from our leadership on investment philosophy, market trends, and building lasting value.
                        </p>
                    </div>
                    <div className="thought-grid">
                        {thoughtLeadership.map((item, idx) => (
                            <div key={idx} className="thought-card">
                                <div className="thought-image-wrapper">
                                    <img src={item.image} alt={item.title} />
                                    <div className="thought-overlay"></div>
                                </div>
                                <div className="thought-content">
                                    <div className="thought-type">{item.type}</div>
                                    <h3 className="thought-title">{item.title}</h3>
                                    <p className="thought-description">{item.description}</p>
                                    <div className="thought-footer">
                                        <span className="thought-author">By {item.author}</span>
                                        <NavLink to={item.Link} className="thought-link">
                                            Read More →
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Webinars & Events - Card with Images */}
            <section className="webinars-section">
                <div className="webinars-container">
                    <div className="webinars-header">
                        <h2 className="section-title">Upcoming Webinars & Events</h2>
                        <p className="section-subtitle">Join our experts for live discussions on market trends and investment strategies</p>
                    </div>
                    <div className="webinars-grid">
                        {webinars.map((webinar, idx) => (
                            <div key={idx} className="webinar-card">
                                <div className="webinar-image-wrapper">
                                    <img src={webinar.image} alt={webinar.title} />
                                    <div className="webinar-overlay"></div>
                                    <div className="webinar-date-badge">
                                        <div className="badge-month">{webinar.date.split(' ')[0]}</div>
                                        <div className="badge-day">{webinar.date.split(' ')[1].replace(',', '')}</div>
                                    </div>
                                </div>
                                <div className="webinar-content">
                                    <h3 className="webinar-title">{webinar.title}</h3>
                                    <div className="webinar-details">
                                        <div className="webinar-detail-item">
                                            <span className="detail-icon">🕐</span>
                                            <span>{webinar.time}</span>
                                        </div>
                                        <div className="webinar-detail-item">
                                            <span className="detail-icon">👤</span>
                                            <span>{webinar.speaker}</span>
                                        </div>
                                    </div>
                                    <button className="webinar-btn">Register Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Subscription with Background */}
            <section
                className="newsletter-section"
                style={{ backgroundImage: "url(/images/newsletter-bg.jpg)" }}
            >
                <div className="newsletter-overlay"></div>
                <div className="newsletter-container">
                    <div className="newsletter-content">
                        <h2 className="newsletter-title">Stay Informed</h2>
                        <p className="newsletter-subtitle">
                            Receive our latest insights, market analysis, and research reports directly in your inbox.
                        </p>
                        <form className="newsletter-form">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="newsletter-input"
                            />
                            <button type="submit" className="newsletter-btn">Subscribe</button>
                        </form>
                        <p className="newsletter-privacy">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </section>

            <style jsx>{`
       
      `}</style>
        </div>
    )
}