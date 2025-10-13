import { useState, useEffect, useRef } from "react"
import "../components_css/Founder-Timeline.css"
import Austin from "./../images/people/Austin.jpg"
import Founder1 from "./../images/Founder/Founder1.jpeg"
import Founder2 from "./../images/Founder/Founder2.jpeg"
import Founder3 from "./../images/Founder/Founder3.jpeg"
import Founder4 from "./../images/Founder/Founder4.jpeg"
import Founder7 from "./../images/Founder/Founder7.jpeg"
import Founder8 from "./../images/Founder/Founder8.jpeg"
import Founder10 from "./../images/Founder/Founder10.jpeg"
import Founder11 from "./../images/Founder/Founder11.jpeg"
import Founder12 from "./../images/Founder/Founder12.jpeg"
import Founder13 from "./../images/Founder/Founder13.jpeg"
import Founder14 from "./../images/Founder/Founder15.jpeg"
export default function FounderTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const timelineRef = useRef(null)
  const containerRef = useRef(null)

  const timelineEvents = [
    {
      year: "1976",
      title: "Born in Singapore",
      description: "Austin Prakesh was born in 1976 in Singapore to humble beginnings. Raised by his mother Angel Janet Fernando, a devoted homemaker, and father Subramaniam, a dedicated police officer.",
      image: Austin,
    },
    {
      year: "1990s",
      title: "Formative Years & Early Lessons",
      description: "As a teenager, Austin worked countless odd and physically demanding jobs. He wasn't chasing money but experience. Each role taught him about business building, people, and pressure.",
      image: Founder4,
    },
    {
      year: "1998-2000",
      title: "Service & Mentorship",
      description: "After serving in the Singapore Armed Forces, Austin met Stephen Tonrros and John Tidman, who became pivotal mentors in his corporate journey.",
      image: Founder1,
    },
    {
      year: "2000-2009",
      title: "Corporate Leadership",
      description: "Between 2000 and 2009, Austin played a key role in managing and scaling businesses valued at over 8 billion dollars.",
      image: Founder7,
    },
    {
      year: "2011",
      title: "Zerodha – Angel Investor",
      description: "In early 2011, Austin moved to Bangalore, India, becoming an angel investor and Director strategic advisor to Zerodha, founded by Nithin Kamath.",
      image: Founder3,
    },
    {
      year: "2012",
      title: "Fitness Fight Club & Philanthropy",
      description: "Austin introduced white-collar boxing for corporate executives in Bangalore, through Fitness Fight Club, co-founded with Nithin Kamath.",
      image: Founder10,
    },
    {
      year: "2013",
      title: "iScientific Technology Labs",
      description: "Austin invested in iScientific Technology Labs (ISTL), supporting innovation in smart meters and digital infrastructure for India's power sector.",
      image: Founder12,
    },
    {
      year: "2015",
      title: "Birth of Zia Austin",
      description: "In 2015, Austin's life was blessed with the birth of his daughter, Zia. Today, he is deeply involved in guiding her growth and instilling values of strength, compassion, and clarity.",
      image: Founder2,
    },
    {
      year: "2015-2018",
      title: "Private Military Contractor",
      description: "Austin worked as a private military contractor in Warsaw, Poland, facing the harsh realities of conflict. He witnessed loss and suffering, experiences that taught him the priceless value of life.",
      image: Founder11,
    },
    {
      year: "2022",
      title: "Skydiving Accident & Founding MAPSIGMA",
      description: "In 2022, a skydiving accident changed Austin's life dramatically. Despite immense challenges, he founded MAPSIGMA CAPITAL during his recovery.",
      image: Founder8,
    },
    {
      year: "2023",
      title: "Sesola Acquisition",
      description: "Austin expanded into sustainable innovation by acquiring Sesola, a company focused on solar energy and green power solutions.",
      image: Founder14,
    },
    {
      year: "2024",
      title: "Resilience & Rebirth",
      description: "After enduring years of pain from his accident, Austin made the courageous decision to amputate both legs in 2024. This was not an act of surrender, but a turning point.",
      image: Founder13,
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      
      const container = containerRef.current
      const scrollLeft = container.scrollLeft
      const maxScroll = container.scrollWidth - container.clientWidth
      const progress = (scrollLeft / maxScroll) * 100
      
      setScrollProgress(progress)
      
      const itemWidth = container.scrollWidth / timelineEvents.length
      const currentIndex = Math.floor(scrollLeft / itemWidth)
      setActiveIndex(Math.min(currentIndex, timelineEvents.length - 1))
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="founder-timeline-section">
      <div className="founder-timeline-header">
        <h2 className="founder-timeline-main-title">Austin's Life Journey</h2>
        <p className="founder-timeline-subtitle">A story of resilience, vision and unwavering commitment to building lasting impact</p>
      </div>

      <div className="founder-timeline-scroll-container" ref={containerRef}>
        <div className="founder-timeline-content" ref={timelineRef}>
          {/* Central Timeline Line */}
          <div className="founder-timeline-line">
            <div 
              className="founder-timeline-progress" 
              style={{ width: `${scrollProgress}%` }}
            ></div>
            <div 
              className="founder-timeline-glow-circle"
              style={{ left: `${scrollProgress}%` }}
            >
              <div className="founder-timeline-glow-pulse"></div>
            </div>
          </div>

          {/* Timeline Events */}
          <div className="founder-timeline-events">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`founder-timeline-event ${
                  index % 2 === 0 ? 'founder-timeline-event-top' : 'founder-timeline-event-bottom'
                } ${activeIndex >= index ? 'founder-timeline-event-active' : ''}`}
              >
                {/* Connector Dot */}
                <div className="founder-timeline-dot">
                  <div className="founder-timeline-dot-inner"></div>
                </div>

                {/* Event Card */}
                <div className="founder-timeline-card">
                  <div className="founder-timeline-image-container">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="founder-timeline-image"
                    />
                  </div>
                  <div className="founder-timeline-card-content">
                    <div className="founder-timeline-year">{event.year}</div>
                    <h3 className="founder-timeline-title">{event.title}</h3>
                    <p className="founder-timeline-description">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="founder-timeline-scroll-hint">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Scroll to explore</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}