import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import Logo from "/assets/image.png";
// import Loader from "/assets/Loader.png";

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <header className="header-area header-default sticky-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-5 col-sm-3 col-md-3 col-lg-2 pr-0">
            <div className="header-logo-area">
              <NavLink to="/">
                <img className="logo-main" src="assets/image.png" alt="Logo" />
                <img className="logo-light" src="assets/image.png" alt="Logo" />
              </NavLink>
            </div>
          </div>
          <div className="col-7 col-sm-9 col-md-9 col-lg-10">
            <div className="header-align">
              <div className="header-navigation-area">
                <ul className="main-menu nav justify-content-center">
                  <li className="active">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li className="has-submenu">
                    <NavLink to="/causes">Causes</NavLink>
                    <ul className="submenu-nav">
                      <li>
                        <NavLink to="/causes">Causes</NavLink>
                      </li>
                      <li>
                        <NavLink to="causes-details.html">
                          Causes Details
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <NavLink to="blog.html">Blog</NavLink>
                    <ul className="submenu-nav">
                      <li>
                        <NavLink to="blog.html">Blog Grid</NavLink>
                      </li>
                      <li>
                        <NavLink to="blog-details.html">Blog Single</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <NavLink to="index-2.html">Pages</NavLink>
                    <ul className="submenu-nav">
                      <li>
                        <NavLink to="event-details.html">Event Details</NavLink>
                      </li>
                      <li>
                        <NavLink to="volunteer.html">Volunteer</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                  </li>
                </ul>
              </div>
              <div className="header-action-area">
                <button className="btn-menu d-xl-none">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <NavLink
                  to="contact"
                  className="btn-theme btn-gradient btn-slide btn-style"
                >
                  Donation
                  <img
                    className="icon icon-img"
                    src="assets/img/icons/arrow-line-right2.png"
                    alt="Icon"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
