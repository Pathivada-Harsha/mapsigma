import React, { useState } from 'react';
import principle2 from "./../images/principles/Principle5.jpg";
export default function LifeHero1() {
  const [isHovered, setIsHovered] = useState(false);

  const life_hero1_styles = {
    life_hero1_container: {
      position: 'relative',
      width: '100%',
      minHeight: '640px',
      backgroundColor: '#000000',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    },
    life_hero1_curvedShape: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#004225',
      clipPath: 'polygon(0 0, 58% 0, 48% 50%, 38% 100%, 0 100%)',
      zIndex: 1,
    },
    life_hero1_contentWrapper: {
      position: 'relative',
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '80px 50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '80px',
      zIndex: 2,
    },
    life_hero1_leftContent: {
      flex: '0 0 auto',
      maxWidth: '520px',
      paddingLeft: '30px',
    },
    life_hero1_heading: {
      fontSize: '70px',
      fontWeight: '900',
      color: '#ffffff',
      marginBottom: '30px',
      lineHeight: '1.05',
      letterSpacing: '-2.5px',
    },
    life_hero1_subtitle: {
      fontSize: '18px',
      color: '#ffffff',
      lineHeight: '1.65',
      marginBottom: '42px',
      opacity: '0.96',
      fontWeight: '400',
      maxWidth: '480px',
    },
    life_hero1_button: {
      display: 'inline-block',
      padding: '17px 46px',
      fontSize: '15px',
      fontWeight: '700',
      border: '3px solid #ffffff',
      backgroundColor: isHovered ? '#ffffff' : 'transparent',
      color: isHovered ? '#004225' : '#ffffff',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.35s ease',
      outline: 'none',
      textTransform: 'uppercase',
      letterSpacing: '1.2px',
    },
    life_hero1_rightContent: {
      flex: '0 0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    life_hero1_imageContainer: {
      width: '500px',
      height: '560px',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 25px 70px rgba(0, 0, 0, 0.6)',
    },
    life_hero1_placeholderImage: {
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #5B8FD6 0%, #7EA8E3 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      fontSize: '20px',
      fontWeight: '600',
      textAlign: 'center',
      padding: '30px',
      flexDirection: 'column',
      gap: '8px',
    },
  };

  const life_hero1_mobileStyles = `
    @media (max-width: 1024px) {
      .life_hero1_curvedShape {
        clip-path: polygon(0 0, 100% 0, 100% 50%, 0 70%) !important;
      }
      
      .life_hero1_contentWrapper {
        flex-direction: column !important;
        padding: 60px 30px !important;
        gap: 60px !important;
      }
      
      .life_hero1_leftContent {
        padding-left: 0 !important;
        max-width: 100% !important;
        text-align: center !important;
      }
      
      .life_hero1_heading {
        font-size: 56px !important;
      }
      
      .life_hero1_subtitle {
        max-width: 100% !important;
      }
      
      .life_hero1_imageContainer {
        width: 100% !important;
        max-width: 500px !important;
        height: 500px !important;
      }
    }
    
    @media (max-width: 768px) {
      .life_hero1_container {
        min-height: 850px !important;
      }
      
      .life_hero1_heading {
        font-size: 48px !important;
        margin-bottom: 24px !important;
      }
      
      .life_hero1_subtitle {
        font-size: 17px !important;
        margin-bottom: 36px !important;
      }
      
      .life_hero1_imageContainer {
        height: 450px !important;
      }
    }
    
    @media (max-width: 480px) {
      .life_hero1_heading {
        font-size: 40px !important;
      }
      
      .life_hero1_subtitle {
        font-size: 16px !important;
      }
      
      .life_hero1_imageContainer {
        height: 380px !important;
      }
      
      .life_hero1_button {
        padding: 15px 38px !important;
        font-size: 14px !important;
      }
    }
  `;

  return (
    <>
      <style>{life_hero1_mobileStyles}</style>
      <div style={life_hero1_styles.life_hero1_container} className="life_hero1_container">
        <div style={life_hero1_styles.life_hero1_curvedShape} className="life_hero1_curvedShape"></div>
        
        <div style={life_hero1_styles.life_hero1_contentWrapper} className="life_hero1_contentWrapper">
          <div style={life_hero1_styles.life_hero1_leftContent} className="life_hero1_leftContent">
            <h1 style={life_hero1_styles.life_hero1_heading} className="life_hero1_heading">
              Life at<br />MAPSIGMA
            </h1>
            <p style={life_hero1_styles.life_hero1_subtitle} className="life_hero1_subtitle">
              At MAPSIGMA, culture is our greatest edge. We build an environment 
              where people don't just work — they grow, lead, and belong.
            </p>
            <button 
              style={life_hero1_styles.life_hero1_button}
              className="life_hero1_button"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Explore Life
            </button>
          </div>
          
          <div style={life_hero1_styles.life_hero1_rightContent} className="life_hero1_rightContent">
            <div style={life_hero1_styles.life_hero1_imageContainer} className="life_hero1_imageContainer">
              <div style={life_hero1_styles.life_hero1_placeholderImage}>
                <img
                            src={principle2}
                            alt="MAPSIGMA CAPITAL Foundation"
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/600x800/004225/FFFFFF?text=Foundation"
                            }}
                        />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}