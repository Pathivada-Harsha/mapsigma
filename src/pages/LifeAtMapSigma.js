"use client"

import { useState } from "react"
import "../pages_css/LifeAtMapSigma.css"
import { NavLink } from "react-router-dom"
import LifeHero from "../components/Life-Hero1.js"

import LifeCareers from "../components/Life-Careers.js"
import LifeValues from "../components/Life-Values.js"
import LifeCta from "../components/Life-Cta.js"

import Life1 from "../images/LifeAtMapSigma/LifeInsightInvestement.png"
import Life2 from "../images/LifeAtMapSigma/LifeInsightTechnology.png"
import Life3 from "../images/LifeAtMapSigma/LifeInternship.png"
import life4 from "../images/Research&insights/H-Article1.png"
import life5 from "../images/Research&insights/H-Article2.png"
import life6 from "../images/Research&insights/H-Article3.png"
import life7 from "../images/Research&insights/H-Article7.png"
import life8 from "../images/Research&insights/H-Article8.png"




export default function LifeContent() {
    const [selectedDepartment, setSelectedDepartment] = useState("all")
    const [expandedDepartments, setExpandedDepartments] = useState({})

    const departments = {
        "Client Service": [
            "Associate, Business Development (Private Wealth)",
            "Associate, Client Service (AIA Labs)",
            "Client Reporting & Portfolio Analytics Analyst",
        ],
        Technology: ["Technical Project Manager, Investment Technology"],
        Security: ["Manager, Insider Threat"],
        "Alpha Engine": [
            "Executive Coordinator",
            "Investment Associate Intern – 2026",
            "Investment Engineer Intern – 2026",
            "Macroeconomic Research Associate",
        ],
        "Total Portfolio Strategies": ["Investment Engineer", "Senior Investment Associate"],
        "Investment Implementation": ["Portfolio Associate", "Portfolio Operations Associate", "Trading Associate"],
    }

    const toggleDepartment = (dept) => {
        setExpandedDepartments((prev) => ({
            ...prev,
            [dept]: !prev[dept],
        }))
    }

    const filteredDepartments =
        selectedDepartment === "all" ? departments : { [selectedDepartment]: departments[selectedDepartment] }

    return (
        <div className="life-container">
            {/* Hero Section */}
            <LifeHero />
            {/* <section className="life-hero">
        <div className="life-hero-curved-bg">
          <div className="life-hero-text">
            <h1 className="life-hero-title">Life at MAPSIGMA</h1>
            <p className="life-hero-subtitle">
              At MAPSIGMA, culture is our greatest edge. We build an environment where people don't just work — they
              grow, lead, and belong.
            </p>
            <button className="life-hero-btn">Explore Life</button>
          </div>
        </div>
        <div className="life-hero-image">
          <img src="/life-hero-photo.jpg" alt="Life at MAPSIGMA" />
        </div>
      </section> */}

            {/* Insights & Opportunities Section */}
            <section className="life-insights">
                <div className="life-insights-card life-insights-card-left">
                    <img src={Life1} alt="Insight Investment" className="life-insights-img" />
                    <div className="life-insights-text">
                        <h3 className="life-insights-title">Insight Investment</h3>
                        <p className="life-insights-desc">
                            We uncover what drives markets and turn that knowledge into smart portfolios and sharp insights for our
                            clients.
                        </p>
                        <NavLink to="/InsightsInvestement" className="life-insights-link">
                            Learn More →
                        </NavLink>
                    </div>
                </div>

                <div className="life-insights-card life-insights-card-right">
                    <div className="life-insights-text">
                        <h3 className="life-insights-title">Insight Technology</h3>
                        <p className="life-insights-desc">
                            Shape the future of investing by turning insight into intelligent systems.
                        </p>
                        <NavLink to="/Technology3D" className="life-insights-link">
                            Learn More →
                        </NavLink>
                    </div>
                    <img src={Life2} alt="Insight Technology" className="life-insights-img" />
                </div>

                <div className="life-insights-card life-insights-card-left">
                    <img src={Life3} alt="Internship" className="life-insights-img" />
                    <div className="life-insights-text">
                        <h3 className="life-insights-title">Internship</h3>
                        <p className="life-insights-desc">
                            Explore our investment internship programs designed to offer real-world experience and meaningful exposure
                            to MAPSIGMA's strategies.
                        </p>
                        <NavLink to="/Internship" className="life-insights-link">
                            Learn More →
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* Pictures Section */}
            <section className="life-pictures">
                <div className="life-pictures-header">
                    <div className="life-pictures-header-left">
                        <h2 className="life-pictures-heading">A Culture That Defines Us</h2>
                    </div>
                    <div className="life-pictures-header-right">
                        <p className="life-pictures-description">
                            At MAPSIGMA, culture isn’t just part of our work—it is the foundation of our success.
                            It shapes how we think, how we collaborate, and how we create lasting impact for our clients and communities.
                        </p>
                        <button className="life-pictures-btn">Discover Our Culture</button>
                    </div>
                </div>

                <div className="life-pictures-grid">
                    <div className="life-picture-item life-picture-top-left">
                        <img src={life4} alt="Office Teamwork" />
                    </div>
                    <div className="life-picture-item life-picture-top-center">
                        <img src={life5} alt="Team Culture" />
                    </div>
                    <div className="life-picture-item life-picture-top-right">
                        <img src={life6} alt="Brainstorming Session" />
                    </div>
                    <div className="life-picture-item life-picture-bottom-left">
                        <img src={life7} alt="Diverse Team" />
                    </div>
                    <div className="life-picture-item life-picture-bottom-right">
                        <img src={life8} alt="Team Collaboration" />
                    </div>
                </div>
            </section>

            
           <LifeValues />
            <LifeCareers />
            {/* Job Openings Section */}
            <section className="life-jobs">
                <div className="life-jobs-header">
                    <h2 className="life-jobs-title">Explore Opportunities</h2>
                    <p className="life-jobs-subtitle">We don't just grow portfolios. We grow people.</p>

                    <div className="life-jobs-filter">
                        <label htmlFor="department-filter">Filter by Department:</label>
                        <select
                            id="department-filter"
                            value={selectedDepartment}
                            onChange={(e) => setSelectedDepartment(e.target.value)}
                            className="life-jobs-select"
                        >
                            <option value="all">All Departments</option>
                            {Object.keys(departments).map((dept) => (
                                <option key={dept} value={dept}>
                                    {dept}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="life-jobs-list">
                    {Object.entries(filteredDepartments).map(([dept, roles], index) => (
                        <div key={dept} className={`life-jobs-department ${index % 2 === 0 ? "life-jobs-even" : "life-jobs-odd"}`}>
                            <button className="life-jobs-dept-header" onClick={() => toggleDepartment(dept)}>
                                <h3 className="life-jobs-dept-name">{dept}</h3>
                                <span className="life-jobs-toggle">{expandedDepartments[dept] ? "−" : "+"}</span>
                            </button>

                            {expandedDepartments[dept] && (
                                <div className="life-jobs-roles">
                                    {roles.map((role, idx) => (
                                        <div key={idx} className="life-jobs-role">
                                            <span className="life-jobs-role-name">{role}</span>
                                            <button className="life-jobs-apply-btn">Apply Now</button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
            <LifeCta />
        </div>
    )
}
