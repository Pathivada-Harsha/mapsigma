"use client"

import { useState, useEffect, useRef } from "react"
import "../components_css/Ri-Hero.css"
import hero1 from "./../images/Research&insights/ri1.png"
import hero2 from "./../images/Research&insights/ri2.png"
import hero3 from "./../images/Research&insights/ri3.png"
import hero4 from "./../images/Research&insights/ri4.png"
import hero5 from "./../images/Research&insights/ri5.png"
const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [progress, setProgress] = useState(0)
    const intervalRef = useRef(null)
    const startTimeRef = useRef(null)
    const pauseTimeoutRef = useRef(null)

    const slides = [
        {
            title: "Turning Data Into Clarity.",
            subtitle: "Research & Insights",
            description:
                "At MAPSIGMA CAPITAL, we go beyond headlines. Our research uncovers patterns, opportunities, and risks others overlook—helping clients make decisions with clarity and conviction.",
            buttonText: "Explore Insights",
            illustration: hero2,
        },
        {
            title: "Principles That Guide Decisions.",
            subtitle: "Truth Before Trends",
            description:
                "Markets shift daily, but principles stand firm. Our insights cut through noise, grounded in discipline, precision, and decades of real-world experience.",
            buttonText: "Read Principles",
            illustration: hero1,
        },
        {
            title: "Intelligence That Builds Legacy.",
            subtitle: "Future Ready Research",
            description:
                "Our insights connect technology, global markets, and human values. We provide foresight that protects today and builds for tomorrow.",
            buttonText: "Discover More",
            illustration: hero5,
        },
    ]


    const SLIDE_DURATION = 5000 // 5 seconds

    // Clear all timers
    const stopAutoPlay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
        if (pauseTimeoutRef.current) {
            clearTimeout(pauseTimeoutRef.current)
            pauseTimeoutRef.current = null
        }
    }

    // Start auto-play
    const startAutoPlay = () => {
        stopAutoPlay()
        startTimeRef.current = Date.now()

        intervalRef.current = setInterval(() => {
            const elapsed = Date.now() - startTimeRef.current
            const newProgress = (elapsed / SLIDE_DURATION) * 100

            if (newProgress >= 100) {
                setCurrentSlide((prev) => (prev + 1) % slides.length)
                startTimeRef.current = Date.now()
                setProgress(0)
            } else {
                setProgress(newProgress)
            }
        }, 50)
    }

    // Initialize auto-play
    useEffect(() => {
        startAutoPlay()
        return () => stopAutoPlay()
    }, [])

    // Restart auto-play when slide changes manually
    useEffect(() => {
        if (startTimeRef.current) {
            startAutoPlay()
        }
    }, [currentSlide])

    // Handle navigation
    const navigateToSlide = (newSlide) => {
        if (newSlide === currentSlide) return

        stopAutoPlay()
        setCurrentSlide(newSlide)
        setProgress(0)
        startTimeRef.current = Date.now()

        // Resume auto-play after 3 seconds
        pauseTimeoutRef.current = setTimeout(() => {
            startAutoPlay()
        }, 3000)
    }

    const nextSlide = () => {
        const newSlide = (currentSlide + 1) % slides.length
        navigateToSlide(newSlide)
    }

    const prevSlide = () => {
        const newSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1
        navigateToSlide(newSlide)
    }

    const goToSlide = (index) => {
        navigateToSlide(index)
    }

    return (
        <div className="hc-carousel-container">
            <div className="hc-carousel-wrapper">
                <div
                    className="hc-slides-container"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="hc-slide">
                            <div className="hc-slide-content">
                                <div className="hc-text-section">
                                    <div className="hc-subtitle">{slide.subtitle}</div>
                                    <h1 className="hc-title">{slide.title}</h1>
                                    <p className="hc-description">{slide.description}</p>
                                    <button className="hc-cta-button">
                                        {slide.buttonText}
                                        <span className="hc-button-arrow">→</span>
                                    </button>
                                </div>
                                <div className="hc-visual-section">
                                    <div className="hc-illustration-container">
                                        <img
                                            src={slide.illustration}
                                            alt={`${slide.subtitle} illustration`}
                                            className="hc-illustration"
                                            loading={index === 0 ? "eager" : "lazy"}
                                            onError={(e) => {
                                                console.log("Image failed to load:", slide.illustration)
                                                e.target.style.display = "none"
                                            }}
                                        />
                                        <div className="hc-decoration-circle"></div>
                                        <div className="hc-decoration-dots"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="hc-navigation">
                <button
                    className="hc-nav-button hc-prev"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    type="button"
                >
                    <span>‹</span>
                </button>
                <button
                    className="hc-nav-button hc-next"
                    onClick={nextSlide}
                    aria-label="Next slide"
                    type="button"
                >
                    <span>›</span>
                </button>
            </div>

            {/* Slide Indicators */}
            <div className="hc-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`hc-indicator ${index === currentSlide ? "hc-active" : ""}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        type="button"
                    >
                        <span
                            className="hc-indicator-progress"
                            style={{
                                width: index === currentSlide ? `${progress}%` : "0%",
                            }}
                        ></span>
                    </button>
                ))}
            </div>

            {/* Progress Bar */}
            <div className="hc-progress-bar">
                <div
                    className="hc-progress-fill"
                    style={{
                        width: `${((currentSlide + (progress / 100)) / slides.length) * 100}%`,
                    }}
                ></div>
            </div>
        </div>
    )
}

export default HeroCarousel