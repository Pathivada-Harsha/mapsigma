import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from "../images/logo1.png";

const Navbar = ({ logoSrc, logoAlt = "MAPSIGMA CAPITAL" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const mainMenuItems = [
    { name: 'RESEARCH & INSIGHTS', path: '/' },
    { name: 'CULTURE', path: '/culture' },
    { name: 'PRINCIPLES', path: '/principles' },
    { name: 'PEOPLE', path: '/people' },
    { name: 'TECHNOLOGY', path: '/technology' },
    { name: 'LIFE AT MAPSIGMA', path: '/life-at-mapsigma' },
    { name: 'OUR FOUNDER', path: '/our-founder' }
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="custom-navbar fixed-top">
        {/* Top Section: Logo + Buttons */}
        <div className="navbar-top-row">
          <div className="container-fluid px-4 px-lg-5">
            <div className="row align-items-center">
              {/* Logo - Left Side */}
              <div className="col-6 col-lg-auto">
                <NavLink to="/" className="logo-link" >
                  <img
                    src={logo1}
                    alt={logoAlt}
                    className="navbar-logo"
                  />
                </NavLink>
              </div>

              {/* Buttons - Right Side (Desktop) */}
              <div className="col-6 col-lg d-flex justify-content-end align-items-center">
                {/* Desktop Buttons */}
                <div className="d-none d-lg-flex align-items-center ms-auto top-buttons-custom-margin">
                  <NavLink to="/newsletter" className="top-btn newsletter-button">
                    <span className="me-1"><i className="bi bi-envelope"></i></span>
                    <span>NEWSLETTER</span>
                  </NavLink>
                  <NavLink to="/clients" className="top-btn clients-button">
                    CLIENTS
                  </NavLink>
                  <NavLink to="/alumni" className="top-btn alumni-button">
                    ALUMNI
                  </NavLink>
                </div>

                {/* Mobile Toggle */}
                <button
                  className="mobile-toggle d-lg-none"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  {!isMenuOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <span style={{ fontSize: '24px' }}>✕</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Navigation Menu (Desktop) */}
        <div className="navbar-bottom-row d-none d-lg-block">
          <div className="container-fluid px-4 px-lg-5">
            <div className="d-flex align-items-center">
              {mainMenuItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `bottom-nav-link${isActive ? " active" : ""}`
                  }
                >
                  {item.name}
                </NavLink>

              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-dropdown d-lg-none">
            <div className="container-fluid px-4">
              {/* Mobile Navigation Links */}
              <div className="mobile-nav-section">
                {mainMenuItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <NavLink
                      to={item.path}
                      className="mobile-nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                    {index < mainMenuItems.length - 1 && (
                      <div className="mobile-divider"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Mobile Buttons */}
              <div className="mobile-buttons-section">
                <NavLink
                  to="/newsletter"
                  className="mobile-btn mobile-newsletter"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="me-2">✉</span>
                  NEWSLETTER
                </NavLink>
                <NavLink
                  to="/clients"
                  className="mobile-btn mobile-clients"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CLIENTS
                </NavLink>
                <NavLink
                  to="/alumni"
                  className="mobile-btn mobile-alumni"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ALUMNI
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div style={{ height: '100px' }}></div>

      <style>{`
        /* Main Navbar Container */

        // @media (min-width:1440px){
        //     .logo-link {
        //               margin-left:250px
        //             }
                
        //     .top-buttons-custom-margin{
        //                 margin-right:100px
        //             }
        //     .navbar-bottom-row {
        //               padding-left:280px ;
        //             }
        // }

        .custom-navbar {
          background: #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.08);
          z-index: 1000;
        }

        /* TOP ROW: Logo + Buttons */
        .navbar-top-row {
          background: #ffffff;
          border-bottom: 1px solid #e5e5e5;
          padding: 20px 0;
          
        }

        /* Logo */
        .logo-link {
          display: inline-block;
          text-decoration: none;
          // margin-left:250px
        }

        // .top-buttons-custom-margin{
        //     margin-right:100px
        // }

        .navbar-logo {
          height: 52px;
          width: auto;
          display: block;
        }

        /* Top Buttons (Newsletter, Clients, Alumni) */
        .top-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 11px 24px;
          transition: all 0.2s ease;
          white-space: nowrap;
          margin-left: 5px;

        }

        .newsletter-button {
          background: transparent;
          color: #888888;
          font-weight: 600;
          padding-left: 20px;
          padding-right: 20px;
        }

        .newsletter-button:hover {
          color: #004225;
        }
        .bottom-nav-link.active {
          color:#004225; 
            
        }
        .clients-button {
          background: #8B4513;
          color: #ffffff;
        }

        .clients-button:hover {
          background: #7a3a10;
        }

        .alumni-button {
          background: #2c2c2c;
          color: #ffffff;
          
        }

        .alumni-button:hover {
          background: #1a1a1a;
        }

        /* Mobile Toggle Button */
        .mobile-toggle {
          background: none;
          border: none;
          color: #2c2c2c;
          cursor: pointer;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-toggle:focus {
          outline: none;
        }

        /* BOTTOM ROW: Navigation Links */
        .navbar-bottom-row {
          background: #f5f5f5;
          border-bottom: 1px solid #e5e5e5;
          // padding-left:280px ;
        }

        .bottom-nav-link {
          display: inline-block;
          color: #2c2c2c;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 17px 0;
          margin-right: 48px;
          transition: color 0.2s ease;
          white-space: nowrap;
        }

        .bottom-nav-link:hover {
          color: #004225;
        }

        .bottom-nav-link:last-child {
          margin-right: 0;
        }

        /* MOBILE MENU */
        .mobile-dropdown {
          background: #ffffff;
          border-top: 1px solid #e5e5e5;
          border-bottom: 1px solid #e5e5e5;
        }

        .mobile-nav-section {
          padding: 16px 0;
        }

        .mobile-nav-link {
          display: block;
          color: #2c2c2c;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 14px 0;
          transition: color 0.2s ease;
        }

        .mobile-nav-link:hover {
          color: #004225;
        }

        .mobile-divider {
          height: 1px;
          background: #f0f0f0;
        }

        .mobile-buttons-section {
          padding: 20px 0;
          border-top: 1px solid #f0f0f0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mobile-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 12px 20px;
          border-radius: 0;
          transition: all 0.2s ease;
        }

        .mobile-newsletter {
          background: transparent;
          border: 1px solid #d0d0d0;
          color: #888888;
        }

        .mobile-clients {
          background: #8B4513;
          color: #ffffff;
        }

        .mobile-alumni {
          background: #2c2c2c;
          color: #ffffff;
        }

        /* Responsive Adjustments */
        @media (max-width: 991px) {
          .navbar-logo {
            height: 42px;
          }

          .navbar-top-row {
            padding: 12px 0;
          }
        }

        @media (max-width: 576px) {
          .navbar-logo {
            height: 38px;
          }
        }
                
      `}</style>
    </>
  );
};

export default Navbar;