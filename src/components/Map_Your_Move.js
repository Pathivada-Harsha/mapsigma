import React, { useState } from 'react';
import '../components_css/Map_Your_Move.css';

const Map_Your_Move = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    console.log('Toast triggered:', message, type);
    setTimeout(() => {
      setToast({ show: false, message: '', type: '' });
    }, 3000);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    // Validation checks
    if (!formData.name.trim() && !formData.email.trim()) {
      showToast('Please fill in both name and email fields.', 'error');
      return;
    }
    
    if (!formData.name.trim()) {
      showToast('Please enter your name.', 'error');
      return;
    }
    
    if (!formData.email.trim()) {
      showToast('Please enter your email.', 'error');
      return;
    }
    
    if (!validateEmail(formData.email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }

    // Success - Include the name in the message
    console.log('Form submitted:', formData);
    showToast(`Thank you for signing up, ${formData.name}!`, 'success');
    setFormData({ name: '', email: '' });
  };

  return (
    <>
      {/* Toast at the very top level */}
      {toast.show && (
        <div className={`toast toast-${toast.type}`} style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 99999,
          backgroundColor: toast.type === 'error' ? '#fee2e2' : '#d1fae5',
          color: toast.type === 'error' ? '#991b1b' : '#065f46',
          padding: '16px 24px',
          paddingBottom: '12px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          minWidth: '300px',
          borderLeft: toast.type === 'error' ? '4px solid #dc2626' : '4px solid #10b981',
          overflow: 'hidden'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '20px' }}>
              {toast.type === 'error' ? '⚠️' : '✓'}
            </div>
            <span>{toast.message}</span>
          </div>
          
          {/* Progress bar */}
          <div style={{
            position: 'relative',
            bottom: '0',
            left: '-24px',
            right: '-24px',
            width: 'calc(100% + 48px)',
            height: '4px',
            backgroundColor: toast.type === 'error' ? '#fecaca' : '#a7f3d0',
            marginBottom: '-12px'
          }}>
            <div className="toast-progress" style={{
              height: '100%',
              backgroundColor: toast.type === 'error' ? '#dc2626' : '#10b981',
              animation: 'shrink 3s linear forwards'
            }}></div>
          </div>
        </div>
      )}

      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-header">
            <h2 className="newsletter-title">Map Your Move</h2>
            <p className="newsletter-subtitle">
              Sign up to receive insights and analysis from MAPSIGMA CAPITAL
            </p>
          </div>

          <div>
            <div className="form-grid">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="form-input"
              />
            </div>

            <button onClick={handleSubmit} className="submit-button">
              NEXT
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Map_Your_Move;