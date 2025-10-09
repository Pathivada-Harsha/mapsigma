// import React, { useState, useEffect } from 'react';
import '../components_css/Preloader.css';
import PreloaderImg from '../images/preloader.png'

// export default function Preloader() {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const duration = 4000;
//     const interval = 20;
//     const increment = (100 / duration) * interval;

//     const timer = setInterval(() => {
//       setProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(timer);
//           return 100;
//         }
//         return Math.min(prev + increment, 100);
//       });
//     }, interval);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="preloader-container">
//       {/* Animated background particles */}
//       <div className="particles-wrapper">
//         <div className="particle particle-1"></div>
//         <div className="particle particle-2"></div>
//         <div className="particle particle-3"></div>
//         <div className="particle particle-4"></div>
//         <div className="particle particle-5"></div>
//       </div>

//       {/* Animated rings around logo */}
//       <div className="rings-wrapper">
//         <div className="ring ring-1"></div>
//         <div className="ring ring-2"></div>
//         <div className="ring ring-3"></div>
//       </div>

//       <div className="content-wrapper">
//         {/* Logo container with glow effects */}
//         <div className="logo-section">
//           <div className="logo-container">
//             {/* Glow effects */}
//             <div className="glow-effect-1"></div>
//             <div className="glow-effect-2"></div>
            
//             {/* Logo with flip animation */}
//             <div className="flip-animation">
//               <div className="logo-box">
//                 <img 
//                   src={PreloaderImg}
//                   className="logo-image" 
//                   style={{height: 200, width: 200}}
//                   alt="Loading"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Loading bar section */}
//         <div className="loading-section">
//           <div className="loading-title-wrapper">
//             <h2 className="loading-title">LOADING...</h2>
//           </div>
          
//           {/* Progress bar with enhanced styling */}
//           <div className="progress-bar-container">
//             {/* Background glow */}
//             <div className="progress-bg-glow"></div>
            
//             {/* Progress fill */}
//             <div 
//               className="progress-fill"
//               style={{ width: `${progress}%` }}
//             >
//               {/* Animated shimmer effect */}
//               <div className="progress-shimmer"></div>
              
//               {/* Glow at the edge */}
//               <div className="progress-edge-glow"></div>
//             </div>
//           </div>
          
//           {/* Percentage display */}
//           <div className="percentage-wrapper">
//             <div className="percentage-dot"></div>
//             <div className="percentage-text">
//               {Math.round(progress)}%
//             </div>
//             <div className="percentage-dot percentage-dot-delayed"></div>
//           </div>

//           {/* Loading dots */}
//           <div className="loading-dots">
//             <div className="dot"></div>
//             <div className="dot dot-delay-1"></div>
//             <div className="dot dot-delay-2"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
// import './CoinPreloader.css';

const CoinPreloader = ({ 
  size = 300, 
  duration = 1.0,  
  logoImage = PreloaderImg 
}) => {
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
          Loading<span className="loading-dots"></span>
        </div>
      </div>
    </div>
  );
};

export default CoinPreloader;