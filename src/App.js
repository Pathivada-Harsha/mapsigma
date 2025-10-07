import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React, { Suspense } from "react"
import './App.css';
import Navbar from './components/Navbar';
import Research_insights from "./pages/Research_Insights";
import ScrollToTop from "./components/ScrollToTop";
const Culture = React.lazy(() => import("./pages/Culture"));
const Principles = React.lazy(() => import("./pages/Principles.js"));
const Technology = React.lazy(() => import("./pages/Technology.js"));
const RealTime = React.lazy(() => import("./pages/RealTime.js"));
const AiPage = React.lazy(() => import("./pages/AiPage.js"));
const PMS = React.lazy(() => import("./pages/PMS.js"));
const RiskCommand = React.lazy(() => import("./pages/RiskCommand.js"));
const Cybersecurity = React.lazy(() => import("./pages/CyberSecurity.js"));
const ClientCommand = React.lazy(() => import("./pages/ClientCommand.js"));
const Founder = React.lazy(() => import("./pages/Founder.js"));
const LifeAtMapSigma = React.lazy(() => import("./pages/LifeAtMapSigma.js"));
const Careers = React.lazy(() => import("./pages/Careers.js"));
const People = React.lazy(() => import("./pages/People.js"));
const PartnerGrid = React.lazy(() => import("./components/PartnerGrid.js"));
const LeadershipDetailPage = React.lazy(() => import("./components/OurLeader.js"));
const StoryDetailPage = React.lazy(() => import("./components/StoryDetailPage.js"));
const NewsLetter = React.lazy(() => import("./pages/NewsLetter.js"));
const Clients = React.lazy(() => import("./pages/Clients.js"));
const Alumni = React.lazy(() => import("./pages/Alumni.js"));
function App() {
  return (
    <Router >
      <div className="min-h-screen bg-white">

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
          {/* Fallback route for undefined paths */}
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

      </div>
    </Router>
  );
}

export default App;