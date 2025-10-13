import React, { useState, useEffect } from 'react';
import MapYourMove from '../components/Map_Your_Move';
import { useNavigate } from 'react-router-dom';
import '../pages_css/People.css'
import people_01 from '../images/people/people_02.png'
import people_02 from '../images/people/people_03.png'
import people_03 from '../images/people/people_04.png'
import Austin from '../images/people/Austin.jpg'
import Arun from '../images/people/Arunsie.png'
import femaildummy from '../images/femaildummy.png'


const PeoplePage = () => {
  const [showAllVideos, setShowAllVideos] = useState(false);
  const [animatedElements, setAnimatedElements] = useState(new Set());
  
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.dataset.animateId) {
            setAnimatedElements((prev) => new Set([...prev, entry.target.dataset.animateId]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate-id]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [showAllVideos]);

  const handleNavigate = () => {
    navigate('/people/partners');
  };
  
  const handleLeaderClick = (leader) => {
    navigate('/people/leader-detail', { state: { leader } });
  };

  const handleStoryClick = (story) => {
    navigate('/people/story-detail', { state: { story } });
  };

  const leaders = [
    {
    name: "Austin Prakesh",
    title: "Founder & CEO",
    subtitle: "MAPSIGMA Capital",
    image: Austin,
    bio: [
      "Austin Prakesh founded MAPSIGMA CAPITAL in 2022 with a vision to build a next-generation investment platform grounded in strategic insight, disciplined execution and long-term value creation. Deeply rooted in family values, he believes that true wealth goes beyond capital—it includes the principles, skills and resilience we pass on to our children.",
      "Born in 1976 in Singapore, Austin's journey spans from humble beginnings to becoming a key figure in global fintech. Between 2000 and 2009, he helped manage and scale businesses valued at over $8 billion. In 2011, he moved to Bangalore as an angel investor and Director strategic advisor to Zerodha, now India's largest trading firm, where he continues to serve as Director of Strategy.",
      "Austin has also invested in iScientific Technology Labs (smart meters), acquired Sesola (solar energy solutions in 2023), and co-founded Fitness Fight Club. Through an NGO named Vs, he helped fund heart surgeries for 228 children and supported education for over 22 children. After a life-changing skydiving accident in 2022 and courageously amputating both legs in 2024, he continues to lead as Chief Strategist and Principal Investor, mentoring the next generation of MAPSIGMA leaders."
    ],
    stats: [
      { number: "25+", label: "Years Experience" },
      { number: "$8B+", label: "Businesses Scaled" },
      { number: "2022", label: "Founded MAPSIGMA" }
    ],
    achievements: [
      {
        title: "Fintech Pioneer",
        description: "Key early investor and strategic advisor to Zerodha, India's largest trading platform"
      },
      {
        title: "Social Impact Leader",
        description: "Funded 228 children's heart surgeries and education for 22+ children through NGO Vs"
      },
      {
        title: "Sustainable Innovation",
        description: "Acquired Sesola to accelerate solar energy and green power solutions across India"
      },
      {
        title: "Resilience & Purpose",
        description: "Transformed personal adversity into a mission of legacy building and generational impact"
      }
    ]
  },
  {
    name: "Amritpal Singh Gadhoke",
    title: "Managing Director",
    subtitle: "MAPSIGMA Capital",
    image: "https://secure.b8cdn.com/images/uploads/user_photos/97/12068297_20141114091918.jpg",
    bio: [
      "Amritpal Singh Gadhoke is a seasoned leader with over 18 years of experience in the food and beverage retail industry. Known for his expertise in turnaround leadership and entrepreneurial innovation, he excels in driving strategic growth, profitability, and brand expansion.",
      "As Managing Director of Passion Singh DMCC, Dubai, Mr. Gadhoke has led successful organisational transformations and revitalised brands. Previously, as CEO of London Dairy Café and Bistro UAE, he established a leading lifestyle consumer brand in a competitive market, showcasing his strategic and operational expertise.",
      "A commerce graduate from Mumbai University and alumnus of the Executive Post Graduate Program in Management at Welingkar's Institute, he blends academic rigour with practical industry experience. His focus on business strategy, profit centre management, and new product launches has delivered significant market and revenue impact."
    ],
    stats: [
      { number: "18+", label: "Years Experience" },
      { number: "F&B", label: "Retail Industry" },
      { number: "Dubai", label: "Based Location" }
    ],
    achievements: [
      {
        title: "Turnaround Leadership",
        description: "Successfully revitalised brands through organisational transformation at Passion Singh DMCC"
      },
      {
        title: "Brand Builder",
        description: "Established London Dairy Café and Bistro UAE as a prominent lifestyle consumer brand"
      },
      {
        title: "Strategic Growth Expert",
        description: "Proven track record in driving unprecedented revenue growth and profitability"
      },
      {
        title: "Operational Excellence",
        description: "Expertise in talent management, marketing, and improving operational efficiency"
      }
    ]
  },
  {
    name: "Arun S",
    title: "Director Legal",
    subtitle: "MAPSIGMA Capital",
    image: Arun,
    bio: [
      "Arun S., Senior Partner at ALMT Legal, is an accomplished corporate lawyer with extensive expertise in private equity, capital markets, corporate finance, and both domestic and international mergers & acquisitions. With a particular focus on the technology and IT-enabled services sectors, he has been instrumental in advising companies on Indian IPOs, intellectual property matters, and real estate investment trusts.",
      "In recent years, Arun has expanded his portfolio to include emerging industries such as blockchain, virtual financial assets, artificial intelligence, electric mobility, and eco-friendly technologies. His deep understanding of these sectors has established him as a trusted advisor to private equity funds, investment firms, and corporate issuers.",
      "Recognized for his cross-border expertise, Arun has successfully managed transactions across jurisdictions including the United States, United Kingdom, China, UAE, and Singapore. A prolific author and esteemed speaker, he frequently publishes articles on private equity and IT laws and actively participates in global seminars."
    ],
    stats: [
      { number: "20+", label: "Years Experience" },
      { number: "5+", label: "Global Jurisdictions" },
      { number: "100+", label: "M&A Deals Advised" }
    ],
    achievements: [
      {
        title: "Cross-Border Legal Expert",
        description: "Managed complex transactions across US, UK, China, UAE, and Singapore"
      },
      {
        title: "Tech & Innovation Specialist",
        description: "Pioneer in advising on blockchain, AI, electric mobility, and virtual financial assets"
      },
      {
        title: "Thought Leadership",
        description: "Prolific author and speaker on private equity and IT laws at global forums"
      },
      {
        title: "Capital Markets Authority",
        description: "Instrumental in guiding Indian IPOs and real estate investment trusts"
      }
    ]
  },
  {
    name: "Kokila Raja Ratna",
    title: "Chief Operation Officer",
    subtitle: "MAPSIGMA Capital",
    image: femaildummy,
     bio: [
      "Kokila Raja Ratna is a seasoned professional in Operational Risk, Compliance, and Anti-Fraud, with over 21 years of experience in the global banking and financial services industry. She has held senior risk management roles at leading institutions, including Habib Bank AG Zurich, Emirates NBD, ING Vysya, and HSBC, showcasing exceptional leadership and technical expertise.",
      "A Certified Internal Auditor (CIA), Ms. Raja Ratna has driven key initiatives in risk management, policy development, and regulatory compliance, strengthening organisational resilience. Her expertise spans global regulatory frameworks such as BASEL, AML/CFT, and GDPR, ensuring strong compliance with industry standards.",
      "As Chief Risk Officer at MAPSIGMA, she oversees strategic risk management, fostering a proactive risk-aware culture. Ms. Raja Ratna works closely with regulatory bodies and executive leadership to align compliance efforts with organisational goals, enabling global operations to tackle challenges and seize growth opportunities confidently."
    ],
    stats: [
      { number: "21+", label: "Years Experience" },
      { number: "CIA", label: "Certified Auditor" },
      { number: "100%", label: "Compliance Record" }
    ],
    achievements: [
      {
        title: "Global Banking Expertise",
        description: "Senior risk management roles at Habib Bank AG Zurich, Emirates NBD, ING Vysya, and HSBC"
      },
      {
        title: "Regulatory Framework Authority",
        description: "Expert in BASEL, AML/CFT, and GDPR implementation and compliance"
      },
      {
        title: "Risk Management Excellence",
        description: "Maintained perfect compliance record while fostering risk-aware culture"
      },
      {
        title: "Strategic Leadership",
        description: "Drives organisational resilience through innovative risk management solutions"
      }
    ]
  }
  ];

  const stories = [
    {
      title: "MAPSIGMA Capital Announces Strategic Partnership with Leading Tech Innovators",
      date: "February 26, 2025",
      excerpt: "MAPSIGMA Capital forges a groundbreaking partnership to drive sustainable growth and technological advancement in emerging markets across Asia.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop&q=80",
      size: "large",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      fullContent: [
        "In a landmark announcement today, MAPSIGMA Capital revealed a strategic partnership with several leading technology innovators aimed at revolutionizing investment strategies in emerging Asian markets. This collaboration brings together cutting-edge artificial intelligence, blockchain technology, and sustainable investment principles.",
        "The partnership will enable MAPSIGMA to leverage advanced data analytics and machine learning algorithms to identify high-potential investment opportunities while maintaining strict ESG compliance standards. This initiative represents a significant step forward in the firm's commitment to responsible and innovative wealth management.",
        "CEO Rajesh Kumar stated, 'This partnership represents more than just technological advancement—it's about reimagining how we can create sustainable value for our clients and the communities we serve. By combining our deep market expertise with world-class technology, we're setting new standards for the investment management industry.'"
      ],
      highlights: [
        "Integration of AI-powered investment analytics platform",
        "Enhanced ESG monitoring and reporting capabilities",
        "Expansion into three new emerging markets",
        "Development of proprietary blockchain-based settlement system",
        "Launch of sustainable technology investment fund"
      ],
      tags: ["Partnership", "Technology", "Innovation", "ESG", "AI"]
    },
    {
      title: "Investment Excellence: MAPSIGMA's Approach",
      date: "May 2025",
      excerpt: "Our team shares insights on disciplined investing and strategic portfolio management.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&q=80",
      size: "normal",
      fullContent: [
        "At MAPSIGMA Capital, investment excellence is not just a goal—it's a fundamental principle that guides every decision we make. Our approach combines rigorous quantitative analysis with deep qualitative insights to identify opportunities that others might miss.",
        "Our investment philosophy is built on three pillars: disciplined research, risk-adjusted returns, and long-term value creation. We believe that sustainable outperformance comes from understanding the fundamental drivers of value and having the patience to let our investments mature.",
        "This disciplined approach has enabled us to consistently deliver superior risk-adjusted returns for our clients across market cycles. Our focus on quality over quantity means we maintain concentrated portfolios of our highest-conviction ideas."
      ],
      highlights: [
        "Proprietary research framework with 200+ data points",
        "Average holding period of 3-5 years for core positions",
        "Regular portfolio reviews and risk assessments",
        "Integration of ESG factors in all investment decisions"
      ],
      tags: ["Investment Strategy", "Portfolio Management", "Research"]
    },
    {
      title: "MAPSIGMA Recognized as Top Fund Manager",
      date: "May 30, 2025",
      excerpt: "Industry recognition highlights our commitment to excellence and innovation.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop&q=80",
      size: "normal",
      fullContent: [
        "MAPSIGMA Capital has been awarded the prestigious 'Fund Manager of the Year' award by the Asian Investment Management Association (AIMA), recognizing the firm's outstanding performance and innovative approach to portfolio management.",
        "The award evaluates fund managers based on risk-adjusted returns, client satisfaction, innovation in investment strategies, and contributions to the broader investment community. MAPSIGMA's consistent outperformance and thought leadership in sustainable investing were key factors in the selection.",
        "This recognition comes on the heels of a remarkable year where MAPSIGMA's flagship funds delivered exceptional returns while maintaining strict adherence to ESG principles. The firm's ability to balance strong financial performance with sustainable and responsible investing has set a new benchmark in the industry."
      ],
      highlights: [
        "Outperformed benchmark indices by average 8.5% across all funds",
        "Maintained 5-star ESG rating from leading agencies",
        "Zero compliance violations in three consecutive years",
        "Client retention rate of 98.5%",
        "Successfully launched 4 new thematic investment funds"
      ],
      tags: ["Awards", "Recognition", "Performance", "Excellence"]
    },
    {
      title: "Team Expansion",
      date: "February 06, 2025",
      excerpt: "Strategic hires strengthen our capabilities.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop&q=80",
      size: "small",
      fullContent: [
        "MAPSIGMA Capital continues to expand its team with strategic hires across investment research, technology, and client services. The new additions bring diverse expertise and fresh perspectives that will enhance our capabilities and service offerings.",
        "Our commitment to building a world-class team reflects our belief that talented people are the foundation of investment excellence. Each new team member has been carefully selected not just for their technical skills, but for their alignment with our values and culture of continuous learning."
      ],
      highlights: [
        "15 new hires across key functions",
        "Average 12+ years of industry experience",
        "Diverse backgrounds from top-tier institutions",
        "Enhanced research and analytical capabilities"
      ],
      tags: ["Team", "Growth", "Talent"]
    },
    {
      title: "Sustainable Investing",
      date: "December 16, 2024",
      excerpt: "How we integrate ESG principles.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop&q=80",
      size: "small",
      fullContent: [
        "Sustainable investing is at the core of everything we do at MAPSIGMA Capital. We believe that companies with strong ESG practices are better positioned to deliver long-term value and withstand market volatility.",
        "Our ESG integration process goes beyond simple screening. We conduct in-depth analysis of environmental impact, social responsibility, and governance practices for every potential investment. This rigorous approach helps us identify companies that are not only financially strong but also contribute positively to society."
      ],
      highlights: [
        "100% of portfolio companies assessed for ESG factors",
        "Active engagement with company management on sustainability",
        "Regular ESG reporting to clients",
        "Collaboration with leading ESG research providers"
      ],
      tags: ["ESG", "Sustainability", "Responsible Investing"]
    },
    {
      title: "MAPSIGMA Launches Innovative Investment Platform",
      date: "December 16, 2024",
      excerpt: "Our new platform combines cutting-edge technology with proven investment strategies.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80",
      size: "large",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      fullContent: [
        "MAPSIGMA Capital is proud to announce the launch of our next-generation investment platform, designed to provide clients with unprecedented transparency, control, and insight into their portfolios.",
        "The platform leverages advanced analytics, real-time reporting, and intuitive visualization tools to help clients understand their investments better. Features include customizable dashboards, detailed performance attribution, ESG impact tracking, and scenario analysis capabilities.",
        "This launch represents a significant milestone in our digital transformation journey and reflects our commitment to providing clients with the tools they need to make informed investment decisions."
      ],
      highlights: [
        "Real-time portfolio monitoring and reporting",
        "Advanced risk analytics and scenario modeling",
        "Integrated ESG impact measurement",
        "Mobile-responsive design for on-the-go access",
        "Secure document storage and digital signatures"
      ],
      tags: ["Technology", "Platform", "Innovation", "Digital"]
    },
    {
      title: "Investment Excellence: MAPSIGMA's Approach",
      date: "May 2025",
      excerpt: "Our team shares insights on disciplined investing and strategic portfolio management.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&q=80",
      size: "normal",
      fullContent: [
        "At MAPSIGMA Capital, investment excellence is not just a goal—it's a fundamental principle that guides every decision we make. Our approach combines rigorous quantitative analysis with deep qualitative insights to identify opportunities that others might miss.",
        "Our investment philosophy is built on three pillars: disciplined research, risk-adjusted returns, and long-term value creation. We believe that sustainable outperformance comes from understanding the fundamental drivers of value and having the patience to let our investments mature.",
        "This disciplined approach has enabled us to consistently deliver superior risk-adjusted returns for our clients across market cycles. Our focus on quality over quantity means we maintain concentrated portfolios of our highest-conviction ideas."
      ],
      highlights: [
        "Proprietary research framework with 200+ data points",
        "Average holding period of 3-5 years for core positions",
        "Regular portfolio reviews and risk assessments",
        "Integration of ESG factors in all investment decisions"
      ],
      tags: ["Investment Strategy", "Portfolio Management", "Research"]
    },
    {
      title: "MAPSIGMA Recognized as Top Fund Manager",
      date: "May 30, 2025",
      excerpt: "Industry recognition highlights our commitment to excellence and innovation.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop&q=80",
      size: "normal",
      fullContent: [
        "MAPSIGMA Capital has been awarded the prestigious 'Fund Manager of the Year' award by the Asian Investment Management Association (AIMA), recognizing the firm's outstanding performance and innovative approach to portfolio management.",
        "The award evaluates fund managers based on risk-adjusted returns, client satisfaction, innovation in investment strategies, and contributions to the broader investment community. MAPSIGMA's consistent outperformance and thought leadership in sustainable investing were key factors in the selection.",
        "This recognition comes on the heels of a remarkable year where MAPSIGMA's flagship funds delivered exceptional returns while maintaining strict adherence to ESG principles. The firm's ability to balance strong financial performance with sustainable and responsible investing has set a new benchmark in the industry."
      ],
      highlights: [
        "Outperformed benchmark indices by average 8.5% across all funds",
        "Maintained 5-star ESG rating from leading agencies",
        "Zero compliance violations in three consecutive years",
        "Client retention rate of 98.5%",
        "Successfully launched 4 new thematic investment funds"
      ],
      tags: ["Awards", "Recognition", "Performance", "Excellence"]
    },
    {
      title: "Team Expansion",
      date: "February 06, 2025",
      excerpt: "Strategic hires strengthen our capabilities.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop&q=80",
      size: "small",
      fullContent: [
        "MAPSIGMA Capital continues to expand its team with strategic hires across investment research, technology, and client services. The new additions bring diverse expertise and fresh perspectives that will enhance our capabilities and service offerings.",
        "Our commitment to building a world-class team reflects our belief that talented people are the foundation of investment excellence. Each new team member has been carefully selected not just for their technical skills, but for their alignment with our values and culture of continuous learning."
      ],
      highlights: [
        "15 new hires across key functions",
        "Average 12+ years of industry experience",
        "Diverse backgrounds from top-tier institutions",
        "Enhanced research and analytical capabilities"
      ],
      tags: ["Team", "Growth", "Talent"]
    },
    {
      title: "Sustainable Investing",
      date: "December 16, 2024",
      excerpt: "How we integrate ESG principles.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=600&h=600&fit=crop&q=80",
      size: "small",
      fullContent: [
        "Sustainable investing is at the core of everything we do at MAPSIGMA Capital. We believe that companies with strong ESG practices are better positioned to deliver long-term value and withstand market volatility.",
        "Our ESG integration process goes beyond simple screening. We conduct in-depth analysis of environmental impact, social responsibility, and governance practices for every potential investment. This rigorous approach helps us identify companies that are not only financially strong but also contribute positively to society."
      ],
      highlights: [
        "100% of portfolio companies assessed for ESG factors",
        "Active engagement with company management on sustainability",
        "Regular ESG reporting to clients",
        "Collaboration with leading ESG research providers"
      ],
      tags: ["ESG", "Sustainability", "Responsible Investing"]
    },
    {
      title: "MAPSIGMA Launches Innovative Investment Platform",
      date: "December 16, 2024",
      excerpt: "Our new platform combines cutting-edge technology with proven investment strategies.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80",
      size: "large",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      fullContent: [
        "MAPSIGMA Capital is proud to announce the launch of our next-generation investment platform, designed to provide clients with unprecedented transparency, control, and insight into their portfolios.",
        "The platform leverages advanced analytics, real-time reporting, and intuitive visualization tools to help clients understand their investments better. Features include customizable dashboards, detailed performance attribution, ESG impact tracking, and scenario analysis capabilities.",
        "This launch represents a significant milestone in our digital transformation journey and reflects our commitment to providing clients with the tools they need to make informed investment decisions."
      ],
      highlights: [
        "Real-time portfolio monitoring and reporting",
        "Advanced risk analytics and scenario modeling",
        "Integrated ESG impact measurement",
        "Mobile-responsive design for on-the-go access",
        "Secure document storage and digital signatures"
      ],
      tags: ["Technology", "Platform", "Innovation", "Digital"]
    }
  ];

  const displayedStories = showAllVideos ? stories : stories.slice(0, 6);

  return (
    <div className="people-page">    
      <div className="hero-section">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop&q=80"
          alt="Team Event" 
          className={`hero-image ${animatedElements.has('hero') ? 'animate-reveal-right' : ''}`}
          data-animate-id="hero"
        />
        <div className="hero-overlay">
          <h1 
            className={`hero-title ${animatedElements.has('hero-title') ? 'animate-fade-up animate-delay-3' : ''}`}
            data-animate-id="hero-title"
          >
            PEOPLE
          </h1>
        </div>
      </div>

 
     
        
       
          <div className="container-fluid intro-section-enhanced mt-4" >
            <h3 
              data-animate-id="intro-title"
              className={animatedElements.has('intro-title') ? 'animate-fade-up' : ''}
            >
              The Heart of MAPSIGMA CAPITAL
            </h3>
            
            {/* First Row: Text Left, Image Right */}
            <div className="intro-content-row">
              <div className="intro-text-col">
                <p 
                  data-animate-id="intro-p1"
                  className={animatedElements.has('intro-p1') ? 'animate-fade-up animate-delay-1' : ''}
                >
                  At MAPSIGMA CAPITAL, we believe the true value of any firm lies not in its assets but in its people. Our team is our greatest strength, bringing together diverse expertise, unwavering commitment, and a shared vision for excellence in investment management.
                </p>
              </div>
              <div className="intro-image-col">
                <div 
                  className="intro-image-wrapper"
                >
                  <img 
                    src={people_01}
                    alt="Team collaboration at MAPSIGMA"
                    className={animatedElements.has('intro-img1') ? 'animate-reveal-right animate-delay-2' : ''}
                  />
                </div>
              </div>
            </div>

            {/* Second Row: Image Left, Text Right */}
            <div className="intro-content-row">
              <div className="intro-text-col">
                <p 
                  data-animate-id="intro-p2"
                  className={animatedElements.has('intro-p2') ? 'animate-fade-up animate-delay-1' : ''}
                >
                  We don't just build portfolios. We build character, discipline and clarity in the people who manage them. Every member of our team embodies our core values of integrity, innovation, and excellence, ensuring that our clients receive not just superior returns, but also unwavering dedication and transparency.
                </p>
              </div>
              <div className="intro-image-col">
                <div 
                  className="intro-image-wrapper"
                >
                  <img 
                    src={people_02}
                    alt="Building character and discipline"
                    className={animatedElements.has('intro-img2') ? 'animate-reveal-left animate-delay-2' : ''}
                  />
                </div>
              </div>
            </div>

            {/* Third Row: Text Left, Image Right */}
            <div className="intro-content-row">
              <div className="intro-text-col">
                <p 
                  data-animate-id="intro-p3"
                  className={animatedElements.has('intro-p3') ? 'animate-fade-up animate-delay-1' : ''}
                >
                  Our people come from all walks of life: entrepreneurs, technologists, analysts, veterans and creative thinkers. This diversity of backgrounds and perspectives is what enables us to see opportunities others miss and build strategies that stand the test of time.
                </p>
              </div>
              <div className="intro-image-col">
                <div 
                  className="intro-image-wrapper"
                >
                  <img 
                    src={people_03}
                    alt="Diverse team of professionals"
                    className={animatedElements.has('intro-img3') ? 'animate-reveal-right animate-delay-2' : ''}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Section */}
          <section className="mb-5 container">
            <h2 
               data-animate-id="leadership-title"
               className={`section-title ${animatedElements.has('leadership-title') ? 'animate-fade-scale' : ''}`}
            >
              Our Leadership
            </h2>
            <p 
              data-animate-id="leadership-desc"
              className={`section-description ${animatedElements.has('leadership-desc') ? 'animate-fade-up' : ''}`}
            >
              Meet the minds behind MAPSIGMA CAPITAL. Our leadership team combines decades of investment expertise with strategic vision.
            </p>
            
            <div className="row">
              {leaders.map((leader, idx) => {
                const animations = ['reveal-left', 'reveal-right', 'reveal-diagonal-tlbr', 'reveal-diagonal-trbl'];
                const animClass = animations[idx % animations.length];
                return (
                  <div key={idx} className="col-12 col-sm-6 col-lg-3">
                    <div 
                      className="person-card"
                      onClick={() => handleLeaderClick(leader)}
                    >
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className={animatedElements.has(`leader-${idx}`) ? `animate-${animClass} animate-delay-${idx + 1}` : ''}
                        data-animate-id={`leader-${idx}`}
                      />
                      <div className="person-info">
                        <div className="person-name">{leader.name}</div>
                        <div className="person-title">{leader.title}</div>
                        <div className="person-subtitle">{leader.subtitle}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Partners Section */}
          <section className="container-fluid mb-5 pt-4 pb-4" style={{background:"#f0f0f0"}}>
            <h2 
              data-animate-id="partners-title"
              className={`section-title ${animatedElements.has('partners-title') ? 'animate-fade-scale' : ''}`}
            >
              Our Partners
            </h2>
            <div className="intro-section-enhanced">
              <p 
                data-animate-id="partners-p1"
                className={animatedElements.has('partners-p1') ? 'animate-fade-up animate-delay-1' : ''}
                style={{textAlign: 'center', fontSize: '1.125rem', color: '#374151', lineHeight: '1.7', marginBottom: '16px'}}
              >
                Our partners are more than executives and staff, they are the driving force behind MAPSIGMA CAPITAL. Each brings deep expertise, sharp execution and a shared commitment to our mission.

              </p>
              <p 
                data-animate-id="partners-p2"
                className={animatedElements.has('partners-p2') ? 'animate-fade-up animate-delay-2' : ''}
                style={{textAlign: 'center', fontSize: '1.125rem', color: '#374151', lineHeight: '1.7'}}
              >
                Together, they operate with discipline, agility and trust building the systems, relationships and results that define our success. This is a team aligned by purpose and united by principles, working every day to deliver lasting impact for our clients and communities.
              </p>
            </div>

            <div className="text-center mt-4">
              <button 
                className={`custom-btn ${animatedElements.has('partners-btn') ? 'animate-fade-scale animate-delay-3' : ''}`}
                onClick={handleNavigate}
                data-animate-id="partners-btn"
              >
                Meet the Partners →
              </button>
            </div>
          </section>

          {/* Stories Section */}
          <section className="mb-5 container">
            <h2 
              data-animate-id="stories-title"
              className={`section-title ${animatedElements.has('stories-title') ? 'animate-fade-scale' : ''}`}
            >
              Our Stories
            </h2>
            
            <div className="stories-grid">
              {displayedStories.map((story, idx) => {
                const animations = [
                  'reveal-top', 'reveal-bottom', 'reveal-left', 'reveal-right',
                  'reveal-diagonal-tlbr', 'reveal-diagonal-trbl', 
                  'reveal-diagonal-bltr', 'reveal-diagonal-brtr'
                ];
                const animClass = animations[idx % animations.length];
                const delayClass = `animate-delay-${(idx % 5) + 1}`;
                
                return (
                  <div 
                    key={idx} 
                    className={`story-card ${story.size}`}
                    onClick={() => handleStoryClick(story)}
                  >
                    {story.video ? (
                      <>
                        <video 
                          src={story.video} 
                          poster={story.image} 
                          muted 
                          preload="metadata"
                          className={`story-video ${animatedElements.has(`story-${idx}`) ? `animate-${animClass} ${delayClass}` : ''}`}
                          data-animate-id={`story-${idx}`}
                        />
                        <div className="story-overlay"></div>
                        <div className="story-content">
                          <div className="story-date">{story.date}</div>
                          <div className="story-title">{story.title}</div>
                          <div className="story-excerpt">{story.excerpt}</div>
                        </div>
                        <div className="play-icon">▶</div>
                      </>
                    ) : (
                      <>
                        <img 
                          src={story.image} 
                          alt={story.title}
                          className={animatedElements.has(`story-${idx}`) ? `animate-${animClass} ${delayClass}` : ''}
                          data-animate-id={`story-${idx}`}
                        />
                        <div className="story-overlay"></div>
                        <div className="story-content">
                          <div className="story-date">{story.date}</div>
                          <div className="story-title">{story.title}</div>
                          <div className="story-excerpt">{story.excerpt}</div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            {!showAllVideos && (
              <div className="text-center">
                <button className="custom-btn" onClick={() => setShowAllVideos(true)}>
                  Load More Stories <i className="bi bi-arrow-down"></i>
                </button>
              </div>
            )}
            
            {showAllVideos && (
              <div className="text-end">
                <button className="custom-btn" onClick={() => setShowAllVideos(false)}>
                  <i className="bi bi-arrow-up"></i> Show Less
                </button>
              </div>
            )}
          </section>
       
      
      
      <MapYourMove/>
    </div>
  );
};

export default PeoplePage;