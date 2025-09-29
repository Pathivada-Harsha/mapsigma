"use client"

import { useState } from "react"
import "../pages_css/Research_insights.css"
import Map_Your_Move from '../components/Map_Your_Move'
import Hero from "../components/Ri-Hero.js"
import MapSigmaAboutSection from "../components/Ri-About.js"
import ArticlesSection from "../components/Articles-Section.js"
import VideoSection from "../components/Ri-Video-Section.js"
export default function ResearchInsights() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

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
    console.log("Newsletter signup:", { name, email })
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
    </div>
  )
}
