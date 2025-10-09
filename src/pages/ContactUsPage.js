"use client"

import { useState } from "react"
import "../pages_css/ContactUsPage.css"
import Imagebg from "../images/principles/Principle5.jpg"
export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for contacting Map Sigma. We will get back to you shortly.")
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: "",
      message: "",
    })
  }

  const values = [
    {
      icon: "🎯",
      title: "Clarity",
      description: "We provide transparent insights and clear communication at every step of your investment journey.",
    },
    {
      icon: "🛡️",
      title: "Trust",
      description:
        "Built on principles of integrity and accountability, we safeguard your legacy with unwavering commitment.",
    },
    {
      icon: "🌟",
      title: "Excellence",
      description:
        "We pursue excellence in every decision, combining institutional precision with entrepreneurial agility.",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="contactus-hero">
        <img
          src={Imagebg}
          alt="Map Sigma Office"
          className="contactus-hero-background"
        />
        <div className="contactus-hero-overlay"></div>
        <div className="contactus-hero-content">
          <h1 className="contactus-hero-title">Get in Touch</h1>
          <p className="contactus-hero-subtitle">
            Where trust is earned and legacy is built together. Connect with our team to discuss how we can help secure
            your financial future.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="contactus-section">
        <div className="contactus-container">
          <div className="contactus-grid">
            {/* Contact Form */}
            <div className="contactus-form-wrapper">
              <h2 className="contactus-form-title">Start a Conversation</h2>
              <p className="contactus-form-description">
                Whether you're looking to invest, partner, or learn more about our approach, we're here to help.
              </p>

              <form className="contactus-form" onSubmit={handleSubmit}>
                <div className="contactus-form-group">
                  <label htmlFor="firstName" className="contactus-form-label">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="contactus-form-input"
                    required
                  />
                </div>

                <div className="contactus-form-group">
                  <label htmlFor="lastName" className="contactus-form-label">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="contactus-form-input"
                    required
                  />
                </div>

                <div className="contactus-form-group">
                  <label htmlFor="email" className="contactus-form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="contactus-form-input"
                    required
                  />
                </div>

                <div className="contactus-form-group">
                  <label htmlFor="phone" className="contactus-form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contactus-form-input"
                  />
                </div>

                <div className="contactus-form-group">
                  <label htmlFor="company" className="contactus-form-label">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="contactus-form-input"
                  />
                </div>

                <div className="contactus-form-group">
                  <label htmlFor="inquiryType" className="contactus-form-label">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="contactus-form-select"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="investment">Investment Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="career">Career Opportunities</option>
                    <option value="media">Media & Press</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className="contactus-form-group">
                  <label htmlFor="message" className="contactus-form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="contactus-form-textarea"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="contactus-form-button">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contactus-info-wrapper">
              <h2 className="contactus-info-title">Contact Information</h2>

              <div className="contactus-info-card">
                <h3 className="contactus-info-card-title">Headquarters</h3>
                <p className="contactus-info-card-content">
                  Map Sigma Capital
                  <br />
                  Financial District
                  <br />
                  Singapore 048583
                </p>
              </div>

              <div className="contactus-info-card">
                <h3 className="contactus-info-card-title">Email</h3>
                <p className="contactus-info-card-content">
                  <a href="mailto:contact@mapsigma.com" className="contactus-info-card-link">
                    contact@mapsigma.com
                  </a>
                </p>
              </div>

              <div className="contactus-info-card">
                <h3 className="contactus-info-card-title">Phone</h3>
                <p className="contactus-info-card-content">
                  <a href="tel:+6562345678" className="contactus-info-card-link">
                    +65 6234 5678
                  </a>
                </p>
              </div>

              <div className="contactus-info-card">
                <h3 className="contactus-info-card-title">Investor Relations</h3>
                <p className="contactus-info-card-content">
                  <a href="mailto:investors@mapsigma.com" className="contactus-info-card-link">
                    investors@mapsigma.com
                  </a>
                </p>
              </div>

              <div className="contactus-info-hours">
                <h3 className="contactus-info-hours-title">Office Hours</h3>
                <ul className="contactus-info-hours-list">
                  <li className="contactus-info-hours-item">
                    <span className="contactus-info-hours-day">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="contactus-info-hours-item">
                    <span className="contactus-info-hours-day">Saturday</span>
                    <span>By Appointment</span>
                  </li>
                  <li className="contactus-info-hours-item">
                    <span className="contactus-info-hours-day">Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="contactus-values-section">
        <div className="contactus-container">
          <h2 className="contactus-values-title">Why Choose Map Sigma</h2>
          <div className="contactus-values-grid">
            {values.map((value, index) => (
              <div key={index} className="contactus-value-card">
                <div className="contactus-value-icon">{value.icon}</div>
                <h3 className="contactus-value-title">{value.title}</h3>
                <p className="contactus-value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
