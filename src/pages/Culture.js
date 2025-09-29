import React, { useState } from 'react';
import Map_Your_Move from '../components/Map_Your_Move'
import '../pages_css/Culture.css'
import Culture_01 from '../images/Culture/culture_01.png'
const Culture = () => {


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
            description: "Discover how MAPSIGMA CAPITAL’s culture—built on trust, truth, and meaningful work—shapes every decision, strengthens relationships, and turns a firm into a force for lasting impact.",
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
                    <div className="hero-overlay"></div>
                    <h1 className="hero-title">CULTURE</h1>
                </section>

                {/* Main Content */}
                <section className="content-section">
                    {/* Introduction */}
                    <div className="content-block">
                        <h2 className="content-title">
                            Where Trust is Earned and Legacy is Built Together
                        </h2>
                        <p className="content-text">
                            At MAPSIGMA CAPITAL, culture isn't defined by what we say. It's revealed in how we work, how we live and how we treat one another. It is our invisible engine, the heartbeat behind every decision, every investment and every promise we keep.
                        </p>
                        <p className="content-text">
                            We don't just manage money. We manage responsibility with the same seriousness you would expect from someone safeguarding your family's future. Because for us this isn't transactional. <strong>It's generational.</strong>
                        </p>
                    </div>

                    {/* Truth Section */}
                    <div className="content-block">
                        <h2 className="content-title">
                            We Build on Truth Not Trends
                        </h2>
                        <p className="content-text">
                            Markets evolve. So must we. We operate in a world that doesn't care for opinions, only outcomes. To earn results that last we must first seek truth - the truth about the world, the truth about ourselves and the truth about what really creates value.
                        </p>
                        <p className="content-text">
                            That means being radically honest about what's working about what isn't and about the blind spots we all carry. Truth here isn't weaponized. It's welcomed. It helps us improve. It brings us closer. It builds trust from the inside out.
                        </p>
                    </div>

                    {/* Excellence Section */}
                    <div className="content-block">
                        <h2 className="content-title">
                            We Honor Excellence Not Ego
                        </h2>
                        <p className="content-text">
                            We don't reward noise. We reward clarity. No voice is too junior. No title is too senior. The best ideas win always.
                        </p>
                        <p className="content-text">
                            We challenge each other with respect and we back each other with courage. Because we know that greatness comes not from comfort but from the willingness to improve constantly relentlessly together.
                        </p>
                    </div>

                    {/* Meaning Section */}
                    <div className="content-block">
                        <h2 className="content-title">
                            We Lead With Meaning
                        </h2>
                        <p className="content-text">
                            Numbers alone don't drive us. Purpose does. Everyone at MAPSIGMA CAPITAL is here for a reason bigger than a role. Our work has weight. Our decisions ripple through communities, industries and generations.
                        </p>
                        <p className="content-text">
                            That's why we take time to know our clients, not just their balance sheets and why we build relationships that go beyond business. Because when work feels personal excellence becomes inevitable.
                        </p>
                    </div>

                    {/* Belonging Section */}
                    <div className="content-block">
                        <h2 className="content-title">
                            We're Building a Place Worth Belonging To
                        </h2>
                        <p className="content-text">
                            We believe in creating an environment where people don't just want to work but want to belong. A place where you feel safe to grow, safe to speak and safe to care deeply about your work, your team and your future.
                        </p>
                        <p className="content-text">
                            We are a community of thinkers, doers and learners. We are here to build with precision, with compassion and with conviction.
                        </p>
                    </div>

                    {/* Edge Section */}
                    <div className="content-block">
                        <h2 className="content-title">
                            Culture Is Our Greatest Edge
                        </h2>
                        <p className="content-text">
                            While markets fluctuate and technology advances one thing remains constant - the strength of our culture.
                        </p>
                        <p className="content-text">
                            It's what makes clients trust us It's what makes talent stay It's what turns a firm into a force
                        </p>
                        <p className="content-text">
                            At MAPSIGMA CAPITAL our culture isn't just what sets us apart <strong>It's what holds us together</strong>
                        </p>
                    </div>
                </section>

                {/* Selected Highlights */}
                <section className="highlights-section">
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
                {/* Newsletter Signup */}
                {/* <section className="newsletter-section">
          <div className="newsletter-container">
            <div className="newsletter-header">
              <h2 className="newsletter-title">
                Map Your Move
              </h2>
              <p className="newsletter-subtitle">
                Sign up to receive insights and analysis from MAPSIGMA CAPITAL
              </p>
            </div>
            
            <div>
              <div className="form-grid">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
              </div>
              
              <button onClick={handleSubmit} className="submit-button">
                NEXT
              </button>
            </div>
          </div>
        </section> */}
            </div>
        </>
    );
}

export default Culture;