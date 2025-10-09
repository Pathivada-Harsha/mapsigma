import React, { useState, useEffect, useRef } from 'react';
import Map_Your_Move from '../components/Map_Your_Move'
import '../pages_css/Culture.css'
import Culture_01 from '../images/Culture/culture_01.png'


const Culture = () => {
    const [showAllHighlights, setShowAllHighlights] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [showModal, setShowModal] = useState(false);
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
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        },
        {
            title: "Excellence in Action: Our Investment Process",
            description: "A deep dive into how our culture of meritocracy and continuous improvement drives our decision-making process and delivers sustainable value for our clients.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        },
        {
            title: "Voices from Within: Life at MAPSIGMA CAPITAL",
            description: "Team members share their experiences of working in an environment where meaningful work meets meaningful relationships, and how our culture shapes their daily contributions.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        },
        {
            title: "Culture as Our Greatest Edge",
            description: "Discover how MAPSIGMA CAPITAL's culture—built on trust, truth, and meaningful work—shapes every decision, strengthens relationships, and turns a firm into a force for lasting impact.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        },
        {
            title: "Innovation and Collaboration",
            description: "Explore how our collaborative approach fosters innovation and drives breakthrough solutions in wealth management and investment strategies.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
        },
        {
            title: "Client Success Stories",
            description: "Real stories from clients about how our culture of care and excellence has transformed their financial journey and secured their family's future.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
        },
        {
            title: "Sustainable Investment Practices",
            description: "Learn about our commitment to sustainable and responsible investing, and how we balance financial returns with positive social impact.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
        },
        {
            title: "Leadership Insights",
            description: "Our founders and executives share their vision for the future and the principles that guide every decision at MAPSIGMA CAPITAL.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
        },
        {
            title: "Team Development and Growth",
            description: "Discover our approach to professional development, mentorship programs, and creating pathways for career advancement within the organization.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
        },
        {
            title: "Community Impact Initiatives",
            description: "See how MAPSIGMA CAPITAL gives back to the community through various programs, partnerships, and initiatives that create lasting positive change.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
        }
    ];

    const displayedHighlights = showAllHighlights ? highlights : highlights.slice(0, 4);

    const handleCardClick = (highlight) => {
        setSelectedVideo(highlight);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedVideo(null);
    };

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showModal]);

    return (
        <>
            <div className="culture-page">
                {/* Hero Section */}
                <section className="hero-section">
                    <img src={Culture_01} alt="Park pathway" className="hero-image" />
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
                        {displayedHighlights.map((highlight, index) => (
                            <div 
                                key={index} 
                                className="highlight-card"
                                onClick={() => handleCardClick(highlight)}
                            >
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

                    {!showAllHighlights && highlights.length > 4 && (
                        <div className="show-more-container">
                            <button 
                                className="show-more-btn"
                                onClick={() => setShowAllHighlights(true)}
                            >
                                Show More <i className="bi bi-arrow-down"></i>
                            </button>
                        </div>
                    )}

                    {showAllHighlights && (
                        <div className="show-more-container">
                            <button 
                                className="show-more-btn"
                                onClick={() => setShowAllHighlights(false)}
                            >
                               <i className="bi bi-arrow-up"></i> Show Less
                            </button>
                        </div>
                    )}
                </section>
            </div>

            {/* Video Modal */}
            {showModal && selectedVideo && (
                <div className="video-modal-overlay" onClick={handleCloseModal}>
                    <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={handleCloseModal}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <h3 className="modal-title">{selectedVideo.title}</h3>
                        <div className="video-container">
                            <video 
                                controls 
                                autoPlay 
                                className="modal-video"
                                key={selectedVideo.videoUrl}
                            >
                                <source src={selectedVideo.videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <p className="modal-description">{selectedVideo.description}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Culture;