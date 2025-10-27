import React, { useEffect } from 'react';
import MapYourMove from './Map_Your_Move';
import { useLocation, useNavigate } from 'react-router-dom';

const LeadershipDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const leader = location.state?.leader;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!leader) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Leader not found</h2>
        <button onClick={() => navigate('/people')}>Go Back</button>
      </div>
    );
  }

  const handleNavigate=()=>{
    navigate('/people/partners');
  }
  return (
    <>
      <style>{`
        .leadership-detail-page {
          background-color: #f9fafb;
          min-height: 100vh;
        }
        
        .leadership-back-button {
          position: fixed;
          top: 20px;
          left: 20px;
          background: white;
          border: none;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          z-index: 100;
          transition: all 0.3s ease;
          font-size: 24px;
          color: #004225;
        }
        
        .leadership-back-button:hover {
          background: #004225;
          color: white;
          transform: scale(1.1);
        }
        
        .leadership-detail-header {
          background: white;
          padding: 80px 40px 40px 130px;
          border-bottom: 3px solid #e5e7eb;
        }
        
        .leadership-detail-header-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }
        
        .leadership-detail-image-wrapper {
          flex-shrink: 0;
        }
        
        .leadership-detail-profile-image {
          width: 280px;
          height: 350px;
          border-radius: 8px;
          object-fit: cover;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .leadership-detail-header-info {
          flex: 1;
          padding-top: 10px;
        }
        
        @media (min-width:1440px){
          .leadership-detail-header-info {
          flex: 1;
          padding-top: 220px;
        }
        }
        
        .leadership-detail-name {
          font-size: 2.5rem;
          font-weight: bold;
          color: #111827;
          margin-bottom: 8px;
        }
        
        .leadership-detail-title {
          font-size: 1.125rem;
          color: #6b7280;
          margin-bottom: 4px;
          font-weight: 500;
        }
        
        .leadership-detail-subtitle {
          font-size: 1rem;
          color: #9ca3af;
        }
        
        .leadership-detail-content {
          padding: 60px 40px;
          // max-width: 1200px;
          margin: 0 auto;
        }
        
        .leadership-detail-section {
          background: white;
          padding: 48px;
          border-radius: 16px;
          margin-bottom: 40px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        
        .leadership-detail-section-heading {
          font-size: 2rem;
          font-weight: bold;
          color: #004225;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 3px solid #004225;
        }
        
        .leadership-detail-bio-text {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #374151;
          margin-bottom: 24px;
        }
        
        .leadership-detail-stats-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
          margin-top: 32px;
        }
        
        .leadership-detail-stat-box {
          text-align: center;
          padding: 40px;
          background: linear-gradient(135deg, #004225 0%, #006837 100%);
          border-radius: 16px;
          color: white;
          box-shadow: 0 8px 16px rgba(0, 66, 37, 0.3);
          transition: transform 0.3s ease;
        }
        
        .leadership-detail-stat-box:hover {
          transform: translateY(-8px);
        }
        
        .leadership-detail-stat-number {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 12px;
        }
        
        .leadership-detail-stat-label {
          font-size: 1.125rem;
          opacity: 0.95;
        }
        
        .leadership-detail-achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-top: 32px;
        }
        
        .leadership-detail-achievement-card {
          background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
          padding: 32px;
          border-radius: 16px;
          border-left: 5px solid #004225;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .leadership-detail-achievement-card:hover {
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
          transform: translateY(-4px);
        }
        
        .leadership-detail-achievement-title {
          font-size: 1.375rem;
          font-weight: 600;
          color: #004225;
          margin-bottom: 12px;
        }
        
        .leadership-detail-achievement-desc {
          font-size: 1.125rem;
          color: #6b7280;
          line-height: 1.7;
        }
        
        @media (max-width: 768px) {
          .leadership-detail-header {
            padding: 60px 20px 32px;
          }
          
          .leadership-detail-header-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 24px;
          }
          
          .leadership-detail-profile-image {
            width: 200px;
            height: 200px;
          }
          
          .leadership-detail-name {
            font-size: 2rem;
          }
          
          .leadership-detail-content {
            padding: 40px 20px;
          }
          
          .leadership-detail-section {
            padding: 32px 24px;
          }
          
          .leadership-detail-section-heading {
            font-size: 1.5rem;
          }
          
          .leadership-detail-bio-text {
            font-size: 1rem;
          }
          
          .leadership-detail-stats-container,
          .leadership-detail-achievements-grid {
            grid-template-columns: 1fr;
          }
        }
          /* ======== Our Partners Section Styles (No Animation) ======== */

.partners-section {
  text-align: center;
  padding: 80px 20px;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #004225;
  margin-bottom: 1.5rem;
}

.intro-section {
  max-width: 850px;
  margin: 0 auto;
  font-size: 1.1rem;
  color: #374151;
  line-height: 1.8;
}

.intro-section p {
  margin-bottom: 1rem;
}

/* ======== Button Styles ======== */
.text-center {
  margin-top: 2rem;
}

.custom-btn {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 14px 32px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.custom-btn:hover {
  background-color: #004225;
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0, 66, 37, 0.3);
}

/* ======== Responsive Design ======== */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .intro-section {
    font-size: 1rem;
    padding: 0 10px;
  }

  .custom-btn {
    width: auto;
    padding: 12px 28px;
  }
}

      `}</style>

      <div className="leadership-detail-page">
        <button
          className="leadership-back-button"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          ←
        </button>

        <div className="leadership-detail-header">
          <div className="leadership-detail-header-container">
            <div className="leadership-detail-image-wrapper">
              <img
                src={leader.image}
                alt={leader.name}
                className="leadership-detail-profile-image"
              />
            </div>
            <div className="leadership-detail-header-info">
              <h1 className="leadership-detail-name">{leader.name}</h1>
              <div className="leadership-detail-title">{leader.title}</div>
              <div className="leadership-detail-subtitle">{leader.subtitle}</div>
            </div>
          </div>
        </div>

        <div className="leadership-detail-content">
          <div className="leadership-detail-section">
            <h2 className="leadership-detail-section-heading">Biography</h2>
            {leader.bio && leader.bio.map((paragraph, idx) => (
              <p key={idx} className="leadership-detail-bio-text">{paragraph}</p>
            ))}
          </div>

          {leader.stats && (
            <div className="leadership-detail-section">
              <h2 className="leadership-detail-section-heading">Experience Highlights</h2>
              <div className="leadership-detail-stats-container">
                {leader.stats.map((stat, idx) => (
                  <div key={idx} className="leadership-detail-stat-box">
                    <div className="leadership-detail-stat-number">{stat.number}</div>
                    <div className="leadership-detail-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {leader.achievements && (
            <div className="leadership-detail-section">
              <h2 className="leadership-detail-section-heading">Key Achievements</h2>
              <div className="leadership-detail-achievements-grid">
                {leader.achievements.map((achievement, idx) => (
                  <div key={idx} className="leadership-detail-achievement-card">
                    <div className="leadership-detail-achievement-title">{achievement.title}</div>
                    <div className="leadership-detail-achievement-desc">{achievement.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <section className="partners-section">
          <h2 className="section-title">Our People</h2>

          <div className="intro-section">
            <p>
              Learn more about our MAPSIGMA community of independent thinkers and the leaders shaping our business.
            </p>           
          </div>

          <div className="text-center">
            <button className="custom-btn" onClick={handleNavigate}>
              More People
            </button>
          </div>
        </section>
      </div>
      <MapYourMove/>
    </>
  );
};

export default LeadershipDetailPage;