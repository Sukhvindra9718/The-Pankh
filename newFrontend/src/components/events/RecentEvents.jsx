import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL,PROD_URL,ENV } from "../../config";
const RecentEvents = () => {

  let apiBaseUrl = `${ENV === "dev" ? API_URL:PROD_URL}/api/v1`;
  const [events, setEvents] = useState([]);

  const getAllEvents = async () => {
    try {
      const res = await axios.get(`${apiBaseUrl}/events`);
      const eventsWithLocalDateAndTime = res.data.events.map((event) => {
        const eventDate = new Date(event.eventsdatetime);
        return {
          ...event,
          localeDate: eventDate.toLocaleDateString(),
          localeTime: eventDate.toLocaleTimeString(),
        };
      });
      setEvents(eventsWithLocalDateAndTime);
      // console.log(eventsWithLocalDateAndTime);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <>
      <section
        className="gallery-page"
        style={{
          backgroundColor: "#EFEFEF",
          height: "100%",
          paddingTop: "8vh",
        }}
      >
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">Media Coverage</span>
            <h2 className="section-title__title">
              Key Details are as mentioned below :
            </h2>
          </div>

          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`${100 * (9 + 1)}ms`}
            >
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img
                    src={
                      "https://res.cloudinary.com/dhk1toauk/image/upload/v1725383818/Picture10_qbzadq.jpg"
                    }
                    alt={"Gallery Image"}
                  />
                  <div className="gallery-page__icon">
                    <a
                      className="img-popup"
                      href={
                        "https://res.cloudinary.com/dhk1toauk/image/upload/v1725383818/Picture10_qbzadq.jpg"
                      }
                      target="_blank"
                    >
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`${100 * (9 + 1)}ms`}
            >
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img
                    src={
                      "https://res.cloudinary.com/dhk1toauk/image/upload/v1725383818/Picture3_zgyqyk.jpg"
                    }
                    alt={"Gallery Image"}
                  />
                  <div className="gallery-page__icon">
                    <a
                      className="img-popup"
                      href={
                        "https://res.cloudinary.com/dhk1toauk/image/upload/v1725383818/Picture3_zgyqyk.jpg"
                      }
                      target="_blank"
                    >
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`${100 * (9 + 1)}ms`}
            >
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img
                    src={
                      "https://res.cloudinary.com/dhk1toauk/image/upload/v1725383817/Picture12_pkmmr1.jpg"
                    }
                    alt={"Gallery Image"}
                  />
                  <div className="gallery-page__icon">
                    <a
                      className="img-popup"
                      href={
                        "https://res.cloudinary.com/dhk1toauk/image/upload/v1725383817/Picture12_pkmmr1.jpg"
                      }
                      target="_blank"
                    >
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`${100 * (9 + 1)}ms`}
            >
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img
                    src={
                      "https://res.cloudinary.com/dhk1toauk/image/upload/v1725383817/Picture6_uorqf5.jpg"
                    }
                    alt={"Gallery Image"}
                  />
                  <div className="gallery-page__icon">
                    <a
                      className="img-popup"
                      href={
                        "https://res.cloudinary.com/dhk1toauk/image/upload/v1725383817/Picture6_uorqf5.jpg"
                      }
                      target="_blank"
                    >
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`${100 * (9 + 1)}ms`}
            >
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img
                    src={
                      "https://res.cloudinary.com/dhk1toauk/image/upload/v1725383817/Picture5_rlycpk.jpg"
                    }
                    alt={"Gallery Image"}
                  />
                  <div className="gallery-page__icon">
                    <a
                      className="img-popup"
                      href={
                        "https://res.cloudinary.com/dhk1toauk/image/upload/v1725383817/Picture5_rlycpk.jpg"
                      }
                      target="_blank"
                    >
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`${100 * (9 + 1)}ms`}
            >
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img
                    src={
                      "https://res.cloudinary.com/dhk1toauk/image/upload/v1725383818/Picture7_n9a8nf.jpg"
                    }
                    alt={"Gallery Image"}
                  />
                  <div className="gallery-page__icon">
                    <a
                      className="img-popup"
                      href={
                        "https://res.cloudinary.com/dhk1toauk/image/upload/v1725383818/Picture7_n9a8nf.jpg"
                      }
                      target="_blank"
                    >
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="recent-event" style={{ minHeight: "100px" }}>
        {events && events.length > 0 ? (
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">Our Recent events</span>
              <h2 className="section-title__title">
                We Best Popular To Join <br /> Of Recents.
              </h2>
            </div>

            <div className="row">
              {events.map((event) => (
                <div
                  className="col-xl-6 col-lg-6 wow fadeInUp"
                  key={event.id}
                  data-wow-delay="100ms"
                >
                  <div className="recent-event__single">
                    <div className="recent-event__img">
                      <img src={event.fileurl} alt="" />
                      <div className="recent-event__btn-box">
                        <a
                          href={event.link}
                          target="_blank"
                          className="thm-btn recent-event__btn"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="recent-event__content">
                      <ul className="list-unstyled recent-event__meta">
                        <li>
                          <p>
                            <span className="icon-calendar"></span>{" "}
                            {event.localeDate}
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="icon-back-in-time"></span>{" "}
                            {event.localeTime}
                          </p>
                        </li>
                      </ul>
                      <h3 className="recent-event__title">
                        <Link to={process.env.PUBLIC_URL + `/events`}>
                          {event.title}
                        </Link>
                      </h3>
                      <p className="recent-event__text">
                        T{event.shortdescription}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay="300ms"
              ></div>
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default RecentEvents;
