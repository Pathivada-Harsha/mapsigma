import { useState, useEffect, useRef } from "react"
import "../components_css/Founder-Timeline1.css"
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

export default function FounderTimelineVertical() {
  const [visibleItems, setVisibleItems] = useState(new Set())
  const [lineProgress, setLineProgress] = useState(0)
  const sectionRef = useRef(null)
  const itemRefs = useRef([])

  const timelineEvents = [
    {
      year: "1976",
      title: "Born in Singapore",
      description: "Austin Prakesh was born in 1976 in Singapore to humble beginnings. Raised by his mother Angel Janet Fernando, a devoted homemaker, and father Subramaniam, a dedicated police officer, Austin grew up in a household that knew struggle, sacrifice, and the value of holding a family together.",
      image: Austin,
    },
    {
      year: "1990s",
      title: "Formative Years & Early Lessons",
      description: "As a teenager, Austin worked countless odd and physically demanding jobs. He wasn't chasing money but experience. Each role taught him about business building, people, and pressure. Over time he developed a sharp instinct for reading human behavior.",
      image: Founder4,
    },
    {
      year: "1998-2000",
      title: "Service & Mentorship",
      description: "After serving in the Singapore Armed Forces, Austin met Stephen Tonrros and John Tidman, who became pivotal mentors in his corporate journey. With their guidance, he entered hotel and tourism corporate sales and rose rapidly through the ranks.",
      image: Founder1,
    },
    {
      year: "2000-2009",
      title: "Corporate Leadership",
      description: "Between 2000 and 2009, Austin played a key role in managing and scaling businesses valued at over 8 billion dollars. This period gave him strong foundations in business strategy, operational leadership, and corporate growth.",
      image: Founder7,
    },
    {
      year: "2011",
      title: "Zerodha – Angel Investor",
      description: "In early 2011, Austin moved to Bangalore, India, becoming an angel investor and Director strategic advisor to Zerodha, founded by Nithin Kamath. He helped shape its early foundation, guiding strategic growth, operations, and long-term vision.",
      image: Founder3,
    },
    {
      year: "2012",
      title: "Fitness Fight Club & Philanthropy",
      description: "Austin introduced white-collar boxing for corporate executives in Bangalore, through Fitness Fight Club, co-founded with Nithin Kamath. Together, they also founded an NGO named Vs, which helped fund heart surgeries for 228 children.",
      image: Founder10,
    },
    {
      year: "2013",
      title: "iScientific Technology Labs",
      description: "Austin invested in iScientific Technology Labs (ISTL), supporting innovation in smart meters and digital infrastructure for India's power sector. His backing accelerated the country's shift toward smarter, more reliable energy management systems.",
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
      description: "Austin worked as a private military contractor in Warsaw, Poland, facing the harsh realities of conflict. He witnessed loss and suffering, experiences that taught him the priceless value of life, dignity, and peace.",
      image: Founder11,
    },
    {
      year: "2022",
      title: "Skydiving Accident & Founding MAPSIGMA",
      description: "In 2022, a skydiving accident changed Austin's life dramatically. Despite immense challenges, he founded MAPSIGMA CAPITAL during his recovery, creating a firm built on values, trust, and generational impact.",
      image: Founder8,
    },
    {
      year: "2023",
      title: "Sesola Acquisition",
      description: "Austin expanded into sustainable innovation by acquiring Sesola, a company focused on solar energy and green power solutions. His goal was to accelerate India's transition to clean energy while creating jobs.",
      image: Founder8,
    },
    {
      year: "2024",
      title: "Resilience & Rebirth",
      description: "After enduring years of pain from his accident, Austin made the courageous decision to amputate both legs in 2024. This was not an act of surrender, but a turning point — fueling his mission to rise stronger, rebuild, and lead by example.",
      image: Founder13,
    },
  ]

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-100px 0px'
    }

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index)
          setVisibleItems(prev => new Set([...prev, index]))
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    itemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const scrollY = window.scrollY + window.innerHeight / 2

      const progress = ((scrollY - sectionTop) / sectionHeight) * 100
      setLineProgress(Math.min(Math.max(progress, 0), 100))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="founder-time-ver-section" ref={sectionRef}>
      <div className="founder-time-ver-header">
        <h2 className="founder-time-ver-main-title">Austin's Life Journey</h2>
        <p className="founder-time-ver-subtitle">
          A story of resilience, vision and unwavering commitment to building lasting impact
        </p>
      </div>

      <div className="founder-time-ver-container">
        {/* Central Vertical Line */}
        <div className="founder-time-ver-line">
          <div 
            className="founder-time-ver-progress"
            style={{ height: `${lineProgress}%` }}
          />
          <div 
            className="founder-time-ver-glow-circle"
            style={{ top: `${lineProgress}%` }}
          >
            <div className="founder-time-ver-sparkle"></div>
            <div className="founder-time-ver-sparkle founder-time-ver-sparkle-2"></div>
            <div className="founder-time-ver-sparkle founder-time-ver-sparkle-3"></div>
          </div>
        </div>

        {/* Timeline Events */}
        <div className="founder-time-ver-timeline">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              data-index={index}
              className={`founder-time-ver-item ${
                index % 2 === 0 ? 'founder-time-ver-left' : 'founder-time-ver-right'
              } ${visibleItems.has(index) ? 'founder-time-ver-active' : ''}`}
            >
              {/* Connection Dot */}
              <div className="founder-time-ver-dot">
                <div className="founder-time-ver-dot-inner"></div>
                <div className="founder-time-ver-dot-ring"></div>
              </div>

              {/* Event Card */}
              <div className="founder-time-ver-card">
                <div className="founder-time-ver-card-inner">
                  <div className="founder-time-ver-content">
                    <div className="founder-time-ver-year">{event.year}</div>
                    <h3 className="founder-time-ver-title">{event.title}</h3>
                    <p className="founder-time-ver-description">{event.description}</p>
                  </div>
                  <div className="founder-time-ver-image-wrapper">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="founder-time-ver-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}