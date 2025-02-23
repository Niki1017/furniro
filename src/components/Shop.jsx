import { useState } from "react";
import "./static/Shop.sass";
import { Link } from 'react-router';
import logo from "../assets/logo.svg";
import love from "../assets/love.svg";
import search from "../assets/search.svg";
import shop from "../assets/shop.svg";


function Shop() {
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
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
    </>
  );
}

export default Shop;
