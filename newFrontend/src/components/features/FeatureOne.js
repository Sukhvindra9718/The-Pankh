import React from 'react';
import { Link } from 'react-router-dom';

export default class FeatureTwo extends React.Component {
    render(){
        return (
            <>
                <section className="feature-one">
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                                {/* Feature One Single */}
                                <div className="feature-one__single">
                                    <div className="feature-one__top">
                                        <div className="feature-one__icon">
                                            <span className="icon-donation-1"></span>
                                        </div>
                                        <h3 className="feature-one__title"><Link to={process.env.PUBLIC_URL + `/about`}>Implest and Quickest</Link></h3>
                                    </div>
                                    <p className="feature-one__text">While building out a new website you
                                        literally no idea of where to start.</p>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                                {/* Feature One Single */}
                                <div className="feature-one__single">
                                    <div className="feature-one__top">
                                        <div className="feature-one__icon">
                                            <span className="icon-heart"></span>
                                        </div>
                                        <h3 className="feature-one__title"><Link to={process.env.PUBLIC_URL + `/about`}>Community of Poor</Link></h3>
                                    </div>
                                    <p className="feature-one__text">While building out a new website you
                                        literally no idea of where to start.</p>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                                {/* Feature One Single */}
                                <div className="feature-one__single">
                                    <div className="feature-one__top">
                                        <div className="feature-one__icon">
                                            <span className="icon-help"></span>
                                        </div>
                                        <h3 className="feature-one__title"><Link to={process.env.PUBLIC_URL + `/about`}>Children of Helps</Link></h3>
                                    </div>
                                    <p className="feature-one__text">While building out a new website you
                                        literally no idea of where to start.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </>
        )
    }
}