import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React, { Suspense } from "react"
import './App.css';
import Navbar from './components/Navbar';
import Research_insights from "./pages/Research_Insights";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
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
function App() {
  return (
    <Router >
        <Navbar />
        <ScrollToTop />
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
          <Route path="/preloader" element={<Preloader />} />
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
        <Footer/>
    </Router>
  );
}

export default App;