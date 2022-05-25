import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const NavBar = () => {
  const { totalUniqueItems, emptyCart } = useCart();
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
        <div className="container">
          {/* Brand */}
          <Link className="navbar-brand waves-effect" to="/">
            <strong className="blue-text">Khanh.Tokyo</strong>
          </Link>
          {/* Collapse */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Left */}
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link waves-effect" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
            {/* Right */}
            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item">
                <Link className="nav-link waves-effect" to="/cart">
                  <span className="badge red z-depth-1 mr-1 text-success">
                    {" "}
                    {totalUniqueItems}{" "}
                  </span>
                  <i className="fas fa-shopping-cart" />
                  <span className="clearfix d-none d-sm-inline-block">
                    {" "}
                    Cart{" "}
                  </span>
                </Link>
                {/* <button onClick={() => emptyCart()}> EmptyCart</button> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
