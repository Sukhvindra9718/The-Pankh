import React, { useEffect, useState } from "react";
import Logo from "../assets/image.png";
import { Link } from "react-router-dom";
import Loader from "../assets/Loader.png";

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);


  return (
    <div className="Navbar">
      <div className="Navbar__logo">
        <img className="logo" src={Logo} alt="Logo" srcset="" />
      </div>
      <div className="Navbar__menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>
            <Link onClick={() => setIsLoading((prev) => !prev)} to="/">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      {isLoading && (
        <div className="loader">
          <img src={Loader} alt="Loader" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
