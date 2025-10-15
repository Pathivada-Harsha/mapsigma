import React from 'react';
import '../components_css/Preloader.css';
import PreloaderImg from '../images/preloader.png'

const CoinPreloader = ({
  show = false,
  size = 300,
  duration = 1.0,
  logoImage = PreloaderImg
}) => {
  // Don't render anything if show is false
  if (!show) {
    return null;
  }

  return (
    <div className="coin-preloader-container">
      {/* Animated background elements */}
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>
      <div className="bg-orb bg-orb-3"></div>

      {/* Animated rings */}
      <div className="pulse-ring pulse-ring-1"></div>
      <div className="pulse-ring pulse-ring-2"></div>

      {/* Floating particles */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      <div className="particle particle-5"></div>

      <div className="coin-content">
        <div
          className="coin-rotating"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${duration}s`
          }}
        >
          <div className="coin-face coin-front">
            {logoImage && (
              <img
                src={logoImage}
                alt="Loading"
                className="coin-logo"
              />
            )}
          </div>

          <div className="coin-face coin-back">
            {logoImage && (
              <img
                src={logoImage}
                alt="Loading"
                className="coin-logo"
              />
            )}
          </div>
        </div>

        <div className="loading-text">
          Loading
          <span className="loading-dots">
            <span className="dot dot-1">.</span>
            <span className="dot dot-2">.</span>
            <span className="dot dot-3">.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoinPreloader;