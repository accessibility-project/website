import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PremiumPage from "./pages/PremiumPage";
import SportsPage from "./pages/SportsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/premium" element={<PremiumPage />} />
        <Route path="/sports" element={<SportsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
