import React from "react";
import { Link } from "react-router-dom";

const RecentEventsOne = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <>
      <section className="recent-event">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">Our Recent events</span>
            <h2 className="section-title__title">
              We Best Popular To Join <br /> Of Recents.
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="100ms">
              {/* Recent Event Single */}
              <div className="recent-event__single">
                <div className="recent-event__img">
                  <img src={publicUrl + "images/resources/recent-event-1-1.jpg"} alt="" />
                  <div className="recent-event__btn-box">
                    <Link
                      to={process.env.PUBLIC_URL + `/events`}
                      className="thm-btn recent-event__btn"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="recent-event__content">
                  <ul className="list-unstyled recent-event__meta">
                    <li>
                      <p>
                        {" "}
                        <span className="icon-calendar"></span> 25 Mar 2022
                      </p>
                    </li>
                    <li>
                      <p>
                        {" "}
                        <span className="icon-back-in-time"></span> 04:00 am{" "}
                      </p>
                    </li>
                  </ul>
                  <h3 className="recent-event__title">
                    <Link to={process.env.PUBLIC_URL + `/events`}>Event of Shares</Link>
                  </h3>
                  <p className="recent-event__text">
                    To make sure education of poor While atever motivates you to you no idea of
                    where to.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="300ms"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentEventsOne;
