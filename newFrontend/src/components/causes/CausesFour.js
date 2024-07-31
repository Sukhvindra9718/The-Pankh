import React from 'react';
import { Link } from 'react-router-dom';

export default class CausesFour extends React.Component {
    componentDidMount() {

        const $ = window.$;
  
        if ($(".count-bar").length) {
            $(".count-bar").appear(
              function () {
                var el = $(this);
                var percent = el.data("percent");
                $(el).css("width", percent).addClass("counted");
              }, {
                accY: -50
              }
            );
        }
            
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="causes-one">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">Our Causes Events</span>
                            <h2 className="section-title__title">We Popular To Provide <br /> Of Experience.</h2>
                        </div>
                        <div className="row">

                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                                {/* Causes One Single */}
                                <div className="causes-one__single">
                                    <div className="causes-one__img">
                                        <img src={publicUrl+"assets/images/resources/causes-1-1.jpg"} alt="" />
                                    </div>
                                    <div className="causes-one__content-box">
                                        <div className="causes-one__donate-btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/donate-now`} className="thm-btn causes-one__donate-btn">Donate Now</Link>
                                        </div>
                                        <div className="causes-one__content">
                                            <h3 className="causes-one__title"><Link to={process.env.PUBLIC_URL + `/donation-details`}>Give African Child a
                                                    Good Education.</Link>
                                            </h3>
                                            <div className="causes-one__progress">
                                                <div className="bar">
                                                    <div className="bar-inner count-bar" data-percent="75%">
                                                        <div className="count-text">75%</div>
                                                    </div>
                                                </div>
                                                <div className="causes-one__goals">
                                                    <p><span>$25,270</span> Raised</p>
                                                    <p><span>$30,000</span> Goal</p>
                                                </div>
                                            </div>
                                            <div className="causes-one__btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/donation-details`} className="causes-one__read-more">Read More <span
                                                        className="icon-plus-sign"></span></Link>
                                            </div>
                                        </div>
                                        <div className="causes-one__bottom">
                                            <ul className="list-unstyled causes-one__list">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-calendar"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>25 Mar 2022</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-back-in-time"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>04:00 am / 06:00 am</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                                {/* Causes One Single */}
                                <div className="causes-one__single">
                                    <div className="causes-one__img">
                                        <img src={publicUrl+"assets/images/resources/causes-1-2.jpg"} alt="" />
                                    </div>
                                    <div className="causes-one__content-box">
                                        <div className="causes-one__donate-btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/donate-now`} className="thm-btn causes-one__donate-btn">Donate Now</Link>
                                        </div>
                                        <div className="causes-one__content">
                                            <h3 className="causes-one__title"><Link to={process.env.PUBLIC_URL + `/donation-details`}>Raise Hand To The Poor
                                                    Children Education.</Link>
                                            </h3>
                                            <div className="causes-one__progress">
                                                <div className="bar">
                                                    <div className="bar-inner count-bar" data-percent="65%">
                                                        <div className="count-text">65%</div>
                                                    </div>
                                                </div>
                                                <div className="causes-one__goals">
                                                    <p><span>$25,270</span> Raised</p>
                                                    <p><span>$30,000</span> Goal</p>
                                                </div>
                                            </div>
                                            <div className="causes-one__btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/donation-details`} className="causes-one__read-more">Read More <span
                                                        className="icon-plus-sign"></span></Link>
                                            </div>
                                        </div>
                                        <div className="causes-one__bottom">
                                            <ul className="list-unstyled causes-one__list">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-calendar"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>25 Mar 2022</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-back-in-time"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>04:00 am / 06:00 am</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                                {/* Causes One Single */}
                                <div className="causes-one__single">
                                    <div className="causes-one__img">
                                        <img src={publicUrl+"assets/images/resources/causes-1-3.jpg"} alt="" />
                                    </div>
                                    <div className="causes-one__content-box">
                                        <div className="causes-one__donate-btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/donate-now`} className="thm-btn causes-one__donate-btn">Donate Now</Link>
                                        </div>
                                        <div className="causes-one__content">
                                            <h3 className="causes-one__title"><Link to={process.env.PUBLIC_URL + `/donation-details`}>Children Education
                                                    Needs For Change The World.</Link>
                                            </h3>
                                            <div className="causes-one__progress">
                                                <div className="bar">
                                                    <div className="bar-inner count-bar" data-percent="85%">
                                                        <div className="count-text">85%</div>
                                                    </div>
                                                </div>
                                                <div className="causes-one__goals">
                                                    <p><span>$25,270</span> Raised</p>
                                                    <p><span>$30,000</span> Goal</p>
                                                </div>
                                            </div>
                                            <div className="causes-one__btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/donation-details`} className="causes-one__read-more">Read More <span
                                                        className="icon-plus-sign"></span></Link>
                                            </div>
                                        </div>
                                        <div className="causes-one__bottom">
                                            <ul className="list-unstyled causes-one__list">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-calendar"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>25 Mar 2022</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-back-in-time"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>04:00 am / 06:00 am</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </>
        )
    }
}