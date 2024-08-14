import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="main-menu text-center">
      <nav>
        <ul className="main-menu__list">
          <li className="dropdown current">
            <Link to={process.env.PUBLIC_URL + `/`}>Home</Link>
          </li>

          <li className="dropdown">
            <Link to={process.env.PUBLIC_URL + `/about`}>About</Link>
            <ul>
              <li>
                <Link to={process.env.PUBLIC_URL + `/whoweare`}>
                  Who We are
                </Link>
              </li>

              <li>
                <Link to={process.env.PUBLIC_URL + `/thepankhmodel`}>
                  The Pankh Model
                </Link>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <Link to={process.env.PUBLIC_URL + `#`}>Pages</Link>
            <ul>
              <li>
                <Link to={process.env.PUBLIC_URL + `/team`}>Team</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/projects`}>Projects</Link>
              </li>

              <li>
                <Link to={process.env.PUBLIC_URL + `/testimonials`}>
                  Testimonial
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to={process.env.PUBLIC_URL + `#`}>Gallery</Link>
            <ul>
              <li>
                <Link to={process.env.PUBLIC_URL + `/images`}>Images</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/videos`}>Videos</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to={process.env.PUBLIC_URL + `#`}>Donation</Link>
            <ul>
              <li>
                <Link to={process.env.PUBLIC_URL + `/donation`}>Donation</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/donate-now`}>
                  Donate Now
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + `/events`}>Events</Link>
          </li>
          <li className="dropdown">
            <Link to={process.env.PUBLIC_URL + `/blogs`}>Blog</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + `/contact`}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
