import React from 'react';
import { Link } from 'react-router-dom';

export default class VideoOne extends React.Component {
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

                <section className="video-one">
                    <div className="video-one__content-box">
                        <div className="video-one-shape sauare-mover"></div>
                        <div className="video-one-bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/video-one-bg.jpg)'}}></div>
                        <div className="container">
                            <div className="video-one__inner">
                                <div className="video-one__video-link">
                                    <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                        <div className="video-one__video-icon">
                                            <span className="fa fa-play"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                </div>
                                <h3 className="video-one__title">Welcome To Our We Donation <br /> Video Poor.</h3>
                                <p className="video-one__text">If you are going to use a passage of Lorem Ipsum, you <br /> need to be
                                    sure there isn't anything </p>
                                <Link to={process.env.PUBLIC_URL + `/about`} className="thm-btn video-one__btn">Video More</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}