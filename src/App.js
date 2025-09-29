import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React, { Suspense } from "react"
import './App.css';
import Navbar from './components/Navbar';
import  Research_insights from "./pages/Research_Insights";
const Culture = React.lazy(() => import("./pages/Culture"));
function App() {
  return (
    <Router >
      <div className="min-h-screen bg-white">
        
        <Navbar />

        <Routes>
          <Route path="/" element={<Research_insights />} />
          <Route path="/culture" element={<Culture />} />     
      
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
