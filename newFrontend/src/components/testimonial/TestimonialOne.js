import React from 'react';

export default class TestimonialOne extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".testimonial-one__carousel").length) {
            $(".testimonial-one__carousel").owlCarousel({
                loop: true,
                autoplay: true,
                margin: 30,
                nav: false,
                dots: false,
                smartSpeed: 500,
                autoplayTimeout: 10000,
                navText: ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    991: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>

                <section className="testimonial-one">
                    <div className="container">
                        <div className="owl-carousel owl-theme thm-owl__carousel testimonial-one__carousel">
                            {/* Testimonial One single */}
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__img">
                                    <img src={publicUrl+"assets/images/testimonial/testimonial-1-1.jpg"} alt="" />
                                    <div className="testimonial-one__quote">
                                        <span className="fas fa-quote-left"></span>
                                    </div>
                                </div>
                                <p className="testimonial-one__text">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore aliqua.</p>
                                <div className="testimonial-one__client-info">
                                    <h4 className="testimonial-one__client-name">Karom Boros</h4>
                                    <span className="testimonial-one__client-title">Founder</span>
                                </div>
                            </div>

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
                                    <h4 className="testimonial-one__client-name">Sumi Parvin</h4>
                                    <span className="testimonial-one__client-title">Volunteer</span>
                                </div>
                            </div>

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
                    </div>
                </section>
            </>
        )
    }
}