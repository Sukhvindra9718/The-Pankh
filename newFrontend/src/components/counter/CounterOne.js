import React from 'react';

export default class CounterOne extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".odometer").length) {
            var odo = $(".odometer");
            odo.each(function () {
              $(this).appear(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
              });
            });
        }
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="counter-one">
                    <div className="counter-one-bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/counter-one-bg.jpg)'}}></div>
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">Our Counter Now</span>
                            <h2 className="section-title__title">We Popular To Provide <br /> Years Experience.</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                                {/* Counter One Single */}
                                <div className="counter-one__single">
                                    <div className="counter-one__content">
                                        <h3 className="odometer" data-count="725">00</h3>
                                        <span className="counter-one__letter">+</span>
                                        <p className="counter-one__text">Start Donating</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                                {/* Counter One Single */}
                                <div className="counter-one__single">
                                    <div className="counter-one__content">
                                        <h3 className="odometer" data-count="965">00</h3>
                                        <span className="counter-one__letter">+</span>
                                        <p className="counter-one__text">Become Volunteer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                                {/* Counter One Single */}
                                <div className="counter-one__single">
                                    <div className="counter-one__content">
                                        <h3 className="odometer" data-count="85">00</h3>
                                        <span className="counter-one__letter">K+</span>
                                        <p className="counter-one__text">Quick Fundraise</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
                                {/* Counter One Single */}
                                <div className="counter-one__single">
                                    <div className="counter-one__content">
                                        <h3 className="odometer" data-count="1954">00</h3>
                                        <span className="counter-one__letter">+</span>
                                        <p className="counter-one__text">Pioneer throughs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="counter-one__btn-box text-center">
                                    <a href="about.html" className="thm-btn counter-one__btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}