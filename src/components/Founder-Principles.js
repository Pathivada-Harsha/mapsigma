"use client"

import { useState, useEffect, useRef } from "react"
import "../components_css/Founder-Principles.css"



import Austin from "./../images/people/Austin.jpg"

export default function FounderPrinciplesSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const section = sectionRef.current
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY
      
      // Calculate scroll progress through the section
      const startPoint = sectionTop - windowHeight
      const endPoint = sectionTop + sectionHeight
      const progress = (scrollY - startPoint) / (endPoint - startPoint)
      
      setScrollProgress(Math.min(Math.max(progress, 0), 1))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const principles = [
    {
      number: "01",
      title: "Life is about discovering who you are",
      description: "Don't follow the crowd. Follow your core. The more you understand your true nature the easier it is to say yes to the right things and no to everything else.",
    },
    {
      number: "02",
      title: "Every reality is a lesson waiting to shape you",
      description: "Life is not random. Everything you encounter, every challenge, every failure, every delay is a signal guiding you toward growth. Learn to listen. Learn to adapt.",
    },
    {
      number: "03",
      title: "Reality is a machine and principles are how you master it",
      description: "Everything is cause and effect. The patterns of success and failure repeat in slightly different forms. If you observe them without emotion they become predictable.",
    },
    {
      number: "04",
      title: "Principles are not beliefs they are tools",
      description: "Write down what works. Revisit what doesn't. Stress-test your principles in the fire of life. The more clearly you define how you choose to live the less chaos you invite in.",
    },
    {
      number: "05",
      title: "Culture beats talent every time",
      description: "A company is not built by titles and résumés. It's built by people who trust each other, speak the truth and hold each other accountable.",
    },
    {
      number: "06",
      title: "Meaningful work and meaningful relationships",
      description: "You can win the world and lose your soul if you forget why you started. What you build matters. Who you build it with matters even more.",
    },
    {
      number: "07",
      title: "What you don't know is your greatest asset",
      description: "Ego is the enemy of evolution. Stay humble. Ask better questions. Seek people who challenge you. The edge lies not in what you know but in how you grow.",
    },
    {
      number: "08",
      title: "Discipline creates freedom",
      description: "Consistency beats brilliance. Build systems. Honor your time. Keep promises especially the ones you make to yourself.",
    },
    {
      number: "09",
      title: "Legacy is built in silence service and sacrifice",
      description: "The goal is not applause. The goal is impact. Live in a way that your children's children will benefit from your discipline today.",
    },
    {
      number: "10",
      title: "Fail Forward. Always.",
      description: "Pain is the price of progress. When you fall don't just get back up. Get back up wiser, stronger and more focused than before.",
    },
  ]

  return (
    <section className="founder-principle1-scroll" ref={sectionRef}>
      {/* Background Image with Parallax Effect */}
      <div 
        className="founder-principle1-bg-image"
        style={{
          transform: `translateY(${scrollProgress * 100}px) scale(${1 + scrollProgress * 0.1})`
        }}
      />
      
      {/* Overlay for readability */}
      <div className="founder-principle1-overlay" />
      
      <div className="founder-principle1-container">
        <div 
          className="founder-principle1-header"
          style={{
            opacity: Math.max(0, 1 - scrollProgress * 2),
            transform: `translateY(${scrollProgress * 50}px)`
          }}
        >
          <h2 className="founder-principle1-section-title">Austin's Principles</h2>
          <p className="founder-principle1-subtitle">Live With Clarity. Build With Purpose. Lead With Truth.</p>
          <p className="founder-principle1-intro">
            Many have tried to define the reason behind Austin Prakesh's impact. Some call it grit. Others call it
            vision. But Austin credits it to something anyone can develop: a clear principled way of seeing the world
            and making decisions in alignment with what truly matters.
          </p>
        </div>

        <div className="founder-principle1-grid">
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className="founder-principle1-card"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: scrollProgress > (index * 0.08) ? 1 : 0,
                transform: scrollProgress > (index * 0.08) 
                  ? 'translateY(0) scale(1)' 
                  : 'translateY(50px) scale(0.95)'
              }}
            >
              <div className="founder-principle1-number">{principle.number}</div>
              <h3 className="founder-principle1-title">{principle.title}</h3>
              <p className="founder-principle1-description">{principle.description}</p>
            </div>
          ))}
        </div>

        <div 
          className="founder-principle1-final"
          style={{
            opacity: scrollProgress > 0.8 ? 1 : 0,
            transform: scrollProgress > 0.8 ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          <h3>Final Thought</h3>
          <p>
            These principles are not just business strategies. They are life strategies. For those who want to lead,
            build and live without regret.
          </p>
        </div>
      </div>
    </section>
  )
}