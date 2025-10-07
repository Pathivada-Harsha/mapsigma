import React from "react";
import { useNavigate } from 'react-router-dom';

const PartnersSection = () => {
  const navigate = useNavigate();

  // Add click handler function
  const handlePartnerClick = (partner) => {
    navigate('/people/leader-detail', { state: { leader: partner } });
  };
 
  const partners = [
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
    },
    {
      name: "Ramesh Kumar",
      title: "Senior Partner",
      subtitle: "Investment Strategy",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&q=80",
      bio: [
        "Ramesh Kumar oversees investment strategy at MAPSIGMA Capital, focusing on asset allocation and long-term portfolio growth across sectors.",
        "He previously served as Director of Strategic Investments at UBS, managing institutional portfolios and developing innovative asset strategies.",
        "Ramesh holds a Master's in Financial Engineering from NYU and has authored several research papers on market behavior and risk-adjusted returns."
      ],
      stats: [
        { number: "22+", label: "Years Experience" },
        { number: "$4B+", label: "Funds Managed" },
        { number: "12+", label: "Market Sectors Covered" }
      ],
      achievements: [
        {
          title: "Top Investment Strategist",
          description: "Recognized for designing high-yield multi-asset investment portfolios"
        },
        {
          title: "Thought Leadership",
          description: "Published multiple papers on adaptive investment models"
        }
      ]
    },
    {
      name: "Sneha Patel",
      title: "Partner",
      subtitle: "Portfolio Management",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=600&fit=crop&q=80",
      bio: [
        "Sneha Patel manages key client portfolios at MAPSIGMA Capital, ensuring optimal returns through disciplined portfolio rebalancing and risk management.",
        "She has 16 years of experience in wealth management, previously working with Franklin Templeton and HDFC Asset Management.",
        "Sneha earned her MBA from IIM Ahmedabad and is known for her deep understanding of market cycles and client-focused strategies."
      ],
      stats: [
        { number: "16+", label: "Years Experience" },
        { number: "500+", label: "Clients Served" },
        { number: "96%", label: "Retention Rate" }
      ],
      achievements: [
        {
          title: "Portfolio Performance Award",
          description: "Delivered consistent above-benchmark returns for institutional clients"
        },
        {
          title: "Client Service Excellence",
          description: "Maintained over 95% client retention through personalized advisory"
        }
      ]
    },
    {
      name: "Vikram Singh",
      title: "Partner",
      subtitle: "Technology & Innovation",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&q=80",
      bio: [
        "Vikram Singh leads technology and innovation initiatives at MAPSIGMA Capital, driving digital transformation across investment operations.",
        "Previously, Vikram was the Head of FinTech Solutions at Infosys, where he developed AI-driven tools for financial analysis and decision-making.",
        "He holds an MS in Computer Science from Stanford University and specializes in blockchain and data analytics for finance."
      ],
      stats: [
        { number: "14+", label: "Years Experience" },
        { number: "10+", label: "Tech Platforms Built" },
        { number: "40%", label: "Operational Automation" }
      ],
      achievements: [
        {
          title: "Innovation Leadership Award",
          description: "Implemented AI-powered analytics improving decision accuracy by 25%"
        },
        {
          title: "Tech Transformation",
          description: "Digitized core investment processes across the organization"
        }
      ]
    },
    {
      name: "Anjali Verma",
      title: "Partner",
      subtitle: "Client Relations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&q=80",
      bio: [
        "Anjali Verma leads client relations and institutional partnerships at MAPSIGMA Capital, ensuring a seamless client experience and strong global relationships.",
        "She previously worked with KPMG and Deloitte in client strategy and business development roles, managing high-value corporate relationships.",
        "Anjali holds an MBA in Marketing from London Business School and is known for her empathetic communication and strategic partnership skills."
      ],
      stats: [
        { number: "12+", label: "Years Experience" },
        { number: "200+", label: "Clients Onboarded" },
        { number: "98%", label: "Client Satisfaction" }
      ],
      achievements: [
        {
          title: "Client Champion Award",
          description: "Recognized for maintaining industry-leading satisfaction scores"
        },
        {
          title: "Global Partnership Builder",
          description: "Expanded MAPSIGMA's presence into 5 new international markets"
        }
      ]
    },
    {
      name: "Karthik Rao",
      title: "Partner",
      subtitle: "Research & Analytics",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&q=80",
      bio: [
        "Karthik Rao leads the research and analytics division at MAPSIGMA Capital, providing data-driven insights to guide investment decisions.",
        "With a background in econometrics, Karthik has worked with Moody's Analytics and CRISIL, developing predictive models for market forecasting.",
        "He holds a PhD in Quantitative Finance from IIT Bombay and specializes in big data analytics and algorithmic modeling."
      ],
      stats: [
        { number: "13+", label: "Years Experience" },
        { number: "100+", label: "Research Papers Published" },
        { number: "10+", label: "Data Models Deployed" }
      ],
      achievements: [
        {
          title: "Data Innovation Award",
          description: "Developed predictive model reducing investment risk by 20%"
        },
        {
          title: "Academic Contribution",
          description: "Regular contributor to top finance and analytics journals"
        }
      ]
    },
    {
      name: "Meera Desai",
      title: "Partner",
      subtitle: "Operations",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop&q=80",
      bio: [
        "Meera Desai manages operations at MAPSIGMA Capital, focusing on streamlining workflows, vendor management, and service delivery.",
        "She previously served as Operations Head at HSBC Global Services and led several process optimization projects.",
        "Meera holds an MBA in Operations from SP Jain Institute and is a Lean Six Sigma Black Belt professional."
      ],
      stats: [
        { number: "17+", label: "Years Experience" },
        { number: "25%", label: "Cost Reduction Achieved" },
        { number: "99%", label: "Operational Accuracy" }
      ],
      achievements: [
        {
          title: "Process Innovation Award",
          description: "Implemented automation that improved reporting speed by 40%"
        },
        {
          title: "Operational Excellence",
          description: "Recognized for maintaining top-tier service efficiency standards"
        }
      ]
    },
    {
      name: "Rahul Joshi",
      title: "Partner",
      subtitle: "Legal & Compliance",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=600&fit=crop&q=80",
      bio: [
        "Rahul Joshi oversees legal affairs and compliance at MAPSIGMA Capital, ensuring regulatory adherence across jurisdictions.",
        "Before joining MAPSIGMA, Rahul worked as Senior Legal Counsel at Clifford Chance, specializing in financial law and corporate governance.",
        "He holds an LLM in Corporate Law from the University of Cambridge and is a member of the International Bar Association."
      ],
      stats: [
        { number: "19+", label: "Years Experience" },
        { number: "50+", label: "Legal Frameworks Developed" },
        { number: "0", label: "Regulatory Violations" }
      ],
      achievements: [
        {
          title: "Legal Excellence Award",
          description: "Successfully led cross-border legal restructuring projects"
        },
        {
          title: "Regulatory Leadership",
          description: "Played key role in designing MAPSIGMA's global compliance policy"
        }
      ]
    },
    {
      name: "Divya Menon",
      title: "Partner",
      subtitle: "ESG & Sustainability",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=600&fit=crop&q=80",
      bio: [
        "Divya Menon heads ESG and sustainability initiatives at MAPSIGMA Capital, ensuring responsible investing and ethical business practices.",
        "She previously worked with the World Bank's sustainability division and has advised Fortune 500 firms on environmental governance.",
        "Divya holds a Master's in Environmental Economics from Yale University and is a certified sustainability professional."
      ],
      stats: [
        { number: "11+", label: "Years Experience" },
        { number: "75+", label: "Sustainable Projects Led" },
        { number: "60%", label: "Green Portfolio Share" }
      ],
      achievements: [
        {
          title: "Sustainability Leadership Award",
          description: "Recognized for championing ESG adoption across investment portfolios"
        },
        {
          title: "Global Sustainability Advocate",
          description: "Represented MAPSIGMA at UN Global Compact forums"
        }
      ]
    }
  ];

  return (
    <section className="partners-section">
      <style>{`
        .partners-section {
          background: white;
          padding: 48px 0;
        }

        .partners-section .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 24px;
          color: #004225;
        }

        .partners-section .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -12px;
        }

        .partners-section .col-12 {
          width: 100%;
          padding: 0 12px;
        }

        .partners-section .col-sm-6 {
          width: 100%;
          padding: 0 12px;
        }

        .partners-section .col-lg-3 {
          width: 100%;
          padding: 0 12px;
        }

        @media (min-width: 576px) {
          .partners-section .col-sm-6 {
            width: 50%;
          }
        }

        @media (min-width: 992px) {
          .partners-section .col-lg-3 {
            width: 25%;
          }
        }

        .partners-section .person-card {
          position: relative;
          height: 400px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          margin-bottom: 24px;
        }

        .partners-section .person-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
        }

        .partners-section .person-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .partners-section .person-card:hover img {
          transform: scale(1.1);
        }

        .partners-section .person-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.6), transparent);
          padding: 48px 16px 16px;
          color: white;
        }

        .partners-section .person-name {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 4px;
        }

        .partners-section .person-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #e5e7eb;
          margin-bottom: 2px;
        }

        .partners-section .person-subtitle {
          font-size: 0.875rem;
          color: #d1d5db;
        }
      `}</style>

      <div className="container">
        <h2 className="section-title">Our Partners</h2>

        <div className="row">
          {partners.map((partner, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-3">
              <div 
                className="person-card"
                onClick={() => handlePartnerClick(partner)}
              >
                <img src={partner.image} alt={partner.name} />
                <div className="person-info">
                  <div className="person-name">{partner.name}</div>
                  <div className="person-title">{partner.title}</div>
                  <div className="person-subtitle">{partner.subtitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;