import React from 'react';
import { Link } from 'react-router-dom';

export default class FeatureOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="feature-two">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">Our Best features </span>
                            <h2 className="section-title__title">We Popular To Provide <br /> Of Experience.</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                                {/* Feature Two Single */}
                                <div className="feature-two__single">
                                    <div className="feature-two__img">
                                        <img src={publicUrl+"assets/images/resources/feature-2-1.jpg"} alt="" />
                                    </div>
                                    <div className="feature-two__content">
                                        <div className="feature-two__top">
                                            <div className="feature-two__icon">
                                                <span className="icon-donation-1"></span>
                                            </div>
                                            <h3 className="feature-two__title"><Link to={process.env.PUBLIC_URL + `/about`}>Implest and Quickest</Link></h3>
                                        </div>
                                        <p className="feature-two__text">While building out a new website you literally no idea of where to start.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                                {/* Feature Two Single */}
                                <div className="feature-two__single">
                                    <div className="feature-two__img">
                                        <img src={publicUrl+"assets/images/resources/feature-2-2.jpg"} alt="" />
                                    </div>
                                    <div className="feature-two__content">
                                        <div className="feature-two__top">
                                            <div className="feature-two__icon">
                                                <span className="icon-heart"></span>
                                            </div>
                                            <h3 className="feature-two__title"><Link to={process.env.PUBLIC_URL + `/about`}>Community of Poor</Link></h3>
                                        </div>
                                        <p className="feature-two__text">While building out a new website you literally no idea of where to start.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                                {/* Feature Two Single */}
                                <div className="feature-two__single">
                                    <div className="feature-two__img">
                                        <img src={publicUrl+"assets/images/resources/feature-2-3.jpg"} alt="" />
                                    </div>
                                    <div className="feature-two__content">
                                        <div className="feature-two__top">
                                            <div className="feature-two__icon">
                                                <span className="icon-help"></span>
                                            </div>
                                            <h3 className="feature-two__title"><Link to={process.env.PUBLIC_URL + `/about`}>Children of Helps</Link></h3>
                                        </div>
                                        <p className="feature-two__text">While building out a new website you literally no idea of where to start.</p>
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