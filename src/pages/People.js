import React, { useState, useEffect } from 'react';
import MapYourMove from '../components/Map_Your_Move';
import { useNavigate } from 'react-router-dom';
import people_01 from '../images/people/people_02.png'
import people_02 from '../images/people/people_03.png'
import people_03 from '../images/people/people_04.png'

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
      name: "Rajesh Kumar",
      title: "Founder & CEO",
      subtitle: "MAPSIGMA Capital",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&q=80",
      bio: [
        "Rajesh Kumar founded MAPSIGMA Capital in 2015 with a vision to revolutionize investment management in emerging markets. With over 25 years of experience in global finance, he has built the firm into one of the region's most respected investment houses.",
        "Prior to founding MAPSIGMA, Rajesh served as Managing Director at Goldman Sachs Asia, where he led the firm's alternative investments division. He also held senior positions at Morgan Stanley and JP Morgan, gaining deep expertise across asset classes and geographies.",
        "Rajesh holds an MBA from Harvard Business School and a Bachelor's degree in Economics from the London School of Economics. He is a frequent speaker at global investment conferences and serves on the boards of several industry organizations."
      ],
      stats: [
        { number: "25+", label: "Years Experience" },
        { number: "$5B+", label: "Assets Managed" },
        { number: "15+", label: "Countries Served" }
      ],
      achievements: [
        {
          title: "Investment Innovation Award",
          description: "Recognized for pioneering sustainable investment strategies in emerging markets"
        },
        {
          title: "CEO of the Year 2023",
          description: "Honored by Asia Finance Magazine for exceptional leadership and vision"
        },
        {
          title: "Published Author",
          description: "Author of 'The Future of Capital: Investing in Tomorrow's Markets'"
        }
      ]
    },
    {
      name: "Priya Sharma",
      title: "Chief Investment Officer",
      subtitle: "MAPSIGMA Capital",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop&q=80",
      bio: [
        "Priya Sharma brings over 20 years of investment expertise to MAPSIGMA Capital, where she oversees all investment strategies and portfolio management operations.",
        "Before joining MAPSIGMA, Priya was a Senior Portfolio Manager at BlackRock, managing multi-billion dollar portfolios with a focus on emerging markets and sustainable investments.",
        "Priya holds a CFA charter and an MBA in Finance from INSEAD. She is passionate about ESG investing and has been instrumental in developing MAPSIGMA's sustainable investment framework."
      ],
      stats: [
        { number: "20+", label: "Years Experience" },
        { number: "$3B+", label: "Portfolio Managed" },
        { number: "98%", label: "Client Satisfaction" }
      ],
      achievements: [
        {
          title: "CIO Excellence Award 2024",
          description: "Recognized for outstanding portfolio performance and risk management"
        },
        {
          title: "ESG Leadership",
          description: "Pioneer in integrating ESG principles into investment strategies"
        }
      ]
    },
    {
      name: "Arun Mehta",
      title: "Managing Partner",
      subtitle: "Strategy & Operations",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop&q=80",
      bio: [
        "Arun Mehta leads strategy and operations at MAPSIGMA Capital, ensuring operational excellence and strategic alignment across all business functions.",
        "With 18 years of experience in financial services, Arun previously held leadership roles at McKinsey & Company and Citigroup, where he specialized in operational transformation and strategic planning.",
        "Arun earned his MBA from Wharton School and a Bachelor's degree in Engineering from IIT Delhi. He is known for his analytical approach and ability to drive organizational efficiency."
      ],
      stats: [
        { number: "18+", label: "Years Experience" },
        { number: "50+", label: "Strategic Projects Led" },
        { number: "30%", label: "Efficiency Improvement" }
      ],
      achievements: [
        {
          title: "Operations Excellence Award",
          description: "Streamlined operations reducing costs by 30% while improving service quality"
        },
        {
          title: "Digital Transformation Leader",
          description: "Led successful implementation of cutting-edge technology platforms"
        }
      ]
    },
    {
      name: "Kavita Reddy",
      title: "Partner",
      subtitle: "Risk Management & Compliance",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop&q=80",
      bio: [
        "Kavita Reddy heads risk management and compliance at MAPSIGMA Capital, ensuring the firm maintains the highest standards of regulatory compliance and risk controls.",
        "Before joining MAPSIGMA, Kavita was Head of Risk at Deutsche Bank Asia Pacific, where she developed comprehensive risk frameworks for complex financial products.",
        "Kavita holds an MBA from Columbia Business School and is a certified FRM (Financial Risk Manager). She is a thought leader in enterprise risk management and regulatory compliance."
      ],
      stats: [
        { number: "15+", label: "Years Experience" },
        { number: "100%", label: "Compliance Record" },
        { number: "Zero", label: "Major Incidents" }
      ],
      achievements: [
        {
          title: "Risk Management Excellence",
          description: "Maintained perfect compliance record for three consecutive years"
        },
        {
          title: "Industry Recognition",
          description: "Featured speaker at global risk management conferences"
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
      <style>{`
      .people-page { 
           background-color: #f9fafb; 
            font-family: 'Poppins', sans-serif;
           overflow-x: hidden;           
         }
        
         /* Reveal Animation Keyframes */
         @keyframes revealLeft {
           from { clip-path: inset(0 100% 0 0); }
           to { clip-path: inset(0 0 0 0); }
         }
        
         @keyframes revealRight {
           from { clip-path: inset(0 0 0 100%); }
           to { clip-path: inset(0 0 0 0); }
         }
        
         @keyframes revealTop {
           from { clip-path: inset(0 0 100% 0); }
           to { clip-path: inset(0 0 0 0); }
         }
        
         @keyframes revealBottom {
           from { clip-path: inset(100% 0 0 0); }
           to { clip-path: inset(0 0 0 0); }
         }
        
         @keyframes revealDiagonalTLBR {
           from { clip-path: polygon(0 0, 0 0, 0 100%); }
           to { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
         }
        
         @keyframes revealDiagonalTRBL {
           from { clip-path: polygon(100% 0, 100% 0, 100% 100%); }
           to { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
         }
        
         @keyframes revealDiagonalBLTR {
           from { clip-path: polygon(0 100%, 0 100%, 100% 100%); }
           to { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
         }
        
         @keyframes revealDiagonalBRTL {
           from { clip-path: polygon(100% 100%, 100% 100%, 0 100%); }
           to { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
         }
        
         @keyframes fadeInUp {
           from { 
             opacity: 0;
             transform: translateY(30px);
           }
           to { 
             opacity: 1;
             transform: translateY(0);
           }
         }
        
         @keyframes fadeInScale {
           from { 
             opacity: 0;
             transform: scale(0.95);
           }
           to { 
             opacity: 1;
             transform: scale(1);
           }
         }

         /* Animation Classes */
         .animate-reveal-left { 
           animation: revealLeft 1s ease-out forwards;
           opacity: 1 !important;
         }
         .animate-reveal-right { 
           animation: revealRight 1s ease-out forwards;
           opacity: 1 !important;
         }
         .animate-reveal-top { 
           animation: revealTop 1s ease-out forwards;
           opacity: 1 !important;
         }
         .animate-reveal-bottom { 
           animation: revealBottom 1s ease-out forwards;
           opacity: 1 !important;
         }
         .animate-reveal-diagonal-tlbr { 
           animation: revealDiagonalTLBR 1.2s ease-out forwards;
           opacity: 1 !important;
         }
         .animate-reveal-diagonal-trbl { 
           animation: revealDiagonalTRBL 1.2s ease-out forwards;
           opacity: 1 !important;
         }
         .animate-reveal-diagonal-bltr { 
           animation: revealDiagonalBLTR 1.2s ease-out forwards;
           opacity: 1 !important;
         }
         .animate-reveal-diagonal-brtr { 
           animation: revealDiagonalBRTL 1.2s ease-out forwards;
           opacity: 1 !important;
         }
         .animate-fade-up { 
           animation: fadeInUp 0.8s ease-out forwards;
           opacity: 1 !important;
         }
         .animate-fade-scale { 
           animation: fadeInScale 0.8s ease-out forwards;
           opacity: 1 !important;
         }
        
         .animate-delay-1 { animation-delay: 0.1s; }
         .animate-delay-2 { animation-delay: 0.2s; }
         .animate-delay-3 { animation-delay: 0.3s; }
         .animate-delay-4 { animation-delay: 0.4s; }
         .animate-delay-5 { animation-delay: 0.5s; }
        
         /* Initial state - elements start invisible */
         [data-animate-id]:not(.animate-reveal-left):not(.animate-reveal-right):not(.animate-reveal-top):not(.animate-reveal-bottom):not(.animate-reveal-diagonal-tlbr):not(.animate-reveal-diagonal-trbl):not(.animate-reveal-diagonal-bltr):not(.animate-reveal-diagonal-brtr):not(.animate-fade-up):not(.animate-fade-scale) {
           opacity: 0;
         }

         .hero-section { 
           position: relative; 
           width: 100%; 
           height: 500px; 
           overflow: hidden;
         }
         .hero-image { 
           width: 100%; 
           height: 100%; 
           object-fit: cover;
         }
         .hero-overlay { 
           position: absolute; 
           bottom: 0; 
           left: 0; 
           right: 0; 
           background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); 
           padding: 48px 24px 24px;
         }
         .hero-title { 
           font-size: 3.5rem; 
           font-weight: bold; 
           color: white; 
           margin: 0;
         }
         .content-section { 
           background: white; 
           padding: 48px 0;
         }
        
         .section-title { 
           font-size: 2.5rem; 
           font-weight: bold; 
           text-align: center; 
           margin-bottom: 24px; 
           color: #004225;
         }
         
         /* NEW STYLES FOR INTRO SECTION WITH IMAGES */
         .intro-section-enhanced { 
            max-width: 1400px; 
           margin: 0 auto 64px;
         }
         
         .intro-section-enhanced h3 { 
           font-size: 2.5rem; 
           font-weight: bold; 
           text-align: center; 
           margin-bottom: 48px; 
           color: #004225;
         }
         
         .intro-content-row {
           display: flex;
           align-items: center;
           gap: 48px;
           margin-bottom: 48px;
         }
         
         .intro-content-row:nth-child(even) {
           flex-direction: row-reverse;
         }
         
         .intro-text-col {
           flex: 1;
           min-width: 0;
         }
         .intro-text-col p{
             text-align: justify;
         }
          
         
         .intro-image-col {
           flex: 1;
           min-width: 0;
         }
         
         .intro-content-row p { 
           font-size: 1.125rem; 
           color: #374151; 
           margin-bottom: 16px; 
           line-height: 1.8;
         }
         
         .intro-image-wrapper {
           position: relative;
           border-radius: 10px;
           overflow: hidden;
           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
           height: 400px;
         }
         
         .intro-image-wrapper img {
           width: 100%;
           height: 100%;
           object-fit: cover;
           transition: transform 0.5s ease;
         }
         
         .intro-image-wrapper:hover img {
           transform: scale(1.05);
         }
         
         .section-description { 
           max-width: 900px; 
           margin: 0 auto 48px; 
           text-align: center; 
           font-size: 1.125rem; 
           color: #374151; 
           line-height: 1.7;
         }
         .row {
           display: flex;
           flex-wrap: wrap;
           margin: 0 -12px;
         }
         .col-12 {
           width: 100%;
           padding: 0 12px;
         }
         .col-sm-6 {
           width: 50%;
           padding: 0 12px;
         }
         .col-lg-3 {
           width: 25%;
           padding: 0 12px;
         }
         .person-card { 
           position: relative; 
           height: 400px; 
           border-radius: 8px; 
           overflow: hidden; 
           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
           transition: all 0.3s ease; 
           cursor: pointer; 
           margin-bottom: 24px;
         }
         .person-card:hover { 
           transform: translateY(-8px); 
           box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
         }
         .person-card img { 
           width: 100%; 
           height: 100%; 
           object-fit: cover; 
           transition: transform 0.3s ease;
         }
         .person-card:hover img { 
           transform: scale(1.1);
         }
         .person-info { 
           position: absolute; 
           bottom: 0; 
           left: 0; 
           right: 0; 
           background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.6), transparent); 
           padding: 48px 16px 16px; 
           color: white;
         }
         .person-name { 
           font-size: 1.25rem; 
           font-weight: bold; 
           margin-bottom: 4px;
         }
         .person-title { 
           font-size: 0.95rem; 
           font-weight: 600; 
           color: #e5e7eb; 
           margin-bottom: 2px;
         }
         .person-subtitle { 
           font-size: 0.875rem; 
           color: #d1d5db;
         }
         .stories-grid { 
           display: grid; 
           grid-template-columns: repeat(4, 1fr); 
           gap: 16px; 
           margin-bottom: 32px;
         }
         .story-card { 
           position: relative; 
           border-radius: 12px; 
           overflow: hidden; 
           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
           transition: all 0.5s ease; 
           cursor: pointer; 
           height: 280px; 
           display: flex; 
           align-items: center; 
           justify-content: center;
         }
         .story-card.large { 
           grid-column: span 2; 
           height: 280px;
         }
         .story-card.small { 
           height: 280px;
         }
         .story-card img, .story-card video { 
           width: 100%; 
           height: 100%; 
           object-fit: cover; 
           transition: transform 0.5s ease; 
           border-radius: 12px;
         }
         .story-card:hover img, .story-card:hover video { 
           transform: scale(1.1);
         }
         .story-overlay { 
           position: absolute; 
           inset: 0; 
           background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5), transparent); 
           opacity: 0.8; 
           transition: opacity 0.3s ease;
         }
         .story-card:hover .story-overlay { 
           opacity: 0.95;
         }
         .story-content { 
           position: absolute; 
           bottom: 0; 
           left: 0; 
           right: 0; 
           padding: 24px; 
           color: white; 
           z-index: 2;
         }
         .story-date { 
           font-size: 0.875rem; 
           color: #d1d5db; 
           margin-bottom: 8px;
         }
         .story-title { 
           font-size: 1rem; 
           font-weight: bold; 
           line-height: 1.4; 
           margin-bottom: 8px;
         }
         .story-excerpt { 
           font-size: 0.875rem; 
           color: #e5e7eb; 
           line-height: 1.5; 
           opacity: 0; 
           transition: opacity 0.3s ease;
         }
         .story-card:hover .story-excerpt { 
           opacity: 1;
         }
         .custom-btn { 
           background: #000; 
           color: white; 
           padding: 12px 32px; 
           border: none; 
           border-radius: 4px; 
           font-size: 1rem; 
           font-weight: 600; 
           cursor: pointer; 
           transition: background 0.3s ease;
         }
         .custom-btn:hover { 
           background: #333;
         }
         .play-icon { 
           position: absolute; 
           font-size: 3rem; 
           color: white; 
           opacity: 0.9; 
           z-index: 3; 
           pointer-events: none;
         }
         .text-center { 
           text-align: center;
         }
         .text-end {
           text-align: right;
         }
         .mb-5 {
           margin-bottom: 3rem;
         }
         .mt-4 {
           margin-top: 1.5rem;
         }
        
         @media (max-width: 1024px) { 
           .stories-grid { 
             grid-template-columns: repeat(2, 1fr);
           } 
           .story-card.large { 
             grid-column: span 1;
           }
           .col-lg-3 {
             width: 50%;
           }
           .intro-content-row {
             gap: 32px;
           }
         }
         
         @media (max-width: 768px) { 
           .intro-content-row,
           .intro-content-row:nth-child(even) {
             flex-direction: column;
           }
           
           .intro-image-wrapper {
             height: 250px;
           }
           
           .intro-section-enhanced h3 {
             font-size: 2rem;
           }
         }
         
         @media (max-width: 640px) { 
           .stories-grid { 
             grid-template-columns: 1fr;
           }
           .col-sm-6, .col-lg-3 {
             width: 100%;
           }
           .hero-title {
             font-size: 2.5rem;
           }
           .intro-content-row {
             gap: 24px;
           }
           .intro-image-wrapper {
             height: 220px;
           }
         }
      `}</style>

      {/* Hero Section */}
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
                Our partners are more than executives and staff, they are the driving force behind MAPSIGMA CAPITAL.
              </p>
              <p 
                data-animate-id="partners-p2"
                className={animatedElements.has('partners-p2') ? 'animate-fade-up animate-delay-2' : ''}
                style={{textAlign: 'center', fontSize: '1.125rem', color: '#374151', lineHeight: '1.7'}}
              >
                Together, they operate with discipline, agility and trust building the systems, relationships and results that define our success.
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
                  Load More Stories →
                </button>
              </div>
            )}
            
            {showAllVideos && (
              <div className="text-end">
                <button className="custom-btn" onClick={() => setShowAllVideos(false)}>
                  ↑ Show Less
                </button>
              </div>
            )}
          </section>
       
      
      
      <MapYourMove/>
    </div>
  );
};

export default PeoplePage;