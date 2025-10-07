import { useState } from "react"
import "../pages_css/NewsLetter.css"

export default function NewsletterPage() {
  const [email, setEmail] = useState("")
  const [selectedTopics, setSelectedTopics] = useState([])
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [selectedIssue, setSelectedIssue] = useState(null)

  const topics = [
    { id: "market-insights", label: "Market Insights", icon: "📊" },
    { id: "investment-strategies", label: "Investment Strategies", icon: "💡" },
    { id: "company-news", label: "Company News", icon: "📰" },
    { id: "leadership", label: "Leadership & Culture", icon: "🎯" },
    { id: "sustainability", label: "Sustainable Investing", icon: "🌱" },
    { id: "tech-innovation", label: "Tech & Innovation", icon: "🚀" }
  ]

  const pastIssues = [
    {
      title: "Q4 2024 Market Review",
      date: "January 15, 2025",
      description: "Deep dive into market trends and strategic opportunities for the new year",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      papers: [
        { title: "Executive Summary", pages: "2 pages" },
        { title: "Market Analysis Report", pages: "15 pages" },
        { title: "Investment Outlook 2025", pages: "8 pages" },
        { title: "Risk Assessment", pages: "5 pages" }
      ]
    },
    {
      title: "Sustainable Investment Report",
      date: "December 20, 2024",
      description: "How ESG factors are reshaping portfolio strategies in 2025",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
      papers: [
        { title: "ESG Framework Overview", pages: "3 pages" },
        { title: "Sustainability Metrics", pages: "12 pages" },
        { title: "Green Investment Strategies", pages: "10 pages" }
      ]
    },
    {
      title: "Tech Sector Outlook",
      date: "November 30, 2024",
      description: "AI and emerging technologies driving next-gen investment opportunities",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
      papers: [
        { title: "AI Investment Landscape", pages: "6 pages" },
        { title: "Tech Sector Analysis", pages: "14 pages" },
        { title: "Innovation Index Report", pages: "7 pages" },
        { title: "Future Trends Forecast", pages: "9 pages" }
      ]
    }
  ]

  const toggleTopic = (topicId) => {
    setSelectedTopics(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    )
  }

  const handleSubmit = () => {
    if (email) {
      setFormSubmitted(true)
      setTimeout(() => setFormSubmitted(false), 3000)
    }
  }

  const openIssueModal = (issue) => {
    setSelectedIssue(issue)
  }

  const closeIssueModal = () => {
    setSelectedIssue(null)
  }

  return (
    <div className="newsletter-page">
      {/* Hero Section */}
      <section className="newsletter-hero">
        <div className="newsletter-hero-bg"></div>
        <div className="newsletter-hero-container">
          <div className="newsletter-hero-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 3h12v10H2V3z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M2 3l6 5 6-5" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
            <span>Stay Informed</span>
          </div>
          <h1 className="newsletter-hero-title">
            MAPSIGMA <span className="newsletter-highlight">Insights</span>
          </h1>
          <p className="newsletter-hero-subtitle">
            Get exclusive market analysis, investment strategies, and company updates delivered 
            straight to your inbox. Join thousands of investors who trust MAPSIGMA for clarity.
          </p>
          <div className="newsletter-hero-stats">
            <div className="newsletter-hero-stat">
              <div className="newsletter-stat-number">15K+</div>
              <div className="newsletter-stat-label">Subscribers</div>
            </div>
            <div className="newsletter-hero-stat">
              <div className="newsletter-stat-number">Weekly</div>
              <div className="newsletter-stat-label">Delivery</div>
            </div>
            <div className="newsletter-hero-stat">
              <div className="newsletter-stat-number">Premium</div>
              <div className="newsletter-stat-label">Content</div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Form Section */}
      <section className="newsletter-subscribe">
        <div className="newsletter-subscribe-container">
          <div className="newsletter-subscribe-content">
            <h2 className="newsletter-section-title">Subscribe Now</h2>
            <p className="newsletter-section-subtitle">
              Choose the topics that matter most to you and get personalized insights
            </p>

            <div className="newsletter-form">
              <div className="newsletter-form-group">
                <label className="newsletter-label">Email Address</label>
                <div className="newsletter-input-wrapper">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@company.com"
                    className="newsletter-input"
                  />
                  <svg className="newsletter-input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 4h14v12H3V4z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M3 4l7 6 7-6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
              </div>

              <div className="newsletter-form-group">
                <label className="newsletter-label">Select Your Interests</label>
                <div className="newsletter-topics">
                  {topics.map(topic => (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => toggleTopic(topic.id)}
                      className={`newsletter-topic ${selectedTopics.includes(topic.id) ? 'newsletter-topic-active' : ''}`}
                    >
                      <span className="newsletter-topic-icon">{topic.icon}</span>
                      <span className="newsletter-topic-label">{topic.label}</span>
                      {selectedTopics.includes(topic.id) && (
                        <svg className="newsletter-topic-check" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={handleSubmit} className="newsletter-submit-btn">
                {formSubmitted ? (
                  <>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe Now
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </>
                )}
              </button>

              <p className="newsletter-privacy">
                🔒 Your privacy matters. We never share your information and you can unsubscribe anytime.
              </p>
            </div>
          </div>

          <div className="newsletter-subscribe-visual">
            <div className="newsletter-preview-card">
              <div className="newsletter-preview-header">
                <div className="newsletter-preview-logo">MAPSIGMA</div>
                <div className="newsletter-preview-date">Every Monday</div>
              </div>
              <div className="newsletter-preview-content">
                <h3>This Week's Insights</h3>
                <ul>
                  <li>Market Analysis & Trends</li>
                  <li>Investment Opportunities</li>
                  <li>Expert Commentary</li>
                  <li>Exclusive Research</li>
                </ul>
              </div>
              <div className="newsletter-preview-footer">
                <div className="newsletter-preview-badge">Premium Content</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Issues Section */}
      <section className="newsletter-archive">
        <div className="newsletter-archive-container">
          <div className="newsletter-archive-header">
            <h2 className="newsletter-section-title">Past Issues</h2>
            <p className="newsletter-section-subtitle">
              Explore our latest insights and market analysis
            </p>
          </div>

          <div className="newsletter-archive-grid">
            {pastIssues.map((issue, index) => (
              <div key={index} className="newsletter-archive-card">
                <div className="newsletter-archive-image">
                  <img src={issue.image} alt={issue.title} />
                  <div className="newsletter-archive-overlay">
                    <button className="newsletter-archive-btn">Read Now</button>
                  </div>
                </div>
                <div className="newsletter-archive-content">
                  <div className="newsletter-archive-date">{issue.date}</div>
                  <h3 className="newsletter-archive-title">{issue.title}</h3>
                  <p className="newsletter-archive-description">{issue.description}</p>
                  <button 
                    onClick={() => openIssueModal(issue)}
                    className="newsletter-learn-more-btn"
                  >
                    <span>Learn More</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Papers */}
      {selectedIssue && (
        <div className="newsletter-modal-overlay" onClick={closeIssueModal}>
          <div className="newsletter-modal" onClick={(e) => e.stopPropagation()}>
            <button className="newsletter-modal-close" onClick={closeIssueModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            <div className="newsletter-modal-header">
              <div className="newsletter-modal-image">
                <img src={selectedIssue.image} alt={selectedIssue.title} />
              </div>
              <div className="newsletter-modal-info">
                <div className="newsletter-modal-date">{selectedIssue.date}</div>
                <h2 className="newsletter-modal-title">{selectedIssue.title}</h2>
                <p className="newsletter-modal-description">{selectedIssue.description}</p>
              </div>
            </div>

            <div className="newsletter-modal-body">
              <h3 className="newsletter-modal-subtitle">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4h12v12H4V4z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M7 8h6M7 11h6M7 14h4" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Available Documents
              </h3>
              <div className="newsletter-papers-grid">
                {selectedIssue.papers.map((paper, idx) => (
                  <div key={idx} className="newsletter-paper-card">
                    <div className="newsletter-paper-icon">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M6 4h14l6 6v16H6V4z" fill="#004225" opacity="0.1"/>
                        <path d="M6 4h14l6 6v16H6V4z" stroke="#004225" strokeWidth="2" fill="none"/>
                        <path d="M20 4v6h6" stroke="#004225" strokeWidth="2" fill="none"/>
                        <path d="M10 16h12M10 20h12M10 24h8" stroke="#004225" strokeWidth="1.5"/>
                      </svg>
                    </div>
                    <div className="newsletter-paper-info">
                      <h4 className="newsletter-paper-title">{paper.title}</h4>
                      <p className="newsletter-paper-pages">{paper.pages}</p>
                    </div>
                    <button className="newsletter-paper-download">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 3v10M10 13l-4-4M10 13l4-4M4 17h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              <button className="newsletter-modal-download-all">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 3v10M10 13l-4-4M10 13l4-4M4 17h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Download All Documents
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Benefits Section */}
      <section className="newsletter-benefits">
        <div className="newsletter-benefits-container">
          <h2 className="newsletter-section-title">Why Subscribe?</h2>
          <div className="newsletter-benefits-grid">
            <div className="newsletter-benefit-card">
              <div className="newsletter-benefit-icon">📈</div>
              <h3>Expert Analysis</h3>
              <p>In-depth market insights from our team of investment professionals</p>
            </div>
            <div className="newsletter-benefit-card">
              <div className="newsletter-benefit-icon">⚡</div>
              <h3>Timely Updates</h3>
              <p>Stay ahead with breaking news and real-time market movements</p>
            </div>
            <div className="newsletter-benefit-card">
              <div className="newsletter-benefit-icon">🎯</div>
              <h3>Actionable Insights</h3>
              <p>Strategic recommendations you can implement immediately</p>
            </div>
            <div className="newsletter-benefit-card">
              <div className="newsletter-benefit-icon">🔐</div>
              <h3>Exclusive Content</h3>
              <p>Access research and analysis not available anywhere else</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="newsletter-cta">
        <div className="newsletter-cta-container">
          <div className="newsletter-cta-content">
            <h2>Don't Miss Out on Market Opportunities</h2>
            <p>Join 15,000+ investors who trust MAPSIGMA for their investment insights</p>
            <button className="newsletter-cta-btn">Subscribe Today</button>
          </div>
        </div>
      </section>
    </div>
  )
}