"use client"

import { useState,useEffect } from "react"
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
  const [showModel,setShowModel]=useState(false);

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


     {showModel  && (<div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.8)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}>
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
                  Bridgewater Associates, LP is a global investment management firm. Bridgewater Associates, LP advises certain private investment funds and institutional clients, and is not available to provide investment advisory or similar services to most other investors. This website is a resource for audiences other than investors such as potential employees, researchers, students, counterparties and industry participants. Bridgewater Associates, LP believes it is useful for such persons to have an accurate source of relevant information. Under no circumstances should any information presented on this website be construed as an offer to sell, or solicitation of any offer to purchase, any securities or other investments. This website does not contain the information that an investor should consider or evaluate to make a potential investment. Offering materials relating to investments in entities managed by Bridgewater Associates, LP are not available to the general public.
                </p>

                <p>
                  To view this content, you must agree to the following terms, in addition to and supplementing the Bridgewater Terms of Use and Privacy Policy:
                </p>

                <p style={{ fontWeight: '600', color: '#fff', marginTop: '1rem' }}>
                  I confirm to Bridgewater Associates, LP and agree that:
                </p>

                <ul style={{ listStyle: 'none', paddingLeft: '0', marginTop: '1rem' }}>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#60a5fa' }}>•</span>
                    I am entering this website only to obtain general information regarding Bridgewater Associates, LP and not for any other purpose.
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#60a5fa' }}>•</span>
                    I understand that investments managed by Bridgewater Associates, LP are not available to the general public.
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#60a5fa' }}>•</span>
                    I understand that this website does not contain the information I would need to consider for an investment, and that such information is only available to a limited group of persons and institutions meeting specified criteria.
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#60a5fa' }}>•</span>
                    I understand that this website has not been reviewed or approved by, filed with, or otherwise furnished to any governmental or similar authority, and is intended only to provide limited information to members of the public who have a legitimate interest in that information for reasons unrelated to making investments.
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#60a5fa' }}>•</span>
                    I understand that when Bridgewater Associates, LP makes third party information available, Bridgewater generally will not have verified statements made by the third party, and the presentation of information may omit important information.
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#60a5fa' }}>•</span>
                    I understand that third party materials such as live interviews made available by Bridgewater Associates, LP generally will not have been edited by Bridgewater and statements in those materials by individuals associated with Bridgewater should be understood in the conversational context in which they were made, which may include providing historical background.
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#60a5fa' }}>•</span>
                    The content constitutes the proprietary intellectual property of Bridgewater or its licensors and that I will not directly or indirectly copy, modify, recast, create derivative works, post, publish, display, redistribute, disclose, or make available the content, in whole or in part, to any third parties, or assist others to do the same, or otherwise make any commercial use of the content without the prior written consent of Bridgewater.
                  </li>
                </ul>

                <p style={{ marginTop: '1.5rem', color: '#fff', fontWeight: '500' }}>
                  By clicking "Agree," I certify that I have read, understand and agree to the foregoing Disclaimer, Terms of Use and Privacy Policy.
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
