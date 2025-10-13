import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom"
import React, { useState, useEffect } from "react"
import './App.css';
import Navbar from './components/Navbar';
import Research_insights from "./pages/Research_Insights";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTopArrow.js";

const Culture = React.lazy(() => import("./pages/Culture"));
const Principles = React.lazy(() => import("./pages/Principles"));
const Technology = React.lazy(() => import("./pages/Technology"));
const RealTime = React.lazy(() => import("./pages/RealTime"));
const AiPage = React.lazy(() => import("./pages/AiPage"));
const PMS = React.lazy(() => import("./pages/PMS"));
const RiskCommand = React.lazy(() => import("./pages/RiskCommand"));
const Cybersecurity = React.lazy(() => import("./pages/CyberSecurity"));
const ClientCommand = React.lazy(() => import("./pages/ClientCommand"));
const Founder = React.lazy(() => import("./pages/Founder"));
const LifeAtMapSigma = React.lazy(() => import("./pages/LifeAtMapSigma"));
const Careers = React.lazy(() => import("./pages/Careers"));
const People = React.lazy(() => import("./pages/People"));
const PartnerGrid = React.lazy(() => import("./components/PartnerGrid"));
const LeadershipDetailPage = React.lazy(() => import("./components/OurLeader"));
const StoryDetailPage = React.lazy(() => import("./components/StoryDetailPage"));
const NewsLetter = React.lazy(() => import("./pages/NewsLetter"));
const Clients = React.lazy(() => import("./pages/Clients"));
const Alumni = React.lazy(() => import("./pages/Alumni"));
const PrivacyPolicy = React.lazy(() => import("./pages/documents/privacy-policy"));
const Terms_Conditions = React.lazy(() => import("./pages/documents/terms-of-service"));
const CookiePolicy = React.lazy(() => import("./pages/documents/cookie-policy"));
const Preloader = React.lazy(() => import("./components/Preloader"));
const Insights = React.lazy(() => import("./pages/Insights"));
const OurApproach = React.lazy(() => import("./pages/OurApproach"));
const ContactPage = React.lazy(() => import("./pages/ContactUsPage"));
const ArticleDetailedPage = React.lazy(() => import("./components/Ri-Artcles-Detailed"));
const InsightsInvestement = React.lazy(() => import("./pages/InsightsInvestement"));
const InsightsTechnology = React.lazy(() => import("./components/Insights-Technology.js"));
const Technology3D = React.lazy(() => import("./pages/Technology3D.js"));
const IntershipPage = React.lazy(() => import("./components/InternshipPage.js"));

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // Immediate scroll to top - multiple attempts to handle lazy loading
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Additional scroll attempts with delays
    const timeouts = [0, 10, 50, 100, 150].map(delay =>
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, delay)
    );

    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, [pathname]);

  return null;
}

// Main App Content Component
function AppContent() {
  const navigate = useNavigate();
  const [showPreloader, setShowPreloader] = useState(true);
  const [hasShownPreloader, setHasShownPreloader] = useState(false);

  useEffect(() => {
    // Always show preloader on initial page load (any URL)
    if (!hasShownPreloader) {
      setShowPreloader(true);
      
      // Hide preloader and redirect to home after 2 seconds
      const timer = setTimeout(() => {
        setShowPreloader(false);
        setHasShownPreloader(true);
        navigate('/');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [navigate, hasShownPreloader]);

  // Function to handle logo click - show preloader then navigate
  const handleLogoClick = () => {
    setShowPreloader(true);
    setHasShownPreloader(false);
  };

  // Show preloader on initial load or when logo is clicked
  if (showPreloader && !hasShownPreloader) {
    return <Preloader />;
  }

  // Show main app content
  return (
    <>
      <ScrollToTop />
      <Navbar onLogoClick={handleLogoClick} />
      {/* Add padding to prevent content from hiding under fixed navbar */}
      <div style={{ paddingTop: '120px' }}>
        <React.Suspense fallback={<div style={{ minHeight: '100vh' }}></div>}>
          <Routes>
            <Route path="/" element={<Research_insights />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/principles" element={<Principles />} />
            <Route path="/people" element={<People />} />
            <Route path="/people/partners" element={<PartnerGrid />} />
            <Route path="/people/leader-detail" element={<LeadershipDetailPage />} />
            <Route path="/people/story-detail" element={<StoryDetailPage />} />
            <Route path="/Technology" element={<Technology />} />
            <Route path="/RealTime" element={<RealTime />} />
            <Route path="/AiPage" element={<AiPage />} />
            <Route path="/PMS" element={<PMS />} />
            <Route path="/RiskCommand" element={<RiskCommand />} />
            <Route path="/Cybersecurity" element={<Cybersecurity />} />
            <Route path="/ClientCommand" element={<ClientCommand />} />
            <Route path="/Founder" element={<Founder />} />
            <Route path="/LifeAtMapSigma" element={<LifeAtMapSigma />} />
            <Route path="/Careers" element={<Careers />} />
            <Route path="/Newsletter" element={<NewsLetter />} />
            <Route path="/Clients" element={<Clients />} />
            <Route path="/Alumni" element={<Alumni />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<Terms_Conditions />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/Insights" element={<Insights />} />
            <Route path="/ApproachPage" element={<OurApproach />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/article/:articleId" element={<ArticleDetailedPage />} />
            <Route path="/InsightsInvestement" element={<InsightsInvestement />} />
            <Route path="/InsightsTechnology" element={<InsightsTechnology />} />
            <Route path="/Internship" element={<IntershipPage />} />
            <Route path="/Technology3D" element={<Technology3D />} />
            <Route
              path="*"
              element={
                <div style={{ padding: "50px", textAlign: "center" }}>
                  <h2>Page Not Found</h2>
                  <p>The requested page could not be found.</p>
                </div>
              }
            />
          </Routes>
        </React.Suspense>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;