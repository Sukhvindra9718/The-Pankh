import React from 'react';
import {Link} from 'react-router-dom';

export default class TeamOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="team-one">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">Expert Team</span>
                            <h2 className="section-title__title">Meet Our Volunteer Team.</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                                {/* Team One Single */}
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/team-1-1.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `/team-details`}>Kavin Martin</Link></h4>
                                        <p className="team-one__title">Ceo</p>
                                        <div className="team-one__social">
                                            <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                                            <a href="https://facebook.com/"><i className="fab fa-facebook"></i></a>
                                            <a href="https://pinterest.com/"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                                {/* Team One Single */}
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/team-1-2.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `/team-details`}>David Malan</Link></h4>
                                        <p className="team-one__title">Volunteer</p>
                                        <div className="team-one__social">
                                            <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                                            <a href="https://facebook.com/"><i className="fab fa-facebook"></i></a>
                                            <a href="https://pinterest.com/"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms">
                                {/* Team One Single */}
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/team-1-3.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `/team-details`}>David Hardson</Link></h4>
                                        <p className="team-one__title">Team Leader</p>
                                        <div className="team-one__social">
                                            <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                                            <a href="https://facebook.com/"><i className="fab fa-facebook"></i></a>
                                            <a href="https://pinterest.com/"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
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