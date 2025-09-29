import { useState, useEffect, useRef } from "react"
import "../components_css/Articles-Section.css"

const ArticlesSection = () => {
  const [visibleArticles, setVisibleArticles] = useState(6)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  // Articles data
  const articles = [
    {
      id: 1,
      title: "The Future of Sustainable Investment Strategies",
      excerpt: "Exploring how ESG factors are reshaping investment portfolios and driving long-term value creation in emerging markets.",
      category: "Market Analysis",
      date: "December 15, 2024",
      image: "/images/articles/sustainable-investment.jpg",
      author: "Sarah Chen"
    },
    {
      id: 2,
      title: "AI-Driven Portfolio Management: A New Era",
      excerpt: "How artificial intelligence and machine learning are revolutionizing investment decision-making processes.",
      category: "Technology",
      date: "December 10, 2024",
      image: "/images/articles/ai-portfolio.jpg",
      author: "Michael Roberts"
    },
    {
      id: 3,
      title: "Global Markets Outlook 2025",
      excerpt: "Comprehensive analysis of macroeconomic trends and their implications for strategic asset allocation.",
      category: "Economic Trends",
      date: "December 5, 2024",
      image: "/images/articles/global-outlook.jpg",
      author: "David Thompson"
    },
    {
      id: 4,
      title: "Risk Management in Volatile Markets",
      excerpt: "Advanced strategies for protecting capital while maintaining growth potential in uncertain economic conditions.",
      category: "Risk Management",
      date: "November 28, 2024",
      image: "/images/articles/risk-management.jpg",
      author: "Jennifer Lee"
    },
    {
      id: 5,
      title: "Emerging Markets: Opportunities and Challenges",
      excerpt: "Deep dive into high-growth regions and the unique investment considerations for sophisticated investors.",
      category: "Market Analysis",
      date: "November 20, 2024",
      image: "/images/articles/emerging-markets.jpg",
      author: "Carlos Martinez"
    },
    {
      id: 6,
      title: "The Impact of Central Bank Policies on Equity Markets",
      excerpt: "Understanding monetary policy shifts and their cascading effects on global investment landscapes.",
      category: "Economic Trends",
      date: "November 15, 2024",
      image: "/images/articles/central-bank.jpg",
      author: "Emily Watson"
    },
    {
      id: 7,
      title: "Cryptocurrency Integration in Traditional Portfolios",
      excerpt: "Evaluating digital assets as a legitimate component of diversified investment strategies.",
      category: "Technology",
      date: "November 10, 2024",
      image: "/images/articles/cryptocurrency.jpg",
      author: "Alex Kim"
    },
    {
      id: 8,
      title: "Healthcare Innovation: Investment Opportunities",
      excerpt: "Identifying breakthrough companies reshaping the future of medicine and biotechnology.",
      category: "Sector Focus",
      date: "November 5, 2024",
      image: "/images/articles/healthcare.jpg",
      author: "Dr. Rachel Green"
    },
    {
      id: 9,
      title: "Private Equity Trends in 2025",
      excerpt: "Analysis of deal flow, valuations, and exit strategies in the evolving private markets landscape.",
      category: "Market Analysis",
      date: "October 30, 2024",
      image: "/images/articles/private-equity.jpg",
      author: "Robert Anderson"
    },
    {
      id: 10,
      title: "Climate Change and Investment Strategy",
      excerpt: "How climate risk is becoming a critical factor in portfolio construction and long-term planning.",
      category: "Sustainability",
      date: "October 25, 2024",
      image: "/images/articles/climate-change.jpg",
      author: "Maria Santos"
    },
    {
      id: 11,
      title: "Real Estate Investment in Post-Pandemic Era",
      excerpt: "Analyzing shifts in commercial and residential real estate markets and future growth sectors.",
      category: "Sector Focus",
      date: "October 20, 2024",
      image: "/images/articles/real-estate.jpg",
      author: "James Wilson"
    },
    {
      id: 12,
      title: "Quantitative Trading Strategies Explained",
      excerpt: "Understanding algorithmic trading approaches and their role in modern portfolio management.",
      category: "Technology",
      date: "October 15, 2024",
      image: "/images/articles/quant-trading.jpg",
      author: "Dr. Wei Zhang"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const loadMoreArticles = () => {
    setVisibleArticles(prev => Math.min(prev + 3, articles.length))
  }

  const hasMoreArticles = visibleArticles < articles.length

  return (
    <section className="articles-section" ref={sectionRef}>
      <div className="articles-container">
        <div className={`articles-header ${isVisible ? 'articles-animate' : ''}`}>
          {/* <div className="articles-label">RESEARCH & INSIGHTS</div> */}
          <h2 className="articles-title">Selected Insights from Our Research Library</h2>
          <p className="articles-subtitle">
            Explore our latest analysis and perspectives on market trends, investment strategies, and economic developments
          </p>
        </div>

        <div className="articles-grid">
          {articles.slice(0, visibleArticles).map((article, index) => (
            <div 
              key={article.id} 
              className={`article-card ${isVisible ? 'article-card-animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="article-image-wrapper">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="article-image"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x250/004225/FFFFFF?text=MAPSIGMA+CAPITAL"
                  }}
                />
                <div className="article-category-badge">{article.category}</div>
              </div>
              
              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                
                <div className="article-footer">
                  <div className="article-meta">
                    <span className="article-author">{article.author}</span>
                    <span className="article-date">{article.date}</span>
                  </div>
                  <button className="article-read-more">
                    Read More
                    <svg className="article-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMoreArticles && (
          <div className="articles-load-more">
            <button 
              className="load-more-btn"
              onClick={loadMoreArticles}
            >
              Load More Articles
              <svg className="load-more-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4V16M10 16L6 12M10 16L14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <p className="articles-count">
              Showing {visibleArticles} of {articles.length} articles
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ArticlesSection