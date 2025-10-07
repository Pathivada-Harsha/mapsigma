import { useState } from "react"
import "../pages_css/Alumni.css"

export default function AlumniPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    yearJoined: "",
    yearLeft: "",
    currentCompany: "",
    currentPosition: "",
    linkedIn: "",
    message: ""
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        yearJoined: "",
        yearLeft: "",
        currentCompany: "",
        currentPosition: "",
        linkedIn: "",
        message: ""
      })
    }, 3000)
  }

  const alumniStats = [
    { number: "200+", label: "Alumni Network" },
    { number: "50+", label: "Countries" },
    { number: "15+", label: "Years Legacy" }
  ]

  const benefits = [
    {
      icon: "🤝",
      title: "Network",
      description: "Connect with former colleagues and expand your professional network"
    },
    {
      icon: "📚",
      title: "Resources",
      description: "Access exclusive industry insights and career development resources"
    },
    {
      icon: "🎯",
      title: "Events",
      description: "Join alumni gatherings, webinars, and networking events"
    },
    {
      icon: "💼",
      title: "Opportunities",
      description: "Get notified about career opportunities and collaborations"
    }
  ]

  return (
    <div className="alumni-page">
      {/* Hero Section */}
      <section className="alumni-hero">
        <div className="alumni-hero-container">
          <div className="alumni-hero-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L10 6L14 6.5L11 9.5L12 14L8 11.5L4 14L5 9.5L2 6.5L6 6L8 2Z" fill="currentColor"/>
            </svg>
            <span>Alumni Network</span>
          </div>
          <h1 className="alumni-hero-title">
            Once MAPSIGMA, <span className="alumni-highlight">Always Family</span>
          </h1>
          <p className="alumni-hero-subtitle">
            Join our growing community of alumni making impact across the investment world. 
            Stay connected, share experiences, and continue the journey together.
          </p>
          <div className="alumni-hero-stats">
            {alumniStats.map((stat, index) => (
              <div key={index} className="alumni-stat">
                <div className="alumni-stat-number">{stat.number}</div>
                <div className="alumni-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="alumni-benefits">
        <div className="alumni-benefits-container">
          <h2 className="alumni-section-title">Alumni Benefits</h2>
          <div className="alumni-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="alumni-benefit-card">
                <div className="alumni-benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="alumni-register">
        <div className="alumni-register-container">
          <div className="alumni-register-info">
            <h2 className="alumni-section-title">Join Our Alumni Network</h2>
            <p className="alumni-section-text">
              Register to stay connected with MAPSIGMA and fellow alumni. Keep your 
              professional network strong and be part of our continued success story.
            </p>
            <div className="alumni-info-cards">
              <div className="alumni-info-card">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" stroke="#004225" strokeWidth="2" fill="none"/>
                  <path d="M16 8v8l4 4" stroke="#004225" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div>
                  <h4>Quick Registration</h4>
                  <p>Takes less than 3 minutes to complete</p>
                </div>
              </div>
              <div className="alumni-info-card">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 4L20 12L28 13L22 19L24 28L16 23L8 28L10 19L4 13L12 12L16 4Z" stroke="#004225" strokeWidth="2" fill="none"/>
                </svg>
                <div>
                  <h4>Exclusive Access</h4>
                  <p>Get access to alumni-only events and resources</p>
                </div>
              </div>
              <div className="alumni-info-card">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M8 16h16M16 8v16" stroke="#004225" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="16" cy="16" r="12" stroke="#004225" strokeWidth="2" fill="none"/>
                </svg>
                <div>
                  <h4>Stay Updated</h4>
                  <p>Receive news, updates, and opportunities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="alumni-register-form-wrapper">
            <div className="alumni-form-card">
              <h3 className="alumni-form-title">Registration Form</h3>
              <p className="alumni-form-subtitle">Please fill in your details below</p>

              <div className="alumni-form">
                <div className="alumni-form-row">
                  <div className="alumni-form-group">
                    <label className="alumni-label">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="alumni-input"
                      placeholder="John"
                    />
                  </div>
                  <div className="alumni-form-group">
                    <label className="alumni-label">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="alumni-input"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="alumni-form-row">
                  <div className="alumni-form-group">
                    <label className="alumni-label">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="alumni-input"
                      placeholder="john.doe@email.com"
                    />
                  </div>
                  <div className="alumni-form-group">
                    <label className="alumni-label">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="alumni-input"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="alumni-form-row">
                  <div className="alumni-form-group">
                    <label className="alumni-label">Year Joined MAPSIGMA *</label>
                    <input
                      type="text"
                      name="yearJoined"
                      value={formData.yearJoined}
                      onChange={handleChange}
                      className="alumni-input"
                      placeholder="2020"
                    />
                  </div>
                  <div className="alumni-form-group">
                    <label className="alumni-label">Year Left MAPSIGMA *</label>
                    <input
                      type="text"
                      name="yearLeft"
                      value={formData.yearLeft}
                      onChange={handleChange}
                      className="alumni-input"
                      placeholder="2024"
                    />
                  </div>
                </div>

                <div className="alumni-form-row">
                  <div className="alumni-form-group">
                    <label className="alumni-label">Current Company</label>
                    <input
                      type="text"
                      name="currentCompany"
                      value={formData.currentCompany}
                      onChange={handleChange}
                      className="alumni-input"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="alumni-form-group">
                    <label className="alumni-label">Current Position</label>
                    <input
                      type="text"
                      name="currentPosition"
                      value={formData.currentPosition}
                      onChange={handleChange}
                      className="alumni-input"
                      placeholder="Senior Analyst"
                    />
                  </div>
                </div>

                <div className="alumni-form-group">
                  <label className="alumni-label">LinkedIn Profile</label>
                  <input
                    type="url"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleChange}
                    className="alumni-input"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div className="alumni-form-group">
                  <label className="alumni-label">Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="alumni-textarea"
                    rows="4"
                    placeholder="Share your experience at MAPSIGMA or what you're up to now..."
                  />
                </div>

                <button 
                  onClick={handleSubmit}
                  className="alumni-submit-btn"
                >
                  {isSubmitted ? (
                    <>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Successfully Registered!
                    </>
                  ) : (
                    <>
                      Register Now
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </>
                  )}
                </button>

                <p className="alumni-form-note">
                  * Required fields. Your information will be kept confidential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="alumni-cta">
        <div className="alumni-cta-container">
          <h2>Questions About Alumni Network?</h2>
          <p>Reach out to our alumni relations team for more information</p>
          <a href="mailto:alumni@mapsigma.com" className="alumni-cta-btn">
            Contact Alumni Relations
          </a>
        </div>
      </section>
    </div>
  )
}