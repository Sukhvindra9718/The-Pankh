import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="widget-item">
                <div className="about-widget">
                  <a className="footer-logo" href="/">
                    <img src="image.png" alt="Logo" />
                  </a>
                  <p>
                    Lorem Ipsum is simply dummy text of the industry orem Ipsum
                    has been the industry's since the when unknown.
                  </p>
                  <div className="widget-total-raised">
                    <h4 className="raised-title">Total Raised:</h4>
                    <div className="raised-amount">$8,965</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="widget-item">
                <h4 className="widget-title line-style">Gallery</h4>
                <div className="widget-gallery">
                  <div className="row row-cols-3 row-gutter-10">
                    <div className="col">
                      <div className="gallery-item">
                        <img
                          src="img/photos/gallery1.jpg"
                          alt="Givest-HasTech"
                        />
                        <a className="icon" href="#/">
                          <i className="icofont-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div className="gallery-item">
                        <img
                          src="img/photos/gallery2.jpg"
                          alt="Givest-HasTech"
                        />
                        <a className="icon" href="#/">
                          <i className="icofont-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div className="gallery-item">
                        <img
                          src="img/photos/gallery3.jpg"
                          alt="Givest-HasTech"
                        />
                        <a className="icon" href="#/">
                          <i className="icofont-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div className="gallery-item">
                        <img
                          src="img/photos/gallery4.jpg"
                          alt="Givest-HasTech"
                        />
                        <a className="icon" href="#/">
                          <i className="icofont-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div className="gallery-item">
                        <img
                          src="img/photos/gallery5.jpg"
                          alt="Givest-HasTech"
                        />
                        <a className="icon" href="#/">
                          <i className="icofont-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div className="gallery-item">
                        <img
                          src="img/photos/gallery6.jpg"
                          alt="Givest-HasTech"
                        />
                        <a className="icon" href="#/">
                          <i className="icofont-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="widget-item menu-wrap-two-column">
                <h4 className="widget-title line-style">Quick Links</h4>
                <nav className="widget-menu-wrap">
                  <div className="row">
                    <div className="col-6 col-sm-6 col-md-6 pr-sm-5">
                      <ul className="nav-menu nav">
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="blog.html">Blog Post Terms</a>
                        </li>
                        <li>
                          <a href="#/">Conditions</a>
                        </li>
                        <li>
                          <a href="#/">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#/">Documentation</a>
                        </li>
                        <li>
                          <a href="#/">Donners</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 pl-sm-5">
                      <ul className="nav-menu nav align-right">
                        <li>
                          <a href="volunteer.html">Become Volunteer</a>
                        </li>
                        <li>
                          <a href="#/">Quick Fundraise</a>
                        </li>
                        <li>
                          <a href="#/">Give Donation</a>
                        </li>
                        <li>
                          <a href="volunteer.html">Become Volunteer</a>
                        </li>
                        <li>
                          <a href="causes-details.html">Food And Water</a>
                        </li>
                        <li>
                          <a href="causes-details.html">Medical facilities</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/*== Scroll Top Button ==*/}
        <div className="scroll-to-top">
          <img src="img/icons/arrow-up-line.png" alt="Icon-Image" />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="widget-copyright text-center">
                  <p>
                    © 2024 <span>The Pankg</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-layer">
        <img src="img/shape/footer-line.png" alt="Image-Givest" />
      </div>
    </footer>
  );
};

export default Footer;
