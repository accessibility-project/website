import React, { useState } from "react";
import "./App.css";
import newsImage from "./breaking-news.jpg";
import sunIcon from "./icons8-sun.svg";
import adPic from "./beerad.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="main-header">
        <div className="header-left">
          <p className="date">THURSDAY 20 MARCH 2025</p>
          <p className="subtitle">Daily names: Josef, Josefina</p>
        </div>
        <div className="header-right">
          <p className="weather">Weather</p>
          <p className="weather-location">SYDNEY</p>
        </div>
        <div className="header-icon">
          <img src={sunIcon} alt="Solsken" className="weather-icon" />
        </div>
        <div className="header-temp">
          <p className="temperature">28°</p>
        </div>
      </header>


      <nav className="main-nav">
        <ul>
          <li>START</li>
          <li>SPORTS</li>
          <li>PREMIUM</li>
          <li>DISCOVER</li>
          <li>ENTERTAINMENT</li>
          <li>TIPS</li>
          <li>CULTURE</li>
          <li>OPINION</li>
          <li>LIVE TV</li>
          <li onClick={() => setMenuOpen(!menuOpen)} className="menu-button">
            ☰
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <div className="dropdown-menu">
          <div className="menu-content">
            <div className="menu-section">
              <h3 className="menu-title">NEWS</h3>
              <ul className="menu-list">
                <li>Aftonbladet Direkt</li>
                <li>Aftonbladet Klimat</li>
                <li>Kolumnister</li>
                <li>Lokalt</li>
                <li>Min ekonomi</li>
                <li>Svenska hjältar</li>
                <li>TV</li>
              </ul>
            </div>

            <div className="menu-section">
              <h3 className="menu-title">SPORTS</h3>
              <ul className="menu-list">
                <li>F1-bloggen</li>
                <li>Fotboll</li>
                <li>Fotbollsresan</li>
                <li>Hockey</li>
                <li>Hockeyresan</li>
                <li>Kampsport</li>
                <li>Live-TV</li>
                <li>Managerspel</li>
                <li>Motorsport</li>
                <li>Målservice</li>
                <li>NHL-bloggen</li>
                <li>Trav</li>
              </ul>
            </div>

            <div className="menu-section">
              <h3 className="menu-title">NÖJE</h3>
              <ul className="menu-list">
                <li>Film</li>
                <li>Melodifestivalen</li>
                <li>Musik</li>
                <li>Rockbjörnen</li>
                <li>Schlagerbloggen</li>
                <li>Spela</li>
                <li>Så gick det sen</li>
                <li>Tv & Serier</li>
              </ul>
            </div>
            <div className="menu-section">
              <h3 className="menu-title">PREMIUM</h3>
              <ul className="menu-list">
                <li>Erbjudanden</li>
                <li>Historiska arkivet</li>
                <li>Magasin</li>
                <li>Nyhetsbrev</li>
                <li>Plusartiklar</li>
                <li>Podcasts</li>
                <li>Quiz</li>
                <li>Reseguider</li>
                <li>Tester & guider</li>
              </ul>
            </div>
            <div className="menu-section">
              <h3 className="menu-title">FEATURE</h3>
              <ul className="menu-list">
                <li>Bil</li>
                <li>Family</li>
                <li>Godare</li>
                <li>Hemma</li>
                <li>Horoskop</li>
                <li>Klart</li>
                <li>Kungligt</li>
                <li>Mode</li>
                <li>Resa</li>
                <li>Skönhet</li>
                <li>Tv.nu</li>
              </ul>
            </div>
            <div className="menu-section">
              <h3 className="menu-title">KULTUR & OPINION </h3>
              <ul className="menu-list">
                <li>Debatt</li>
                <li>Kultur</li>
                <li>Ledare</li>
              </ul>
            </div>
            <div className="menu-section">
              <h3 className="menu-title">A-Z</h3>
            </div>
            <div className="menu-section-login">
              <h3 className="menu-title-login">LOGGA IN</h3>
              <ul className="menu-list">
                <li>Ljust Läge</li>
                <li>Inställningar för cookies</li>
                <li>Tipsa</li>
                <li>Om</li>
                <li>Kontakta oss</li>
                <li>Kundsupport</li>
              </ul>
            </div>
          </div>
        </div>
      )}


      <div className="top-image">
        <img src={newsImage} alt="Nyhetsbild" />
      </div>

      <div className="container">
      {/* Huvudnyheter */}
      <section className="main-news">
        <article className="big-news-one">
          <h2>
            <span className="breaking-news-one">BREAKING NEWS:</span> 
            <span className="headline-one">Lost Amazon Tribe Makes First Contact with the Modern World</span>
          </h2>
          <p className="news-description-one">Fake news fake news fake news</p>
        </article>

        <article className="big-news">
          <h2>
            <span className="breaking-news">BREAKING NEWS:</span> 
            <span className="headline">Skönhetskupp</span>
          </h2>
          <p className="news-description">Uppgifter: Stal fillers ✔ Kraschade hjullastare</p>
        </article>

        <article className="big-news">
          <h2>
            <span className="breaking-news">BREAKING NEWS:</span> 
            <span className="headline">Skönhetskupp</span>
          </h2>
          <p className="news-description">Uppgifter: Stal fillers ✔ Kraschade hjullastare</p>
        </article>

        <article className="big-news">
          <h2>
            <span className="breaking-news">BREAKING NEWS:</span> 
            <span className="headline">Skönhetskupp</span>
          </h2>
          <p className="news-description">Uppgifter: Stal fillers ✔ Kraschade hjullastare</p>
        </article>

        <article className="big-news">
          <h2>
            <span className="breaking-news">BREAKING NEWS:</span> 
            <span className="headline">Man åtalas för mordet på 28-åriga Nimo</span>
          </h2>
          <p className="news-description">Mannen erkänner</p>
        </article>

        <article>
          <h2 className="headline">Icas drag mitt i</h2>
        </article>
      </section>


      {/* Sidokolumn */}
      <aside className="sidebar">
      <section className="live-feed">
        <h className="direct">DIRECT NEWS</h>
        <ul>
          <li>
            <div className="info">
              <span className="time">09.13</span>
              <span className="location">RYSSLAND</span>
            </div>
            <p className="news-text">Rysk oljedepå i brand</p>
          </li>
          <li>
            <div className="info">
              <span className="time">08.58</span>
              <span className="location">MÄRSTA</span>
            </div>
            <p className="news-text">Man åtalas för mord</p>
          </li>
          <li>
            <div className="info">
              <span className="time">08.17</span>
              <span className="location">SOCIALDEMOKRATERNA</span>
            </div>
            <p className="news-text">Kritik mot S-lotterna</p>
          </li>
          <li>
            <div className="info">
              <span className="time">08.03</span>
              <span className="location">AXFOOD</span>
            </div>
            <p className="news-text">Axfood gör storvinst</p>
          </li>
          <li>
            <div className="info">
              <span className="time">08.03</span>
              <span className="location">AXFOOD</span>
            </div>
            <p className="news-text">Axfood gör storvinst</p>
          </li>
          <li>
            <div className="info">
              <span className="time">08.03</span>
              <span className="location">AXFOOD</span>
            </div>
            <p className="news-text">Axfood gör storvinst</p>
          </li>
          <li>
            <div className="info">
              <span className="time">08.03</span>
              <span className="location">AXFOOD</span>
            </div>
            <p className="news-text">Axfood gör storvinst</p>
          </li>
        </ul>
      </section>



        <section className="ad">
          <div>
            <img src={adPic} alt="Ad" />
          </div>
        </section>
      </aside>


      <aside className="fixed-image-column">
      </aside>
    </div>
  </div>
  );
}

export default App;
