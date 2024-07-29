import React from 'react';

export default class TestimonialTwo extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".testimonial-two__carousel").length) {
            $(".testimonial-two__carousel").owlCarousel({
                loop: true,
                autoplay: true,
                margin: 30,
                nav: true,
                dots: false,
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
                        items: 2
                    },
                    1200: {
                        items: 2
                    }
                }
            });
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="testimonial-two">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">Our Customers Feedbacks</span>
                            <h2 className="section-title__title">What Our Customers Are Talking <br /> About Our Services</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="owl-carousel owl-theme thm-owl__carousel testimonial-two__carousel">
                                    {/* Testimonial Two single */}
                                    <div className="testimonial-two__single">
                                        <div className="testimonial-two__img">
                                            <img src={publicUrl+"assets/images/testimonial/testimonial-2-1.jpg"} alt="" />
                                            <div className="testimonial-two__quote">
                                                <span className="icon-quote"></span>
                                            </div>
                                        </div>
                                        <div className="testimonial-two__content">
                                            <div className="testimonial-two__star">
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star clr-gray"></span>
                                            </div>
                                            <p className="testimonial-two__text">Lorem ipsum dolor sit amet,elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore aliqu</p>
                                            <div className="testimonial-two__client-info">
                                                <h4 className="testimonial-two__client-name">Kavin martin</h4>
                                                <p className="testimonial-two__client-title">Customer</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Two single */}
                                    <div className="testimonial-two__single">
                                        <div className="testimonial-two__img">
                                            <img src={publicUrl+"assets/images/testimonial/testimonial-2-2.jpg"} alt="" />
                                            <div className="testimonial-two__quote">
                                                <span className="icon-quote"></span>
                                            </div>
                                        </div>
                                        <div className="testimonial-two__content">
                                            <div className="testimonial-two__star">
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star clr-gray"></span>
                                            </div>
                                            <p className="testimonial-two__text">Lorem ipsum dolor sit amet,elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore aliqu</p>
                                            <div className="testimonial-two__client-info">
                                                <h4 className="testimonial-two__client-name">Sarha albart</h4>
                                                <p className="testimonial-two__client-title">Customer</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Two single */}
                                    <div className="testimonial-two__single">
                                        <div className="testimonial-two__img">
                                            <img src={publicUrl+"assets/images/testimonial/testimonial-2-3.jpg"} alt="" />
                                            <div className="testimonial-two__quote">
                                                <span className="icon-quote"></span>
                                            </div>
                                        </div>
                                        <div className="testimonial-two__content">
                                            <div className="testimonial-two__star">
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star clr-gray"></span>
                                            </div>
                                            <p className="testimonial-two__text">Lorem ipsum dolor sit amet,elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore aliqu</p>
                                            <div className="testimonial-two__client-info">
                                                <h4 className="testimonial-two__client-name">David conway</h4>
                                                <p className="testimonial-two__client-title">Customer</p>
                                            </div>
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