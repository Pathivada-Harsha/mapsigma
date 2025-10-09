import { useEffect, useRef, useState } from "react"
import { NavLink } from 'react-router-dom';
import "../components_css/Ri-About.css"
import service1 from "./..//images/Research&insights/Ri14.png"
import service3 from "./../images/Research&insights/Ri20.png"

const MapSigmaAboutSection = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                    }
                })
            },
            {
                threshold: 0.2, // Trigger when 20% of the section is visible
                rootMargin: "0px 0px -100px 0px" // Trigger slightly before the section is fully in view
            }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    return (
        <section className="ri-about-section" ref={sectionRef}>
            <div className="ri-about-container">
                <div className="ri-about-content">
                    <div className={`ri-about-label ${isVisible ? 'ri-about-animate' : ''}`}>
                        WHAT WE DO
                    </div>
                    <h2 className={`ri-about-title ${isVisible ? 'ri-about-animate' : ''}`}>
                        Driving Investment Excellence Through Deep Research
                    </h2>
                    <p className={`ri-about-description ${isVisible ? 'ri-about-animate' : ''}`}>
                        At MAPSIGMA CAPITAL, our research forms the foundation of every investment decision. Our team of seasoned
                        analysts combines quantitative rigor with qualitative insights to uncover opportunities that others miss. We
                        believe that superior research leads to superior returns, and our comprehensive approach ensures that our
                        clients benefit from the most informed investment strategies in the market.
                    </p>

                    <div className={`ri-about-actions ${isVisible ? 'ri-about-animate' : ''}`}>
                        <NavLink to="/Insights" className="ri-about-button">
                            Explore Our Research
                        </NavLink>
                        <div className="ri-about-phone">
                            <svg
                                className="ri-about-phone-icon"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <span>+1 (555) 123-4567</span>
                        </div>
                    </div>
                </div>

                <div className={`ri-about-images ${isVisible ? 'ri-about-animate' : ''}`}>
                    <div className="ri-about-image-container ri-about-image-top">
                        <img
                            src={service3}
                            alt="Research team analyzing market data"
                            className="ri-about-image"
                        />
                    </div>
                    <div className="ri-about-image-container ri-about-image-bottom">
                        <img
                            src={service1}
                            alt="Investment strategy consultation"
                            className="ri-about-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MapSigmaAboutSection