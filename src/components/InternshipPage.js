import React, { useState } from 'react';

const InternshipPage = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      title: "Investment Analysis Internship",
      duration: "12 Weeks",
      location: "Hybrid",
      description: "Work alongside our investment team to analyze markets, evaluate opportunities, and contribute to real portfolio decisions.",
      responsibilities: [
        "Conduct market research and competitive analysis",
        "Build financial models and valuations",
        "Participate in investment committee meetings",
        "Prepare investment memos and presentations"
      ],
      skills: [
        "Financial modeling",
        "Data analysis",
        "Research skills",
        "Excel proficiency"
      ]
    },
    {
      title: "Technology & Data Internship",
      duration: "10-12 Weeks",
      location: "On-site/Remote",
      description: "Join our technology team to build and optimize systems that power intelligent investment decisions.",
      responsibilities: [
        "Develop data pipelines and analytics tools",
        "Work on AI/ML investment models",
        "Enhance portfolio management systems",
        "Contribute to client-facing platforms"
      ],
      skills: [
        "Python/JavaScript",
        "Data structures",
        "Machine learning basics",
        "Problem-solving"
      ]
    },
    {
      title: "Risk & Compliance Internship",
      duration: "12 Weeks",
      location: "On-site",
      description: "Learn how we protect capital and maintain regulatory excellence through robust risk management frameworks.",
      responsibilities: [
        "Monitor portfolio risk metrics",
        "Assist with compliance reviews",
        "Analyze risk scenarios and stress tests",
        "Support regulatory reporting"
      ],
      skills: [
        "Analytical thinking",
        "Attention to detail",
        "Regulatory knowledge",
        "Excel/reporting tools"
      ]
    },
    {
      title: "Strategy & Operations Internship",
      duration: "10 Weeks",
      location: "Hybrid",
      description: "Get exposure to the business side of investment management and help shape operational excellence.",
      responsibilities: [
        "Support strategic initiatives and projects",
        "Analyze operational processes",
        "Assist with client communications",
        "Contribute to business development"
      ],
      skills: [
        "Business acumen",
        "Communication",
        "Project management",
        "Strategic thinking"
      ]
    }
  ];

  const benefits = [
    {
      icon: "💼",
      title: "Real Responsibility",
      description: "Work on meaningful projects that impact actual investment decisions"
    },
    {
      icon: "👥",
      title: "Mentorship",
      description: "One-on-one guidance from senior investment professionals"
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Access to training programs, workshops, and industry certifications"
    },
    {
      icon: "🌟",
      title: "Career Path",
      description: "Strong track record of converting interns to full-time positions"
    },
    {
      icon: "💰",
      title: "Competitive Compensation",
      description: "Market-leading stipends and performance bonuses"
    },
    {
      icon: "🌐",
      title: "Network Building",
      description: "Connect with leaders across finance, technology, and business"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Former Investment Analysis Intern → Analyst",
      quote: "MAPSIGMA gave me real exposure to investment decisions from day one. I wasn't just making coffee—I was building models that informed actual portfolio allocations."
    },
    {
      name: "Rahul Menon",
      role: "Former Technology Intern → Developer",
      quote: "The technology team treated me as a peer, not just an intern. I shipped code that's still running in production today."
    },
    {
      name: "Ananya Reddy",
      role: "Former Strategy Intern → Associate",
      quote: "What stood out was the mentorship. My manager invested real time in my growth, and I'm now a full-time team member."
    }
  ];

  const applicationProcess = [
    {
      step: "1",
      title: "Submit Application",
      description: "Complete our online application with your resume, transcripts, and a brief statement of interest."
    },
    {
      step: "2",
      title: "Initial Screening",
      description: "Our recruitment team reviews applications and conducts preliminary phone interviews."
    },
    {
      step: "3",
      title: "Assessment",
      description: "Complete a relevant case study or technical assessment based on your chosen program."
    },
    {
      step: "4",
      title: "Final Interview",
      description: "Meet with team members and leadership for in-depth discussions about fit and aspirations."
    },
    {
      step: "5",
      title: "Offer & Onboarding",
      description: "Receive your offer and begin the onboarding process to set you up for success."
    }
  ];

  return (
    <div className="InternshipPage-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .InternshipPage-container {
          
          color: #1a1a1a;
          background-color: #ffffff;
          line-height: 1.6;
        }

        .InternshipPage-hero {
          background: 
            linear-gradient(rgba(26, 26, 46, 0.85), rgba(22, 33, 62, 0.85)),
            url('../images/principles/PrincipleHome.png');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: #ffffff;
          padding: 160px 40px 120px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .InternshipPage-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08) 0%, transparent 50%);
        }

        .InternshipPage-hero-content {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .InternshipPage-hero-tag {
          display: inline-block;
          background: rgba(255, 255, 255, 0.15);
          padding: 8px 24px;
          border-radius: 30px;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }

        .InternshipPage-hero h1 {
          font-size: 4.5rem;
          font-weight: 300;
          margin-bottom: 28px;
          letter-spacing: -2px;
          line-height: 1.1;
        }

        .InternshipPage-hero-subtitle {
          font-size: 1.5rem;
          font-weight: 300;
          line-height: 1.8;
          opacity: 0.95;
          max-width: 800px;
          margin: 0 auto 40px;
        }

        .InternshipPage-hero-cta {
          display: inline-block;
          background: #ffffff;
          color: #1a1a2e;
          padding: 16px 48px;
          font-size: 1.05rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-top: 20px;
        }

        .InternshipPage-hero-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(255, 255, 255, 0.3);
        }

        .InternshipPage-section {
          padding: 100px 40px;
        }

        .InternshipPage-section-title {
          font-size: 3rem;
          font-weight: 400;
          margin-bottom: 20px;
          color: #1a1a2e;
          text-align: center;
          padding: 0 40px;
        }

        .InternshipPage-section-subtitle {
          font-size: 1.25rem;
          color: #666;
          text-align: center;
          margin-bottom: 70px;
          padding: 0 40px;
        }

        .InternshipPage-programs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
          padding: 0 40px;
        }

        .InternshipPage-program-card {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          border: 1px solid transparent;
          padding: 48px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .InternshipPage-program-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .InternshipPage-program-card:hover::before {
          transform: scaleX(1);
        }

        .InternshipPage-program-card::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(26, 26, 46, 0.03) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          transition: width 0.6s ease, height 0.6s ease;
          border-radius: 50%;
        }

        .InternshipPage-program-card:hover::after {
          width: 500px;
          height: 500px;
        }

        .InternshipPage-program-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 60px rgba(26, 26, 46, 0.15);
          border-color: #1a1a2e;
        }

        .InternshipPage-program-header {
          margin-bottom: 28px;
          padding-bottom: 24px;
          border-bottom: 2px solid #e8e8e8;
          position: relative;
          z-index: 1;
        }

        .InternshipPage-program-title {
          font-size: 1.85rem;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }

        .InternshipPage-program-meta {
          display: flex;
          gap: 24px;
          font-size: 0.9rem;
          color: #666;
          flex-wrap: wrap;
        }

        .InternshipPage-program-meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(26, 26, 46, 0.05);
          padding: 6px 14px;
          border-radius: 20px;
          font-weight: 500;
        }

        .InternshipPage-program-description {
          font-size: 1.05rem;
          color: #555;
          line-height: 1.8;
          margin-bottom: 28px;
          position: relative;
          z-index: 1;
        }

        .InternshipPage-program-section {
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }

        .InternshipPage-program-section-title {
          font-size: 1rem;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 14px;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .InternshipPage-program-section-title::before {
          content: '';
          width: 24px;
          height: 2px;
          background: #1a1a2e;
        }

        .InternshipPage-program-list {
          list-style: none;
          display: grid;
          gap: 10px;
        }

        .InternshipPage-program-list li {
          padding: 10px 10px 10px 32px;
          position: relative;
          color: #555;
          font-size: 0.95rem;
          background: rgba(26, 26, 46, 0.02);
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .InternshipPage-program-list li:hover {
          background: rgba(26, 26, 46, 0.05);
          padding-left: 36px;
        }

        .InternshipPage-program-list li::before {
          content: '→';
          position: absolute;
          left: 12px;
          color: #1a1a2e;
          font-weight: bold;
          font-size: 1.1rem;
        }

        .InternshipPage-benefits {
          background: #f8f9fa;
        }

        .InternshipPage-benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          padding: 0 40px;
        }

        .InternshipPage-benefit-card {
          text-align: center;
          padding: 32px 24px;
          background: #ffffff;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .InternshipPage-benefit-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .InternshipPage-benefit-icon {
          font-size: 3.5rem;
          margin-bottom: 20px;
          display: block;
        }

        .InternshipPage-benefit-title {
          font-size: 1.35rem;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 12px;
        }

        .InternshipPage-benefit-description {
          color: #666;
          line-height: 1.7;
        }

        .InternshipPage-testimonials {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: #ffffff;
        }

        .InternshipPage-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
          padding: 0 40px;
        }

        .InternshipPage-testimonial-card {
          background: rgba(255, 255, 255, 0.08);
          padding: 40px;
          border-left: 4px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .InternshipPage-testimonial-card:hover {
          background: rgba(255, 255, 255, 0.12);
          border-left-color: #ffffff;
        }

        .InternshipPage-testimonial-quote {
          font-size: 1.15rem;
          line-height: 1.8;
          margin-bottom: 24px;
          font-style: italic;
          opacity: 0.95;
        }

        .InternshipPage-testimonial-author {
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 4px;
        }

        .InternshipPage-testimonial-role {
          font-size: 0.9rem;
          opacity: 0.7;
        }

        .InternshipPage-process {
          background: #ffffff;
        }

        .InternshipPage-process-timeline {
          position: relative;
          padding: 0 40px;
        }

        .InternshipPage-process-timeline::before {
          content: '';
          position: absolute;
          left: 30px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #e5e5e5;
        }

        .InternshipPage-process-step {
          display: flex;
          gap: 40px;
          margin-bottom: 50px;
          position: relative;
        }

        .InternshipPage-process-number {
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          background: #1a1a2e;
          color: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          position: relative;
          z-index: 1;
        }

        .InternshipPage-process-content {
          flex: 1;
          padding-top: 8px;
        }

        .InternshipPage-process-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 12px;
        }

        .InternshipPage-process-description {
          font-size: 1.05rem;
          color: #666;
          line-height: 1.7;
        }

        .InternshipPage-cta {
          background: 
            linear-gradient(rgba(26, 26, 46, 0.92), rgba(22, 33, 62, 0.92)),
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect fill="%231a1a2e" width="1200" height="600"/><g fill="%23ffffff" opacity="0.06"><path d="M0,200 Q300,100 600,200 T1200,200 L1200,600 L0,600 Z"/><circle cx="150" cy="120" r="60"/><circle cx="950" cy="180" r="80"/><circle cx="500" cy="400" r="100"/><rect x="800" y="350" width="100" height="100" transform="rotate(45 850 400)"/></g></svg>');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: #ffffff;
          text-align: center;
          padding: 120px 40px;
          position: relative;
          overflow: hidden;
        }

        .InternshipPage-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 30% 40%, rgba(255,255,255,0.08) 0%, transparent 60%),
            radial-gradient(circle at 70% 60%, rgba(255,255,255,0.06) 0%, transparent 60%);
        }

        .InternshipPage-cta > * {
          position: relative;
          z-index: 1;
        }

        .InternshipPage-cta h2 {
          font-size: 3rem;
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 24px;
        }

        .InternshipPage-cta p {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 40px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .InternshipPage-cta-button {
          display: inline-block;
          background: #ffffff;
          color: #1a1a2e;
          padding: 18px 56px;
          font-size: 1.1rem;
          font-weight: 600;
          border: 2px solid #ffffff;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .InternshipPage-cta-button:hover {
          background: transparent;
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 968px) {
          .InternshipPage-hero {
            padding: 120px 24px 100px;
          }

          .InternshipPage-hero h1 {
            font-size: 3rem;
          }

          .InternshipPage-hero-subtitle {
            font-size: 1.25rem;
          }

          .InternshipPage-programs-grid {
            grid-template-columns: 1fr;
          }

          .InternshipPage-section {
            padding: 70px 24px;
          }

          .InternshipPage-section-title {
            font-size: 2.25rem;
          }

          .InternshipPage-process-timeline::before {
            left: 15px;
          }

          .InternshipPage-process-step {
            gap: 24px;
          }

          .InternshipPage-process-number {
            width: 48px;
            height: 48px;
            font-size: 1.25rem;
          }
        }

        @media (max-width: 640px) {
          .InternshipPage-hero h1 {
            font-size: 2.5rem;
          }

          .InternshipPage-benefits-grid,
          .InternshipPage-testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="InternshipPage-hero">
        <div className="InternshipPage-hero-content">
          <div className="InternshipPage-hero-tag">Join Our Team</div>
          <h1>Internship</h1>
          <p className="InternshipPage-hero-subtitle">
            Explore our investment internship programs designed to offer real-world experience 
            and meaningful exposure to MAPSIGMA's strategies.
          </p>
          <button className="InternshipPage-hero-cta">
            View Open Positions
          </button>
        </div>
      </div>

      <div className="InternshipPage-section">
        <h2 className="InternshipPage-section-title">Our Internship Programs</h2>
        <p className="InternshipPage-section-subtitle">
          We offer diverse internship opportunities across investment, technology, risk, and operations
        </p>
        
        <div className="InternshipPage-programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="InternshipPage-program-card">
              <div className="InternshipPage-program-header">
                <h3 className="InternshipPage-program-title">{program.title}</h3>
                <div className="InternshipPage-program-meta">
                  <div className="InternshipPage-program-meta-item">
                    <span>⏱️</span> {program.duration}
                  </div>
                  <div className="InternshipPage-program-meta-item">
                    <span>📍</span> {program.location}
                  </div>
                </div>
              </div>
              
              <p className="InternshipPage-program-description">{program.description}</p>
              
              <div className="InternshipPage-program-section">
                <div className="InternshipPage-program-section-title">Key Responsibilities</div>
                <ul className="InternshipPage-program-list">
                  {program.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
              
              <div className="InternshipPage-program-section">
                <div className="InternshipPage-program-section-title">Skills You'll Develop</div>
                <ul className="InternshipPage-program-list">
                  {program.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="InternshipPage-section InternshipPage-benefits">
        <h2 className="InternshipPage-section-title">Why Intern at MAPSIGMA</h2>
        <p className="InternshipPage-section-subtitle">
          We invest in your growth and provide experiences that shape your career
        </p>
        
        <div className="InternshipPage-benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="InternshipPage-benefit-card">
              <span className="InternshipPage-benefit-icon">{benefit.icon}</span>
              <h3 className="InternshipPage-benefit-title">{benefit.title}</h3>
              <p className="InternshipPage-benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="InternshipPage-section InternshipPage-testimonials">
        <h2 className="InternshipPage-section-title" style={{color: '#ffffff'}}>
          Hear From Our Alumni
        </h2>
        <p className="InternshipPage-section-subtitle" style={{color: 'rgba(255,255,255,0.9)'}}>
          Stories from interns who became full-time team members
        </p>
        
        <div className="InternshipPage-testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="InternshipPage-testimonial-card">
              <p className="InternshipPage-testimonial-quote">"{testimonial.quote}"</p>
              <div className="InternshipPage-testimonial-author">{testimonial.name}</div>
              <div className="InternshipPage-testimonial-role">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="InternshipPage-section InternshipPage-process">
        <h2 className="InternshipPage-section-title">Application Process</h2>
        <p className="InternshipPage-section-subtitle">
          Five steps to joining the MAPSIGMA team
        </p>
        
        <div className="InternshipPage-process-timeline">
          {applicationProcess.map((step, index) => (
            <div key={index} className="InternshipPage-process-step">
              <div className="InternshipPage-process-number">{step.step}</div>
              <div className="InternshipPage-process-content">
                <h3 className="InternshipPage-process-title">{step.title}</h3>
                <p className="InternshipPage-process-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="InternshipPage-cta">
        <h2>Ready to Begin Your Journey?</h2>
        <p>
          Join a team that values growth, excellence, and meaningful work. 
          Apply today and shape the future of investing with us.
        </p>
        <button className="InternshipPage-cta-button">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default InternshipPage;