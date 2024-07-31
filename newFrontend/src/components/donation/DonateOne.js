import React from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

export default class DonateOne extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($("#donate-amount__predefined").length) {
            let donateInput = $("#donate-amount");
            $("#donate-amount__predefined")
              .find("li")
              .on("click", function (e) {
                e.preventDefault();
                let amount = $(this).find("a").text();
                donateInput.val(amount);
                $("#donate-amount__predefined").find("li").removeClass("active");
                $(this).addClass("active");
            });
        }

        if ($(".progress-levels .progress-box .bar-fill").length) {
            $(".progress-box .bar-fill").each(
              function () {
                $(".progress-box .bar-fill").appear(function () {
                  var progressWidth = $(this).attr("data-percent");
                  $(this).css("width", progressWidth + "%");
                });
              }, {
                accY: 0
              }
            );
        }

        if ($(".count-bar").length) {
            $(".count-bar").appear(
              function () {
                var el = $(this);
                var percent = el.data("percent");
                $(el).css("width", percent).addClass("counted");
              }, {
                accY: -50
              }
            );
        }

        if ($(".count-box").length) {
            $(".count-box").appear(
              function () {
                var $t = $(this),
                  n = $t.find(".count-text").attr("data-stop"),
                  r = parseInt($t.find(".count-text").attr("data-speed"), 10);
        
                if (!$t.hasClass("counted")) {
                  $t.addClass("counted");
                  $({
                    countNum: $t.find(".count-text").text()
                  }).animate({
                    countNum: n
                  }, {
                    duration: r,
                    easing: "linear",
                    step: function () {
                      $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function () {
                      $t.find(".count-text").text(this.countNum);
                    }
                  });
                }
              }, {
                accY: 0
              }
            );
        }

        if ($("#datepicker").length) {
            $("#datepicker").datepicker();
        }

        if ($("#datepicker2").length) {
            $("#datepicker2").datepicker();
        }
        
        if ($("#datepicker-inline").length) {
        $("#datepicker-inline").datepicker();
        }
    
        $('input[name="time"]').ptTimeSelect();
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="donate-now">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="donate-now__left">
                                    <div className="donate-now__enter-donation">
                                        <h3 className="donate-now__title">Enter Your Donation</h3>
                                        <div className="donate-now__enter-donation-input">
                                            <select  className="selectpicker">
                                                <option>$</option>
                                                <option>₤</option>
                                                <option>¥</option>
                                            </select>
                                            <input type="text" name="donation-money" placeholder="Enter amount" />
                                        </div>
                                    </div>
                                    <div className="donate-now__personal-info-box">
                                        <h3 className="donate-now__title">Personal Info</h3>
                                        <form className="donate-now__personal-info-form">
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <div className="donate-now__personal-info-input">
                                                        <input type="text" placeholder="First Name" name="name" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="donate-now__personal-info-input">
                                                        <input type="text" placeholder="Last Name" name="last-name" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="donate-now__personal-info-input">
                                                        <input type="email" placeholder="Email Address" name="email" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="donate-now__personal-info-input">
                                                        <input type="text" placeholder="Phone Number" name="phone" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="donate-now__personal-info-input">
                                                        <input type="text" placeholder="Address" name="Address" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="donate-now__personal-info-input">
                                                        <Form.Select className="selectpicker" aria-label="Default select example">
                                                            <option selected>Country</option>
                                                            <option value="1">USA</option>
                                                            <option value="2">England</option>
                                                            <option value="3">Australia</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div
                                                        className="donate-now__personal-info-input donate-now__personal-info-message-box">
                                                        <textarea name="message" placeholder="Write a Comment"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="donate-now__payment-info">
                                        <h3 className="donate-now__title">Payment Info</h3>
                                        <form className="donate-now__payment-info-form">
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <div className="donate-now__payment-info-input">
                                                        <input type="text" placeholder="Card Number" name="number" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="donate-now__payment-info-input">
                                                        <input type="text" placeholder="MM / YY" name="date" id="datepicker" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="donate-now__payment-info-input">
                                                        <input type="text" placeholder="Card Code ( CVC )" name="code" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="donate-now__payment-info-input">
                                                        <input type="text" placeholder="Billing Address" name="Billing" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="donate-now__payment-info-input">
                                                        <input type="text" placeholder="City" name="City" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="donate-now__payment-info-input">
                                                        <Form.Select className="selectpicker" aria-label="Default select example">
                                                            <option selected>Country</option>
                                                            <option value="1">USA</option>
                                                            <option value="2">England</option>
                                                            <option value="3">Australia</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="donate-now__payment-info-btn-box">
                                                <button type="submit" className="thm-btn donate-now__payment-info-btn">Donate now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="donate-now__right">
                                    <div className="donate-now__causes">
                                        <div className="donate-now__causes-img">
                                            <img src={publicUrl+"assets/images/resources/donate-now-causes-img.jpg"} alt="" />
                                        </div>
                                        <div className="donate-now__causes-content-box">
                                            <div className="donate-now__causes-content">
                                                <h3 className="donate-now__causes-title">
                                                    <Link to={process.env.PUBLIC_URL + `/donation-details`}>Feeding the Hungry in South Africa</Link>
                                                </h3>
                                                <p className="donate-now__causes-text">Aellentesque porttitor lacus quis enim varius
                                                    sed efficitur...</p>
                                            </div>
                                            <div className="donate-now__progress">
                                                <div className="bar">
                                                    <div className="bar-inner count-bar" data-percent="36%">
                                                        <div className="count-text">36%</div>
                                                    </div>
                                                </div>
                                                <div className="donate-now__goals">
                                                    <p><span>$25,270</span> Raised</p>
                                                    <p><span>$30,000</span> Goal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="donation-details__organizer">
                                        <div className="donation-details__organizer-img">
                                            <img src={publicUrl+"assets/images/resources/donation-details-organizer-img.jpg"} alt="" />
                                        </div>
                                        <div className="donation-details__organizer-content">
                                            <p className="donation-details__organizer-date">Created 20 Oct, 2022</p>
                                            <p className="donation-details__organizer-title">Organizer:</p>
                                            <p className="donation-details__organizer-name">Jessica Smith</p>
                                            <ul className="list-unstyled donation-details__organizer-list">
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-tag"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>Education</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-map-marker-alt"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>Westwood, Canada</p>
                                                    </div>
                                                </li>
                                            </ul>
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