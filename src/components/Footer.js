import React from 'react';
import logoPlaceholder from '../images/footer_logo_01.png'
import { NavLink } from 'react-router-dom';
const Footer = () => {

    return (
        <>
            <style>{`
        .footer-container {
          background: #ffffff;
          color: #1a1a1a;
          padding: 60px 0 0;
          border-top: 1px solid #e5e7eb;
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 10px;
        }

        .brand-section {
          margin-bottom: 40px;
        }

        .brand-logo {
          margin-bottom: 20px;
        }

        .logo-image {
          height: 60px;
          width: auto;
          object-fit: contain;
        }

        .brand-tagline {
          color: #6b7280;
          font-size: 14px;
          line-height: 1.6;
          max-width: 400px;
          margin: 0 0 24px 0;
          font-weight: 400;
      
        }

        .footer-section-title {
          color: #1a1a1a;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-links a {
          color: #6b7280;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s ease;
          font-weight: 400;
        }

        .footer-links a:hover {
          color: #1a1a1a;
        }

        .contact-info {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 16px;
          color: #6b7280;
          font-size: 14px;
        }

        .contact-icon {
          min-width: 32px;
          height: 32px;
          background: #f3f4f6;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 12px;
          color: #1a1a1a;
          font-size: 14px;
        }

        .contact-text {
          flex: 1;
          line-height: 1.6;
          padding-top: 4px;
        }

        .contact-text a {
          color: #6b7280;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .contact-text a:hover {
          color: #1a1a1a;
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-icon {
          width: 36px;
          height: 36px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          text-decoration: none;
          font-size: 16px;
          background: #f3f4f6;
          color: #1a1a1a;
        }

        .social-icon:hover {
          background: #e5e7eb;
          transform: translateY(-2px);
        }

        .footer-bottom {
          border-top: 1px solid #252627;
          margin-top: 50px;
          padding: 24px 0;
        }

        .copyright {
          color: #6b7280;
          font-size: 13px;
          margin: 0;
          font-weight: 400;
        }

        .footer-bottom-links {
          display: flex;
          gap: 24px;
          list-style: none;
          padding: 0;
          margin: 0;
          justify-content: flex-end;
        }

        .footer-bottom-links a {
          color: #6b7280;
          text-decoration: none;
          font-size: 13px;
          transition: color 0.2s ease;
        }

        .footer-bottom-links a:hover {
          color: #1a1a1a;
        }

        .footer-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 2fr;
          gap: 40px;
          margin-bottom: 20px;
        }

        .footer-bottom-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        @media (max-width: 992px) {
          .footer-row {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: 40px 0 0;
          }

          .footer-row {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-bottom-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .footer-bottom-links {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>

            <footer className="footer-container" style={{background:"#f0f0f0"}}>
                <div className="footer-content">
                    <div className="footer-row">
                        <div>
                            <div className="brand-section">
                                <div className="brand-logo">
                                    <img
                                        src={logoPlaceholder}
                                        alt="MAPSIGMA Capital"
                                        className="logo-image"
                                    />
                                </div>
                                <p className="brand-tagline">
                                    Leading investment firm providing innovative solutions for venture capital,
                                    portfolio management, and strategic financial advisory services.
                                </p>
                                <div className="social-links">
                                    <a href="#" className="social-icon" aria-label="Facebook">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="social-icon" aria-label="Instagram">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="social-icon" aria-label="YouTube">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="social-icon" aria-label="LinkedIn">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="social-icon" aria-label="Twitter">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="footer-section-title">Investments</h4>
                            <ul className="footer-links">
                                <li><a href="#">Portfolio Companies</a></li>
                                <li><NavLink to='/'>Research & Insights</NavLink></li>
                                <li><a href="#">Investment Strategy</a></li>
                                <li><a href="#">Sectors</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="footer-section-title">Company</h4>
                            <ul className="footer-links">
                                <li><NavLink to='/culture'>Culture</NavLink></li>
                                <li><NavLink to='/people'>People</NavLink></li>
                                <li><NavLink to='/principles'>Principles</NavLink></li>
                                <li><NavLink to='/LifeAtMapSigma'>Careers</NavLink></li>
                                <li><NavLink to='/Technology'>Technology</NavLink></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="footer-section-title">Contact</h4>
                            <ul className="contact-info">
                                <li className="contact-item">
                                    <div className="contact-icon">
                                        <i className="bi bi-telephone-fill"></i>
                                    </div>
                                    <div className="contact-text">
                                        <a href="tel:+15551234567">+1 (555) 123-4567</a>
                                    </div>
                                </li>

                                <li className="contact-item">
                                    <div className="contact-icon">
                                        <i className="bi bi-envelope-fill"></i>
                                    </div>
                                    <div className="contact-text">
                                        <a href="mailto:info@mapsigma.com">info@mapsigma.com</a>
                                    </div>
                                </li>

                                <li className="contact-item">
                                    <div className="contact-icon">
                                        <i className="bi bi-geo-alt-fill"></i>
                                    </div>
                                    <div className="contact-text">
                                        123 Financial District,<br />
                                        Mumbai, Maharashtra, India
                                    </div>
                                </li>

                                <li className="contact-item">
                                    <div className="contact-icon">
                                        <i className="bi bi-clock-fill"></i>
                                    </div>
                                    <div className="contact-text">
                                        Mon - Fri: 9:00 AM - 6:00 PM
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="footer-bottom">
                        <div className="footer-bottom-row">
                            <p className="copyright">
                                © 2025 MAPSIGMA Capital. All rights reserved.
                            </p>
                            <ul className="footer-bottom-links">
                                <li><NavLink to='/privacy-policy'>Privacy Policy</NavLink></li>
                                <li><NavLink to='/terms-conditions'>Terms & Conditions</NavLink></li>
                                <li><NavLink to='/cookie-policy'>Cookie Policy</NavLink></li>                                   
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;