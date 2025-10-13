"use client"

import { useEffect, useState } from "react"
import "../components_css/BackToTopArrow.css"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100

      setScrollProgress(scrollPercent)
      setIsVisible(scrollTop > 200)
    }

    const throttledToggleVisibility = throttle(toggleVisibility, 16)

    window.addEventListener("scroll", throttledToggleVisibility)
    return () => window.removeEventListener("scroll", throttledToggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  function throttle(func, delay) {
    let timeoutId
    let lastExecTime = 0
    return function (...args) {
      const currentTime = Date.now()

      if (currentTime - lastExecTime > delay) {
        func.apply(this, args)
        lastExecTime = currentTime
      } else {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(
          () => {
            func.apply(this, args)
            lastExecTime = Date.now()
          },
          delay - (currentTime - lastExecTime),
        )
      }
    }
  }

  const circumference = 2 * Math.PI * 20
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  return (
    <div className={`back-to-top-container ${isVisible ? "visible" : ""}`}>
      <button
        onClick={scrollToTop}
        className="back-to-top-button"
        aria-label={`Scroll to top (${Math.round(scrollProgress)}% scrolled)`}
        type="button"
      >
        {/* Animated background circles */}
        <div className="bg-circle-1"></div>
        <div className="bg-circle-2"></div>
        
        {/* Progress ring */}
        <svg className="progress-ring" viewBox="0 0 48 48">
          <circle
            className="progress-circle-bg"
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="2.5"
          />
          <circle
            className="progress-circle"
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="#FFffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>

        {/* Original arrow icon with three lines */}
        <div className="arrow-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Vertical line pointing up */}
            <line x1="12" y1="19" x2="12" y2="5" />
            {/* Left arrow line */}
            <line x1="5" y1="12" x2="12" y2="5" />
            {/* Right arrow line */}
            <line x1="19" y1="12" x2="12" y2="5" />
          </svg>
        </div>

        {/* Shine effect */}
        <div className="shine-effect"></div>
      </button>

      
    </div>
  )
}