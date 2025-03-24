import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import newsImage from "../pic/breaking-news.jpg";
import sunIcon from "../pic/icons8-sun.svg";
import adPic from "../pic/beerad.png";

function HomePage() {
    const navigate = useNavigate();
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
                <div className="header-buttons">
                    <button 
                        className="buy-btn" 
                        onClick={() => {
                            navigate("/premium");
                            window.location.reload();
                        }}
                    >
            Buy +
                    </button>

                    <button className="login-btn">Login</button>
                </div>
            </header>


            <nav className="main-nav">
                <ul>
                    <li onClick={() => {
                        navigate("/")
                        window.location.reload();
                    }}>START</li>
                    <li onClick={() => {
                        navigate("/sports")
                        window.location.reload();
                    }}>SPORTS</li>
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
                            <h3 className="menu-title-sports">NEWS</h3>
                            <ul className="menu-list">
                                <li>Aftonbladet Direct</li>
                                <li>Aftonbladet Climate</li>
                                <li>Columnists</li>
                                <li>Local</li>
                                <li>My Economy</li>
                                <li>Swedish Heroes</li>
                                <li>TV</li>
                            </ul>
                        </div>

                        <div className="menu-section">
                            <h3 className="menu-title-sports">SPORTS</h3>
                            <ul className="menu-list">
                                <li>F1 Blog</li>
                                <li>Football</li>
                                <li>Football Trip</li>
                                <li>Hockey</li>
                                <li>Hockey Trip</li>
                                <li>Martial Arts</li>
                                <li>Live TV</li>
                                <li>Manager Games</li>
                                <li>Motorsport</li>
                                <li>Live Scores</li>
                                <li>NHL Blog</li>
                                <li>Horse Racing</li>
                            </ul>
                        </div>

                        <div className="menu-section">
                            <h3 className="menu-title-sports">ENTERTAINMENT</h3>
                            <ul className="menu-list">
                                <li>Movies</li>
                                <li>Eurovision</li>
                                <li>Music</li>
                                <li>Rock Bear Awards</li>
                                <li>Schlager Blog</li>
                                <li>Gaming</li>
                                <li>Where Are They Now</li>
                                <li>TV & Series</li>
                            </ul>
                        </div>

                        <div className="menu-section">
                            <h3 className="menu-title-sports">PREMIUM</h3>
                            <ul className="menu-list">
                                <li>Offers</li>
                                <li>Historical Archive</li>
                                <li>Magazines</li>
                                <li>Newsletters</li>
                                <li>Premium Articles</li>
                                <li>Podcasts</li>
                                <li>Quizzes</li>
                                <li>Travel Guides</li>
                                <li>Tests & Reviews</li>
                            </ul>
                        </div>

                        <div className="menu-section">
                            <h3 className="menu-title-sports">FEATURES</h3>
                            <ul className="menu-list">
                                <li>Cars</li>
                                <li>Family</li>
                                <li>Food & Cooking</li>
                                <li>Home</li>
                                <li>Horoscope</li>
                                <li>Weather</li>
                                <li>Royal News</li>
                                <li>Fashion</li>
                                <li>Travel</li>
                                <li>Beauty</li>
                                <li>TV Guide</li>
                            </ul>
                        </div>

                        <div className="menu-section">
                            <h3 className="menu-title-sports">CULTURE & OPINION</h3>
                            <ul className="menu-list">
                                <li>Debate</li>
                                <li>Culture</li>
                                <li>Editorial</li>
                            </ul>
                        </div>

                        <div className="menu-section">
                            <h3 className="menu-title-sports">A-Z</h3>
                        </div>

                        <div className="menu-section-login">
                            <h3 className="menu-title-login">LOGIN</h3>
                            <ul className="menu-list">
                                <li>Light Mode</li>
                                <li>Cookie Settings</li>
                                <li>Submit a Tip</li>
                                <li>About</li>
                                <li onClick={() => {
                                    navigate("/contact")
                                    window.location.reload();
                                }}>Contact Us</li>
                                <li>Customer Support</li>
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
                        <p className="news-description-one">After centuries of isolation, an uncontacted Amazonian tribe has emerged, demanding WiFi and avocados.</p>
                    </article>

                    <article className="big-news">
                        <h2>
                            <span className="breaking-news">BREAKING NEWS:</span> 
                            <span className="headline">Beauty Heist Shocks the Nation</span>
                        </h2>
                        <p className="news-description">Reports suggest thieves stole thousands of dollars worth of Botox and fillers ✔ Escaped in a runaway bulldozer.</p>
                    </article>

                    <article className="big-news">
                        <h2>
                            <span className="breaking-news">BREAKING NEWS:</span> 
                            <span className="headline">Aliens Demand Citizenship</span>
                        </h2>
                        <p className="news-description">Extraterrestrials land in New York, claim they have been living here for centuries disguised as government officials.</p>
                    </article>

                    <article className="big-news">
                        <h2>
                            <span className="breaking-news">BREAKING NEWS:</span> 
                            <span className="headline">Time Traveler Arrested for Insider Trading</span>
                        </h2>
                        <p className="news-description">Man claims to be from the year 2087, caught making suspiciously accurate stock market bets.</p>
                    </article>

                    <article className="big-news">
                        <h2>
                            <span className="breaking-news">BREAKING NEWS:</span> 
                            <span className="headline">Florida Man Wins Lawsuit Against Gravity</span>
                        </h2>
                        <p className="news-description">Court rules that gravity "personally inconvenienced" him after he tripped on a banana peel.</p>
                    </article>
                </section>


                {/* Sidokolumn */}
                <aside className="sidebar">
                    <section className="live-feed">
                        <h className="direct">DIRECT NEWS</h>
                        <ul>
                            <li>
                                <div className="info">
                                    <span className="status-dot"></span> 
                                    <span className="time">09:13</span>
                                    <span className="location">MARS</span>
                                </div>
                                <p className="news-text">NASA loses contact with Mars rover after it "joins a union".</p>
                            </li>
                            <li>
                                <div className="info">
                                    <span className="status-dot"></span> 
                                    <span className="time">08:58</span>
                                    <span className="location">VATICAN CITY</span>
                                </div>
                                <p className="news-text">Pope accidentally tweets "LOL" after mysterious UFO sighting.</p>
                            </li>
                            <li>
                                <div className="info">
                                    <span className="status-dot"></span> 
                                    <span className="time">08:17</span>
                                    <span className="location">ATLANTIS</span>
                                </div>
                                <p className="news-text">Lost city of Atlantis found—turns out it's just a fancy resort.</p>
                            </li>
                            <li>
                                <div className="info">
                                    <span className="status-dot"></span> 
                                    <span className="time">08:03</span>
                                    <span className="location">SPACEX</span>
                                </div>
                                <p className="news-text">Elon Musk announces mission to send influencers to Pluto—"one-way only".</p>
                            </li>
                            <li>
                                <div className="info">
                                    <span className="status-dot"></span> 
                                    <span className="time">08:03</span>
                                    <span className="location">WORLD CUP</span>
                                </div>
                                <p className="news-text">Referee sends himself off after controversial VAR decision.</p>
                            </li>
                            <li>
                                <div className="info">
                                    <span className="status-dot"></span> 
                                    <span className="time">08:03</span>
                                    <span className="location">HOLLYWOOD</span>
                                </div>
                                <p className="news-text">Hollywood announces new movie: "Fast & Furious 47"—this time, in space.</p>
                            </li>
                            <li>
                                <div className="info">
                                    <span className="status-dot"></span> 
                                    <span className="time">08:03</span>
                                    <span className="location">SWEDEN</span>
                                </div>
                                <p className="news-text">Scientists confirm: The Swedish summer actually lasts 17 minutes.</p>
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

export default HomePage;
