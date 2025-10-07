import React from 'react';

export default function LifeValues() {
  const life_values_styles = {
    life_values_container: {
      width: '100%',
      backgroundColor: '#f8f9fa',
      padding: '80px 40px',
    },
    life_values_wrapper: {
      maxWidth: '1400px',
      margin: '0 auto',
    },
    life_values_header: {
      marginBottom: '60px',
    },
    life_values_subtitle: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#004225',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      marginBottom: '16px',
    },
    life_values_title: {
      fontSize: '56px',
      fontWeight: '400',
      color: '#1a3a52',
      marginBottom: '32px',
      lineHeight: '1.2',
      fontFamily: 'Georgia, serif',
    },
    life_values_description: {
      fontSize: '18px',
      color: '#5a6c7d',
      lineHeight: '1.6',
      maxWidth: '1200px',
    },
    life_values_grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '60px 40px',
      marginTop: '60px',
    },
    life_values_item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    life_values_icon: {
      width: '80px',
      height: '80px',
      marginBottom: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    life_values_iconSvg: {
      width: '60px',
      height: '60px',
      stroke: '#6B8E65',
      strokeWidth: '1.5',
      fill: 'none',
    },
    life_values_itemTitle: {
      fontSize: '24px',
      fontWeight: '400',
      color: '#1a3a52',
      marginBottom: '16px',
      lineHeight: '1.3',
      fontFamily: 'Georgia, serif',
    },
    life_values_itemDescription: {
      fontSize: '16px',
      color: '#5a6c7d',
      lineHeight: '1.6',
    },
  };

  const life_values_mobileStyles = `
    @media (max-width: 1024px) {
      .life_values_grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 50px 30px !important;
      }
    }
    
    @media (max-width: 768px) {
      .life_values_container {
        padding: 60px 24px !important;
      }
      
      .life_values_grid {
        grid-template-columns: 1fr !important;
        gap: 40px !important;
        margin-top: 50px !important;
      }
      
      .life_values_title {
        font-size: 42px !important;
      }
      
      .life_values_description {
        font-size: 16px !important;
      }
    }
    
    @media (max-width: 480px) {
      .life_values_title {
        font-size: 36px !important;
      }
      
      .life_values_itemTitle {
        font-size: 22px !important;
      }
    }
  `;

  const life_valuesData = [
    {
      title: 'Innovation-driven mindset',
      description: 'Embracing cutting-edge technology and creative solutions to stay ahead in the market',
      icon: (
        <svg viewBox="0 0 24 24" style={life_values_styles.life_values_iconSvg}>
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
          <path d="M12 12L13.09 18.26L22 19L13.09 19.74L12 26" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      title: 'Client-first excellence',
      description: 'Every decision and strategy centers around delivering exceptional value to our clients',
      icon: (
        <svg viewBox="0 0 24 24" style={life_values_styles.life_values_iconSvg}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
          <path d="M12 14v7" />
          <path d="M8 17l4-4 4 4" />
        </svg>
      )
    },
    {
      title: 'Uncompromising integrity',
      description: 'Maintaining the highest ethical standards in all our business practices and relationships',
      icon: (
        <svg viewBox="0 0 24 24" style={life_values_styles.life_values_iconSvg}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Data-driven precision',
      description: 'Leveraging advanced analytics and insights to make informed strategic decisions',
      icon: (
        <svg viewBox="0 0 24 24" style={life_values_styles.life_values_iconSvg}>
          <path d="M3 3v18h18" />
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
          <circle cx="18.7" cy="8" r="1.5" />
          <circle cx="13.6" cy="13.2" r="1.5" />
          <circle cx="10.8" cy="10.5" r="1.5" />
          <circle cx="7" cy="14.3" r="1.5" />
        </svg>
      )
    },
    {
      title: 'Collaborative growth',
      description: 'Fostering an environment where team success drives individual achievement',
      icon: (
        <svg viewBox="0 0 24 24" style={life_values_styles.life_values_iconSvg}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M12 14l3 3-3 3" />
        </svg>
      )
    },
    {
      title: 'Sustainable impact',
      description: 'Building long-term value while considering environmental and social responsibility',
      icon: (
        <svg viewBox="0 0 24 24" style={life_values_styles.life_values_iconSvg}>
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
          <path d="M16 8l-8 8" />
          <path d="M8 8l8 8" strokeDasharray="2 2" />
        </svg>
      )
    }
  ];

  return (
    <>
      <style>{life_values_mobileStyles}</style>
      <div style={life_values_styles.life_values_container} className="life_values_container">
        <div style={life_values_styles.life_values_wrapper} className="life_values_wrapper">
          <div style={life_values_styles.life_values_header} className="life_values_header">
            <div style={life_values_styles.life_values_subtitle} className="life_values_subtitle">
              VALUES
            </div>
            <h2 style={life_values_styles.life_values_title} className="life_values_title">
              The foundation with Purpose
            </h2>
            <p style={life_values_styles.life_values_description} className="life_values_description">
              MAPSIGMA operates on core principles that guide every decision and interaction. Our values shape how we approach challenges, build relationships, and create sustainable growth for our clients and communities.
            </p>
          </div>
          
          <div style={life_values_styles.life_values_grid} className="life_values_grid">
            {life_valuesData.map((value, index) => (
              <div key={index} style={life_values_styles.life_values_item} className="life_values_item">
                <div style={life_values_styles.life_values_icon} className="life_values_icon">
                  {value.icon}
                </div>
                <h3 style={life_values_styles.life_values_itemTitle} className="life_values_itemTitle">
                  {value.title}
                </h3>
                <p style={life_values_styles.life_values_itemDescription} className="life_values_itemDescription">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}