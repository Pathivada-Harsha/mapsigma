import { useState, useEffect, useRef } from "react"
import "../components_css/Ri-Video-Section.css"
import Videoimage1 from "../images/Research&insights/H-Video1.png"
import Videoimage2 from "../images/Research&insights/H-Video2.png"
import Videoimage3 from "../images/Research&insights/H-Video3.png"

import Videoimage4 from "../images/Research&insights/H-Video4.png"

const InteractiveVideoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [playingVideo, setPlayingVideo] = useState(null)
  const sectionRef = useRef(null)

  const videoCards = [
  {
    id: 1,
    title: "Global Market Insights",
    subtitle: "Clarity in Complexity",
    description:
      "Our analysts decode economic cycles and global shifts, providing clients with clarity, foresight, and strategies designed to endure across generations.",
    image: Videoimage1,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "Market Intelligence"
  },
  {
    id: 2,
    title: "Technology as a Strategic Edge",
    subtitle: "AI-Driven Precision",
    description:
      "Discover how our real-time data infrastructure and AI-enhanced investment models empower smarter, faster, and more disciplined decisions.",
    image: Videoimage2,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "Innovation"
  },
  {
    id: 3,
    title: "Risk Management with Purpose",
    subtitle: "Turning Risk into Strength",
    description:
      "We don’t just protect capital—we transform risk into opportunity through disciplined systems, foresight, and principle-driven strategies.",
    image: Videoimage3,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "Risk Strategy"
  },
  {
    id: 4,
    title: "Sustainability & Legacy",
    subtitle: "Beyond Returns",
    description:
      "Learn how we integrate responsibility, sustainability, and long-term purpose into every decision, building wealth that endures for future generations.",
    image: Videoimage4,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "Sustainability"
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
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
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

  const handleVideoClick = (index) => {
    setPlayingVideo(index)
  }

  const closeVideo = () => {
    setPlayingVideo(null)
  }

  return (
    <section className="interactive-video-section" ref={sectionRef}>
      <div className="interactive-video-container">
        <div className={`interactive-video-header ${isVisible ? 'animate-in' : ''}`}>
          <div className="interactive-video-label">OUR CAPABILITIES</div>
          <h2 className="interactive-video-title">Comprehensive Market Intelligence</h2>
          <p className="interactive-video-subtitle">
            Our research methodology combines traditional fundamental analysis with cutting-edge data science
            techniques. We monitor global markets 24/7, analyzing everything from macroeconomic indicators to
            company-specific metrics.
          </p>
        </div>

        <div className={`video-cards-container ${isVisible ? 'animate-in' : ''}`}>
          {videoCards.map((card, index) => (
            <div
              key={card.id}
              className={`video-card ${activeIndex === index ? 'active' : 'inactive'}`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => handleVideoClick(index)}
            >
              <div className="video-card-background">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="video-card-image"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/800x600/004225/FFFFFF?text=${encodeURIComponent(card.title)}`
                  }}
                />
                <div className="video-card-overlay"></div>
              </div>

              <div className="video-card-content">
                <div className="video-card-category">{card.category}</div>
                
                {activeIndex === index ? (
                  <div className="video-card-expanded">
                    <h3 className="video-card-title">{card.title}</h3>
                    <p className="video-card-subtitle">{card.subtitle}</p>
                    <p className="video-card-description">{card.description}</p>
                    <button 
                      className="watch-video-btn"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleVideoClick(index)
                      }}
                    >
                      <svg className="play-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M6.5 4.5L15.5 10L6.5 15.5V4.5Z" fill="currentColor"/>
                      </svg>
                      Watch the video
                    </button>
                  </div>
                ) : (
                  <div className="video-card-collapsed">
                    <button className="expand-btn">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {playingVideo !== null && (
        <div className="video-modal" onClick={closeVideo}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeVideo}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="video-wrapper">
              <video 
                controls 
                autoPlay
                className="video-player"
                poster={videoCards[playingVideo].image}
              >
                <source src={videoCards[playingVideo].videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-modal-info">
              <h3>{videoCards[playingVideo].title}</h3>
              <p>{videoCards[playingVideo].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default InteractiveVideoSection