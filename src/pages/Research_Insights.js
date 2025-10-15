"use client"

import { useState, useEffect } from "react"
import "../pages_css/Research_insights.css"
import Map_Your_Move from '../components/Map_Your_Move'
import Hero from "../components/Ri-Hero.js"
import MapSigmaAboutSection from "../components/Ri-About.js"
import ArticlesSection from "../components/Articles-Section.js"
import VideoSection from "../components/Ri-Video-Section.js"
export default function ResearchInsights() {
  const [currentSlide, setCurrentSlide] = useState(0)
  // const [email, setEmail] = useState("")
  // const [name, setName] = useState("")
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const [showModel, setShowModel] = useState(false);

  const handleScroll = (e) => {
    const element = e.target;
    const isAtBottom = Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 5;
    setIsScrolledToBottom(isAtBottom);
  };

  useEffect(() => {
    const hasAgreed = sessionStorage.getItem("agreedToDisclaimer");
    if (!hasAgreed) {
      setShowModel(true);
    }
  }, []);
  const handleAgree = () => {
    sessionStorage.setItem("agreedToDisclaimer", "true");
    setShowModel(false);
  };

  const handleCancel = () => {
    setShowModel(false)
  };
  const articles = [
    {
      id: 1,
      title: "Market Analysis Q4 2024",
      excerpt: "Deep dive into market trends and investment opportunities for the fourth quarter.",
      date: "December 2024",
      category: "Market Analysis",
    },
    {
      id: 2,
      title: "ESG Investment Strategies",
      excerpt: "Sustainable investing approaches that deliver both impact and returns.",
      date: "November 2024",
      category: "ESG",
    },
    {
      id: 3,
      title: "Tech Sector Outlook",
      excerpt: "Technology sector analysis and emerging opportunities in AI and fintech.",
      date: "November 2024",
      category: "Technology",
    },
    {
      id: 4,
      title: "Global Economic Trends",
      excerpt: "Comprehensive analysis of global economic indicators and their implications.",
      date: "October 2024",
      category: "Economics",
    },
  ]

  const secondArticles = [
    {
      id: 5,
      title: "Alternative Investments Guide",
      excerpt: "Exploring private equity, real estate, and other alternative asset classes.",
      date: "October 2024",
      category: "Alternatives",
    },
    {
      id: 6,
      title: "Risk Management Strategies",
      excerpt: "Advanced portfolio protection techniques for volatile markets.",
      date: "September 2024",
      category: "Risk Management",
    },
    {
      id: 7,
      title: "Emerging Markets Focus",
      excerpt: "Investment opportunities in developing economies and frontier markets.",
      date: "September 2024",
      category: "Emerging Markets",
    },
    {
      id: 8,
      title: "Fixed Income Outlook",
      excerpt: "Bond market analysis and interest rate environment assessment.",
      date: "August 2024",
      category: "Fixed Income",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(articles.length / 2))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(articles.length / 2)) % Math.ceil(articles.length / 2))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("Newsletter signup:", { name, email })
    // Handle newsletter signup
  }

  return (
    <div className="ri-container">
      {/* Hero Section */}
      <Hero />
      <MapSigmaAboutSection />

      {/* Main Write Up */}
      {/* <section className="ri-main-writeup">
        <div className="ri-content-wrapper">
          <h2 className="ri-section-title">Driving Investment Excellence Through Deep Research</h2>
          <p className="ri-main-text">
            At MAPSIGMA CAPITAL, our research forms the foundation of every investment decision. Our team of seasoned
            analysts combines quantitative rigor with qualitative insights to uncover opportunities that others miss. We
            believe that superior research leads to superior returns, and our comprehensive approach ensures that our
            clients benefit from the most informed investment strategies in the market.
          </p>
        </div>
      </section> */}

      {/* Selected Insights Carousel */}
      {/* <section className="ri-insights-section">
        <div className="ri-content-wrapper">
          <h2 className="ri-section-title">Selected Insights from Our Research Library</h2>

          <div className="ri-carousel-container">
            <button className="ri-carousel-btn ri-carousel-prev" onClick={prevSlide}>
              &#8249;
            </button>

            <div className="ri-carousel">
              <div className="ri-carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {Array.from({ length: Math.ceil(articles.length / 2) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="ri-carousel-slide">
                    {articles.slice(slideIndex * 2, slideIndex * 2 + 2).map((article) => (
                      <div key={article.id} className="ri-article-card">
                        <div className="ri-article-category">{article.category}</div>
                        <h3 className="ri-article-title">{article.title}</h3>
                        <p className="ri-article-excerpt">{article.excerpt}</p>
                        <div className="ri-article-date">{article.date}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <button className="ri-carousel-btn ri-carousel-next" onClick={nextSlide}>
              &#8250;
            </button>
          </div>

          <div className="ri-learn-more">
            <button className="ri-learn-more-btn">LEARN MORE</button>
          </div>
        </div>
      </section> */}
      <ArticlesSection />
      {/* Second Main Write Up */}
      {/* <section className="ri-main-writeup ri-main-writeup-secondary">
        <div className="ri-content-wrapper">
          <h2 className="ri-section-title">Comprehensive Market Intelligence</h2>
          <p className="ri-main-text">
            Our research methodology combines traditional fundamental analysis with cutting-edge data science
            techniques. We monitor global markets 24/7, analyzing everything from macroeconomic indicators to
            company-specific metrics. This comprehensive approach allows us to identify trends early and position our
            portfolios for optimal performance across all market conditions.
          </p>
        </div>
      </section>

      <section className="ri-articles-grid">
        <div className="ri-content-wrapper">
          <div className="ri-grid">
            {secondArticles.map((article) => (
              <div key={article.id} className="ri-article-card">
                <div className="ri-article-category">{article.category}</div>
                <h3 className="ri-article-title">{article.title}</h3>
                <p className="ri-article-excerpt">{article.excerpt}</p>
                <div className="ri-article-date">{article.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <VideoSection />
      <Map_Your_Move />
      {/* Newsletter Signup */}
      {/* <section className="ri-newsletter">
        <div className="ri-content-wrapper">
          <h2 className="ri-newsletter-title">Map Your Move</h2>
          <p className="ri-newsletter-subtitle">Subscribe for insights and market analysis from MAPSIGMA CAPITAL</p>

          <form className="ri-newsletter-form" onSubmit={handleSubmit}>
            <div className="ri-form-group">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="ri-form-input"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="ri-form-input"
                required
              />
            </div>
            <button type="submit" className="ri-form-submit">
              NEXT
            </button>
          </form>
        </div>
      </section> */}


      {showModel && (<div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.8)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}>
        <div className="modal-dialog modal-dialog-centered modal-lg" style={{ maxWidth: '800px', margin: '1.75rem auto' }}>
          <div className="modal-content" style={{ backgroundColor: '#212529', color: '#fff', border: '1px solid #495057' }}>

            {/* Modal Header */}
            <div className="modal-header" style={{ borderBottom: '1px solid #495057', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h5 className="modal-title" style={{ margin: 0, fontSize: '1.25rem' }}>Disclaimer & Agreement</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={handleCancel}
                aria-label="Close"
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#fff',
                  opacity: 0.8,
                  cursor: 'pointer',
                  padding: '0',
                  width: '1em',
                  height: '1em'
                }}
              >
                ×
              </button>
            </div>

            {/* Modal Body */}
            <div
              className="modal-body"
              onScroll={handleScroll}
              style={{
                maxHeight: '60vh',
                overflowY: 'auto',
                color: '#d1d5db',
                padding: '1rem'
              }}
            >
              <div className="customTextAlignment" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                <p>
                  MAPSIGMA CAPITAL is a global investment management and research-driven firm.
                  MAPSIGMA CAPITAL provides investment advisory and portfolio management services
                  exclusively to a limited group of institutional and qualified clients.
                  This website serves as an informational resource for audiences other than investors —
                  including potential employees, partners, researchers, students, and industry professionals.
                  MAPSIGMA CAPITAL believes it is essential for such audiences to have access to accurate and
                  relevant information about the firm.
                  Under no circumstances should any content presented on this website be interpreted as
                  an offer to sell or a solicitation to purchase any securities, financial products, or investment interests.
                  This website does not contain the information required to evaluate or make any investment decisions.
                  Offering materials relating to entities managed by MAPSIGMA CAPITAL are not available to the general public.
                </p>

                <p>
                  To continue viewing this content, you must agree to the following terms,
                  in addition to and supplementing the MAPSIGMA CAPITAL Terms of Use and Privacy Policy:
                </p>

                <p style={{ fontWeight: '600', color: '#fff', marginTop: '1rem' }}>
                  I confirm to MAPSIGMA CAPITAL and agree that:
                </p>

                <ul style={{ listStyle: 'none', paddingLeft: '0', marginTop: '1rem' }}>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#60a5fa' }}>•</span>
                    I am entering this website solely to obtain general information regarding MAPSIGMA CAPITAL
                    and not for any investment or solicitation purposes.
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#60a5fa' }}>•</span>
                    I understand that investment opportunities managed by MAPSIGMA CAPITAL are not open to the general public.
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#60a5fa' }}>•</span>
                    I acknowledge that this website does not include sufficient details to evaluate any investment opportunity,
                    and that such materials are available only to qualified institutions and clients who meet specific criteria.
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#60a5fa' }}>•</span>
                    I understand that this website has not been reviewed, filed with, or approved by any regulatory or governmental authority,
                    and is intended solely to provide limited corporate information to interested members of the public
                    for purposes unrelated to investment solicitation.
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#60a5fa' }}>•</span>
                    I acknowledge that when MAPSIGMA CAPITAL shares third-party materials or external data,
                    the firm may not have independently verified the statements made therein,
                    and such materials may omit important information or context.
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#60a5fa' }}>•</span>
                    I understand that third-party interviews, articles, or videos featured by MAPSIGMA CAPITAL
                    may include conversational statements or historical commentary,
                    and may not reflect the firm’s current position or strategy.
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#60a5fa' }}>•</span>
                    I acknowledge that all content on this website constitutes the proprietary intellectual property
                    of MAPSIGMA CAPITAL or its licensors, and I agree not to copy, modify, redistribute,
                    republish, disclose, or use the content for any commercial purpose
                    without prior written consent from MAPSIGMA CAPITAL.
                  </li>
                </ul>

                <p style={{ marginTop: '1.5rem', color: '#fff', fontWeight: '500' }}>
                  By clicking "Agree," I certify that I have read, understood, and accepted
                  the above Disclaimer, Terms of Use, and Privacy Policy of MAPSIGMA CAPITAL.
                </p>
              </div>

            </div>

            {/* Scroll Indicator */}
            {!isScrolledToBottom && (
              <div style={{ padding: '0.5rem 1rem', textAlign: 'center', fontSize: '0.875rem', color: '#fbbf24' }}>
                Please scroll to the bottom to enable the Agree button
              </div>
            )}

            {/* Modal Footer */}
            <div className="modal-footer" style={{ borderTop: '1px solid #495057', padding: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCancel}
                style={{
                  padding: '0.5rem 1.5rem',
                  backgroundColor: '#6c757d',
                  border: 'none',
                  borderRadius: '4px',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAgree}
                disabled={!isScrolledToBottom}
                style={{
                  padding: '0.5rem 1.5rem',
                  backgroundColor: isScrolledToBottom ? '#0d6efd' : '#495057',
                  border: 'none',
                  borderRadius: '4px',
                  color: isScrolledToBottom ? 'white' : '#6c757d',
                  cursor: isScrolledToBottom ? 'pointer' : 'not-allowed'
                }}
              >
                Agree
              </button>
            </div>

          </div>
        </div>
      </div>)}
    </div>
  )
}
