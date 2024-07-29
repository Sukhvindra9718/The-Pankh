import React from "react";

const TestimonialFour = () => {
    let publicUrl = process.env.PUBLIC_URL+'/'
    return (
        <>
            <section className="testimonials-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            {/* Testimonial One single */}
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__img">
                                    <img src={publicUrl+"assets/images/testimonial/testimonial-1-1.jpg"} alt=""/>
                                    <div className="testimonial-one__quote">
                                        <span className="fas fa-quote-left"></span>
                                    </div>
                                </div>
                                <p className="testimonial-one__text">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore aliqua.</p>
                                <div className="testimonial-one__client-info">
                                    <h4 className="testimonial-one__client-name">Karom boros</h4>
                                    <span className="testimonial-one__client-title">Founder</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            {/* Testimonial One single */}
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__img">
                                    <img src={publicUrl+"assets/images/testimonial/testimonial-1-2.jpg"} alt="" />
                                    <div className="testimonial-one__quote">
                                        <span className="fas fa-quote-left"></span>
                                    </div>
                                </div>
                                <p className="testimonial-one__text">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore aliqua.</p>
                                <div className="testimonial-one__client-info">
                                    <h4 className="testimonial-one__client-name">Sumi parvin</h4>
                                    <span className="testimonial-one__client-title">Volunteer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            {/* Testimonial One single */}
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__img">
                                    <img src={publicUrl+"assets/images/testimonial/testimonial-1-3.jpg"} alt="" />
                                    <div className="testimonial-one__quote">
                                        <span className="fas fa-quote-left"></span>
                                    </div>
                                </div>
                                <p className="testimonial-one__text">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore aliqua.</p>
                                <div className="testimonial-one__client-info">
                                    <h4 className="testimonial-one__client-name">Robi islam</h4>
                                    <span className="testimonial-one__client-title">Manager</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            {/* Testimonial One single */}
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__img">
                                    <img src={publicUrl+"assets/images/testimonial/testimonial-1-4.jpg"} alt="" />
                                    <div className="testimonial-one__quote">
                                        <span className="fas fa-quote-left"></span>
                                    </div>
                                </div>
                                <p className="testimonial-one__text">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore aliqua.</p>
                                <div className="testimonial-one__client-info">
                                    <h4 className="testimonial-one__client-name">Kevin coper</h4>
                                    <span className="testimonial-one__client-title">Manager</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                            {/* Testimonial One single */}
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__img">
                                    <img src={publicUrl+"assets/images/testimonial/testimonial-1-5.jpg"} alt="" />
                                    <div className="testimonial-one__quote">
                                        <span className="fas fa-quote-left"></span>
                                    </div>
                                </div>
                                <p className="testimonial-one__text">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore aliqua.</p>
                                <div className="testimonial-one__client-info">
                                    <h4 className="testimonial-one__client-name">Jeams bond</h4>
                                    <span className="testimonial-one__client-title">Manager</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                            {/* Testimonial One single */}
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__img">
                                    <img src={publicUrl+"assets/images/testimonial/testimonial-1-6.jpg"} alt="" />
                                    <div className="testimonial-one__quote">
                                        <span className="fas fa-quote-left"></span>
                                    </div>
                                </div>
                                <p className="testimonial-one__text">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore aliqua.</p>
                                <div className="testimonial-one__client-info">
                                    <h4 className="testimonial-one__client-name">Raile rosow</h4>
                                    <span className="testimonial-one__client-title">Manager</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonialFour;