import React from 'react';
import { NavLink } from 'react-router-dom';
import life6 from "../images/Research&insights/H-Article3.png"
import life7 from "../images/Research&insights/H-Article7.png"
import life8 from "../images/Research&insights/H-Article8.png"

export default function LifeCareers() {
  const life_careers_styles = {
    life_careers_container: {
      width: '100%',
      backgroundColor: '#f8f9fa',
      padding: '80px 40px',
    },
    life_careers_wrapper: {
      maxWidth: '1400px',
      margin: '0 auto',
    },
    life_careers_heading: {
      fontSize: '56px',
      fontWeight: '400',
      color: '#004225',
      marginBottom: '60px',
      lineHeight: '1.2',
      fontFamily: 'Georgia, serif',
    },
    life_careers_cardsContainer: {
      display: 'flex',
      gap: '0',
      backgroundColor: '#ffffff',
      overflow: 'hidden',
    },
    life_careers_card: {
      flex: '1',
      backgroundColor: '#ffffff',
      borderRight: '1px solid #d8dfe6',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
    },
    life_careers_cardLast: {
      borderRight: 'none',
    },
    life_careers_cardContent: {
      padding: '40px 32px',
      flex: '1',
    },
    life_careers_cardTitle: {
      fontSize: '32px',
      fontWeight: '400',
      color: '#004225',
      marginBottom: '20px',
      lineHeight: '1.3',
      fontFamily: 'Georgia, serif',
    },
    life_careers_cardDescription: {
      fontSize: '16px',
      color: '#5a6c7d',
      lineHeight: '1.6',
      marginBottom: '24px',
    },
    life_careers_cardLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '16px',
      color: '#006633',
      fontWeight: '500',
      textDecoration: 'none',
      transition: 'gap 0.3s ease',
    },
    life_careers_arrow: {
      fontSize: '18px',
      transition: 'transform 0.3s ease',
    },
    life_careers_imageWrapper: {
      padding: '32px',
      backgroundColor: '#ffffff',
    },
    life_careers_imageContainer: {
      width: '100%',
      height: '280px',
      overflow: 'hidden',
      borderRadius: '4px',
    },
    life_careers_cardImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    life_careers_imagePlaceholder: {
      width: '100%',
      height: '100%',
      backgroundColor: '#e8edf2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#7a8a9a',
      fontSize: '14px',
      textAlign: 'center',
    },
  };

  const life_careers_mobileStyles = `
    @media (max-width: 1024px) {
      .life_careers_cardsContainer {
        flex-wrap: wrap !important;
      }
      
      .life_careers_card {
        flex: 1 1 45% !important;
        border-right: 1px solid #d8dfe6 !important;
        border-bottom: 1px solid #d8dfe6 !important;
      }
      
      .life_careers_card:nth-child(2n) {
        border-right: none !important;
      }
      
      .life_careers_card:last-child {
        border-bottom: none !important;
      }
      
      .life_careers_heading {
        font-size: 48px !important;
        margin-bottom: 50px !important;
      }
    }
    
    @media (max-width: 768px) {
      .life_careers_container {
        padding: 60px 24px !important;
      }
      
      .life_careers_cardsContainer {
        flex-direction: column !important;
      }
      
      .life_careers_card {
        flex: 1 1 100% !important;
        border-right: none !important;
        border-bottom: 1px solid #d8dfe6 !important;
      }
      
      .life_careers_card:last-child {
        border-bottom: none !important;
      }
      
      .life_careers_heading {
        font-size: 40px !important;
        margin-bottom: 40px !important;
      }
      
      .life_careers_cardTitle {
        font-size: 28px !important;
      }
    }
    
    @media (max-width: 480px) {
      .life_careers_heading {
        font-size: 36px !important;
      }
      
      .life_careers_cardContent {
        padding: 32px 24px !important;
      }
      
      .life_careers_cardTitle {
        font-size: 26px !important;
      }
      
      .life_careers_cardDescription {
        font-size: 15px !important;
      }
      
      .life_careers_imageWrapper {
        padding: 24px !important;
      }
    }
    
    .life_careers_card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
      z-index: 1;
    }
    
    .life_careers_card:hover .life_careers_cardLink {
      gap: 12px;
    }
    
    .life_careers_card:hover .life_careers_arrow {
      transform: translateX(4px);
    }
  `;

  const cardsData = [
    {
      title: 'Career Perspectives',
      description: 'Learn more about how a position at our firm can help you excel.',
      linkText: 'Explore Career Insights',
      image: life6,
      link: '/Careers'
    },
    {
      title: 'Internships',
      description: 'Find information about our one-of-a-kind internship program.',
      linkText: 'Learn More About Internships',
      image: life7,
      link: '/internships'
    },
    {
      title: 'Open Opportunities',
      description: 'Explore and apply for current open positions at MAPSIGMA.',
      linkText: 'View Job Listings',
      image: life8,
      link: '/Careers'
    },
  ];

  return (
    <>
      <style>{life_careers_mobileStyles}</style>
      <div style={life_careers_styles.life_careers_container} className="life_careers_container">
        <div style={life_careers_styles.life_careers_wrapper} className="life_careers_wrapper">
          <h2 style={life_careers_styles.life_careers_heading} className="life_careers_heading">
            Explore Careers<br />at MAPSIGMA
          </h2>
          
          <div style={life_careers_styles.life_careers_cardsContainer} className="life_careers_cardsContainer">
            {cardsData.map((card, index) => (
              <div 
                key={index}
                style={{
                  ...life_careers_styles.life_careers_card,
                  ...(index === cardsData.length - 1 ? life_careers_styles.life_careers_cardLast : {})
                }}
                className="life_careers_card"
              >
                <div style={life_careers_styles.life_careers_cardContent} className="life_careers_cardContent">
                  <h3 style={life_careers_styles.life_careers_cardTitle} className="life_careers_cardTitle">
                    {card.title}
                  </h3>
                  <p style={life_careers_styles.life_careers_cardDescription} className="life_careers_cardDescription">
                    {card.description}
                  </p>
                  <NavLink 
                    to={card.link}
                    style={life_careers_styles.life_careers_cardLink}
                    className="life_careers_cardLink"
                  >
                    <span>{card.linkText}</span>
                    <span style={life_careers_styles.life_careers_arrow} className="life_careers_arrow">→</span>
                  </NavLink>
                </div>
                <div style={life_careers_styles.life_careers_imageWrapper} className="life_careers_imageWrapper">
                  <div style={life_careers_styles.life_careers_imageContainer}>
                    <div style={life_careers_styles.life_careers_imagePlaceholder} className="life_careers_imagePlaceholder">
                      {card.image && card.image !== 'your-image-url.jpg' ? (
                        <img 
                          src={card.image} 
                          alt={card.title} 
                          style={life_careers_styles.life_careers_cardImage}
                          className="life_careers_cardImage"
                        />
                      ) : (
                        `Image Placeholder (${card.title})`
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}