"use client"
import { useEffect, useRef, useState } from "react"
import "../../components_css/documents/privacy_policy.css"
const PrivacyPolicyPage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
     

      <div className="privacy-policy1-page">
        {/* Header */}
        <header className="privacy-policy1-header">
          <div className="privacy-policy1-header-content">
            <h1 className="privacy-policy1-title">Privacy Policy</h1>
            <p className="privacy-policy1-subtitle">
              MAPSIGMA Capital
              <br />
              <a 
                href="https://mapsigma.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="privacy-policy1-website-link"
              >
                https://mapsigma.com
              </a>
            </p>
            <p className="privacy-policy1-last-updated">Last Updated: January 2025</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="privacy-policy1-container">
          {/* Overview */}
          <section className="privacy-policy1-section">
            <h2 className="privacy-policy1-section-title">Overview</h2>
            <p className="privacy-policy1-text">
              At MAPSIGMA Capital ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>https://mapsigma.com/</strong>, use our financial services and solutions, or interact with us in any capacity.
            </p>
            <p className="privacy-policy1-text">
              As a leading financial services provider specializing in investment solutions and capital management, we understand the critical importance of data privacy and are committed to maintaining the highest standards of data protection in compliance with applicable privacy laws and regulations, including the Information Technology Act, 2000, and other relevant Indian and international data protection standards.
            </p>
          </section>

          {/* Information Collection */}
          <section className="privacy-policy1-section">
            <h2 className="privacy-policy1-section-title">Information We Collect</h2>
            
            <h3 className="privacy-policy1-section-subtitle">Personal Information</h3>
            <p className="privacy-policy1-text">
              When you visit mapsigma.com or engage with our services, we may collect the following types of personal information:
            </p>
            <ul className="privacy-policy1-list">
              <li className="privacy-policy1-list-item">
                <strong>Contact Information:</strong> Full name, email address, phone number, mailing address, company details
              </li>
              <li className="privacy-policy1-list-item">
                <strong>Professional Information:</strong> Company name, job title, industry sector, business requirements, investment specifications
              </li>
              <li className="privacy-policy1-list-item">
                <strong>Account Information:</strong> Username, password, account preferences, service configurations, and user settings
              </li>
              <li className="privacy-policy1-list-item">
                <strong>Communication Data:</strong> Records of your communications with us, including emails, phone calls, chat logs, support tickets, and consultation requests
              </li>
              <li className="privacy-policy1-list-item">
                <strong>Investment Information:</strong> Financial requirements, investment specifications, portfolio data, and investment preferences
              </li>
              <li className="privacy-policy1-list-item">
                <strong>Payment Information:</strong> Billing address, payment method details, transaction history (processed securely through third-party payment processors)
              </li>
            </ul>

            <h3 className="privacy-policy1-section-subtitle">Technical Information</h3>
            <p className="privacy-policy1-text">We automatically collect certain technical information when you use our website and services:</p>
            <ul className="privacy-policy1-list">
              <li className="privacy-policy1-list-item">
                <strong>Device Information:</strong> IP address, browser type and version, operating system, device identifiers
              </li>
              <li className="privacy-policy1-list-item">
                <strong>Usage Data:</strong> Pages visited, time spent on pages, click-through rates, referral sources, search queries
              </li>
              <li className="privacy-policy1-list-item">
                <strong>Location Data:</strong> General geographic location based on IP address for service optimization
              </li>
              <li className="privacy-policy1-list-item">
                <strong>Cookies and Tracking Data:</strong> Website preferences, session information, analytics data
              </li>
            </ul>
          </section>

          {/* Information Use */}
          <section className="privacy-policy1-section">
            <h2 className="privacy-policy1-section-title">How We Use Your Information</h2>
            <p className="privacy-policy1-text">We use the collected information for the following legitimate business purposes:</p>

            <div className="privacy-policy1-grid">
              <div className="privacy-policy1-card">
                <h4 className="privacy-policy1-card-title">Service Delivery & Management</h4>
                <p className="privacy-policy1-card-text">
                  To provide, maintain, and improve our financial services, investment solutions, and capital management offerings
                </p>
              </div>
              <div className="privacy-policy1-card">
                <h4 className="privacy-policy1-card-title">Customer Communication</h4>
                <p className="privacy-policy1-card-text">
                  To respond to inquiries, provide customer support, send investment updates, and deliver important service notifications
                </p>
              </div>
              <div className="privacy-policy1-card">
                <h4 className="privacy-policy1-card-title">Personalization</h4>
                <p className="privacy-policy1-card-text">
                  To personalize your experience and tailor our services to your specific investment requirements and preferences
                </p>
              </div>
              <div className="privacy-policy1-card">
                <h4 className="privacy-policy1-card-title">Analytics & Optimization</h4>
                <p className="privacy-policy1-card-text">
                  To analyze usage patterns, improve website performance, optimize user experience, and enhance our service offerings
                </p>
              </div>
              <div className="privacy-policy1-card">
                <h4 className="privacy-policy1-card-title">Research & Development</h4>
                <p className="privacy-policy1-card-text">
                  To conduct research, develop new investment strategies, and advance our financial capabilities
                </p>
              </div>
              <div className="privacy-policy1-card">
                <h4 className="privacy-policy1-card-title">Legal Compliance</h4>
                <p className="privacy-policy1-card-text">
                  To comply with legal obligations, protect our rights, ensure data security, and prevent fraudulent activities
                </p>
              </div>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="privacy-policy1-section">
            <h2 className="privacy-policy1-section-title">Information Sharing and Disclosure</h2>
            <p className="privacy-policy1-text">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following specific and limited circumstances:
            </p>

            <div className="privacy-policy1-info-block">
              <h4 className="privacy-policy1-section-subheading">Trusted Service Providers</h4>
              <p className="privacy-policy1-text">
                With carefully vetted third-party service providers who assist us in operating our business, such as cloud hosting providers, payment processors, email services, and analytics platforms. All such providers are bound by strict confidentiality agreements.
              </p>
            </div>

            <div className="privacy-policy1-info-block">
              <h4 className="privacy-policy1-section-subheading">Legal and Regulatory Requirements</h4>
              <p className="privacy-policy1-text">
                When required by Indian law, court orders, government regulations, or legal processes, or to protect our rights, property, safety, or that of our users and employees.
              </p>
            </div>

            <div className="privacy-policy1-info-block">
              <h4 className="privacy-policy1-section-subheading">Business Transfers</h4>
              <p className="privacy-policy1-text">
                In connection with a merger, acquisition, or sale of assets, where your information may be transferred as part of the business transaction, subject to the same privacy protections.
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section className="privacy-policy1-section">
            <h2 className="privacy-policy1-section-title">Data Security</h2>
            <p className="privacy-policy1-text">
              We implement comprehensive technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security approach includes:
            </p>
            <ul className="privacy-policy1-list">
              <li className="privacy-policy1-list-item">
                <strong>Data Encryption:</strong> End-to-end encryption of data in transit using SSL/TLS protocols and encryption of data at rest
              </li>
              <li className="privacy-policy1-list-item">
                <strong>Access Controls:</strong> Multi-factor authentication, role-based access controls, and principle of least privilege
              </li>
              <li className="privacy-policy1-list-item">
                <strong>Security Monitoring:</strong> 24/7 security monitoring, intrusion detection systems, and real-time alerts
              </li>
              <li className="privacy-policy1-list-item">
                <strong>Regular Assessments:</strong> Periodic security audits, vulnerability assessments, and penetration testing
              </li>
              <li className="privacy-policy1-list-item">
                <strong>Employee Training:</strong> Comprehensive data protection training and security awareness programs
              </li>
            </ul>
            <div className="privacy-policy1-highlight">
              <p className="privacy-policy1-text">
                While we implement industry-leading security measures, no method of transmission over the internet is 100% secure. We are committed to maintaining the highest level of protection possible and will promptly notify you of any security incidents that may affect your personal information.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="privacy-policy1-section">
            <h2 className="privacy-policy1-section-title">Cookies and Tracking Technologies</h2>
            <p className="privacy-policy1-text">
              We use cookies and similar tracking technologies to enhance your browsing experience on mapsigma.com, analyze website usage, and provide personalized content and services.
            </p>

            <h3 className="privacy-policy1-section-subtitle">Types of Cookies We Use:</h3>
            <div className="privacy-policy1-grid">
              <div className="privacy-policy1-card">
                <h4 className="privacy-policy1-card-title">Essential Cookies</h4>
                <p className="privacy-policy1-card-text">
                  Required for basic website functionality, security, and core features
                </p>
              </div>
              <div className="privacy-policy1-card">
                <h4 className="privacy-policy1-card-title">Performance Cookies</h4>
                <p className="privacy-policy1-card-text">
                  Help us understand visitor interactions to improve website performance
                </p>
              </div>
              <div className="privacy-policy1-card">
                <h4 className="privacy-policy1-card-title">Functional Cookies</h4>
                <p className="privacy-policy1-card-text">
                  Remember your preferences and settings for a personalized experience
                </p>
              </div>
              <div className="privacy-policy1-card">
                <h4 className="privacy-policy1-card-title">Analytics Cookies</h4>
                <p className="privacy-policy1-card-text">
                  Collect information about website usage and help us improve our services
                </p>
              </div>
            </div>

            <div className="privacy-policy1-highlight">
              <p className="privacy-policy1-text">
                <strong>Cookie Management:</strong> You can control cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website.
              </p>
            </div>
          </section>

          {/* User Rights */}
          <section className="privacy-policy1-section">
            <h2 className="privacy-policy1-section-title">Your Rights and Choices</h2>
            <p className="privacy-policy1-text">
              Under applicable data protection laws, you have the following rights regarding your personal information:
            </p>

            <div className="privacy-policy1-grid">
              <div className="privacy-policy1-card">
                <h4 className="privacy-policy1-card-title">Right to Access</h4>
                <p className="privacy-policy1-card-text">
                  Request access to the personal information we hold about you
                </p>
              </div>
              <div className="privacy-policy1-card">
                <h4 className="privacy-policy1-card-title">Right to Correction</h4>
                <p className="privacy-policy1-card-text">
                  Request correction of inaccurate or incomplete personal information
                </p>
              </div>
              <div className="privacy-policy1-card">
                <h4 className="privacy-policy1-card-title">Right to Deletion</h4>
                <p className="privacy-policy1-card-text">
                  Request deletion of your personal information, subject to legal requirements
                </p>
              </div>
              <div className="privacy-policy1-card">
                <h4 className="privacy-policy1-card-title">Right to Data Portability</h4>
                <p className="privacy-policy1-card-text">
                  Request transfer of your information in a structured, machine-readable format
                </p>
              </div>
              <div className="privacy-policy1-card">
                <h4 className="privacy-policy1-card-title">Right to Opt-out</h4>
                <p className="privacy-policy1-card-text">
                  Unsubscribe from marketing communications and promotional emails
                </p>
              </div>
              <div className="privacy-policy1-card">
                <h4 className="privacy-policy1-card-title">Right to Restriction</h4>
                <p className="privacy-policy1-card-text">
                  Request restriction of processing under certain circumstances
                </p>
              </div>
            </div>

            <div className="privacy-policy1-highlight">
              <p className="privacy-policy1-text">
                <strong>Exercising Your Rights:</strong> To exercise any of these rights, please contact us using the information provided in the Contact Us section. We will respond within 30 days.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section className="privacy-policy1-section">
            <h2 className="privacy-policy1-section-title">Data Retention</h2>
            <p className="privacy-policy1-text">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. Retention periods vary depending on the type of information:
            </p>
            <ul className="privacy-policy1-list">
              <li className="privacy-policy1-list-item">
                <strong>Account Information:</strong> Retained for the duration of your account relationship plus 3 years after closure
              </li>
              <li className="privacy-policy1-list-item">
                <strong>Investment and Service Data:</strong> Retained for service duration plus 7 years for legal and regulatory purposes
              </li>
              <li className="privacy-policy1-list-item">
                <strong>Communication Records:</strong> Retained for 5 years for customer service and quality assurance
              </li>
              <li className="privacy-policy1-list-item">
                <strong>Payment Data:</strong> Retained as required by Indian tax and accounting laws, typically 7-10 years
              </li>
              <li className="privacy-policy1-list-item">
                <strong>Marketing Data:</strong> Retained until you opt-out or for 2 years of inactivity
              </li>
            </ul>
          </section>

          {/* Additional Sections */}
          <section className="privacy-policy1-section">
            <h2 className="privacy-policy1-section-title">International Data Transfers</h2>
            <p className="privacy-policy1-text">
              Your personal information may be transferred to and processed in countries other than India. We ensure appropriate safeguards are in place, including standard contractual clauses and adequacy decisions by relevant authorities.
            </p>
          </section>

          <section className="privacy-policy1-section">
            <h2 className="privacy-policy1-section-title">Children's Privacy</h2>
            <p className="privacy-policy1-text">
              Our services are intended for businesses and individuals over 18. We do not knowingly collect information from children under 18. If you believe a child has provided us with information, please contact us immediately.
            </p>
          </section>

          <section className="privacy-policy1-section">
            <h2 className="privacy-policy1-section-title">Updates to This Privacy Policy</h2>
            <p className="privacy-policy1-text">
              We may update this Privacy Policy from time to time. We will notify you of material changes through email or prominent notices on our website. Your continued use of our services after changes indicates acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Section */}
          <section className="privacy-policy1-section">
            <div className="privacy-policy1-contact-section">
              <h2 className="privacy-policy1-section-title">Contact Us</h2>
              <p className="privacy-policy1-text">
                If you have any questions or concerns regarding this Privacy Policy, please contact us:
              </p>

              <div className="privacy-policy1-contact-grid">
                <div className="privacy-policy1-contact-card">
                  <h4 className="privacy-policy1-contact-label">Company</h4>
                  <p className="privacy-policy1-contact-value">
                    <strong>MAPSIGMA Capital</strong><br />
                    Registered in India
                  </p>
                </div>

                <div className="privacy-policy1-contact-card">
                  <h4 className="privacy-policy1-contact-label">Website</h4>
                  <p className="privacy-policy1-contact-value">
                    <a 
                      href="https://mapsigma.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="privacy-policy1-link"
                    >
                      https://mapsigma.com
                    </a>
                  </p>
                </div>

                <div className="privacy-policy1-contact-card">
                  <h4 className="privacy-policy1-contact-label">Privacy Inquiries</h4>
                  <p className="privacy-policy1-contact-value">
                    <a href="mailto:noreply@mapsigma.com" className="privacy-policy1-link">
                      noreply@mapsigma.com
                    </a>
                  </p>
                </div>

                <div className="privacy-policy1-contact-card">
                  <h4 className="privacy-policy1-contact-label">General Contact</h4>
                  <p className="privacy-policy1-contact-value">
                    <a href="mailto:info@mapsigma.com" className="privacy-policy1-link">
                      info@mapsigma.com
                    </a>
                  </p>
                </div>

                <div className="privacy-policy1-contact-card">
                  <h4 className="privacy-policy1-contact-label">Phone</h4>
                  <p className="privacy-policy1-contact-value">+91-63013 77549</p>
                </div>

                <div className="privacy-policy1-contact-card">
                  <h4 className="privacy-policy1-contact-label">Registered Address</h4>
                  <p className="privacy-policy1-contact-value">
                    133/1/B, 1st Floor Phase ll,<br />
                    IDA Cherlapally, Hyderabad<br />
                    India
                  </p>
                </div>
              </div>

              <div className="privacy-policy1-commitment">
                <h4 className="privacy-policy1-section-subheading">Our Response Commitment</h4>
                <p className="privacy-policy1-text">We are committed to addressing your privacy concerns:</p>
                <ul className="privacy-policy1-list">
                  <li className="privacy-policy1-list-item">We will acknowledge receipt of your inquiry within 48 hours</li>
                  <li className="privacy-policy1-list-item">We will provide a substantive response within 30 days</li>
                  <li className="privacy-policy1-list-item">For complex matters, we will keep you informed of our progress</li>
                  <li className="privacy-policy1-list-item">We will work diligently to resolve any privacy-related issues</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default PrivacyPolicyPage