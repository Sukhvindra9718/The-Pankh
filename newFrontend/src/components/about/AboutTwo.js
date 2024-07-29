import React from 'react';
import { Link } from 'react-router-dom';

export default class AboutTwo extends React.Component {
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
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="about-two">
                    <div className="about-two-shape-1 float-bob-x"><img src={publicUrl+"assets/images/shapes/about-two-shape-1.png"} alt="" /></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="about-two__left">
                                    <div className="about-two__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/about-two-bg.jpg)'}}></div>
                                    <div className="about-two__img-box wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                        <div className="about-two__img">
                                            <img src={publicUrl+"assets/images/resources/about-two-img-1.jpg"} alt="" />
                                        </div>
                                        <div className="about-two__small-img wow zoomIn animated animated" data-wow-delay="500ms" data-wow-duration="2500ms">
                                            <img src={publicUrl+"assets/images/resources/about-two-small-img.jpg"} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about-two__right">
                                    <div className="section-title text-left">
                                        <span className="section-title__tagline">Our About Us</span>
                                        <h2 className="section-title__title">The Community To Give as Children Poor.</h2>
                                    </div>
                                    <p className="about-two__text">Lorem ipsum is simply free text dolor sit amet, consectetur
                                        adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lonm
                                        andhn.</p>
                                    <ul className="list-unstyled about-two__points">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-comment"></span>
                                            </div>
                                            <div className="text">
                                                <p>It service for business network.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-comment"></span>
                                            </div>
                                            <div className="text">
                                                <p>Business Corporate Generosity solving.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-comment"></span>
                                            </div>
                                            <div className="text">
                                                <p>It service for business network.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-comment"></span>
                                            </div>
                                            <div className="text">
                                                <p>Perspiciatis unde omnis sit laudantium.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-comment"></span>
                                            </div>
                                            <div className="text">
                                                <p>Perspiciatis unde omnis sit laudantium.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <Link to={process.env.PUBLIC_URL + `/about`} className="thm-btn about-two__btn">About More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}