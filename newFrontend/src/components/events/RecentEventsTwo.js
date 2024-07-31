import React from 'react';

export default class RecentEventsTwo extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($('.up-comming-event-two').length) {
            $('.up-comming-event-two .tabs-button-box .tab-btn-item').on('click', function (e) {
              e.preventDefault();
              var target = $($(this).attr('data-tab'));
        
              if ($(target).hasClass('actve-tab')) {
                return false;
              } else {
                $('.up-comming-event-two .tabs-button-box .tab-btn-item').removeClass('active-btn-item');
                $(this).addClass('active-btn-item');
                $('.up-comming-event-two .tabs-content-box .tab-content-box-item').removeClass('tab-content-box-item-active');
                $(target).addClass('tab-content-box-item-active');
              }
            });
        }

    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="up-comming-event-two">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">Our Recent events</span>
                            <h2 className="section-title__title">We Best Popular To Join <br /> Of Recents.</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="up-comming-event-two__left">

                                    <div className="up-comming-event-two__top">
                                        <ul className="tabs-button-box list-unstyled up-comming-event-two__list">
                                            <li data-tab="#month-1" className="tab-btn-item active-btn-item">
                                                <p>Dec <span>2019</span></p>
                                            </li>
                                            <li data-tab="#month-2" className="tab-btn-item">
                                                <p>Jan <span>2020</span></p>
                                            </li>
                                            <li data-tab="#month-3" className="tab-btn-item">
                                                <p>Feb <span>2021</span></p>
                                            </li>
                                            <li data-tab="#month-4" className="tab-btn-item">
                                                <p>March <span>2022</span></p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="tabs-content-box">
                                        {/* Tab */}
                                        <div className="tab-content-box-item tab-content-box-item-active" id="month-1">
                                            <div className="up-comming-event-two__bottom">
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Lorem ipsum dollar sit amet</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>In Sanfransico, CA</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-back-in-time"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>08..00-16.00</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>18</p>
                                                        <span>June</span>
                                                    </div>
                                                </div>
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Lorem ipsum dollar sit amet</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>In Sanfransico, CA</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-back-in-time"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>08..00-16.00</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>18</p>
                                                        <span>June</span>
                                                    </div>
                                                </div>
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Lorem ipsum dollar sit amet</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>In Sanfransico, CA</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-back-in-time"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>08..00-16.00</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>18</p>
                                                        <span>June</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Tab */}
                                        <div className="tab-content-box-item" id="month-2">
                                            <div className="up-comming-event-two__bottom">
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Lorem ipsum dollar sit amet</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>In Sanfransico, CA</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-back-in-time"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>08..00-16.00</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>18</p>
                                                        <span>June</span>
                                                    </div>
                                                </div>
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Lorem ipsum dollar sit amet</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>In Sanfransico, CA</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-back-in-time"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>08..00-16.00</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>18</p>
                                                        <span>June</span>
                                                    </div>
                                                </div>
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Lorem ipsum dollar sit amet</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>In Sanfransico, CA</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-back-in-time"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>08..00-16.00</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>18</p>
                                                        <span>June</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Tab */}
                                        <div className="tab-content-box-item" id="month-3">
                                            <div className="up-comming-event-two__bottom">
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Lorem ipsum dollar sit amet</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>In Sanfransico, CA</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-back-in-time"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>08..00-16.00</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>18</p>
                                                        <span>June</span>
                                                    </div>
                                                </div>
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Lorem ipsum dollar sit amet</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>In Sanfransico, CA</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-back-in-time"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>08..00-16.00</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>18</p>
                                                        <span>June</span>
                                                    </div>
                                                </div>
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Lorem ipsum dollar sit amet</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>In Sanfransico, CA</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-back-in-time"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>08..00-16.00</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>18</p>
                                                        <span>June</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Tab */}
                                        <div className="tab-content-box-item" id="month-4">
                                            <div className="up-comming-event-two__bottom">
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Lorem ipsum dollar sit amet</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>In Sanfransico, CA</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-back-in-time"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>08..00-16.00</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>18</p>
                                                        <span>June</span>
                                                    </div>
                                                </div>
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Lorem ipsum dollar sit amet</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>In Sanfransico, CA</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-back-in-time"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>08..00-16.00</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>18</p>
                                                        <span>June</span>
                                                    </div>
                                                </div>
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Lorem ipsum dollar sit amet</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>In Sanfransico, CA</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-back-in-time"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>08..00-16.00</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>18</p>
                                                        <span>June</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="up-comming-event-two__right">
                                    <div className="up-comming-event-two__img">
                                        <img src={publicUrl+"assets/images/resources/up-comming-event-two-img.jpg"} alt="" />
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