import React from 'react';

export default class CounterTwo extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($('.time-countdown').length) {
          $('.time-countdown').each(function () {
            var Self = $(this);
            var countDate = Self.data('countdown-time'); // getting date
      
            Self.countdown(countDate, function (event) {
              $(this).html('<h2>' + event.strftime('%D : %H : %M : %S') + '</h2>');
            });
          });
        };
      
      
        if ($('.time-countdown-two').length) {
          $('.time-countdown-two').each(function () {
            var Self = $(this);
            var countDate = Self.data('countdown-time'); // getting date
      
            Self.countdown(countDate, function (event) {
              $(this).html('<li> <div className="box"> <span className="days">' + event.strftime('%D') + '</span> <span className="timeRef">days</span> </div> </li> <li> <div className="box"> <span className="hours">' + event.strftime('%H') + '</span> <span className="timeRef clr-1">hours</span> </div> </li> <li> <div className="box"> <span className="minutes">' + event.strftime('%M') + '</span> <span className="timeRef clr-2">min</span> </div> </li> <li> <div className="box"> <span className="seconds">' + event.strftime('%S') + '</span> <span className="timeRef clr-3">sec</span> </div> </li>');
            });
          });
        };      
          
    }
    render(){
        return (
            <>
                <section className="up-comming-events">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="up-comming-events__inner wow fadeInUp" data-wow-delay="100ms">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="up-comming-events__left">
                                                <div className="up-comming-events__content">
                                                    <h3 className="up-comming-events__title">Event for how to become good volunteer</h3>
                                                    <ul className="list-unstyled up-comming-events__details">
                                                        <li>
                                                            <p> <span className="icon-user"></span> Jhon Smith</p>
                                                        </li>
                                                        <li>
                                                            <p> <span className="icon-calendar-1"></span> Sunday, June 12, 2022 at
                                                                10.100 pm
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p> <span className="icon-place"></span> New York, NY</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="up-comming-events__right">
                                                <div className="timer-box">
                                                    <div className="countdown-timer">
                                                        <div className="default-coundown">
                                                            <div className="box">
                                                                <div className="countdown time-countdown-two"
                                                                    data-countdown-time="2023/03/01">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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