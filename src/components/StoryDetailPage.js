import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MapYourMove from './Map_Your_Move';

const StoryDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const story = location.state?.story;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (!story) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Story not found</h2>
        <button onClick={() => navigate('/people')}>Go Back</button>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .story-detail-page {
          background-color: #f9fafb;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }
        
        .story-back-button {
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
        
        .story-back-button:hover {
          background: #004225;
          color: white;
          transform: scale(1.1);
        }
        
        .story-detail-header {
          background: white;
          padding: 80px 40px 40px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .story-detail-header-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .story-detail-date {
          font-size: 0.875rem;
          color: #6b7280;
          font-weight: 500;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .story-detail-title {
          font-size: 3rem;
          font-weight: bold;
          color: #111827;
          margin-bottom: 24px;
          line-height: 1.2;
        }
        
        .story-detail-excerpt {
          font-size: 1.5rem;
          color: #374151;
          line-height: 1.6;
          font-weight: 400;
        }
        
        .story-detail-media-section {
          background: #f9fafb;
          padding: 40px;
        }
        
        .story-detail-media-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          border-radius: 12px;
          overflow: hidden;
        }
        
        .story-detail-media-container.has-video {
          background: #000;
        }
        
        .story-detail-media-container img {
          width: 100%;
          height: auto;
          max-height: 500px;
          display: block;
          object-fit: contain;
        }
        
        .story-detail-media-container video {
          width: 100%;
          height: auto;
          max-height: 600px;
          object-fit: cover;
          display: block;
        }
        
        .story-detail-video-controls {
          position: absolute;
          bottom: 30px;
          left: 30px;
          right: 30px;
          display: flex;
          gap: 16px;
          z-index: 5;
        }
        
        .story-detail-video-control-btn {
          background: rgba(255, 255, 255, 0.95);
          border: none;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          backdrop-filter: blur(10px);
          font-size: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .story-detail-video-control-btn:hover {
          background: white;
          transform: scale(1.1);
        }
        
        .story-detail-content {
          padding: 60px 40px;
          max-width: 900px;
          margin: 0 auto;
        }
        
        .story-detail-content-text {
          font-size: 1.25rem;
          color: #374151;
          line-height: 1.8;
          margin-bottom: 32px;
        }
        
        .story-detail-divider {
          height: 2px;
          background: linear-gradient(to right, transparent, #e5e7eb, transparent);
          margin: 60px 0;
        }
        
        .story-detail-highlights {
          background: white;
          padding: 48px;
          border-radius: 16px;
          margin-top: 48px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        
        .story-detail-highlights-title {
          font-size: 2rem;
          font-weight: bold;
          color: #004225;
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 3px solid #004225;
        }
        
        .story-detail-highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        
        .story-detail-highlight-item {
          display: flex;
          gap: 16px;
          align-items: start;
          padding: 20px;
          background: #f9fafb;
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        
        .story-detail-highlight-item:hover {
          background: #f3f4f6;
          transform: translateX(8px);
        }
        
        .story-detail-highlight-icon {
          width: 28px;
          height: 28px;
          background: #004225;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .story-detail-highlight-text {
          font-size: 1.125rem;
          color: #374151;
          line-height: 1.7;
        }
        
        .story-detail-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 48px;
          padding-top: 48px;
          border-top: 1px solid #e5e7eb;
        }
        
        .story-detail-tag {
          background: linear-gradient(135deg, #004225 0%, #006837 100%);
          color: white;
          padding: 10px 20px;
          border-radius: 24px;
          font-size: 0.875rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .story-detail-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 66, 37, 0.3);
        }
        
        @media (max-width: 768px) {
          .story-detail-header {
            padding: 60px 20px 32px;
          }
          
          .story-detail-title {
            font-size: 2rem;
          }
          
          .story-detail-excerpt {
            font-size: 1.25rem;
          }
          
          .story-detail-content {
            padding: 40px 20px;
          }
          
          .story-detail-content-text {
            font-size: 1.125rem;
          }
          
          .story-detail-highlights {
            padding: 32px 24px;
          }
          
          .story-detail-highlights-title {
            font-size: 1.5rem;
          }
          
          .story-detail-highlights-grid {
            grid-template-columns: 1fr;
          }
          
          .story-detail-media-section {
            padding: 20px;
          }
          
          .story-detail-video-controls {
            bottom: 16px;
            left: 16px;
            right: 16px;
          }
        }
      `}</style>
      
      <div className="story-detail-page">
        <button 
          className="story-back-button" 
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          ←
        </button>
        
        <div className="story-detail-header">
          <div className="story-detail-header-container">
            <div className="story-detail-date">{story.date}</div>
            <h1 className="story-detail-title">{story.title}</h1>
            <p className="story-detail-excerpt">{story.excerpt}</p>
          </div>
        </div>
        
        <div className="story-detail-media-section">
          <div className={`story-detail-media-container ${story.video ? 'has-video' : ''}`}>
            {story.video ? (
              <>
                <video
                  ref={videoRef}
                  src={story.video}
                  poster={story.image}
                  onClick={togglePlay}
                  style={{ cursor: 'pointer' }}
                />
                <div className="story-detail-video-controls">
                  <button className="story-detail-video-control-btn" onClick={togglePlay}>
                    {isPlaying ? '⏸' : '▶'}
                  </button>
                  <button className="story-detail-video-control-btn" onClick={toggleMute}>
                    {isMuted ? '🔇' : '🔊'}
                  </button>
                </div>
              </>
            ) : (
              <img src={story.image} alt={story.title} />
            )}
          </div>
        </div>
        
        <div className="story-detail-content">
          {story.fullContent && story.fullContent.map((paragraph, idx) => (
            <p key={idx} className="story-detail-content-text">{paragraph}</p>
          ))}
          
          {story.highlights && (
            <>
              <div className="story-detail-divider"></div>
              <div className="story-detail-highlights">
                <h2 className="story-detail-highlights-title">Key Highlights</h2>
                <div className="story-detail-highlights-grid">
                  {story.highlights.map((highlight, idx) => (
                    <div key={idx} className="story-detail-highlight-item">
                      <div className="story-detail-highlight-icon"></div>
                      <div className="story-detail-highlight-text">{highlight}</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          
          {story.tags && (
            <div className="story-detail-tags">
              {story.tags.map((tag, idx) => (
                <span key={idx} className="story-detail-tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
      <MapYourMove/>
    </>
  );
};

export default StoryDetailPage;