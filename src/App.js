import React from "react";
import { ClickCounterProvider } from "./context/ClickCounterContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PremiumPage from "./pages/PremiumPage";
import SportsPage from "./pages/SportsPage";
import ContactPage from "./pages/ContactPage";
import FormPage from "./pages/FormPage";
import SuccessPage from "./pages/SuccessPage";
import ArticlePage from "./pages/ArticlePage";

const App = () => {
    return (
        <ClickCounterProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/premium" element={<PremiumPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/sports" element={<SportsPage />} />
                    <Route path="/form" element={<FormPage />} />
                    <Route path="/article" element={<ArticlePage />} />
                    <Route path="/successpage" element={<SuccessPage />} />
                </Routes>
            </Router>
        </ClickCounterProvider>
    );
};

export default App;
