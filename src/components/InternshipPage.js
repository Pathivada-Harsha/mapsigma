import React, { useState } from 'react';
import "../components_css/InternshipPage.css"
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