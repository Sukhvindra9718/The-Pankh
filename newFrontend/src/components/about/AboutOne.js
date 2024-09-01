import React from "react";

export default class AboutOne extends React.Component {
  componentDidMount() {
    const $ = window.$;

    if ($(".video-popup").length) {
      $(".video-popup").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: true,
        fixedContentPos: false,
      });
    }
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <section className="about-one about-three">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div
                  className="about-one__left wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="about-one__img-box">
                    <div className="about-one__img">
                      <img
                        src={
                          publicUrl +
                          "images/resources/about-one-Image.jpeg"
                        }
                        alt=""
                      />
                    </div>
                    <div
                      className="about-one__small-img wow zoomIn animated animated"
                      data-wow-delay="500ms"
                      data-wow-duration="2500ms"
                    >
                      <img
                        src={
                          publicUrl +
                          "images/resources/about-small-image.jpeg"
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-one__right">
                  <div className="about-one__right-content">
                    <div className="section-title text-left">
                      <span className="section-title__tagline">About Us</span>
                      <h2 className="section-title__title">
                        Leave No One Behind Initiative
                      </h2>
                    </div>
                    <p className="about-one__text">
                      Our "Leave No One Behind" initiative ensures inclusive and
                      comprehensive development for all sections of society.
                      Here’s a glimpse of what we do:.
                    </p>
                    <ul className="list-unstyled about-one__points">
                      <li>
                        <div className="icon">
                          <span className="icon-comment"></span>
                        </div>
                        <div className="text">
                          <h4>Women Empowerment.</h4>
                          <p>
                            Enhancing skills and creating diverse livelihood
                            opportunities for women...
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-comment"></span>
                        </div>
                        <div className="text">
                          <h4>Health and Sanitation.</h4>
                          <p>
                            Improving health and sanitation standards for women,
                            children, and vulnerable communities...
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="about-one__bottom-video-box">
                      <div className="about-one__btn-box">
                        <a href="/about" className="thm-btn about-one__btn">
                          About More
                        </a>
                      </div>
                      <div className="about-one__video-link">
                        <a
                          href="https://www.youtube.com/watch?v=ekTu-hysORQ"
                          className="video-popup"
                        >
                          <div className="about-one__video-icon">
                            <span className="fa fa-play"></span>
                            <i className="ripple"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
