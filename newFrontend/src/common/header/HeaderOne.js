import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
// import SearchButton from "./SearchButton";

export default class HeaderOne extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <header className="main-header clearfix">
          <div className="main-header__top clearfix">
            <div className="container clearfix">
              <div className="main-header__top-inner clearfix">
                <div className="main-header__top-left">
                  <ul className="list-unstyled main-header__top-address">
                    <li>
                      <div className="icon">
                        <span className="icon-call"></span>
                      </div>
                      <div className="text">
                        <p>
                          <a href="tel:5204654544">0120-6055473</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-envelope"></span>
                      </div>
                      <div className="text">
                        <p>
                          <a href="mailto:mail@thepankh.info">
                            mail@thepankh.info
                          </a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-place"></span>
                      </div>
                      <div className="text">
                        <p>
                          Head Office: PK-22, Ground Floor, Sec-122, Noida
                          (UP)-201307
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="main-header__top-right">
                  <ul className="list-unstyled main-header__top-right-content">
                    <li>
                      <Link to={process.env.PUBLIC_URL + `/login`}>Login</Link>
                    </li>

                    {/* <li>
                      <Link to={process.env.PUBLIC_URL + `/`}>Help You</Link>
                    </li> */}
                    {/* <SearchButton /> */}

                    <li
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "1.5rem",
                      }}
                    >
                      <div className="icon">
                        <a href="https://www.facebook.com/society.pankh05">
                          <span className="fab fa-facebook-square"></span>
                        </a>
                      </div>

                      <div className="icon">
                        <a href="https://www.instagram.com/pankhsociety/">
                          <span className="fab fa-instagram"></span>
                        </a>
                      </div>

                      <div className="icon">
                        <a href="https://twitter.com/ ">
                          <span className="fab fa-twitter"></span>
                        </a>
                      </div>

                      <div className="icon">
                        <a href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7224380283993612288/?actorCompanyId=97907319/">
                          <span className="fab fa-linkedin"></span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <nav className="main-menu clearfix">
            <div className="container clearfix">
              <div className="main-menu-wrapper clearfix">
                <div className="main-menu-wrapper__left">
                  <div className="main-menu-wrapper__logo">
                    <Link to={process.env.PUBLIC_URL + `/`}>
                      <img
                        src={publicUrl + "images/logo/PANKHLogo1.png"}
                        alt=""
                        style={{ height: "48px" }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="main-menu-wrapper__right">
                  <div className="main-menu-wrapper__main-menu">
                    <MobileMenu />
                    <Nav />
                  </div>
                  <Link
                    to={process.env.PUBLIC_URL + `/donate-now`}
                    className="thm-btn main-header__btn"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
