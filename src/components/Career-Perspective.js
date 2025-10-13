import React, { useState, useEffect } from 'react';
import "../components_css/Career-Perspective.css"
import Cp1 from "../images/CareersPerspective/Cp1.png"
import Cp2 from "../images/CareersPerspective/Cp2.png"
import Cp3 from "../images/CareersPerspective/Cp3.png"
import Cp4 from "../images/CareersPerspective/Cp4.png"

const CareerPerspectivesPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const careerPaths = [
    {
      category: 'Investment',
      title: 'Investment & Research',
      icon: '📊',
      description: 'Shape investment strategies that move markets and build lasting value',
      image: Cp1,
      opportunities: ['Macroeconomic research', 'Portfolio strategy', 'Investment implementation', 'Alpha generation'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      category: 'Technology',
      title: 'Technology & Innovation',
      icon: '💻',
      description: 'Build intelligent systems that power the future of investment management',
      image: Cp2,
      opportunities: ['Investment technology', 'Data infrastructure & AI', 'Portfolio systems', 'Client innovations'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      category: 'Client',
      title: 'Client Service & Growth',
      icon: '🤝',
      description: 'Build trusted relationships and deliver exceptional client experiences',
      image: Cp3,
      opportunities: ['Business development', 'Client relationships', 'Portfolio analytics', 'Strategic solutions'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      category: 'Operations',
      title: 'Operations & Implementation',
      icon: '⚙️',
      description: 'Ensure flawless execution and operational excellence across all functions',
      image: Cp4,
      opportunities: ['Portfolio operations', 'Trading & execution', 'Risk management', 'Process optimization'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

  const cultureValues = [
    { title: 'Radical Truth', description: 'We welcome honest feedback and challenging conversations. Truth builds trust.', icon: '💡' },
    { title: 'Meritocracy of Ideas', description: 'The best ideas win, regardless of hierarchy. Every voice matters.', icon: '🎯' },
    { title: 'Meaningful Work', description: 'Your work impacts real portfolios, real clients, and real communities.', icon: '🌟' },
    { title: 'Continuous Growth', description: 'We invest in your development through mentorship, training, and challenges.', icon: '📈' }
  ];

  const growthJourney = [
    { stage: 'Onboarding', duration: 'First 90 Days', focus: 'Foundation & Integration', description: 'Comprehensive orientation, mentorship pairing, and immersion in our principles.' },
    { stage: 'Development', duration: '3-12 Months', focus: 'Skill Building', description: 'Hands-on projects, specialized training, and increasing responsibility.' },
    { stage: 'Advancement', duration: '1-3 Years', focus: 'Leadership & Expertise', description: 'Taking ownership, mentoring others, and shaping team strategy.' },
    { stage: 'Leadership', duration: '3+ Years', focus: 'Strategic Impact', description: 'Driving firm-wide initiatives and influencing organizational direction.' }
  ];

  const testimonials = [
    { quote: "What drew me to MAPSIGMA was the intellectual rigor. What keeps me here is the culture of continuous learning.", name: "Sarah Chen", role: "Senior Investment Associate", years: "4 years" },
    { quote: "I've never worked somewhere that so genuinely values truth and transparency. It's refreshing to work without politics.", name: "Michael Rodriguez", role: "Investment Engineer", years: "2 years" },
    { quote: "The mentorship here is unparalleled. I'm now doing work I never thought I'd be trusted with this early.", name: "Priya Kapoor", role: "Portfolio Associate", years: "3 years" }
  ];

  const benefits = [
    { title: 'Compensation', icon: '💰', items: ['Competitive base salary', 'Performance bonuses', 'Equity participation', 'Annual reviews'] },
    { title: 'Health & Wellness', icon: '🏥', items: ['Comprehensive medical', 'Mental health support', 'Fitness programs', 'Wellness stipends'] },
    { title: 'Work-Life Balance', icon: '⚖️', items: ['Flexible schedules', 'Remote work options', 'Generous PTO', 'Parental leave'] },
    { title: 'Development', icon: '📚', items: ['Training programs', 'Conference attendance', 'Certification support', 'Tuition assistance'] },
    { title: 'Lifestyle', icon: '🎯', items: ['Commuter benefits', 'Team events', 'Modern workspace', 'Daily catered meals'] },
    { title: 'Financial', icon: '💼', items: ['401(k) matching', 'Financial planning', 'Life insurance', 'Disability coverage'] }
  ];

  return (
    <div className="CareerPerspectives-page">
      <style>{`
        @import url('CareerPerspectives-styles.css');
      `}</style>

      {/* Hero Section */}
      <div className="CP-hero">
        <div className="CP-hero-content">
          <div className="CP-hero-badge">Your Career. Our Mission.</div>
          <h1>Career Perspectives</h1>
          <p className="CP-hero-subtitle">
            Learn more about how a position at our firm can help you excel.
          </p>
          <div className="CP-hero-stats">
            <div className="CP-stat">
              <span className="CP-stat-number">85%</span>
              <span className="CP-stat-label">Promotion Rate</span>
            </div>
            <div className="CP-stat">
              <span className="CP-stat-number">4.8</span>
              <span className="CP-stat-label">Employee Rating</span>
            </div>
            <div className="CP-stat">
              <span className="CP-stat-number">12+</span>
              <span className="CP-stat-label">Career Paths</span>
            </div>
          </div>
        </div>
      </div>

      {/* Career Paths Section */}
      <div className="CP-paths">
        <div className="CP-section-header">
          <h2 className="CP-section-title">Explore Your Path</h2>
          <p className="CP-section-subtitle">
            Discover opportunities across investment, technology, client service, and operations
          </p>
        </div>
        <div className="CP-paths-grid">
          {careerPaths.map((path, index) => (
            <div 
              key={index} 
              className="CP-path-card"
              style={{'--gradient': path.gradient}}
            >
              <div 
                className="CP-path-image" 
                style={{backgroundImage: `url(${path.image})`}}
              ></div>
              <div className="CP-path-content">
                <h3 className="CP-path-title">{path.title}</h3>
                <p className="CP-path-description">{path.description}</p>
                <div className="CP-path-label">Key Opportunities</div>
                <ul className="CP-opportunities">
                  {path.opportunities.map((opp, idx) => (
                    <li key={idx}>{opp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Culture Section */}
      <div className="CP-culture">
        <div className="CP-culture-content">
          <div className="CP-section-header">
            <h2 className="CP-section-title" style={{color: '#ffffff'}}>
              Our Culture & Values
            </h2>
            <p className="CP-section-subtitle" style={{color: 'rgba(255,255,255,0.9)'}}>
              The principles that guide how we work, grow, and succeed together
            </p>
          </div>
          <div className="CP-culture-grid">
            {cultureValues.map((value, index) => (
              <div key={index} className="CP-culture-card">
                <span className="CP-culture-icon">{value.icon}</span>
                <h3 className="CP-culture-title">{value.title}</h3>
                <p className="CP-culture-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Growth Journey Section */}
      <div className="CP-journey">
        <div className="CP-section-header">
          <h2 className="CP-section-title">Your Growth Journey</h2>
          <p className="CP-section-subtitle">
            A clear path from onboarding to leadership, with support every step of the way
          </p>
        </div>
        <div className="CP-journey-visual">
          {growthJourney.map((stage, index) => (
            <div key={index} className="CP-journey-stage">
              <div className="CP-journey-number">{index + 1}</div>
              <h3 className="CP-journey-stage-title">{stage.stage}</h3>
              <div className="CP-journey-duration">{stage.duration}</div>
              <div className="CP-journey-focus">{stage.focus}</div>
              <p className="CP-journey-description">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="CP-benefits">
        <div className="CP-section-header">
          <h2 className="CP-section-title">Comprehensive Benefits</h2>
          <p className="CP-section-subtitle">
            We invest in your wellbeing, growth, and long-term success
          </p>
        </div>
        <div className="CP-benefits-showcase">
          {benefits.map((benefit, index) => (
            <div key={index} className="CP-benefit-card">
              <div className="CP-benefit-icon">{benefit.icon}</div>
              <h3 className="CP-benefit-title">{benefit.title}</h3>
              <ul className="CP-benefit-list">
                {benefit.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="CP-testimonials">
        <div className="CP-testimonials-content">
          <div className="CP-section-header">
            <h2 className="CP-section-title" style={{color: '#ffffff'}}>
              Voices From Our Team
            </h2>
            <p className="CP-section-subtitle" style={{color: 'rgba(255,255,255,0.9)'}}>
              Real perspectives from people building their careers at MAPSIGMA
            </p>
          </div>
          <div className="CP-testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="CP-testimonial">
                <p className="CP-testimonial-quote">{testimonial.quote}</p>
                <div className="CP-testimonial-author">{testimonial.name}</div>
                <div className="CP-testimonial-role">{testimonial.role}</div>
                <div className="CP-testimonial-years">{testimonial.years}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="CP-cta">
        <div className="CP-cta-content">
          <h2>Ready to Shape Your Future?</h2>
          <p>
            Join a team where excellence meets purpose, and where your growth is our investment. 
            Explore open positions and take the first step toward a career that matters.
          </p>
          <div className="CP-cta-buttons">
            <button className="CP-cta-button">
              View Open Positions
            </button>
            <button className="CP-cta-button CP-cta-button-secondary">
              Learn About Culture
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default CareerPerspectivesPage;