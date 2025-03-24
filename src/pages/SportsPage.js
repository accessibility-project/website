import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Sports.css";
import newsImage from "../pic/bestsports.png";
import sunIcon from "../pic/icons8-sun.svg";
import adPic from "../pic/beerad.png";
import hockeyNews from "../pic/hockey-news.png";
import hockeyNewsTwo from "../pic/CAKE.png";

function SportsPage() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        document.body.className = "body-sports";
    }, []);

    return (
        <div>
            <header className="sports-header">
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
                    <button className="login-btn-sports">Login</button>
                </div>
            </header>


            <nav className="sports-nav">
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
                    <div className="menu-content-sports">
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

                        <div className="menu-section-login-sports">
                            <h3 className="menu-title-login-sports">LOGIN</h3>
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



      
            <div className="top-news">
                <div>
                    {/* Tre nyheter i rad */}
                    <div className="three-news">
                        <div className="news-box">
                            <div className="sports-columns">
                                <h1 className="sports-time"> 7pm </h1>
                                <h1 className="sports-league"> - SHL (H) </h1>
                            </div>
                            <div>
                                <h1 className="sports-teams"> Frölunda - Timrå</h1>
                            </div>
                        </div>
                        <div className="news-box">
                            <div className="sports-columns">
                                <h1 className="sports-time"> 7pm </h1>
                                <h1 className="sports-league"> - SHL (H) </h1>
                            </div>
                            <div>
                                <h1 className="sports-teams"> Frölunda - Timrå</h1>
                            </div>
                        </div>
                        <div className="news-box">
                            <div className="sports-columns">
                                <h1 className="sports-time"> 7pm </h1>
                                <h1 className="sports-league"> - SHL (H) </h1>
                            </div>
                            <div>
                                <h1 className="sports-teams"> Frölunda - Timrå</h1>
                            </div>
                        </div>
                    </div>

                    <div className="image-container">
                        <img src={hockeyNews} alt="Nyhetsbild" />
                        <div className="sports-news-container">
                            <h2 className="big-sports-news">18 Penalties Handed Out – After the Final Whistle!</h2>
                            <h2 className="big-sports-text">Chaos erupted in last night’s hockey clash as players from both teams refused to leave the ice. The result? A staggering 18 penalties handed out post-game. "I’ve never seen anything like it," said one bewildered referee.</h2>
                        </div>
                    </div>
                </div>

                {/* Hockey-nyheten till höger om både three-news och bilden */}
                <div className="hockey-news">
                    <img src={hockeyNewsTwo} alt="Nyhetsbild" />
                </div>
            </div>

            <div className="container">
                {/* Huvudnyheter */}
                <section className="main-news">
                    <article className="big-news-one">
                        <h2>
                            <span className="breaking-news-one">BREAKING NEWS:</span> 
                            <span className="headline-one">Football Sensation: Underdogs Stun Champions in Historic Upset</span>
                        </h2>
                        <p className="news-description-one">The reigning league champions were left in shock as underdogs FC Thunderstorm pulled off a last-minute goal to claim victory. Fans are calling it the biggest upset of the season!</p>
                    </article>

                    <article className="big-news-one">
                        <h2>
                            <span className="breaking-news-sports">BREAKING NEWS:</span> 
                            <span className="headline">Boxing Showdown Ends in Double Knockout – But Who Wins?</span>
                        </h2>
                        <p className="news-description">In an extremely rare moment in boxing history, both fighters landed knockout punches at the same time, collapsing to the canvas simultaneously. The judges are now left with the toughest decision of their careers.</p>
                    </article>

                    <article className="big-news-one">
                        <h2>
                            <span className="breaking-news-sports">BREAKING NEWS:</span> 
                            <span className="headline">Formula 1 Drama: Championship Leader Crashes on Final Lap</span>
                        </h2>
                        <p className="news-description">With just meters to go, the championship leader lost control, smashing into the barriers and handing the victory to his biggest rival. "This is the most heartbreaking moment of my career," he admitted after the race.</p>
                    </article>

                    <article className="big-news-one">
                        <h2>
                            <span className="breaking-news-sports">BREAKING NEWS:</span> 
                            <span className="headline">NBA Star Ejected for Celebrating Too Hard?</span>
                        </h2>
                        <p className="news-description">Fans were left in disbelief as their favorite player received his second technical foul for an ‘over-the-top’ celebration. "I just did a little dance," he argued. But was it really just a dance?</p>
                    </article>
                </section>


                {/* Sidokolumn */}
                <aside className="sidebar">
                    <section className="live-feed-sports">
                        <h className="direct-sports">SPORT DIRECT</h>
                        <ul>
                            <li>
                                <div className="info">
                                    <span className="status-dot-sports"></span> 
                                    <span className="time">10:42</span>
                                    <span className="location-sports">CHAMPIONS LEAGUE</span>
                                </div>
                                <p className="news-text">Dramatic penalty shootout sends underdog team to the final!</p>
                            </li>

                            <li>
                                <div className="info">
                                    <span className="status-dot-sports"></span> 
                                    <span className="time">09:58</span>
                                    <span className="location-sports">NFL</span>
                                </div>
                                <p className="news-text">Quarterback sets new passing record – "I was just in the zone!"</p>
                            </li>

                            <li>
                                <div className="info">
                                    <span className="status-dot-sports"></span> 
                                    <span className="time">09:30</span>
                                    <span className="location-sports">OLYMPICS</span>
                                </div>
                                <p className="news-text">Teenager wins gold after shocking comeback – "This is unreal!"</p>
                            </li>

                            <li>
                                <div className="info">
                                    <span className="status-dot-sports"></span> 
                                    <span className="time">08:45</span>
                                    <span className="location-sports">HOCKEY WORLD CUP</span>
                                </div>
                                <p className="news-text">Captain ejected after massive brawl – "He went too far!"</p>
                            </li>

                            <li>
                                <div className="info">
                                    <span className="status-dot-sports"></span> 
                                    <span className="time">08:22</span>
                                    <span className="location-sports">FORMULA 1</span>
                                </div>
                                <p className="news-text">Rainstorm causes chaos – five cars crash out in turn one!</p>
                            </li>

                            <li>
                                <div className="info">
                                    <span className="status-dot-sports"></span> 
                                    <span className="time">07:55</span>
                                    <span className="location-sports">TENNIS GRAND SLAM</span>
                                </div>
                                <p className="news-text">Unknown qualifier knocks out world number one in straight sets!</p>
                            </li>

                            <li>
                                <div className="info">
                                    <span className="status-dot-sports"></span> 
                                    <span className="time">07:30</span>
                                    <span className="location-sports">EXTREME SPORTS</span>
                                </div>
                                <p className="news-text">Skateboarder lands never-before-seen trick – judges speechless!</p>
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

export default SportsPage;
