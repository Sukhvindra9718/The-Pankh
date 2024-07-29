import React from 'react';
import {Link} from 'react-router-dom';

export default class ProjectOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="project-one">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">Our Causes Events</span>
                            <h2 className="section-title__title">We Popular To Provide <br /> Best Projects.</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="100ms">
                                {/* Project One Single */}
                                <div className="project-one__single">
                                    <div className="project-one__img">
                                        <img src={publicUrl+"assets/images/project/project-1-1.jpg"} alt="" />
                                        <div className="project-one__content">
                                            <p className="project-one__sub-title">Our Best Projects</p>
                                            <h3 className="project-one__title"><Link to={process.env.PUBLIC_URL + `/project-details`}>Event of Shares</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                {/* Project One Single */}
                                <div className="project-one__single">
                                    <div className="project-one__img">
                                        <img src={publicUrl+"assets/images/project/project-1-2.jpg"} alt="" />
                                        <div className="project-one__content">
                                            <p className="project-one__sub-title">Our Best Projects</p>
                                            <h3 className="project-one__title"><Link to={process.env.PUBLIC_URL + `/project-details`}>Provides them Poor</Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                {/* Project One Single */}
                                <div className="project-one__single">
                                    <div className="project-one__img">
                                        <img src={publicUrl+"assets/images/project/project-1-3.jpg"} alt="" />
                                        <div className="project-one__content">
                                            <p className="project-one__sub-title">Our Best Projects</p>
                                            <h3 className="project-one__title"><Link to={process.env.PUBLIC_URL + `/project-details`}>Children of Poor</Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                {/* Project One Single */}
                                <div className="project-one__single">
                                    <div className="project-one__img">
                                        <img src={publicUrl+"assets/images/project/project-1-4.jpg"} alt="" />
                                        <div className="project-one__content">
                                            <p className="project-one__sub-title">Our Best Projects</p>
                                            <h3 className="project-one__title"><Link to={process.env.PUBLIC_URL + `/project-details`}>History Of Tibet</Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                {/* Project One Single */}
                                <div className="project-one__single">
                                    <div className="project-one__img">
                                        <img src={publicUrl+"assets/images/project/project-1-5.jpg"} alt="" />
                                        <div className="project-one__content">
                                            <p className="project-one__sub-title">Our Best Projects</p>
                                            <h3 className="project-one__title"><Link to={process.env.PUBLIC_URL + `/project-details`}>Drought Information</Link></h3>
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