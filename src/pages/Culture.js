import React, { useState, useEffect, useRef } from 'react';
import Map_Your_Move from '../components/Map_Your_Move'
import '../pages_css/Culture.css'
import Culture_01 from '../images/Culture/culture_01.png'

const Culture = () => {
    const sectionRefs = useRef([]);
    const highlightsRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        sectionRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        // Observe highlights section
        if (highlightsRef.current) {
            observer.observe(highlightsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const contentSections = [
        {
            icon: "shield-check",
            title: "Where Trust is Earned and Legacy is Built Together",
            content: [
                "At MAPSIGMA CAPITAL, culture isn't defined by what we say. It's revealed in how we work, how we live and how we treat one another. It is our invisible engine, the heartbeat behind every decision, every investment and every promise we keep.",
                "We don't just manage money. We manage responsibility with the same seriousness you would expect from someone safeguarding your family's future. Because for us this isn't transactional. <strong>It's generational.</strong>"
            ],
            image: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=1200&h=800&fit=crop"
        },
        {
            icon: "compass",
            title: "We Build on Truth Not Trends",
            content: [
                "Markets evolve. So must we. We operate in a world that doesn't care for opinions, only outcomes. To earn results that last we must first seek truth - the truth about the world, the truth about ourselves and the truth about what really creates value.",
                "That means being radically honest about what's working about what isn't and about the blind spots we all carry. Truth here isn't weaponized. It's welcomed. It helps us improve. It brings us closer. It builds trust from the inside out."
            ],
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop"
        },
        {
            icon: "award",
            title: "We Honor Excellence Not Ego",
            content: [
                "We don't reward noise. We reward clarity. No voice is too junior. No title is too senior. The best ideas win always.",
                "We challenge each other with respect and we back each other with courage. Because we know that greatness comes not from comfort but from the willingness to improve constantly relentlessly together."
            ],
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop"
        },
        {
            icon: "heart",
            title: "We Lead With Meaning",
            content: [
                "Numbers alone don't drive us. Purpose does. Everyone at MAPSIGMA CAPITAL is here for a reason bigger than a role. Our work has weight. Our decisions ripple through communities, industries and generations.",
                "That's why we take time to know our clients, not just their balance sheets and why we build relationships that go beyond business. Because when work feels personal excellence becomes inevitable."
            ],
            image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=800&fit=crop"
        },
        {
            icon: "people",
            title: "We're Building a Place Worth Belonging To",
            content: [
                "We believe in creating an environment where people don't just want to work but want to belong. A place where you feel safe to grow, safe to speak and safe to care deeply about your work, your team and your future.",
                "We are a community of thinkers, doers and learners. We are here to build with precision, with compassion and with conviction."
            ],
            image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1200&h=800&fit=crop"
        },
        {
            icon: "graph-up-arrow",
            title: "Culture Is Our Greatest Edge",
            content: [
                "While markets fluctuate and technology advances one thing remains constant - the strength of our culture.",
                "It's what makes clients trust us It's what makes talent stay It's what turns a firm into a force",
                "At MAPSIGMA CAPITAL our culture isn't just what sets us apart <strong>It's what holds us together</strong>"
            ],
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=800&fit=crop"
        }
    ];

    const highlights = [
        {
            title: "Building Trust Through Transparency",
            description: "Our leadership team discusses how radical honesty and transparency have shaped our investment philosophy and strengthened relationships with our clients and partners.",
            video: true
        },
        {
            title: "Excellence in Action: Our Investment Process",
            description: "A deep dive into how our culture of meritocracy and continuous improvement drives our decision-making process and delivers sustainable value for our clients.",
            video: true
        },
        {
            title: "Voices from Within: Life at MAPSIGMA CAPITAL",
            description: "Team members share their experiences of working in an environment where meaningful work meets meaningful relationships, and how our culture shapes their daily contributions.",
            video: true
        },
        {
            title: "Culture as Our Greatest Edge",
            description: "Discover how MAPSIGMA CAPITAL's culture—built on trust, truth, and meaningful work—shapes every decision, strengthens relationships, and turns a firm into a force for lasting impact.",
            video: true
        }
    ];

    return (
        <>
            <div className="culture-page">
                {/* Hero Section */}
                <section className="hero-section">
                    <img
                        src={Culture_01}
                        alt="Park pathway"
                        className="hero-image"
                    />
                    {/* <div className="hero-overlay"></div> */}
                    <h1 className="hero-title">CULTURE</h1>
                </section>

                {/* Main Content - Split Screen Sections */}
                <section className="content-section">
                    {contentSections.map((section, index) => (
                        <div 
                            key={index} 
                            className="content-block"
                            ref={el => sectionRefs.current[index] = el}
                        >
                            <div className="content-text-wrapper">
                                <div className="icon-wrapper">
                                    <i className={`bi bi-${section.icon}`}></i>
                                </div>
                                <h2 className="content-title">
                                    {section.title}
                                </h2>
                                {section.content.map((paragraph, pIndex) => (
                                    <p 
                                        key={pIndex} 
                                        className="content-text"
                                        dangerouslySetInnerHTML={{ __html: paragraph }}
                                    />
                                ))}
                            </div>
                            <div className="content-image-wrapper">
                                <img 
                                    src={section.image} 
                                    alt={section.title} 
                                    className="content-image" 
                                />
                            </div>
                        </div>
                    ))}
                </section>

                {/* Selected Highlights */}
                <section className="highlights-section" ref={highlightsRef}>
                    <h2 className="highlights-title">Selected Highlights</h2>

                    <div className="highlights-grid">
                        {highlights.map((highlight, index) => (
                            <div key={index} className="highlight-card">
                                <div className="highlight-content">
                                    <h3 className="highlight-title">
                                        {highlight.title}
                                    </h3>
                                    <p className="highlight-description">
                                        {highlight.description}
                                    </p>
                                </div>
                                <div className="video-button">
                                    <svg className="play-icon" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <Map_Your_Move />                
            </div>
        </>
    );
}

export default Culture;