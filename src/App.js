import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; // Din startsida
import PremiumPage from "./pages/PremiumPage";   // Din nya sida

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/premium" element={<PremiumPage />} /> {/* Ny sida */}
      </Routes>
    </Router>
  );
};

export default App;
