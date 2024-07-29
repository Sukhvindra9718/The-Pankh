import React from 'react';
import {Link} from 'react-router-dom';

export default class FooterOne extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".footer-widget-one__twitter-feed-content").length) {
            $(".footer-widget-one__twitter-feed-content").owlCarousel({
                loop: true,
                autoplay: true,
                margin: 30,
                nav: false,
                dots: true,
                smartSpeed: 500,
                autoplayTimeout: 10000,
                navText: ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    991: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
                }
            });
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <footer className="site-footer-one">
                    <div className="site-footer-one__top">
                        <div className="container">
                            <div className="row">

                                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                    <div className="footer-widget__column footer-widget-one__about">
                                        <div className="footer-widget-one__about-logo">
                                            <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/resources/footer-logo.png"} alt="" /></Link>
                                        </div>
                                        <p className="footer-widget-one__about-text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis lorem augue, at
                                            dapibus quam aliquet ex...
                                        </p>
                                        <ul className="list-unstyled footer-widget-one__list">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-place"></span>
                                                </div>
                                                <div className="text">
                                                    <p>13/A, Miranda Halim City.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-envelope"></span>
                                                </div>
                                                <div className="text">
                                                    <p><a href="mailto:demo@example.com">demo@example.com</a></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-call"></span>
                                                </div>
                                                <div className="text">
                                                    <p><a href="tel:09969569535">099 695 695 35</a></p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                    <div className="footer-widget__column footer-widget-one__gallery clearfix">
                                        <h3 className="footer-widget-one__title">Gallery</h3>
                                        <ul className="footer-widget-one__gallery-list list-unstyled clearfix">
                                            <li>
                                                <div className="footer-widget-one__gallery-img">
                                                    <img src={publicUrl+"assets/images/resources/footer-widget-one-gallery-1.jpg"} alt="" />
                                                    <Link to={process.env.PUBLIC_URL + `/project-details`}><span className="fa fa-link"></span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="footer-widget-one__gallery-img">
                                                    <img src={publicUrl+"assets/images/resources/footer-widget-one-gallery-2.jpg"} alt="" />
                                                    <Link to={process.env.PUBLIC_URL + `/project-details`}><span className="fa fa-link"></span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="footer-widget-one__gallery-img">
                                                    <img src={publicUrl+"assets/images/resources/footer-widget-one-gallery-3.jpg"} alt="" />
                                                    <Link to={process.env.PUBLIC_URL + `/project-details`}><span className="fa fa-link"></span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="footer-widget-one__gallery-img">
                                                    <img src={publicUrl+"assets/images/resources/footer-widget-one-gallery-4.jpg"} alt="" />
                                                    <Link to={process.env.PUBLIC_URL + `/project-details`}><span className="fa fa-link"></span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="footer-widget-one__gallery-img">
                                                    <img src={publicUrl+"assets/images/resources/footer-widget-one-gallery-5.jpg"} alt="" />
                                                    <Link to={process.env.PUBLIC_URL + `/project-details`}><span className="fa fa-link"></span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="footer-widget-one__gallery-img">
                                                    <img src={publicUrl+"assets/images/resources/footer-widget-one-gallery-6.jpg"} alt="" />
                                                    <Link to={process.env.PUBLIC_URL + `/project-details`}><span className="fa fa-link"></span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="footer-widget-one__gallery-img">
                                                    <img src={publicUrl+"assets/images/resources/footer-widget-one-gallery-7.jpg"} alt="" />
                                                    <Link to={process.env.PUBLIC_URL + `/project-details`}><span className="fa fa-link"></span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="footer-widget-one__gallery-img">
                                                    <img src={publicUrl+"assets/images/resources/footer-widget-one-gallery-8.jpg"} alt="" />
                                                    <Link to={process.env.PUBLIC_URL + `/project-details`}><span className="fa fa-link"></span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="footer-widget-one__gallery-img">
                                                    <img src={publicUrl+"assets/images/resources/footer-widget-one-gallery-9.jpg"} alt="" />
                                                    <Link to={process.env.PUBLIC_URL + `/project-details`}><span className="fa fa-link"></span></Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                    <div className="footer-widget__column footer-widget-one__latest-works clearfix">
                                        <h3 className="footer-widget-one__title">Latest News</h3>
                                        <ul className="footer-widget-one__latest-works-list list-unstyled clearfix">
                                            <li>
                                                <div className="footer-widget-one__latest-works-content">
                                                    <h4 className="footer-widget-one__latest-works-title">
                                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>Change your Life Through Education</Link>
                                                    </h4>
                                                    <p className="footer-widget-one__latest-works-date">
                                                        July 29, 20222
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="footer-widget-one__latest-works-content">
                                                    <h4 className="footer-widget-one__latest-works-title">
                                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>Donate your woolens this winter</Link>
                                                    </h4>
                                                    <p className="footer-widget-one__latest-works-date">
                                                        July 29, 20222
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                    <div className="footer-widget__column footer-widget-one__twitter-feed clearfix">
                                        <h3 className="footer-widget-one__title">Twitter Feed</h3>
                                        <div className="owl-carousel owl-theme thm-owl__carousel footer-widget-one__twitter-feed-content">
                                            <div className="footer-widget-one__twitter-feed-single">
                                                <p className="footer-widget-one__twitter-feed-text">Lorem ipsum is simply free text
                                                    dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor
                                                    incididunt <a href="#">http://t.twitter.com</a></p>
                                                <div className="footer-widget-one__twitter-feed-bottom">
                                                    <div className="footer-widget-one__twitter-feed-icon">
                                                        <span className="fab fa-twitter"></span>
                                                    </div>
                                                    <div className="footer-widget-one__twitter-feed-details">
                                                        <h5 className="footer-widget-one__twitter-feed-name">John Smith
                                                            <span>@unicktheme</span></h5>
                                                        <p className="footer-widget-one__twitter-feed-time">18 Hours Ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer-widget-one__twitter-feed-single">
                                                <p className="footer-widget-one__twitter-feed-text">Lorem ipsum is simply free text
                                                    dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor
                                                    incididunt <a href="#">http://t.twitter.com</a></p>
                                                <div className="footer-widget-one__twitter-feed-bottom">
                                                    <div className="footer-widget-one__twitter-feed-icon">
                                                        <span className="fab fa-twitter"></span>
                                                    </div>
                                                    <div className="footer-widget-one__twitter-feed-details">
                                                        <h5 className="footer-widget-one__twitter-feed-name">Kavin Smith
                                                            <span>@unicktheme</span></h5>
                                                        <p className="footer-widget-one__twitter-feed-time">18 Hours Ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer-widget-one__twitter-feed-single">
                                                <p className="footer-widget-one__twitter-feed-text">Lorem ipsum is simply free text
                                                    dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor
                                                    incididunt <a href="#">http://t.twitter.com</a></p>
                                                <div className="footer-widget-one__twitter-feed-bottom">
                                                    <div className="footer-widget-one__twitter-feed-icon">
                                                        <span className="fab fa-twitter"></span>
                                                    </div>
                                                    <div className="footer-widget-one__twitter-feed-details">
                                                        <h5 className="footer-widget-one__twitter-feed-name">Sara Albart
                                                            <span>@unicktheme</span></h5>
                                                        <p className="footer-widget-one__twitter-feed-time">18 Hours Ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-footer__bottom">
                        <div className="container">
                            <div className="site-footer__bottom-inner">
                                <p className="site-footer__bottom-text">© 2022 Copyright by <a href="https://themeforest.net/user/unicktheme">unicktheme</a></p>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}