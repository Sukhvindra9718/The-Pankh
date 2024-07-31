import React from 'react';
import {Link} from 'react-router-dom';

export default class ProjectDetailsContent extends React.Component {
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
                {/* Project Details Start */}
                <section className="project-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="project-details__left">
                                    <div className="project-details__img">
                                        <img src={publicUrl+"assets/images/project/project-details-img-1.jpg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="project-details__right">
                                    <h3 className="project-details__title">Information</h3>
                                    <ul className="list-unstyled project-details__list">
                                        <li>
                                            <div className="left">
                                                <h4>Project Name:</h4>
                                            </div>
                                            <div className="right">
                                                <p>Children of Helps Nonpofit</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="left">
                                                <h4>Category:</h4>
                                            </div>
                                            <div className="right">
                                                <p>Nonpofit Poor.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="left">
                                                <h4>Client</h4>
                                            </div>
                                            <div className="right">
                                                <p>Children of Helps .</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="left">
                                                <h4>Location:</h4>
                                            </div>
                                            <div className="right">
                                                <p>Rangpur,Berakuti</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="left">
                                                <h4>Share:</h4>
                                            </div>
                                            <div className="right">
                                                <div className="project-details__social">
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                    <a href="#"><i className="fab fa-facebook"></i></a>
                                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="project-details__bottom">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="project-details__text-box">
                                        <p className="project-details__text-1">Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry orem Ipsum has been the industry's standard dummy text ever
                                            since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. It has survived not only five centuries, but also the
                                            leap into electronic typesetting, remaining essentially unchanged. It was
                                            popularised in the 1960s with the release of Letraset sheets containin Lorem Ipsum
                                            passages, and more recently with desktop publishing software like Aldus PageMaker
                                            including .</p>
                                        <p className="project-details__text-2">Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry orem Ipsum has been the industry's standard dummy text ever
                                            since the 1500s, when an unknown printer took a galley of type .</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Project Details End */}

                {/* video One Start */}
                <section className="video-one video-three">
                    <div className="container">
                        <div className="video-one__content-box">
                            <div className="video-two-shape sauare-mover"></div>
                            <div className="video-one-bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%"
                                style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/video-one-bg.jpg)'}}></div>
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
                {/* video One End */}
            </>
        )
    }
}