"use client"

import { useState } from "react"
import "../pages_css/Founder.css"
import Austin from "./../images/people/Austin.jpg"
import zerodah from "./../images/Founder/zerodah.png"
export default function FounderContent() {
  const [activeTimeline, setActiveTimeline] = useState(null)

  const timelineEvents = [
    {
      year: "1976",
      title: "Born in Singapore",
      description:
        "Austin Prakesh was born to humble beginnings. Raised by his mother Angel Janet Fernando, a devoted homemaker and father Subramaniam, a dedicated police officer.",
      image: Austin,
    },
    {
      year: "1998-2000",
      title: "Early Career & Mentorship",
      description:
        "After serving in the Singapore Armed Forces, Austin crossed paths with Stephen Tonrros and John Tidman, two influential mentors who guided his corporate journey.",
      image: "/founder-early-career.jpg",
    },
    {
      year: "2000-2009",
      title: "Corporate Leadership",
      description:
        "Rose through the ranks in hotel and tourism corporate sales, helping manage and scale businesses valued at over 8 billion dollars.",
      image: "/founder-corporate.jpg",
    },
    {
      year: "2011",
      title: "Zerodha - Angel Investor",
      description:
        "Moved to Bangalore as an angel investor and Director strategic advisor to Zerodha, now India's largest trading firm. Played a critical role in its early foundation and strategic growth.",
      image: zerodah,
    },
    {
      year: "2012",
      title: "Fitness Fight Club & Philanthropy",
      description:
        "Introduced white-collar boxing to corporate executives. Through NGO Vs, helped fund heart surgeries for 228 children and supported education for over 22 children.",
      image: "/founder-philanthropy.jpg",
    },
    {
      year: "2013",
      title: "iScientific Technology Labs",
      description:
        "Invested in ISTL, focused on building smart meters and digital infrastructure for India's growing power sector.",
      image: "/founder-istl.jpg",
    },
    {
      year: "2015",
      title: "Birth of Zia Austin",
      description:
        "His daughter Zia Austin was born. Today he is deeply involved in guiding her growth and helping shape her foundational values.",
      image: "/founder-daughter.jpg",
    },
    {
      year: "2015-2018",
      title: "Private Military Contractor",
      description:
        "Served as a private military contractor stationed in Warsaw Poland, witnessing the harsh realities of conflict and understanding the priceless value of life.",
      image: "/founder-military.jpg",
    },
    {
      year: "2022",
      title: "Skydiving Accident & MAPSIGMA",
      description:
        "A skydiving accident changed everything. During recovery, he founded MAPSIGMA CAPITAL - a platform grounded in values, trust and generational impact.",
      image: "/founder-mapsigma.jpg",
    },
    {
      year: "2023",
      title: "Sesola Acquisition",
      description:
        "Acquired Sesola, a company focused on solar energy and green power solutions, accelerating the shift toward cleaner energy across India.",
      image: "/founder-sesola.jpg",
    },
    {
      year: "2024",
      title: "Resilience & Rebirth",
      description:
        "Made the courageous decision to amputate both legs - not as surrender but as a powerful turning point. A symbol of possibility, purpose and unshakable will.",
      image: "/founder-resilience.jpg",
    },
  ]

  const principles = [
    {
      number: "01",
      title: "Life is about discovering who you are",
      description:
        "Don't follow the crowd. Follow your core. The more you understand your true nature the easier it is to say yes to the right things and no to everything else.",
    },
    {
      number: "02",
      title: "Every reality is a lesson waiting to shape you",
      description:
        "Life is not random. Everything you encounter, every challenge, every failure, every delay is a signal guiding you toward growth. Learn to listen. Learn to adapt.",
    },
    {
      number: "03",
      title: "Reality is a machine and principles are how you master it",
      description:
        "Everything is cause and effect. The patterns of success and failure repeat in slightly different forms. If you observe them without emotion they become predictable.",
    },
    {
      number: "04",
      title: "Principles are not beliefs they are tools",
      description:
        "Write down what works. Revisit what doesn't. Stress-test your principles in the fire of life. The more clearly you define how you choose to live the less chaos you invite in.",
    },
    {
      number: "05",
      title: "Culture beats talent every time",
      description:
        "A company is not built by titles and résumés. It's built by people who trust each other, speak the truth and hold each other accountable.",
    },
    {
      number: "06",
      title: "Meaningful work and meaningful relationships",
      description:
        "You can win the world and lose your soul if you forget why you started. What you build matters. Who you build it with matters even more.",
    },
    {
      number: "07",
      title: "What you don't know is your greatest asset",
      description:
        "Ego is the enemy of evolution. Stay humble. Ask better questions. Seek people who challenge you. The edge lies not in what you know but in how you grow.",
    },
    {
      number: "08",
      title: "Discipline creates freedom",
      description:
        "Consistency beats brilliance. Build systems. Honor your time. Keep promises especially the ones you make to yourself.",
    },
    {
      number: "09",
      title: "Legacy is built in silence service and sacrifice",
      description:
        "The goal is not applause. The goal is impact. Live in a way that your children's children will benefit from your discipline today.",
    },
    {
      number: "10",
      title: "Fail Forward. Always.",
      description:
        "Pain is the price of progress. When you fall don't just get back up. Get back up wiser, stronger and more focused than before.",
    },
  ]

  return (
    <div className="founder-page">
      {/* Hero Section */}
      <section className="founder-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Austin Prakesh</h1>
            <p className="hero-subtitle">Founder & Chief Strategist</p>
            <p className="hero-tagline">Live With Clarity. Build With Purpose. Lead With Truth.</p>
          </div>
          <div className="hero-image-container">
            <img src={Austin} alt="Austin Prakesh" className="hero-portrait" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="founder-intro">
        <div className="intro-container">
          <h2 className="section-title">Our Founder</h2>
          <div className="intro-content">
            <p>
              Austin Prakesh founded MAPSIGMA CAPITAL in 2022 with a bold vision to build a next-generation investment
              platform grounded in strategic insight, disciplined execution and long-term value creation. From the
              beginning, the mission has been clear: to build lasting value for our clients and their generations to
              come.
            </p>
            <p>
              Deeply rooted in family values, Austin believes that true wealth goes beyond capital. It includes the
              principles, skills and resilience we pass on to our children. At the heart of MAPSIGMA CAPITAL is a
              commitment to creating a strong financial and moral foundation for the next generation, equipping them not
              only to succeed in a fast-changing world but to lead it with integrity.
            </p>
            <p>
              As Founder, Austin shaped MAPSIGMA CAPITAL's core philosophy by combining entrepreneurial agility with
              institutional precision. In just a short time, the firm has established itself as a trusted partner, known
              for clarity of purpose, conviction-driven investing and an uncompromising commitment to excellence.
            </p>
            <p>
              Today, while the firm scales across asset classes and regions, Austin continues to lead as Chief
              Strategist and Principal Investor, mentoring the next generation of MAPSIGMA leaders who now drive the
              firm's evolving journey.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="founder-gallery">
        <div className="gallery-grid">
          <div className="gallery-item gallery-large">
            <img src="/founder-leadership.jpg" alt="Austin Prakesh Leadership" />
            <div className="gallery-caption">Leading with Purpose</div>
          </div>
          <div className="gallery-item">
            <img src="/founder-mentoring.jpg" alt="Mentoring Team" />
            <div className="gallery-caption">Mentoring Future Leaders</div>
          </div>
          <div className="gallery-item">
            <img src="/founder-strategy.jpg" alt="Strategic Planning" />
            <div className="gallery-caption">Strategic Vision</div>
          </div>
          <div className="gallery-item gallery-tall">
            <img src="/founder-family.jpg" alt="Family Values" />
            <div className="gallery-caption">Family First</div>
          </div>
          <div className="gallery-item">
            <img src="/founder-innovation.jpg" alt="Innovation" />
            <div className="gallery-caption">Driving Innovation</div>
          </div>
        </div>
      </section>

      {/* Life Journey Timeline */}
      <section className="founder-timeline">
        <div className="timeline-container">
          <h2 className="section-title">Austin's Life Journey</h2>
          <p className="timeline-intro">
            A story of resilience, vision and unwavering commitment to building lasting impact.
          </p>

          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`timeline-item ${activeTimeline === index ? "active" : ""}`}
                onClick={() => setActiveTimeline(activeTimeline === index ? null : index)}
              >
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  <div className="timeline-line"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{event.year}</div>
                  <div className="timeline-card">
                    <div className="timeline-image">
                      <img src={event.image || "/placeholder.svg"} alt={event.title} />
                    </div>
                    <div className="timeline-text">
                      <h3>{event.title}</h3>
                      <p>{event.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="founder-principles">
        <div className="principles-container">
          <h2 className="section-title">Austin's Principles</h2>
          <p className="principles-subtitle">Live With Clarity. Build With Purpose. Lead With Truth.</p>
          <p className="principles-intro">
            Many have tried to define the reason behind Austin Prakesh's impact. Some call it grit. Others call it
            vision. But Austin credits it to something anyone can develop: a clear principled way of seeing the world
            and making decisions in alignment with what truly matters.
          </p>

          <div className="principles-grid">
            {principles.map((principle, index) => (
              <div key={index} className="principle-card">
                <div className="principle-number">{principle.number}</div>
                <h3 className="principle-title">{principle.title}</h3>
                <p className="principle-description">{principle.description}</p>
              </div>
            ))}
          </div>

          <div className="principles-final">
            <h3>Final Thought</h3>
            <p>
              These principles are not just business strategies. They are life strategies. For those who want to lead,
              build and live without regret.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="founder-culture">
        <div className="culture-container">
          <div className="culture-content">
            <h2 className="section-title">Culture as a Strategic Asset</h2>
            <p>
              The same disciplined philosophy shapes MAPSIGMA's internal culture. The firm is built not just on
              investment acumen but on clarity, accountability and shared truth.
            </p>
            <p>
              Every team member is encouraged to challenge assumptions, expose blind spots and speak openly regardless
              of rank. The principle is simple: truth before hierarchy and trust before performance.
            </p>

            <div className="culture-pillars">
              <div className="culture-pillar">
                <div className="pillar-icon">✓</div>
                <h4>Radical Clarity</h4>
                <p>Over passive agreement</p>
              </div>
              <div className="culture-pillar">
                <div className="pillar-icon">✓</div>
                <h4>Meaningful Work</h4>
                <p>That aligns with personal values</p>
              </div>
              <div className="culture-pillar">
                <div className="pillar-icon">✓</div>
                <h4>Mentorship Over Management</h4>
                <p>Every leader must grow new leaders</p>
              </div>
              <div className="culture-pillar">
                <div className="pillar-icon">✓</div>
                <h4>Meritocracy of Ideas</h4>
                <p>Not titles</p>
              </div>
            </div>

            <p className="culture-statement">
              It is a culture built not for comfort but for resilience. One that demands excellence but gives purpose in
              return.
            </p>
          </div>
          <div className="culture-image">
            <img src="/founder-culture.jpg" alt="MAPSIGMA Culture" />
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="founder-legacy">
        <div className="legacy-container">
          <h2 className="section-title">Strategic Innovations and Legacy in the Making</h2>
          <p>
            Austin's principled thinking has led to early and bold moves — from championing financial education in India
            through Zerodha to investing in smart infrastructure (ISTL) and green energy (Sesola) long before they were
            headlines.
          </p>

          <div className="legacy-vision">
            <h3>The Next Generation of Investing</h3>
            <div className="vision-items">
              <div className="vision-item">
                <h4>Deep Macro Intelligence</h4>
                <p>Understanding global patterns and economic shifts</p>
              </div>
              <div className="vision-item">
                <h4>Tech-Enabled Precision</h4>
                <p>Leveraging AI and data for informed decisions</p>
              </div>
              <div className="vision-item">
                <h4>Uncompromising Human Values</h4>
                <p>Integrity and purpose at the core</p>
              </div>
            </div>
          </div>

          <p className="legacy-statement">
            MAPSIGMA is designed not just to survive shifts in the market but to lead them by building a system that
            evolves, learns and delivers clarity under chaos. The goal is not to be the biggest. The goal is to be the
            most trusted, principled and future ready.
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="founder-quote">
        <div className="quote-container">
          <blockquote>
            <p>
              "I didn't build MAPSIGMA to make noise. I built it to make sense in good times and bad, in markets and in
              life. That's what principles do. They keep you standing when the world shakes."
            </p>
            <cite>— Austin Prakesh, Founder & Chief Strategist</cite>
          </blockquote>
        </div>
      </section>
    </div>
  )
}
