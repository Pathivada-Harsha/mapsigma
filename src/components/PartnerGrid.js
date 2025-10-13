import React from "react";
import { useNavigate } from 'react-router-dom';
import Austin from '../images/people/Austin.jpg'
import Arun from '../images/people/Arunsie.png'
import femaildummy from '../images/femaildummy.png'

const PartnersSection = () => {
  const navigate = useNavigate();

  // Add click handler function
  const handlePartnerClick = (partner) => {
    navigate('/people/leader-detail', { state: { leader: partner } });
  };
 
const partners = [
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
    image:femaildummy,
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