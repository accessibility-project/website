import React from "react";
import "./App.css";
import newsImage from "./breaking-news.jpg";
import sunIcon from "./icons8-sun.svg";

function App() {

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
        </ul>
      </nav>

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
          <img src="https://via.placeholder.com/600x300" alt="ICA" />
          <h2 className="headline">Icas drag mitt i</h2>
        </article>
      </section>


      {/* Sidokolumn */}
      <aside className="sidebar">
      <section className="live-feed">
        <h className="direct">AFTONBLADET DIREKT</h>
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
          <p>Annons</p>
          <img src="https://via.placeholder.com/300x200" alt="Annons" />
        </section>
      </aside>


      <aside className="fixed-image-column">
        <img src="https://via.placeholder.com/300x500" alt="Fast bild" />
      </aside>
    </div>
  </div>
  );
}

export default App;
