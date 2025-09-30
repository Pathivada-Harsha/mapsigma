import { useState, useEffect, useRef } from "react"
import "../components_css/Articles-Section.css"
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
import Article13 from "../images/Research&insights/H-Article13.png"

const ArticlesSection = () => {
  const [visibleArticles, setVisibleArticles] = useState(6)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  // Articles data
  const articles = [
  {
    id: 1,
    title: "Truth Before Trends: A Principles-Driven Investment Approach",
    excerpt: "How MAPSIGMA CAPITAL applies timeless principles to navigate shifting markets with clarity, conviction, and resilience.",
    category: "Principles",
    date: "January 10, 2025",
    image: Article1,
    author: "Research Team"
  },
  {
    id: 2,
    title: "Technology as a Strategic Edge",
    excerpt: "Exploring how our AI-driven investment models and real-time data infrastructure empower smarter decision-making.",
    category: "Technology",
    date: "January 8, 2025",
    image: Article2,
    author: "MAPSIGMA Tech Insights"
  },
  {
    id: 3,
    title: "Culture as the Hidden Engine of Performance",
    excerpt: "Why culture is MAPSIGMA’s greatest asset—and how it shapes trust, innovation, and long-term client relationships.",
    category: "Culture",
    date: "January 5, 2025",
    image:Article3,
    author: "Editorial Board"
  },
  {
    id: 4,
    title: "Risk Management with Purpose",
    excerpt: "Our disciplined approach to risk isn’t about avoiding uncertainty—it’s about turning risk into opportunity.",
    category: "Risk Management",
    date: "December 28, 2024",
    image: Article4,
    author: "Strategy Division"
  },
  {
    id: 5,
    title: "Building Legacy Beyond Returns",
    excerpt: "How MAPSIGMA’s investment philosophy prioritizes generational wealth, responsibility, and long-term impact.",
    category: "Legacy",
    date: "December 22, 2024",
    image: Article5,
    author: "Austin Prakesh"
  },
  {
    id: 6,
    title: "Global Insights: Clarity in Complexity",
    excerpt: "Analyzing global economic cycles and macro trends to provide clients with foresight and stability in uncertain times.",
    category: "Market Analysis",
    date: "December 15, 2024",
    image: Article6,
    author: "Research Team"
  },
  {
    id: 7,
    title: "People First: Investing in Human Capital",
    excerpt: "Why our strongest returns come from investing in people, not just portfolios.",
    category: "People",
    date: "December 10, 2024",
    image: Article7,
    author: "HR & Leadership"
  },
  {
    id: 8,
    title: "Sustainability and Responsibility in Investing",
    excerpt: "How MAPSIGMA integrates sustainability and social responsibility into long-term wealth creation.",
    category: "Sustainability",
    date: "December 3, 2024",
    image: Article8,
    author: "Impact Division"
  },
  {
    id: 9,
    title: "Clarity in Uncertainty: Strategic Foresight",
    excerpt: "Using deep research and historical analysis to guide investment decisions in volatile markets.",
    category: "Research",
    date: "November 28, 2024",
    image: Article9,
    author: "Research Team"
  },
  {
    id: 10,
    title: "The Role of Principles in Leadership",
    excerpt: "How MAPSIGMA leaders use principles to guide decisions, shape culture, and inspire performance.",
    category: "Leadership",
    date: "November 22, 2024",
    image: Article10,
    author: "Leadership Insights"
  },
  {
    id: 11,
    title: "Client Trust as the Core of Wealth Management",
    excerpt: "Why every MAPSIGMA decision begins with safeguarding client trust and building long-term relationships.",
    category: "Clients",
    date: "November 15, 2024",
    image: Article11,
    author: "Client Relations"
  },
  {
    id: 12,
    title: "Future of Finance: A Next-Gen Perspective",
    excerpt: "Exploring how new technologies, global shifts, and principles-driven thinking are shaping tomorrow’s economy.",
    category: "Future",
    date: "November 5, 2024",
    image: Article12,
    author: "MAPSIGMA Strategy Team"
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