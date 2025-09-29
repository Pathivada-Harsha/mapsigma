

import React,{useState} from 'react'
import '../components_css/Map_Your_Move.css'
const  Map_Your_Move=()=> {
    const [formData, setFormData] = useState({ name: '', email: '' });
    
      const handleSubmit = () => {
        console.log('Form submitted:', formData);
        alert('Thank you for signing up!');
        setFormData({ name: '', email: '' });
      };
  return (
    <>
    <section className="newsletter-section">
          <div className="newsletter-container">
            <div className="newsletter-header">
              <h2 className="newsletter-title">
                Map Your Move
              </h2>
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
  )
}

export default Map_Your_Move;