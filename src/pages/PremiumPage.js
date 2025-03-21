import React from "react";
import "../styles/Premium.css";

const PremiumPage = () => {
  return (
    <div>
      <header className="premium-header">
        <h1 className="premium-title">Upgrade your subscription and get full access.</h1>
        <h2 className="premium-text">
          You'll unlock all articles, live sports, exclusive offers, and much more. 
          With the Super Package, you get access to even more news and services.
        </h2>
      </header>

      <div className="login-info">
        <p>Already a premium member?</p>
      </div>

      <div className="premium-container">
        {/* Paket 1 */}
        <div className="premium-card">
          <h3>Aftonbladet Plus</h3>
          <p>All content on Aftonbladet</p>
          <ul>
            <li><span className="red-check">✔</span> New in-depth articles daily</li>
            <li><span className="red-check">✔</span> Monthly audiobook</li>
            <li><span className="red-check">✔</span> Live sports & podcasts</li>
          </ul>
          <button className="btn yellow">2 MONTHS - 129 KR</button>
          <button className="btn">1 YEAR - 1490 KR</button>
        </div>

        {/* Paket 2 */}
        <div className="premium-card">
          <div className="best-value">MOST VALUE</div>
          <h3>Super Package</h3>
          <p>News & podcasts at a great price!</p>
          <ul>
            <li><span className="red-check">✔</span> Aftonbladet Plus</li>
            <li><span className="red-check">✔</span> SvD Business</li>
            <li><span className="red-check">✔</span> Omni More & Economy</li>
            <li><span className="red-check">✔</span> Premium podcasts</li>
            <li><span className="red-check">✔</span> Share with a friend</li>
          </ul>
          <button className="btn blue">2 MONTHS - 199 KR</button>
        </div>

        {/* Paket 3 */}
        <div className="premium-card">
          <div className="best-value">AUDIO AND NEWS</div>
          <h3>Aftonbladet Plus & Podme</h3>
          <p>News & podcasts at a great price!</p>
          <ul>
            <li><span className="red-check">✔</span> Aftonbladet Plus</li>
            <li><span className="red-check">✔</span> <strong>New:</strong> Mardrömsgästen with Alex & Sigge</li>
            <li><span className="red-check">✔</span> Premium podcasts from Podme</li>
          </ul>
          <button className="btn black">2 MONTHS - 129 KR</button>
        </div>
      </div>
    </div>
  );
};

export default PremiumPage;