// import { useState, useEffect, useRef } from "react"
// import "../components_css/Technology-client.css"

// const ClientExperienceSection = () => {
//   const [isVisible, setIsVisible] = useState(false)
//   const sectionRef = useRef(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true)
//           }
//         })
//       },
//       {
//         threshold: 0.2,
//         rootMargin: "0px 0px -100px 0px"
//       }
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current)
//       }
//     }
//   }, [])

//   return (
//     <section className="client-exp-section" ref={sectionRef}>
//       <div className="client-exp-container">
//         <div className={`client-exp-image ${isVisible ? 'client-exp-animate-left' : ''}`}>
//           <img 
//             src="/images/technology/client-portal.jpg" 
//             alt="Client Command Portal"
//             onError={(e) => {
//               e.target.src = "https://via.placeholder.com/600x800/004225/FFFFFF?text=Client+Portal"
//             }}
//           />
//         </div>
        
//         <div className={`client-exp-content ${isVisible ? 'client-exp-animate-right' : ''}`}>
//           <div className="client-exp-label">OUR VALUE</div>
//           <h2 className="client-exp-title">Client Experience Redefined</h2>
//           <p className="client-exp-intro">
//             Every MAPSIGMA client has access to a custom built <strong>Client Command Portal</strong>, a secure and 
//             intuitive dashboard designed for clarity, control and confidence.
//           </p>
          
//           <div className="client-exp-features">
//             <div className="client-exp-feature">
//               <div className="client-exp-number">01</div>
//               <div className="client-exp-feature-content">
//                 <h3 className="client-exp-feature-title">Real-Time Portfolio Access</h3>
//                 <p className="client-exp-feature-desc">
//                   Live portfolio updates and performance metrics at your fingertips. Monitor key positions and track 
//                   your investment growth in real time from anywhere in the world.
//                 </p>
//               </div>
//             </div>

//             <div className="client-exp-feature">
//               <div className="client-exp-number">02</div>
//               <div className="client-exp-feature-content">
//                 <h3 className="client-exp-feature-title">Strategic Insights & Reports</h3>
//                 <p className="client-exp-feature-desc">
//                   Access comprehensive research reports, market analysis, and investment insights curated by our 
//                   strategy team. Stay informed with data-driven intelligence.
//                 </p>
//               </div>
//             </div>

//             <div className="client-exp-feature">
//               <div className="client-exp-number">03</div>
//               <div className="client-exp-feature-content">
//                 <h3 className="client-exp-feature-title">Secure Communication</h3>
//                 <p className="client-exp-feature-desc">
//                   Direct messaging with your investment team, secure document sharing, and encrypted communication 
//                   channels. Your privacy and security are paramount.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ClientExperienceSection
import { useState, useEffect, useRef } from "react"
import "../components_css/Technology-client.css"
import Tech1 from "./../images/Technology/TechClient1.webp"
const ClientExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const features = [
    {
      number: "01",
      title: "Live Portfolio Updates",
      description: "Real-time access to your investment portfolio with instant updates on performance metrics, positions, and market movements from anywhere in the world."
    },
    {
      number: "02",
      title: "Strategic Reports & Insights",
      description: "Comprehensive research reports, market analysis, and investment insights curated by our expert strategy team to keep you informed and ahead."
    },
    {
      number: "03",
      title: "Secure Document Access",
      description: "Safe and encrypted access to all your investment documents, statements, and important files with enterprise-grade security protocols."
    },
    {
      number: "04",
      title: "Direct Team Communication",
      description: "Seamless messaging with your investment team, secure communication channels, and dedicated support whenever you need guidance or answers."
    }
  ]

  return (
    <section className="client-exp-section" ref={sectionRef}>
      <div className="client-exp-container">
        <div className={`client-exp-image ${isVisible ? 'client-exp-animate-left' : ''}`}>
          <img 
            src={Tech1}
            alt="Client Command Portal"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/600x800/004225/FFFFFF?text=Client+Portal"
            }}
          />
        </div>
        
        <div className={`client-exp-content ${isVisible ? 'client-exp-animate-right' : ''}`}>
          <div className="client-exp-label">OUR VALUE</div>
          <h2 className="client-exp-title">Client Experience Redefined</h2>
          <p className="client-exp-intro">
            Every MAPSIGMA client has access to a custom built <strong>Client Command Portal</strong>, a secure and 
            intuitive dashboard that provides clarity, control and confidence in your investment journey.
          </p>
          
          <div className="client-exp-features-grid">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="client-exp-feature"
                style={{ animationDelay: `${0.7 + (index * 0.15)}s` }}
              >
                <div className="client-exp-number">{feature.number}</div>
                <div className="client-exp-feature-content">
                  <h3 className="client-exp-feature-title">{feature.title}</h3>
                  <p className="client-exp-feature-desc">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientExperienceSection