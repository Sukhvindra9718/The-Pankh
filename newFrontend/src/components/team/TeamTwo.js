import React from 'react';
import {Link} from 'react-router-dom';

export default class TeamTwo extends React.Component {
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
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                                {/* Team One Single */}
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/team-1-1.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `/team-details`}>Kavin Martin</Link></h4>
                                        <p className="team-one__title">Ceo</p>
                                        <div className="team-one__social">
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-facebook"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                {/* Team One Single */}
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/team-1-2.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `/team-details`}>David Malan</Link></h4>
                                        <p className="team-one__title">Volunteer</p>
                                        <div className="team-one__social">
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-facebook"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                                {/* Team One Single */}
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/team-1-3.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `/team-details`}>David Hardson</Link></h4>
                                        <p className="team-one__title">Team Leader</p>
                                        <div className="team-one__social">
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-facebook"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
                                {/* Team One Single */}
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/team-1-4.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `/team-details`}>Dean Elgar</Link></h4>
                                        <p className="team-one__title">Founder</p>
                                        <div className="team-one__social">
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-facebook"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                                {/* Team One Single */}
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/team-1-5.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `/team-details`}>David Copper</Link></h4>
                                        <p className="team-one__title">Manager</p>
                                        <div className="team-one__social">
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-facebook"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                                {/* Team One Single */}
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/team-1-6.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `/team-details`}>Mike Hardson</Link></h4>
                                        <p className="team-one__title">Fundraise</p>
                                        <div className="team-one__social">
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-facebook"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
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