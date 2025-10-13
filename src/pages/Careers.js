import React, { useState } from 'react';
import '../pages_css/Careers.css';

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState([]);
  const [collapsedSections, setCollapsedSections] = useState({});

  const departmentsData = {
    'Client Service': [
      'Associate, Business Development (Private Wealth)',
      'Associate, Client Service (AIA Labs)',
      'Client Reporting & Portfolio Analytics Analyst'
    ],
    'Technology': [
      'Technical Project Manager, Investment Technology'
    ],
    'Security': [
      'Manager, Insider Threat'
    ],
    'Alpha Engine': [
      'Executive Coordinator',
      'Investment Associate Intern – 2026',
      'Investment Engineer Intern – 2026',
      'Macroeconomic Research Associate'
    ],
    'Total Portfolio Strategies': [
      'Investment Engineer',
      'Senior Investment Associate'
    ],
    'Investment Implementation': [
      'Portfolio Associate',
      'Portfolio Operations Associate',
      'Trading Associate'
    ]
  };

  const allJobs = Object.entries(departmentsData).flatMap(([dept, roles]) =>
    roles.map(role => ({
      title: role,
      department: dept,
      location: dept === 'Alpha Engine' ? 'New York, London' : 
                dept === 'Technology' ? 'San Francisco, Austin' :
                dept === 'Security' ? 'Washington DC' : 'New York'
    }))
  );

  const filteredJobs = allJobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedDepartments.length === 0 || selectedDepartments.includes(job.department)) &&
    (selectedExperienceLevels.length === 0 || selectedExperienceLevels.some(level => 
      job.title.toLowerCase().includes(level.toLowerCase())
    ))
  );

  const toggleSection = (section) => {
    setCollapsedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleDepartment = (dept) => {
    setSelectedDepartments(prev => 
      prev.includes(dept) 
        ? prev.filter(d => d !== dept)
        : [...prev, dept]
    );
  };

  const toggleExperienceLevel = (level) => {
    setSelectedExperienceLevels(prev => 
      prev.includes(level) 
        ? prev.filter(l => l !== level)
        : [...prev, level]
    );
  };

  const selectAllDepartments = () => {
    setSelectedDepartments(selectedDepartments.length === Object.keys(departmentsData).length ? [] : Object.keys(departmentsData));
  };

  const selectAllExperienceLevels = () => {
    const experienceLevels = ['Experienced Professionals', 'Internships', 'New Graduates'];
    setSelectedExperienceLevels(selectedExperienceLevels.length === experienceLevels.length ? [] : experienceLevels);
  };

  return (
    <div className="careers-page-container">
      <div className="careers-page-header">
        <div className="careers-page-header-wrapper">
          <div className="careers-page-breadcrumb">
            Careers / Explore Opportunities
          </div>
          <h1 className="careers-page-title">
            Explore Opportunities
          </h1>
          <p className="careers-page-subtitle">
            We don't just grow portfolios. We grow people.
          </p>
        </div>
      </div>

      <div className="careers-page-content">
        <div className="careers-page-sidebar">
          <div className="careers-page-search-container">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="careers-page-search-input"
            />
            <span className="careers-page-search-icon">🔍</span>
          </div>

          <div className="careers-page-filter-section">
            <div 
              className="careers-page-filter-title"
              onClick={() => toggleSection('experience')}
            >
              <span>Experience Level</span>
              <span className={`careers-page-collapse-icon ${collapsedSections['experience'] ? 'rotated' : ''}`}>
                −
              </span>
            </div>
            
            {!collapsedSections['experience'] && (
              <>
                <a 
                  href="#"
                  className="careers-page-select-all"
                  onClick={(e) => { e.preventDefault(); selectAllExperienceLevels(); }}
                >
                  Select All
                </a>
                
                <div className="careers-page-checkbox-group">
                  {['Experienced Professionals', 'Internships', 'New Graduates'].map(level => (
                    <div 
                      key={level}
                      className="careers-page-checkbox-item"
                      onClick={() => toggleExperienceLevel(level)}
                    >
                      <div className={`careers-page-checkbox ${selectedExperienceLevels.includes(level) ? 'checked' : ''}`}>
                        {selectedExperienceLevels.includes(level) ? '✓' : ''}
                      </div>
                      <span className="careers-page-checkbox-label">
                        {level}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="careers-page-filter-section">
            <div 
              className="careers-page-filter-title"
              onClick={() => toggleSection('departments')}
            >
              <span>Departments</span>
              <span className={`careers-page-collapse-icon ${collapsedSections['departments'] ? 'rotated' : ''}`}>
                −
              </span>
            </div>
            
            {!collapsedSections['departments'] && (
              <>
                <a 
                  href="#"
                  className="careers-page-select-all"
                  onClick={(e) => { e.preventDefault(); selectAllDepartments(); }}
                >
                  Select All
                </a>
                
                <div className="careers-page-checkbox-group">
                  {Object.entries(departmentsData).map(([dept, roles]) => (
                    <div 
                      key={dept}
                      className="careers-page-checkbox-item"
                      onClick={() => toggleDepartment(dept)}
                    >
                      <div className={`careers-page-checkbox ${selectedDepartments.includes(dept) ? 'checked' : ''}`}>
                        {selectedDepartments.includes(dept) ? '✓' : ''}
                      </div>
                      <span className="careers-page-checkbox-label">
                        {dept} ({roles.length})
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="careers-page-main-content">
          <div className="careers-page-results-header">
            <span className="careers-page-results-count">
              Viewing {filteredJobs.length} of {allJobs.length}
            </span>
            <select className="careers-page-sort-dropdown">
              <option>Newest</option>
              <option>Oldest</option>
              <option>A-Z</option>
            </select>
          </div>

          <div className="careers-page-jobs-list">
            {filteredJobs.map((job, index) => (
              <div key={index} className="careers-page-job-item">
                <h3 className="careers-page-job-title">
                  {job.title}
                </h3>
                <p className="careers-page-job-location">
                  {job.location}
                </p>
                <a 
                  href="#"
                  className="careers-page-apply-button"
                  onClick={(e) => e.preventDefault()}
                >
                  Apply Now
                  <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}