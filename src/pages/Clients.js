import { useState } from "react"
import "../pages_css/Clients.css"

export default function ClientsPage() {
  const [activeTab, setActiveTab] = useState("all")

  const clientTypes = [
    { id: "all", label: "All Clients", count: "50+" },
    { id: "institutional", label: "Institutional", count: "25+" },
    { id: "family-office", label: "Family Offices", count: "15+" },
    { id: "corporations", label: "Corporations", count: "10+" }
  ]

  const testimonials = [
    {
      quote: "MAPSIGMA's strategic insight and principled approach transformed our investment portfolio. Their team's deep understanding of market dynamics is unmatched.",
      author: "Michael Chen",
      position: "Chief Investment Officer",
      company: "Heritage Capital Group",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
    },
    {
      quote: "Working with MAPSIGMA has been a game-changer for our family office. They understand our long-term vision and deliver results with integrity.",
      author: "Sarah Thompson",
      position: "Managing Director",
      company: "Thompson Family Office",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
    },
    {
      quote: "The level of personalized service and strategic guidance we receive is exceptional. MAPSIGMA truly partners with us for generational success.",
      author: "David Rodriguez",
      position: "CEO",
      company: "Quantum Ventures",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
    }
  ]

  const clientLogos = [
    { name: "TechCorp Global", logo: "🏢" },
    { name: "Quantum Capital", logo: "💼" },
    { name: "Heritage Investments", logo: "🏛️" },
    { name: "Phoenix Holdings", logo: "🔥" },
    { name: "Atlas Ventures", logo: "🌍" },
    { name: "Summit Capital", logo: "⛰️" },
    { name: "Meridian Group", logo: "🧭" },
    { name: "Zenith Partners", logo: "✨" }
  ]

  const whyChooseUs = [
    {
      icon: "🎯",
      title: "Personalized Strategy",
      description: "Tailored investment approaches aligned with your unique goals and risk tolerance"
    },
    {
      icon: "📊",
      title: "Proven Track Record",
      description: "Consistent performance and value creation across market cycles"
    },
    {
      icon: "🔒",
      title: "Trust & Transparency",
      description: "Clear communication and complete visibility into your investments"
    },
    {
      icon: "🌱",
      title: "Long-Term Focus",
      description: "Building sustainable wealth for current and future generations"
    }
  ]

  const servicesList = [
    {
      title: "Portfolio Management",
      description: "Comprehensive investment strategies tailored to your objectives",
      features: ["Asset Allocation", "Risk Management", "Performance Monitoring"]
    },
    {
      title: "Strategic Advisory",
      description: "Expert guidance on complex financial decisions and opportunities",
      features: ["Market Analysis", "Investment Planning", "Wealth Structuring"]
    },
    {
      title: "Family Office Services",
      description: "Holistic wealth management for multi-generational prosperity",
      features: ["Estate Planning", "Tax Optimization", "Legacy Building"]
    }
  ]

  return (
    <div className="clients-page">
      {/* Hero Section */}
      <section className="clients-hero">
        <div className="clients-hero-bg">
          <div className="clients-hero-overlay"></div>
        </div>
        <div className="clients-hero-container">
          <div className="clients-hero-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L10 6L14 6.5L11 9.5L12 14L8 11.5L4 14L5 9.5L2 6.5L6 6L8 2Z" fill="currentColor"/>
            </svg>
            <span>Trusted Partners</span>
          </div>
          <h1 className="clients-hero-title">
            Building Wealth Through <span className="clients-highlight">Trusted Partnerships</span>
          </h1>
          <p className="clients-hero-subtitle">
            We work with leading institutions, family offices, and corporations worldwide, 
            delivering strategic investment solutions grounded in clarity, discipline, and long-term value.
          </p>
          <div className="clients-hero-cta">
            <button className="clients-btn clients-btn-primary">Become a Client</button>
            <button className="clients-btn clients-btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="clients-types">
        <div className="clients-types-container">
          <h2 className="clients-section-title">Who We Serve</h2>
          <div className="clients-tabs">
            {clientTypes.map(type => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`clients-tab ${activeTab === type.id ? 'clients-tab-active' : ''}`}
              >
                <span className="clients-tab-label">{type.label}</span>
                <span className="clients-tab-count">{type.count}</span>
              </button>
            ))}
          </div>
          <div className="clients-types-content">
            <div className="clients-types-grid">
              <div className="clients-type-card">
                <div className="clients-type-icon">🏛️</div>
                <h3>Institutional Investors</h3>
                <p>Pension funds, endowments, and foundations seeking consistent, risk-adjusted returns</p>
                <ul className="clients-type-features">
                  <li>Large-scale portfolio management</li>
                  <li>Regulatory compliance expertise</li>
                  <li>Custom reporting and analytics</li>
                </ul>
              </div>
              <div className="clients-type-card">
                <div className="clients-type-icon">👨‍👩‍👧‍👦</div>
                <h3>Family Offices</h3>
                <p>Multi-generational wealth preservation and growth strategies for ultra-high-net-worth families</p>
                <ul className="clients-type-features">
                  <li>Holistic wealth management</li>
                  <li>Legacy planning and succession</li>
                  <li>Private investment opportunities</li>
                </ul>
              </div>
              <div className="clients-type-card">
                <div className="clients-type-icon">🏢</div>
                <h3>Corporations</h3>
                <p>Strategic capital management and treasury solutions for forward-thinking enterprises</p>
                <ul className="clients-type-features">
                  <li>Corporate treasury management</li>
                  <li>Strategic investment planning</li>
                  <li>Liquidity optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="clients-logos">
        <div className="clients-logos-container">
          <h2 className="clients-section-title">Trusted By Industry Leaders</h2>
          <p className="clients-section-subtitle">
            Partnering with forward-thinking organizations across sectors
          </p>
          <div className="clients-logos-grid">
            {clientLogos.map((client, index) => (
              <div key={index} className="clients-logo-card">
                <div className="clients-logo-icon">{client.logo}</div>
                <div className="clients-logo-name">{client.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="clients-why-choose">
        <div className="clients-why-container">
          <div className="clients-why-content">
            <h2 className="clients-section-title">Why Clients Choose MAPSIGMA</h2>
            <p className="clients-section-text">
              Our commitment to excellence, transparency, and long-term value creation sets us apart. 
              We don't just manage investments—we build lasting partnerships based on trust and results.
            </p>
            <div className="clients-why-grid">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="clients-why-card">
                  <div className="clients-why-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="clients-why-visual">
            <div className="clients-stats-card">
              <div className="clients-stat-item">
                <div className="clients-stat-number">$8B+</div>
                <div className="clients-stat-label">Assets Under Management</div>
              </div>
              <div className="clients-stat-item">
                <div className="clients-stat-number">50+</div>
                <div className="clients-stat-label">Global Clients</div>
              </div>
              <div className="clients-stat-item">
                <div className="clients-stat-number">15+</div>
                <div className="clients-stat-label">Years Experience</div>
              </div>
              <div className="clients-stat-item">
                <div className="clients-stat-number">98%</div>
                <div className="clients-stat-label">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="clients-services">
        <div className="clients-services-container">
          <h2 className="clients-section-title">Our Client Services</h2>
          <div className="clients-services-grid">
            {servicesList.map((service, index) => (
              <div key={index} className="clients-service-card">
                <div className="clients-service-number">0{index + 1}</div>
                <h3 className="clients-service-title">{service.title}</h3>
                <p className="clients-service-description">{service.description}</p>
                <ul className="clients-service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="clients-service-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="clients-testimonials">
        <div className="clients-testimonials-container">
          <h2 className="clients-section-title">What Our Clients Say</h2>
          <div className="clients-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="clients-testimonial-card">
                <div className="clients-testimonial-quote">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M10 20c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10z" fill="#FFD700" opacity="0.2"/>
                    <path d="M15 15h-5v10h5v-5h5" stroke="#FFD700" strokeWidth="2" fill="none"/>
                  </svg>
                  <p>{testimonial.quote}</p>
                </div>
                <div className="clients-testimonial-author">
                  <img src={testimonial.image} alt={testimonial.author} />
                  <div className="clients-testimonial-info">
                    <div className="clients-testimonial-name">{testimonial.author}</div>
                    <div className="clients-testimonial-position">{testimonial.position}</div>
                    <div className="clients-testimonial-company">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="clients-cta">
        <div className="clients-cta-container">
          <h2>Ready to Partner With Us?</h2>
          <p>Join leading institutions and families who trust MAPSIGMA for strategic investment excellence</p>
          <button className="clients-cta-btn">
            Schedule a Consultation
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </section>
    </div>
  )
}