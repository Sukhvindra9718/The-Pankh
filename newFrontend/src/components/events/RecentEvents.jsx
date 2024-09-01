import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentEvents = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let apiBaseUrl = "https://thepankh.info/api/v1";
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <>
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
                        <a href={event.link} target="_blank" className="thm-btn recent-event__btn">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="recent-event__content">
                      <ul className="list-unstyled recent-event__meta">
                        <li>
                          <p>
                            <span className="icon-calendar"></span> {event.localeDate}
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="icon-back-in-time"></span> {event.localeTime}
                          </p>
                        </li>
                      </ul>
                      <h3 className="recent-event__title">
                        <Link to={process.env.PUBLIC_URL + `/events`}>{event.title}</Link>
                      </h3>
                      <p className="recent-event__text">T{event.shortdescription}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="300ms"></div>
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
