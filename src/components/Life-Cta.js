import React from 'react';
import { Link } from 'react-router-dom';
import image from "../images/principles/PrincipleHome.png"

export default function LifeCta() {
    const life_cta_styles = {
        life_cta_container: {
            position: 'relative',
            width: '100%',
            height: '400px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
        },
        life_cta_backgroundImage: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
        },
        life_cta_overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 2,
        },
        life_cta_content: {
            position: 'relative',
            zIndex: 3,
            width: '100%',
            padding: '0 20px',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '100%',
        },
        life_cta_textWrapper: {
            maxWidth: '600px',
            marginLeft: '0',
            textAlign: 'left',
        },
        life_cta_heading: {
            fontSize: '48px',
            fontWeight: '400',
            color: '#ffffff',
            marginBottom: '24px',
            lineHeight: '1.2',
            fontFamily: 'Georgia, serif',
        },
        life_cta_description: {
            fontSize: '18px',
            color: '#ffffff',
            lineHeight: '1.6',
            marginBottom: '12px',
            opacity: '0.95',
        },
        life_cta_subDescription: {
            fontSize: '18px',
            color: '#ffffff',
            lineHeight: '1.6',
            marginBottom: '32px',
            opacity: '0.95',
        },
        life_cta_button: {
            display: 'inline-block',
            padding: '16px 32px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#ffffff',
            backgroundColor: 'transparent',
            border: '2px solid #ffffff',
            borderRadius: '6px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
        },
        life_cta_placeholderContainer: {
            width: '100%',
            height: '100%',
            backgroundColor: '#2c3e50',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: '18px',
            fontWeight: '500',
            textAlign: 'center',
        },
    };

    const life_cta_mobileStyles = `
    @media (max-width: 768px) {
      .life_cta_container {
        height: 500px !important;
      }
      
      .life_cta_content {
        padding: 0 24px !important;
      }
      
      .life_cta_heading {
        font-size: 36px !important;
        margin-bottom: 20px !important;
      }
      
      .life_cta_description,
      .life_cta_subDescription {
        font-size: 16px !important;
      }
      
      .life_cta_textWrapper {
        max-width: 100% !important;
      }
    }
    
    @media (max-width: 480px) {
      .life_cta_container {
        height: 450px !important;
      }
      
      .life_cta_heading {
        font-size: 32px !important;
      }
      
      .life_cta_button {
        padding: 14px 28px !important;
        font-size: 15px !important;
      }
    }
    
    .life_cta_button:hover {
      background-color: #ffffff;
      color: #2c3e50;
    }
  `;

    return (
        <>
            <style>{life_cta_mobileStyles}</style>
            <div style={life_cta_styles.life_cta_container} className="life_cta_container">
                {/* Background Image Placeholder */}
                <div style={life_cta_styles.life_cta_placeholderContainer} className="life_cta_placeholderContainer">
                    <img src={image} alt="MAPSIGMA Team" style={life_cta_styles.life_cta_backgroundImage} />

                </div>

                {/* Dark Overlay */}
                <div style={life_cta_styles.life_cta_overlay} className="life_cta_overlay"></div>

                {/* Content */}
                <div style={life_cta_styles.life_cta_content} className="life_cta_content">
                    <div style={life_cta_styles.life_cta_textWrapper} className="life_cta_textWrapper">
                        <h2 style={life_cta_styles.life_cta_heading} className="life_cta_heading">
                            Ready to make your mark?
                        </h2>
                        <p style={life_cta_styles.life_cta_description} className="life_cta_description">
                            Join a team where your expertise drives innovation and your growth shapes the future.
                        </p>
                        <p style={life_cta_styles.life_cta_subDescription} className="life_cta_subDescription">
                            Discover how MAPSIGMA can accelerate your career journey.
                        </p>
                        <Link
                            to="/careers"
                            style={life_cta_styles.life_cta_button}
                            className="life_cta_button"
                        >
                            Explore Opportunities
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}