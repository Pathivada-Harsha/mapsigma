import React, { useState, useEffect } from 'react';

export default function LogoPreloader() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 8 + 4,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden flex items-center justify-center">
      {/* Animated Background Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-green-400 opacity-20 animate-float"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      {/* Logo Container with Flip Animation */}
      <div className="relative z-10">
        <div className="animate-flip">
          <svg
            width="200"
            height="200"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl"
          >
            <path
              d="M150 50L200 100L150 150L200 200L150 250L100 200L150 150L100 100L150 50Z"
              fill="#10b981"
              opacity="0.8"
            />
            <path
              d="M150 80L180 110L150 140L180 170L150 200L120 170L150 140L120 110L150 80Z"
              fill="#34d399"
            />
            <path
              d="M70 150L100 180L70 210L100 240L150 250L150 200L100 200L130 170L100 140L70 150Z"
              fill="#065f46"
            />
            <path
              d="M230 150L200 180L230 210L200 240L150 250L150 200L200 200L170 170L200 140L230 150Z"
              fill="#065f46"
            />
            <path
              d="M100 80L130 50L150 50L170 50L200 80L180 110L150 80L120 110L100 80Z"
              fill="#064e3b"
            />
          </svg>
        </div>
        
        {/* Loading Text */}
        <div className="text-center mt-8">
          <p className="text-green-400 text-xl font-semibold tracking-wider animate-pulse">
            Loading...
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes flip {
          0% {
            transform: perspective(400px) rotateY(0deg);
          }
          50% {
            transform: perspective(400px) rotateY(180deg);
          }
          100% {
            transform: perspective(400px) rotateY(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
            opacity: 0.3;
          }
          75% {
            transform: translateY(-20px) translateX(5px);
            opacity: 0.5;
          }
        }

        .animate-flip {
          animation: flip 2s linear infinite;
        }
      `}</style>
    </div>
  );
}