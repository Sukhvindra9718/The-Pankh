import React from "react";
function Home() {
  return (
    <>
      {/*wrapper start*/}
      <div className="wrapper home-default-wrapper">
        {/*== Start Preloader Content ==*/}
        <div className="preloader-wrap">
          <div className="preloader">
            <span className="dot"></span>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        {/*== End Preloader Content ==*/}

        <main className="main-content">
          {/*== Start Hero Area Wrapper ==*/}
          <section className="home-slider-area slider-default">
            <div className="home-slider-content">
              {/* Start Slide Item */}
              <div className="home-slider-item">
                <div className="slider-content-area">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 col-lg-6 col-xl-7">
                        <div
                          className="content"
                          data-aos="fade-right"
                          data-aos-duration="1000"
                        >
                          <div className="subtitle-content">
                            <img
                              src="img/icons/1.png"
                              alt="Givest-HasTech"
                            />
                            <h6>Change The World.</h6>
                          </div>
                          <div className="tittle-wrp">
                            <h2>
                              Need Your Big Hand For <span>Change</span> The
                              World.
                            </h2>
                          </div>
                          <div className="btn-wrp">
                            <a
                              href="causes.html"
                              className="btn-theme btn-gradient btn-slide btn-style"
                            >
                              All Causes
                              <img
                                className="icon icon-img"
                                src="img/icons/arrow-line-right2.png"
                                alt="Icon"
                              />
                            </a>
                            <a
                              href="#/"
                              className="btn-theme btn-border btn-black btn-style"
                            >
                              Donate Now
                              <img
                                className="icon icon-img"
                                src="img/icons/arrow-right-line-dark.png"
                                alt="Icon"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 offset-md-1 col-lg-5 offset-lg-1 col-xl-5 offset-xl-0">
                        <div className="layer-style">
                          <div className="thumb scene">
                            <span className="scene-layer" data-depth="0.20">
                              <img
                                className=""
                                src="img/slider/1.jpg"
                                alt="Image-Givest"
                              />
                            </span>
                            <div className="shape-circle scene">
                              <span className="scene-layer" data-depth="0.10">
                                <img
                                  src="img/shape/circle1.png"
                                  alt="Image-Givest"
                                />
                              </span>
                              <span className="scene-layer" data-depth="0.40">
                                <img
                                  className="circle-img"
                                  src="img/shape/2.png"
                                  alt="Image-Givest"
                                />
                              </span>
                            </div>
                          </div>
                          <div className="shape-style1 scene">
                            <span className="scene-layer" data-depth="0.30">
                              <img
                                src="img/shape/1.png"
                                alt="Image-Givest"
                              />
                            </span>
                          </div>
                          <div className="donate-circle-wrp">
                            <div
                              className="pie-chart-circle"
                              data-size="255"
                              data-line-width="8"
                              data-line-cap="butt"
                              data-track-color="#ffffff54"
                              data-bar-color="#fff"
                              data-percent="68"
                            ></div>
                            <div className="donate-content">
                              <div className="raised-amount">$865M</div>
                              <img
                                className="line-shape-img"
                                src="img/shape/line-s2.png"
                                alt="Image-Givest"
                              />
                              <h5 className="donate-title">Total Raised</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-shape">
                    <div className="shape-style1">
                      <img
                        className="shape-img1"
                        src="img/shape/map1.png"
                        alt="Image-Givest"
                      />
                    </div>
                    <div className="shape-style2">
                      <img
                        className="shape-img2"
                        src="img/shape/map2.png"
                        alt="Image-Givest"
                      />
                    </div>
                    <div className="shape-style3">
                      <img
                        className="shape-img3"
                        src="img/shape/banner-line1.png"
                        alt="Image-Givest"
                      />
                    </div>
                    <div className="shape-style4">
                      <img
                        className="shape-img3"
                        src="img/shape/banner-line2.png"
                        alt="Image-Givest"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* End Slide Item */}
            </div>
          </section>
          {/*== End Hero Area Wrapper ==*/}

          {/*== Start Service Area ==*/}
          <section className="service-area service-default-area">
            <div className="container">
              <div
                className="row icon-box-style1"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="col-md-6 col-lg-4">
                  <div className="icon-box-item item-one mb-md-30">
                    <div className="icon-box-top">
                      <div className="icon-box">
                        <img
                          className="icon-img"
                          src="img/icons/s1.png"
                          alt="Icon"
                        />
                      </div>
                      <h4 className="title">Clean Water</h4>
                    </div>
                    <div className="content">
                      <div className="separator-line">
                        <img
                          src="img/shape/line-s1.png"
                          alt="Givest-HasTech"
                        />
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text the printing typesetng
                        industry lorem Ipsum has been industry standard dummy
                        text ever since.
                      </p>
                      <a
                        href="causes-details.html"
                        className="btn-theme btn-white btn-border btn-size-md"
                      >
                        View Details
                        <img
                          className="icon icon-img"
                          src="img/icons/arrow-line-right.png"
                          alt="Icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="icon-box-item item-two mb-md-30">
                    <div className="icon-box-top">
                      <div className="icon-box">
                        <img
                          className="icon-img"
                          src="img/icons/s2.png"
                          alt="Icon"
                        />
                      </div>
                      <h4 className="title">Healthy Food</h4>
                    </div>
                    <div className="content">
                      <div className="separator-line">
                        <img
                          src="img/shape/line-s1.png"
                          alt="Givest-HasTech"
                        />
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text the printing typesetng
                        industry lorem Ipsum has been industry standard dummy
                        text ever since.
                      </p>
                      <a
                        href="causes-details.html"
                        className="btn-theme btn-white btn-border btn-size-md"
                      >
                        View Details
                        <img
                          className="icon icon-img"
                          src="img/icons/arrow-line-right.png"
                          alt="Icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="icon-box-item item-three">
                    <div className="icon-box-top">
                      <div className="icon-box">
                        <img
                          className="icon-img"
                          src="img/icons/s3.png"
                          alt="Icon"
                        />
                      </div>
                      <h4 className="title">Medical Help</h4>
                    </div>
                    <div className="content">
                      <div className="separator-line">
                        <img
                          src="img/shape/line-s1.png"
                          alt="Givest-HasTech"
                        />
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text the printing typesetng
                        industry lorem Ipsum has been industry standard dummy
                        text ever since.
                      </p>
                      <a
                        href="causes-details.html"
                        className="btn-theme btn-white btn-border btn-size-md"
                      >
                        View Details
                        <img
                          className="icon icon-img"
                          src="img/icons/arrow-line-right.png"
                          alt="Icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*== End Service Area ==*/}

          {/*== Start About Area ==*/}
          <section className="about-area about-default-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <div
                    className="section-title position-relative z-index-1"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <h5 className="subtitle line-theme-color">About Us.</h5>
                    <h2 className="title">
                      <span>Givest</span> is The Non Profitable Organization.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-xl-7">
                  <div
                    className="layer-style"
                    data-aos="fade-up"
                    data-aos-duration="1100"
                  >
                    <div className="thumb">
                      <div className="row m-0">
                        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 p-0 d-none d-sm-block d-lg-none d-xl-block tilt-animation">
                          <img
                            src="img/about/1.jpg"
                            alt="Image-Givest"
                          />
                        </div>
                        <div className="col-sm-8 col-md-8 col-lg-12 col-xl-8 p-0 tilt-animation">
                          <img
                            className="img-two"
                            src="img/about/2.jpg"
                            alt="Image-Givest"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-5">
                  <div
                    className="about-content"
                    data-aos="fade-up"
                    data-aos-duration="1100"
                  >
                    <p className="text-style">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry has been the industry standard.
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry orem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown.
                    </p>
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry orem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown.
                    </p>
                    <ul className="list-icon-style">
                      <li>
                        <img
                          className="icon-img"
                          src="img/icons/check-double-line.png"
                          alt="Image-Givest"
                        />
                        Need your simple help <br />
                        for save children.
                      </li>
                      <li className="line-center"></li>
                      <li>
                        <img
                          className="icon-img"
                          src="img/icons/check-double-line.png"
                          alt="Image-Givest"
                        />
                        Need your simple help <br />
                        for save children.
                      </li>
                    </ul>
                    <a href="#/" className="btn-theme btn-gradient btn-slide">
                      Donate Now
                      <img
                        className="icon icon-img"
                        src="img/icons/arrow-line-right2.png"
                        alt="Icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*== End About Area ==*/}

          {/*== Start Causes Area ==*/}
          <section className="causes-area causes-default-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 m-auto">
                  <div
                    className="section-title text-center"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <h5 className="subtitle line-theme-color">Check Causes</h5>
                    <h2 className="title title-style">
                      Donate For Poor People. Causes of Givest
                      <img
                        className="img-shape"
                        src="img/shape/3.png"
                        alt="Image-Givest"
                      />
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row" data-aos="fade-up" data-aos-duration="1000">
                <div className="col-md-6 col-lg-4">
                  <div className="causes-item mb-md-30">
                    <div className="thumb">
                      <img
                        src="img/causes/01.jpg"
                        alt="Givest-HasTech"
                      />
                    </div>
                    <div className="content">
                      <ul className="donate-info">
                        <li className="info-item">
                          <span className="info-title">Goal:</span>
                          <span className="amount">$ 5,000</span>
                        </li>
                        <li className="info-item">
                          <span className="info-title">Raised:</span>
                          <span className="amount">$ 2,000</span>
                        </li>
                        <li className="info-item">
                          <span className="info-title">To Go:</span>
                          <span className="amount">$ 1,000</span>
                        </li>
                      </ul>
                      <h4 className="title">
                        <a href="causes-details.html">
                          Children Education Needs For Change The World.
                        </a>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the industry's since
                        the unknown.
                      </p>
                    </div>
                    <div className="causes-footer">
                      <div className="admin">
                        <h5>
                          <a href="causes.html">
                            <span className="icon-img">
                              <img
                                src="img/icons/admin1.png"
                                alt="Icon"
                              />
                            </span>
                            Kristin Horton
                          </a>
                        </h5>
                      </div>
                      <a
                        className="btn-theme btn-border-gradient gray-border btn-size-md"
                        href="#"
                      >
                        <span>
                          Donate Now
                          <img
                            className="icon icon-img"
                            src="img/icons/arrow-line-right-gradient.png"
                            alt="Icon"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="causes-item mb-md-30">
                    <div className="thumb">
                      <img
                        src="img/causes/02.jpg"
                        alt="Givest-HasTech"
                      />
                    </div>
                    <div className="content">
                      <ul className="donate-info">
                        <li className="info-item">
                          <span className="info-title">Goal:</span>
                          <span className="amount">$ 5,000</span>
                        </li>
                        <li className="info-item">
                          <span className="info-title">Raised:</span>
                          <span className="amount">$ 2,000</span>
                        </li>
                        <li className="info-item">
                          <span className="info-title">To Go:</span>
                          <span className="amount">$ 1,000</span>
                        </li>
                      </ul>
                      <h4 className="title">
                        <a href="causes-details.html">
                          Children Education Needs For Change The World.
                        </a>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the industry's since
                        the unknown.
                      </p>
                    </div>
                    <div className="causes-footer">
                      <div className="admin">
                        <h5>
                          <a href="causes.html">
                            <span className="icon-img">
                              <img
                                src="img/icons/admin1.png"
                                alt="Icon"
                              />
                            </span>
                            Kristin Horton
                          </a>
                        </h5>
                      </div>
                      <a
                        className="btn-theme btn-border-gradient gray-border btn-size-md"
                        href="#"
                      >
                        <span>
                          Donate Now
                          <img
                            className="icon icon-img"
                            src="img/icons/arrow-line-right-gradient.png"
                            alt="Icon"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="causes-item">
                    <div className="thumb">
                      <img
                        src="img/causes/03.jpg"
                        alt="Givest-HasTech"
                      />
                    </div>
                    <div className="content">
                      <ul className="donate-info">
                        <li className="info-item">
                          <span className="info-title">Goal:</span>
                          <span className="amount">$ 5,000</span>
                        </li>
                        <li className="info-item">
                          <span className="info-title">Raised:</span>
                          <span className="amount">$ 2,000</span>
                        </li>
                        <li className="info-item">
                          <span className="info-title">To Go:</span>
                          <span className="amount">$ 1,000</span>
                        </li>
                      </ul>
                      <h4 className="title">
                        <a href="causes-details.html">
                          Children Education Needs For Change The World.
                        </a>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the industry's since
                        the unknown.
                      </p>
                    </div>
                    <div className="causes-footer">
                      <div className="admin">
                        <h5>
                          <a href="causes.html">
                            <span className="icon-img">
                              <img
                                src="img/icons/admin1.png"
                                alt="Icon"
                              />
                            </span>
                            Kristin Horton
                          </a>
                        </h5>
                      </div>
                      <a
                        className="btn-theme btn-border-gradient gray-border btn-size-md"
                        href="#"
                      >
                        <span>
                          Donate Now
                          <img
                            className="icon icon-img"
                            src="img/icons/arrow-line-right-gradient.png"
                            alt="Icon"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*== End Causes Area ==*/}

          {/*== Start Donate Area ==*/}
          <section className="donate-area donate-default-area bgcolor-theme3">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-xxl-7">
                  <div
                    className="content"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="section-title">
                      <h5 className="subtitle line-theme-color mb-7">
                        Make A Donation
                      </h5>
                      <h2 className="title title-style text-white">
                        Need Pure Water For Mozambique People.
                        <img
                          className="img-shape"
                          src="img/shape/3.png"
                          alt="Image-Givest"
                        />
                      </h2>
                    </div>
                    <div className="donate-form">
                      <form action="#">
                        <div className="amount-info">
                          <div className="donate-amount">$20</div>
                          <div className="donate-amount">$50</div>
                          <div className="donate-amount">$200</div>
                          <div className="donate-amount donate-custom-amount">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Custom"
                            />
                          </div>
                        </div>
                        <div className="btn-wrp">
                          <a
                            href="#/"
                            className="btn-theme btn-gradient btn-slide"
                          >
                            Donate Now
                            <img
                              className="icon icon-img"
                              src="img/icons/arrow-line-right2.png"
                              alt="Icon"
                            />
                          </a>
                          <a
                            href="#/"
                            className="btn-theme btn-gradient btn-border"
                          >
                            Join Events
                            <img
                              className="icon icon-img"
                              src="img/icons/arrow-line-right2-gradient.png"
                              alt="Icon"
                            />
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-xxl-4 offset-xxl-1">
                  <div className="donners-content">
                    <div
                      className="thumb-bg-layer"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                      data-bg-img="img/photos/bg-donate1.jpg"
                    ></div>
                    <div
                      className="donners-info"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <h3>Great Donners</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry since the 1500s, when an unknown.
                      </p>
                      <div className="donners-item">
                        <div className="donner-item">
                          <img
                            src="img/photos/donner1.png"
                            alt="Image-Givest"
                          />
                        </div>
                        <div className="donner-item">
                          <img
                            src="img/photos/donner2.png"
                            alt="Image-Givest"
                          />
                        </div>
                        <div className="donner-item">
                          <img
                            src="img/photos/donner3.png"
                            alt="Image-Givest"
                          />
                        </div>
                        <div className="donner-item donner-number">+286</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*== End Donate Area ==*/}

          {/*== Start Funfact Area ==*/}
          <section className="funfact-area funfact-default-area">
            <div className="container">
              <div
                className="row row-gutter-0 funfact-items-style1"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="col-sm-6 col-md-4 funfact-item">
                  <div className="inner-content">
                    <div className="icon-box">
                      <img
                        className="icon"
                        src="img/icons/f1.png"
                        alt="Image-Givest"
                      />
                      <img
                        className="shape-img"
                        src="img/shape/4.png"
                        alt="Image-Givest"
                      />
                    </div>
                    <div className="content">
                      <div className="number">
                        <h2>
                          <span className="counter-animate">598</span>K
                        </h2>
                      </div>
                      <img
                        className="line-shape"
                        src="img/shape/funfact-line1.png"
                        alt="Image-Givest"
                      />
                      <p className="title">// Poor People</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 funfact-item">
                  <div className="inner-content">
                    <div className="icon-box">
                      <img
                        className="icon"
                        src="img/icons/f2.png"
                        alt="Image-Givest"
                      />
                      <img
                        className="shape-img"
                        src="img/shape/4.png"
                        alt="Image-Givest"
                      />
                    </div>
                    <div className="content">
                      <div className="number">
                        <h2>
                          <span className="counter-animate">897</span>M
                        </h2>
                      </div>
                      <img
                        className="line-shape"
                        src="img/shape/funfact-line1.png"
                        alt="Image-Givest"
                      />
                      <p className="title">// Fund raised</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 funfact-item">
                  <div className="inner-content">
                    <div className="icon-box">
                      <img
                        className="icon"
                        src="img/icons/f3.png"
                        alt="Image-Givest"
                      />
                      <img
                        className="shape-img"
                        src="img/shape/4.png"
                        alt="Image-Givest"
                      />
                    </div>
                    <div className="content">
                      <div className="number">
                        <h2>
                          <span className="counter-animate">998</span>+
                        </h2>
                      </div>
                      <img
                        className="line-shape"
                        src="img/shape/funfact-line1.png"
                        alt="Image-Givest"
                      />
                      <p className="title">// Active Member</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*== End Funfact Area ==*/}

          {/*== Start Events Area ==*/}
          <section className="events-area events-default-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div
                    className="section-title"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <h5 className="subtitle line-theme-color mb-7">
                      Recent Events
                    </h5>
                    <h2 className="title title-style">
                      Join Recent Fundraising Event Of Givest.
                      <img
                        className="img-shape"
                        src="img/shape/3.png"
                        alt="Image-Givest"
                      />
                    </h2>
                  </div>
                  <div
                    className="events-content events-list"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="event-item">
                      <div className="thumb">
                        <img
                          className="thumb-img"
                          src="img/events/1.jpg"
                          alt="Image-Givest"
                        />
                        <a
                          href="event-details.html"
                          className="btn-theme btn-gradient btn-size-sm"
                        >
                          Join Now
                          <img
                            className="icon icon-img"
                            src="img/icons/arrow-line-right.png"
                            alt="Icon"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <div className="event-info">
                          15 January 2021 // <span>Education</span>
                        </div>
                        <h4 className="event-name">
                          <a href="event-details.html">
                            Need School For Mozambique Children.
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="event-item">
                      <div className="thumb">
                        <img
                          className="thumb-img"
                          src="img/events/2.jpg"
                          alt="Image-Givest"
                        />
                        <a
                          href="event-details.html"
                          className="btn-theme btn-gradient btn-size-sm"
                        >
                          Join Now
                          <img
                            className="icon icon-img"
                            src="img/icons/arrow-line-right.png"
                            alt="Icon"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <div className="event-info">
                          15 January 2021 // <span>Education</span>
                        </div>
                        <h4 className="event-name">
                          <a href="event-details.html">
                            Need School For Mozambique Children.
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="event-item">
                      <div className="thumb">
                        <img
                          className="thumb-img"
                          src="img/events/3.jpg"
                          alt="Image-Givest"
                        />
                        <a
                          href="event-details.html"
                          className="btn-theme btn-gradient btn-size-sm"
                        >
                          Join Now
                          <img
                            className="icon icon-img"
                            src="img/icons/arrow-line-right.png"
                            alt="Icon"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <div className="event-info">
                          15 January 2021 // <span>Education</span>
                        </div>
                        <h4 className="event-name">
                          <a href="event-details.html">
                            Need School For Mozambique Children.
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-8 offset-2 col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-4 offset-lg-0">
                  <div
                    className="layer-style"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    <div className="thumb tilt-animation">
                      <img
                        src="img/photos/event1.png"
                        alt="Image-Givest"
                      />
                      <div className="play-video-btn">
                        <a
                          className="btn-play play-video-popup wave-btn"
                          href="https://player.vimeo.com/video/174392490?dnt=1&amp;app_id=122963"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                          <div className="icon">
                            <img src="img/icons/play.png" alt="Icon" />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="shape-style1">
                      <img
                        src="img/shape/line1.png"
                        alt="Image-Givest"
                      />
                    </div>
                    <div className="shape-style2">
                      <img
                        src="img/shape/line2.png"
                        alt="Image-Givest"
                      />
                    </div>
                    <div className="shape-style3">
                      <img
                        src="img/shape/line3.png"
                        alt="Image-Givest"
                      />
                    </div>
                    <div className="shape-style4">
                      <img
                        src="img/shape/line4.png"
                        alt="Image-Givest"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*== End Events Area ==*/}

          {/*== Start Testimonial Area ==*/}
          <section className="testimonial-area testimonial-default-area bgcolor-theme3">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-4 col-xl-5">
                  <div
                    className="title-wrp"
                    data-bg-img="img/testimonial/bg-testi1.jpg"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <div className="section-title">
                      <h5 className="subtitle line-white-color text-white mb-7">
                        Recent Events
                      </h5>
                      <h2 className="title title-style text-white">
                        What People Say About Us.
                        <img
                          className="img-shape"
                          src="img/shape/3.png"
                          alt="Image-Givest"
                        />
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-7 col-xl-6">
                  <div
                    className="testimonial-content"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="testimonial-slider-content">
                      <div className="swiper-container testimonial-slider-container">
                        <div className="swiper-wrapper testimonial-slider">
                          <div className="swiper-slide testimonial-single">
                            <div className="client-thumb-wrp">
                              <div className="client-thumb">
                                <img
                                  src="img/testimonial/1.png"
                                  alt="Image-Givest"
                                />
                              </div>
                              <div className="quote-icon">“</div>
                            </div>
                            <div className="client-content">
                              <p>
                                The leap into electronic typesetting,
                                essentially unchanged was popularised the
                                release Letraset sheets containing and more
                                recently desktop publishing like Aldus maker
                                including.
                              </p>
                            </div>
                            <div className="client-info">
                              <img
                                className="shape-line-img"
                                src="img/shape/line-t1.png"
                                alt="Image-Givest"
                              />
                              <h4 className="name">Harvey Harrington</h4>
                              <h6 className="designation">Senior Volunteer</h6>
                            </div>
                          </div>
                          <div className="swiper-slide testimonial-single">
                            <div className="client-thumb-wrp">
                              <div className="client-thumb">
                                <img
                                  src="img/testimonial/2.png"
                                  alt="Image-Givest"
                                />
                              </div>
                              <div className="quote-icon">“</div>
                            </div>
                            <div className="client-content">
                              <p>
                                It is long established fact that reader will
                                distract by the readable content a page when
                                looking atten layout. The point of using and
                                that it has a normal distribution of letters
                              </p>
                            </div>
                            <div className="client-info">
                              <img
                                className="shape-line-img"
                                src="img/shape/line-t1.png"
                                alt="Image-Givest"
                              />
                              <h4 className="name">Julia Steve</h4>
                              <h6 className="designation">Senior Volunteer</h6>
                            </div>
                          </div>
                        </div>
                        {/* Add Arrows */}
                        <div className="navigation-wrp">
                          <div className="swiper-button-prev">
                            <img
                              className="icon-img"
                              src="img/icons/test-arrow-left.png"
                              alt="Image-Icon"
                            />
                          </div>
                          <div className="swiper-button-next">
                            <img
                              className="icon-img"
                              src="img/icons/test-arrow-right.png"
                              alt="Image-Icon"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*== End Testimonial Area ==*/}

          {/*== Start Blog Area Wrapper ==*/}
          <section className="blog-area blog-default-area">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-lg-6 m-auto">
                  <div
                    className="section-title text-center"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <h5 className="subtitle line-theme-color">Blog Post</h5>
                    <h2 className="title title-style">
                      Latest News From Givest Blog
                      <img
                        className="img-shape"
                        src="img/shape/3.png"
                        alt="Image-Givest"
                      />
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row" data-aos="fade-up" data-aos-duration="1000">
                <div className="col-md-6 col-lg-4">
                  {/*== Start Blog Post Item ==*/}
                  <div className="post-item mb-md-150">
                    <div className="thumb">
                      <a href="blog-details.html">
                        <img src="img/blog/1.jpg" alt="Givest-Blog" />
                      </a>
                      <div className="meta-date">
                        <a href="blog.html">
                          <span>15</span> January
                        </a>
                      </div>
                      <div className="shape-line"></div>
                    </div>
                    <div className="content">
                      <div className="inner-content">
                        <div className="meta">
                          <a className="post-category" href="blog.html">
                            Education
                          </a>
                          <div className="post-share">
                            <a className="icon-share" href="blog.html">
                              <img
                                src="img/icons/share-line-gradient.png"
                                alt="Icon"
                              />
                            </a>
                            <ul>
                              <li>
                                <a className="color-facebook" href="#/">
                                  <i className="social_facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a className="color-twitter" href="#/">
                                  <i className="social_twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a className="color-dribbble" href="#/">
                                  <i className="social_dribbble"></i>
                                </a>
                              </li>
                              <li>
                                <a className="color-pinterest" href="#/">
                                  <i className="social_pinterest"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h4 className="title">
                          <a href="blog-details.html">
                            Save Children Life For Future.
                          </a>
                        </h4>
                        <p>
                          Lorem Ipsum is simply dummy text industry since
                          unknown..
                        </p>
                      </div>
                      <div className="post-footer">
                        <a
                          href="blog-details.html"
                          className="btn-theme btn-border-gradient btn-size-xs"
                        >
                          <span>
                            Details
                            <img
                              className="icon icon-img"
                              src="img/icons/arrow-line-right-gradient.png"
                              alt="Icon"
                            />
                          </span>
                        </a>
                        <a className="post-author" href="blog.html">
                          By: Robbins
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*== End Blog Post Item ==*/}
                </div>

                <div className="col-md-6 col-lg-4">
                  {/*== Start Blog Post Item ==*/}
                  <div className="post-item mb-md-150">
                    <div className="thumb">
                      <a href="blog-details.html">
                        <img src="img/blog/2.jpg" alt="Givest-Blog" />
                      </a>
                      <div className="meta-date">
                        <a href="blog.html">
                          <span>25</span> January
                        </a>
                      </div>
                      <div className="shape-line"></div>
                    </div>
                    <div className="content">
                      <div className="inner-content">
                        <div className="meta">
                          <a className="post-category" href="blog.html">
                            Water
                          </a>
                          <div className="post-share">
                            <a className="icon-share" href="blog.html">
                              <img
                                src="img/icons/share-line-gradient.png"
                                alt="Icon"
                              />
                            </a>
                            <ul>
                              <li>
                                <a className="color-facebook" href="#/">
                                  <i className="social_facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a className="color-twitter" href="#/">
                                  <i className="social_twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a className="color-dribbble" href="#/">
                                  <i className="social_dribbble"></i>
                                </a>
                              </li>
                              <li>
                                <a className="color-pinterest" href="#/">
                                  <i className="social_pinterest"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h4 className="title">
                          <a href="blog-details.html">
                            Save Children Life For Future.
                          </a>
                        </h4>
                        <p>
                          Lorem Ipsum is simply dummy text industry since
                          unknown..
                        </p>
                      </div>
                      <div className="post-footer">
                        <a
                          href="blog-details.html"
                          className="btn-theme btn-border-gradient btn-size-xs"
                        >
                          <span>
                            Details
                            <img
                              className="icon icon-img"
                              src="img/icons/arrow-line-right-gradient.png"
                              alt="Icon"
                            />
                          </span>
                        </a>
                        <a className="post-author" href="blog.html">
                          By: Robbins
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*== End Blog Post Item ==*/}
                </div>

                <div className="col-md-6 col-lg-4">
                  {/*== Start Blog Post Item ==*/}
                  <div className="post-item">
                    <div className="thumb">
                      <a href="blog-details.html">
                        <img src="img/blog/3.jpg" alt="Givest-Blog" />
                      </a>
                      <div className="meta-date">
                        <a href="blog.html">
                          <span>30</span> January
                        </a>
                      </div>
                      <div className="shape-line"></div>
                    </div>
                    <div className="content">
                      <div className="inner-content">
                        <div className="meta">
                          <a className="post-category" href="blog.html">
                            Health
                          </a>
                          <div className="post-share">
                            <a className="icon-share" href="blog.html">
                              <img
                                src="img/icons/share-line-gradient.png"
                                alt="Icon"
                              />
                            </a>
                            <ul>
                              <li>
                                <a className="color-facebook" href="#/">
                                  <i className="social_facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a className="color-twitter" href="#/">
                                  <i className="social_twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a className="color-dribbble" href="#/">
                                  <i className="social_dribbble"></i>
                                </a>
                              </li>
                              <li>
                                <a className="color-pinterest" href="#/">
                                  <i className="social_pinterest"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h4 className="title">
                          <a href="blog-details.html">
                            Save Children Life For Future.
                          </a>
                        </h4>
                        <p>
                          Lorem Ipsum is simply dummy text industry since
                          unknown..
                        </p>
                      </div>
                      <div className="post-footer">
                        <a
                          href="blog-details.html"
                          className="btn-theme btn-border-gradient btn-size-xs"
                        >
                          <span>
                            Details
                            <img
                              className="icon icon-img"
                              src="img/icons/arrow-line-right-gradient.png"
                              alt="Icon"
                            />
                          </span>
                        </a>
                        <a className="post-author" href="blog.html">
                          By: Robbins
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*== End Blog Post Item ==*/}
                </div>
              </div>
            </div>
          </section>
          {/*== End Blog Area Wrapper ==*/}

          {/*== Start Brand Logo Area ==*/}
          <section className="brand-logo-area brand-logo-default-area">
            <div className="container">
              <div className="row" data-aos="fade-up" data-aos-duration="1000">
                <div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-4 offset-lg-0 col-xl-4">
                  <div className="section-title text-center text-lg-start">
                    <h2 className="title title-style mt-xl-30">
                      Our Current Sponsors.
                      <img
                        className="img-shape"
                        src="img/shape/3.png"
                        alt="Image-Givest"
                      />
                    </h2>
                  </div>
                </div>
                <div className="col-lg-8 col-xl-7 offset-xl-1">
                  <div className="brand-logo-content">
                    <div className="row row-cols-3 row-cols-sm-5">
                      <div className="col">
                        <div className="brand-logo-item">
                          <img
                            src="img/brand-logo/1.png"
                            alt="Image-Givest"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="brand-logo-item">
                          <img
                            src="img/brand-logo/2.png"
                            alt="Image-Givest"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="brand-logo-item">
                          <img
                            src="img/brand-logo/3.png"
                            alt="Image-Givest"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="brand-logo-item">
                          <img
                            src="img/brand-logo/4.png"
                            alt="Image-Givest"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="brand-logo-item">
                          <img
                            src="img/brand-logo/5.png"
                            alt="Image-Givest"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="brand-logo-item">
                          <img
                            src="img/brand-logo/6.png"
                            alt="Image-Givest"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="brand-logo-item">
                          <img
                            src="img/brand-logo/7.png"
                            alt="Image-Givest"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="brand-logo-item">
                          <img
                            src="img/brand-logo/8.png"
                            alt="Image-Givest"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="brand-logo-item">
                          <img
                            src="img/brand-logo/9.png"
                            alt="Image-Givest"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="brand-logo-item">
                          <img
                            src="img/brand-logo/10.png"
                            alt="Image-Givest"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*== End Brand Logo Area ==*/}
        </main>
      </div>
    </>
  );
}

export default Home;
