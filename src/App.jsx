import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.sass";
import { Link } from 'react-router';
import logo from "./assets/logo.svg";
import love from "./assets/love.svg";
import search from "./assets/search.svg";
import shop from "./assets/shop.svg";
import discover from "./assets/discover.png";
import dining from "./assets/dining.png";
import living from "./assets/living.png";
import bedroom from "./assets/bedroom.png";
import Syltherine from "./assets/Syltherine.png";
import Leviosa from "./assets/leviosa.png";
import lolito from "./assets/lolito.png";
import respira from "./assets/respira.png";
import grifo from "./assets/grifo.png";
import muggo from "./assets/muggo.png";
import pingky from "./assets/pingky.png";
import potty from "./assets/potty.png";
import share from "./assets/share.svg";
import compare from "./assets/compare.svg";
import like from "./assets/like.svg";
import room1 from "./assets/room1.png";

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <header>
        <div className="container">
          <div className="left">
            <img src={logo} alt="" />
            <h1>Furniro</h1>
          </div>
          <div className="center">
            <ul>
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contacts">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>
                <a href="">
                  <img src={search} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={love} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={shop} alt="Shop" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="collection">
        <div className="container">
          <div className="infoTitle">
            <div className="info">
              <p>New Arrival</p>
              <h2>Discover Our New Collection</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <a href="">BUY NOW</a>
            </div>
          </div>
          <img src={discover} alt="" />
        </div>
      </div>

      <div className="range">
        <div className="container">
          <div className="info">
            <h2>Browse The Range</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="images">
            <div className="card">
              <img src={dining} alt="" />
              <h2>Dining</h2>
            </div>
            <div className="card">
              <img src={living} alt="" />
              <h2>Living</h2>
            </div>
            <div className="card">
              <img src={bedroom} alt="" />
              <h2>Bedroom</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="container">
          <h2 className="products-title">Our Products</h2>
          <div className="cards">
            <div className="card">
              <img src={Syltherine} alt="" />
              <div className="info-product">
                <h2>Syltherine</h2>
                <p>Stylish cafe chair</p>
                <div className="cena">
                  <p className="new-cena">Rp 2.500.000</p>
                  <p className="old-cena">Rp 3.500.000</p>
                </div>
              </div>
              <div className="gray-card">
                <div className="info-gray-card">
                  <div className="button-cart">
                    <a href="#">Add to cart</a>
                  </div>
                  <div className="link">
                    <ul>
                      <li>
                        <img src={share} alt="" />
                      </li>
                      <li>
                        <img src={compare} alt="" />
                      </li>
                      <li>
                        <img src={like} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={Leviosa} alt="" />
              <div className="info-product">
                <h2>Syltherine</h2>
                <p>Stylish cafe chair</p>
                <div className="cena">
                  <p className="new-cena">Rp 2.500.000</p>
                  <p className="old-cena">Rp 3.500.000</p>
                </div>
              </div>
              <div className="gray-card">
                <div className="info-gray-card">
                  <div className="button-cart">
                    <a href="#">Add to cart</a>
                  </div>
                  <div className="link">
                    <ul>
                      <li>
                        <img src={share} alt="" />
                      </li>
                      <li>
                        <img src={compare} alt="" />
                      </li>
                      <li>
                        <img src={like} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={lolito} alt="" />
              <div className="info-product">
                <h2>Lolito</h2>
                <p>Luxury big sofa</p>
                <div className="cena">
                  <p className="new-cena">Rp 7.000.000</p>
                  <p className="old-cena">Rp 14.000.000</p>
                </div>
              </div>
              <div className="gray-card">
                <div className="info-gray-card">
                  <div className="button-cart">
                    <a href="#">Add to cart</a>
                  </div>
                  <div className="link">
                    <ul>
                      <li>
                        <img src={share} alt="" />
                      </li>
                      <li>
                        <img src={compare} alt="" />
                      </li>
                      <li>
                        <img src={like} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={respira} alt="" />
              <div className="info-product">
                <h2>Lolito</h2>
                <p>Luxury big sofa</p>
                <div className="cena">
                  <p className="new-cena">Rp 7.000.000</p>
                  <p className="old-cena">Rp 14.000.000</p>
                </div>
              </div>
              <div className="gray-card">
                <div className="info-gray-card">
                  <div className="button-cart">
                    <a href="#">Add to cart</a>
                  </div>
                  <div className="link">
                    <ul>
                      <li>
                        <img src={share} alt="" />
                      </li>
                      <li>
                        <img src={compare} alt="" />
                      </li>
                      <li>
                        <img src={like} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={grifo} alt="" />
              <div className="info-product">
                <h2>Syltherine</h2>
                <p>Stylish cafe chair</p>
                <div className="cena">
                  <p className="new-cena">Rp 2.500.000</p>
                  <p className="old-cena">Rp 3.500.000</p>
                </div>
              </div>
              <div className="gray-card">
                <div className="info-gray-card">
                  <div className="button-cart">
                    <a href="#">Add to cart</a>
                  </div>
                  <div className="link">
                    <ul>
                      <li>
                        <img src={share} alt="" />
                      </li>
                      <li>
                        <img src={compare} alt="" />
                      </li>
                      <li>
                        <img src={like} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={muggo} alt="" />
              <div className="info-product">
                <h2>Syltherine</h2>
                <p>Stylish cafe chair</p>
                <div className="cena">
                  <p className="new-cena">Rp 2.500.000</p>
                  <p className="old-cena">Rp 3.500.000</p>
                </div>
              </div>
              <div className="gray-card">
                <div className="info-gray-card">
                  <div className="button-cart">
                    <a href="#">Add to cart</a>
                  </div>
                  <div className="link">
                    <ul>
                      <li>
                        <img src={share} alt="" />
                      </li>
                      <li>
                        <img src={compare} alt="" />
                      </li>
                      <li>
                        <img src={like} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={pingky} alt="" />
              <div className="info-product">
                <h2>Lolito</h2>
                <p>Luxury big sofa</p>
                <div className="cena">
                  <p className="new-cena">Rp 7.000.000</p>
                  <p className="old-cena">Rp 14.000.000</p>
                </div>
              </div>
              <div className="gray-card">
                <div className="info-gray-card">
                  <div className="button-cart">
                    <a href="#">Add to cart</a>
                  </div>
                  <div className="link">
                    <ul>
                      <li>
                        <img src={share} alt="" />
                      </li>
                      <li>
                        <img src={compare} alt="" />
                      </li>
                      <li>
                        <img src={like} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={potty} alt="" />
              <div className="info-product">
                <h2>Lolito</h2>
                <p>Luxury big sofa</p>
                <div className="cena">
                  <p className="new-cena">Rp 7.000.000</p>
                  <p className="old-cena">Rp 14.000.000</p>
                </div>
              </div>
              <div className="gray-card">
                <div className="info-gray-card">
                  <div className="button-cart">
                    <a href="#">Add to cart</a>
                  </div>
                  <div className="link">
                    <ul>
                      <li>
                        <img src={share} alt="" />
                      </li>
                      <li>
                        <img src={compare} alt="" />
                      </li>
                      <li>
                        <img src={like} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-show">
          <a className="show-more" href="">
            Show More
          </a>
        </div>
      </div>
      <div className="rooms">
        <div className="left">
          <div className="info-rooms">
            <h2>50+ Beautiful rooms inspiration</h2>
            <p>
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
            <a href="">Explore More</a>
          </div>
        </div>
        <div className="right">
          <img src={room1} alt="" />
        </div>
      </div>

      <footer class="footer">
        <div class="container">
          <div class="footer-column">
            <h2>
              <strong>Funiro.</strong>
            </h2>
            <p>
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          <div class="footer-column">
            <h3>Links</h3>
            <div class="footer-links">
              <a href="#">Home</a>
              <a href="#">Shop</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
          </div>

          <div class="footer-column">
            <h3>Help</h3>
            <div class="footer-links">
              <a href="#">Payment Options</a>
              <a href="#">Returns</a>
              <a href="#">Privacy Policies</a>
            </div>
          </div>

          <div class="footer-column">
            <h3>Newsletter</h3>
            <div class="newsletter">
              <input type="email" placeholder="Enter Your Email Address" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div className="container">
            <p>2023 funiro. All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
