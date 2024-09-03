import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CausesOne = () => {
  useEffect(() => {
    const $ = window.$;

    if ($(".count-bar").length) {
      $(".count-bar").appear(
        function () {
          var el = $(this);
          var percent = el.data("percent");
          $(el).css("width", percent).addClass("counted");
        },
        {
          accY: -50,
        }
      );
    }
  }, []);



  let apiBaseUrl = "http://localhost:3001/api/v1";
  const [fund, setFund] = useState([]);

  const getAllFunds = async () => {
    try {
      const res = await axios.get(`${apiBaseUrl}/funddetails`);
      const fundsWithLocalDateAndTime = res.data.fund.map((fund) => {
        const fundDate = new Date(fund.createdat);
        return {
          ...fund,
          localeDate: fundDate.toLocaleDateString(),
          localeTime: fundDate.toLocaleTimeString(),
        };
      });

      setFund(fundsWithLocalDateAndTime);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllFunds();
  }, []);

  return (
    <>
      {fund.length > 0 ? (
        <section className="causes-one causes-three">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">Our Funds</span>
              <h2 className="section-title__title">
                We Popular To Provide <br /> Of Experience.
              </h2>
            </div>
            <div className="row">
              {fund.map((fund) => (
                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                  <div className="causes-one__single">
                    <div className="causes-one__img">
                      <img src={fund.fileurl} alt="" />
                    </div>
                    <div className="causes-one__content-box">
                      <div className="causes-one__donate-btn-box">
                        <Link
                          to={process.env.PUBLIC_URL + `/donate-now`}
                          className="thm-btn causes-one__donate-btn"
                        >
                          Donate Now
                        </Link>
                      </div>
                      <div className="causes-one__content">
                        <h3 className="causes-one__title">
                          <Link to={process.env.PUBLIC_URL + `/donation-details`}>
                            {fund.title}
                          </Link>
                        </h3>
                        <div className="causes-one__progress">
                          <div className="bar">
                            <div className="bar-inner count-bar" data-percent="75%">
                              <div className="count-text">75%</div>
                            </div>
                          </div>
                          <div className="causes-one__goals">
                            <p>
                              <span>₹{fund.raisedprice}</span> Raised
                            </p>
                            <p>
                              <span>₹{fund.goalprice}</span> Goal
                            </p>
                          </div>
                        </div>
                        <div className="causes-one__btn-box">
                          <Link
                            to={process.env.PUBLIC_URL + `/donation-details`}
                            className="causes-one__read-more"
                          >
                            Read More <span className="icon-plus-sign"></span>
                          </Link>
                        </div>
                      </div>
                      <div className="causes-one__bottom">
                        <ul className="list-unstyled causes-one__list">
                          <li>
                            <div className="icon">
                              <span className="icon-calendar"></span>
                            </div>
                            <div className="text">
                              <p>{fund.localeDate}</p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-back-in-time"></span>
                            </div>
                            <div className="text">
                              <p>{fund.localeTime}</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default CausesOne;
