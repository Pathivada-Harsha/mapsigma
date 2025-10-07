"use client"

import { useState, useEffect } from "react"
import "../components_css/Founder-Hero.css"
import Austin from "./../images/people/Austin.jpg"

export default function FounderHero1() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={`founder-hero1-section ${isLoaded ? 'founder-hero1-loaded' : ''}`}>
      {/* Background Elements */}
      <div className="founder-hero1-bg-shape founder-hero1-bg-shape-1"></div>
      <div className="founder-hero1-bg-shape founder-hero1-bg-shape-2"></div>
      <div className="founder-hero1-bg-gradient"></div>

      <div className="founder-hero1-container">
        {/* Left Content Side */}
        <div className="founder-hero1-content">
          <div className="founder-hero1-label">
            <span className="founder-hero1-label-text">Leadership</span>
            <div className="founder-hero1-label-line"></div>
          </div>
          
          <h1 className="founder-hero1-title">
            Meet Our
            <span className="founder-hero1-title-accent">Founder</span>
          </h1>
          
          <p className="founder-hero1-subtitle">
            Austin Prakesh
          </p>
          
          <p className="founder-hero1-description">
            Visionary entrepreneur, strategic investor, and the driving force behind MAPSIGMA CAPITAL. 
            With decades of experience across multiple industries, Austin has built a legacy of principled 
            leadership and transformative impact.
          </p>

          <div className="founder-hero1-stats">
            <div className="founder-hero1-stat">
              <div className="founder-hero1-stat-number">25+</div>
              <div className="founder-hero1-stat-label">Years Experience</div>
            </div>
            <div className="founder-hero1-stat">
              <div className="founder-hero1-stat-number">$8B+</div>
              <div className="founder-hero1-stat-label">Value Created</div>
            </div>
            <div className="founder-hero1-stat">
              <div className="founder-hero1-stat-number">10+</div>
              <div className="founder-hero1-stat-label">Strategic Investments</div>
            </div>
          </div>

          <div className="founder-hero1-cta">
            <a href="#journey" className="founder-hero1-btn founder-hero1-btn-primary">
              Explore His Journey
              <svg className="founder-hero1-btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="founder-hero1-image-section">
          <div className="founder-hero1-image-wrapper">
            <div className="founder-hero1-image-frame">
              <img 
                src={Austin} 
                alt="Austin Prakesh - Founder & Chief Strategist" 
                className="founder-hero1-image"
                loading="eager"
              />
            </div>
            
            {/* Floating Card */}
            <div className="founder-hero1-floating-card">
              <div className="founder-hero1-card-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2L20.472 11.056L30 12.472L23 19.528L24.944 29.528L16 24.944L7.056 29.528L9 19.528L2 12.472L11.528 11.056L16 2Z" fill="#FFD700" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="founder-hero1-card-content">
                <div className="founder-hero1-card-title">Industry Recognition</div>
                <div className="founder-hero1-card-text">Top Strategic Investor</div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="founder-hero1-decoration founder-hero1-decoration-1"></div>
          <div className="founder-hero1-decoration founder-hero1-decoration-2"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="founder-hero1-scroll-indicator">
        <div className="founder-hero1-scroll-mouse">
          <div className="founder-hero1-scroll-wheel"></div>
        </div>
      </div>
    </section>
  )
}