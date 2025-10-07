import { useState, useEffect, useRef } from "react"
import "../components_css/Founder-Culture.css"

export default function FounderCultureSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const culturePillars = [
    {
      icon: "💎",
      title: "Radical Clarity",
      subtitle: "Over passive agreement",
      description: "We champion transparent communication where tough questions are welcomed and truth is prioritized over comfort."
    },
    {
      icon: "🎯",
      title: "Meaningful Work",
      subtitle: "That aligns with personal values",
      description: "Every project contributes to a larger purpose, ensuring work is both impactful and personally fulfilling."
    },
    {
      icon: "🌱",
      title: "Mentorship Over Management",
      subtitle: "Every leader must grow new leaders",
      description: "We invest in developing talent, creating a culture where growth is shared and leadership is cultivated."
    },
    {
      icon: "⚖️",
      title: "Meritocracy of Ideas",
      subtitle: "Not titles",
      description: "The best idea wins, regardless of who presents it. Hierarchy serves the mission, not the ego."
    }
  ]

  return (
    <section 
      className={`founder-culture-modern ${isVisible ? 'founder-culture-visible' : ''}`}
      ref={sectionRef}
    >
      <div className="founder-culture-container">
        {/* Header Section */}
        <div className="founder-culture-header">
          <div className="founder-culture-label">
            <span className="founder-culture-label-text">Our Foundation</span>
            <div className="founder-culture-label-line"></div>
          </div>
          <h2 className="founder-culture-title">
            Culture as a <span className="founder-culture-accent">Strategic Asset</span>
          </h2>
          <p className="founder-culture-intro">
            The same disciplined philosophy shapes MAPSIGMA's internal culture. The firm is built not just on
            investment acumen but on clarity, accountability and shared truth.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="founder-culture-grid">
          {/* Left: Description & Statement */}
          <div className="founder-culture-description">
            <div className="founder-culture-text-block">
              <p>
                Every team member is encouraged to challenge assumptions, expose blind spots and speak openly 
                regardless of rank. The principle is simple: truth before hierarchy and trust before performance.
              </p>
            </div>

            <div className="founder-culture-image-card">
              <img 
                src="https://images.unsplash.com/photo-1560264280-88b68371db39?w=1200&h=800&fit=crop" 
                alt="MAPSIGMA Culture" 
                className="founder-culture-image"
              />
              <div className="founder-culture-image-overlay">
                <div className="founder-culture-overlay-text">
                  <h3>Building Together</h3>
                  <p>A culture of excellence and purpose</p>
                </div>
              </div>
            </div>

            <div className="founder-culture-statement">
              <div className="founder-culture-quote-mark">"</div>
              <p>
                A culture built not for comfort but for resilience. One that demands excellence but gives purpose in return.
              </p>
            </div>
          </div>

          {/* Right: Pillars Grid */}
          <div className="founder-culture-pillars-section">
            <h3 className="founder-culture-pillars-title">Core Values</h3>
            <div className="founder-culture-pillars">
              {culturePillars.map((pillar, index) => (
                <div 
                  key={index} 
                  className="founder-culture-pillar"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="founder-culture-pillar-icon">{pillar.icon}</div>
                  <div className="founder-culture-pillar-content">
                    <h4 className="founder-culture-pillar-title">{pillar.title}</h4>
                    <p className="founder-culture-pillar-subtitle">{pillar.subtitle}</p>
                    <p className="founder-culture-pillar-description">{pillar.description}</p>
                  </div>
                  <div className="founder-culture-pillar-number">0{index + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats/Features */}
        {/* <div className="founder-culture-features">
          <div className="founder-culture-feature">
            <div className="founder-culture-feature-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4L20.472 13.056L30 14.472L23 21.528L24.944 31.528L16 26.944L7.056 31.528L9 21.528L2 14.472L11.528 13.056L16 4Z" fill="#004225"/>
              </svg>
            </div>
            <h4>Excellence First</h4>
            <p>Uncompromising standards in everything we do</p>
          </div>
          <div className="founder-culture-feature">
            <div className="founder-culture-feature-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 25c-6.065 0-11-4.935-11-11S9.935 5 16 5s11 4.935 11 11-4.935 11-11 11z" fill="#004225"/>
                <path d="M16 8v8l5.5 3.5" stroke="#004225" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h4>Long-Term Focus</h4>
            <p>Building value that compounds across generations</p>
          </div>
          <div className="founder-culture-feature">
            <div className="founder-culture-feature-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm0 21c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9z" fill="#004225"/>
                <path d="M16 10v6l4 4" stroke="#004225" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h4>Continuous Growth</h4>
            <p>Evolving mindsets, strategies, and capabilities</p>
          </div>
        </div> */}
      </div>
    </section>
  )
}