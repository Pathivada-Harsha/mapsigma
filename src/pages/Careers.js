import React, { useState } from 'react';

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState([]);
  const [collapsedSections, setCollapsedSections] = useState({});

  const careers_page_styles = {
    careers_page_container: {
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
    },
    careers_page_header: {
      backgroundColor: '#004225',
      padding: '60px 40px',
      color: '#ffffff',
    },
    careers_page_headerWrapper: {
      maxWidth: '1400px',
      margin: '0 auto',
    },
    careers_page_breadcrumb: {
      fontSize: '14px',
      marginBottom: '20px',
      opacity: '0.9',
    },
    careers_page_title: {
      fontSize: '64px',
      fontWeight: '400',
      marginBottom: '16px',
      fontFamily: 'Georgia, serif',
      lineHeight: '1.1',
    },
    careers_page_subtitle: {
      fontSize: '20px',
      fontWeight: '400',
      opacity: '0.95',
    },
    careers_page_content: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '40px',
      display: 'flex',
      gap: '40px',
    },
    careers_page_sidebar: {
      width: '300px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      padding: '24px',
      height: 'fit-content',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    },
    careers_page_searchContainer: {
      position: 'relative',
      marginBottom: '32px',
    },
    careers_page_searchInput: {
      width: '100%',
      padding: '12px 40px 12px 16px',
      border: '1px solid #d0d7de',
      borderRadius: '6px',
      fontSize: '14px',
      outline: 'none',
    },
    careers_page_searchIcon: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#7d8590',
    },
    careers_page_filterSection: {
      marginBottom: '32px',
      borderBottom: '1px solid #d8dee4',
      paddingBottom: '24px',
    },
    careers_page_filterTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#1f2328',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
    },
    careers_page_selectAll: {
      fontSize: '14px',
      color: '#0969da',
      fontWeight: '500',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    careers_page_checkboxGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    careers_page_checkboxItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      cursor: 'pointer',
    },
    careers_page_checkbox: {
      width: '16px',
      height: '16px',
      border: '1px solid #d0d7de',
      borderRadius: '3px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
      color: '#ffffff',
      backgroundColor: '#ffffff',
    },
    careers_page_checkboxChecked: {
      backgroundColor: '#0969da',
      borderColor: '#0969da',
    },
    careers_page_checkboxLabel: {
      fontSize: '14px',
      color: '#1f2328',
      fontWeight: '400',
      flex: '1',
    },
    careers_page_collapseIcon: {
      fontSize: '14px',
      color: '#656d76',
      transition: 'transform 0.2s ease',
    },
    careers_page_collapseIconRotated: {
      transform: 'rotate(180deg)',
    },
    careers_page_departmentList: {
      marginTop: '24px',
    },
    careers_page_departmentItem: {
      marginBottom: '16px',
    },
    careers_page_departmentHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 0',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      color: '#1f2328',
    },
    careers_page_departmentCount: {
      backgroundColor: '#f6f8fa',
      padding: '2px 8px',
      borderRadius: '12px',
      fontSize: '12px',
      color: '#656d76',
    },
    careers_page_rolesList: {
      marginTop: '8px',
      paddingLeft: '16px',
    },
    careers_page_roleItem: {
      padding: '4px 0',
      fontSize: '13px',
      color: '#656d76',
    },
    careers_page_mainContent: {
      flex: '1',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      padding: '32px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    },
    careers_page_resultsHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '32px',
      paddingBottom: '16px',
      borderBottom: '1px solid #d8dee4',
    },
    careers_page_resultsCount: {
      fontSize: '14px',
      color: '#656d76',
    },
    careers_page_sortDropdown: {
      padding: '8px 12px',
      border: '1px solid #d0d7de',
      borderRadius: '6px',
      fontSize: '14px',
      backgroundColor: '#ffffff',
    },
    careers_page_jobsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    careers_page_jobItem: {
      padding: '24px',
      border: '1px solid #d8dee4',
      borderRadius: '8px',
      transition: 'border-color 0.2s ease',
      cursor: 'pointer',
    },
    careers_page_jobTitle: {
      fontSize: '20px',
      fontWeight: '400',
      color: '#004225',
      marginBottom: '8px',
      fontFamily: 'Georgia, serif',
    },
    careers_page_jobLocation: {
      fontSize: '14px',
      color: '#656d76',
      marginBottom: '16px',
    },
    careers_page_applyButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      backgroundColor: 'transparent',
      border: '1px solid #004225',
      borderRadius: '6px',
      color: '#004225',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      textDecoration: 'none',
    },
  };

  const careers_page_mobileStyles = `
    @media (max-width: 768px) {
      .careers_page_content {
        flex-direction: column !important;
        padding: 24px !important;
        gap: 24px !important;
      }
      
      .careers_page_sidebar {
        width: 100% !important;
      }
      
      .careers_page_title {
        font-size: 48px !important;
      }
      
      .careers_page_header {
        padding: 40px 24px !important;
      }
      
      .careers_page_mainContent {
        padding: 24px !important;
      }
    }
    
    .careers_page_jobItem:hover {
      border-color: #004225;
    }
    
    .careers_page_applyButton:hover {
      background-color: #004225;
      color: #ffffff;
    }
  `;

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
    <>
      <style>{careers_page_mobileStyles}</style>
      <div style={careers_page_styles.careers_page_container} className="careers_page_container">
        <div style={careers_page_styles.careers_page_header} className="careers_page_header">
          <div style={careers_page_styles.careers_page_headerWrapper} className="careers_page_headerWrapper">
            <div style={careers_page_styles.careers_page_breadcrumb} className="careers_page_breadcrumb">
              Careers / Explore Opportunities
            </div>
            <h1 style={careers_page_styles.careers_page_title} className="careers_page_title">
              Explore Opportunities
            </h1>
            <p style={careers_page_styles.careers_page_subtitle} className="careers_page_subtitle">
              We don't just grow portfolios. We grow people.
            </p>
          </div>
        </div>

        <div style={careers_page_styles.careers_page_content} className="careers_page_content">
          <div style={careers_page_styles.careers_page_sidebar} className="careers_page_sidebar">
            <div style={careers_page_styles.careers_page_searchContainer} className="careers_page_searchContainer">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={careers_page_styles.careers_page_searchInput}
                className="careers_page_searchInput"
              />
              <span style={careers_page_styles.careers_page_searchIcon} className="careers_page_searchIcon">🔍</span>
            </div>

            <div style={careers_page_styles.careers_page_filterSection} className="careers_page_filterSection">
              <div 
                style={careers_page_styles.careers_page_filterTitle} 
                className="careers_page_filterTitle"
                onClick={() => toggleSection('experience')}
              >
                <span>Experience Level</span>
                <span style={{
                  ...careers_page_styles.careers_page_collapseIcon,
                  ...(collapsedSections['experience'] ? careers_page_styles.careers_page_collapseIconRotated : {})
                }} className="careers_page_collapseIcon">−</span>
              </div>
              
              {!collapsedSections['experience'] && (
                <>
                  <a 
                    href="#"
                    style={careers_page_styles.careers_page_selectAll}
                    className="careers_page_selectAll"
                    onClick={(e) => { e.preventDefault(); selectAllExperienceLevels(); }}
                  >
                    Select All
                  </a>
                  
                  <div style={careers_page_styles.careers_page_checkboxGroup} className="careers_page_checkboxGroup">
                    {['Experienced Professionals', 'Internships', 'New Graduates'].map(level => (
                      <div 
                        key={level}
                        style={careers_page_styles.careers_page_checkboxItem}
                        className="careers_page_checkboxItem"
                        onClick={() => toggleExperienceLevel(level)}
                      >
                        <div style={{
                          ...careers_page_styles.careers_page_checkbox,
                          ...(selectedExperienceLevels.includes(level) ? careers_page_styles.careers_page_checkboxChecked : {})
                        }} className="careers_page_checkbox">
                          {selectedExperienceLevels.includes(level) ? '✓' : ''}
                        </div>
                        <span style={careers_page_styles.careers_page_checkboxLabel} className="careers_page_checkboxLabel">
                          {level}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div style={careers_page_styles.careers_page_filterSection} className="careers_page_filterSection">
              <div 
                style={careers_page_styles.careers_page_filterTitle} 
                className="careers_page_filterTitle"
                onClick={() => toggleSection('departments')}
              >
                <span>Departments</span>
                <span style={{
                  ...careers_page_styles.careers_page_collapseIcon,
                  ...(collapsedSections['departments'] ? careers_page_styles.careers_page_collapseIconRotated : {})
                }} className="careers_page_collapseIcon">−</span>
              </div>
              
              {!collapsedSections['departments'] && (
                <>
                  <a 
                    href="#"
                    style={careers_page_styles.careers_page_selectAll}
                    className="careers_page_selectAll"
                    onClick={(e) => { e.preventDefault(); selectAllDepartments(); }}
                  >
                    Select All
                  </a>
                  
                  <div style={careers_page_styles.careers_page_checkboxGroup} className="careers_page_checkboxGroup">
                    {Object.entries(departmentsData).map(([dept, roles]) => (
                      <div 
                        key={dept}
                        style={careers_page_styles.careers_page_checkboxItem}
                        className="careers_page_checkboxItem"
                        onClick={() => toggleDepartment(dept)}
                      >
                        <div style={{
                          ...careers_page_styles.careers_page_checkbox,
                          ...(selectedDepartments.includes(dept) ? careers_page_styles.careers_page_checkboxChecked : {})
                        }} className="careers_page_checkbox">
                          {selectedDepartments.includes(dept) ? '✓' : ''}
                        </div>
                        <span style={careers_page_styles.careers_page_checkboxLabel} className="careers_page_checkboxLabel">
                          {dept} ({roles.length})
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div style={careers_page_styles.careers_page_mainContent} className="careers_page_mainContent">
            <div style={careers_page_styles.careers_page_resultsHeader} className="careers_page_resultsHeader">
              <span style={careers_page_styles.careers_page_resultsCount} className="careers_page_resultsCount">
                Viewing {filteredJobs.length} of {allJobs.length}
              </span>
              <select style={careers_page_styles.careers_page_sortDropdown} className="careers_page_sortDropdown">
                <option>Newest</option>
                <option>Oldest</option>
                <option>A-Z</option>
              </select>
            </div>

            <div style={careers_page_styles.careers_page_jobsList} className="careers_page_jobsList">
              {filteredJobs.map((job, index) => (
                <div key={index} style={careers_page_styles.careers_page_jobItem} className="careers_page_jobItem">
                  <h3 style={careers_page_styles.careers_page_jobTitle} className="careers_page_jobTitle">
                    {job.title}
                  </h3>
                  <p style={careers_page_styles.careers_page_jobLocation} className="careers_page_jobLocation">
                    {job.location}
                  </p>
                  <a 
                    href="#"
                    style={careers_page_styles.careers_page_applyButton}
                    className="careers_page_applyButton"
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
    </>
  );
}